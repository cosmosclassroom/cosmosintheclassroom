---
marp: true
theme: default
math: katex
paginate: true
backgroundColor: #fff
---

# Honors Physics: Electrostatics

<style>
h1, h2, h3, h4 {
  color: #0366d6;
}
.formula {
  text-align: center;
  font-size: 1.3em;
  margin: 0.5em 0;
}
.definition {
  border-left: 4px solid #0366d6;
  padding-left: 1em;
  font-style: italic;
}
</style>

---

## Lecture Overview

1. **Electric Charge Fundamentals**
   - Properties of electric charge
   - Coulomb's Law
   - Conservation and quantization

2. **Electric Fields**
   - Field concept and calculations
   - Field lines and visualization

3. **Electric Potential**
   - Potential energy and voltage
   - Capacitance basics

---

# Part 1: Electric Charge Fundamentals

---

## Electric Charge: Basic Properties

- **Two types:** positive (+) and negative (-)
- **Like charges repel, unlike attract**
- **Quantized:** $e = 1.602 \times 10^{-19}$ C
- **Conserved:** Total charge in isolated system remains constant

<div class="definition">
Electric Charge: Fundamental property of matter that causes it to experience force in electromagnetic field
</div>

---

## Coulomb's Law

The force between two point charges:

<div class="formula">

$F = k\frac{|q_1 q_2|}{r^2}$

</div>

Where:
- $F$ is the electric force (newtons)
- $k$ is Coulomb's constant: $k = \frac{1}{4\pi\varepsilon_0} = 9 \times 10^9 \text{ N}\cdot\text{m}^2/\text{C}^2$
- $q_1, q_2$ are the charges (coulombs)
- $r$ is the distance between charges (meters)

---

## Coulomb's Law: Example

Two charges, $q_1 = +3.0 \times 10^{-6}$ C and $q_2 = -2.0 \times 10^{-6}$ C, are separated by 0.15 m.

Calculate the force between them.

<div class="formula">

$F = k\frac{|q_1 q_2|}{r^2} = (9 \times 10^9)\frac{(3 \times 10^{-6})(2 \times 10^{-6})}{(0.15)^2}$

$F = (9 \times 10^9)\frac{6 \times 10^{-12}}{0.0225} = 2.4 \times 10^{-1} \text{ N}$

</div>

The force is attractive because the charges have opposite signs.

---

## Superposition Principle

When multiple charges are present, the net force on any charge is the vector sum of forces from all other charges:

<div class="formula">

$\vec{F}_{\text{net}} = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 + ... = \sum_{i} \vec{F}_i$

</div>

This principle allows us to analyze complex charge arrangements.

---

# Part 2: Electric Fields

---

## Electric Field Concept

<div class="definition">
Electric Field: Region around charged object where electric force acts on other charges
</div>

- Electric field $\vec{E}$ at a point is the force per unit charge that would act on a positive test charge placed at that point

<div class="formula">

$\vec{E} = \frac{\vec{F}}{q}$

</div>

- Vector quantity (has magnitude and direction)
- Units: N/C (newtons per coulomb) or V/m (volts per meter)

---

## Electric Field of a Point Charge

For a single point charge:

<div class="formula">

$\vec{E} = k\frac{|q|}{r^2}\hat{r}$

</div>

Where:
- $\vec{E}$ is the electric field vector
- $q$ is the charge creating the field
- $r$ is the distance from the charge
- $\hat{r}$ is the unit vector pointing away from the charge

The field points away from positive charges and toward negative charges.

---

## Electric Field Lines

- Visual representation of electric field
- Direction: Away from positive, toward negative charges
- Density: Proportional to field strength

![bg right:40% 90%](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/VFPt_charges_plus_minus_thumb.svg/800px-VFPt_charges_plus_minus_thumb.svg.png)

---

# Part 3: Electric Potential

---

## Electric Potential Energy

Work done to move a charge in an electric field:

<div class="formula">

$U = qV$

</div>

<div class="definition">
Electric Potential: Electric potential energy per unit charge
</div>

<div class="formula">

$V = \frac{U}{q}$

</div>

For a point charge:

<div class="formula">

$V = k\frac{q}{r}$

</div>

---

## Potential Difference (Voltage)

- Difference in potential between two points
- Work per unit charge to move between points

<div class="formula">

$\Delta V = -\int \vec{E} \cdot d\vec{l}$

</div>

- Units: Volts (V) = Joules/Coulomb (J/C)
- Electric field related to potential: $\vec{E} = -\nabla V$
- Charges move from high to low potential (if free to move)

---

## Equipotential Surfaces

<div class="definition">
Equipotential Surface: Surface where electric potential is constant
</div>

- No work needed to move charge along equipotential surface
- Electric field lines are perpendicular to equipotential surfaces

![bg right:40% 80%](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Equipotential_surfaces.svg/400px-Equipotential_surfaces.svg.png)

---

## Capacitance

<div class="definition">
Capacitance: Ability of system to store electric charge
</div>

<div class="formula">

$C = \frac{Q}{V}$

</div>

For a parallel plate capacitor:

<div class="formula">

$C = \frac{\varepsilon_0 A}{d}$

</div>

Energy stored in capacitor:

<div class="formula">

$U = \frac{1}{2}CV^2 = \frac{1}{2}QV$

</div>

---

## Summary: Key Concepts & Equations

| Concept | Key Equation | Definition |
|---------|-------------|------------|
| Coulomb's Law | $F = k\frac{q_1 q_2}{r^2}$ | Force between charges |
| Electric Field | $E = \frac{F}{q}$ | Force per unit charge |
| Electric Potential | $V = \frac{U}{q}$ | Potential energy per unit charge |
| Capacitance | $C = \frac{Q}{V}$ | Charge storage ability |

---

## Practice Problems

1. Two charges, $q_1 = +5 \mu\text{C}$ and $q_2 = -3 \mu\text{C}$, are 20 cm apart. Calculate:
   - The force between them
   - The electric field at a point midway between them

2. A parallel plate capacitor has plates of area 0.01 m² separated by 0.5 mm. Calculate:
   - The capacitance (ε₀ = 8.85 × 10⁻¹² F/m)
   - The energy stored when charged to 100 V

---

## Thank You!

**Next Lecture: DC Circuits**
- Current and resistance
- Circuit analysis with Ohm's Law
- Series and parallel circuits
- Kirchhoff's rules
