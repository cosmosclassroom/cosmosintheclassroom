educational-website/
│
├── README.md                     # Project overview and setup instructions
├── .gitignore                    # Files/folders to exclude from git tracking
├── _config.yml                   # Jekyll configuration (if using Jekyll)
│
├── src/                          # Source content (Markdown files)
│   ├── units/                    # Organized by curriculum units
│   │   ├── unit-1/               # First unit
│   │   │   ├── index.md          # Unit overview/landing page
│   │   │   ├── lesson-1.md       # Individual lessons
│   │   │   ├── lesson-2.md
│   │   │   └── exercises/        # Practice materials
│   │   │       ├── exercise-1.md
│   │   │       └── solutions/
│   │   │           └── solution-1.md
│   │   │
│   │   ├── unit-2/               # Second unit (same structure)
│   │   └── ...                   # Additional units
│   │
│   ├── resources/                # Supplementary materials
│   │   ├── glossary.md           # Terminology definitions
│   │   └── references.md         # Citation sources
│   │
│   └── templates/                # Markdown templates for consistency
│       ├── lesson-template.md
│       └── exercise-template.md
│
├── assets/                       # Static assets
│   ├── images/                   # Images organized by unit
│   │   ├── unit-1/
│   │   │   ├── diagram-1.svg
│   │   │   └── ...
│   │   └── unit-2/
│   │       └── ...
│   │
│   ├── diagrams/                 # Source files for diagrams (if editable)
│   │   ├── unit-1/
│   │   │   ├── diagram-1.drawio
│   │   │   └── ...
│   │   └── ...
│   │
│   ├── css/                      # Stylesheets
│   │   ├── main.css
│   │   └── print.css             # Print-friendly styles
│   │
│   └── js/                       # JavaScript files
│       └── main.js
│
├── scripts/                      # Automation scripts
│   ├── build.sh                  # Script to convert MD to HTML
│   └── deploy.sh                 # Script to deploy to GitHub Pages
│
└── site/                         # Generated HTML output (can be .gitignore'd)
    ├── index.html                # Main landing page
    ├── units/                    # Generated unit pages
    │   ├── unit-1/
    │   │   ├── index.html
    │   │   ├── lesson-1.html
    │   │   └── ...
    │   └── ...
    └── ...
