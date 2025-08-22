/**
 * Cosmos in the Classroom - Unified Build Configuration
 * Streamlines all build processes for better maintainability
 */

const path = require('path');

module.exports = {
  // Source directories
  sources: {
    physics: './physics',
    portal: './src/portal',
    tools: './tools',
    themes: './themes'
  },

  // Output directories
  outputs: {
    site: './_site',
    assets: './_site/assets',
    portal: './_site/portal'
  },

  // Build tasks
  tasks: {
    // CSS compilation
    css: {
      input: './src/portal/styles.css',
      output: './_site/assets/css/styles.css',
      tailwind: {
        config: './tailwind.config.js',
        watch: true
      }
    },

    // Physics content processing
    physics: {
      honors: {
        source: './physics/honors',
        output: './_site/physics/honors'
      },
      standard: {
        source: './physics/standard', 
        output: './_site/physics/standard'
      }
    },

    // Marp slide generation
    slides: {
      source: './physics/*/slides/*.md',
      output: './_site/slides',
      theme: './physics/shared/themes'
    },

    // Portal system
    portal: {
      source: './src/portal',
      output: './_site/portal',
      courses: ['hphysics', 'sphysics', 'natdis']
    },

    // Tools compilation
    tools: {
      chunker: './tools/schedule-chunker',
      consequence: './tools/consequence-engine'
    }
  },

  // Development settings
  dev: {
    server: {
      port: 3000,
      host: 'localhost',
      livereload: true
    },
    watch: [
      './physics/**/*.md',
      './src/portal/**/*',
      './themes/**/*.css'
    ]
  },

  // Production optimizations
  production: {
    minify: true,
    compress: true,
    cache: true,
    cdn: false  // Set to true when ready for CDN
  }
};
