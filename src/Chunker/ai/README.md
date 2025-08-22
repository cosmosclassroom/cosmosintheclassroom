# Chunker AI Curriculum Extraction System

## Overview

The AI Curriculum Extraction System helps teachers transform their existing curriculum documents into structured JSON configurations that work seamlessly with the WeekCentricChunker system. This eliminates the technical barrier of manual JSON creation while ensuring pedagogically sound curriculum organization.

## System Architecture

### AI Prompt Engineering Best Practices

#### 1. **Multi-Phase Approach**
- **Phase 1**: Document analysis and information extraction
- **Phase 2**: Clarification questions for ambiguous content
- **Phase 3**: Structured JSON generation with validation
- **Phase 4**: Educational logic verification and refinement

#### 2. **Context-Rich Prompting**
```
System Role → Document Analysis → Clarification → JSON Generation → Validation
```

#### 3. **Schema-Driven Generation**
- Provides complete JSON schema to AI for validation
- Ensures machine-readable output format
- Maintains data consistency and structure

### Teacher Workflow Integration

#### Document Requirements
1. **Academic Calendar** (Required)
   - School year start/end dates
   - Holiday schedules
   - Assessment periods
   - Professional development days

2. **Curriculum/Scope & Sequence** (Required)
   - Learning objectives by unit/chapter
   - Content organization and sequencing
   - Time allocation guidelines
   - Assessment schedules

3. **Additional Documents** (Optional)
   - Pacing guides
   - District standards alignment
   - Assessment rubrics
   - Supplementary materials lists

#### User Experience Flow
```
Upload Documents → AI Analysis → Answer Questions → Generate JSON → Review & Download
```

## Technical Implementation

### Files Structure
```
src/Chunker/ai/
├── curriculum-extraction-prompt.md    # AI prompt templates
├── chunker-schema.json               # JSON schema specification
├── extraction-workflow.js            # JavaScript workflow engine
├── curriculum-extractor.html         # Teacher-facing interface
└── README.md                        # This documentation
```

### JSON Schema Specification

#### Core Requirements
- **Metadata**: Course information, academic year, extraction details
- **Schedule**: Academic calendar integration with holiday handling
- **Weeks**: Sequential week organization with date alignment
- **Chunks**: Daily learning units with rich pedagogical metadata

#### Key Features
- **Flexible Time Structures**: Supports various schedule formats
- **Rich Metadata**: Learning objectives, prerequisites, assessments
- **Educational Logic**: Cognitive load, teaching strategies, adaptations
- **AI-Optimized**: Structured for machine processing and human readability

### Validation System

#### Schema Validation
- Required field verification
- Data type checking
- Enum value validation
- Date format consistency

#### Educational Logic Validation
- Learning progression coherence
- Appropriate content distribution
- Realistic pacing expectations
- Assessment alignment

## AI Best Practices Implementation

### 1. **Prompt Engineering Strategies**

#### Role Definition
```
"You are an expert educational curriculum analyst specializing in converting teacher planning documents into structured learning progressions."
```

#### Task Decomposition
- Break complex curriculum extraction into manageable steps
- Provide clear success criteria for each phase
- Include validation checkpoints throughout process

#### Context Management
- Provide complete schema as reference
- Include educational best practices in prompts
- Maintain conversation state across multi-turn interactions

### 2. **JSON Schema Design for AI**

#### Machine-Readable Structure
```json
{
  "type": "object",
  "required": ["metadata", "schedule", "weeks"],
  "properties": {
    "metadata": { /* detailed schema */ },
    "weeks": {
      "patternProperties": {
        "^week_\\d+$": { "$ref": "#/definitions/weekObject" }
      }
    }
  }
}
```

#### AI-Friendly Patterns
- Clear property naming conventions
- Consistent data structures
- Comprehensive validation rules
- Rich descriptive metadata

### 3. **Error Handling and Recovery**

#### Common AI Issues
- **Incomplete extractions**: Handle missing information gracefully
- **Format inconsistencies**: Provide clear correction prompts
- **Educational logic errors**: Include pedagogical validation

#### Recovery Strategies
- Iterative refinement prompts
- Specific error correction instructions
- Fallback to manual clarification when needed

## Usage Guidelines

### For Teachers
1. **Document Preparation**
   - Ensure documents are text-readable (not scanned images)
   - Include complete academic calendar information
   - Provide detailed learning objectives when available

2. **Clarification Process**
   - Answer questions based on your teaching experience
   - Consider your students' needs and learning pace
   - Think about your classroom management style

3. **Review Process**
   - Verify learning objective alignment
   - Check pacing against your experience
   - Ensure assessment timing makes sense

### For Developers
1. **AI Integration**
   - Use provided prompt templates as starting points
   - Customize clarification questions for specific contexts
   - Implement robust validation before accepting AI output

2. **Schema Extensions**
   - Follow established patterns when adding new fields
   - Maintain backward compatibility
   - Update validation logic accordingly

3. **Quality Assurance**
   - Test with diverse curriculum documents
   - Validate educational logic in generated outputs
   - Monitor AI performance and refine prompts

## Advanced Features

### Adaptive Questioning
The system intelligently generates follow-up questions based on:
- Document completeness
- Detected ambiguities
- Educational context requirements
- Teacher experience level

### Multi-Document Synthesis
Combines information from multiple sources:
- Academic calendars override curriculum timing
- Scope & sequence provides content organization
- Pacing guides influence time allocation
- Assessment schedules drive milestone planning

### Educational Logic Engine
Validates generated configurations for:
- **Pedagogical Coherence**: Learning progressions make sense
- **Realistic Pacing**: Appropriate time allocation
- **Assessment Alignment**: Tests match content coverage
- **Cognitive Load Distribution**: Balanced difficulty progression using research-based guidelines:
  - Low cognitive load (1 unit): Single concept introduction
  - Medium cognitive load (2 units): 2-3 related concepts or skill practice
  - High cognitive load (3 units): Complex synthesis or multi-step processes
  - Daily maximum: 2-4 cognitive load units per instructional day
  - Balance principle: Avoid multiple high-load chunks on the same day

## Integration Points

### With WeekCentricChunker
- Generated JSON files are directly compatible
- Maintains all required metadata fields
- Preserves educational structure and relationships

### With School Systems
- Supports common academic calendar formats
- Accommodates various curriculum document types
- Flexible enough for district-specific requirements

### With AI Services
- Prompt templates work with GPT-4, Claude, and similar models
- Schema validation ensures consistent output quality
- Error handling supports iterative improvement

## Future Enhancements

### Planned Features
1. **Multi-Language Support**: Curriculum documents in various languages
2. **Standards Alignment**: Automatic mapping to educational standards
3. **Collaborative Editing**: Team-based curriculum development
4. **Version Control**: Track curriculum changes over time
5. **Analytics**: Usage patterns and improvement suggestions

### AI Improvements
1. **Domain-Specific Models**: Fine-tuned for educational content
2. **Active Learning**: System improves from teacher feedback
3. **Contextual Adaptation**: Learns from successful configurations
4. **Automated Validation**: Enhanced educational logic checking

## Troubleshooting

### Common Issues
1. **Poor Document Quality**: Recommend text-based originals
2. **Incomplete AI Output**: Use clarification prompts to fill gaps
3. **Educational Logic Errors**: Manual review and correction needed
4. **Format Issues**: Schema validation catches most problems

### Support Resources
- Detailed error messages with correction suggestions
- Example documents for reference
- Video tutorials for complex workflows
- Community forums for teacher collaboration

## Contributing

### For Educators
- Share successful curriculum configurations
- Provide feedback on generated outputs
- Suggest improvements to clarification questions
- Test with diverse document types

### For Developers
- Improve AI prompt effectiveness
- Enhance validation algorithms
- Add support for new document formats
- Optimize user experience workflows

---

**Note**: This system represents a bridge between traditional curriculum planning and modern educational technology. Success depends on thoughtful AI prompt design, comprehensive validation, and user-centered workflow development.
