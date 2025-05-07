---
layout: default
title: PS 8.2 Electric Field and Charge
author: Jonathan Corbett
---

# PS 8.2 | Electric Field and Charge

## Problems

<!-- parent formula: E = k * |q| / r^2 | concept: electric field from point charge -->
1. A point charge of +3.0 μC is placed at the origin. What is the magnitude and direction of the electric field 25 cm away from the charge along the x-axis?

<!-- parent formula: E_{net} = Σ E_i | concept: superposition of electric fields -->
2. Two charges, +2.0 μC and -2.0 μC, are placed 40 cm apart on the x-axis. Calculate the net electric field at a point exactly midway between them.

<!-- parent formula: E_{net} = Σ E_i (vector addition) | concept: superposition, vector addition, symmetry -->
3. Three point charges are arranged at the corners of an equilateral triangle (side 0.50 m): +4.0 μC at A, +4.0 μC at B, and -4.0 μC at C. Find the magnitude and direction of the net electric field at the center of the triangle.

<!-- parent formula: V = k * q / r; PE = q * V | concept: electric potential and potential energy -->
4. A charge of -6.0 μC is located 30 cm from a point P. What is the electric potential at point P due to this charge? How much work is required to bring a +1.0 μC charge from infinity to point P?

<!-- parent formula: PE = 1/2 * C * V^2 | concept: energy stored in a capacitor -->
5. A parallel plate capacitor has a capacitance of 8.0 μF and is charged to a potential difference of 15 V. Calculate the energy stored in the capacitor.

<!-- parent formula: qualitative (E = σ/ε₀, V = Q/C, U = 1/2 Q^2/C) | concept: capacitor, field, energy, potential -->
6. The plates of a parallel plate capacitor are moved farther apart while keeping the charge constant. Explain qualitatively what happens to the electric field, potential difference, and stored energy.

<!-- parent formula: qualitative | concept: field lines, equipotential surfaces, dipole -->
7. Sketch the electric field lines and equipotential surfaces for a system of two equal but opposite charges separated by a small distance (an electric dipole). Describe the pattern and explain the relationship between field lines and equipotentials.

<!-- parent formula: qualitative (Gauss's Law, E = 0 inside conductor) | concept: field and force near/inside conductor -->
8. A small test charge is placed near a large, positively charged conducting sphere. Describe and explain the direction of the electric field and the force experienced by the test charge both outside and inside the sphere.

## Answers

1. 4.3 × 10^5 N/C, directed away from the charge along the x-axis

2. 0 N/C (fields cancel at the midpoint)

3. 8.0 × 10^5 N/C, directed from the center toward the negative charge

4. -1.8 × 10^5 V; -0.18 J

5. 9.0 × 10^-4 J

6. Electric field remains constant, potential difference increases, stored energy increases.

7. Field lines emerge from the positive charge and enter the negative charge; equipotentials are perpendicular to field lines and crowd near the charges.

8. Outside: field points radially outward, force repels positive test charge; inside: field is zero, no force on the test charge.

---

## JSON Problem Type Entries

```json
[
  {
    "type": "Electric Field Strength at a Point",
    "parent_formula": "E = k * |q| / r^2",
    "variables": ["E (electric field)", "k (Coulomb constant)", "q (charge)", "r (distance)"],
    "concepts": ["electric field", "point charge", "inverse square law"]
  },
  {
    "type": "Superposition of Electric Fields",
    "parent_formula": "E_{net} = \\sum_i E_i",
    "variables": ["E_{net} (net electric field)", "E_i (individual fields)", "vector addition"],
    "concepts": ["superposition", "vector addition", "multiple charges"]
  },
  {
    "type": "Electric Potential and Potential Energy",
    "parent_formula": [
      "V = k * q / r",
      "PE_{electric} = q * V"
    ],
    "variables": [
      "V (electric potential)",
      "PE_{electric} (potential energy)",
      "k (Coulomb constant)",
      "q (charge)",
      "r (distance)"
    ],
    "concepts": ["electric potential", "potential energy", "work", "equipotential"]
  },
  {
    "type": "Energy Stored in a Capacitor or Electric Field",
    "parent_formula": [
      "PE_{electric} = 1/2 * C * V^2",
      "PE_{electric} = 1/2 * Q * V"
    ],
    "variables": [
      "PE_{electric} (energy stored)",
      "C (capacitance)",
      "V (voltage)",
      "Q (charge)"
    ],
    "concepts": ["capacitor", "energy storage", "electric field energy"]
  },
  {
    "type": "Field Line and Force Direction Sketches",
    "parent_formula": null,
    "variables": [],
    "concepts": [
      "field lines",
      "force direction",
      "equipotential surfaces",
      "qualitative analysis"
    ]
  },
  {
    "type": "Application/Conceptual Problems",
    "parent_formula": null,
    "variables": [],
    "concepts": [
      "real-world application",
      "conductors",
      "charged spheres",
      "field and potential relationships"
    ]
  }
]
```


