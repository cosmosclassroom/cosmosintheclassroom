# AI Prompt Templates - Cosmos in the Classroom

## 🎯 **Core System Prompts**

### **Curriculum Extraction**
```
Extract structured physics curriculum. Output JSON per chunker-schema.json.
Context: {honors|standard} high school physics, 2-4 units/day max
Input: {content_to_analyze}
Requirements: 1-3 related units per chunk, clear prerequisites, measurable objectives, real-world applications, assessment alignment
Validate: Scientific accuracy, pedagogical flow, cognitive load
```

### **Content Quality Review**
```
Review physics content for accuracy and pedagogy.
Content: {content_block} | Level: {honors|standard}
Check: Scientific accuracy, learning progression, real-world relevance, assessment alignment, cognitive load
Output: Pass/Fail, score (1-10), specific issues, improvements
```

### **Learning Objectives**
```
Create 3-5 measurable physics learning objectives.
Topic: {physics_topic} | Level: {honors|standard} | Unit: {unit_context}
Use Bloom's taxonomy action verbs. Include conceptual and computational objectives. Connect to real applications.
```

## 🔧 **Development Prompts**

### **Code Review**
```
Review code for educational platform.
Type: {HTML|CSS|JS|JSON} | Component: {Chunker|Portal|Content|Assessment}
Check: Accessibility (WCAG), mobile responsive, performance optimized, educational logic valid, schema compliant (if JSON)
Output: Quality (Pass/Needs Work/Fail), issues, fixes, optimizations
```

### **Documentation**
```
Generate documentation for educational component.
Component: {name} | Type: {AI|Interface|Content|Assessment} | Audience: {Teachers|Developers|Students|Admins}
Include: Purpose, setup, usage, pedagogy, troubleshooting, integration
Tone: Professional, accessible to educators
```

## 📚 **Content Creation**

### **Physics Lesson**
```
Create physics lesson following project standards.
Parameters: Topic: {topic}, Level: {honors|standard}, Unit: {number}, Duration: {periods}, Prerequisites: {knowledge}
Structure: Objectives → Hook → Content → Examples → Practice → Summary
Standards: Scientific accuracy, scaffolded difficulty, multiple representations, real-world focus
```

### **Assessment Design**
```
Design physics assessment.
Unit: {topic} | Level: {honors|standard} | Type: {quiz|test|problem_set|lab} | Duration: {time}
Requirements: Objective alignment, question variety (conceptual/computational/application), difficulty progression, accessibility considerations
Distribution: Recall 20%, Comprehension 30%, Application 30%, Analysis 20%
```

## 🤖 **System Integration**

### **Schema Validation**
```
Validate JSON against chunker-schema.json.
JSON: {json_output}
Check: Required fields, data types, educational logic, cognitive load, prerequisites
Output: Structure compliance (Pass/Fail), coherence score (1-10), errors, fixes
```

### **Session Planning**
```
Plan development session.
Context: Duration: {time}, Focus: {component}, Priority: {high|medium|low}
Plan: 2-4 objectives, file changes, testing, documentation updates, QA checkpoints
Reference: .ai/context.md for current state | Follow: .ai/development-checklist.md
```

## 🎯 **Usage Guide**
**Content Work**: Use Content Creation prompts | **Code Work**: Use Development prompts  
**System Work**: Use Integration prompts | **Planning**: Use Session Planning prompt
**Token Optimization**: Use `.ai/prompts/optimized.md` for high-frequency operations
