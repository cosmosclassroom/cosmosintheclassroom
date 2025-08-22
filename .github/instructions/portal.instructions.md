---
applyTo: 'src/portal/**'
---

# Portal System AI Instructions

## Portal Architecture Overview

The Cosmos in the Classroom portal system provides interactive navigation and course management for multiple educational programs. It's built with modern web technologies and follows a modular, scalable design.

### Core Components
- **Main Portal**: Entry point for all courses (`src/portal/index.html`)
- **Course Portals**: Individual navigation for each course
- **Universal Data Logger**: Analytics and learning tracking
- **Responsive Design**: Mobile-first approach with TailwindCSS

## Development Principles

### Code Quality Standards
- **Clean, Semantic HTML**: Use proper HTML5 elements and ARIA labels
- **Modular CSS**: Leverage TailwindCSS utility classes with custom components
- **Progressive JavaScript**: Enhance functionality without breaking basic features
- **Performance First**: Optimize for classroom internet speeds and devices

### Responsive Design Requirements
- **Mobile-First**: Design for smartphones and tablets primarily
- **Breakpoint Strategy**: 
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px  
  - Desktop: 1024px+
- **Touch-Friendly**: Minimum 44px touch targets
- **Loading Speed**: < 3 seconds on slow connections

### Accessibility Standards
- **WCAG 2.1 AA Compliance**: Meet or exceed accessibility guidelines
- **Keyboard Navigation**: Full functionality without mouse
- **Screen Reader Support**: Proper ARIA labels and semantic markup
- **Color Contrast**: Minimum 4.5:1 ratio for normal text
- **Focus Indicators**: Clear visual focus states

## Technology Stack

### Frontend
- **HTML5**: Semantic markup with proper document structure
- **TailwindCSS**: Utility-first CSS framework for rapid development
- **Vanilla JavaScript**: No heavy frameworks, progressive enhancement
- **CSS Custom Properties**: For dynamic theming and consistency

### Data Management
- **JSON Configuration**: Course structure and metadata
- **Local Storage**: User preferences and progress tracking
- **Session Storage**: Temporary navigation state

### Build Tools
- **TailwindCSS CLI**: CSS compilation and optimization
- **Jekyll**: Static site generation (where applicable)
- **npm Scripts**: Task automation and development workflow

## Portal Structure Guidelines

### File Organization
```
src/portal/
├── index.html              # Main portal entry
├── portal-quiz.html        # Learning style assessment
├── script.js              # Core portal functionality  
├── styles.css             # Custom CSS and variables
├── tailwind-output.css    # Compiled TailwindCSS
├── classes.json           # Course catalog
│
├── scripts/               # Shared utilities
│   ├── universal-data-logger.js
│   └── logger-readme.md
│
├── dev/                   # Development tools
│   └── course-template.json
│
└── [course-name]/         # Individual course portals
    ├── portal.html        # Course-specific portal
    ├── course.json        # Course metadata
    ├── styles.css         # Course-specific styling
    └── [subdirectories]   # Course content organization
```

### Course Configuration Schema
```json
{
  "courseName": "Course Title",
  "courseCode": "COURSE123", 
  "level": "honors|standard|intro",
  "description": "Brief course description",
  "instructor": "Instructor Name",
  "units": [
    {
      "unitNumber": 1,
      "title": "Unit Title",
      "description": "Unit description",
      "lessons": [
        {
          "lessonNumber": 1,
          "title": "Lesson Title",
          "type": "lesson|lab|assessment",
          "duration": "## minutes",
          "objectives": ["Learning objective"],
          "resources": ["Resource links"]
        }
      ]
    }
  ],
  "assessments": [
    {
      "type": "quiz|test|project",
      "title": "Assessment Title",
      "unit": 1,
      "weight": 0.1
    }
  ],
  "resources": {
    "textbook": "Textbook information",
    "online": ["Online resource links"],
    "software": ["Required software"]
  }
}
```

## User Experience Guidelines

### Navigation Principles
- **Clear Hierarchy**: Logical course → unit → lesson progression
- **Breadcrumb Navigation**: Always show user's current location
- **Progress Indicators**: Visual feedback on completion status
- **Quick Access**: Recent items and bookmarks functionality

### Visual Design Standards
- **Color Palette**: Academic theme (parchment, sage, terracotta, navy, gold)
- **Typography**: 
  - Headers: Merriweather (serif)
  - Body: Inter (sans-serif)
  - Code: Fira Code (monospace)
- **Spacing**: Consistent 8px grid system
- **Icons**: Feather icons or similar minimal set

### Interactive Elements
- **Buttons**: Clear call-to-action styling with hover states
- **Forms**: Proper validation and error messaging
- **Modals**: Accessible overlay dialogs for secondary actions
- **Loading States**: Feedback for asynchronous operations

## JavaScript Development

### Code Organization
```javascript
// Main portal functionality
const PortalSystem = {
  // Configuration
  config: {
    apiEndpoint: '/api',
    localStoragePrefix: 'cosmos_',
    sessionTimeout: 3600000 // 1 hour
  },
  
  // Core methods
  init() {
    this.loadCourses();
    this.setupEventListeners();
    this.initializeLogger();
  },
  
  // Course management
  loadCourses() {
    // Load course data from JSON
  },
  
  // Navigation handling
  navigate(courseId, unitId, lessonId) {
    // Handle navigation with state management
  },
  
  // Progress tracking
  updateProgress(lessonId, status) {
    // Update completion status
  }
};
```

### Event Handling Patterns
```javascript
// Use event delegation for dynamic content
document.addEventListener('click', (event) => {
  if (event.target.matches('.course-card')) {
    handleCourseSelection(event.target);
  }
  
  if (event.target.matches('.lesson-link')) {
    handleLessonNavigation(event.target);
  }
});

// Handle keyboard navigation
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
  
  if (event.key === 'Enter' && event.target.matches('.focusable')) {
    event.target.click();
  }
});
```

### Data Management
```javascript
// Local storage utilities
const Storage = {
  set(key, value) {
    localStorage.setItem(`cosmos_${key}`, JSON.stringify(value));
  },
  
  get(key) {
    const item = localStorage.getItem(`cosmos_${key}`);
    return item ? JSON.parse(item) : null;
  },
  
  remove(key) {
    localStorage.removeItem(`cosmos_${key}`);
  }
};

// Progress tracking
const Progress = {
  markComplete(lessonId) {
    const progress = Storage.get('progress') || {};
    progress[lessonId] = {
      status: 'complete',
      timestamp: Date.now()
    };
    Storage.set('progress', progress);
  },
  
  getProgress(courseId) {
    const progress = Storage.get('progress') || {};
    return Object.keys(progress)
      .filter(key => key.startsWith(courseId))
      .reduce((acc, key) => {
        acc[key] = progress[key];
        return acc;
      }, {});
  }
};
```

## CSS Development

### TailwindCSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'cosmos-parchment': '#f4f1e8',
        'cosmos-sage': '#9caf88',
        'cosmos-terracotta': '#c17767',
        'cosmos-navy': '#2c3e50',
        'cosmos-gold': '#d4af37'
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace']
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
```

### Custom CSS Variables
```css
:root {
  /* Color system */
  --color-primary: theme('colors.cosmos-navy');
  --color-secondary: theme('colors.cosmos-sage');
  --color-accent: theme('colors.cosmos-terracotta');
  --color-background: theme('colors.cosmos-parchment');
  --color-text: theme('colors.gray.800');
  
  /* Typography scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  
  /* Spacing scale */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Animation timing */
  --duration-fast: 0.15s;
  --duration-normal: 0.3s;
  --duration-slow: 0.5s;
}
```

### Component Patterns
```css
/* Button component */
.btn {
  @apply px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.btn-primary {
  @apply bg-cosmos-navy text-white hover:bg-opacity-90 focus:ring-cosmos-navy;
}

.btn-secondary {
  @apply bg-cosmos-sage text-white hover:bg-opacity-90 focus:ring-cosmos-sage;
}

/* Card component */
.card {
  @apply bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-shadow duration-200 hover:shadow-md;
}

.card-header {
  @apply border-b border-gray-200 pb-4 mb-4;
}

.card-title {
  @apply text-xl font-semibold text-gray-900;
}

/* Navigation components */
.nav-breadcrumb {
  @apply flex items-center space-x-2 text-sm text-gray-600;
}

.nav-breadcrumb-item {
  @apply hover:text-cosmos-navy transition-colors duration-200;
}

.nav-breadcrumb-separator {
  @apply text-gray-400;
}
```

## Performance Optimization

### Loading Strategies
- **Critical CSS**: Inline essential styles for above-the-fold content
- **Progressive Loading**: Load course content on demand
- **Image Optimization**: Use appropriate formats and sizes
- **Resource Hints**: Preload critical resources

### Caching Strategies
```javascript
// Service worker for offline functionality
const CACHE_NAME = 'cosmos-portal-v1';
const urlsToCache = [
  '/',
  '/src/portal/index.html',
  '/src/portal/styles.css',
  '/src/portal/script.js',
  '/src/portal/tailwind-output.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
```

## Analytics and Tracking

### Universal Data Logger Implementation
```javascript
const DataLogger = {
  config: {
    endpoint: '/api/analytics',
    batchSize: 10,
    flushInterval: 30000 // 30 seconds
  },
  
  events: [],
  
  log(eventType, data) {
    const event = {
      type: eventType,
      timestamp: Date.now(),
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
      data: data
    };
    
    this.events.push(event);
    
    if (this.events.length >= this.config.batchSize) {
      this.flush();
    }
  },
  
  flush() {
    if (this.events.length === 0) return;
    
    const payload = {
      events: [...this.events],
      userAgent: navigator.userAgent,
      timestamp: Date.now()
    };
    
    // Send to analytics endpoint
    fetch(this.config.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(() => {
      this.events = [];
    }).catch(error => {
      console.error('Analytics error:', error);
    });
  }
};

// Track page views
DataLogger.log('page_view', {
  page: window.location.pathname,
  referrer: document.referrer
});

// Track interactions
document.addEventListener('click', (event) => {
  if (event.target.matches('.trackable')) {
    DataLogger.log('interaction', {
      element: event.target.tagName,
      action: 'click',
      target: event.target.getAttribute('data-track-id')
    });
  }
});
```

## Testing Guidelines

### Unit Testing
- **JavaScript Functions**: Test core portal functionality
- **Data Processing**: Validate course configuration parsing
- **User Interactions**: Mock and test event handlers

### Integration Testing
- **Course Navigation**: End-to-end navigation flows
- **Progress Tracking**: Data persistence and retrieval
- **Responsive Design**: Cross-device functionality

### Accessibility Testing
- **Screen Reader**: Test with NVDA/JAWS
- **Keyboard Navigation**: Tab through all interactive elements
- **Color Contrast**: Validate with accessibility tools
- **Focus Management**: Ensure logical focus order

## Deployment Considerations

### Build Process
```bash
# Development build
npm run dev

# Production build
npm run build

# TailwindCSS compilation
npx tailwindcss -i ./src/portal/styles.css -o ./src/portal/tailwind-output.css --watch

# Asset optimization
npm run optimize
```

### Environment Configuration
```javascript
const config = {
  development: {
    apiEndpoint: 'http://localhost:3000/api',
    logLevel: 'debug',
    analytics: false
  },
  
  production: {
    apiEndpoint: 'https://api.cosmosintheclassroom.org',
    logLevel: 'error',
    analytics: true
  }
};
```

---

**Remember**: The portal system is the primary interface for students and educators. Prioritize usability, accessibility, and performance in all development decisions.
