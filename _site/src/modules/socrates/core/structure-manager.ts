/**
 * Structure Manager - Core engine for Research Brief Generation
 * 
 * Transforms teacher input into structured AI prompts and coordinates
 * the entire brief generation pipeline for Socrates Research Brief Generator.
 */

import { TemplateLibrary, PracticeTemplate } from './template-library';
import { PromptBuilder, AIPrompt, VoiceConfiguration } from './prompt-builder';
import { 
  TeacherInput, 
  ResearchBrief, 
  ChunkAllocation, 
  ValidationResult,
  ProcessingStatus,
  ActivityChunk,
  TeacherPreparation,
  AssessmentRubric,
  BriefMetadata,
  ProcessingStage,
  ValidationError,
  ValidationWarning
} from '../types/index';

export class ResearchBriefGenerator {
  private templateLibrary: TemplateLibrary;
  private promptBuilder: PromptBuilder;
  private currentStatus: ProcessingStatus;

  constructor() {
    this.templateLibrary = new TemplateLibrary();
    this.promptBuilder = new PromptBuilder();
    this.currentStatus = {
      stage: 'input-validation',
      progress: 0,
      message: 'Initializing...'
    };
  }

  /**
   * Main entry point - Generate complete research brief from teacher input
   */
  async generateResearchBrief(input: TeacherInput): Promise<ResearchBrief> {
    try {
      this.updateStatus('input-validation', 10, 'Validating teacher input...');
      
      // 1. Validate input
      const validation = this.validateInput(input);
      if (!validation.valid) {
        throw new Error(`Input validation failed: ${validation.errors.map(e => e.message).join(', ')}`);
      }

      this.updateStatus('template-selection', 25, 'Selecting appropriate templates...');
      
      // 2. Select templates based on NGSS practices
      const templates = await this.templateLibrary.selectTemplates(input.selectedPractices);
      if (templates.length === 0) {
        throw new Error('No templates found for selected practices');
      }

      this.updateStatus('chunk-calculation', 40, 'Calculating optimal chunk allocation...');
      
      // 3. Calculate chunk allocation
      const chunkAllocation = this.calculateChunkAllocation(templates, input.duration);

      this.updateStatus('prompt-generation', 60, 'Generating AI prompt...');
      
      // 4. Generate AI prompt
      const aiPrompt = await this.promptBuilder.generatePrompt(
        input.topic,
        input.grade,
        input.ngssStandards,
        templates,
        input.voicePreferences,
        input.duration
      );

      this.updateStatus('ai-processing', 80, 'AI prompt ready for processing...');
      
      // 5. Create structured research brief (to be processed by AI)
      const researchBrief = this.createResearchBriefStructure(
        input,
        templates,
        chunkAllocation,
        aiPrompt
      );

      this.updateStatus('complete', 100, 'Research brief generated successfully!');
      
      return researchBrief;

    } catch (error) {
      this.updateStatus('error', 0, `Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      throw error;
    }
  }

  /**
   * Generate AI prompt only (for external processing)
   */
  async generateAIPrompt(input: TeacherInput): Promise<AIPrompt> {
    this.updateStatus('input-validation', 20, 'Validating input for prompt generation...');
    
    const validation = this.validateInput(input);
    if (!validation.valid) {
      throw new Error(`Input validation failed: ${validation.errors.map(e => e.message).join(', ')}`);
    }

    this.updateStatus('template-selection', 50, 'Selecting templates...');
    const templates = await this.templateLibrary.selectTemplates(input.selectedPractices);

    this.updateStatus('prompt-generation', 100, 'Generating AI prompt...');
    return await this.promptBuilder.generatePrompt(
      input.topic,
      input.grade,
      input.ngssStandards,
      templates,
      input.voicePreferences,
      input.duration
    );
  }

  /**
   * Validate teacher input
   */
  private validateInput(input: TeacherInput): ValidationResult {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];

    // Required fields validation
    if (!input.topic || input.topic.trim().length < 5) {
      errors.push({
        field: 'topic',
        message: 'Topic must be at least 5 characters long',
        severity: 'error'
      });
    }

    if (!input.grade || !['6', '7', '8', '9', '10', '11', '12', '6-8', '9-12'].includes(input.grade)) {
      errors.push({
        field: 'grade',
        message: 'Valid grade level is required',
        severity: 'error'
      });
    }

    if (!input.duration || input.duration < 15 || input.duration > 300) {
      errors.push({
        field: 'duration',
        message: 'Duration must be between 15 and 300 minutes',
        severity: 'error'
      });
    }

    if (!input.selectedPractices || input.selectedPractices.length === 0) {
      errors.push({
        field: 'selectedPractices',
        message: 'At least one NGSS practice must be selected',
        severity: 'error'
      });
    }

    // Voice balance validation
    const voiceTotal = Object.values(input.voicePreferences || {}).reduce((sum, val) => sum + val, 0);
    if (Math.abs(voiceTotal - 100) > 1) {
      warnings.push({
        field: 'voicePreferences',
        message: 'Voice percentages should sum to 100%',
        suggestion: 'Adjust voice balance to total 100%'
      });
    }

    // Duration warnings
    if (input.duration && input.duration > 180) {
      warnings.push({
        field: 'duration',
        message: 'Sessions longer than 3 hours may be difficult to manage',
        suggestion: 'Consider breaking into multiple sessions'
      });
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Calculate optimal chunk allocation
   */
  private calculateChunkAllocation(templates: PracticeTemplate[], totalDuration: number): ChunkAllocation[] {
    const chunks: ChunkAllocation[] = [];
    const chunkDuration = 15; // Standard 15-minute chunks
    const totalChunks = Math.ceil(totalDuration / chunkDuration);
    
    // Calculate template requirements
    const totalTemplateChunks = templates.reduce((sum, template) => sum + template.chunkEstimate, 0);
    const scaleFactor = totalChunks / totalTemplateChunks;
    
    let chunkNumber = 1;
    
    for (const template of templates) {
      const allocatedChunks = Math.max(1, Math.round(template.chunkEstimate * scaleFactor));
      
      for (let i = 0; i < allocatedChunks; i++) {
        chunks.push({
          chunkNumber: chunkNumber++,
          duration: chunkDuration,
          activity: this.generateActivityName(template, i, allocatedChunks),
          practiceId: template.practiceId,
          voiceEmphasis: this.selectVoicesForPractice(template.practiceId),
          transitionNotes: i === allocatedChunks - 1 ? 
            `Transition to ${this.getNextTemplate(template, templates)?.name || 'next activity'}` : 
            undefined
        });
      }
    }
    
    // Adjust last chunk to match exact duration
    if (chunks.length > 0) {
      const lastChunk = chunks[chunks.length - 1];
      const totalAllocatedTime = (chunks.length - 1) * chunkDuration;
      const remainingTime = totalDuration - totalAllocatedTime;
      lastChunk.duration = Math.max(5, remainingTime); // Minimum 5 minutes
    }
    
    return chunks;
  }

  /**
   * Generate activity name for chunk
   */
  private generateActivityName(template: PracticeTemplate, chunkIndex: number, totalChunks: number): string {
    if (totalChunks === 1) {
      return template.name;
    }
    
    const phase = chunkIndex === 0 ? 'Introduction' :
                  chunkIndex === totalChunks - 1 ? 'Application' : 
                  'Development';
    
    return `${template.name} - ${phase}`;
  }

  /**
   * Select voices for specific practice
   */
  private selectVoicesForPractice(practiceId: string): Array<'socrates' | 'burke' | 'sagan' | 'feynman'> {
    const voiceMap: Record<string, Array<'socrates' | 'burke' | 'sagan' | 'feynman'>> = {
      'asking-questions': ['socrates', 'sagan'],
      'developing-models': ['feynman', 'burke'],
      'planning-investigations': ['socrates', 'feynman'],
      'analyzing-data': ['feynman', 'socrates'],
      'using-mathematics': ['feynman'],
      'constructing-explanations': ['burke', 'feynman'],
      'engaging-argument': ['socrates', 'burke'],
      'obtaining-information': ['burke', 'sagan']
    };

    return voiceMap[practiceId] || ['feynman'];
  }

  /**
   * Get next template in sequence
   */
  private getNextTemplate(currentTemplate: PracticeTemplate, allTemplates: PracticeTemplate[]): PracticeTemplate | undefined {
    const currentIndex = allTemplates.findIndex(t => t.practiceId === currentTemplate.practiceId);
    return currentIndex < allTemplates.length - 1 ? allTemplates[currentIndex + 1] : undefined;
  }

  /**
   * Create structured research brief
   */
  private createResearchBriefStructure(
    input: TeacherInput,
    templates: PracticeTemplate[],
    chunkAllocation: ChunkAllocation[],
    aiPrompt: AIPrompt
  ): ResearchBrief {
    
    const metadata: BriefMetadata = {
      version: '1.0.0',
      generatedBy: 'Socrates Research Brief Generator',
      aiModel: aiPrompt.model,
      templateIds: templates.map(t => t.practiceId),
      estimatedPrepTime: this.calculatePrepTime(templates),
      difficulty: this.determineDifficulty(input.grade, templates),
      tags: this.generateTags(input, templates)
    };

    // Create placeholder chunks that AI will fill in
    const activityChunks: ActivityChunk[] = chunkAllocation.map(chunk => ({
      number: chunk.chunkNumber,
      duration: chunk.duration,
      title: chunk.activity,
      objective: `[To be generated by AI for ${chunk.practiceId}]`,
      activityType: chunk.practiceId,
      teacherGuidance: `[AI will provide specific guidance for ${chunk.activity}]`,
      studentActions: `[AI will define student activities for chunk ${chunk.chunkNumber}]`,
      voiceEmphasis: chunk.voiceEmphasis.join(', '),
      assessmentNotes: `[AI will specify assessment strategies for ${chunk.practiceId}]`,
      materialsNeeded: [],
      differentiationTips: '[AI will provide differentiation strategies]',
      timeFlexibility: 'flexible' as const
    }));

    return {
      title: `${input.topic} - Research Brief`,
      topic: input.topic,
      duration: input.duration,
      grade: input.grade,
      generatedAt: new Date().toISOString(),
      ngssAlignment: {
        practices: input.selectedPractices,
        disciplinaryCoreIdeas: input.ngssStandards.filter(std => std.includes('DCI')),
        crosscuttingConcepts: input.ngssStandards.filter(std => std.includes('CCC')),
        performanceExpectations: input.ngssStandards.filter(std => std.includes('PE'))
      },
      chunks: activityChunks,
      teacherPrep: {
        advancePreparation: '[AI will provide preparation instructions]',
        materialsList: [],
        safetyConsiderations: '[AI will identify safety requirements]',
        commonMisconceptions: templates.flatMap(t => t.scaffolding.commonMisconceptions || [])
      },
      extensionActivities: [],
      assessmentRubric: {
        criteria: templates.flatMap(t => t.assessmentCriteria.primaryFocus),
        performanceLevels: ['Exemplary', 'Proficient', 'Developing', 'Beginning']
      },
      voiceConfiguration: input.voicePreferences,
      metadata
    };
  }

  /**
   * Calculate estimated preparation time
   */
  private calculatePrepTime(templates: PracticeTemplate[]): number {
    const baseTime = 30; // 30 minutes base prep
    const templateTime = templates.length * 15; // 15 minutes per template
    return baseTime + templateTime;
  }

  /**
   * Determine difficulty based on grade and templates
   */
  private determineDifficulty(grade: string, templates: PracticeTemplate[]): 'beginner' | 'intermediate' | 'advanced' {
    const gradeNum = parseInt(grade.split('-')[0]);
    const complexTemplates = templates.filter(t => t.flexibilityRating === 'low').length;
    
    if (gradeNum <= 8 && complexTemplates <= 1) return 'beginner';
    if (gradeNum >= 11 || complexTemplates >= 3) return 'advanced';
    return 'intermediate';
  }

  /**
   * Generate tags for the brief
   */
  private generateTags(input: TeacherInput, templates: PracticeTemplate[]): string[] {
    const tags = ['physics', `grade-${input.grade}`, ...input.selectedPractices];
    
    if (input.duration <= 45) tags.push('short-session');
    if (input.duration >= 180) tags.push('extended-session');
    
    const investigationTemplates = templates.filter(t => t.type.includes('investigation'));
    if (investigationTemplates.length > 0) tags.push('hands-on');
    
    return [...new Set(tags)]; // Remove duplicates
  }

  /**
   * Update processing status
   */
  private updateStatus(stage: ProcessingStage, progress: number, message: string): void {
    this.currentStatus = {
      stage,
      progress,
      message,
      estimatedTimeRemaining: stage === 'complete' ? 0 : Math.max(0, (100 - progress) * 2) // Rough estimate
    };
  }

  /**
   * Get current processing status
   */
  getStatus(): ProcessingStatus {
    return { ...this.currentStatus };
  }

  /**
   * Export AI prompt as text for external use
   */
  async exportPromptForAI(input: TeacherInput, model: 'claude' | 'gpt' | 'generic' = 'claude'): Promise<string> {
    const aiPrompt = await this.generateAIPrompt(input);
    const modelSpecificPrompt = await this.promptBuilder.generateModelSpecificPrompt(aiPrompt, model);
    
    return `SYSTEM MESSAGE:
${modelSpecificPrompt.systemMessage}

USER PROMPT:
${modelSpecificPrompt.userPrompt}

SETTINGS:
- Model: ${modelSpecificPrompt.model}
- Temperature: ${modelSpecificPrompt.temperature}
- Max Tokens: ${modelSpecificPrompt.maxTokens}

EXPECTED OUTPUT:
${modelSpecificPrompt.expectedOutputFormat}`;
  }
}
