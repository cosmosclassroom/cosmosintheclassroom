---
applyTo: '**'
---

# Cosmos in the Classroom - AI Assistant Instructions

## Project Overview & Mission

**Cosmos in the Classroom** is a comprehensive educational platform delivering structured physics curricula for high school students. The project emphasizes clean organization, modern web technologies, and maintainable content structure.

### Core Vision
- **Educational Excellence**: Create engaging, scientifically accurate physics education
- **Accessibility**: Support both Honors and Standard level learners
- **Maintainability**: Organize content for long-term sustainability
- **Modern Technology**: Leverage web technologies for interactive learning

## Architecture Understanding

### Content Organization (Post-August 2025 Reorganization)
```
physics/
├── honors/          # Advanced physics curriculum
│   ├── units/       # 10 sequential units (01_principles → 10_optics)
│   ├── slides/      # Marp presentation files
│   ├── assessments/ # Tests, quizzes, problem sets
│   └── resources/   # Labs, references, supplementary materials
├── standard/        # Accessible physics curriculum
│   └── units/       # Parallel structure to honors
└── shared/          # Common resources
    ├── themes/      # Marp CSS themes
    └── archive/     # Historical content & migration tools
```

### Technology Stack
- **Content**: Markdown files with frontmatter
- **Slides**: Marp (Markdown → HTML presentations)
- **Site Generation**: Jekyll + TailwindCSS
- **Math Rendering**: KaTeX for LaTeX equations
- **Portal System**: Interactive course navigation
- **Version Control**: Git with structured commit messages

## Content Guidelines

### Physics Curriculum Standards
1. **Unit Structure**: Each unit contains lessons/, labs/, problemsets/, and README.md
2. **Scientific Accuracy**: All physics content must be scientifically correct
3. **Progressive Difficulty**: Content should build logically from basic to advanced concepts
4. **Real-World Applications**: Connect physics concepts to practical examples

### File Naming Conventions
- **Units**: `##_descriptive-name` (e.g., `06_circular_gravity`)
- **Lessons**: `lesson##_topic-name.md`
- **Problem Sets**: `ps##.#_topic-name.md` (e.g., `ps06.1_circular-motion.md`)
- **Labs**: `lab##_topic-name.md`
- **Slides**: `unit##_topic-name.md`

### Content Structure Requirements
- **Frontmatter**: Include title, author, date, course level
- **Learning Objectives**: Clear, measurable goals for each lesson
- **Prerequisites**: Reference required prior knowledge
- **Cross-References**: Link related units and concepts

## Development Guidelines

### Code Quality Standards
- **Readable Code**: Clear variable names and commenting
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Accessibility**: WCAG compliance for educational content
- **Performance**: Optimize for classroom internet speeds

### Git Workflow
- **Commit Messages**: Descriptive, structured format
  ```
  Brief summary (50 chars max)
  
  - Detailed bullet points of changes
  - Reference issue numbers when applicable
  - Explain WHY changes were made
  ```
- **Branch Strategy**: Feature branches for major additions
- **Documentation**: Update README.md and MINUTES.md for significant changes

### Slide Development (Marp)
- **Theme Consistency**: Use shared themes from `physics/shared/themes/`
- **Visual Clarity**: High contrast, readable fonts, minimal text per slide
- **Physics Diagrams**: Include clear, labeled scientific illustrations
- **Progressive Disclosure**: Build complex concepts step-by-step

## Content Creation Principles

### Educational Pedagogy
1. **Scaffolding**: Build from simple to complex concepts
2. **Multiple Representations**: Verbal, visual, mathematical, graphical
3. **Active Learning**: Include interactive elements and practice problems
4. **Assessment Alignment**: Match assessments to learning objectives

### Physics-Specific Guidelines
- **Units & Measurements**: Always include proper units and significant figures
- **Problem Solving**: Use systematic approaches (Given, Find, Solution, Check)
- **Conceptual Understanding**: Emphasize why physics works, not just how
- **Mathematical Rigor**: Appropriate level for course (Honors vs Standard)

### Content Types & Templates

#### Lesson Structure
```markdown
---
title: "Lesson Title"
unit: "##"
course: "honors" | "standard"
objectives:
  - "Students will..."
prerequisites:
  - "Previous lesson/concept"
---

# Lesson Title

## Learning Objectives
- Objective 1
- Objective 2

## Prerequisites
- Required prior knowledge

## Introduction
[Hook/motivation]

## Core Content
[Main instructional content]

## Examples & Applications
[Worked examples and real-world connections]

## Summary
[Key takeaways]

## Practice Problems
[Formative assessment]
```

#### Problem Set Structure
```markdown
---
title: "PS ##.# - Topic Name"
course: "honors" | "standard"
unit: "##"
difficulty: "beginner" | "intermediate" | "advanced"
---

# Problem Set ##.# - Topic Name

## Instructions
[Clear directions for students]

## Problems
### Problem 1
[Problem statement with clear given information]

### Problem 2
[Progressive difficulty increase]
```

## AI Assistant Responsibilities

### When Working with Content
1. **Maintain Scientific Accuracy**: Verify all physics content for correctness
2. **Follow Naming Conventions**: Use established file and directory naming
3. **Preserve Organization**: Respect the new physics/ directory structure
4. **Update Cross-References**: Maintain links between related content
5. **Document Changes**: Update MINUTES.md for significant modifications

### When Creating New Content
1. **Check Prerequisites**: Ensure logical progression from previous lessons
2. **Include Learning Objectives**: Make goals explicit and measurable
3. **Provide Multiple Examples**: Various difficulty levels and contexts
4. **Consider Both Courses**: Adapt content appropriately for Honors vs Standard
5. **Test Formatting**: Verify Markdown, LaTeX, and Marp rendering

### When Organizing Files
1. **Respect Existing Structure**: Work within the established physics/ organization
2. **Archive Appropriately**: Use physics/shared/archive/ for historical content
3. **Maintain Consistency**: Follow established patterns and conventions
4. **Update Documentation**: Reflect changes in README.md and relevant docs

### Common Tasks & Approaches

#### Content Migration
- Analyze existing content for educational value
- Preserve useful materials while eliminating duplicates
- Update file paths and cross-references
- Document migration decisions

#### Slide Creation
- Use Marp syntax with physics/shared/themes/
- Include clear physics diagrams and equations
- Maintain visual consistency across presentations
- Test rendering and navigation

#### Assessment Development
- Align with learning objectives
- Provide clear rubrics and answer keys
- Include various question types (conceptual, computational, application)
- Consider accessibility and diverse learning styles

## Quality Assurance

### Content Review Checklist
- [ ] Scientific accuracy verified
- [ ] Learning objectives clearly stated
- [ ] Prerequisites appropriately identified
- [ ] Examples include worked solutions
- [ ] Cross-references updated
- [ ] File naming conventions followed
- [ ] Markdown formatting correct
- [ ] Math equations render properly

### Technical Review Checklist
- [ ] Links functional and current
- [ ] Images optimized and accessible
- [ ] Mobile responsiveness verified
- [ ] Load times acceptable
- [ ] Git commit message descriptive
- [ ] Documentation updated

## Project Context & History

### Recent Major Changes (August 2025)
- Completed major physics content reorganization
- Eliminated Q4 2025 experimental debris
- Established current directory structure
- Created migration tools and documentation

### Ongoing Priorities
1. Complete Standard Physics content migration
2. Develop missing content for Units 3 and 5
3. Enhance portal navigation system
4. Improve OpenStax integration
5. Create interactive learning modules

## Emergency Protocols

### If Content Structure Changes
1. Document reasoning in MINUTES.md
2. Create migration path for existing content
3. Update all cross-references
4. Test portal navigation
5. Commit changes with detailed explanation

### If Technical Issues Arise
1. Check existing documentation first
2. Preserve content integrity above all
3. Document problems and solutions
4. Update instructions for future prevention

---

**Remember**: This is an educational platform serving real students and teachers. Prioritize accuracy, clarity, and maintainability in all work.