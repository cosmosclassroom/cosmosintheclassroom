# Cosmos in the Classroom - Portal System

## Overview

The Portal System is a comprehensive web-based educational platform designed to deliver structured physics and natural disasters curriculum through an intuitive, modular interface. Built with modern web technologies, it provides a seamless learning experience across multiple courses with consistent navigation, assessment tools, and resource management.

## Architecture

### Core Philosophy
The portal follows a **modular course architecture** where each subject is self-contained with standardized content types, allowing for scalable curriculum development and consistent user experience across different domains.

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: TailwindCSS (production build) + Custom CSS variables
- **Data Management**: JSON-based configuration files
- **Analytics**: Universal data logger for learning analytics
- **Build Tools**: npm, TailwindCSS CLI

### Design System
- **Color Palette**: Academic theme with parchment, sage, terracotta, deep blue, and gilding
- **Typography**: Merriweather serif for body text, Inter sans-serif for interface elements
- **Layout**: Responsive design with mobile-first approach

## Directory Structure

```
portal/
│
├── index.html                     # Main portal entry point
├── portal-quiz.html              # Learning style assessment
├── script.js                     # Core portal functionality
├── styles.css                    # Custom CSS variables and components
├── tailwind-output.css           # Compiled TailwindCSS (production)
├── classes.json                  # Course catalog configuration
├── directory.py                  # Python utilities for structure management
│
├── scripts/                      # Shared utilities
│   ├── universal-data-logger.js  # Analytics and data collection (single source)
│   └── logger-readme.md          # Documentation for data logging
│
├── dev/                          # Development tools
│   └── course-template.json      # Template for new course creation
│
├── hphysics/                     # Honors Physics Course
│   ├── portal.html               # Course-specific portal page
│   ├── course.json               # Course metadata and structure
│   ├── styles.css                # Course-specific styling
│   │
│   ├── admin/                    # Administrative configurations
│   │   ├── hphysics_organization.json
│   │   ├── physics.json
│   │   └── viewertemplate.json
│   │
│   ├── schedule/                 # Course scheduling and viewers
│   │   ├── hphysschedule.html
│   │   ├── schedule2.html
│   │   ├── schedule3.html
│   │   ├── schedule6.html
│   │   └── viewer.html
│   │
│   ├── flexbook/                 # Interactive textbook content
│   │   ├── toc.html              # Table of contents
│   │   ├── chapter1/             # Unit P1: Energy Flow from Earth's Systems
│   │   │   ├── P1-1.html         # Scientist perspective
│   │   │   ├── chapter1.html     # Chapter overview
│   │   │   ├── 1-eratosthenes-lab.html
│   │   │   └── artifacts/
│   │   │       └── forecasting-mock-dataset.pdf
│   │   ├── chapter2/             # Unit P1: Motion and Engineering
│   │   │   ├── P1-2.html
│   │   │   ├── chapter2.html
│   │   │   ├── 2-rocket-problem.html
│   │   │   └── artifacts/
│   │   │       ├── mitigation-design-challenge.pdf
│   │   │       └── shake-table-testing.pdf
│   │   ├── chapter3/             # Unit P1: Policy and Ethics
│   │   │   ├── P1-3.html
│   │   │   ├── chapter3.html
│   │   │   ├── 3-seige.html
│   │   │   └── artifacts/
│   │   │       ├── budget-allocation-simulation.pdf
│   │   │       ├── ethical-dilemma-role-play.pdf
│   │   │       └── policy-brief-template.pdf
│   │   ├── chapter4-6/           # Unit P2: Forces and Structures
│   │   ├── chapter7-9/           # Unit P3: Waves and Communication
│   │   ├── chapter10/            # Unit P4: Advanced Energy Systems
│   │   └── chapter11/            # Unit P5: Culminating Projects
│   │
│   ├── briefs/                   # Concise lesson summaries
│   │   ├── P1-1.html             # Brief for each chapter
│   │   ├── P1-2.html
│   │   ├── P1-3.html
│   │   ├── P2-1.html
│   │   ├── P2-2.html
│   │   ├── P2-3.html
│   │   ├── P3-1.html
│   │   ├── P3-2.html
│   │   ├── P3-3.html
│   │   ├── P4-1.html
│   │   └── P5-1.html
│   │
│   ├── notes/                    # Detailed study materials
│   │   ├── P1-1.html             # Comprehensive notes for each lesson
│   │   ├── P1-2.html
│   │   ├── P1-3.html
│   │   ├── P2-1.html
│   │   ├── P2-2.html
│   │   ├── P2-3.html
│   │   ├── P3-1.html
│   │   ├── P3-2.html
│   │   ├── P3-3.html
│   │   ├── P4-1.html
│   │   └── P5-1.html
│   │
│   ├── slides/                   # Presentation materials
│   │   ├── P1-1.pdf              # PDF slides for each lesson
│   │   ├── P1-2.pdf
│   │   ├── P1-3.pdf
│   │   ├── P2-1.pdf
│   │   ├── P2-2.pdf
│   │   ├── P2-3.pdf
│   │   ├── P3-1.pdf
│   │   ├── P3-2.pdf
│   │   ├── P3-3.pdf
│   │   ├── P4-1.pdf
│   │   └── P5-1.pdf
│   │
│   └── glossary/                 # Reference materials
│       ├── key-terms.html
│       └── learning-objectives.html
│
├── sphysics/                     # Standard Physics Course
│   ├── course.json               # Course structure (similar to hphysics)
│   ├── flexbook/                 # Simplified content structure
│   ├── briefs/                   # Lesson summaries
│   ├── notes/                    # Study materials
│   ├── slides/                   # Presentations
│   ├── glossary/                 # Reference materials
│   └── osephys/                  # OpenStax integration
│       ├── osephys1.json
│       ├── osephysics2.json
│       ├── osephysics3.json
│       ├── p1.json
│       ├── p2.json
│       ├── p3.json
│       ├── p4.json
│       ├── p5.json
│       ├── p6.json
│       └── portal.html
│
├── natdis/                       # Natural Disasters Course
│   ├── portal.html               # Course portal
│   ├── course.json               # Course configuration
│   ├── ND1/                      # Earthquakes unit
│   ├── ND2/                      # Hurricanes and Sea Level unit
│   ├── ND3/                      # Wildfires unit
│   └── ND4/                      # Landslides and Flooding unit
│
└── units/                        # Shared unit templates and resources
    ├── glossary-learning-objectives/
    │   ├── key-terms.html
    │   └── learning-objectives.html
    │
    ├── ND1-earthquakes/          # Earthquake science and engineering
    │   ├── briefs/               # Quick overviews
    │   │   ├── ch1.html          # Scientist perspective
    │   │   ├── ch2.html          # Engineer perspective
    │   │   └── ch3.html          # Policymaker perspective
    │   ├── flexbook/             # Interactive content
    │   │   ├── ch1-scientist.html
    │   │   ├── ch2-engineer.html
    │   │   ├── ch3-policymaker.html
    │   │   └── artifacts/
    │   │       ├── budget-allocation-simulation-handout.pdf
    │   │       ├── forecasting-mock-dataset-handout.pdf
    │   │       ├── mitigation-design-challenge-handout.pdf
    │   │       ├── policy-brief-template.docx
    │   │       └── shake-table-testing-data-log.pdf
    │   ├── notes/                # Detailed materials
    │   │   ├── ch1.html
    │   │   ├── ch2.html
    │   │   └── ch3.html
    │   └── slides/               # Presentations
    │       ├── ch1.pdf
    │       ├── ch2.pdf
    │       └── ch3.pdf
    │
    ├── ND2-hurricanes-sealevel/  # Hurricane and coastal science
    ├── ND3-wildfires/            # Wildfire science and management
    └── ND4-landslides-flooding/  # Geological hazards
```

## Key Features

### 🎯 Multi-Course Architecture
- **Modular Design**: Each course (hphysics, sphysics, natdis) is self-contained
- **Consistent Structure**: Standardized content types across all courses
- **Scalable**: Easy to add new courses following established patterns

### 📚 Content Organization
- **Four Content Types per Lesson**:
  - **Flexbook**: Interactive, multimedia-rich content
  - **Briefs**: Concise summaries for quick review
  - **Notes**: Detailed study materials
  - **Slides**: Presentation materials (PDF format)

### 🔍 Three-Perspective Approach
- **Scientist**: Research and data analysis focus
- **Engineer**: Design and problem-solving emphasis
- **Policymaker**: Decision-making and societal impact

### 📊 Learning Analytics
- **Universal Data Logger**: Tracks user interactions and learning patterns
- **Assessment Integration**: Learning style quiz with personalized recommendations
- **Progress Tracking**: Monitor student engagement across content types

### 🎨 Design System
- **Academic Theme**: Professional, scholarly appearance
- **Responsive Layout**: Mobile-first design principles
- **Accessibility**: High contrast, readable typography
- **Production-Ready**: Optimized TailwindCSS build for performance

## Course Structures

### Honors Physics (hphysics)
**5 Major Units, 11 Chapters**
- **P1**: Energy Flow from Earth's Systems (3 chapters)
- **P2**: Forces and Structures (3 chapters) 
- **P3**: Waves and Communication (3 chapters)
- **P4**: Advanced Energy Systems (1 chapter)
- **P5**: Culminating Projects (1 chapter)

### Standard Physics (sphysics)
**Similar structure to Honors Physics with simplified content**
- Includes OpenStax Physics integration
- Streamlined for standard-level learners

### Natural Disasters (natdis)
**4 Major Units, 12 Chapters**
- **ND1**: Earthquakes (3 chapters)
- **ND2**: Hurricanes and Sea Level (3 chapters)
- **ND3**: Wildfires (3 chapters)
- **ND4**: Landslides and Flooding (3 chapters)

## Configuration Files

### Global Configuration
- `classes.json`: Course catalog and metadata
- `course.json`: Individual course structure and navigation

### Development Tools
- `course-template.json`: Template for creating new courses
- `directory.py`: Python utilities for file management

## Getting Started

### Building the Project
```bash
# Install dependencies
npm install

# Build TailwindCSS for production
npm run build-css

# Watch for changes during development
npm run watch-css
```

### Adding New Content
1. Follow the established directory structure
2. Use course.json to define navigation and metadata
3. Maintain the three-perspective approach (scientist/engineer/policymaker)
4. Include all four content types (flexbook/briefs/notes/slides)

### Customization
- Modify `styles.css` for theme adjustments
- Update `tailwind.config.js` for new utility classes
- Edit course.json files for navigation changes

## Performance Optimizations

- **Production TailwindCSS**: Only includes used styles (~26KB)
- **Modular Loading**: Content loaded on-demand
- **Optimized Images**: Compressed artifacts and media
- **Minimal Dependencies**: Lightweight JavaScript footprint

## Browser Support
- Modern browsers (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Mobile responsive design
- Progressive enhancement for older browsers

---

*This portal system represents a comprehensive approach to digital science education, combining rigorous academic content with modern web technologies to create an engaging, accessible learning environment.*
