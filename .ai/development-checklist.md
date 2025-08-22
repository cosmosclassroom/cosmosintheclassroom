# AI Development Checklist - Cosmos in the Classroom

## 🎯 **Project Context**
Educational platform: Physics curricula | Architecture: Jekyll + TailwindCSS + AI integration

## ✅ **Development Workflow**

### **Content Creation**
- [ ] Follow naming conventions (`##_descriptive-name`)
- [ ] Include frontmatter with metadata
- [ ] Add measurable learning objectives
- [ ] Implement cognitive load guidelines (1-3 units/chunk, 2-4 daily max)
- [ ] Cross-reference prerequisites
- [ ] Validate scientific accuracy

### **AI System Integration**
- [ ] Test prompts (GPT-4, Claude)
- [ ] Validate JSON vs `chunker-schema.json`
- [ ] Check educational logic rules
- [ ] Verify cognitive load distribution
- [ ] Test error handling
- [ ] Use token-optimized prompts (`.ai/prompts/optimized.md`)

### **Code Quality**
- [ ] Mobile-first responsive design (TailwindCSS)
- [ ] Accessibility compliance (WCAG)
- [ ] Performance optimization (classroom speeds)
- [ ] Cross-browser compatibility
- [ ] Clean JavaScript (ES6+)

### **Documentation**
- [ ] Update README.md for changes
- [ ] Document API changes in schemas
- [ ] Add comments for complex logic
- [ ] Update MINUTES.md for sessions
- [ ] Maintain prompt template library

### **Testing & Validation**
- [ ] Test Chunker configs with real data
- [ ] Educator review of AI-generated content
- [ ] Portal navigation workflows
- [ ] Slide rendering (Marp) across devices
- [ ] Math equation rendering (KaTeX)

### **Educational QA**
- [ ] Subject matter expert review
- [ ] Objective-assessment alignment
- [ ] Prerequisite flow validation
- [ ] Real-world application examples
- [ ] Appropriate difficulty progression

## 🔄 **Pre-Commit**
1. Run relevant checklist items
2. Update docs if architecture changed
3. Test critical workflows
4. Validate AI integration points

## 🎯 **Quality Gates**
**Content**: Scientific accuracy, pedagogical soundness | **Code**: Accessible, performant | **AI**: Schema compliant, error recovery
