---
applyTo: 'src/portal/**'
---

# Portal System Instructions

## Core Principles
- **Professional Design**: No emojis, use descriptive text and clear navigation
- **Responsive-First**: Mobile, tablet, desktop optimization
- **Performance**: <3s load time, classroom-friendly
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation

## Architecture
**Components**: Main portal, course portals, data logger, TailwindCSS styling
**Data**: JSON configuration, local/session storage, progress tracking

## File Structure
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
