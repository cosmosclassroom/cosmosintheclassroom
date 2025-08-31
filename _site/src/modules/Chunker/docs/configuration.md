# Chunker Configuration Engine Architecture

## Current Challenge: Making Chunker Universal

The current chunker system is hardcoded for BHS's specific 8-period drop-2 rotation schedule. To make it universally useful, we need to create a flexible configuration engine.

## 🎯 **Design Goals**

### **1. School Schedule Flexibility**
- Support different rotation types (4-day, 6-day, fixed, A/B, etc.)
- Configurable period lengths and break times
- Multiple bell schedule variants (regular, early release, etc.)
- Holiday and non-instructional day handling

### **2. Chunk Calculation Engine**
- Time-to-chunks conversion based on period lengths
- Automatic adjustment for different class durations
- Cross-period chunk allocation logic
- Buffer time calculations

### **3. Configuration Templates**
- Pre-built templates for common schedule types
- Easy setup for new schools
- Import/export configuration sharing
- Validation and error checking

## 📋 **Configuration Schema Design**

```json
{
  "school": {
    "name": "Branford High School",
    "timezone": "America/New_York",
    "academicYear": "2025-2026",
    "startDate": "2025-08-26",
    "endDate": "2026-06-15"
  },
  
  "schedule": {
    "type": "rotation", // "rotation" | "fixed" | "block" | "alternating"
    "pattern": {
      "rotationDays": ["A", "B", "C", "D"],
      "cycleLength": 4,
      "weeklyPattern": "ABCDABCD..." // or null for automatic
    },
    
    "periods": [
      {
        "id": 1,
        "name": "Period 1",
        "duration": 60, // minutes
        "type": "academic" // "academic" | "lunch" | "advisory" | "break"
      },
      // ... up to 8 periods
    ],
    
    "rotationRules": {
      "A": { "meeting": [1,2,3,4,5,6], "dropped": [7,8] },
      "B": { "meeting": [1,2,3,4,7,8], "dropped": [5,6] },
      "C": { "meeting": [1,2,5,6,7,8], "dropped": [3,4] },
      "D": { "meeting": [3,4,5,6,7,8], "dropped": [1,2] }
    }
  },
  
  "chunker": {
    "baseChunkSize": 15, // minutes per chunk
    "settings": {
      "defaultAdminTime": 15,
      "assessmentBuffer": 10,
      "maxChunksPerPeriod": 4,
      "allowPartialChunks": true,
      "crossPeriodChunks": true
    },
    
    "flexibility": {
      "stickyChunkPenalty": 2, // minutes harder to move
      "slipperyChunkBonus": 1,  // minutes easier to move
      "homeworkTransferCost": 5 // minutes of lost engagement
    }
  },
  
  "calendar": {
    "nonInstructionalDays": ["2025-09-02", "2025-11-28", ...],
    "earlyReleaseDays": ["2025-12-23"],
    "lateStartDays": ["2025-10-15"],
    "specialSchedules": {
      "early-release": {
        "periods": [...] // modified period durations
      }
    }
  }
}
```

## 🔧 **Implementation Strategy**

### **Phase 1: Configuration Engine Core**
1. **Config Parser**: Load and validate JSON configurations
2. **Schedule Calculator**: Convert config to usable schedule objects  
3. **Chunk Engine**: Time-to-chunk calculations based on config
4. **Validation System**: Error checking and warnings

### **Phase 2: Calculation Algorithms**
1. **Time Allocation Engine**: Map chunks to available periods
2. **Conflict Resolution**: Handle scheduling conflicts intelligently
3. **Flexibility Engine**: Apply sticky/slippery rules
4. **Progress Tracking**: Real-time completion calculations

### **Phase 3: Template System**
1. **Common Templates**: Pre-built configs for popular schedule types
2. **Configuration Wizard**: GUI for setting up new schools
3. **Import/Export**: Share configurations between schools
4. **Migration Tools**: Convert existing schedules

## 🎨 **Template Examples**

### **Traditional 6-Period Fixed Schedule**
```json
{
  "schedule": {
    "type": "fixed",
    "periods": [
      {"id": 1, "duration": 50, "name": "Period 1"},
      {"id": 2, "duration": 50, "name": "Period 2"},
      {"id": 3, "duration": 50, "name": "Period 3"},
      {"id": 4, "duration": 30, "name": "Lunch", "type": "lunch"},
      {"id": 5, "duration": 50, "name": "Period 4"},
      {"id": 6, "duration": 50, "name": "Period 5"},
      {"id": 7, "duration": 50, "name": "Period 6"}
    ]
  }
}
```

### **A/B Block Schedule**
```json
{
  "schedule": {
    "type": "alternating",
    "pattern": {
      "rotationDays": ["A", "B"],
      "cycleLength": 2
    },
    "rotationRules": {
      "A": { "meeting": [1,3,5,7], "duration": 90 },
      "B": { "meeting": [2,4,6,8], "duration": 90 }
    }
  }
}
```

### **4x4 Block Schedule**
```json
{
  "schedule": {
    "type": "block",
    "pattern": {
      "semesterBlocks": true,
      "blocksPerSemester": 4
    },
    "periods": [
      {"id": 1, "duration": 90, "name": "Block 1"},
      {"id": 2, "duration": 90, "name": "Block 2"},
      {"id": 3, "duration": 30, "name": "Lunch", "type": "lunch"},
      {"id": 4, "duration": 90, "name": "Block 3"},
      {"id": 5, "duration": 90, "name": "Block 4"}
    ]
  }
}
```

## 🚀 **Benefits of This Approach**

### **For Different Schools:**
- **Immediate Compatibility**: Works with any bell schedule
- **Easy Setup**: Templates for common schedule types
- **Customizable**: Tweak settings for school-specific needs
- **Shareable**: Export configurations to help other schools

### **For Chunker Evolution:**
- **Scalable Architecture**: Easy to add new features
- **Maintainable Code**: Configuration separate from logic
- **Testing Friendly**: Mock different schedules for testing
- **Future-Proof**: Can adapt to schedule changes

### **For Teachers:**
- **Familiar Interface**: Same chunker tools, different schools
- **Transferable Skills**: Learn once, use anywhere
- **Collaboration**: Share planning strategies across schools
- **Professional Development**: Common framework for workshops

## ⚡ **Implementation Difficulty Assessment**

### **🟢 Easy (1-2 days)**
- Basic configuration file structure
- Simple template examples
- Configuration validation
- Period duration calculations

### **🟡 Medium (3-5 days)**
- Dynamic schedule generation from config
- Chunk calculation engine refactoring
- Multi-schedule template system
- Calendar integration with config

### **🟠 Complex (1-2 weeks)**
- Advanced conflict resolution algorithms
- Configuration wizard interface
- Migration tools for existing schedules
- Cross-schedule compatibility testing

### **🔴 Advanced (2-4 weeks)**
- Machine learning for optimal chunk placement
- Real-time schedule adaptation
- Complex constraint satisfaction
- Advanced analytics and reporting

## 🎯 **Recommended Next Steps**

1. **Create Configuration Schema** (1 day)
2. **Build Basic Config Parser** (1 day)  
3. **Refactor Current BHS Schedule** to use config (2 days)
4. **Create 2-3 Common Templates** (1 day)
5. **Test with Alternative Schedule** (1 day)

**Total Estimated Time**: 1 week for core functionality
**Full Feature Set**: 2-3 weeks including templates and wizard

Would you like me to start implementing the configuration engine? I'd recommend beginning with the BHS config refactor to prove the concept, then expanding to other schedule types.
