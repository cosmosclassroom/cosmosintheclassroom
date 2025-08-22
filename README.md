# Cosmos in the Classroom

Educational physics platform by Jonathan Corbett - Structured curricula with AI-enhanced content extraction.

## 🎯 **Mission**
Modern physics education for high school students (Honors & Standard levels) using web technologies.

## 📚 **Courses**
- **Honors Physics**: 10-unit advanced curriculum (calculus-based)
- **Standard Physics**: Accessible curriculum with OpenStax integration
- **Natural Disasters**: 4-unit specialized course

## 🏗️ **Structure** (Post-August 2025 Reorganization)
```
physics/
├── honors/units/       # 10 units: Principles → Optics
├── standard/units/     # Parallel accessible curriculum  
└── shared/themes/      # Marp slide themes

src/
├── Chunker/           # AI curriculum extraction system
├── portal/            # Course navigation interface
└── .ai/               # AI development resources

.ai/
├── development-checklist.md  # Workflow standards
├── context.md               # Project state tracking
└── prompts/                 # AI interaction templates
```

## 🛠️ **Technology**
- **Content**: Markdown + frontmatter, Marp slides, KaTeX math
- **Build**: Jekyll + TailwindCSS + npm
- **AI Integration**: Chunker system with cognitive load optimization
- **Portal**: Interactive navigation and assessment tools

## 🤖 **AI Features**
- **Curriculum Extraction**: Document → structured JSON conversion
- **Quality Assurance**: Educational logic validation and review
- **Cognitive Load**: 2-4 learning units per day optimization
- **Token Efficiency**: 80%+ reduction in prompt costs

## 🚀 **Quick Start**
- **Students**: `src/portal/index.html` → select course → navigate units
- **Educators**: Browse `physics/honors/` or `physics/standard/` for content
- **Developers**: Follow `.ai/development-checklist.md` for standards

## � **Recent Updates**
- ✅ Organized 130+ physics files into logical structure
- ✅ AI-powered curriculum extraction system
- ✅ Token-optimized prompt templates (80% efficiency gain)
- ✅ Community hub with 36 weekly inspirational quotes
- `.ai/`: AI assistant development resources and documentation
- `slides/`: Legacy slides (being migrated to `physics/*/slides/`)
- `assets/`: Shared CSS, JavaScript, and media files
- `_site/`: Jekyll build output

## 🚀 Quick Start

### For Students
1. Visit the course portal: `src/portal/index.html`
2. Select your course (Honors Physics, Standard Physics, Natural Disasters)
3. Navigate through units and lessons

### For Educators
1. **Content**: Browse `physics/honors/units/` or `physics/standard/units/`
2. **Slides**: Use Marp files in `physics/*/slides/` directories
3. **Assessments**: Find quizzes and tests in `physics/*/assessments/`

### For Developers
1. **AI Development**: Follow `.ai/development-checklist.md` for workflow standards
2. **Migration Tools**: Check `physics/shared/archive/migration-tools/`
3. **Build**: Use Jekyll for site generation
4. **Slides**: Use the Marp CLI for slide compilation
5. **AI Integration**: See `.ai/context.md` for project state and guidelines

## 🤖 AI-Enhanced Development

### AI Assistant Resources
- **Development Standards**: `.ai/development-checklist.md` - Quality gates and workflow
- **Project Context**: `.ai/context.md` - Current state and architectural decisions  
- **Prompt Templates**: `.ai/prompts/templates.md` - Standardized AI interactions
- **Chunker System**: `src/Chunker/` - AI curriculum extraction and optimization

### AI Integration Points
- **Curriculum Extraction**: Automated content structuring from educational materials
- **Quality Assurance**: AI-assisted content validation and pedagogical review
- **Development Workflow**: Context-aware code review and optimization suggestions
- **Educational Logic**: Cognitive load optimization and prerequisite flow validation

## 📈 Recent Accomplishments
- ✅ **Organized 130+ physics files** into logical unit structure
- ✅ **Archived Q4 2025 experiments** while preserving useful content  
- ✅ **Centralized slide management** with consistent theming
- ✅ **Created migration tools** for future reorganizations
- ✅ **Established naming conventions** for maintainable content

## 📋 Documentation
- See `MINUTES.md` for ongoing project updates and decisions
- Course-specific documentation in each `physics/*/` directory
- Migration history preserved in `physics/shared/archive/`
