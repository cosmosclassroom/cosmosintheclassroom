# Physics Course Organization Plan
## January 2025 Reorganization

### Current Issues
1. **Content Duplication**: Files scattered across `src/`, `_site/`, and `q4-2025/`
2. **Inconsistent Naming**: Mixed conventions and versioning
3. **Experimental Debris**: Q4-2025 folder with incomplete experiments
4. **Slide Management**: Marp slides in multiple locations

## Proposed Structure

### Root Level Physics Organization
```
physics/
├── honors/          # Honors Physics (hphys)
│   ├── units/       # Organized by physics units
│   ├── slides/      # Marp presentation files
│   ├── assessments/ # Tests, quizzes, problem sets
│   └── resources/   # Reference materials, labs
├── standard/        # Standard Physics (sphys)  
│   ├── units/       # Parallel structure to honors
│   ├── slides/      
│   ├── assessments/
│   └── resources/
└── shared/          # Common resources
    ├── images/
    ├── formulas/
    └── themes/      # Marp themes
```

### Unit Organization (Both Honors & Standard)
```
units/
├── 01_principles/
│   ├── lessons/
│   ├── labs/
│   └── problemsets/
├── 02_kinematics1/
├── 03_kinematics2/
├── 04_dynamics/
├── 05_conservation/
├── 06_circular_gravity/
├── 07_shm/
├── 08_electromagnetism/
├── 09_electricity/
└── 10_optics/
```

### File Naming Standards
- **Slides**: `unit##_topic-name.md` (e.g., `unit08_electrostatics.md`)
- **Problem Sets**: `ps##.#_topic-name.md` (e.g., `ps08.1_electric-fields.md`)
- **Labs**: `lab##_topic-name.md`
- **Assessments**: `quiz##_topic-name.md`, `test##_topic-name.md`

## Migration Strategy

### Phase 1: Consolidate Content
1. **Audit Existing Content**
   - Identify duplicates between `src/` and `_site/`
   - Catalog Q4-2025 experimental content
   - List all Marp slides and their locations

2. **Create New Structure**
   - Establish the proposed directory hierarchy
   - Set up consistent naming conventions
   - Create index files for each unit

### Phase 2: Content Migration
1. **Honors Physics (`hphys/`)**
   - Move numbered unit folders to new structure
   - Consolidate slide content
   - Organize assessments by unit

2. **Standard Physics (`sphys/`)**
   - Organize existing content
   - Align structure with honors physics
   - Integrate OpenStax materials properly

3. **Q4-2025 Cleanup**
   - Salvage useful content from experiments
   - Integrate valid slides and assessments
   - Archive or delete incomplete experiments

### Phase 3: Tool Integration
1. **Marp Slide Management**
   - Centralize theme files
   - Update `slider.py` for new structure
   - Create build scripts for batch conversion

2. **Portal Integration**
   - Update course.json files
   - Align with new directory structure
   - Test navigation and links

## Implementation Benefits
- **Reduced Duplication**: Single source of truth for each content piece
- **Improved Navigation**: Logical progression through physics concepts
- **Easier Maintenance**: Consistent structure across both courses
- **Better Collaboration**: Clear organization for future AI assistance
- **Scalable Growth**: Room for additional content and courses

## Timeline
- **Week 1**: Structure creation and content audit
- **Week 2**: Migration of core content (Units 1-5)
- **Week 3**: Migration of advanced content (Units 6-10)
- **Week 4**: Q4-2025 cleanup and integration
- **Week 5**: Testing and refinement
