/**
 * AI Curriculum Extraction Workflow
 * Guides teachers through document upload and AI-assisted JSON generation
 */

class CurriculumExtractionWorkflow {
    constructor() {
        this.documents = [];
        this.clarifications = {};
        this.generatedConfig = null;
        this.schema = null;
        this.loadSchema();
    }

    async loadSchema() {
        try {
            const response = await fetch('./chunker-schema.json');
            this.schema = await response.json();
        } catch (error) {
            console.error('Failed to load schema:', error);
        }
    }

    /**
     * Phase 1: Document Collection
     */
    addDocument(file, type) {
        const document = {
            file: file,
            type: type, // 'calendar', 'curriculum', 'additional'
            content: null,
            processed: false,
            timestamp: new Date()
        };
        
        this.documents.push(document);
        return this.processDocument(document);
    }

    async processDocument(document) {
        try {
            // Extract text content based on file type
            if (document.file.type === 'application/pdf') {
                document.content = await this.extractPDFText(document.file);
            } else if (document.file.type.includes('text') || 
                      document.file.type.includes('document')) {
                document.content = await this.extractTextContent(document.file);
            }
            
            document.processed = true;
            return { success: true, preview: this.getContentPreview(document.content) };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    getContentPreview(content) {
        // Return first 500 characters for preview
        return content.substring(0, 500) + (content.length > 500 ? '...' : '');
    }

    /**
     * Phase 2: AI Analysis and Clarification
     */
    async generateAnalysisPrompt() {
        const documentSummaries = this.documents.map(doc => ({
            type: doc.type,
            contentPreview: this.getContentPreview(doc.content),
            filename: doc.file.name
        }));

        return {
            systemMessage: this.getSystemMessage(),
            analysisPrompt: this.buildAnalysisPrompt(documentSummaries),
            schema: this.schema
        };
    }

    getSystemMessage() {
        return `You are an expert educational curriculum analyst specializing in converting teacher planning documents into structured learning progressions. Your role is to:

1. Extract learning objectives and content chunks from curriculum documents
2. Map content to weekly schedules aligned with academic calendars  
3. Generate machine-readable JSON configurations for educational planning systems
4. Ask clarifying questions when information is ambiguous or missing

You prioritize pedagogical coherence, realistic pacing, and teacher workflow efficiency.

CRITICAL: You must follow the provided JSON schema exactly. Validate all generated JSON against the schema before responding.`;
    }

    buildAnalysisPrompt(documentSummaries) {
        return `# Curriculum Extraction for Chunker System

## Input Documents Provided:
${documentSummaries.map(doc => 
    `- ${doc.type.toUpperCase()}: ${doc.filename}\n  Preview: ${doc.contentPreview}`
).join('\n')}

## Analysis Task:
Please analyze the provided documents and extract the required information according to the WeekCentricChunker schema.

### STEP 1: Initial Analysis
Extract these required elements:
1. **Course Details** (name, level, academic year, total weeks)
2. **Weekly Structure** (days per week, periods per day, duration)  
3. **Content Organization** (units, learning objectives, time allocation)
4. **Assessment Schedule** (test dates, project deadlines, milestones)

### STEP 2: Clarification Questions
Ask about any unclear or missing information needed for complete JSON generation:

**Content Pacing:**
- Specific learning objectives with timing requirements?
- Critical vs. supplementary content priorities?
- Natural assessment break points?

**Schedule Details:**
- Holiday/break handling in pacing?
- Modified schedule days (assemblies, testing)?
- Built-in review/catch-up time needed?

**Chunk Granularity:**
- Daily chunk size preference (single concepts vs. broader topics)?
- Flexibility level for re-pacing during year?
- Collaborative planning considerations?

### STEP 3: Quality Validation
Before final JSON generation, verify:
- All required schema fields can be populated
- Content distribution is pedagogically sound
- Learning objectives are measurable and specific
- Prerequisite relationships are maintained
- Assessment timing aligns with content coverage

Please provide your analysis and clarification questions before generating the final JSON configuration.`;
    }

    /**
     * Phase 3: Clarification Collection
     */
    addClarification(question, answer) {
        this.clarifications[question] = answer;
    }

    getClarificationSummary() {
        return Object.entries(this.clarifications)
            .map(([q, a]) => `Q: ${q}\nA: ${a}`)
            .join('\n\n');
    }

    /**
     * Phase 4: JSON Generation
     */
    async generateJSONPrompt() {
        return {
            systemMessage: this.getSystemMessage(),
            generationPrompt: this.buildGenerationPrompt(),
            schema: this.schema,
            validationInstructions: this.getValidationInstructions()
        };
    }

    buildGenerationPrompt() {
        const documentContent = this.documents
            .map(doc => `=== ${doc.type.toUpperCase()}: ${doc.file.name} ===\n${doc.content}`)
            .join('\n\n');

        const clarificationSummary = this.getClarificationSummary();

        return `# JSON Configuration Generation

## Source Documents:
${documentContent}

## Clarifications Provided:
${clarificationSummary}

## Generation Requirements:
Generate a complete JSON configuration file that:

1. **Follows Schema Exactly**: Validate against the provided WeekCentricChunker schema
2. **Maps All Content**: Every curriculum element must be assigned to specific weeks/chunks
3. **Maintains Pedagogical Sequence**: Preserve logical learning progressions
4. **Creates Appropriate Chunks**: Daily chunks should be 20-45 minutes of focused learning
5. **Includes Rich Metadata**: Detailed objectives and context for AI processing
6. **Builds in Flexibility**: Allow for pacing adjustments without breaking dependencies

## Critical Validation Points:
- All required schema fields must be present
- Week numbering must be sequential starting from 1
- Chunk IDs must be unique across the entire configuration
- Learning objectives must be measurable and specific
- Assessment timing must align with content coverage
- Date formats must follow ISO standards (YYYY-MM-DD)

Generate the complete JSON configuration now.`;
    }

    getValidationInstructions() {
        return `## JSON Validation Checklist:

### Schema Compliance:
- [ ] All required fields present at every level
- [ ] Data types match schema specifications  
- [ ] Enum values are from allowed lists
- [ ] Date formats are YYYY-MM-DD
- [ ] Numeric ranges within specified limits

### Educational Coherence:
- [ ] Learning objectives are measurable (use action verbs)
- [ ] Prerequisites flow logically between chunks/weeks
- [ ] Content difficulty progresses appropriately
- [ ] Assessment timing allows for content mastery
- [ ] Weekly themes align with daily chunks

### Technical Requirements:
- [ ] Chunk IDs are unique and valid (alphanumeric, hyphens, underscores only)
- [ ] Week numbering is sequential without gaps
- [ ] Dates align with academic calendar
- [ ] JSON syntax is valid (no trailing commas, proper quotes)

### Practical Usability:
- [ ] Daily chunks are appropriate length (20-45 minutes)
- [ ] Weekly objectives are achievable
- [ ] Content distribution accounts for cognitive load
- [ ] Flexibility built in for pacing adjustments`;
    }

    /**
     * Phase 5: Validation and Refinement
     */
    validateGeneratedJSON(jsonString) {
        try {
            const config = JSON.parse(jsonString);
            
            // Basic schema validation (simplified - in production use ajv or similar)
            const validation = this.validateAgainstSchema(config);
            
            // Educational logic validation
            const educationalValidation = this.validateEducationalLogic(config);
            
            return {
                isValid: validation.isValid && educationalValidation.isValid,
                schemaErrors: validation.errors,
                educationalErrors: educationalValidation.errors,
                config: config
            };
        } catch (error) {
            return {
                isValid: false,
                schemaErrors: ['Invalid JSON syntax: ' + error.message],
                educationalErrors: [],
                config: null
            };
        }
    }

    validateAgainstSchema(config) {
        const errors = [];
        
        // Check required top-level fields
        if (!config.metadata) errors.push('Missing required field: metadata');
        if (!config.schedule) errors.push('Missing required field: schedule');
        if (!config.weeks) errors.push('Missing required field: weeks');
        
        // Validate metadata
        if (config.metadata) {
            if (!config.metadata.courseName) errors.push('Missing metadata.courseName');
            if (!config.metadata.academicYear) errors.push('Missing metadata.academicYear');
            if (!config.metadata.totalWeeks) errors.push('Missing metadata.totalWeeks');
        }
        
        // Validate weeks structure
        if (config.weeks) {
            Object.entries(config.weeks).forEach(([weekKey, week]) => {
                if (!weekKey.startsWith('week_')) {
                    errors.push(`Invalid week key format: ${weekKey}`);
                }
                if (!week.chunks || !Array.isArray(week.chunks)) {
                    errors.push(`Week ${weekKey} missing chunks array`);
                }
            });
        }
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    validateEducationalLogic(config) {
        const errors = [];
        
        // Check for reasonable content distribution
        const totalWeeks = Object.keys(config.weeks).length;
        if (totalWeeks !== config.metadata.totalWeeks) {
            errors.push(`Week count mismatch: metadata says ${config.metadata.totalWeeks}, but ${totalWeeks} weeks defined`);
        }
        
        // Validate chunk distribution
        Object.entries(config.weeks).forEach(([weekKey, week]) => {
            if (week.chunks.length === 0) {
                errors.push(`Week ${weekKey} has no learning chunks`);
            }
            
            week.chunks.forEach((chunk, index) => {
                if (!chunk.objectives || chunk.objectives.length === 0) {
                    errors.push(`Chunk ${chunk.id || index} in ${weekKey} has no learning objectives`);
                }
            });
        });
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    /**
     * Utility Methods
     */
    async extractPDFText(file) {
        // Placeholder for PDF extraction
        // In production, use pdf-parse or similar library
        return "PDF text extraction not implemented in demo";
    }

    async extractTextContent(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }

    // Export methods for integration
    exportPromptForAI() {
        return {
            documents: this.documents.map(doc => ({
                type: doc.type,
                filename: doc.file.name,
                content: doc.content
            })),
            clarifications: this.clarifications,
            schema: this.schema
        };
    }

    saveGeneratedConfig(config) {
        this.generatedConfig = config;
        
        // Create downloadable file
        const blob = new Blob([JSON.stringify(config, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${config.metadata.courseName.replace(/\s+/g, '_')}_chunker_config.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    }
}

// Export for use in web interface
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CurriculumExtractionWorkflow;
} else if (typeof window !== 'undefined') {
    window.CurriculumExtractionWorkflow = CurriculumExtractionWorkflow;
}
