# Cross-System Integration Roadmap

## 🎯 **Integration Architecture Overview**

**CosmosConfig** serves as the central nervous system, connecting all major platform components through a unified configuration and event system.

## 🏗️ **Current System Architecture (Post-Implementation)**

### **Component Structure Impact**

#### **Portal (`src/portal/`)**
- **Status**: Ready for integration, structure unchanged
- **Impact**: Will consume CosmosConfig bookmark/recent data via event listeners
- **Integration Points**: Navigation state, unit progress, user preferences
- **Dependencies**: Awaits CosmosConfig event binding implementation

#### **Chunker (`src/Chunker/`)**
- **Status**: ✅ **Fully restructured and operational**
- **New Structure**:
  ```
  src/Chunker/
  ├── config/
  │   ├── chunker-config-manager.js    # Three-tier configuration
  │   └── chunker-control-panel.js     # Real-time UI controls
  ├── css/
  │   └── chunker-controls.css         # Complete styling system
  ├── templates/
  │   └── physics-honors-base.json     # Curriculum template
  └── classes/                         # Generated class-specific configs
  ```
- **Impact**: Evolved from theoretical to production-ready system
- **Capabilities**: Real-time adjustments, export, change tracking, teacher interface

#### **Socrates (`src/socrates/`)**
- **Status**: Awaiting integration, structure preserved  
- **Impact**: Will integrate reading preferences and accessibility settings
- **Integration Points**: Math notation, hint display, document tracking
- **Dependencies**: Requires CosmosConfig learning preferences implementation

#### **Ratatoskr (`src/Ratatoskr/`)**
- **Status**: ✅ **Enhanced and integrated**
- **Enhanced Structure**:
  ```
  src/Ratatoskr/
  ├── js/
  │   └── ratatoskr-widget.js         # Full widget with config integration
  ├── css/
  │   └── ratatoskr.css              # Theme-aware styling
  └── index.html                      # Original prototype (preserved)
  ```
- **Impact**: Transformed from prototype to production widget
- **Evolution**: Simulation → Real data consumer architecture

## 📋 **Implementation Phases**

### **Phase 1: Foundation ✅ COMPLETE**
- [x] **CosmosConfig**: Central settings management with localStorage persistence
- [x] **ThemeManager**: Light/dark/auto theme switching with CSS custom properties
- [x] **Settings Panel**: Global UI for user customization across all components
- [x] **Ratatoskr Widget**: Progress tracking with chunk simulation and drag positioning
- [x] **Chunker Foundation**: Complete configuration management system implemented

### **Phase 1.5: Chunker Implementation ✅ COMPLETE**
- [x] **ChunkerConfigManager**: Three-tier configuration (base/class/live) with export
- [x] **Real-time Controls**: Teacher interface for ±15min adjustments and content editing  
- [x] **Change Tracking**: All modifications logged with timestamps for export analysis
- [x] **Template System**: Base curriculum JSON structure with chunk types and metadata
- [x] **CosmosConfig Extension**: Chunker preferences integrated into global settings

### **Phase 2: Portal Integration 🚧 NEXT**
**Target**: Connect Portal navigation with user preferences

#### **Portal → Config Integration**
```javascript
// Bookmark system integration
window.CosmosConfig.addBookmark(unitId);
window.CosmosConfig.addToRecentlyViewed(pageId);

// Navigation preferences
portal.setDefaultCourse(window.CosmosConfig.get('portal.defaultCourse'));
portal.showProgressIndicators(window.CosmosConfig.get('portal.showProgressIndicators'));
```

#### **Implementation Tasks**
- [ ] Connect unit bookmarking to CosmosConfig bookmark storage
- [ ] Track recently viewed pages across Portal navigation
- [ ] Sync default course selection with user preferences
- [ ] Integrate progress indicators toggle

### **Phase 3: Socrates Library Integration 🚧 PLANNED**
**Target**: Research brief reading preferences and accessibility

#### **Socrates → Config Integration**
```javascript
// Reading preferences
socrates.setMathNotation(window.CosmosConfig.get('learning.mathNotation'));
socrates.enableHints(window.CosmosConfig.get('learning.showHints'));
socrates.setAccessibilityMode(window.CosmosConfig.get('learning.accessibilityMode'));

// Document tracking
window.CosmosConfig.addToRecentlyViewed(`socrates:${briefId}`);
```

#### **Implementation Tasks**
- [ ] Connect math notation preference (LaTeX vs ASCII)
- [ ] Implement hint display toggle for research briefs
- [ ] Add accessibility mode for enhanced readability
- [ ] Track recently accessed documents

### **Phase 4: WeekCentricChunker → Ratatoskr Data Integration 🚧 UPDATED**
**Target**: Replace simulation with real curriculum data from Chunker system

#### **Chunker → Ratatoskr Integration**
```javascript
// Enhanced integration leveraging new ChunkerConfigManager
class ChunkerConfigManager {
    getRatatoskrData() {
        return {
            currentChunk: this.getCurrentChunkFromSchedule(),
            completedChunks: this.getCompletedChunksToday(),
            upcomingChunks: this.getUpcomingChunksToday(),
            dailyProgress: this.calculateRealProgress(),
            liveAdjustments: this.getTodayAdjustments()
        };
    }
}

// Ratatoskr consumes live chunker data
ratatoskr.loadChunks(chunkerConfigManager.getRatatoskrData());
```

#### **Implementation Tasks** 🔄 REVISED
- [x] Create `ChunkerConfigManager` with real-time adjustment tracking
- [x] Implement `getRatatoskrData()` method structure in ChunkerConfigManager  
- [ ] Connect Ratatoskr to actual chunker data instead of simulation
- [ ] Add real-time progress calculation based on scheduled vs actual timing
- [ ] Implement chunk transition notifications with adjustment awareness

## 🔄 **Data Flow Architecture**

### **Configuration Events**
```javascript
// Central event system for reactive updates
document.addEventListener('cosmos-settings-changed', (e) => {
    const { path, value } = e.detail;
    
    // Route changes to appropriate systems
    if (path.startsWith('portal.')) portal.handleConfigChange(path, value);
    if (path.startsWith('learning.')) socrates.handleConfigChange(path, value);
    if (path.startsWith('ratatoskr.')) ratatoskr.handleConfigChange(path, value);
});
```

### **Cross-System Communication**
```javascript
// Portal → Ratatoskr: Current unit progress
portal.onUnitComplete(unitId => {
    ratatoskr.markUnitComplete(unitId);
    window.CosmosConfig.addToRecentlyViewed(`unit:${unitId}`);
});

// Socrates → Portal: Research brief completion
socrates.onBriefComplete(briefId => {
    portal.updateResearchProgress(briefId);
    window.CosmosConfig.addToRecentlyViewed(`brief:${briefId}`);
});

// Chunker → All: Daily progress updates
chunker.onProgressUpdate(progress => {
    ratatoskr.updateProgress(progress);
    portal.updateDashboard(progress);
});
```

## 📊 **Integration Benefits**

### **For Students**
- **Persistent Preferences**: Theme, layout, and learning preferences saved across sessions
- **Progress Tracking**: Visual progress through curriculum with Ratatoskr widget
- **Personalized Navigation**: Bookmarks, recent items, and customized dashboard
- **Accessibility**: Enhanced readability and navigation options

### **For Educators**
- **Student Insights**: Anonymous progress analytics (if enabled)
- **Content Adaptation**: Understand preferred learning modes and pacing
- **Resource Tracking**: Most accessed materials and common struggle points

### **For Platform**
- **Unified Experience**: Consistent behavior across all platform components
- **Scalable Architecture**: Easy addition of new features and preferences
- **Performance**: Efficient data sharing without redundant storage
- **Maintainability**: Central configuration reduces code duplication

## 🚀 **Next Steps**

1. **Portal Integration**: Start with bookmark system connection
2. **Testing Framework**: Automated tests for cross-system communication
3. **Analytics Integration**: Optional usage tracking with privacy controls
4. **Mobile Optimization**: Responsive behavior across all integrated components
5. **Documentation**: User guides for new integrated features

## 📋 **Technical Notes**

- **Event System**: Custom events prevent tight coupling between systems
- **Storage Strategy**: Single localStorage key reduces conflicts
- **Error Handling**: Graceful degradation when components are missing
- **Performance**: Lazy loading and caching minimize impact
- **Privacy**: All data stored locally, no external tracking unless explicitly enabled
