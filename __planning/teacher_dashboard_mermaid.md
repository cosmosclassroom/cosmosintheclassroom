graph TD
    %% Content Creation
    subgraph content["Content Creation"]
        A["Markdown Files (.md)"] -->|"YAML Front Matter"| B["Curriculum Content"]
        C["Images (.png, .jpg, .svg)"] --> B
        D["Code Snippets (.js, .py, .rb)"] --> B
    end
    
    %% Jekyll Processing
    subgraph jekyll["Jekyll Processing"]
        B --> E["Jekyll Engine (Ruby)"]
        E --> F["Liquid Templates (.html.liquid)"]
        E --> G["_config.yml Configuration"]
        E --> H["Plugins (.rb)"]
        I["SCSS/SASS (.scss)"] --> E
        J["JavaScript (.js)"] --> E
    end
    
    %% GitHub Actions
    subgraph github["GitHub Actions"]
        K["GitHub Workflow (.yml)"] --> L["Build Process"]
        L --> M["GitHub Pages Deployment"]
    end
    
    %% Static Site Output
    subgraph output["Static Site Output"]
        M --> N["HTML Files (.html)"]
        M --> O["CSS Files (.css)"]
        M --> P["JavaScript Files (.js)"]
        M --> Q["Asset Files"]
    end
    
    %% Feed Generation
    subgraph feeds["Feed Generation"]
        E --> R["RSS Feed (.xml)"]
        E --> S["JSON Feed (.json)"]
        E --> T["Atom Feed (.xml)"]
    end
    
    %% Client Consumption
    subgraph clients["Client Consumption"]
        R --> U["Feed Readers"]
        S --> V["Web Applications"]
        T --> U
        N --> W["Web Browsers"]
    end
    
    %% Node styling
    classDef markdown fill:#f9f,stroke:#333
    classDef yaml fill:#ff9,stroke:#333
    classDef ruby fill:#f99,stroke:#333
    classDef html fill:#9f9,stroke:#333
    classDef css fill:#99f,stroke:#333
    classDef js fill:#fc9,stroke:#333
    classDef xml fill:#9ff,stroke:#333
    classDef json fill:#c9f,stroke:#333
    
    %% Apply styles
    class A,B markdown
    class G,K yaml
    class E,H ruby
    class F,N html
    class I,O css
    class J,P js
    class R,T xml
    class S json