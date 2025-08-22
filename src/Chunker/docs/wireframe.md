# BHS Adaptive Chunker System - Wireframe & Specification

## Executive Summary

The Adaptive Chunker is an intelligent lesson planning system that automatically maps curriculum content to actual school calendar days, accounting for rotating schedules and real-world constraints. The system uses 15-minute "chunks" as the base unit of instructional time, allowing for precise time management and flexible adjustment.

## Core Concept: The 15-Minute Chunk

**Why 15 minutes?**
- Standard 60-minute period = 4 chunks of 15 minutes each
- Realistic planning: 3 chunks (45 min) instruction + 1 chunk (15 min) admin/transition
- Granular control: Teachers can adjust content difficulty by adding/removing chunks
- Flexible pacing: Some topics need 1 chunk, others need 3+

## System Architecture

### 1. AI-Powered Content Generation
```
User Input (Natural Language) → AI Parser → Structured JSON → Chunker Engine
```

**Example User Prompt:**
"Create a 5-day unit on circular motion for honors physics. Include vector analysis, centripetal force derivation, banked curves, and vertical circles. End with a lab and assessment."

**AI Generates:**
- Learning objectives breakdown
- Time estimates per topic (in chunks)
- Activity types and materials needed
- Assessment placement
- Prerequisite checking

### 2. Intelligent Calendar Mapping
```
JSON Content + School Calendar + Rotation Schedule → Daily Lesson Plans
```

**Auto-adjusts for:**
- Holidays and PD days
- Dropped periods (A/B/C/D rotation)
- Snow days (dynamic rescheduling)
- Pacing adjustments

### 3. Dynamic Chunk Management
```
User Adjustment (±chunks) → Real-time Recalculation → Updated Schedule
```

## User Interface Wireframe

### Main Dashboard Layout
```
┌─────────────────────────────────────────────────────────────────┐
│ BHS Adaptive Chunker                                    [Profile]│
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────┐ │
│ │   AI PROMPT     │ │   CALENDAR      │ │   CHUNK MANAGER     │ │
│ │     PANEL       │ │     VIEW        │ │                     │ │
│ │                 │ │                 │ │ Current Unit: 6     │ │
│ │ [Text Area]     │ │ Aug 2025        │ │ Planned Days: 12    │ │
│ │                 │ │ S M T W T F S   │ │ Used Chunks: 36     │ │
│ │ Generate Course │ │ 1 2 3 4 5 6 7   │ │ ┌─────────────────┐ │ │
│ │ [   BUTTON   ]  │ │ 8 9 10 11 12... │ │ │ Topic Adjuster  │ │ │
│ │                 │ │                 │ │ │ Vector Analysis │ │ │
│ │ Upload JSON     │ │ [Day Detail]    │ │ │ ●●●○ 3→4 chunks │ │ │
│ │ [   BUTTON   ]  │ │ When clicked:   │ │ │ [- +]          │ │ │
│ └─────────────────┘ │ Shows rotation  │ │ └─────────────────┘ │ │
│                     │ & lesson plan   │ │                     │ │
│                     └─────────────────┘ └─────────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│                    LESSON PLAN OUTPUT                           │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Day 1 (Aug 28, Day A) - Period 3                           │ │
│ │ Topic: Introduction to Circular Motion (2 chunks, 30 min)  │ │
│ │ Activity: Demo with string & ball                          │ │
│ │ Objective: Students identify centripetal force direction   │ │
│ │ Materials: String, tennis balls, whiteboards              │ │
│ │ Assessment: Exit ticket                                    │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Calendar Detail Modal
```
┌─────────────────────────────────────────┐
│ Wednesday, August 28, 2025              │
│ Rotation Day: A                         │
│ Your Class: Period 3 (meets today)     │
├─────────────────────────────────────────┤
│ Meeting Periods: 1, 2, 3, 4, 5, 6      │
│ Dropped Periods: 7, 8                  │
├─────────────────────────────────────────┤
│ TODAY'S LESSON PLAN                     │
│                                         │
│ Unit 6: Circular Motion                 │
│ Topic: Vector Analysis Review           │
│ Time: 3 chunks (45 minutes)            │
│                                         │
│ Chunk 1: Warm-up vector problems       │
│ Chunk 2: Centripetal acceleration      │
│ Chunk 3: Practice problems             │
│                                         │
│ Materials: Whiteboards, calculators    │
│ Assignment: Problem Set 6.1             │
│                                         │
│ [Edit Lesson] [Adjust Chunks] [Notes]  │
└─────────────────────────────────────────┘
```

## Core Features & Functionality

### 1. AI Content Generation
**Input Methods:**
- Natural language prompts
- Curriculum standard references
- Textbook chapter uploads
- Previous year's plans

**AI Output:**
```json
{
  "unitTitle": "Circular Motion",
  "totalEstimatedDays": 12,
  "lessons": [
    {
      "day": 1,
      "topic": "Introduction to Circular Motion",
      "objectives": ["Identify centripetal force", "Apply vector analysis"],
      "chunks": 2,
      "activities": ["Demo", "Practice problems"],
      "materials": ["String", "tennis balls"],
      "assessment": "Exit ticket",
      "adjustability": {
        "minChunks": 1,
        "maxChunks": 4,
        "complexity": "medium"
      }
    }
  ]
}
```

### 2. Intelligent Calendar Integration
**Features:**
- Real-time sync with school calendar
- Automatic rotation detection (A/B/C/D days)
- Holiday and PD day handling
- Snow day rescheduling
- Period-specific planning

**Smart Scheduling:**
- Avoids placing labs before long weekends
- Clusters related topics appropriately
- Suggests optimal assessment timing
- Warns about pacing issues

### 3. Dynamic Chunk Management
**User Controls:**
- Drag slider to adjust topic duration
- Real-time preview of schedule changes
- Automatic downstream adjustments
- Conflict detection and resolution

**Visual Feedback:**
```
Topic: Centripetal Force Derivation
Current: ●●●○ (3 chunks → 4 chunks)
Impact: +1 day to unit, pushes assessment to Friday
Suggestion: Consider combining with next topic
```

### 4. Adaptive Rescheduling Engine
**Triggers:**
- User chunk adjustments
- Calendar changes (snow days)
- Pacing modifications
- Assessment date conflicts

**Smart Responses:**
- Compress low-priority content
- Suggest topic combinations
- Recommend homework adjustments
- Flag impossible schedules

### 5. Progress Tracking & Analytics
**Real-time Dashboards:**
- Chunks planned vs. chunks used
- Unit completion percentage
- Assessment distribution
- Student engagement metrics

**Predictive Analytics:**
- Projected unit completion dates
- Risk assessment for standards coverage
- Suggested intervention points
- Year-end preparedness scores

## System Logic Flow

### 1. Content Input Phase
```
User Prompt → AI Parser → Content Validation → JSON Generation
                    ↓
              Chunk Estimation → Difficulty Analysis → Time Allocation
```

### 2. Calendar Mapping Phase
```
School Calendar + Rotation Schedule → Available Teaching Days
                    ↓
              Period Mapping → Content Distribution → Conflict Detection
```

### 3. Dynamic Adjustment Phase
```
User Input (±chunks) → Impact Analysis → Cascade Effects → Schedule Update
                    ↓
              Conflict Resolution → Optimization → User Notification
```

### 4. Execution & Tracking Phase
```
Daily Lesson Display → Progress Recording → Analytics Update
                    ↓
              Feedback Loop → AI Learning → Improved Suggestions
```

## Technical Implementation

### Core Technologies
- **Frontend**: HTML5, TailwindCSS, Vanilla JavaScript
- **AI Integration**: OpenAI API for content generation
- **Data Storage**: JSON files (local) or Firebase (cloud)
- **Calendar Engine**: Custom JavaScript with date libraries
- **Real-time Updates**: WebSocket or polling for multi-user sync

### File Structure
```
src/chunker/
├── ai/
│   ├── prompt-templates.json
│   ├── content-parser.js
│   └── validation-rules.js
├── calendar/
│   ├── rotation-engine.js
│   ├── holiday-manager.js
│   └── scheduling-logic.js
├── ui/
│   ├── chunk-adjuster.js
│   ├── calendar-view.js
│   └── lesson-display.js
├── data/
│   ├── school-config.json
│   ├── course-templates.json
│   └── user-courses/
└── analytics/
    ├── progress-tracker.js
    └── prediction-engine.js
```

### Data Models

#### Course Configuration
```json
{
  "courseId": "honors-physics-2025",
  "teacher": "Eleanor Ainsworth",
  "period": 3,
  "room": "B204",
  "students": 24,
  "preferences": {
    "labDay": "Friday",
    "assessmentSpacing": 10,
    "chunkDefault": 3
  }
}
```

#### Lesson Template
```json
{
  "id": "circular-motion-intro",
  "unit": "Circular Motion",
  "topic": "Introduction & Vector Review",
  "baseChunks": 2,
  "flexibility": {
    "minChunks": 1,
    "maxChunks": 4,
    "difficulty": "medium"
  },
  "content": {
    "warmup": "Vector addition review (1 chunk)",
    "main": "Circular motion demo (1 chunk)",
    "practice": "Problem solving (1 chunk optional)",
    "closure": "Exit ticket (built into main)"
  },
  "materials": ["tennis balls", "string", "whiteboards"],
  "standards": ["NGSS-HS-PS2-1"],
  "assessment": "formative"
}
```

## User Workflow Examples

### Scenario 1: Creating New Unit
1. Teacher enters prompt: "5-day unit on waves for honors physics"
2. AI generates structured lesson sequence
3. System maps to calendar (accounting for rotation)
4. Teacher adjusts chunks for specific topics
5. System auto-reschedules downstream content
6. Final lesson plans exported/displayed

### Scenario 2: Handling Snow Day
1. System detects calendar change
2. Automatically reschedules affected lessons
3. Suggests content compression options
4. Teacher approves or modifies suggestions
5. Entire semester rebalanced automatically

### Scenario 3: Mid-Unit Adjustment
1. Teacher realizes topic needs more time
2. Drags chunk slider from 2 to 3 chunks
3. System shows impact on unit timeline
4. Suggests content to compress elsewhere
5. Teacher approves changes
6. Calendar updates in real-time

## Success Metrics

### For Teachers
- Reduced planning time (target: 50% reduction)
- Improved lesson quality and consistency
- Better alignment with standards
- Increased flexibility for student needs

### For Students
- More coherent curriculum progression
- Consistent pacing across sections
- Better preparation for assessments
- Reduced "rushed" content

### For Administrators
- Better standards coverage tracking
- Improved teacher satisfaction
- Data-driven curriculum decisions
- Easier substitute teacher support

## Future Enhancements

### Phase 2 Features
- Multi-teacher collaboration
- Student progress integration
- Parent communication portal
- Assessment auto-generation

### Phase 3 Features
- AI-powered reflection and improvement
- Cross-curricular coordination
- Personalized learning paths
- Advanced analytics dashboard

### Integration Possibilities
- LMS integration (Canvas, Google Classroom)
- SIS data sync (PowerSchool, Skyward)
- Assessment platforms (Kahoot, Quizizz)
- Communication tools (Remind, ClassDojo)

---

**The Adaptive Chunker represents a paradigm shift from static curriculum guides to dynamic, responsive lesson planning that adapts to the realities of modern education while maintaining rigorous academic standards.**
