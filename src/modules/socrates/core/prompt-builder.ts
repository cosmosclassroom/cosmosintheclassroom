/**
 * Prompt Builder - AI Prompt Generation Engine
 * 
 * Transforms teacher inputs and selected templates into optimized prompts
 * for Claude, GPT, and other AI models to generate research briefs.
 */

import { PracticeTemplate, ElementScaffolding } from './template-library';

export interface AIPrompt {
  model: 'claude' | 'gpt' | 'generic';
  systemMessage: string;
  userPrompt: string;
  temperature: number;
  maxTokens: number;
  expectedOutputFormat: string;
  chunkAllocation: ChunkAllocation[];
}

export interface ChunkAllocation {
  chunkNumber: number;
  duration: number; // minutes
  activity: string;
  practiceId: string;
  voiceEmphasis: VoiceType[];
  transitionNotes?: string;
}

export interface VoiceConfiguration {
  socrates: number; // questioning percentage
  burke: number;    // storytelling percentage  
  sagan: number;    // wonder percentage
  feynman: number;  // playfulness percentage
}

export type VoiceType = 'socrates' | 'burke' | 'sagan' | 'feynman';

export class PromptBuilder {
  private voiceDescriptions = {
    socrates: "Ask probing questions that lead students to discover concepts themselves",
    burke: "Connect learning to human stories, historical context, and narrative structure", 
    sagan: "Inspire awe and wonder about the natural world and our place in it",
    feynman: "Make complex ideas simple through playful analogies and clear explanations"
  };

  /**
   * Generate AI prompt for research brief creation
   */
  async generatePrompt(
    topic: string,
    grade: string,
    ngssStandards: string[],
    templates: PracticeTemplate[],
    voiceConfig: VoiceConfiguration,
    totalDuration: number
  ): Promise<AIPrompt> {
    
    const chunks = this.calculateChunkAllocation(templates, totalDuration);
    const systemMessage = this.buildSystemMessage(grade, ngssStandards, voiceConfig);
    const userPrompt = this.buildUserPrompt(topic, templates, chunks, voiceConfig);
    
    return {
      model: 'claude',
      systemMessage,
      userPrompt,
      temperature: 0.7,
      maxTokens: 4000,
      expectedOutputFormat: 'structured_json',
      chunkAllocation: chunks
    };
  }

  /**
   * Build system message for AI context
   */
  private buildSystemMessage(
    grade: string,
    ngssStandards: string[],
    voiceConfig: VoiceConfiguration
  ): string {
    const voiceInstructions = this.buildVoiceInstructions(voiceConfig);
    
    return `You are an expert physics curriculum designer creating research briefs for ${grade} students.

CONTEXT:
- Target Grade: ${grade}
- NGSS Standards: ${ngssStandards.join(', ')}
- Educational Philosophy: 3-dimensional learning (SEPs, DCIs, CCCs)

VOICE SYNTHESIS:
${voiceInstructions}

OUTPUT REQUIREMENTS:
- Create a detailed research brief with 15-minute activity chunks
- Each chunk should specify learning objectives, activities, and assessment points
- Include specific teacher guidance for facilitating each segment
- Provide clear connections between activities and NGSS standards
- Suggest modifications for different learning styles and abilities

FORMAT:
Return a structured JSON object with the exact schema specified in the user prompt.`;
  }

  /**
   * Build user prompt with specific instructions
   */
  private buildUserPrompt(
    topic: string,
    templates: PracticeTemplate[],
    chunks: ChunkAllocation[],
    voiceConfig: VoiceConfiguration
  ): string {
    const templateDescriptions = templates.map(t => 
      `${t.name}: ${t.scaffolding.openingPrompt}`
    ).join('\n');

    const chunkBreakdown = chunks.map(c => 
      `Chunk ${c.chunkNumber} (${c.duration} min): ${c.activity} [${c.practiceId}]`
    ).join('\n');

    return `Create a research brief for the topic: "${topic}"

SELECTED TEMPLATES:
${templateDescriptions}

CHUNK ALLOCATION:
${chunkBreakdown}

VOICE BALANCE:
- Socrates (questioning): ${voiceConfig.socrates}%
- Burke (storytelling): ${voiceConfig.burke}%
- Sagan (wonder): ${voiceConfig.sagan}%
- Feynman (playfulness): ${voiceConfig.feynman}%

REQUIRED JSON SCHEMA:
{
  "title": "string",
  "topic": "string",
  "duration": "number (total minutes)",
  "ngss_alignment": {
    "practices": ["string"],
    "disciplinary_core_ideas": ["string"],
    "crosscutting_concepts": ["string"]
  },
  "chunks": [
    {
      "number": "number",
      "duration": "number",
      "title": "string", 
      "objective": "string",
      "activity_type": "string",
      "teacher_guidance": "string",
      "student_actions": "string",
      "voice_emphasis": "string",
      "assessment_notes": "string",
      "materials_needed": ["string"],
      "differentiation_tips": "string"
    }
  ],
  "teacher_prep": {
    "advance_preparation": "string",
    "materials_list": ["string"],
    "safety_considerations": "string",
    "common_misconceptions": ["string"]
  },
  "extension_activities": ["string"],
  "assessment_rubric": {
    "criteria": ["string"],
    "performance_levels": ["string"]
  }
}

Generate a comprehensive research brief following this exact schema.`;
  }

  /**
   * Calculate optimal chunk allocation based on templates and time
   */
  private calculateChunkAllocation(
    templates: PracticeTemplate[],
    totalDuration: number
  ): ChunkAllocation[] {
    const totalChunks = Math.ceil(totalDuration / 15);
    const templateChunks = templates.reduce((sum, t) => sum + t.chunkEstimate, 0);
    
    // Scale if needed
    const scaleFactor = totalChunks / templateChunks;
    const chunks: ChunkAllocation[] = [];
    let chunkNumber = 1;

    for (const template of templates) {
      const allocatedChunks = Math.max(1, Math.round(template.chunkEstimate * scaleFactor));
      
      for (let i = 0; i < allocatedChunks; i++) {
        chunks.push({
          chunkNumber: chunkNumber++,
          duration: 15,
          activity: this.getActivityName(template, i, allocatedChunks),
          practiceId: template.practiceId,
          voiceEmphasis: this.selectVoicesForPractice(template.practiceId),
          transitionNotes: i === allocatedChunks - 1 ? 
            "Prepare transition to next practice" : undefined
        });
      }
    }

    return chunks;
  }

  /**
   * Get descriptive activity name for chunk
   */
  private getActivityName(template: PracticeTemplate, chunkIndex: number, totalChunks: number): string {
    if (totalChunks === 1) {
      return template.name;
    }
    
    const phases = ['Introduction', 'Development', 'Application', 'Synthesis'];
    const phaseIndex = Math.floor((chunkIndex / totalChunks) * phases.length);
    return `${template.name} - ${phases[phaseIndex]}`;
  }

  /**
   * Select appropriate voices for each practice
   */
  private selectVoicesForPractice(practiceId: string): VoiceType[] {
    const voiceMap: Record<string, VoiceType[]> = {
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
   * Build voice instruction text
   */
  private buildVoiceInstructions(voiceConfig: VoiceConfiguration): string {
    const instructions: string[] = [];
    
    Object.entries(voiceConfig).forEach(([voice, percentage]) => {
      if (percentage > 0) {
        const description = this.voiceDescriptions[voice as VoiceType];
        instructions.push(`${voice.toUpperCase()} (${percentage}%): ${description}`);
      }
    });

    return instructions.join('\n');
  }

  /**
   * Generate prompt for specific AI model
   */
  async generateModelSpecificPrompt(
    basePrompt: AIPrompt,
    model: 'claude' | 'gpt' | 'generic'
  ): Promise<AIPrompt> {
    switch (model) {
      case 'claude':
        return {
          ...basePrompt,
          model: 'claude',
          systemMessage: `${basePrompt.systemMessage}\n\nIMPORTANT: You are Claude, an AI assistant created by Anthropic. Be helpful, harmless, and honest in your curriculum design.`,
          temperature: 0.7
        };
        
      case 'gpt':
        return {
          ...basePrompt,
          model: 'gpt',
          systemMessage: `${basePrompt.systemMessage}\n\nIMPORTANT: Generate creative and engaging curriculum content while maintaining educational rigor.`,
          temperature: 0.8
        };
        
      default:
        return basePrompt;
    }
  }

  /**
   * Generate follow-up prompts for refinement
   */
  generateRefinementPrompts(originalPrompt: AIPrompt): string[] {
    return [
      "Please review the research brief and suggest 3 specific improvements for student engagement.",
      "Identify potential timing issues and provide alternative pacing suggestions.",
      "Suggest modifications for English Language Learners and students with learning differences.",
      "Provide additional assessment strategies aligned with the learning objectives.",
      "Recommend technology integration opportunities that enhance the learning experience."
    ];
  }

  /**
   * Validate prompt output format
   */
  validatePromptStructure(prompt: AIPrompt): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!prompt.systemMessage || prompt.systemMessage.length < 100) {
      errors.push("System message is too short or missing");
    }

    if (!prompt.userPrompt || prompt.userPrompt.length < 200) {
      errors.push("User prompt is too short or missing");
    }

    if (prompt.chunkAllocation.length === 0) {
      errors.push("No chunk allocation provided");
    }

    if (prompt.temperature < 0 || prompt.temperature > 1) {
      errors.push("Temperature must be between 0 and 1");
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}
