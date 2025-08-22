#!/usr/bin/env node
/**
 * Content Validation Script
 * Validates physics content, portal links, and system integrity
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class ContentValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.physicsDir = './physics';
    this.portalDir = './src/portal';
  }

  validate() {
    console.log('🔍 Starting content validation...\n');
    
    this.validatePhysicsStructure();
    this.validatePortalLinks();
    this.validateSlideReferences();
    this.checkMissingContent();
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
      const requiredDirs = ['units', 'slides', 'assessments'];
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

    units.forEach(unit => {
      const unitPath = path.join(unitsPath, unit);
      
      // Check for README.md
      const readmePath = path.join(unitPath, 'README.md');
      if (!fs.existsSync(readmePath)) {
        this.warnings.push(`Missing README.md in ${course}/${unit}`);
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

  validatePortalLinks() {
    console.log('🌐 Validating portal navigation...');
    
    const portalFiles = glob.sync(path.join(this.portalDir, '**/*.html'));
    
    portalFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for TODO comments
      const todos = content.match(/TODO:.*$/gm);
      if (todos) {
        todos.forEach(todo => {
          this.warnings.push(`TODO found in ${file}: ${todo.trim()}`);
        });
      }

      // Check for broken internal links
      const links = content.match(/href=["']([^"']+)["']/g);
      if (links) {
        links.forEach(link => {
          const href = link.match(/href=["']([^"']+)["']/)[1];
          if (href.startsWith('./') || href.startsWith('../')) {
            const linkPath = path.resolve(path.dirname(file), href);
            if (!fs.existsSync(linkPath)) {
              this.errors.push(`Broken link in ${file}: ${href}`);
            }
          }
        });
      }
    });
  }

  validateSlideReferences() {
    console.log('🎬 Validating slide references...');
    
    const slideFiles = glob.sync('./physics/*/slides/*.md');
    
    slideFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for proper frontmatter
      if (!content.startsWith('---')) {
        this.warnings.push(`Missing frontmatter in slide: ${file}`);
      }

      // Check for Marp directive
      if (!content.includes('marp: true')) {
        this.warnings.push(`Missing Marp directive in slide: ${file}`);
      }
    });
  }

  checkMissingContent() {
    console.log('📋 Checking for missing content...');
    
    // Check for incomplete units (Units 3 and 5 mentioned in docs)
    const incompleteUnits = ['03_forces', '05_waves'];
    
    incompleteUnits.forEach(unit => {
      const honorsPath = path.join(this.physicsDir, 'honors', 'units', unit);
      const standardPath = path.join(this.physicsDir, 'standard', 'units', unit);
      
      if (!fs.existsSync(honorsPath)) {
        this.warnings.push(`Incomplete content: Missing honors/${unit}`);
      }
      
      if (!fs.existsSync(standardPath)) {
        this.warnings.push(`Incomplete content: Missing standard/${unit}`);
      }
    });
  }

  reportResults() {
    console.log('\n📊 Validation Results:');
    console.log('='.repeat(50));
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ All validations passed!');
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
  const validator = new ContentValidator();
  validator.validate();
}

module.exports = ContentValidator;
