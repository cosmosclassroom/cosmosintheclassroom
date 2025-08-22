# Specialized Prompts for Cosmos Development

## 🎯 **Educational Content Prompts**

### **Physics Concept Explanation**
```
Explain [physics concept] for [honors|standard] level students.
Requirements: Scientific accuracy, real-world examples, common misconceptions addressed, proper units
Format: Introduction → Core concept → Examples → Applications → Practice problems
Constraints: 3-4 key points maximum, age-appropriate language, visual description needs
```

### **Problem Set Generation**
```
Create physics problem set: [topic] ([honors|standard])
Structure: 2 conceptual, 3 computational, 1 application problem
Difficulty: Progressive (simple → moderate → challenging)
Include: Given-Find-Solution format, proper units, real-world contexts
Provide: Detailed solution key with common mistake warnings
```

### **Lab Activity Design**
```
Design physics lab: [concept] ([honors|standard])
Duration: [time] | Group size: [number] | Safety level: [basic|moderate|high]
Include: Purpose, materials, step-by-step procedure, data tables, analysis questions
Focus: Hands-on discovery, measurement practice, error analysis, real-world connections
```

## 🔧 **Technical Development Prompts**

### **Portal Feature Development**
```
Create portal component: [feature name]
Tech stack: HTML5, TailwindCSS, Vanilla JS
Requirements: Mobile-first, WCAG 2.1 AA, <3s load time
Include: Responsive breakpoints, keyboard navigation, semantic markup
Test: Cross-browser compatibility, accessibility validation
```

### **Chunker Integration**
```
Integrate [feature] with Chunker system
Data flow: [source] → JSON validation → Chunker engine → [output]
Schema: Follow chunker-schema.json requirements
Validation: Educational logic, cognitive load limits, error handling
Export: AI context generation for content creation
```

### **Performance Optimization**
```
Optimize [component] for classroom environments
Constraints: Limited bandwidth, varied devices, slow connections
Focus: Image compression, lazy loading, minimal dependencies
Target: <3s page load, <500KB initial payload, progressive enhancement
```

## 🧠 **AI System Prompts**

### **Curriculum Analysis**
```
Analyze curriculum document for Chunker extraction
Input: [document content] | Level: [honors|standard] | Subject: Physics
Extract: Units, lessons, learning objectives, time estimates, prerequisites
Validate: Cognitive load (2-4 units/day max), prerequisite flow, assessment alignment
Output: JSON conforming to chunker-schema.json
```

### **Learning Objective Creation**
```
Generate learning objectives: [topic] ([level])
Framework: Bloom's taxonomy action verbs
Types: 40% comprehension, 40% application, 20% analysis/synthesis
Format: "Students will [verb] [concept] by [method/context]"
Include: Measurable outcomes, real-world applications, assessment connections
```

### **Content Gap Analysis**
```
Identify content gaps in [unit/course]
Compare: Current content vs [standard curriculum/textbook]
Focus: Missing concepts, insufficient scaffolding, weak assessments
Priority: Essential concepts, prerequisite chains, assessment alignment
Recommend: Specific additions, improvements, reorganization
```

## 📊 **Analytics & Assessment Prompts**

### **Usage Pattern Analysis**
```
Analyze user behavior data: [data source]
Metrics: Page views, time on content, completion rates, error patterns
Identify: Popular content, problem areas, user journey issues
Recommend: Content improvements, navigation changes, feature additions
Format: Executive summary + detailed findings + action items
```

### **Educational Effectiveness Review**
```
Evaluate educational effectiveness: [content/feature]
Criteria: Learning objective achievement, student engagement, teacher usability
Data: Usage analytics, feedback surveys, performance metrics
Analysis: Strengths, weaknesses, improvement opportunities
Output: Recommendations with priority levels and implementation complexity
```

## 🎨 **Content Creation Workflows**

### **Marp Slide Generation**
```
Create Marp presentation: [topic] ([level])
Template: Unit slides with cosmos theme
Structure: Title → Objectives → Content (max 6 words/slide) → Summary
Include: Physics diagrams, KaTeX equations, minimal text
Style: High contrast, large fonts, consistent visual hierarchy
```

### **Assessment Alignment Check**
```
Validate assessment alignment: [assessment] with [learning objectives]
Check: Each objective measured, appropriate difficulty, varied question types
Distribution: 30% conceptual, 50% computational, 20% application
Review: Clarity, fairness, accessibility, time appropriateness
Recommend: Improvements, modifications, additional items needed
```

## 🔍 **Quality Assurance Prompts**

### **Physics Accuracy Validation**
```
Verify physics accuracy: [content]
Check: Equations correct, units consistent, concepts scientifically sound
Validate: Dimensional analysis, limiting cases, sign conventions
Common errors: Unit mistakes, vector/scalar confusion, misconceptions
Reference: Authoritative physics sources, peer-reviewed materials
```

### **Accessibility Compliance Check**
```
Review accessibility: [web content/feature]
Standards: WCAG 2.1 AA compliance
Check: Semantic markup, keyboard navigation, screen reader compatibility
Test: Color contrast, focus indicators, alt text, form labels
Tools: axe-core, WAVE, manual keyboard testing
Report: Issues found, severity levels, remediation steps
```

## 💡 **Innovation & Improvement Prompts**

### **Feature Enhancement**
```
Enhance [existing feature] for better user experience
Current state: [description] | User feedback: [issues/requests]
Technology: Modern web standards, performance-first
Innovation: Creative solutions, emerging technologies appropriate for education
Constraints: Backwards compatibility, accessibility, classroom environments
```

### **Educational Technology Integration**
```
Integrate [technology] with Cosmos platform
Purpose: [educational goal] | Audience: [teachers|students|both]
Requirements: Seamless workflow, minimal learning curve, clear value proposition
Consider: Privacy, security, cost, maintenance, scalability
Implementation: Phased approach, testing protocol, feedback collection
```
