flowchart TD
    EM[Electromagnetism] --> ES[Electrostatics]
    EM --> EC[Electrical Currents]
    EM --> EMR[EM Wave Radiation]
    
    ES --> Coulomb[Coulomb's Law]
    ES --> EField[Electric Fields]
    
    EC --> MagField[Magnetic Fields]
    EC --> Circuits[Circuit Theory]
    EC --> PWire[Particles/Waves in Wire]
    
    EMR --> Light[Light]
    EMR --> PSpace[Particles/Waves in Space]
    
    Light --> GO[Geometric Optics]
    Light --> WO[Wave Optics]
    
    PWire --> Conduction[Conduction Theory]
    PWire --> Resistance[Resistance]
    
    PSpace --> Photons[Photons]
    PSpace --> EMWaves[EM Waves]
    
    MagField --> LorentzForce[Lorentz Force]
    MagField --> Induction[Electromagnetic Induction]
    
    Induction --> Circuits
    
    EMWaves --> Light
    
    GO --> Reflection[Reflection]
    GO --> Refraction[Refraction]
    
    WO --> Interference[Interference]
    WO --> Diffraction[Diffraction]
    
    classDef mainConcept fill:#f96,stroke:#333,stroke-width:2px
    classDef subConcept fill:#9cf,stroke:#333
    classDef phenomenon fill:#fcf,stroke:#333
    
    class EM,ES,EC,EMR,Light,GO,PWire,PSpace mainConcept
    class Coulomb,EField,MagField,Circuits,WO,Conduction,Resistance,Photons,EMWaves subConcept
    class LorentzForce,Induction,Reflection,Refraction,Interference,Diffraction phenomenon