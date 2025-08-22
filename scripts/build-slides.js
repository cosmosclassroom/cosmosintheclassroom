#!/usr/bin/env node
/**
 * Automated Marp Slide Builder
 * Converts all physics slides to HTML with proper themes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class SlideBuilder {
  constructor() {
    this.slidesDir = './physics/*/slides';
    this.themesDir = './physics/shared/themes';
    this.outputDir = './_site/slides';
  }

  build() {
    console.log('🎬 Building Marp slides...\n');
    
    // Ensure output directory exists
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    // Find all slide files
    const slideFiles = glob.sync(`${this.slidesDir}/*.md`);
    
    if (slideFiles.length === 0) {
      console.log('ℹ️  No slide files found');
      return;
    }

    console.log(`Found ${slideFiles.length} slide files to process:`);
    
    slideFiles.forEach(file => {
      this.processSlide(file);
    });

    console.log('\n✅ Slide building complete!');
  }

  processSlide(inputFile) {
    const filename = path.basename(inputFile, '.md');
    const outputFile = path.join(this.outputDir, `${filename}.html`);
    
    console.log(`  • Processing: ${filename}`);
    
    try {
      // Build Marp command
      const command = [
        'npx @marp-team/marp-cli',
        `"${inputFile}"`,
        '--html',
        '--allow-local-files',
        `--theme-set "${this.themesDir}"`,
        `--output "${outputFile}"`
      ].join(' ');
      
      // Execute Marp conversion
      execSync(command, { stdio: 'pipe' });
      
      console.log(`    ✓ Generated: ${path.basename(outputFile)}`);
      
    } catch (error) {
      console.log(`    ✗ Error processing ${filename}: ${error.message}`);
    }
  }

  watch() {
    console.log('👀 Watching for slide changes...');
    
    const chokidar = require('chokidar');
    
    chokidar.watch(`${this.slidesDir}/*.md`).on('change', (path) => {
      console.log(`\n📝 Slide changed: ${path}`);
      this.processSlide(path);
    });
  }
}

// CLI interface
if (require.main === module) {
  const builder = new SlideBuilder();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--watch')) {
    builder.watch();
  } else {
    builder.build();
  }
}

module.exports = SlideBuilder;
