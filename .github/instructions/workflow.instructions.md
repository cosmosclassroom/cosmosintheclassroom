---
applyTo: '.github/**'
---

# CI/CD & Workflow Instructions

## GitHub Actions Standards (August 2025)

### Comprehensive Quality Pipeline
The workflow validates multiple aspects of the educational platform:

#### Content Validation
- **Physics Structure**: Unit organization, naming conventions
- **Educational Standards**: Learning objectives, prerequisites
- **Cross-References**: Internal link validation
- **File Organization**: Root directory cleanliness monitoring

#### Technical Quality
- **Jekyll Build**: Site generation with Ruby 3.2+ compatibility
- **CSS Optimization**: TailwindCSS v4 build and minification
- **JavaScript**: ES6+ syntax validation and error checking
- **Performance**: Classroom bandwidth optimization

#### Educational Integration
- **Personalization System**: cosmos-config.js functionality testing
- **Cross-System Data**: Portal ↔ Chunker ↔ Socrates ↔ Library integration
- **Universal Header**: Consistent navigation validation
- **Accessibility**: WCAG compliance checking

#### Security & Maintenance
- **Dependency Scanning**: npm audit, Ruby gem security
- **Sensitive Data**: Credential exposure prevention
- **Daily Cleanup**: Automated organization reports
- **Platform Updates**: Ruby, Node.js, dependency management

### Workflow Triggers
```yaml
on:
  push:
    branches: [ main, 'feature/**', 'hotfix/**' ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 6 * * *'  # Daily maintenance at 6 AM UTC
```

### Job Dependencies
```
content-validation → jekyll-build → deploy-pages
                  ↘ frontend-optimization
                  ↘ integration-tests
                  ↘ educational-quality
```

## Development Workflow Standards

### Branch Strategy
- **main**: Stable, classroom-ready content
- **feature/ui-***: Interface experiments and improvements  
- **feature/content-***: Curriculum development and migration
- **feature/system-***: Major system additions and integrations
- **hotfix/***: Quick fixes and cleanup tasks

### Commit Message Standards
```
type: Brief summary (50 chars max)

- Detailed bullet points of changes
- Reference issue numbers when applicable  
- Explain WHY changes were made
- Include impact on educational systems
```

### Pre-Commit Validation
Before pushing changes, verify:
1. **Local Build**: `npm run build-css && bundle exec jekyll build`
2. **Config Integration**: Test cosmos-config.js functionality
3. **Cross-System**: Verify Portal/Chunker/Socrates/Library compatibility
4. **Educational Standards**: Check physics content accuracy

### Emergency Procedures

#### Broken CI/CD Pipeline
1. Check Ruby/Node.js version compatibility
2. Verify Gemfile.lock platform compatibility
3. Test TailwindCSS build process locally
4. Validate cosmos-config.js integration

#### Content Structure Issues
1. Run `build-restructure.bat` for organization
2. Validate physics unit naming conventions
3. Check cross-reference links
4. Update README.md and MINUTES.md

#### Performance Problems
1. Optimize images for classroom bandwidth
2. Minimize CSS/JavaScript bundles
3. Test mobile responsiveness
4. Validate accessibility compliance

## Educational Quality Gates

### Physics Content Validation
- **Scientific Accuracy**: Verified by qualified educators
- **Progressive Difficulty**: Logical skill building
- **Real-World Applications**: Practical connections
- **Assessment Alignment**: Learning objectives coverage

### Technical Educational Standards
- **Loading Speed**: <3 seconds on school networks
- **Mobile Compatibility**: Tablet and phone optimization
- **Accessibility**: Screen readers, keyboard navigation
- **Cross-Platform**: Windows, macOS, Linux, Chromebook

### Integration Requirements
- **Personalization**: Consistent user experience across systems
- **Progress Tracking**: 144-chunk academic calendar integration
- **Course Selection**: Honors vs Standard differentiation  
- **Data Persistence**: localStorage with sync capability

## Monitoring & Reporting

### Daily Automated Reports
- **File Organization**: Root directory cleanliness
- **Performance Metrics**: Load times, bundle sizes
- **Dependency Updates**: Security patches, version updates
- **Content Validation**: Broken links, missing resources

### Weekly Quality Reviews
- **Educational Standards**: Content accuracy verification
- **User Experience**: Cross-system integration testing
- **Performance Analysis**: Classroom usage optimization
- **Technical Debt**: Code quality and maintainability

### Monthly Strategic Assessment  
- **Feature Usage**: Portal/Chunker/Socrates/Library analytics
- **Educational Impact**: Learning outcome measurement
- **Technical Evolution**: Framework updates, new capabilities
- **Community Feedback**: Teacher and student input integration
