# Cosmos in the Classroom
*Comprehensive High School Physics Education Platform*

## Project Overview

**Cosmos in the Classroom** delivers structured physics curricula for both Honors and Standard level high school students. The platform emphasizes scientific accuracy, progressive learning, and modern web technologies to create an engaging educational experience.

### Core Systems

- **🌟 Portal** (`/src/portal/`) - Interactive course navigation and content discovery
- **📚 Library** (`/ref/`) - Comprehensive physics reference materials and resources
- **🤔 Socrates** (`/socrates/`) - AI-powered Socratic questioning for concept exploration
- **⚡ Chunker** (`/src/Chunker/`) - Time-based learning management and progress tracking

### Recent Major Update: Universal Header System ✨

**January 2025**: Implemented consistent navigation and user tracking across all systems:

- **Standardized Navigation**: Unified site title, user greeting, and main menu
- **User Management**: Persistent identity and course/period selection
- **Progress Visualization**: Real-time academic year progress (144-chunk system)
- **Responsive Design**: Mobile-friendly interface across all platforms

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
└── shared/          # Common resources and themes
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
- **Site Generation**: Jekyll + GitHub Pages ready

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
4. Access demo at: `/src/shared/components/header-demo.html`

## Current Implementation Status

### ✅ Completed Features
- Universal header system with user tracking
- Portal course navigation
- Honors Physics content (Units 1-10)
- Marp slide generation system
- Responsive design framework
- Academic progress visualization

### 🔄 In Progress
- Standard Physics content migration
- Library system integration
- Socrates AI integration
- Cross-system progress synchronization

### 📋 Planned Features
- Backend user synchronization
- Role-based content access
- Advanced analytics dashboard
- Mobile app companion

## Contributing

### Content Guidelines
- **Scientific Accuracy**: All physics content must be scientifically correct
- **Progressive Difficulty**: Build concepts logically from basic to advanced
- **Clear Objectives**: Include measurable learning goals
- **Real-World Applications**: Connect physics to practical examples

### Technical Standards
- **Clean Code**: Readable variable names and commenting
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliance for educational content
- **Performance**: Optimize for classroom internet speeds

## File Structure Overview

cosmosintheclassroom/
├── src/
│   ├── portal/                    # Central hub and primary user interface
│   │   ├── components/            # Reusable UI elements → consumed by all systems
│   │   ├── courses/               # Course configuration → feeds content to Chunker
│   │   ├── navigation/            # Routes users between systems with context preservation
│   │   ├── user/                  # Identity and authentication → shared across systems
│   │   └── views/                 # Integrates content from all systems into unified experience
│   ├── Chunker/                   # Temporal organization of educational content
│   │   ├── calendar/              # Provides scheduling constraints to all systems
│   │   ├── progress/              # Feeds Portal for visualization and Socrates for personalization
│   │   ├── reporting/             # Aggregates data from all systems for analytics
│   │   └── scheduler/             # 144-chunk sequencing logic → referenced by all systems
│   └── shared/
│       ├── components/            # Universal header system → maintains context across boundaries
│       ├── styles/                # Visual consistency layer across all interfaces
│       ├── utils/                 # Common functions for data transformation and validation
│       └── templates/             # Structural foundation for all user-facing views
├── physics/                       # Content repository accessed by all systems
│   ├── honors/                    # Selected and sequenced by Chunker, delivered via Portal
│   ├── standard/                  # Alternative content path managed by same systems
│   └── shared/                    # Cross-referenced by both tracks and all systems
├── ref/                           # Library system - Knowledge base extending core curriculum
│   ├── archive/                   # Contextual information → feeds Socrates responses
│   ├── teaching-guides/           # Referenced by Portal based on user role
│   ├── student-guides/            # Surfaced contextually based on Chunker progress
│   ├── references/                # Verification sources for Socrates and content accuracy
│   └── media/                     # Rich content shared across all interfaces
├── socrates/                      # AI learning companion integrated throughout platform
│   ├── engine/                    # Receives context from Chunker and Portal → generates questions
│   ├── models/                    # Dynamically adjusted based on user progress data
│   ├── interfaces/                # Embedded in Portal views with consistent styling
│   ├── feedback/                  # Reports comprehension metrics → updates Chunker progress
│   └── content/                   # Aligned with physics/ structure for seamless integration
├── data/                          # Central data layer connecting all systems
│   ├── user/                      # Synchronized settings affecting all experiences
│   ├── system/                    # Global parameters governing all subsystems
│   ├── courses/                   # Structural information used by Portal, Chunker, and Socrates
│   └── sync/                      # Ensures consistent state across system boundaries
└── docs/                          # Project documentation and system understanding
    ├── api/                       # Interface specifications for system integration
    ├── development/               # Extension patterns for each system
    ├── implementation/            # Deployment and configuration instructions
    └── architecture/              # Formal documentation of system relationships

## Information Flow Between Systems

- **Portal → Chunker**: User identity, course selection, and navigation context
- **Chunker → Portal**: Progress data, current position in curriculum, next content
- **Portal → Socrates**: Current lesson context, user history, and learning objectives
- **Socrates → Chunker**: Comprehension metrics and knowledge assessment results
- **Library → All Systems**: Reference materials, media assets, and documentation
- **All Systems → Universal Header**: Current user context, progress, and system state

## Project Cleanup Guidelines

### Common Locations for Extraneous Files
- **Root directory**: Temporary files, old config files, test files
- **physics/shared/archive/**: Historical content that may need final cleanup
- **Backup directories**: Any `*_backup/`, `*_old/`, or `temp/` folders
- **Generated files**: Build artifacts, temporary HTML files, cached content
- **IDE files**: `.vscode/`, editor temporary files, swap files

### Cleanup Commands
```bash
# Find large files that might be artifacts
find . -type f -size +10M -not -path "./.git/*"

# Find temporary or backup files
find . -name "*.tmp" -o -name "*.bak" -o -name "*~" -o -name "*.swp"

# Find empty directories
find . -type d -empty -not -path "./.git/*"

# Find duplicate files by name pattern
find . -name "*copy*" -o -name "*backup*" -o -name "*old*"
```

## Support & Documentation

- **Implementation Guide**: `/src/shared/components/README.md`
- **API Documentation**: Coming soon
- **Teacher Resources**: `/ref/teaching-guides/`
- **Student Help**: `/ref/student-guides/`

## License & Usage

This educational platform is designed for high school physics education. Please ensure proper attribution when using or adapting content.

---

**Last Updated**: January 27, 2025  
**Version**: 2.0.0 (Universal Header Implementation)  
**Maintained by**: Cosmos in the Classroom Development Team

## Recent Accomplishments
- ✅ **Organized 130+ physics files** into logical unit structure
- ✅ **Archived Q4 2025 experiments** while preserving useful content  
- ✅ **Centralized slide management** with consistent theming
- ✅ **Created migration tools** for future reorganizations
- ✅ **Established naming conventions** for maintainable content

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
