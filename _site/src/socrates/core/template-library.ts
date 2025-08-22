/**
 * Template Library - NGSS Practice Templates
 * 
 * Pre-built scaffolding templates for all 8 NGSS Science and Engineering Practices
 * with timing estimates, flexibility ratings, and assessment criteria.
 */

export interface PracticeTemplate {
  practiceId: string;
  name: string;
  type: ElementType;
  scaffolding: ElementScaffolding;
  chunkEstimate: number; // Number of 15-minute chunks
  flexibilityRating: 'low' | 'medium' | 'high';
  dependencies: string[];
  assessmentCriteria: AssessmentCriteria;
}

export interface ElementScaffolding {
  openingPrompt: string;
  guidingQuestions: string[];
  closingReflection: string;
  supportResources?: string[];
  commonMisconceptions?: string[];
}

export interface AssessmentCriteria {
  primaryFocus: string[];
  rubricDimensions: string[];
  evidenceLookFors: string[];
}

export type ElementType = 
  | 'observation' 
  | 'question-generation' 
  | 'hypothesis-formation'
  | 'investigation-planning'
  | 'data-collection' 
  | 'analysis' 
  | 'model-construction'
  | 'explanation-construction'
  | 'prediction' 
  | 'comparison' 
  | 'synthesis' 
  | 'reflection' 
  | 'evaluation'
  | 'communication';

export class TemplateLibrary {
  private templates: Map<string, PracticeTemplate> = new Map();

  constructor() {
    this.initializeTemplates();
  }

  /**
   * Select templates based on NGSS practices
   */
  async selectTemplates(ngssPractices: string[]): Promise<PracticeTemplate[]> {
    const selectedTemplates: PracticeTemplate[] = [];
    
    for (const practiceId of ngssPractices) {
      const template = this.templates.get(practiceId);
      if (template) {
        selectedTemplates.push(template);
      } else {
        console.warn(`Template not found for practice: ${practiceId}`);
      }
    }
    
    return selectedTemplates;
  }

  /**
   * Get template by practice ID
   */
  getTemplate(practiceId: string): PracticeTemplate | undefined {
    return this.templates.get(practiceId);
  }

  /**
   * List all available templates
   */
  getAllTemplates(): PracticeTemplate[] {
    return Array.from(this.templates.values());
  }

  /**
   * Initialize all NGSS practice templates
   */
  private initializeTemplates(): void {
    // SEP-1: Asking Questions and Defining Problems
    this.templates.set('asking-questions', {
      practiceId: 'asking-questions',
      name: 'Developing Questions and Planning Investigations',
      type: 'question-generation',
      scaffolding: {
        openingPrompt: "What questions arise when you observe this phenomenon?",
        guidingQuestions: [
          "What patterns do you notice?",
          "What would happen if we changed...?",
          "How might we test our ideas about...?",
          "What evidence would help us understand...?"
        ],
        closingReflection: "How did your questions evolve during investigation?",
        supportResources: ["Question stems poster", "Scientific question criteria checklist"],
        commonMisconceptions: ["Thinking any question is scientific", "Confusing questions with hypotheses"]
      },
      chunkEstimate: 2, // 30 minutes
      flexibilityRating: 'high',
      dependencies: [],
      assessmentCriteria: {
        primaryFocus: ['question quality', 'scientific reasoning', 'curiosity'],
        rubricDimensions: ['Clarity', 'Testability', 'Relevance', 'Sophistication'],
        evidenceLookFors: ['Uses scientific vocabulary', 'Questions are testable', 'Builds on observations']
      }
    });

    // SEP-2: Developing and Using Models
    this.templates.set('developing-models', {
      practiceId: 'developing-models',
      name: 'Constructing and Revising Models',
      type: 'model-construction',
      scaffolding: {
        openingPrompt: "How might we represent this phenomenon to better understand it?",
        guidingQuestions: [
          "What are the key components?",
          "How do these components interact?",
          "What does our model help explain?",
          "Where might our model be incomplete?"
        ],
        closingReflection: "How did creating a model change your understanding?",
        supportResources: ["Model evaluation criteria", "Revision tracking template"],
        commonMisconceptions: ["Models must be perfect representations", "Models are just pictures"]
      },
      chunkEstimate: 3, // 45 minutes
      flexibilityRating: 'medium',
      dependencies: ['asking-questions'],
      assessmentCriteria: {
        primaryFocus: ['model accuracy', 'explanatory power', 'revision based on evidence'],
        rubricDimensions: ['Components', 'Relationships', 'Explanations', 'Limitations'],
        evidenceLookFors: ['Includes key elements', 'Shows interactions', 'Explains phenomenon']
      }
    });

    // SEP-3: Planning and Carrying Out Investigations
    this.templates.set('planning-investigations', {
      practiceId: 'planning-investigations',
      name: 'Designing and Conducting Investigations',
      type: 'investigation-planning',
      scaffolding: {
        openingPrompt: "How can we design a fair test to answer our questions?",
        guidingQuestions: [
          "What variables will we test?",
          "What variables need to be controlled?",
          "What data will we collect?",
          "How will we ensure reliable results?"
        ],
        closingReflection: "What would you change about the investigation design?",
        supportResources: ["Investigation planning template", "Variable identification guide"],
        commonMisconceptions: ["Changing multiple variables at once", "Thinking one trial is enough"]
      },
      chunkEstimate: 4, // 60 minutes
      flexibilityRating: 'low',
      dependencies: ['asking-questions', 'developing-models'],
      assessmentCriteria: {
        primaryFocus: ['experimental design', 'variable control', 'procedure clarity'],
        rubricDimensions: ['Variables', 'Controls', 'Procedure', 'Data Plan'],
        evidenceLookFors: ['Identifies variables clearly', 'Plans for controls', 'Detailed procedure']
      }
    });

    // SEP-4: Analyzing and Interpreting Data
    this.templates.set('analyzing-data', {
      practiceId: 'analyzing-data',
      name: 'Making Sense of Data and Evidence',
      type: 'analysis',
      scaffolding: {
        openingPrompt: "What patterns and trends do you see in the data?",
        guidingQuestions: [
          "What does the data tell us about our phenomenon?",
          "Are there any unexpected results?",
          "What evidence supports or challenges our predictions?",
          "How reliable and valid is our data?"
        ],
        closingReflection: "How did analyzing data change your thinking?",
        supportResources: ["Data analysis tools", "Statistical significance guide"],
        commonMisconceptions: ["Correlation implies causation", "Outliers should always be ignored"]
      },
      chunkEstimate: 3, // 45 minutes
      flexibilityRating: 'medium',
      dependencies: ['planning-investigations'],
      assessmentCriteria: {
        primaryFocus: ['pattern recognition', 'data interpretation', 'evidence evaluation'],
        rubricDimensions: ['Patterns', 'Trends', 'Outliers', 'Reliability'],
        evidenceLookFors: ['Identifies patterns', 'Uses data as evidence', 'Acknowledges limitations']
      }
    });

    // SEP-5: Using Mathematics and Computational Thinking
    this.templates.set('using-mathematics', {
      practiceId: 'using-mathematics',
      name: 'Mathematical Analysis and Modeling',
      type: 'analysis',
      scaffolding: {
        openingPrompt: "How can mathematical tools help us understand this phenomenon?",
        guidingQuestions: [
          "What quantities can we measure?",
          "What mathematical relationships do we see?",
          "How can we represent this mathematically?",
          "What do the calculations tell us?"
        ],
        closingReflection: "How did mathematics enhance your understanding?",
        supportResources: ["Mathematical modeling guide", "Graphing and calculation tools"],
        commonMisconceptions: ["Math is separate from science", "Exact numbers are always better"]
      },
      chunkEstimate: 3, // 45 minutes
      flexibilityRating: 'medium',
      dependencies: ['analyzing-data'],
      assessmentCriteria: {
        primaryFocus: ['mathematical reasoning', 'quantitative analysis', 'computational skills'],
        rubricDimensions: ['Calculations', 'Representations', 'Interpretations', 'Precision'],
        evidenceLookFors: ['Uses appropriate math tools', 'Shows work clearly', 'Interprets results']
      }
    });

    // SEP-6: Constructing Explanations
    this.templates.set('constructing-explanations', {
      practiceId: 'constructing-explanations',
      name: 'Building Scientific Explanations',
      type: 'explanation-construction',
      scaffolding: {
        openingPrompt: "How can we explain what causes this phenomenon?",
        guidingQuestions: [
          "What claim can we make based on our evidence?",
          "What reasoning connects our evidence to our claim?",
          "How does this fit with what we know about science?",
          "What alternative explanations might exist?"
        ],
        closingReflection: "How confident are you in your explanation and why?",
        supportResources: ["CER framework guide", "Scientific explanation rubric"],
        commonMisconceptions: ["Explanations are just opinions", "Evidence speaks for itself"]
      },
      chunkEstimate: 3, // 45 minutes
      flexibilityRating: 'high',
      dependencies: ['analyzing-data', 'using-mathematics'],
      assessmentCriteria: {
        primaryFocus: ['claim-evidence-reasoning', 'causal mechanisms', 'scientific accuracy'],
        rubricDimensions: ['Claim', 'Evidence', 'Reasoning', 'Scientific Knowledge'],
        evidenceLookFors: ['Clear claim statement', 'Relevant evidence', 'Logical reasoning']
      }
    });

    // SEP-7: Engaging in Argument from Evidence
    this.templates.set('engaging-argument', {
      practiceId: 'engaging-argument',
      name: 'Evaluating and Critiquing Arguments',
      type: 'evaluation',
      scaffolding: {
        openingPrompt: "How can we evaluate competing explanations for this phenomenon?",
        guidingQuestions: [
          "What evidence supports each explanation?",
          "Which explanation best fits all the evidence?",
          "What are the strengths and weaknesses of each argument?",
          "How might we resolve disagreements?"
        ],
        closingReflection: "How did considering multiple perspectives strengthen your understanding?",
        supportResources: ["Argument evaluation criteria", "Peer review protocols"],
        commonMisconceptions: ["Arguments are just disagreements", "Loudest voice wins"]
      },
      chunkEstimate: 4, // 60 minutes
      flexibilityRating: 'high',
      dependencies: ['constructing-explanations'],
      assessmentCriteria: {
        primaryFocus: ['argument evaluation', 'evidence weighing', 'respectful critique'],
        rubricDimensions: ['Evidence Quality', 'Logic', 'Counterarguments', 'Revision'],
        evidenceLookFors: ['Compares evidence', 'Identifies weaknesses', 'Revises thinking']
      }
    });

    // SEP-8: Obtaining, Evaluating, and Communicating Information
    this.templates.set('obtaining-information', {
      practiceId: 'obtaining-information',
      name: 'Research and Communication',
      type: 'communication',
      scaffolding: {
        openingPrompt: "How can we research and share what we've learned about this phenomenon?",
        guidingQuestions: [
          "What additional information do we need?",
          "Which sources are most reliable?",
          "How can we best communicate our findings?",
          "Who is our audience and what do they need to know?"
        ],
        closingReflection: "How did communication help you clarify your thinking?",
        supportResources: ["Source evaluation checklist", "Communication format options"],
        commonMisconceptions: ["All internet sources are equal", "Communication is just reporting"]
      },
      chunkEstimate: 3, // 45 minutes
      flexibilityRating: 'high',
      dependencies: ['engaging-argument'],
      assessmentCriteria: {
        primaryFocus: ['source evaluation', 'clear communication', 'audience awareness'],
        rubricDimensions: ['Sources', 'Clarity', 'Accuracy', 'Audience'],
        evidenceLookFors: ['Uses reliable sources', 'Clear presentation', 'Appropriate for audience']
      }
    });
  }

  /**
   * Get recommended template sequence for a given set of practices
   */
  getRecommendedSequence(practiceIds: string[]): PracticeTemplate[] {
    const templates = practiceIds.map(id => this.templates.get(id)).filter(Boolean) as PracticeTemplate[];
    
    // Sort by dependency order
    return this.sortByDependencies(templates);
  }

  /**
   * Sort templates by their dependencies
   */
  private sortByDependencies(templates: PracticeTemplate[]): PracticeTemplate[] {
    const sorted: PracticeTemplate[] = [];
    const remaining = [...templates];
    
    while (remaining.length > 0) {
      const canAdd = remaining.filter(template => 
        template.dependencies.every(dep => 
          sorted.some(s => s.practiceId === dep) || !templates.some(t => t.practiceId === dep)
        )
      );
      
      if (canAdd.length === 0) break; // Circular dependency or error
      
      sorted.push(...canAdd);
      canAdd.forEach(template => {
        const index = remaining.indexOf(template);
        remaining.splice(index, 1);
      });
    }
    
    return sorted;
  }
}
