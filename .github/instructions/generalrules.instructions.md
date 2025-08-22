# Architecture Integration Standards

## System Interdependencies (August 2025)

### Central Configuration Requirement
**ALL systems MUST integrate with `cosmos-config.js`:**
- Portal: User preferences, course selection, progress tracking
- Chunker: Current class, preferences, export settings  
- Socrates: AI assistant settings, response preferences
- Library: Feature toggles, resource management

### Cross-System Data Flow
```javascript
// Required in ALL system JavaScript files:
if (typeof CosmosConfig === 'undefined') {
    console.error('CosmosConfig not available - check script loading order');
    return;
}
const config = new CosmosConfig();
```

### Universal Header Integration
**Every HTML page MUST include:**
1. **Cosmos Configuration**: `<script src="src/js/cosmos-config.js"></script>`
2. **Universal Header**: `<script src="src/shared/components/universal-header.js"></script>`
3. **Header Container**: `<div id="universalHeader"></div>`
4. **Personalization**: User name, course level, progress visualization

### Quality Assurance Integration
**GitHub Actions workflow validates:**
- Content structure compliance
- CSS dependency resolution
- Cross-system integration
- Educational quality standards
- Performance optimization

## Development Standards

### File Organization Rules
- **Root Directory**: Keep clean - use feature branches for experiments
- **CSS**: TailwindCSS v4 syntax in `assets/css/input.css`
- **JavaScript**: ES6+ with proper error handling
- **Configuration**: JSON files in `data/` directory (NOT root)

### Comment Requirements
```javascript
// Always comment code based on how it enables:
// (A) Portal - Course navigation and content discovery
// (B) Chunker - Temporal organization of educational content  
// (C) Socrates - AI-powered Socratic questioning
// (D) Library - Comprehensive reference and resource system
// (E) Personalization - User data persistence across systems
```

### Educational Content Standards
- **Scientific Accuracy**: All physics content validated
- **Progressive Difficulty**: Build from simple to complex
- **Cross-References**: Link related concepts and units
- **Accessibility**: WCAG compliance for educational environments