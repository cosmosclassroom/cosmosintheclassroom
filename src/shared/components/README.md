---
title: "Universal Header Implementation Guide"
type: "documentation"
system: "shared"
author: "Cosmos in the Classroom"
date: "2025-01-27"
description: "Implementation guide for consistent navigation and user tracking system"
components:
  - "universal-header.html"
  - "universal-header.js"
  - "header-demo.html"
status: "implemented"
version: "1.0.0"
---

# Universal Header Implementation Guide
*Cosmos in the Classroom - Consistent Navigation & User Tracking*

## Overview

This implementation provides a **consistent navigation and header system** that persists across all Cosmos in the Classroom systems: Portal, Library, Socrates, and Chunker. The system tracks user identity, course/period assignments, and visualizes progress through a chunk-based academic year structure.

## Key Features Implemented

### ✅ **Universal Header Component**
- Consistent UI across all systems
- User identity and greeting system
- Course/period selection and tracking
- Academic year progress visualization
- Responsive design for mobile/desktop

### ✅ **Chunk-Based Progress Tracking**
- **144 total chunks** per academic year
- **4 chunks per class** × **4 day rotation** × **6 periods** (dropping 2)
- **36 chunks per quarter** × **4 quarters**
- Real-time progress visualization

### ✅ **User Configuration System**
- Persistent user settings via localStorage
- Role-based display (Student, Teacher, Visitor)
- Course and period assignment tracking
- Settings panel for user management

### ✅ **Schedule Integration**
- 4-day rotation cycle (A, B, C, D)
- Period drop rules per rotation day
- Academic calendar integration
- Real-time rotation day display

## File Structure

```
src/shared/components/
├── universal-header.html      # Header HTML component
├── universal-header.js        # Header management JavaScript
└── header-demo.html          # Demo/testing page

data/
└── schedule-config.json      # Academic schedule configuration
```

## Implementation Priority: WHAT TO DO FIRST

### **1. Deploy Header to Core Systems (HIGHEST PRIORITY)**

Update these four main entry points to use the universal header:

#### A. Portal (`/src/portal/index.html`) - ✅ DONE
```html
<!-- Add to <head> -->
<script src="/src/shared/components/universal-header.js"></script>

<!-- Replace existing header with -->
<div id="universalHeader"></div>

<!-- Add header loader script -->
<script>
async function loadUniversalHeader() {
  const response = await fetch('/src/shared/components/universal-header.html');
  document.getElementById('universalHeader').innerHTML = await response.text();
}
document.addEventListener('DOMContentLoaded', loadUniversalHeader);
</script>
```

#### B. Library (`/ref/index.html`) - **TODO NEXT**
#### C. Socrates - **TODO**
#### D. Chunker (`/src/Chunker/`) - **TODO**

### **2. Configure User Flows**

For **new users** (no stored data):
- Show empty schedule placeholders
- Prompt for name and role
- Display course selection options
- Show community view until course selected

For **returning users**:
- Load saved course/period preferences
- Display personalized progress
- Show relevant course content

### **3. Integrate with Existing Systems**

#### Chunker Integration
- Connect chunk progress to actual lesson completion
- Synchronize across Portal and Chunker views
- Implement chunk marking/completion system

#### Portal Integration
- Use header course selection to filter content
- Show progress within selected course
- Update user preferences when course changes

## Configuration Details

### Schedule Configuration (`/data/schedule-config.json`)

```json
{
  "academicYear": "2025-2026",
  "totalChunks": 144,
  "chunksPerQuarter": 36,
  "rotationCycle": ["A", "B", "C", "D"],
  "dropRules": {
    "1": [7, 8], // Day A drops periods 7, 8
    "2": [1, 8], // Day B drops periods 1, 8
    "3": [1, 2], // Day C drops periods 1, 2
    "4": [2, 7]  // Day D drops periods 2, 7
  },
  "courses": {
    "hphys-p1": { "course": "Honors Physics", "period": 1 },
    "hphys-p3": { "course": "Honors Physics", "period": 3 },
    "hphys-p7": { "course": "Honors Physics", "period": 7 },
    "sphys-p2": { "course": "Standard Physics", "period": 2 },
    "sphys-p4": { "course": "Standard Physics", "period": 4 },
    "sphys-p6": { "course": "Standard Physics", "period": 6 }
  }
}
```

### User Data Structure (localStorage)

```json
{
  "name": "Student Name",
  "role": "student|teacher|visitor",
  "selectedCourse": "hphys-p1",
  "selectedPeriod": 1,
  "preferences": {}
}
```

## Integration Steps

### Step 1: Library Integration

```html
<!-- Update /ref/index.html -->
<head>
  <!-- existing head content -->
  <script src="/src/shared/components/universal-header.js"></script>
</head>
<body>
  <div id="universalHeader"></div>
  <!-- existing content -->
  <script>
    async function loadUniversalHeader() {
      const response = await fetch('/src/shared/components/universal-header.html');
      document.getElementById('universalHeader').innerHTML = await response.text();
    }
    document.addEventListener('DOMContentLoaded', loadUniversalHeader);
  </script>
</body>
```

### Step 2: Chunker Integration

Update all Chunker pages to:
- Include universal header
- Listen for course change events
- Sync progress data with header display
- Use consistent navigation

### Step 3: Progress Synchronization

Create event system for cross-component communication:

```javascript
// Listen for course changes
window.addEventListener('cosmosUserCourseChanged', (event) => {
  const { course, period } = event.detail;
  // Update local component based on course change
});

// Trigger progress updates
window.dispatchEvent(new CustomEvent('cosmosProgressUpdated', {
  detail: { chunksCompleted: 45, currentChunk: 46 }
}));
```

## Testing & Demo

### Demo Page: `/src/shared/components/header-demo.html`

Provides interactive testing of:
- User settings management
- Course selection changes
- Progress visualization
- Responsive design
- Mobile navigation

### Test Scenarios

1. **New User Flow**
   - First visit shows guest greeting
   - Course selection updates display
   - Settings save and persist

2. **Returning User Flow**
   - Saved preferences load correctly
   - Progress displays accurately
   - Course content filters properly

3. **Mobile Experience**
   - Header collapses appropriately
   - Touch interactions work
   - Performance remains smooth

## Next Implementation Priorities

### Phase 1: Core Deployment (This Week)
1. ✅ Portal integration (DONE)
2. 🔄 Library integration
3. 🔄 Chunker integration  
4. 🔄 Basic user flows

### Phase 2: Enhanced Features (Next Week)
1. Backend user data sync
2. Progress tracking integration
3. Role-based content filtering
4. Mobile menu completion

### Phase 3: Advanced Features (Following Week)
1. Multi-device synchronization
2. Teacher dashboard integration
3. Analytics and reporting
4. Advanced personalization

## Success Metrics

The implementation will be successful when:

- ✅ **Consistent Navigation:** Same header across all 4 systems
- ✅ **User Persistence:** Settings saved and loaded correctly
- ✅ **Course Filtering:** Content shows only for selected course/period
- ✅ **Progress Visualization:** Real-time chunk tracking works
- ✅ **Mobile Experience:** Responsive design functions smoothly

## Support & Maintenance

### Configuration Updates
- Modify `/data/schedule-config.json` for schedule changes
- Update course offerings in configuration
- Adjust chunk calculations as needed

### Component Updates
- Edit `/src/shared/components/universal-header.html` for UI changes
- Modify `/src/shared/components/universal-header.js` for functionality updates
- Test changes using demo page

### Troubleshooting
- Check browser console for JavaScript errors
- Verify file paths are correct for your deployment
- Test localStorage functionality across browsers
- Validate JSON configuration syntax

---

**Ready to implement?** Start with Library integration next, then Chunker, to achieve consistent navigation across all systems.
