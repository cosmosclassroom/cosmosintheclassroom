/**
 * Chunker Integration Interface
 * 
 * This module provides the interface between Socrates and the Chunker system
 * for breaking content into manageable, pedagogically sound segments.
 */

export interface ChunkerConfig {
  strategy: 'natural-breaks' | 'concept-boundaries' | 'time-based' | 'adaptive';
  targetDuration?: string; // e.g., "15-20min"
  targetSize?: 'small' | 'medium' | 'large';
  preserveFlow?: boolean;
  preserveInquiryFlow?: boolean;
  preserveMathematicalFlow?: boolean;
  allowEquationBreaks?: boolean;
  adaptToStudentPace?: boolean;
  customBreakpoints?: string[];
}

export interface ChunkRequest {
  contentId: string;
  content: {
    structureId: string;
    partId: string;
    elementId: string;
    fields: any[];
    metadata: {
      estimatedDuration: number;
      difficulty: string;
      ngssAlignments: string[];
    };
  };
  config: ChunkerConfig;
  studentContext?: {
    priorPerformance?: any;
    completionTimes?: number[];
    engagementMetrics?: any;
  };
}

export interface ChunkResponse {
  chunkId: string;
  chunks: Chunk[];
  metadata: {
    totalEstimatedTime: number;
    numberOfChunks: number;
    strategy: string;
    breakpoints: string[];
  };
}

export interface Chunk {
  chunkId: string;
  sequence: number;
  content: {
    title: string;
    description?: string;
    fields: any[];
    instructions?: string;
  };
  navigation: {
    previous?: string;
    next?: string;
    canSkip: boolean;
    requiredCompletion: boolean;
  };
  timing: {
    estimatedDuration: number;
    suggestedBreaks?: string[];
  };
  ngssContext: {
    primaryTag: 'practices' | 'dci' | 'crosscutting' | 'metacognitive';
    alignments: string[];
  };
}

export class ChunkerIntegration {
  private endpoint: string;
  private apiKey?: string;
  private defaultConfig: ChunkerConfig;

  constructor(endpoint: string, apiKey?: string, defaultConfig?: ChunkerConfig) {
    this.endpoint = endpoint;
    this.apiKey = apiKey;
    this.defaultConfig = defaultConfig || {
      strategy: 'natural-breaks',
      targetDuration: '15-20min',
      preserveFlow: true,
      preserveInquiryFlow: true
    };
  }

  /**
   * Process a structure element through the Chunker system
   */
  async processElement(request: ChunkRequest): Promise<ChunkResponse> {
    const config = { ...this.defaultConfig, ...request.config };
    
    try {
      const response = await fetch(`${this.endpoint}/process`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey && { 'Authorization': `Bearer ${this.apiKey}` })
        },
        body: JSON.stringify({
          content: request.content,
          config: config,
          studentContext: request.studentContext
        })
      });

      if (!response.ok) {
        throw new Error(`Chunker API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Chunker integration error:', error);
      // Fallback to simple chunking
      return this.fallbackChunking(request);
    }
  }

  /**
   * Get adaptive chunk size recommendation based on student context
   */
  async getAdaptiveSize(
    studentId: string, 
    structureId: string, 
    context: any
  ): Promise<'small' | 'medium' | 'large'> {
    try {
      const response = await fetch(`${this.endpoint}/adaptive-size`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey && { 'Authorization': `Bearer ${this.apiKey}` })
        },
        body: JSON.stringify({
          studentId,
          structureId,
          context
        })
      });

      if (response.ok) {
        const result = await response.json();
        return result.recommendedSize;
      }
    } catch (error) {
      console.error('Adaptive sizing error:', error);
    }
    
    return 'medium'; // Default fallback
  }

  /**
   * Validate chunk boundaries for pedagogical soundness
   */
  async validateChunks(chunks: Chunk[]): Promise<{
    isValid: boolean;
    issues: string[];
    suggestions: string[];
  }> {
    try {
      const response = await fetch(`${this.endpoint}/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey && { 'Authorization': `Bearer ${this.apiKey}` })
        },
        body: JSON.stringify({ chunks })
      });

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Chunk validation error:', error);
    }

    return { isValid: true, issues: [], suggestions: [] };
  }

  /**
   * Fallback chunking when Chunker service is unavailable
   */
  private fallbackChunking(request: ChunkRequest): ChunkResponse {
    const element = request.content;
    const fields = element.fields;
    
    // Simple field-based chunking
    const chunks: Chunk[] = fields.map((field, index) => ({
      chunkId: `${element.elementId}-chunk-${index + 1}`,
      sequence: index + 1,
      content: {
        title: field.label,
        fields: [field],
        instructions: field.helpText
      },
      navigation: {
        previous: index > 0 ? `${element.elementId}-chunk-${index}` : undefined,
        next: index < fields.length - 1 ? `${element.elementId}-chunk-${index + 2}` : undefined,
        canSkip: !field.required,
        requiredCompletion: field.required
      },
      timing: {
        estimatedDuration: 10 // Simple fallback
      },
      ngssContext: {
        primaryTag: 'practices',
        alignments: []
      }
    }));

    return {
      chunkId: `${element.elementId}-chunked`,
      chunks,
      metadata: {
        totalEstimatedTime: chunks.length * 10,
        numberOfChunks: chunks.length,
        strategy: 'fallback-field-based',
        breakpoints: []
      }
    };
  }
}

/**
 * Factory function to create ChunkerIntegration from course config
 */
export function createChunkerIntegration(courseConfig: any): ChunkerIntegration {
  const chunkerConfig = courseConfig.integrations?.chunker;
  
  if (!chunkerConfig) {
    throw new Error('No chunker configuration found in course config');
  }

  return new ChunkerIntegration(
    chunkerConfig.endpoint,
    chunkerConfig.apiKey,
    chunkerConfig.config
  );
}

/**
 * Utility functions for working with chunks
 */
export const ChunkerUtils = {
  /**
   * Calculate total estimated time for a set of chunks
   */
  calculateTotalTime(chunks: Chunk[]): number {
    return chunks.reduce((total, chunk) => total + chunk.timing.estimatedDuration, 0);
  },

  /**
   * Find natural break points between chunks
   */
  findBreakPoints(chunks: Chunk[]): number[] {
    const breakPoints: number[] = [];
    let cumulativeTime = 0;
    
    chunks.forEach((chunk, index) => {
      cumulativeTime += chunk.timing.estimatedDuration;
      
      // Suggest break every 20-25 minutes
      if (cumulativeTime >= 20 && cumulativeTime <= 25) {
        breakPoints.push(index);
        cumulativeTime = 0;
      }
    });
    
    return breakPoints;
  },

  /**
   * Group chunks by NGSS dimension for color coding
   */
  groupByNGSS(chunks: Chunk[]): {
    practices: Chunk[];
    dci: Chunk[];
    crosscutting: Chunk[];
    metacognitive: Chunk[];
  } {
    return chunks.reduce((groups, chunk) => {
      const tag = chunk.ngssContext.primaryTag;
      groups[tag].push(chunk);
      return groups;
    }, {
      practices: [] as Chunk[],
      dci: [] as Chunk[],
      crosscutting: [] as Chunk[],
      metacognitive: [] as Chunk[]
    });
  }
};
