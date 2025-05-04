---
marp: true
theme: default
paginate: true
header: "Electric Charges and Coulomb's Law"
footer: "High School Honors Physics | Unit 8"
---

# Electric Charges and Coulomb's Law

<style>
h1 {
  color: #0366d6;
}
h2 {
  color: #28a745;
}
strong {
  color: #d73a49;
}

.important-info {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 10px 0;
}
</style>

---

## Introduction to Electrostatics

- **Electric charge**: a fundamental property of matter
- Historical understanding:
  - Ancient Greeks noticed amber attracting objects when rubbed
  - "Electron" comes from Greek word for amber (ήλεκτρον)
  - Benjamin Franklin proposed positive and negative charges (1700s)

<div class="important-info">

- Two types of charge: **positive** (+) and **negative** (-)
- Charge is **conserved**: cannot be created or destroyed, only transferred
- SI unit: **coulomb** (C) - a very large amount of charge!

</div>

---

## Properties of Electric Charge

<div class="important-info">

- **Quantization**: Charge comes in discrete "packets"
  - Elementary charge: $e = 1.602 \times 10^{-19}$ C
  - All charges are multiples of $e$: $q = ne$ where $n$ is an integer

- **Conservation**: Total charge in an isolated system remains constant

- **Attraction & Repulsion**: 
  - Like charges repel: (+)(+) or (-)(-)
  - Unlike charges attract: (+)(-)

</div>

- **Charging methods**: friction, contact, induction

---

## Charging Methods Demonstrated

![width:800px](img/8_em-wave-particle/charging_methods.jpg)

- **Friction**: Transfer of electrons by rubbing materials (balloon on hair)
- **Contact**: Charge flows when objects touch (charging a metal sphere)
- **Induction**: Separation of charge without contact (charged rod near metal)

---

## Conductors vs. Insulators

| Property | Conductors | Insulators |
|----------|------------|------------|
| Electron mobility | High | Low |
| Examples | Metals, graphite | Plastic, rubber, glass |
| Charge distribution | Spreads over surface | Stays localized |
| Electron configuration | Many free electrons | Tightly bound electrons |

![width:500px](img/8_em-wave-particle/conductor_insulator.png)

---

## Conductors vs. Insulators: Applications

![width:700px](img/8_em-wave-particle/conductor_applications.jpg)

- **Conductors**:
  - Wiring in electronics
  - Lightning rods
  - Electrostatic shielding (Faraday cages)

- **Insulators**:
  - Rubber gloves for electrical work
  - Plastic coatings on wires
  - Electrostatic charge storage

---

## Coulomb's Law

<div class="important-info">

- Describes force between two charged particles
- Mathematical form: $F = k \frac{q_1 q_2}{r^2}$

- Where:
  - $F$ = electric force (newtons, N)
  - $k$ = Coulomb constant = $8.99 \times 10^9$ N·m²/C²
  - $q_1, q_2$ = charges (coulombs, C)
  - $r$ = distance between charges (meters, m)

- **Vector nature**: Force acts along line joining charges
- Similar to Newton's gravitational law: $F = G \frac{m_1 m_2}{r^2}$

</div>

---

## Coulomb's Law: Force Direction

![width:700px](img/8_em-wave-particle/coulomb_force_direction.png)

<div class="important-info">

- Force direction depends on charge signs:
  - Like charges: Force is repulsive (away from each other)
  - Unlike charges: Force is attractive (toward each other)

- **Remember**: The force acts along the line joining the charges
- Each charge experiences equal and opposite force (Newton's 3rd Law)

</div>

---

## Working with Coulomb's Law: Example

**Problem**: Two charges, $q_1 = +3.0 \times 10^{-6}$ C and $q_2 = -2.0 \times 10^{-6}$ C, are 0.15 m apart. Find the electric force.

<div class="important-info">

**Solution**:
1. Identify what you know:
   - $q_1 = +3.0 \times 10^{-6}$ C
   - $q_2 = -2.0 \times 10^{-6}$ C
   - $r = 0.15$ m
   - $k = 8.99 \times 10^9$ N·m²/C²

2. Apply Coulomb's Law:
   $F = k \frac{q_1 q_2}{r^2} = 8.99 \times 10^9 \cdot \frac{(3.0 \times 10^{-6})(-2.0 \times 10^{-6})}{(0.15)^2}$

3. Calculate: $F = -2.4 \times 10^{-1}$ N (negative means attractive)

</div>

---

## Multiple Charge Interactions

<div class="important-info">

- When multiple charges are present, find the **net force** using:
  1. Calculate force from each charge separately
  2. Remember each force is a **vector**
  3. Add all forces **vectorially** (using components)

- This is called the **Principle of Superposition**
- Net force: $\vec{F}_{net} = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 + ...$

</div>

---

## Principle of Superposition: Example

![width:500px](img/8_em-wave-particle/superposition_example.png)

<div class="important-info">

**Problem**: Three charges form a right triangle. Find the net force on $q_3$.

**Solution**:
1. Find force from $q_1$ on $q_3$: $\vec{F}_{13}$
2. Find force from $q_2$ on $q_3$: $\vec{F}_{23}$
3. Add vectorially: $\vec{F}_{net} = \vec{F}_{13} + \vec{F}_{23}$
   - Use components: $F_x = F_{13x} + F_{23x}$ and $F_y = F_{13y} + F_{23y}$
   - Find magnitude: $F_{net} = \sqrt{F_x^2 + F_y^2}$
   - Find direction: $\theta = \tan^{-1}(\frac{F_y}{F_x})$

</div>

---

## Equilibrium Positions

<div class="important-info">

- **Equilibrium**: Position where net force on a charge is zero
- For two charges:
  - Like charges: No equilibrium position exists
  - Unlike charges: Equilibrium exists only at the position of one charge

- For three or more charges:
  - Equilibrium positions can exist at specific locations
  - Finding them requires solving: $\vec{F}_{net} = \vec{0}$

</div>

---

## Electric Fields

<div class="important-info">

- **Electric field**: A region where electric charges experience force
- Defined as force per unit charge: $\vec{E} = \frac{\vec{F}}{q}$
- Field from a point charge: $\vec{E} = k \frac{Q}{r^2} \hat{r}$
  - $Q$ = source charge
  - $\hat{r}$ = unit vector pointing away from the charge
  - $r$ = distance from charge

- SI unit: newtons per coulomb (N/C) or volts per meter (V/m)
- Electric fields exist even in "empty" space!

</div>

---

## Electric Field Visualization

![width:700px](img/8_em-wave-particle/field_lines.png)

<div class="important-info">

- Field lines show direction a positive test charge would move
- Lines point away from positive charges
- Lines point toward negative charges
- Line density indicates field strength
- Lines never cross

</div>

---

## Electric Field Properties

<div class="important-info">

- Field strength decreases with squared distance: $E \propto \frac{1}{r^2}$
- Field direction:
  - Away from positive charges
  - Toward negative charges

- Superposition applies:
  - $\vec{E}_{net} = \vec{E}_1 + \vec{E}_2 + \vec{E}_3 + ...$
  - Calculate each field separately, then add vectorially

</div>

---

## Electric Fields from Charge Distributions

![width:500px](img/8_em-wave-particle/charge_distributions.jpg)

<div class="important-info">

| Configuration | Electric Field |
|---------------|----------------|
| Point charge | $E = k\frac{Q}{r^2}$ |
| Infinite line of charge | $E = \frac{2k\lambda}{r}$ |
| Infinite plane | $E = \frac{\sigma}{2\varepsilon_0}$ (constant) |
| Inside conducting sphere | E = 0 |

</div>

---

## Forces on Charges in Electric Fields

<div class="important-info">

- Force on a charge in an electric field: $\vec{F} = q\vec{E}$
- Direction depends on charge sign:
  - Positive charge: Force in same direction as E-field
  - Negative charge: Force in opposite direction to E-field

</div>

- Applications:
  - Cathode ray tubes (old TVs)
  - Mass spectrometers
  - Inkjet printers
  - Electrostatic precipitators

---

## Motion in Electric Fields: Example

<div class="important-info">

**Problem**: An electron enters a uniform electric field of 2.0 × 10⁴ N/C pointing right. What acceleration does it experience?

**Solution**:
1. Find the force: $F = qE = (-1.6 × 10^{-19} \text{ C})(2.0 × 10^4 \text{ N/C})$
   $F = -3.2 × 10^{-15} \text{ N}$ (negative means left)

2. Apply Newton's 2nd Law: $a = \frac{F}{m} = \frac{-3.2 × 10^{-15} \text{ N}}{9.11 × 10^{-31} \text{ kg}}$
   $a = -3.5 × 10^{15} \text{ m/s}^2$ (left)

The electron accelerates rapidly to the left (opposite to E-field).

</div>

---

## Comparing Electric and Gravitational Forces

![width:600px](img/8_em-wave-particle/force_comparison.png)

<div class="important-info">

- Both follow inverse-square law
- Electric force is **much stronger**!

Example: Electron and proton in hydrogen atom
- Electric: $F_e = k\frac{e^2}{r^2} = 8.2 × 10^{-8} \text{ N}$
- Gravitational: $F_g = G\frac{m_em_p}{r^2} = 3.6 × 10^{-47} \text{ N}$
- Ratio: $\frac{F_e}{F_g} ≈ 2.3 × 10^{39}$ (39 orders of magnitude!)

</div>

---

## Charge Equilibrium

<div class="important-info">

- **Static equilibrium**: Net force on charge is zero
- **Stable equilibrium**: Returns to position when disturbed
- **Unstable equilibrium**: Moves away when disturbed

- Finding equilibrium positions:
  1. Set up Coulomb's Law equations for all forces
  2. Set net force equal to zero
  3. Solve for position coordinates

</div>

---

## Charge Equilibrium: Example

![width:500px](img/8_em-wave-particle/equilibrium_example.png)

<div class="important-info">

**Problem**: Two +1.0 μC charges are fixed 10 cm apart. Where should a -1.0 μC charge be placed to be in equilibrium?

**Solution**:
- By symmetry: The negative charge must be somewhere on the line connecting the positive charges
- Let's place positive charges at x = 0 and x = 10 cm
- For equilibrium, forces from both positive charges must be equal and opposite
- This occurs at x = 5 cm (midpoint)
- But this is an **unstable equilibrium**!

</div>

---
