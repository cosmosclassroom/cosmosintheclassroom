# Research Brief Integration Example

This document demonstrates how to use the new research brief system with Socrates.

## Adding Research Briefs via Python Script

### Example 1: Phenomena Brief
```bash
python scripts/socrates-brief-manager.py create \
  --title "The Physics Behind Athletic Performance: Why Do Projectiles Follow Parabolic Paths?" \
  --type phenomena \
  --level standard \
  --summary "Explore how athletes instinctively understand physics principles when throwing, jumping, and moving through space." \
  --questions "Why do all projectiles follow the same basic curved path?" "How do athletes optimize their performance using physics principles?" \
  --historical "The study of projectile motion dates back to Galileo Galilei's groundbreaking work in the early 17th century..." \
  --mathematical "Projectile motion combines two independent motions: constant horizontal velocity and uniformly accelerated vertical motion under gravity..." \
  --units 02_kinematics 03_dynamics \
  --concepts projectile_motion vector_analysis parabolic_trajectory \
  --applications "Basketball shooting technique" "Baseball trajectory analysis" \
  --tags sports_physics kinematics mathematical_modeling
```

### Example 2: Historical Brief
```bash
python scripts/socrates-brief-manager.py create \
  --title "Galileo's Revolutionary Experiments: How Rolling Balls Changed Physics Forever" \
  --type historical \
  --level honors \
  --summary "Discover how Galileo's simple experiments with inclined planes overturned centuries of Aristotelian physics." \
  --questions "How did Galileo use experiments to challenge accepted wisdom?" "Why were his methods so revolutionary?" \
  --historical "In the early 1600s, Galileo Galilei fundamentally changed how we study motion by introducing controlled experimentation..." \
  --mathematical "Galileo discovered that distance traveled increases as the square of time for uniformly accelerated motion: d = ½at²" \
  --units 01_scientific_method 02_kinematics \
  --concepts experimental_method uniformly_accelerated_motion scientific_revolution \
  --applications "Modern experimental design" "Quality control in manufacturing" \
  --tags galileo experimental_method scientific_revolution
```

### Example 3: Connections Brief
```bash
python scripts/socrates-brief-manager.py create \
  --title "From Pendulums to Earthquakes: How Simple Harmonic Motion Connects Across Scales" \
  --type connections \
  --level advanced \
  --summary "Explore how the same mathematical principles govern playground swings, atomic vibrations, and seismic waves." \
  --questions "What makes different systems oscillate in similar ways?" "How do scale and frequency connect across physics?" \
  --historical "The mathematical description of oscillatory motion emerged from studying pendulums and springs..." \
  --mathematical "Simple harmonic motion follows the equation x(t) = A cos(ωt + φ), where A is amplitude, ω is angular frequency..." \
  --units 07_oscillations 08_waves 09_atoms \
  --concepts simple_harmonic_motion frequency resonance scale_invariance \
  --applications "Earthquake engineering" "Atomic clocks" "Musical instruments" \
  --tags oscillations waves scale_invariance cross_cutting_concepts
```

## Viewing and Managing Briefs

### List all briefs
```bash
python scripts/socrates-brief-manager.py list
```

### List briefs by type
```bash
python scripts/socrates-brief-manager.py list --type phenomena
```

### List briefs by difficulty level
```bash
python scripts/socrates-brief-manager.py list --level honors
```

### Delete a brief
```bash
python scripts/socrates-brief-manager.py delete phenomena_001
```

### Rebuild the index (if needed)
```bash
python scripts/socrates-brief-manager.py rebuild
```

## Portal Integration

Once briefs are created, they automatically appear in the portal:

1. **Main Portal**: Research briefs section with filtering and search
2. **Unit Navigation**: Related briefs appear as recommendations
3. **Interactive Display**: Socratic questioning and connections
4. **Mobile Responsive**: Works across all devices

## Research Brief Structure

Each brief includes:


## Socratic Questioning Levels

1. **Clarification**: "What do you mean by...?"
2. **Evidence**: "What evidence supports this?"
3. **Perspective**: "How might someone else see this?"
4. **Meta**: "Why is this question important?"

## Integration Points


## Future Enhancements

