# Chunk-Based Planner: Engineering Wireframe

## Core Concept: Why Chunks?

**The Problem**: Traditional lesson planning thinks in "days" or "periods" but reality is messier:
- Some concepts need 45 minutes, others need 90
- Pop quizzes steal time
- Fire drills happen
- Students need different pacing
- Assessment prep requires flexibility

**The Solution**: 15-minute "chunks" as atomic planning units that can be:
- **Added** (+) when concepts need more time
- **Removed** (-) when you're ahead of schedule
- **Redistributed** across different days/periods
- **Auto-calculated** to show new end dates

---

## Mechanical Architecture

### Data Structure
```javascript
// Each lesson broken into chunks
const lesson = {
    id: "newton_laws_intro",
    title: "Newton's First Law Introduction",
    totalChunks: 6, // 90 minutes of content
    chunks: [
        { id: 1, type: "warmup", content: "Motion review", duration: 15 },
        { id: 2, type: "concept", content: "Inertia introduction", duration: 15 },
        { id: 3, type: "demo", content: "Tablecloth demo", duration: 15 },
        { id: 4, type: "practice", content: "Guided examples", duration: 15 },
        { id: 5, type: "practice", content: "Student problems", duration: 15 },
        { id: 6, type: "assessment", content: "Exit ticket", duration: 15 }
    ],
    prerequisites: ["kinematics_review"],
    flexibility: "high" // can chunks be reordered/split?
}

// Calendar mapping
const calendarDay = {
    date: "2025-08-26",
    rotationDay: "A",
    periods: [
        {
            period: 1,
            duration: 60, // minutes
            availableChunks: 4, // 60min ÷ 15min
            assignedChunks: [
                { lessonId: "newton_laws_intro", chunkId: 1 },
                { lessonId: "newton_laws_intro", chunkId: 2 },
                { lessonId: "newton_laws_intro", chunkId: 3 },
                { lessonId: "admin_time", chunkId: 1 } // always reserve 1 chunk
            ]
        }
    ]
}
```

### UI Wireframe: Chunk Planner Interface

```
┌─────────────────────────────────────────────────────────────────┐
│ NEWTON'S FIRST LAW INTRODUCTION                    [6 chunks]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ┌─ Chunk 1: Motion Review (Warmup) ─────────────────────────┐   │
│ │  Content: Quick review of kinematics concepts             │   │
│ │  Duration: 15 min                                         │   │
│ │  [−] [📝 Edit] [+]                                        │   │
│ └───────────────────────────────────────────────────────────┘   │
│                                                                 │
│ ┌─ Chunk 2: Inertia Introduction (Concept) ─────────────────┐   │
│ │  Content: Define inertia, everyday examples               │   │
│ │  Duration: 15 min                                         │   │
│ │  [−] [📝 Edit] [+]                                        │   │
│ └───────────────────────────────────────────────────────────┘   │
│                                                                 │
│ ┌─ Chunk 3: Tablecloth Demo (Demo) ─────────────────────────┐   │
│ │  Content: Classic inertia demonstration                   │   │
│ │  Duration: 15 min                                         │   │
│ │  [−] [📝 Edit] [+]                                        │   │
│ └───────────────────────────────────────────────────────────┘   │
│                                                                 │
│ └─ [+ Add Chunk] ──────────────────────────────────────────┘   │
│                                                                 │
│ ┌─ SCHEDULE PREVIEW ─────────────────────────────────────────┐   │
│ │  Current total: 6 chunks (90 minutes)                     │   │
│ │  Will span: 2 class periods                               │   │
│ │  Completion date: Aug 27, 2025                            │   │
│ │  [🔄 Recalculate] [📅 View Calendar]                      │   │
│ └───────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Auto-Calculation Engine

```javascript
function calculateEndDate(lesson, startDate, schedule) {
    let totalChunks = lesson.chunks.length;
    let chunksScheduled = 0;
    let currentDate = new Date(startDate);
    
    while (chunksScheduled < totalChunks) {
        // Get rotation day and available periods
        const rotationDay = getRotationDay(currentDate);
        const periods = getPeriodsForDay(rotationDay);
        
        for (let period of periods) {
            const availableChunks = Math.floor(period.duration / 15) - 1; // Reserve 1 for admin
            const chunksToSchedule = Math.min(
                availableChunks, 
                totalChunks - chunksScheduled
            );
            
            chunksScheduled += chunksToSchedule;
            
            if (chunksScheduled >= totalChunks) {
                return currentDate; // Found our end date!
            }
        }
        
        currentDate = getNextSchoolDay(currentDate);
    }
    
    return currentDate;
}

function handleChunkAdjustment(lessonId, action) {
    const lesson = getLessonById(lessonId);
    
    switch(action) {
        case 'add':
            lesson.chunks.push(createNewChunk());
            break;
        case 'remove':
            if (lesson.chunks.length > 1) { // Minimum 1 chunk
                lesson.chunks.pop();
            }
            break;
    }
    
    // Recalculate all dependent schedules
    recalculateSchedule(lesson);
    updateCalendarView();
    showUpdatedEndDate();
}
```

---

## Real-World Benefits

### 1. **Responsive Planning**
```
Scenario: Pop quiz takes 15 minutes
Action: Click [−] on today's practice chunk
Result: Automatically pushes remaining content to next period
        Updates unit completion date
        Alerts about any conflicts
```

### 2. **Differentiated Pacing**
```
Period 1 (Advanced): Grasps concept quickly
Action: Remove practice chunk, add extension chunk
Result: More challenging content, same timeframe

Period 6 (Struggling): Needs more scaffolding  
Action: Add 2 practice chunks
Result: Completion date pushes back, but understanding improved
```

### 3. **Real-Time Adaptation**
```
During Class: Demo fails, need more explanation time
Action: Quick [+] on concept chunk from phone/tablet
Result: Practice chunk automatically moves to tomorrow
        Students see updated homework in real-time
```

### 4. **Data-Driven Insights**
```
After teaching:
- Which chunks consistently need more time?
- Which concepts can be compressed?
- How does pacing vary by period/student group?
- What's the optimal chunk sequence?
```

---

## Technical Implementation

### Database Schema
```sql
-- Chunks table
chunks (
    id, lesson_id, sequence_order, 
    chunk_type, content_description, 
    base_duration_minutes, 
    flexibility_rating
)

-- Schedule assignments
schedule_assignments (
    id, chunk_id, date, period, 
    actual_duration_used, 
    teacher_notes, completed
)

-- Auto-generated calendar
calculated_schedule (
    lesson_id, start_date, projected_end_date,
    total_chunks, chunks_completed,
    last_updated
)
```

### API Endpoints
```javascript
POST /lessons/{id}/chunks/add     // Add chunk, recalculate
DELETE /chunks/{id}               // Remove chunk, recalculate  
PUT /chunks/{id}/duration         // Adjust duration, recalculate
GET /lessons/{id}/schedule        // Get projected completion
GET /calendar/conflicts           // Show scheduling conflicts
```

---

## Why This Matters

**Traditional Planning**: "We'll finish Chapter 3 by Friday"
*Reality*: Fire drill Tuesday, early dismissal Wednesday, quiz takes longer Thursday
*Result*: Stress, rushing, or abandoning content

**Chunk Planning**: "Chapter 3 needs 12 chunks, we have 8 available this week"
*Reality*: Same disruptions happen
*Result*: System automatically redistributes chunks, shows new completion date, maintains learning quality

The chunks become **Lego blocks** - you can add, remove, and rearrange them while the system handles all the tedious recalculation and keeps everyone informed.

---

## Next Steps for Implementation

1. **MVP**: Simple +/- buttons with manual recalculation
2. **V2**: Real-time auto-calculation with calendar integration  
3. **V3**: AI suggestions based on historical data
4. **V4**: Student-facing app showing updated schedules
5. **V5**: Cross-curricular coordination (when multiple subjects need chunks)

The beauty is that teachers think in concepts and learning goals, while the system handles the mechanical scheduling complexity.
