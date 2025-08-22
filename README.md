# Cosmos in the Classroom
*Comprehensive High School Physics Education Platform*

## Project Overview

**Cosmos in the Classroom** delivers structured physics curricula for both Honors and Standard level high school students. The platform emphasizes scientific accuracy, progressive learning, and modern web technologies to create an engaging educational experience.

### Core Systems

- **Portal** (`/src/portal/`) - Interactive course navigation and content discovery
- **Library** (`/ref/`) - Comprehensive physics reference materials and resources
- **Socrates** (`/socrates/`) - AI-powered Socratic questioning for concept exploration
- **Chunker** (`/src/Chunker/`) - Time-based learning management and progress tracking

### Current Status: System Integration & Optimization

**January 2025**: Major cleanup and optimization phase:

- **Root Directory Cleanup**: Systematic organization of JSON, HTML, and CSS files
- **CSS Dependency Resolution**: Consolidated styling system with proper path management
- **Git Workflow Implementation**: Feature branch strategy for sustainable development
- **Universal Header System**: Consistent navigation and user tracking across all systems
- **Progress Visualization**: Real-time academic year progress (144-chunk system)

## Academic Structure

### Physics Curriculum Organization
```
physics/
├── honors/          # Advanced curriculum (10 units)
│   ├── units/       # Sequential units (01_principles → 10_optics)
│   ├── slides/      # Marp presentation files
│   ├── assessments/ # Tests, quizzes, problem sets
│   └── resources/   # Labs, references, supplementary materials
├── standard/        # Accessible curriculum (10 units)
│   └── units/       # Parallel structure to honors
└── shared/          # Common resources, themes, and archived content
```

### The Chunker System
- **144 Total Chunks** per academic year
- **4 Chunks per Class** × **4 Day Rotation** × **6 Periods** (dropping 2)
- **36 Chunks per Quarter** × **4 Quarters**
- **Real-time Progress Tracking** across all systems

### Course Offerings
- **Honors Physics**: Periods 1, 3, 7 (advanced mathematical rigor)
- **Standard Physics**: Periods 2, 4, 6 (accessible to all learners)

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+, TailwindCSS
- **Content**: Markdown with YAML frontmatter
- **Presentations**: Marp (Markdown → HTML slides)
- **Math Rendering**: KaTeX for LaTeX equations
- **User Data**: localStorage with sync capability
- **Development**: Git feature branch workflow
- **Site Generation**: Jekyll + GitHub Pages ready

## Development Workflow

### Git Branching Strategy
```bash
main                           # Stable, classroom-ready content
├── feature/ui-*              # Interface experiments and improvements
├── feature/content-*         # Curriculum development and migration
├── feature/system-*          # Major system additions and integrations
└── hotfix/*                  # Quick fixes and cleanup tasks
```

### Current Development Priorities
1. **Root Directory Optimization**: Clean separation of concerns
2. **CSS Dependency Management**: Centralized styling in `src/shared/styles/`
3. **Standard Physics Migration**: Complete content structure
4. **System Integration**: Seamless data flow between Portal, Chunker, and Socrates

## Getting Started

### For Students
1. Visit the **Portal** to explore course content
2. Use **Socrates** for concept clarification
3. Track progress with **Chunker**
4. Reference materials in **Library**

### For Educators
1. Navigate course structure in **Portal**
2. Access teaching resources in **Library**
3. Monitor student progress via **Chunker**
4. Customize content for course level

### For Developers
1. Clone repository: `git clone [repository-url]`
2. Install dependencies (if using Jekyll): `bundle install`
3. Start local server: `bundle exec jekyll serve`
4. Access personalization manager at: `/src/shared/components/cosmos-personalization-manager.html`

## Current Implementation Status

### ✅ Recently Completed
- **Universal header system** with user tracking across all platforms
- **Root directory cleanup** strategy and automation scripts
- **CSS dependency consolidation** for maintainable styling
- **Git workflow optimization** with feature branch methodology
- **Portal course navigation** with honors physics content
- **144-chunk academic progress** tracking system

### 🔄 Active Development
- **CSS path resolution** in index.html and system integration
- **Standard Physics content** migration and organization
- **Cross-system data synchronization** between Portal and Chunker
- **Library system integration** with contextual resource access

### 📋 Upcoming Features
- **Socrates AI integration** with curriculum-aware questioning
- **Advanced progress analytics** with learning pattern recognition
- **Mobile-optimized interfaces** for all core systems
- **Backend synchronization** for multi-device user experience

## File Structure Overview

cosmosintheclassroom/
├── data/                          # Configuration and user data (relocated from root)
├── config/                        # System configuration files
├── src/
│   ├── portal/                    # Central hub and primary user interface
│   ├── Chunker/                   # Temporal organization of educational content
│   └── shared/
│       ├── components/            # Universal header and reusable UI elements
│       ├── styles/                # Consolidated CSS from root cleanup
│       ├── utils/                 # Common functions and utilities
│       └── templates/             # Structural foundation for all views
├── physics/                       # Content repository accessed by all systems
│   ├── honors/                    # Advanced curriculum with complete unit structure
│   ├── standard/                  # Accessible curriculum (migration in progress)
│   └── shared/
│       ├── themes/                # Marp CSS themes for presentations
│       └── archive/               # Historical content and migration artifacts
├── ref/                           # Library system extending core curriculum
├── socrates/                      # AI learning companion (integration pending)
└── docs/                          # Project documentation and system architecture

## System Optimization & Cleanup

### Recent Cleanup Achievements
- **Root directory organization**: JSON, HTML, and CSS files properly relocated
- **CSS dependency mapping**: Centralized styling with clear path management
- **Archive system**: Historical content preserved without cluttering active development
- **Development workflow**: Feature branch strategy preventing root directory pollution

### Cleanup Automation
The `build-restructure.bat` script provides:
- Systematic file relocation with safety checks
- CSS dependency analysis and path documentation
- Git status integration for tracking changes
- Guided next steps for manual review

### Quality Assurance Process
1. **Automated cleanup** with `build-restructure.bat`
2. **CSS path verification** in all HTML files
3. **System functionality testing** across Portal, Chunker, and shared components
4. **Git branch management** for safe experimentation and rollback

## Information Flow Between Systems

- **Portal → Chunker**: User identity, course selection, and navigation context
- **Chunker → Portal**: Progress data, curriculum position, and next content recommendations
- **Portal → Library**: Resource requests based on current lesson context
- **Shared Styles → All Systems**: Consistent visual experience with centralized CSS management
- **Universal Header → All Systems**: User context, progress visualization, and navigation state

## Support & Documentation

- **Development Guide**: `build-restructure.bat` and workflow documentation
- **System Architecture**: `/docs/architecture/` (planned)
- **API Documentation**: Cross-system integration specifications (planned)
- **Teacher Resources**: `/ref/teaching-guides/`
- **Student Help**: `/ref/student-guides/`

## Next Steps & Roadmap

### Immediate Priorities (Next 2 weeks)
1. **Complete CSS path resolution** in index.html
2. **Test all system integrations** after cleanup
3. **Finalize Standard Physics** content migration
4. **Document system dependencies** and integration points

### Short-term Goals (Next month)
1. **Socrates AI integration** with Portal context awareness
2. **Mobile interface optimization** across all systems
3. **Advanced progress analytics** with learning pattern insights
4. **Cross-device synchronization** for seamless user experience

### Long-term Vision (Next quarter)
1. **Complete curriculum coverage** for both Honors and Standard tracks
2. **Adaptive learning pathways** based on student progress data
3. **Teacher dashboard** with class-wide analytics and insights
4. **Open-source community** for physics education collaboration

---

**Last Updated**: January 27, 2025  
**Version**: 2.1.0 (System Optimization & Cleanup)  
**Maintained by**: Cosmos in the Classroom Development Team

## Recent Accomplishments
- ✅ **Root directory optimization** with systematic file organization
- ✅ **CSS dependency resolution** for maintainable styling architecture
- ✅ **Git workflow implementation** with feature branch development strategy
- ✅ **Universal header system** providing consistent user experience
- ✅ **Progress tracking integration** with 144-chunk academic calendar
- ✅ **Cleanup automation** with comprehensive restructure tooling

## Documentation & Change Log
- **Current session**: Root cleanup, CSS optimization, workflow establishment
- **Previous session**: Universal header implementation and user tracking
- **Ongoing**: Standard Physics migration and cross-system integration
- **Migration history**: Preserved in `physics/shared/archive/` with full documentation
## Documentation
- See `MINUTES.md` for ongoing project updates and decisions
- Course-specific documentation in each `physics/*/` directory
- Migration history preserved in `physics/shared/archive/`

## Configuration & Customizability

Cosmos in the Classroom uses key-value pair configuration files (JSON/YAML) to enable flexible customization for:

- **Portal:** User preferences (theme, font size, navigation bookmarks)
- **Socrates Engine:** AI assistant settings (response length, feedback mode)
- **Chunker Engine:** Content chunking parameters (chunk size, overlap)
- **Library:** Feature toggles and resource management

### How It Works

- Default settings are stored in config files
- User-specific settings are merged at runtime (localStorage or database)
- All major systems read their configuration from these files for easy updates and personalization

See `config/` directory for examples and documentation.
