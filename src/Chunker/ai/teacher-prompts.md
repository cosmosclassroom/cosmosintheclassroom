# Copy-Paste AI Prompts for Teachers

## Instructions for Teachers
Copy the appropriate prompt below and paste it into your AI service (ChatGPT, Claude, etc.) along with your curriculum documents.

---

## System Message (Use this first)
```
You are an expert educational curriculum analyst specializing in converting teacher planning documents into structured learning progressions for the WeekCentricChunker system. 

Your role is to:
1. Extract learning objectives and content from curriculum documents
2. Map content to weekly schedules aligned with academic calendars
3. Generate machine-readable JSON configurations
4. Ask clarifying questions when information is unclear

You prioritize pedagogical coherence, realistic pacing, and teacher workflow efficiency. You must follow the provided JSON schema exactly and validate all output against educational best practices.
```

---

## Main Extraction Prompt

### Phase 1: Document Analysis
```
# Curriculum Extraction for WeekCentricChunker System

I need help converting my curriculum documents into a structured JSON configuration for lesson planning. I'm uploading my academic calendar and curriculum/scope & sequence documents.

## What I need you to do:

### STEP 1: Analyze my documents and extract:
1. **Course Details**
   - Course name and academic level
   - Academic year dates (start/end)
   - Total weeks of instruction
   - Grading periods/quarters

2. **Weekly Structure**
   - How many days per week do I teach this class?
   - How many periods per day? 
   - How long is each class period?
   - Any special schedule days (block schedules, early release, etc.)?

3. **Content Organization**
   - What are the major units/chapters and their sequence?
   - What are the specific learning objectives for each unit?
   - How much time should each unit take?
   - What prerequisites exist between units?

4. **Assessment Schedule**
   - When are tests/quizzes scheduled?
   - What are the major project deadlines?
   - What are the key milestone dates?

### STEP 2: Ask me clarifying questions about anything unclear or missing

### STEP 3: Generate a complete JSON configuration following the WeekCentricChunker schema

## My uploaded documents:
[UPLOAD YOUR ACADEMIC CALENDAR HERE]
[UPLOAD YOUR CURRICULUM/SCOPE & SEQUENCE HERE]
[UPLOAD ANY ADDITIONAL DOCUMENTS HERE]

Please start by analyzing my documents and asking any clarification questions you need.
```

---

## Follow-Up Prompt (After answering AI's questions)
```
Based on my answers to your clarification questions, please generate the complete JSON configuration file following the WeekCentricChunker schema.

## Requirements for the JSON:
1. **Week Structure**: Create sequential weeks from week_1 to week_[total]
2. **Daily Chunks**: Each day should have appropriate learning chunks (20-45 minutes each)
3. **Learning Objectives**: Include specific, measurable objectives for each chunk
4. **Realistic Pacing**: Account for varying difficulty and student needs
5. **Assessment Integration**: Include all scheduled tests, quizzes, and projects
6. **Complete Metadata**: Rich information for AI processing and teacher planning

## JSON Format Required:
```json
{
  "metadata": {
    "courseName": "Course Name",
    "courseLevel": "honors|standard|AP",
    "academicYear": "2024-2025",
    "semester": "fall|spring|full-year",
    "totalWeeks": 36,
    "instructionalDaysPerWeek": 5,
    "periodsPerDay": 1,
    "minutesPerPeriod": 50,
    "extractionVersion": "v2.0",
    "extractionDate": "2025-01-15"
  },
  "schedule": {
    "startDate": "2024-08-26",
    "endDate": "2025-05-30",
    "holidays": [
      {"date": "2024-09-02", "name": "Labor Day", "type": "holiday"}
    ]
  },
  "weeks": {
    "week_1": {
      "weekNumber": 1,
      "startDate": "2024-08-26",
      "endDate": "2024-08-30",
      "theme": "Course Introduction",
      "unit": "Unit 1",
      "learningObjectives": ["Students will..."],
      "chunks": [
        {
          "id": "w1_d1_intro",
          "title": "Course Overview",
          "day": "monday",
          "duration": 50,
          "objectives": ["Students will understand course expectations"],
          "content": {
            "topics": ["Course syllabus", "Safety procedures"],
            "activities": ["Interactive introduction", "Lab safety quiz"]
          },
          "difficulty": "introduction",
          "cognitiveLoad": "low",
          "teachingStrategy": "direct-instruction"
        }
      ]
    }
  }
}
```

**Cognitive Load Guidelines for AI:**
- **Low (1 unit)**: Single concept introduction, vocabulary, basic recall
- **Medium (2 units)**: Skill practice, connecting 2-3 concepts, guided application  
- **High (3 units)**: Complex problem-solving, synthesis, multi-step processes
- **Daily target**: 2-4 cognitive load units maximum per instructional day
- **Balance rule**: Avoid multiple high-cognitive-load chunks on the same day

Please generate the complete configuration now.
```

---

## Validation Prompt (After receiving JSON)
```
Please validate the JSON configuration you just generated by checking:

### Schema Compliance:
- All required fields present
- Correct data types (strings, numbers, arrays, objects)
- Valid enum values (honors/standard, monday/tuesday, etc.)
- Proper date formats (YYYY-MM-DD)
- Unique chunk IDs

### Educational Logic:
- Learning objectives are measurable (use action verbs)
- Prerequisites flow logically between chunks
- Content difficulty progresses appropriately
- Assessment timing allows for mastery
- Weekly themes align with daily chunks

### Practical Considerations:
- Daily chunks are appropriate length (20-45 minutes)
- Weekly workload is realistic
- Content distribution accounts for cognitive load
- Built-in flexibility for pacing adjustments

If you find any issues, please provide a corrected version. If everything looks good, confirm that the configuration is ready for use.
```

---

## Quick Start Example (For Teachers New to AI)

### If you have 5 minutes:
1. Copy the "System Message" above
2. Paste it into ChatGPT/Claude
3. Copy the "Main Extraction Prompt"
4. Upload your academic calendar and curriculum documents
5. Answer the AI's clarification questions
6. Ask for the JSON generation

### If you have 10 minutes:
- Follow the 5-minute process
- Use the "Validation Prompt" to double-check the output
- Make any needed corrections
- Download your final JSON file

### If you have 15 minutes:
- Follow the 10-minute process
- Test the JSON in the Chunker interface
- Make adjustments based on your classroom needs
- Save different versions for different classes

---

## Troubleshooting Common Issues

### AI asks too many questions:
```
Please focus on the essential information needed for basic JSON generation. We can refine details later.
```

### AI output doesn't follow the schema:
```
The JSON must exactly follow the WeekCentricChunker schema. Please regenerate with strict schema compliance.
```

### Generated pacing seems unrealistic:
```
Please adjust the pacing to be more realistic for [grade level] students, allowing more time for [specific challenging topics].
```

### Missing learning objectives:
```
Please add specific, measurable learning objectives for each chunk using action verbs like "analyze," "calculate," "explain," etc.
```

---

**Remember**: AI is a tool to help structure your expertise, not replace your teaching knowledge. Review all generated content and adjust based on your experience with your students!
