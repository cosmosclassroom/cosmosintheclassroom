# Cosmos in the Classroom

An educational platform by Jonathan Corbett featuring comprehensive physics curricula and interactive learning tools.

## 🎯 Mission
Delivering structured, engaging physics education through modern web technologies, with courses designed for both Honors and Standard level high school students.

## 🏗️ Recent Major Update (August 2025)
**Physics Content Reorganization Complete** - The scattered Q4 2025 experimental content has been consolidated into a clean, maintainable structure.

## 📚 Course Offerings

### Physics Courses
- **Honors Physics** - Advanced curriculum with 10 comprehensive units
- **Standard Physics** - Accessible physics education with OpenStax integration
- **Natural Disasters** - 4-unit course covering earthquakes, hurricanes, wildfires, and landslides

### 🔬 Physics Curriculum Structure
```
physics/
├── honors/          # Honors Physics Course
│   ├── units/       # 10 units: Principles → Optics
│   ├── slides/      # Marp presentation files  
│   ├── assessments/ # Tests, quizzes, problem sets
│   └── resources/   # Labs, references, tools
├── standard/        # Standard Physics Course
│   └── units/       # Parallel structure to honors
└── shared/          # Common resources
    ├── themes/      # Marp slide themes
    └── archive/     # Historical content & tools
```

## 🛠️ Technology Stack

### Content Creation & Delivery
- **Slides**: [Marp](https://marp.app/) Markdown → [Reveal.js](https://revealjs.com/) presentations
- **Content**: Markdown files with [Marked.js](https://marked.js.org/) rendering
- **Math**: LaTeX support via KaTeX
- **Styling**: TailwindCSS + custom themes
- **Portal System**: Interactive course navigation

### Development Tools
- **Build System**: Jekyll + npm
- **Version Control**: Git with structured commit history
- **Migration Tools**: Python scripts for content organization

## 📁 Key Directory Structure
- `physics/`: **NEW** - Organized physics curriculum (August 2025)
- `src/portal/`: Course portal and navigation system
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
1. **Migration Tools**: Check `physics/shared/archive/migration-tools/`
2. **Build**: Use Jekyll for site generation
3. **Slides**: Use the Marp CLI for slide compilation

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
