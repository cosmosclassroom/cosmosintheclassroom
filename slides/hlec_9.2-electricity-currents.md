---
layout: default
marp: true
title: 9 Electrical Circuits
author: Jonathan Corbett
date: 17 May 2025
---

<!-- /* import slides.css */ -->
@import 'default';

section {
    font-family: "Georgia", serif;
    padding: 2em;
}

<!-- /* float-like image stylng /* -->
.flex-row {
    display: flex;
    gap: 1em;
    algin-items: center;
}

.flex-row img {
    max-width: 30%;
    height: auto;
    padding: 1em;
}




# 11 Electrodynamics

## How can charges move?

---

# Contents

- Electric Potential
- Electric Currents
- Ohm’s Law
- Electric Power

---

# The “Life Force”
<!-- style: inverted -->

<div class='flex-row'>

**1791:** Static electricity causes a frog leg to twitch.
    </div>
  <div class='flex-row'>

<img src="Galvani,_De_viribus_electricitatis_in_motu_musculari..._Wellcome_L0029687-1.jpg" alt="Galvani's charge in frog muscles" />

  </div>
<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_1.png" alt="" />
<img src="assets/images/9_electricity/galvani_frog_experiment.png" alt="Galvani frog experiment" />
<!-- Caption: "Galvani's experiment with frog legs and electricity." -->

- Twitching also induced by metals.
- Metals thought to conduct the animal's "life force".

**Luigi Galvani (1737–1798)**

---

# Skeptical Interrogation

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_2.png" alt="" />
<img src="assets/images/9_electricity/voltaic_pile_diagram.png" alt="Voltaic pile diagram" />
<!-- Caption: "Volta's voltaic pile: the first battery." -->

- Galvani’s "life force" claim questioned.
- Experiments showed metals were the source of electricity, conducted by frog tissue.
- First battery: zinc and silver disks.
- Debunked idea that electricity is only in living things.

**Alessandro Volta (1745–1827)**

---
<img src="assets/images/9_electricity/volta.png" alt="Portrait of Volta" />
<img src="assets/images/9_electricity/vola-pile.jpg" alt="Volta pile photo" />

---

# Volta Pile

<img src="assets/images/9_electricity/voltaic_pile_photo.png" alt="Voltaic pile photo" />
<!-- Caption: "A real voltaic pile, the first battery." -->

---

# Electric Batteries

- Batteries convert chemical energy into electrical energy.
- Provide a constant voltage (EMF) to a circuit.
- **Parts:** Anode (−), Cathode (+), Electrolyte.
- **Diagram:**  
  <img src="assets/images/9_electricity/battery_diagram.png" alt="Battery diagram" />
- **Key Point:** Batteries "push" electrons through the circuit.

---


# Electric Current

- Electric current (**I**) is the flow of electric charge.
- Measured in **amperes (A)**.
- $I = \frac{Q}{t}$ (charge per time)
- **Conventional current:** Direction positive charges would flow (from + to −).
- **Analogy:** Like water flowing through a pipe.

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_8.png" alt="" />
<img src="assets/images/9_electricity/current_in_wire.png" alt="Current in a wire" />
<img src="assets/images/8_electromagnetism/8_electromagnetism_2_magnet_and_wire.png" alt="Current in a wire can create a magnetic field." />
<!-- Caption: "Current in a wire can create a magnetic field." -->

---

# Electric Current Analogy

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_10.png" alt="" />
<img src="assets/images/9_electricity/water_pipe_analogy.png" alt="Water pipe analogy for current" />

- Current is measured in **amperes (A)**
- Charge flow in a conductor is like water in a pipe.

---



<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_11.png" alt="" />
<img src="assets/images/9_electricity/electron_flow_vs_conventional.png" alt="Electron flow vs conventional current" />

---

# Ohm’s Law

- Relationship between voltage, current, and resistance.
- $V = I \cdot R$
- **Example:**  
  If $V = 9$ V and $R = 3~\Omega$, then $I = 3$ A.
- **Diagram:**  
  <img src="assets/images/9_electricity/ohms_law_circuit.png" alt="Ohm's Law circuit" />
<img src="assets/images/8_electromagnetism/8_electromagnetism_1_field_lines.png" alt="Electric field lines in a circuit." />
<img src="assets/images/9_electricity/ohms_law_triangle.png" alt="Ohm's law triangle" />
<!-- Caption: "Electric field lines in a circuit." -->

---

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_12.png" alt="" />
<img src="assets/images/9_electricity/ohm_experiment.png" alt="Ohm's experiment" />

- German physicist Georg Simon Ohm (1789–1854)
- Showed relationship between voltage, current, and resistance.
- Experimented with metal circuits (pioneered by Volta).

---

# Resistivity

- Resistance depends on material, length, and area.
- $R = \rho \frac{L}{A}$
  - $\rho$ = resistivity (Ω·m)
  - $L$ = length (m)
  - $A$ = cross-sectional area (m²)
- **Table:**  
  | Material | Resistivity (Ω·m) |
  |----------|------------------|
  | Copper   | $1.7 \times 10^{-8}$ |
  | Glass    | $10^{10}$        |

<img src="assets/images/9_electricity/resistivity_wire.png" alt="Resistivity in a wire" />

---

# Resistance and Resistors

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_13.png" alt="" />
<img src="assets/images/9_electricity/resistor_symbol.png" alt="Resistor symbol" />

- **Resistance**: How much a material opposes current flow.
- **Resistors**: Components designed to introduce resistance.
- Visualize resistance as a narrow pipe or thumb over a hose.

---

# Measuring Resistance

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_14.png" alt="" />
<img src="assets/images/9_electricity/multimeter_resistance.png" alt="Measuring resistance with a multimeter" />

- **Resistance (R)** is measured in **ohms (Ω)**
- $R = \frac{V}{I}$
- $1~\Omega = \frac{1~V}{1~A}$
- $resistance = \frac{voltage~drop}{current}$

One ohm: 1 amp of current with a voltage drop of 1 V.

---

# Ohm’s Law in Circuits

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_16.png" alt="" />
<img src="assets/images/9_electricity/simple_circuit_diagram.png" alt="Simple circuit diagram" />

- When current flows through a resistor, a voltage drop is experienced.
- The voltage drop can be calculated using **Ohm's Law**:

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_17.png" alt="" />
<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_18.png" alt="" />

---

# EMF and Terminal Voltage

- **EMF (Electromotive Force):** The ideal voltage a battery provides.
- **Terminal Voltage:** Actual voltage across battery terminals (can be less than EMF due to internal resistance).
- $V_{terminal} = \text{EMF} - I r$
  - $r$ = internal resistance
- **Diagram:**  
  <img src="https://raw.githubusercontent.com/cosmosclassroom/cosmosintheclassroom/main/assets/images/9_electricity/emf_internal_resistance.png" alt="EMF and internal resistance" />
<img src="https://raw.githubusercontent.com/cosmosclassroom/cosmosintheclassroom/main/assets/images/9_electricity/battery_internal_resistance.png" alt="Battery with internal resistance" />

---

# Resistors in Series

- Total resistance: $R_{eq} = R_1 + R_2 + \dots$
- Same current flows through each resistor.
- Voltage divides among resistors.
- **Diagram:**  
  <img src="https://raw.githubusercontent.com/cosmosclassroom/cosmosintheclassroom/main/assets/images/9_electricity/series_resistors.png" alt="Series resistors" />
<img src="https://raw.githubusercontent.com/cosmosclassroom/cosmosintheclassroom/main/assets/images/9_electricity/series_circuit_example.png" alt="Series circuit example" />

---

# Resistors in Parallel

- Total resistance: $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$
- Same voltage across each resistor.
- Current divides among branches.
- **Diagram:**  
  <img src="https://raw.githubusercontent.com/cosmosclassroom/cosmosintheclassroom/main/assets/images/9_electricity/parallel_resistors.png" alt="Parallel resistors" />
<img src="https://raw.githubusercontent.com/cosmosclassroom/cosmosintheclassroom/main/assets/images/9_electricity/parallel_circuit_example.png" alt="Parallel circuit example" />

---

# Practice Problem

**A 12 V battery is connected to two resistors in series: $R_1 = 2~\Omega$, $R_2 = 4~\Omega$.**
- What is the total resistance?
- What is the current in the circuit?
- What is the voltage drop across each resistor?

<img src="assets/images/8_electromagnetism/8_electromagnetism_6_generator.png" alt="Generators convert mechanical energy to electrical energy." />
<!-- Caption: "Generators convert mechanical energy to electrical energy." -->

---

# Gravitational vs. Electric Potential Energy

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_5.png" alt="" />
<img src="assets/images/9_electricity/gravitational_vs_electric.png" alt="Gravitational vs electric potential energy" />

---

# Understanding Voltage

Voltage (electric potential difference) is the potential energy difference per unit charge between two points in an electric field.

- Represents the work needed to move a charge from one point to another against an electric field.

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_6.png" alt="" />
<img src="assets/images/9_electricity/voltage_drop_example.png" alt="Voltage drop example" />

- Measured in **volts (V)**

<img src="assets/images/9_electricity/0_Lecture_11_Electrodynamics_7.png" alt="" />
<img src="assets/images/9_electricity/voltmeter_in_circuit.png" alt="Voltmeter in circuit" />

---

# Sample Problems

**Problem 1: Current and Charge**
A current of 2.5 A flows through a wire for 30 seconds. How much charge passes through the wire?

**Solution:**
- Using $I = \frac{Q}{t}$
- $Q = I \cdot t = 2.5~\text{A} \times 30~\text{s} = 75~\text{C}$

**Problem 2: Ohm's Law**
A 12 V battery is connected to a resistor. If the current in the circuit is 3 A, what is the resistance?

**Solution:**
- Using $V = I \cdot R$
- $R = \frac{V}{I} = \frac{12~\text{V}}{3~\text{A}} = 4~\Omega$

**Problem 3: Electrical Power**
A toaster operating at 120 V draws 5 A of current. What is its power consumption?

**Solution:**
- Using $P = V \cdot I$
- $P = 120~\text{V} \times 5~\text{A} = 600~\text{W}$

<img src="assets/images/9_electricity/sample_problem_circuit.png" alt="Sample problem circuit" />

---

# Formula Summary

| Concept         | Formula                        | Units      |
|-----------------|-------------------------------|------------|
| Current         | $I = \frac{Q}{t}$             | A          |
| Ohm’s Law       | $V = I R$                     | V, A, Ω    |
| Resistivity     | $R = \rho \frac{L}{A}$        | Ω·m        |
| Power           | $P = V I$                     | W          |
| Series          | $R_{eq} = R_1 + R_2$          | Ω          |
| Parallel        | $\frac{1}{R_{eq}} = ...$      | Ω          |
| Terminal Voltage| $V = \text{EMF} - I r$        | V          |

---

| Concept                | Formula                                   | Description                                      |
|------------------------|-------------------------------------------|--------------------------------------------------|
| Ohm's Law              | $V = I \cdot R$                           | Voltage = Current × Resistance                   |
| Resistance             | $R = \frac{V}{I}$                         | Resistance = Voltage / Current                   |
| Power                  | $P = V \cdot I$                           | Power = Voltage × Current                        |
| Power (alternate)      | $P = I^2 \cdot R$                         | Power = Current² × Resistance                    |
| Power (alternate)      | $P = \frac{V^2}{R}$                       | Power = Voltage² / Resistance                    |
| Electric Potential     | $V = \frac{PE}{q}$                        | Potential = Potential Energy / Charge            |
| Potential Energy Change| $\Delta PE = q \cdot E \cdot d$           | Change in PE = Charge × Electric Field × Distance|
| Resistance (unit)      | $1~\Omega = \frac{1~V}{1~A}$              | 1 Ohm = 1 Volt / 1 Ampere                        |
| Power (unit)           | $1~W = 1~V \cdot 1~A$                     | 1 Watt = 1 Volt × 1 Ampere                       |
| Power (unit)           | $1~W = 1~\frac{J}{s}$                     | 1 Watt = 1 Joule per second                      |

---

<img src="assets/images/8_electromagnetism/8_electromagnetism_7_transformer.png" alt="Transformers change voltage and current in AC circuits." />

<!-- Caption: "Transformers change voltage and current in AC circuits." -->

