#!/usr/bin/env python3
"""
Physics Content Migration Script
Helps migrate and organize physics content from the old scattered structure
to the new organized physics/ directory structure.
"""

import os
import shutil
from pathlib import Path
import json
import re

class PhysicsMigrator:
    def __init__(self, root_dir):
        self.root = Path(root_dir)
        self.physics_dir = self.root / "physics"
        self.migration_log = []
        
    def log(self, message):
        """Log migration actions"""
        print(message)
        self.migration_log.append(message)
        
    def analyze_current_structure(self):
        """Analyze existing physics content"""
        print("=== CURRENT PHYSICS CONTENT ANALYSIS ===\n")
        
        # Analyze hphys content
        hphys_dir = self.root / "src" / "hphys"
        if hphys_dir.exists():
            print("HONORS PHYSICS (hphys) Content:")
            for item in sorted(hphys_dir.iterdir()):
                if item.is_dir():
                    print(f"  📁 {item.name}")
                    # Count files in each directory
                    file_count = len(list(item.rglob("*")))
                    print(f"     {file_count} files")
        
        # Analyze sphys content  
        sphys_dir = self.root / "src" / "sphys"
        if sphys_dir.exists():
            print("\nSTANDARD PHYSICS (sphys) Content:")
            for item in sorted(sphys_dir.iterdir()):
                if item.is_dir():
                    print(f"  📁 {item.name}")
                    file_count = len(list(item.rglob("*")))
                    print(f"     {file_count} files")
        
        # Analyze q4-2025 experimental content
        q4_dir = self.root / "src" / "q4-2025"
        if q4_dir.exists():
            print("\nQ4-2025 EXPERIMENTAL Content:")
            for item in sorted(q4_dir.iterdir()):
                print(f"  📄 {item.name}")
        
        # Analyze slides
        slides_dir = self.root / "slides"
        if slides_dir.exists():
            print("\nSLIDES Content:")
            md_files = list(slides_dir.glob("*.md"))
            html_files = list(slides_dir.glob("*.html"))
            print(f"  📊 {len(md_files)} Markdown slides")
            print(f"  📊 {len(html_files)} HTML slides")
            
    def create_unit_structure(self, course_type="honors"):
        """Create standardized unit structure"""
        course_dir = self.physics_dir / course_type / "units"
        
        units = [
            "01_principles",
            "02_kinematics1", 
            "03_kinematics2",
            "04_dynamics",
            "05_conservation",
            "06_circular_gravity",
            "07_shm",
            "08_electromagnetism", 
            "09_electricity",
            "10_optics"
        ]
        
        for unit in units:
            unit_dir = course_dir / unit
            unit_dir.mkdir(parents=True, exist_ok=True)
            
            # Create subdirectories
            (unit_dir / "lessons").mkdir(exist_ok=True)
            (unit_dir / "labs").mkdir(exist_ok=True)
            (unit_dir / "problemsets").mkdir(exist_ok=True)
            
            # Create README for each unit
            readme_content = f"""# {unit.replace('_', ' ').title()}

## Content Overview
- **Lessons**: Instructional materials and notes
- **Labs**: Laboratory activities and experiments  
- **Problem Sets**: Practice problems and assignments

## Files in this Unit
- [ ] Lesson materials
- [ ] Lab activities
- [ ] Problem sets
- [ ] Assessment materials

## Migration Status
- [ ] Content migrated from old structure
- [ ] Files renamed according to new conventions
- [ ] Links updated
- [ ] Quality check completed
"""
            (unit_dir / "README.md").write_text(readme_content)
            
    def suggest_file_migrations(self):
        """Suggest how existing files should be migrated"""
        print("\n=== MIGRATION SUGGESTIONS ===\n")
        
        suggestions = []
        
        # Map old hphys directories to new structure
        hphys_mapping = {
            "0_principles": "01_principles",
            "1_mechanics": "02_kinematics1", 
            "2_kinematics-1": "02_kinematics1",
            "3_kinematics-2": "03_kinematics2", 
            "4_dynamics": "04_dynamics",
            "5_conservation": "05_conservation",
            "6_circ_grav": "06_circular_gravity",
            "7_shm": "07_shm",
            "8_electromagnetism": "08_electromagnetism",
            "8_waves": "08_electromagnetism",  # Merge waves into electromagnetism
            "9_electrics": "09_electricity",
            "10_optics": "10_optics"
        }
        
        hphys_dir = self.root / "src" / "hphys"
        if hphys_dir.exists():
            for old_dir in hphys_dir.iterdir():
                if old_dir.is_dir() and old_dir.name in hphys_mapping:
                    new_unit = hphys_mapping[old_dir.name]
                    suggestions.append({
                        "action": "move_directory",
                        "source": str(old_dir),
                        "target": f"physics/honors/units/{new_unit}/lessons/",
                        "type": "honors_content"
                    })
        
        # Handle slides
        slides_dir = self.root / "slides"
        if slides_dir.exists():
            for slide_file in slides_dir.glob("*.md"):
                # Extract unit number from filename
                unit_match = re.search(r'(\d+)', slide_file.name)
                if unit_match:
                    unit_num = int(unit_match.group(1))
                    if 1 <= unit_num <= 10:
                        target_dir = f"physics/honors/slides/"
                        suggestions.append({
                            "action": "move_file", 
                            "source": str(slide_file),
                            "target": target_dir,
                            "type": "slide"
                        })
        
        # Q4-2025 experimental content
        q4_dir = self.root / "src" / "q4-2025"
        if q4_dir.exists():
            for item in q4_dir.iterdir():
                if "claude" in item.name.lower():
                    suggestions.append({
                        "action": "archive",
                        "source": str(item),
                        "target": "physics/shared/archive/q4-experiments/",
                        "type": "experimental"
                    })
                elif any(unit in item.name for unit in ["ps9", "ps10", "electro", "optic"]):
                    # Content that might be useful
                    suggestions.append({
                        "action": "review_and_migrate",
                        "source": str(item), 
                        "target": "physics/honors/units/",
                        "type": "q4_content"
                    })
        
        # Print suggestions
        for suggestion in suggestions:
            print(f"📋 {suggestion['action'].upper()}")
            print(f"   Source: {suggestion['source']}")
            print(f"   Target: {suggestion['target']}")
            print(f"   Type: {suggestion['type']}")
            print()
            
        return suggestions
    
    def create_migration_batch_script(self, suggestions):
        """Create a batch script to execute migrations"""
        script_content = ["@echo off", 
                         "echo Starting Physics Content Migration...",
                         "echo.", ""]
        
        for suggestion in suggestions:
            if suggestion['action'] == 'move_directory':
                source = suggestion['source'].replace('/', '\\')
                target = suggestion['target'].replace('/', '\\')
                script_content.extend([
                    f"echo Moving {suggestion['type']}: {source}",
                    f"if exist \"{source}\" (",
                    f"  if not exist \"{target}\" mkdir \"{target}\"",
                    f"  xcopy \"{source}\" \"{target}\" /E /I /Y",
                    f"  echo   Moved to {target}",
                    f") else (",
                    f"  echo   Source not found: {source}",
                    f")",
                    "echo."
                ])
        
        script_content.extend([
            "",
            "echo Migration script completed.",
            "echo Review the results and run cleanup when ready.",
            "pause"
        ])
        
        script_path = self.root / "migrate_physics_content.bat"
        script_path.write_text('\n'.join(script_content))
        
        print(f"📝 Migration script created: {script_path}")
        print("   Review the script before running!")
        
    def generate_migration_report(self):
        """Generate a comprehensive migration report"""
        report_path = self.root / "MIGRATION_REPORT.md"
        
        report_content = f"""# Physics Content Migration Report
Generated: {Path(__file__).name}

## Current Structure Analysis
{self.analyze_current_structure()}

## Recommended Actions

### 1. Immediate Actions
- [ ] Review migration suggestions below
- [ ] Run migration batch script (after review)
- [ ] Verify content moved correctly

### 2. Content Cleanup
- [ ] Remove duplicate files
- [ ] Update internal links
- [ ] Standardize file naming

### 3. Integration Tasks  
- [ ] Update portal course.json files
- [ ] Test navigation
- [ ] Update marp slide themes

## Migration Log
"""
        
        for log_entry in self.migration_log:
            report_content += f"- {log_entry}\n"
            
        report_path.write_text(report_content)
        print(f"📊 Migration report saved: {report_path}")

def main():
    # Assuming script is run from the root of cosmosintheclassroom
    root_dir = Path(__file__).parent
    
    migrator = PhysicsMigrator(root_dir)
    
    print("🔧 PHYSICS CONTENT MIGRATION TOOL")
    print("=" * 50)
    
    # Analyze current structure
    migrator.analyze_current_structure()
    
    # Create new structure for both honors and standard
    print("\n📁 Creating new unit structure...")
    migrator.create_unit_structure("honors")
    migrator.create_unit_structure("standard")
    migrator.log("Created standardized unit structure")
    
    # Generate migration suggestions
    suggestions = migrator.suggest_file_migrations()
    
    # Create batch script for migration
    migrator.create_migration_batch_script(suggestions)
    
    # Generate report
    migrator.generate_migration_report()
    
    print("\n✅ Migration preparation complete!")
    print("📋 Next steps:")
    print("   1. Review MIGRATION_REPORT.md")
    print("   2. Check migrate_physics_content.bat")
    print("   3. Run migration script when ready")
    print("   4. Test and verify results")

if __name__ == "__main__":
    main()
