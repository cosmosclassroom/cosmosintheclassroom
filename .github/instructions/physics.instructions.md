---
applyTo: 'physics/**'
---

# Physics Content Instructions

## Core Principles
- **Accuracy**: All physics content scientifically correct with proper SI units
- **Scaffolding**: Build complex from simple concepts with multiple representations
- **Real-World Links**: Connect abstract physics to everyday applications
- **Problem-Solving**: Systematic approaches with worked examples

## Course Levels
**Honors**: Mathematical depth, calculus derivations, research connections, challenge problems
**Standard**: Conceptual emphasis, practical applications, guided practice, accessible language

## Unit Sequence (1-10)
1. **Principles** - Scientific method, measurement, sig figs
2. **Kinematics 1** - 1D motion, graphs, equations  
3. **Kinematics 2** - Vectors, projectiles, relative motion
4. **Dynamics** - Forces, Newton's laws, friction
5. **Conservation** - Energy, momentum, power
6. **Circular/Gravity** - Centripetal force, gravitation, orbits
7. **SHM** - Springs, pendulums, waves
8. **Electromagnetism** - Charge, fields, induction
9. **Electricity** - Current, circuits, power
10. **Optics** - Light, reflection, refraction, interference

## Content Templates

### Lesson Structure
```markdown
---
title: "Lesson ##.# - Topic"
unit: "##"  
course: "honors|standard"
objectives: ["Students will..."]
prerequisites: ["Previous concepts"]
---

# Lesson ##.# - Topic

## Objectives & Prerequisites
[List clearly with links to prior lessons]

## Introduction (Hook & Preview)
[Engaging opener connecting to real world]

## Core Content
[Main physics with equations in LaTeX, diagrams, worked examples]

## Practice & Assessment
[Guided then independent problems, formative checks]

## Summary & Preview
[Key takeaways, connect to next lesson]
```

### Problem Set Structure  
```markdown
---
title: "PS ##.# - Topic"
unit: "##"
course: "honors|standard"
difficulty: "beginner|intermediate|advanced"
---

## Instructions
Show work, include units, proper sig figs, draw diagrams

## Problems
### Conceptual (30%)
### Computational (50%) 
### Applications (20%)

## Answer Key
[Detailed solutions with explanations]
```
### Lab Structure
```markdown
---
title: "Lab ##.# - Name"
unit: "##"
objectives: ["Investigate..."]
materials: ["Equipment list"]
safety_notes: ["Important safety"]
---

## Purpose & Background
[What concept + brief theory]

## Procedure & Data Collection  
[Step-by-step with data tables]

## Analysis & Conclusions
[Calculations, graphs, error analysis, real-world connections]
```

## Assessment Guidelines
- **Quizzes**: 1-2 per unit, 10-15 min, mixed format
- **Tests**: 30% conceptual, 50% computational, 20% application
- **Progressive Difficulty**: 60% on-level, 30% challenging, 10% advanced

## Marp Slides Template
```markdown
---
title: "Unit ## - Topic"
author: "Jonathan Corbett"  
marp: true
theme: slidesA
math: katex
---

# Unit ## - Topic
## Objectives → Content → Summary
- Minimal text per slide
- Clear physics diagrams
- KaTeX equations
```

## Quality Checklist
- [ ] Equations correct and formatted
- [ ] Units included and consistent  
- [ ] Diagrams clear and labeled
- [ ] Examples complete with solutions
- [ ] Learning objectives measurable
- [ ] Real-world connections meaningful
- [ ] Cross-references updated

## Common Misconceptions
**Mechanics**: Force/motion confusion, velocity vs acceleration, Newton's 3rd law
**Energy**: Creation vs conversion, reference points, conservation applications  
**Electricity**: Current vs voltage, series vs parallel, power vs energy
**Waves**: Wave vs particle light, reflection/refraction, interference concepts
