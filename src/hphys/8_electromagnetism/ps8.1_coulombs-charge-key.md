---
layout: default
title: PS 8.1 Coulomb's Law and Charges
author: Jonathan Corbett
css: /assets/css/worksheets.css
---

# PS 8.1 | Coulomb's Law and Charge



## Problems

1. A balloon rubbed against denim gains a charge of -8.0 µC. What is the electric force between the balloon and the denim when the two are separated by a distance of 5.0 cm?
<details>
<summary>Solution</summary>

$F = k \frac{|q_1 q_2|}{r^2}$  

$F = (8.99 \times 10^9) \frac{|-8.0 \times 10^{-6} \cdot 8.0 \times 10^{-6}|}{(0.05)^2} = -230\,\text{N}$, attractive

</details>

2. Two identical conducting spheres are placed with their centers 0.30 m apart. One is given a charge of +12 × 10⁻⁹ C and the other is given a charge of -18 × 10⁻⁹ C.  
   a) Find the electric force exerted on one sphere by the other.  
   b) The spheres are connected by a conducting wire. After equilibrium (of charge) is reached, find the electric force between the two spheres.
<details>
<summary>Solution</summary>

a) $F = (8.99 \times 10^9) \frac{|12 \times 10^{-9} \cdot -18 \times 10^{-9}|}{(0.3)^2} = 2.2 \times 10^{-5}\,\text{N}$, attractive  

b) After equilibrium, $q_{final} = \frac{12 \times 10^{-9} + (-18 \times 10^{-9})}{2} = -3 \times 10^{-9}\,\text{C}$ on each.  

$F = (8.99 \times 10^9) \frac{|-3 \times 10^{-9} \cdot -3 \times 10^{-9}|}{(0.3)^2} = 9.0 \times 10^{-7}\,\text{N}$, repulsive

</details>

3. Two electrostatic point charges of +60.0 µC and +50.0 µC exert a repulsive force on each other of 175 N. What is the distance between the two charges?
<details>
<summary>Solution</summary>

$F = k \frac{|q_1 q_2|}{r^2} \implies r = \sqrt{\frac{k |q_1 q_2|}{F}}$  

$r = \sqrt{\frac{8.99 \times 10^9 \cdot 60 \times 10^{-6} \cdot 50 \times 10^{-6}}{175}} = 0.393\,\text{m}$

</details>

4. A charge of +2.00 × 10⁻⁹ C is placed at the origin, and another charge of +4.00 × 10⁻⁹ C is placed at x=1.5 m. Find the point between these two charges where a charge, q₃ of +3.00 × 10⁻⁹ C should be placed such that the net electric force on q₃ is zero.
<details>
<summary>Solution</summary>

Let $x$ be the distance from $q_1$ to $q_3$.  

Set $F_{13} = F_{23}$:  

$\frac{2}{x^2} = \frac{4}{(1.5-x)^2}$  

Solve for $x$: $x = 0.62\,\text{m}$

</details>

5. A charge q₁ of -5.00 × 10⁻⁹ C and a charge q₂ of -2.00 × 10⁻⁹ C are separated by a distance of 40.0 cm. Find the equilibrium position for a third charge of +15.0 × 10⁻⁹ C.
<details>
<summary>Solution</summary>

Let $x$ be the distance from $q_1$ to $q_3$.  

$\frac{5}{x^2} = \frac{2}{(0.4-x)^2}$  

$x = 0.245\,\text{m}$ from $q_1$ (24.5 cm from $q_1$, 15.5 cm from $q_2$)

</details>

6. An electron is released above the Earth's surface. A second electron directly below it exerts just enough electric force on the first electron to cancel the gravitational force on it. The mass of an electron is 9.109 × 10⁻³¹ kg. Calculate the distance at which the electrical force cancels the gravitational force acting upon it.
<details>
<summary>Solution</summary>

Set $F_{electric} = F_{gravity}$:  

$k \frac{e^2}{r^2} = mg$  

$r = \sqrt{\frac{k e^2}{mg}} = 5.08\,\text{m}$

</details>

7. A proton and an electron in a hydrogen atom are separated, on average, by a distance of 5.3 × 10⁻¹¹ m. What is the magnitude and direction of the electric field set up by a proton at the position of the electron?
<details>
<summary>Solution</summary>

$E = k \frac{e}{r^2} = (8.99 \times 10^9) \frac{1.6 \times 10^{-19}}{(5.3 \times 10^{-11})^2} = 5.1 \times 10^{11}\,\text{N/C}$, away from the proton

</details>

8. An electric field of 2.0 × 10⁴ N/C is directed along the positive x-axis.  
   a) What is the electric force on an electron in this field?  
   b) What is the electric force on a proton in this field?
<details>
<summary>Solution</summary>

a) $F = qE = (-1.6 \times 10^{-19})(2.0 \times 10^4) = -3.2 \times 10^{-15}\,\text{N}$ (along negative x-axis)  

b) $F = (1.6 \times 10^{-19})(2.0 \times 10^4) = 3.2 \times 10^{-15}\,\text{N}$ (along positive x-axis)

</details>

---
<!--
## JSON Problem Type Entries

```json
[
  {
    "type": "Coulomb's Law Force Calculations",
    "parent_formula": "F = k * |q_1 * q_2| / r^2",
    "variables": [
      "F (force)",
      "k (Coulomb constant)",
      "q_1 (charge 1)",
      "q_2 (charge 2)",
      "r (distance)"
    ],
    "concepts": [
      "Coulomb's Law",
      "electrostatic force",
      "attraction/repulsion",
      "inverse square law"
    ]
  },
  {
    "type": "Charge Redistribution/Conservation",
    "parent_formula": "q_{final} = (q_1 + q_2) / 2",
    "variables": [
      "q_{final} (final charge on each sphere)",
      "q_1 (initial charge 1)",
      "q_2 (initial charge 2)"
    ],
    "concepts": [
      "charge conservation",
      "conductors",
      "equilibrium"
    ]
  },
  {
    "type": "Solving for Distance Given Force",
    "parent_formula": "r = sqrt(k * |q_1 * q_2| / F)",
    "variables": [
      "r (distance)",
      "k (Coulomb constant)",
      "q_1 (charge 1)",
      "q_2 (charge 2)",
      "F (force)"
    ],
    "concepts": [
      "algebraic manipulation",
      "Coulomb's Law"
    ]
  },
  {
    "type": "Equilibrium Position for a Third Charge",
    "parent_formula": "F_{net} = 0",
    "variables": [
      "q_1 (charge 1)",
      "q_2 (charge 2)",
      "q_3 (third charge)",
      "r_1, r_2 (distances from q_3 to q_1 and q_2)"
    ],
    "concepts": [
      "superposition of forces",
      "equilibrium",
      "vector addition"
    ]
  },
  {
    "type": "Electric Field from Point Charge",
    "parent_formula": "E = k * |q| / r^2",
    "variables": [
      "E (electric field)",
      "k (Coulomb constant)",
      "q (charge)",
      "r (distance)"
    ],
    "concepts": [
      "electric field",
      "point charge"
    ]
  },
  {
    "type": "Force on a Charge in an Electric Field",
    "parent_formula": "F = q * E",
    "variables": [
      "F (force)",
      "q (charge)",
      "E (electric field)"
    ],
    "concepts": [
      "electric force",
      "field direction",
      "charge sign"
    ]
  },
  {
    "type": "Balancing Electric and Gravitational Forces",
    "parent_formula": "F_{electric} = F_{gravity}",
    "variables": [
      "F_{electric} (electric force)",
      "F_{gravity} (gravitational force)",
      "q (charge)",
      "E (electric field)",
      "m (mass)",
      "g (acceleration due to gravity)"
    ],
    "concepts": [
      "force balance",
      "gravity",
      "electric field"
    ]
  }
]
```
-->