# Socrates: Research Brief Generator

*An AI-powered curriculum design tool for phenomenon-driven NGSS science education*

## 🎯 Overview

Socrates transforms the way educators create inquiry-based science curricula by bridging pedagogical philosophy with practical AI-assisted content generation. Built on the **four-voice narrative synthesis** (Socratic questioning, Burkean storytelling, Saganesque wonder, Feynmanesque playfulness), Socrates generates complete Research Briefs that maintain intellectual rigor while being perfectly aligned with NGSS 3D framework.

## ✨ Key Features

### 🎨 **NGSS 3D Visual Framework**
- **🔵 Blue**: Science & Engineering Practices
- **🟠 Orange**: Disciplinary Core Ideas (DCI)
- **🟢 Green**: Crosscutting Concepts
- **🟣 Purple**: Metacognitive Connections

### 🔬 **Three-Step Workflow**
1. **Design Your Unit** - Input phenomenon, select NGSS practices, configure elements
2. **Generate AI Prompts** - Create structured JSON + optimized AI prompts
3. **Create Materials** - Use prompts with AI to generate complete research briefs

### 🧩 **Flexible Structure Systems**
- **Physics**: Matter → Energy → Force
- **Biology**: Structure → Function → Growth/Evolution
- **Narrative**: Beginning → Middle → End
- **Roles**: Scientist → Engineer → Policymaker
- **Custom**: User-defined three-part progression

## 🏗️ Architecture

```
socrates/
├── frontend/           # React-based UI with TailwindCSS
│   ├── components/     # Reusable UI components
│   ├── pages/         # Main application pages
│   └── styles/        # NGSS 3D color system
├── backend/           # Node.js API server
│   ├── api/           # REST endpoints
│   ├── generators/    # AI prompt builders
│   └── validators/    # JSON schema validation
├── data/              # Templates and schemas
│   ├── schemas/       # JSON schema definitions
│   ├── templates/     # Element templates
│   └── examples/      # Sample outputs
└── docs/              # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Modern web browser

### Installation
```bash
# Clone the repository
git clone https://github.com/cosmosclassroom/cosmosintheclassroom.git
cd cosmosintheclassroom/src/socrates

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Basic Usage
1. **Select Framework**: Choose your three-part structure (e.g., Matter-Energy-Force)
2. **Input Phenomenon**: Describe your anchoring phenomenon
3. **Configure Elements**: Select NGSS practices and crosscutting concepts
4. **Generate**: Create AI prompts and JSON output
5. **Create**: Use prompts with your preferred AI assistant

## 📋 Generated Output

### JSON Structure
```json
{
  "courseMetadata": {
    "narrativeVoice": "A Story of Matter, Energy, and Force",
    "threePartStructure": {
      "framework": "physics",
      "phase1": { "name": "Matter", "primaryVoice": "socratic" },
      "phase2": { "name": "Energy", "primaryVoice": "feynmanesque" },
      "phase3": { "name": "Force", "primaryVoice": "saganesque" }
    }
  },
  "anchoringPhenomenon": {
    "title": "Lightning and Thunder Time Delay",
    "description": "Observable phenomenon description",
    "realWorldApplications": ["meteorology", "emergency preparedness"]
  },
  "researchBriefStructure": {
    "phase1_matter": { /* detailed element configuration */ },
    "phase2_energy": { /* detailed element configuration */ },
    "phase3_force": { /* detailed element configuration */ }
  }
}
```

### AI Prompts
- Framework-specific system prompts
- Element-by-element instructions
- Metacognitive integration guidance
- Assessment alignment protocols

## 🎨 Design System

### Color Coding
All interface elements follow the NGSS 3D color system:

```css
:root {
  --practice-primary: #2563EB;    /* Blue */
  --dci-primary: #EA580C;         /* Orange */
  --crosscutting-primary: #16A34A; /* Green */
  --metacognitive-primary: #8B5CF6; /* Purple */
}
```

### Component Examples
- **Element Cards**: Multi-color border strips showing all 3D components
- **Progress Bars**: Color-coded completion tracking
- **Navigation Tabs**: Component-specific themes
- **Badges**: NGSS dimension indicators

## 🧠 Pedagogical Framework

### Four-Voice Narrative Synthesis
1. **Socratic**: Guided questioning and intellectual humility
2. **Burkean**: Historical connections and storytelling
3. **Saganesque**: Cosmic perspective and wonder
4. **Feynmanesque**: Playful inquiry and joy in discovery

### NGSS 3D Integration
- **Practices**: What students do with phenomena
- **DCI**: Core disciplinary knowledge
- **Crosscutting Concepts**: Thinking lenses across domains
- **Metacognitive**: Reflection on learning process

## 📚 Documentation

### For Educators
- [Getting Started Guide](docs/getting-started.md)
- [Framework Selection Guide](docs/frameworks.md)
- [AI Prompt Usage](docs/ai-prompts.md)
- [Assessment Integration](docs/assessment.md)

### For Developers
- [API Documentation](docs/api.md)
- [Component Library](docs/components.md)
- [Color System](docs/colors.md)
- [Contributing Guide](docs/contributing.md)

## 🎯 Use Cases

### Primary Education
- **Elementary**: Observe-Wonder-Share framework
- **Middle School**: Question-Explore-Explain progression
- **High School**: Analyze-Design-Evaluate structure

### Discipline-Specific
- **Physics**: Fundamental interactions and forces
- **Biology**: Structure-function-evolution relationships
- **Chemistry**: Atomic-molecular-reaction progressions
- **Earth Science**: Systems-cycles-deep time

### Cross-Curricular
- **STEAM Integration**: Scientist-Engineer-Artist-Mathematician roles
- **Environmental Science**: Local-Regional-Global perspectives
- **History of Science**: Discovery-Context-Impact narratives

## 🤝 Integration

### Platform Compatibility
- **Google Classroom**: Direct export to three-document Research Brief system
- **Canvas/Moodle**: LTI integration support
- **Jekyll/GitHub Pages**: Static site generation for curriculum websites
- **Marp**: Automatic slide deck generation

### AI Platforms
- **OpenAI GPT**: Optimized prompt templates
- **Claude**: Anthropic-specific formatting
- **Google Bard**: Structured conversation starters
- **Custom Models**: Flexible prompt architecture

## 🔧 Configuration

### Environment Variables
```bash
# API Configuration
REACT_APP_API_URL=http://localhost:3001
REACT_APP_AI_PROVIDER=openai

# Feature Flags
REACT_APP_ENABLE_CUSTOM_FRAMEWORKS=true
REACT_APP_ENABLE_COLLABORATION=false
REACT_APP_ENABLE_ANALYTICS=true
```

### Customization
- **Color Themes**: Modify CSS custom properties
- **Framework Templates**: Add new three-part structures
- **Element Library**: Extend NGSS practice templates
- **Voice Profiles**: Customize narrative approaches

## 📈 Roadmap

### Phase 1: Foundation (Fall 2025)
- [x] Core three-step workflow
- [x] NGSS 3D color system
- [x] Basic framework templates
- [ ] AI prompt generation
- [ ] JSON export functionality

### Phase 2: Enhancement (Spring 2026)
- [ ] Collaboration features
- [ ] Advanced analytics
- [ ] Custom framework builder
- [ ] Assessment integration

### Phase 3: Ecosystem (Fall 2026)
- [ ] LTI platform integration
- [ ] Advanced AI model support
- [ ] Cross-institutional sharing
- [ ] Mobile application

## 🤝 Contributing

We welcome contributions from educators, developers, and curriculum designers!

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the NGSS 3D color system
- Maintain pedagogical authenticity
- Include comprehensive tests
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- **NGSS**: Next Generation Science Standards framework
- **Cosmos in the Classroom**: Educational platform foundation
- **Four-Voice Philosophy**: Socrates, Burke, Sagan, Feynman inspirations
- **Open Source Community**: React, TailwindCSS, and Node.js ecosystems

## 📞 Support

- **Documentation**: [Full docs](https://cosmosintheclassroom.org/socrates)
- **Issues**: [GitHub Issues](https://github.com/cosmosclassroom/cosmosintheclassroom/issues)
- **Discussions**: [GitHub Discussions](https://github.com/cosmosclassroom/cosmosintheclassroom/discussions)
- **Email**: support@cosmosintheclassroom.org

---

*"The unexamined lesson is not worth teaching."* - Socrates (probably)

Built with ❤️ for educators who believe in the power of inquiry-driven learning.
