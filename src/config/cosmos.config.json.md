flowchart TD
    A[cosmos.config.json] --> B[Site Metadata]
    A --> C[Physics Courses & Structure]
    A --> D[Portal Navigation & Courses]
    A --> E[Tools (Schedule Chunker, Consequence Engine)]
    A --> F[Build Configs (CSS, Slides, Jekyll)]
    A --> G[Development Server & Watch]
    A --> H[Privacy Settings]

    B --> I[All Systems<br/>(Branding, Metadata)]
    C --> J[Portal]
    C --> K[Chunker]
    C --> L[Socrates]
    C --> M[Library]
    D --> J
    D --> K
    D --> L
    D --> M
    E --> J
    E --> L
    F --> N[Build Scripts & CI/CD]
    G --> O[Local Dev Server]
    H --> P[All Systems<br/>(Analytics, Progress Tracking)]

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#e0eaff
    style C fill:#e0ffe0
    style D fill:#fffbe0
    style E fill:#ffe0e0
    style F fill:#e0e0ff
    style G fill:#e0fff7
    style H fill:#f7e0ff