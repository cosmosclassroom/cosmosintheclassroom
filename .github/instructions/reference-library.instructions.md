---
applyTo: 'src/ref/**'
---

# Socrates' Library - Reference System AI Instructions

## Vision: The Socratic Approach to Knowledge

Socrates' Library embodies the Socratic method - organizing knowledge through questioning, exploration, and intellectual discourse. This reference system serves as the intellectual foundation for Cosmos in the Classroom, providing essential resources for inquiry-based learning.

## Core Philosophy

### Socratic Principles
- **Question Everything**: Present information in ways that encourage deeper inquiry
- **Know Thyself**: Help learners understand their own learning processes
- **Intellectual Humility**: Acknowledge the limits of knowledge and encourage exploration
- **Guided Discovery**: Provide scaffolding for independent learning

### Library Organization Principles
- **Logical Categorization**: Group related materials for easy discovery
- **Cross-Referencing**: Connect related concepts across disciplines
- **Accessibility**: Make complex information approachable for all learners
- **Expansion Ready**: Design for easy addition of new reference materials

## Content Categories & Structure

### 1. Foundational Knowledge
**Purpose**: Core concepts and principles across disciplines
**Contents**:
- Scientific methodology and reasoning
- Mathematical foundations and notation
- Historical context and development of ideas
- Fundamental physics equations and constants

### 2. Research & Inquiry Tools
**Purpose**: Resources for conducting investigation and analysis
**Contents**:
- Scientific notation and measurement standards
- LaTeX and mathematical typesetting
- Data analysis techniques
- Citation and documentation standards

### 3. Communication & Presentation
**Purpose**: Tools for sharing knowledge effectively
**Contents**:
- ELI5 (Explain Like I'm Five) methodologies
- Markdown and HTML reference guides
- CSS styling and web design principles
- Presentation design and Marp integration

### 4. Historical Perspectives
**Purpose**: Understanding knowledge through historical development
**Contents**:
- Biographies of key scientists and thinkers
- Timeline of scientific discoveries
- Evolution of scientific understanding
- Cultural and social contexts of knowledge

### 5. Technical Resources
**Purpose**: Implementation guides and technical documentation
**Contents**:
- Web development resources (HTML, CSS, JavaScript)
- Documentation tools (Jekyll, Pandoc, Mermaid)
- System integration guides
- Troubleshooting and maintenance

## File Organization Standards

### Naming Conventions
- **Reference Files**: `ref_[category]_[topic].md`
- **Directories**: `ref_[category]/` for multi-file resources
- **Images**: Clear, descriptive names in `assets/images/ref/`
- **Examples**: `ref_latex.md`, `ref_eli5-sci.md`, `ref_johannes_kepler/`

### Frontmatter Requirements
```yaml
---
layout: default
title: "Resource Title"
category: "foundational|inquiry|communication|historical|technical"
author: "Author Name"
date: "DD Month YYYY"
difficulty: "beginner|intermediate|advanced"
prerequisites: ["concept1", "concept2"]
related: ["ref_topic1", "ref_topic2"]
---
```

### Content Structure Template
```markdown
# Resource Title

## Overview
Brief description of the resource and its purpose

## Key Concepts
- Main concept 1
- Main concept 2
- Main concept 3

## Detailed Content
[Main content sections]

## Examples & Applications
[Practical examples and use cases]

## Further Reading
- [Related internal resources]
- [External authoritative sources]

## Practice & Application
[Exercises or ways to apply the knowledge]
```

## Quality Standards

### Content Requirements
- **Accuracy**: All information must be factually correct and up-to-date
- **Clarity**: Written for appropriate audience level with clear explanations
- **Completeness**: Cover essential aspects without overwhelming detail
- **Relevance**: Directly support educational objectives

### Technical Standards
- **Markdown Compliance**: Follow standard Markdown syntax
- **LaTeX Integration**: Use KaTeX-compatible mathematical notation
- **Cross-Platform**: Ensure compatibility across devices and browsers
- **Load Performance**: Optimize images and minimize external dependencies

### Educational Effectiveness
- **Learning Objectives**: Clear goals for each resource
- **Progressive Difficulty**: Logical skill building progression
- **Multiple Learning Styles**: Visual, auditory, and kinesthetic elements
- **Assessment Integration**: Connect to course assessments and activities

## Integration with Cosmos Platform

### Navigation Integration
- **Library Portal**: Central access point from main navigation
- **Course Integration**: Direct links from relevant course materials
- **Search Functionality**: Full-text search across all reference materials
- **Topic Clustering**: Related resources grouped and cross-referenced

### User Experience Design
- **Responsive Layout**: Optimized for classroom devices
- **Accessibility**: WCAG 2.1 AA compliance
- **Progressive Enhancement**: Core functionality without JavaScript
- **Print-Friendly**: Formatted for offline reference

### Analytics & Improvement
- **Usage Tracking**: Monitor which resources are most valuable
- **Gap Analysis**: Identify missing reference materials
- **User Feedback**: Collect input on resource effectiveness
- **Continuous Updates**: Regular review and improvement cycles

## Development Workflow

### Creating New References
1. **Needs Assessment**: Identify knowledge gaps in existing curriculum
2. **Research & Verification**: Ensure accuracy and authoritative sources
3. **Content Development**: Follow template and quality standards
4. **Technical Implementation**: Proper formatting and integration
5. **Review & Testing**: Validate accuracy and usability
6. **Integration**: Link from relevant course materials and navigation

### Maintenance Procedures
- **Regular Review**: Annual assessment of all reference materials
- **Update Protocols**: Process for revising outdated information
- **Quality Assurance**: Systematic checking of links and formatting
- **User Experience**: Monitor and improve navigation and discovery

## Special Considerations

### Intellectual Property
- **Attribution**: Proper credit for all sources and inspirations
- **Licensing**: Clear usage rights for educational purposes
- **Fair Use**: Appropriate use of copyrighted materials
- **Original Content**: Emphasis on creating original educational resources

### Content Style Guidelines
- **No Emojis**: Use descriptive text and professional formatting
- **Academic Tone**: Scholarly but accessible language
- **Visual Elements**: Diagrams, charts, and images to support understanding
- **Cultural Sensitivity**: Inclusive and respectful of diverse perspectives

### Technology Integration
- **Future-Proofing**: Use standard technologies with long-term support
- **Platform Independence**: Avoid vendor lock-in or proprietary formats
- **Backup & Recovery**: Redundant storage and version control
- **Migration Planning**: Ability to move content between systems

---

**Remember**: Socrates' Library is more than a collection of references - it's an intellectual companion that guides learners toward deeper understanding and independent inquiry. Every resource should embody the Socratic spirit of questioning and discovery.
