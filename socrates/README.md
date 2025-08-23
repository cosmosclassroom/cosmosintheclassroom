# Socrates System Architecture Overview

## Core Data Files

- **curriculum.json**: Contains all curriculum details (units, lessons, objectives, skills, phenomena, equations, assessments, chunk allocations).
- **schedule.json**: Defines academic calendar, instructional days, meeting patterns, bell schedules, non-instructional days, and period-to-chunk mapping.
- **course.json**: Unified data model combining curriculum and schedule information.

## Atomic Unit

- **Chunk**: 15-minute block; all lesson planning, pacing, and progress tracking is chunk-based.

## Workflow Visualization

### Curriculum Extraction & Structuring

- Extract curriculum from source documents into structured `curriculum.json`.
- Ensure each lesson/unit has chunk allocations, objectives, prerequisites, and metadata.

### Schedule Definition

- Build `schedule.json` to reflect the real academic calendar, period structure, and special days.
- Map periods to chunks (e.g., 4 chunks per 60-minute period).

### UI Development: Chunk Planner

- Create interactive UI for teachers:
  - Plus/Minus Buttons: Add/remove chunks for lessons/topics.
  - Drag Sliders: (Optional) Redistribute chunks visually.
- Display real-time updates to lesson pacing and projected unit completion.

### Auto-Calculation Engine

- When a teacher adjusts chunks:
  - Instantly recalculate downstream lesson pacing and unit end dates.
  - Update dashboards with metrics (chunks planned/used, completion %).

### Progress Tracking & Data Export

- Track semantic chunk metadata (objectives, difficulty, pacing).
- Export updated curriculum and schedule data to JSON for GitHub Pages integration.

### Configuration Engine

- Support various school schedules and period lengths.
- Automatic conversion of time to chunks based on JSON config.

### Integration & Data Flow

- Ensure seamless data flow between Portal, Chunker, Socrates, and Library.
- Use CosmosConfig for personalization and localStorage for persistence.

## Actionable Next Steps

1. Finalize JSON Schemas for `curriculum.json` and `schedule.json`.
2. Develop Extraction Pipeline to automate conversion of curriculum docs to JSON (with chunk metadata).
3. Build UI Components for chunk adjustment controls and real-time pacing display.
4. Implement Calculation Logic to recalculate schedules and update UI instantly.
5. Integrate Data Persistence to sync changes to localStorage and universal data logger.
6. Test & Refine with real curriculum and schedules; gather teacher feedback.

## System Architecture Diagram

Below is a system architecture diagram rendered using Mermaid syntax. If you are unfamiliar with Mermaid, it is a markdown extension for creating flowcharts and diagrams directly in documentation.

```mermaid
flowchart TD
    %% Forward direction: curriculum/schedule to course.json and UI
    A[Curriculum Docs] --> B[Extraction Pipeline]
    D[Academic Calendar] --> E[Schedule Builder]
    B --> G[curriculum.json]
    E --> H[schedule.json]
    G & H --> I[course.json]
    I --> J[Chunk Planner UI]
    J --> K[Auto-Calculation Engine]
    K --> L[Real-Time Dashboard]
    L --> M[Progress Tracking & Data Export]
    M --> N[GitHub Pages Data Bridge]

    %% Reverse direction: Socrates system input/output
    N --> O[Gather User Input]
    O --> P[course.json]
    O --> Q[prompt.md]
    O --> R[voice.md]
    O --> S[Academic Calendar]
    O --> T[Curriculum Docs]
    P & Q & R & S & T --> U[AI (Socrates)]
    U --> V[Curriculum Docs]
    U --> W[Academic Calendar]
```

---

**Summary:**  
Socrates is a modular, teacher-centric system where curriculum and schedule data drive a real-time, chunk-based planner. Teachers adjust pacing interactively, and the system recalculates and displays progress instantly, all powered by structured JSON and seamless