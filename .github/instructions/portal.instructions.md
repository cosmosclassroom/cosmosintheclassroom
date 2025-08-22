---
applyTo: 'src/portal/**'
---

# Portal System Instructions

## Core Principles
- **Professional Design**: No emojis, use descriptive text and clear navigation
- **Responsive-First**: Mobile, tablet, desktop optimization with TailwindCSS v4
- **Performance**: <3s load time, classroom-friendly bandwidth optimization
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation
- **Personalization**: Integrated cosmos-config.js for consistent user experience

## Architecture (Updated August 2025)
**Central Config**: `CosmosConfig` class manages all user data and preferences
**Cross-System Integration**: Portal ↔ Chunker ↔ Socrates ↔ Library data sharing
**GitHub Actions**: Automated testing and deployment validation
**Modern CSS**: TailwindCSS v4 with utility-first approach

## Required Integration Pattern
```javascript
// REQUIRED in all Portal JavaScript files:
document.addEventListener('DOMContentLoaded', function() {
    if (typeof CosmosConfig === 'undefined') {
        console.error('CosmosConfig required for Portal functionality');
        return;
    }
    
    const config = new CosmosConfig();
    const userName = config.get('user.name');
    const courseLevel = config.get('user.preferredLevel');
    
    // Initialize Portal with user context
    initializePortal(userName, courseLevel);
});
```

## File Structure (Current)
```
src/portal/
├── index.html              # Main entry
├── portal-quiz.html        # Learning assessment
├── script.js              # Core functionality  
├── styles.css             # Custom CSS
├── tailwind-output.css    # Compiled styles
├── classes.json           # Course catalog
├── scripts/               # Utilities
└── [course-name]/         # Course portals
```

## Course Configuration
```json
{
  "courseName": "Course Title",
  "courseCode": "COURSE123", 
  "level": "honors|standard|intro",
  "units": [
    {
      "unitNumber": 1,
      "title": "Unit Title",
      "lessons": [
        {
          "lessonNumber": 1,
          "title": "Lesson Title",
          "type": "lesson|lab|assessment",
          "objectives": ["Learning objective"]
        }
      ]
    }
  ]
}
```

## JavaScript Patterns
```javascript
// Core portal system
const PortalSystem = {
  config: { apiEndpoint: '/api', localStoragePrefix: 'cosmos_' },
  init() { this.loadCourses(); this.setupEventListeners(); },
  navigate(courseId, unitId, lessonId) { /* Handle navigation */ },
  updateProgress(lessonId, status) { /* Track completion */ }
};

// Event delegation
document.addEventListener('click', (event) => {
  if (event.target.matches('.course-card')) handleCourseSelection(event.target);
  if (event.target.matches('.lesson-link')) handleLessonNavigation(event.target);
});

// Storage utilities
const Storage = {
  set(key, value) { localStorage.setItem(`cosmos_${key}`, JSON.stringify(value)); },
  get(key) { const item = localStorage.getItem(`cosmos_${key}`); return item ? JSON.parse(item) : null; }
};
```

## TailwindCSS Setup
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'cosmos-parchment': '#f4f1e8',
        'cosmos-sage': '#9caf88', 
        'cosmos-navy': '#2c3e50'
      }
    }
  }
}
```

## CSS Components
```css
.btn { @apply px-4 py-2 rounded-lg font-medium transition-colors; }
.btn-primary { @apply bg-cosmos-navy text-white hover:bg-opacity-90; }
.card { @apply bg-white rounded-xl shadow-sm border p-6 hover:shadow-md; }
.nav-breadcrumb { @apply flex items-center space-x-2 text-sm text-gray-600; }
```

## Analytics Integration
```javascript
const DataLogger = {
  log(eventType, data) {
    const event = { type: eventType, timestamp: Date.now(), data: data };
    this.events.push(event);
    if (this.events.length >= 10) this.flush();
  },
  flush() { /* Send to analytics endpoint */ }
};
```

## Development Workflow
```bash
# Development
npm run dev

# Build production  
npm run build

# Compile TailwindCSS
npx tailwindcss -i ./styles.css -o ./tailwind-output.css --watch
```
