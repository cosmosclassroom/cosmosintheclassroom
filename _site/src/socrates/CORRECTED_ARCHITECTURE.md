# Socrates Research Brief Generator - Corrected Architecture

## 🎯 **Project Purpose**
Socrates is a **teacher-facing tool** that transforms educational design frameworks into AI-ready curriculum generation prompts. Teachers input phenomenon and NGSS selections, Socrates outputs structured JSON + optimized AI prompts for creating research briefs.

## 🏗️ **Corrected Architecture**

```
src/socrates/
├── frontend/                      # Pure HTML/CSS/JS interface
│   ├── index.html                 # Main teacher interface
│   ├── styles/
│   │   ├── ngss-colors.css        # NGSS 3D color system
│   │   └── main.css               # Core styling
│   ├── js/
│   │   ├── form-handler.js        # Teacher input validation
│   │   ├── template-selector.js   # NGSS practice mapping
│   │   ├── chunk-calculator.js    # Time allocation logic
│   │   └── prompt-generator.js    # AI prompt builder
│   └── components/
│       ├── phenomenon-input.html
│       ├── ngss-selector.html
│       └── time-allocator.html
├── backend/                       # Node.js pipeline
│   ├── api/
│   │   ├── generate.js            # Main generation endpoint
│   │   ├── validate.js            # Schema validation
│   │   └── templates.js           # Template library API
│   ├── lib/
│   │   ├── template-engine.js     # Template selection logic
│   │   ├── chunk-calculator.js    # 15-minute chunk logic
│   │   ├── dependency-resolver.js # Element sequencing
│   │   └── prompt-builder.js      # AI prompt construction
│   └── validation/
│       ├── input-validator.js     # Teacher input validation
│       └── output-validator.js    # JSON schema validation
├── templates/                     # NGSS practice library
│   ├── practices/
│   │   ├── asking-questions.json
│   │   ├── developing-models.json
│   │   ├── planning-investigations.json
│   │   ├── analyzing-data.json
│   │   ├── using-mathematics.json
│   │   ├── constructing-explanations.json
│   │   ├── engaging-argument.json
│   │   └── obtaining-information.json
│   ├── crosscutting/
│   │   ├── patterns.json
│   │   ├── cause-effect.json
│   │   ├── scale-proportion.json
│   │   ├── systems-models.json
│   │   ├── energy-matter.json
│   │   ├── structure-function.json
│   │   └── stability-change.json
│   └── structures/
│       ├── forecast-blueprint-reflection.json
│       ├── matter-energy-force.json
│       └── structure-function-growth.json
├── schemas/                       # JSON validation schemas
│   ├── teacher-input.schema.json
│   ├── research-brief.schema.json
│   ├── chunk-allocation.schema.json
│   └── ai-prompt.schema.json
├── output/                        # Generated files
│   ├── json/                      # Structured specifications
│   ├── prompts/                   # AI prompt files
│   └── templates/                 # Google Doc templates
└── integration/
    ├── chunker-interface.js       # Chunker system integration
    └── portal-export.js           # Portal delivery format
```

## 🔄 **Corrected Data Flow**

### **Phase 1: Teacher Input**
```
Teacher Form → Phenomenon + NGSS Practices + Time Estimate → Input Validation
```

### **Phase 2: Processing Pipeline**
```
Input → Template Selection → Chunk Calculation → Element Assembly → JSON Generation
```

### **Phase 3: AI Prompt Generation**
```
JSON Structure → System Prompts + Element Instructions + Validation Criteria → Downloadable Package
```

### **Phase 4: Teacher Uses Output**
```
Teacher → Claude/GPT with Generated Prompts → Research Brief Content → Portal Integration
```

## 🎯 **Core Components (Corrected)**

### **1. Curriculum Generator Engine**
```javascript
class CurriculumGenerator {
  async generateBrief(teacherInput) {
    // Validate input
    const validation = await this.validateInput(teacherInput);
    
    // Select templates based on NGSS practices
    const templates = await this.selectTemplates(teacherInput.practices);
    
    // Calculate chunk distribution (15-min units)
    const chunks = await this.calculateChunks(teacherInput.timeEstimate);
    
    // Assemble research brief structure
    const structure = await this.assembleStructure(templates, chunks);
    
    // Generate AI prompts
    const prompts = await this.generateAIPrompts(structure, teacherInput);
    
    return {
      json: structure,
      prompts: prompts,
      metadata: this.generateMetadata(teacherInput)
    };
  }
}
```

### **2. Template Library System**
```javascript
// Example template for "Asking Questions" practice
{
  "practiceId": "asking-questions",
  "name": "Developing Questions and Planning Investigations",
  "scaffolding": {
    "openingPrompt": "What questions arise when you observe this phenomenon?",
    "guidingQuestions": [
      "What patterns do you notice?",
      "What would happen if...?",
      "How might we test...?"
    ],
    "closingReflection": "How did your questions evolve during investigation?"
  },
  "chunkEstimate": 2, // 30 minutes (2 x 15-min chunks)
  "flexibilityRating": "high",
  "dependencies": [],
  "assessmentCriteria": ["question quality", "scientific reasoning", "curiosity"]
}
```

### **3. AI Prompt Builder**
```javascript
class PromptBuilder {
  generateSystemPrompt(phenomenon, practices, voice) {
    return `You are an expert science curriculum designer specializing in phenomenon-driven inquiry-based learning.

CONTEXT:
- Phenomenon: ${phenomenon}
- NGSS Practices: ${practices.join(', ')}
- Narrative Voice: ${voice} (blend of Socratic questioning, Burkean storytelling, Saganesque wonder, Feynmanesque playfulness)

TASK: Generate a research brief element that...
[detailed instructions based on selected templates]

QUALITY CRITERIA:
- Scientifically accurate and age-appropriate
- Promotes genuine inquiry and critical thinking
- Includes clear assessment opportunities
- Maintains narrative coherence across elements`;
  }
}
```

### **4. Chunker Integration**
```javascript
class ChunkCalculator {
  convertToChunks(teacherTimeEstimate) {
    // Convert teacher time (hours/periods) to 15-minute chunks
    const totalMinutes = this.parseTimeEstimate(teacherTimeEstimate);
    const totalChunks = Math.ceil(totalMinutes / 15);
    
    // Validate against realistic constraints
    if (totalChunks > 20) {
      throw new Error('Time allocation exceeds reasonable limits');
    }
    
    // Distribute across forecast/blueprint/reflection (flexible ratios)
    return this.distributeChunks(totalChunks);
  }
}
```

## 📋 **Output Specifications (Corrected)**

### **JSON Structure Output**
```json
{
  "metadata": {
    "generatedBy": "socrates-v1.0",
    "timestamp": "2025-08-22T...",
    "phenomenon": "Leaf color changes in autumn",
    "estimatedDuration": "3 class periods",
    "totalChunks": 12
  },
  "structure": {
    "type": "forecast-blueprint-reflection",
    "parts": [
      {
        "partId": "forecast",
        "name": "Prediction Phase",
        "chunks": 4,
        "elements": [...],
        "voice": "socratic-inquiry"
      }
    ]
  },
  "aiPrompts": {
    "systemPrompt": "You are an expert...",
    "elementPrompts": [...],
    "validationPrompts": [...]
  },
  "chunkerIntegration": {
    "chunkSize": 15,
    "breakPoints": [...],
    "timeAllocation": "60% research, 40% practice"
  }
}
```

### **AI Prompt Package**
```
SYSTEM_PROMPT.txt - Context and role definition
ELEMENT_01_FORECAST_QUESTIONS.txt - Generate opening questions
ELEMENT_02_FORECAST_PREDICTIONS.txt - Guide prediction activities
...
VALIDATION_PROMPTS.txt - Quality check instructions
ASSEMBLY_INSTRUCTIONS.txt - How to combine elements
```

## 🚀 **Implementation Plan (Corrected)**

### **Phase 1: Core HTML Interface (2 weeks)**
- Teacher input forms with NGSS practice selection
- Real-time chunk calculation display
- Form validation and error handling

### **Phase 2: Backend Pipeline (3 weeks)**
- Template library with all 8 NGSS practices
- Chunk calculation and dependency resolution
- JSON schema validation

### **Phase 3: AI Prompt Optimization (2 weeks)**
- Prompt templates for each element type
- Voice blending algorithms
- Validation criteria generation

### **Phase 4: Integration (1 week)**
- Chunker system interface
- Portal delivery format
- Export functionality

---

This corrected architecture positions Socrates as the **prompt generation engine** that teachers use to create AI-assisted curriculum, which then gets delivered through Portal to students. Much clearer now!
