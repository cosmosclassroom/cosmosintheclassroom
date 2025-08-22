# BHS Week-Centric Chunker v2.0

AI-optimized curriculum planning using week-based organization and 15-minute "chunks" as atomic learning units.

## 🚀 **Quick Start**

### **Teachers**
- **[Week-Centric Chunker](ui/chunker.html)** - Main interface with week navigation
- **[AI Curriculum Extractor](ai/curriculum-extractor.html)** - Convert documents to Chunker format  
- **[Community Hub](community.html)** - BHS resources & weekly inspirational quotes

### **Developers**
- **[Original Interface](ui/index.html)** - Legacy period-centric interface
- **[Config Tester](tools/config-tester.html)** - Test configurations
- **[Documentation](docs/)** - Technical specifications

## 🤖 **AI Curriculum Creation**

### **Teacher Workflow**
1. Upload curriculum documents (calendar, scope & sequence)
2. AI analyzes and extracts course structure
3. Guided clarification questions
4. AI generates Chunker-compatible JSON
5. Validation and download

### **AI Features**
- Multi-document processing (various formats)
- Educational logic validation (pacing & structure)
- Schema-compliant JSON output
- Teacher-friendly interface (no technical skills needed)
- Automatic quality checking

## 📁 **Directory Structure**
```
src/Chunker/
├── ui/                    # User interfaces
│   ├── chunker.html      # Main week-centric interface
│   └── index.html        # Legacy interface
├── ai/                   # AI curriculum extraction
│   ├── curriculum-extractor.html
│   └── README.md
├── community.html        # BHS Community Hub
├── chunker-schema.json   # Configuration validation
└── configs/             # Sample configurations
```

## 🎯 **Core Concepts**
- **Chunk**: 15-minute atomic learning unit
- **Weekly Organization**: Cognitive load optimization (2-4 units/day)
- **AI Integration**: Document → structured curriculum conversion
- **Educational Validation**: Prerequisite flow & pacing verification
├── 📱 ui/                          # User Interfaces
│   ├── chunker.html                # Primary week-centric teacher interface
│   ├── index.html                  # Legacy period-centric interface
│   ├── views/
│   │   └── calendar.html          # Calendar view component
│   └── styles/                     # Shared styles
│       └── main.css
│
├── 🏘️ community.html               # BHS Community Hub with inspirational quotes
│
├── ⚙️ engine/                      # Core Processing Engines
│   ├── chunker-engine.js           # Week-centric processing engine
│   └── week-centric-scheduler.js   # Development version
│
├── 📋 configs/                     # Configuration Files
│   ├── chunker-config.json         # Primary week-centric configuration
│   ├── week-centric-v2.json        # Development version
│   └── templates/                  # Pre-built schedule templates
│       ├── traditional.json        # Standard 6-period schedule
│       └── block.json              # A/B block alternating schedule
│
├── 🤖 ai/                          # AI-Powered Curriculum Extraction
│   ├── curriculum-extractor.html   # Teacher-facing interface
│   ├── extraction-workflow.js      # AI workflow management
│   ├── config-validator.js         # JSON validation tool
│   ├── chunker-schema.json         # Complete JSON schema specification
│   ├── curriculum-extraction-prompt.md  # AI prompt templates
│   ├── teacher-prompts.md          # Copy-paste prompts for teachers
│   └── README.md                   # AI system documentation
│
├── 🔧 tools/                       # Development & Testing Tools
│   └── config-tester.html          # Configuration testing interface
│
├── 📚 docs/                        # Documentation
│   ├── wireframe.md                # Original engineering spec
│   ├── planner.md                  # Chunk planning wireframe
│   ├── architecture.md             # AI integration architecture
│   └── configuration.md            # Configuration system docs
│
├── 🗃️ legacy/                      # Deprecated Files (Keep for Reference)
│   ├── 24-25.html                  # Old academic year schedules
│   ├── 25-26-schedule.html
│   ├── index.html                  # Original teacher planner
│   ├── config.json                 # Legacy configuration format
│   └── physics.json                # Old physics-specific data
│
└── 📦 archive/                     # Development Iterations
    ├── ui-iterations/              # UI development versions
    │   ├── redesigned-index.html
    │   ├── multi-scale-calendar.html
    │   └── enhanced-chunker.html
    ├── old-configs/                # Previous config versions
    │   ├── bhs.json
    │   └── test.json
    └── scheduler.js                # Original period-centric engine
```

## 🎯 Core Features

### **Chunk-Based Planning**
- **15-minute atomic units** that can be rearranged, moved, or redistributed
- **Sticky vs. Slippery chunks** - some content is more flexible than others
- **Real-time adaptation** when classroom disruptions occur
- **Intelligent time adjustment** with homework transfer capabilities

### **Universal Schedule Support**
- **Configuration-driven** - works with any bell schedule
- **Pre-built templates** for common schedule types
- **JSON-based configuration** for easy sharing between schools
- **Real-time validation** of configuration files

### **Smart Time Management**
- **Admin time reserves** - always keep buffer time for unexpected tasks
- **Assessment protection** - critical content gets priority
- **Emergency modes** - relaxed constraints for crisis days
- **Substitute-friendly** - simplified planning for substitutes

## 🏫 Supported Schedule Types

| Schedule Type | Template Available | Example Schools |
|---------------|-------------------|-----------------|
| **8-Period Drop-2 Rotation** | ✅ BHS Production | Branford High School |
| **Traditional 6-Period** | ✅ Template | Most US high schools |
| **A/B Block Schedule** | ✅ Template | Many modern high schools |
| **Custom Rotation** | 🔧 Configurable | Any school with JSON config |

## ⚙️ Technical Architecture

### **Configuration Engine** (`engine/scheduler.js`)
```javascript
// Universal schedule support
const engine = new ChunkerEngine('configs/your-school.json');
const dailyChunks = engine.calculateDailyChunks(new Date());
const completion = engine.projectCompletionDate(totalChunks);
```

### **Flexibility Engine**
- **Chunk Types**: warmup, concept, practice, lab, assessment, review
- **Flexibility Levels**: rigid, sticky, slippery
- **Cost Calculations**: automatic penalty/bonus system for adjustments
- **Constraint Satisfaction**: optimal chunk placement with teacher preferences

### **Calendar Integration**
- **Rotation day calculation** based on school start date
- **Non-instructional day handling** - holidays, professional development
- **Special schedule support** - early release, late start, emergency schedules
- **Real-time period tracking** with current period display

## 🚀 Getting Started for New Schools

### 1. **Choose Your Template**
Start with the closest match to your schedule:
- `configs/templates/traditional.json` - Standard schedule
- `configs/templates/block.json` - Block scheduling
- `configs/bhs.json` - Complex rotation example

### 2. **Customize Configuration**
Edit the JSON file to match your school:
```json
{
  "school": {
    "name": "Your School Name",
    "timezone": "America/New_York",
    "startDate": "2025-08-26"
  },
  "schedule": {
    "type": "rotation",
    "periods": [...]
  }
}
```

### 3. **Test Configuration**
Use `tools/config-tester.html` to validate your configuration and see chunk calculations.

### 4. **Deploy**
Upload your configuration and start using the chunker tools!

## 🎓 Educational Philosophy

### **Why Chunks Work**
Traditional lesson planning thinks in "days" or "periods" but reality is messier:
- ✅ **Some concepts need 45 minutes, others need 90**
- ✅ **Pop quizzes steal time**
- ✅ **Fire drills happen**  
- ✅ **Students need different pacing**
- ✅ **Assessment prep requires flexibility**

### **The Chunker Solution**
15-minute "chunks" as atomic planning units that can be:
- **Added** (+) when concepts need more time
- **Removed** (-) when you're ahead of schedule
- **Redistributed** across different days/periods
- **Auto-calculated** to show new end dates

## 📊 Success Metrics

### **For Teachers**
- **Reduced planning stress** - adaptive system handles disruptions
- **Better time awareness** - see exactly where lessons stand
- **Improved pacing** - data-driven completion projections
- **Flexible assessment** - protect critical content automatically

### **For Students**
- **Consistent progress** - less time lost to schedule disruptions
- **Better preparation** - teachers know exactly what's been covered
- **Clearer expectations** - visual progress tracking
- **Reduced anxiety** - predictable lesson progression

### **For Schools**
- **Universal adoption** - works with any bell schedule
- **Professional development** - common framework for teacher training
- **Data insights** - real completion rates vs. planned progression
- **Collaboration** - shareable configurations and best practices

## 🤝 Contributing

### **For Educators**
- Share your schedule configurations
- Report bugs or suggest improvements
- Create documentation for your use cases

### **For Developers**
- Extend the configuration engine for new schedule types
- Add new chunk types and flexibility rules
- Improve the user interface and experience

## 📞 Support

### **Documentation**
- **Technical Specs**: See `docs/` directory
- **Configuration Help**: Use `tools/config-tester.html`
- **User Guides**: Start with `ui/index.html`

### **Issues**
- **Configuration Problems**: Validate with demo tool first
- **Schedule Integration**: Check your JSON configuration format
- **Feature Requests**: Consider if it's schedule-specific or universal

---

**🎉 LOGICAL NAMING SYSTEM IMPLEMENTED**

This codebase follows a consistent, intuitive naming convention:

- **UI Files**: Clear purpose-based names (`index.html`, `tracker.html`, `calendar.html`)
- **Configuration**: Simple, hierarchical naming (`bhs.json`, `traditional.json`, `block.json`)  
- **Engine**: Descriptive functionality (`scheduler.js`)
- **Documentation**: Readable, lowercase names (`wireframe.md`, `planner.md`, `architecture.md`)
- **Tools**: Purpose-driven names (`config-tester.html`)

**Built for Branford High School • Extended for Universal Use • Part of Cosmos in the Classroom**
