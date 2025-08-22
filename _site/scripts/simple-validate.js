#!/usr/bin/env node
/**
 * Simple Content Validation Script
 * Uses only Node.js built-ins to validate physics content structure
 */

const fs = require('fs');
const path = require('path');

class SimpleValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.physicsDir = './physics';
  }

  validate() {
    console.log('🔍 Starting content validation...\n');
    
    this.validatePhysicsStructure();
    this.reportResults();
  }

  validatePhysicsStructure() {
    console.log('📚 Validating physics content structure...');
    
    const courses = ['honors', 'standard'];
    
    courses.forEach(course => {
      const coursePath = path.join(this.physicsDir, course);
      
      if (!fs.existsSync(coursePath)) {
        this.errors.push(`Missing course directory: ${coursePath}`);
        return;
      }

      // Check for required directories
      const requiredDirs = ['units'];
      requiredDirs.forEach(dir => {
        const dirPath = path.join(coursePath, dir);
        if (!fs.existsSync(dirPath)) {
          this.warnings.push(`Missing ${dir} directory in ${course}`);
        }
      });

      // Validate unit structure
      this.validateUnits(coursePath, course);
    });
  }

  validateUnits(coursePath, course) {
    const unitsPath = path.join(coursePath, 'units');
    
    if (!fs.existsSync(unitsPath)) return;

    const units = fs.readdirSync(unitsPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    console.log(`  Found ${units.length} units in ${course}:`);
    
    units.forEach(unit => {
      const unitPath = path.join(unitsPath, unit);
      
      // Check for README.md
      const readmePath = path.join(unitPath, 'README.md');
      if (!fs.existsSync(readmePath)) {
        this.warnings.push(`Missing README.md in ${course}/${unit}`);
      } else {
        console.log(`    ✅ ${unit} - README.md found`);
      }

      // Check for standard subdirectories
      const expectedDirs = ['lessons', 'labs', 'problemsets'];
      expectedDirs.forEach(dir => {
        const dirPath = path.join(unitPath, dir);
        if (!fs.existsSync(dirPath)) {
          this.warnings.push(`Missing ${dir} in ${course}/${unit}`);
        }
      });
    });
  }

  reportResults() {
    console.log('\n📊 Validation Results:');
    console.log('='.repeat(50));
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ All validations passed!');
      console.log('🎉 Physics curriculum structure is properly organized!');
      return;
    }

    if (this.errors.length > 0) {
      console.log(`\n❌ Errors (${this.errors.length}):`);
      this.errors.forEach(error => console.log(`  • ${error}`));
    }

    if (this.warnings.length > 0) {
      console.log(`\n⚠️  Warnings (${this.warnings.length}):`);
      this.warnings.forEach(warning => console.log(`  • ${warning}`));
    }

    // Exit with error code if there are errors
    if (this.errors.length > 0) {
      process.exit(1);
    }
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new SimpleValidator();
  validator.validate();
}

module.exports = SimpleValidator;
