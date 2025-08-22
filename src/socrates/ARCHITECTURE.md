# Socrates Architecture & Filesystem Guide

## 🏗️ **Filesystem Structure**

```
src/socrates/
├── core/                          # Core system modules
│   ├── structure-manager.ts       # Main structure and course management
│   ├── voice-narrative.ts         # Four-voice text generation
│   └── navigation-generator.ts    # Navigation framework builder
├── schemas/                       # JSON Schema validation
│   ├── three-part-structure.schema.json
│   ├── course-config.schema.json
│   └── voice-profile.schema.json
├── config/                        # Configuration files
│   ├── courses/                   # Course configurations (15+ files)
│   │   ├── ap-biology.json
│   │   ├── honors-physics.json
│   │   └── ... (expandable to 15+ courses)
│   ├── structures/                # Three-part structure definitions
│   │   ├── matter-energy-force.json
│   │   ├── forecast-blueprint-reflection.json
│   │   └── ... (5+ structures per course type)
│   ├── voices/                    # Voice profile configurations
│   └── themes/                    # UI theme configurations
├── integrations/                  # External system integrations
│   ├── chunker.ts                 # Chunker system interface
│   ├── content-sources.ts         # Flexible content sourcing
│   └── export-handlers.ts         # Google Docs, PDF export
├── components/                    # React components (future)
│   ├── navigation/
│   ├── forms/
│   └── progress/
├── templates/                     # Export templates
├── mockup.html                    # UI demonstration
├── mockup.txt                     # Technical specifications
├── package.json                   # Dependencies and scripts
└── filesystem-config.json         # System configuration
```

## 🎯 **Design Principles**

### **Structure-First Architecture**
Socrates generates **navigation frameworks and structure** - not content. Content comes from:
- Markdown files (primary)
- JSON arrays (fallback)
- External APIs (planned)
- Database sources (future)

### **Teacher Control**
- **Three-part structures**: Fully customizable by teachers
- **Voice synthesis**: Configurable blend of Socrates/Burke/Sagan/Feynman
- **Course settings**: Per-course customization of all aspects
- **Field validation**: Teacher-defined rules and requirements

### **Scalable Configuration**
- **15+ course support**: Designed for multi-course deployment
- **JSON-based config**: Version-controlled, validatable, shareable
- **Schema validation**: Prevents configuration errors
- **Auto-discovery**: Dynamically loads new courses and structures

## 🔧 **Integration with Chunker**

### **Chunking Strategy**
```typescript
interface ChunkingStrategy {
  enabled: boolean;
  chunkSize: 'small' | 'medium' | 'large' | 'adaptive';
  breakpoints: string[];
  integration: {
    chunkerEndpoint: string;
    chunkerConfig: any;
  };
}
```

### **Chunker Communication**
- **Primary**: HTTP API to existing Chunker system
- **Fallback**: Simple field-based chunking when Chunker unavailable
- **Adaptive**: Adjusts chunk sizes based on student performance
- **Validation**: Ensures pedagogically sound chunk boundaries

## 📋 **Three-Part Structure System**

### **Structure Definition**
Each structure contains exactly **3 parts**, each with multiple **elements**:

```json
{
  "structureId": "matter-energy-force",
  "parts": [
    {
      "partId": "part1",
      "name": "Matter Phase",
      "color": "#EA580C",
      "elements": [
        {
          "elementId": "matter-observation",
          "title": "Observation & Questions",
          "type": "observation",
          "ngssTag": "practices",
          "fields": [...]
        }
      ]
    }
  ]
}
```

### **Field Types & Validation**
- **text-short/text-long**: With min/max length validation
- **multiple-choice/checkbox-list**: For structured responses
- **file-upload**: For images, data, documents
- **drawing-canvas**: For diagrams and sketches
- **structured-list**: For organized questions/observations

### **NGSS 3D Integration**
- **Blue (#2563EB)**: Science & Engineering Practices
- **Orange (#EA580C)**: Disciplinary Core Ideas  
- **Green (#16A34A)**: Crosscutting Concepts
- **Purple (#8B5CF6)**: Metacognitive Reflection

## 🎭 **Four-Voice Narrative System**

### **Voice Profiles**
- **Socrates**: Questioning, inquiry-driven guidance
- **Burke**: Storytelling, narrative coherence
- **Sagan**: Wonder, cosmic perspective
- **Feynman**: Playfulness, experimental joy

### **Voice Blending**
- **Primary voice**: Dominant narrative style
- **Secondary voices**: Subtle influences and accents
- **Complexity adaptation**: Auto-adjusts language for grade level
- **Custom phrases**: Course-specific language and terminology

## 🔄 **Content Sourcing Flexibility**

### **Source Types**
```typescript
interface ContentSources {
  primary: 'markdown-files' | 'json-arrays' | 'external-api' | 'database';
  fallback: 'markdown-files' | 'json-arrays';
  paths: {
    'markdown-files': './content/course-name/',
    'json-arrays': './content/course-name/data/'
  };
}
```

### **Content Independence**
- Socrates **generates structure**, external systems provide **content**
- Flexible sourcing allows content from any system
- Chunker processes content, Socrates handles navigation
- Clean separation of concerns

## 🚀 **Getting Started**

### **1. Course Setup**
```bash
# Add new course configuration
cp config/courses/template.json config/courses/new-course.json
# Edit course settings, available structures, voice profile
# Validate against schema
npm run validate-config
```

### **2. Structure Creation**
```bash
# Create new three-part structure
cp config/structures/template.json config/structures/new-structure.json
# Define parts, elements, fields, NGSS alignments
# Test with existing courses
npm run test-structure new-structure
```

### **3. Navigation Generation**
```typescript
const manager = new StructureManager();
await manager.loadCourses(['./config/courses/*.json']);
await manager.loadStructures(['./config/structures/*.json']);

const framework = await manager.generateNavigationFramework(
  'ap-biology',
  'matter-energy-force'
);
// Returns complete navigation structure for frontend
```

## 📊 **Scalability Features**

### **Performance Optimization**
- **Config caching**: Structures loaded once, cached in memory
- **Lazy loading**: Only load required structures per course
- **Schema validation**: Catch errors at config time, not runtime
- **Chunker integration**: Async processing with fallbacks

### **Monitoring & Health Checks**
- **Config validation**: Continuous validation of all JSON files
- **Chunker availability**: Real-time monitoring of external service
- **Performance metrics**: Track generation times and user engagement
- **Auto-recovery**: Graceful degradation when services unavailable

### **Expansion Planning**
- **Course templates**: Standardized patterns for new course creation
- **Structure library**: Reusable three-part patterns across subjects
- **Voice customization**: Subject-specific voice profile variations
- **Integration points**: Clean APIs for additional external systems

## 🔐 **Security & Reliability**

### **Configuration Security**
- **Read-only permissions**: Config files protected from runtime modification
- **Schema enforcement**: All configurations validated against strict schemas
- **Version control**: All configs tracked in git for change management
- **Environment isolation**: API keys and secrets in environment variables only

### **Backup & Recovery**
- **Daily config backups**: Automated git commits of configuration changes
- **User content backup**: Real-time backup of student-generated content
- **Service monitoring**: Automated alerts for system health issues
- **Graceful degradation**: System continues working even with partial failures

---

This architecture provides a **solid foundation** for scaling to 15+ courses while maintaining **teacher control**, **Chunker integration**, and **flexible content sourcing**. The system is designed to be the **navigation and structure brain** while delegating content generation to appropriate specialized systems.
