/**
 * Type Definitions for Socrates Research Brief Generator
 * 
 * Comprehensive TypeScript interfaces and types for the AI prompt generation system
 */

// Core input types
export interface TeacherInput {
  topic: string;
  grade: string;
  duration: number; // minutes
  ngssStandards: string[];
  selectedPractices: string[];
  voicePreferences: VoiceConfiguration;
  specialRequirements?: string;
  studentPopulation?: StudentPopulation;
}

export interface StudentPopulation {
  totalStudents: number;
  englishLearners: number;
  specialNeeds: number;
  advancedLearners: number;
  notes?: string;
}

export interface VoiceConfiguration {
  socrates: number; // percentage 0-100
  burke: number;
  sagan: number;
  feynman: number;
}

// Template and scaffolding types
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

// Chunk allocation and timing
export interface ChunkAllocation {
  chunkNumber: number;
  duration: number; // minutes (typically 15)
  activity: string;
  practiceId: string;
  voiceEmphasis: VoiceType[];
  transitionNotes?: string;
  materials?: string[];
  safetyNotes?: string[];
}

export type VoiceType = 'socrates' | 'burke' | 'sagan' | 'feynman';

// Research brief output structure
export interface ResearchBrief {
  title: string;
  topic: string;
  duration: number;
  grade: string;
  generatedAt: string;
  ngssAlignment: NGSSAlignment;
  chunks: ActivityChunk[];
  teacherPrep: TeacherPreparation;
  extensionActivities: string[];
  assessmentRubric: AssessmentRubric;
  voiceConfiguration: VoiceConfiguration;
  metadata: BriefMetadata;
}

export interface NGSSAlignment {
  practices: string[];
  disciplinaryCoreIdeas: string[];
  crosscuttingConcepts: string[];
  performanceExpectations?: string[];
}

export interface ActivityChunk {
  number: number;
  duration: number;
  title: string;
  objective: string;
  activityType: string;
  teacherGuidance: string;
  studentActions: string;
  voiceEmphasis: string;
  assessmentNotes: string;
  materialsNeeded: string[];
  differentiationTips: string;
  safetyConsiderations?: string;
  timeFlexibility?: 'rigid' | 'flexible' | 'expandable';
}

export interface TeacherPreparation {
  advancePreparation: string;
  materialsList: string[];
  safetyConsiderations: string;
  commonMisconceptions: string[];
  roomSetup?: string;
  technologyNeeds?: string[];
}

export interface AssessmentRubric {
  criteria: string[];
  performanceLevels: string[];
  scoringGuide?: ScoringGuide[];
}

export interface ScoringGuide {
  criterion: string;
  exemplary: string;
  proficient: string;
  developing: string;
  beginning: string;
}

export interface BriefMetadata {
  version: string;
  generatedBy: string;
  aiModel: string;
  templateIds: string[];
  estimatedPrepTime: number; // minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

// AI prompt generation types
export interface AIPrompt {
  model: 'claude' | 'gpt' | 'generic';
  systemMessage: string;
  userPrompt: string;
  temperature: number;
  maxTokens: number;
  expectedOutputFormat: string;
  chunkAllocation: ChunkAllocation[];
  metadata?: PromptMetadata;
}

export interface PromptMetadata {
  createdAt: string;
  templateVersion: string;
  estimatedResponseLength: number;
  validationRules: string[];
}

// Validation and error types
export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  field: string;
  message: string;
  severity: 'error' | 'warning' | 'info';
}

export interface ValidationWarning {
  field: string;
  message: string;
  suggestion?: string;
}

// Processing status types
export interface ProcessingStatus {
  stage: ProcessingStage;
  progress: number; // 0-100
  message: string;
  estimatedTimeRemaining?: number; // seconds
  errors?: string[];
}

export type ProcessingStage = 
  | 'input-validation'
  | 'template-selection'
  | 'chunk-calculation'
  | 'prompt-generation'
  | 'ai-processing'
  | 'output-validation'
  | 'brief-formatting'
  | 'complete'
  | 'error';

// Configuration types
export interface SocratesConfig {
  version: string;
  aiModels: AIModelConfig[];
  defaultVoiceBalance: VoiceConfiguration;
  chunkDuration: number; // default 15 minutes
  maxSessionDuration: number; // max minutes for a brief
  validationRules: ValidationRuleConfig[];
}

export interface AIModelConfig {
  name: string;
  provider: string;
  maxTokens: number;
  temperatureRange: [number, number];
  supportsSystemMessages: boolean;
  costPerToken?: number;
}

export interface ValidationRuleConfig {
  field: string;
  rule: string;
  message: string;
  severity: 'error' | 'warning';
}

// Export/Import types
export interface ExportFormat {
  format: 'json' | 'pdf' | 'docx' | 'html';
  includeTeacherNotes: boolean;
  includeRubrics: boolean;
  includeMaterials: boolean;
}

export interface ImportedBrief {
  brief: ResearchBrief;
  importedAt: string;
  source: string;
  modifications?: string[];
}

// Analytics and usage types
export interface UsageAnalytics {
  briefsGenerated: number;
  popularTopics: string[];
  averageDuration: number;
  voiceDistribution: VoiceConfiguration;
  errorRate: number;
  userSatisfaction?: number;
}

export interface PerformanceMetrics {
  generationTime: number; // milliseconds
  templateMatchAccuracy: number;
  chunkAllocationEfficiency: number;
  aiResponseQuality: number;
}

// Utility types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Template Library specific types
export interface PracticeTemplate {
  practiceId: string;
  name: string;
  type: ElementType;
  scaffolding: ElementScaffolding;
  chunkEstimate: number;
  flexibilityRating: 'low' | 'medium' | 'high';
  dependencies: string[];
  assessmentCriteria: AssessmentCriteria;
  gradeAppropriate: string[]; // grade levels
  prerequisites?: string[];
  extensions?: string[];
}

export interface TemplateLibraryConfig {
  version: string;
  templates: PracticeTemplate[];
  customTemplates?: PracticeTemplate[];
  lastUpdated: string;
}

// Event types for system monitoring
export interface SocratesEvent {
  eventType: SocratesEventType;
  timestamp: string;
  userId?: string;
  data: any;
  success: boolean;
  errorMessage?: string;
}

export type SocratesEventType = 
  | 'brief-generation-started'
  | 'brief-generation-completed'
  | 'template-selected'
  | 'prompt-generated'
  | 'ai-response-received'
  | 'validation-completed'
  | 'export-requested'
  | 'error-occurred';

// Constants
export const VOICE_TYPES = ['socrates', 'burke', 'sagan', 'feynman'] as const;
export const NGSS_PRACTICES = [
  'asking-questions',
  'developing-models', 
  'planning-investigations',
  'analyzing-data',
  'using-mathematics',
  'constructing-explanations',
  'engaging-argument',
  'obtaining-information'
] as const;

export const GRADE_LEVELS = [
  '6', '7', '8', '9', '10', '11', '12',
  '6-8', '9-12', 'K-12'
] as const;

export const DIFFICULTY_LEVELS = ['beginner', 'intermediate', 'advanced'] as const;
