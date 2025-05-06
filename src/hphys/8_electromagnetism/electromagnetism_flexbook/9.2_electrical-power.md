---
layout: default
title: The Principles of Electricity: Modern Applications and Power
author: Jonathan Corbett and Claude 3.7 Sonnet
date: 5 May 2025
---

<style>
  body{
    text-align: justify;
  }
  .important-info{
      padding: 1rem;
      border: 0.1pt black solid;
      box-shadow: 5pt grey solid;
  }
  img{
      max-height: 400px;
      float: left;
      padding: 2rem;
  }
  
</style>

# The Principles of Electricity: Modern Applications and Power

## I. Electrical Power (P)

Electrical power is the rate at which electrical energy is transferred or converted. It measures how quickly energy is being used or supplied in an electrical system.

<div class='important-info'>

**Electrical Power**
- Definition: The rate of electrical energy transfer or conversion
- Formula: $P = V \times I$ (Power = Voltage × Current)
- Alternative forms using Ohm's Law:
  * $P = I^2 \times R$ (Power = Current² × Resistance)
  * $P = \frac{V^2}{R}$ (Power = Voltage² / Resistance)
- Power as rate of work: $P = \frac{W}{\Delta t} = \frac{\Delta PE}{\Delta t}$ (Power = Work/Time = Change in energy/Time)
- Measurement unit: Watts ($W$)
- $1 \text{ watt} = 1 \text{ joule per second}$ ($1 \text{ W} = 1 \text{ J/s}$)

</div>

### Connecting Power, Current, and Potential Energy

The power equation ($P = V \times I$) directly links the concepts of electric potential (voltage) and current (amperes):

- The voltage ($V$) represents the electrical potential energy per unit charge
- The current ($I$) represents the rate of charge flow
- Their product ($V \times I$) gives the rate of energy conversion, or power

For example, in a circuit with a 12V source drawing 2A of current:
- The power is $P = V \times I = 12V \times 2A = 24W$
- This means 24 joules of electrical energy are being converted to other forms each second

In terms of potential energy:
- Energy converted over time: $E = P \times t = I \times V \times t$
- This can be rewritten as: $E = \Delta PE_{electric} = Q \times V = I \times t \times V$

These relationships show that increasing either the voltage or the current will increase the power and the rate at which electrical potential energy is converted.

## II. Function of a Resistor

Resistors are fundamental components in electrical circuits that convert electrical energy into heat through resistance. They serve several essential functions in circuit design:

### Regulation and Current Limiting

The most basic function of resistors is to limit or control the current in a circuit. According to Ohm's Law, for a given voltage, increasing resistance decreases current. This property is crucial for:

- Protecting sensitive components from excess current
- Ensuring LEDs and other components receive appropriate current
- Establishing proper operating conditions for various devices

![Resistor Circuit](<0 Lecture _ 11 Electrodynamics_13.png>)
*Circuit showing a resistor used to limit current through an LED*

### Voltage Division

When resistors are connected in series, they divide the voltage in proportion to their resistance values. This voltage division principle is used to:

- Create reference voltages for circuits
- Build analog interfaces like volume controls
- Measure unknown resistances using known reference resistors
- Enable sensors to provide readable voltage outputs

## III. Capacitance

Another important concept in electrical circuits is capacitance, which complements resistance in circuit design.

<div class='important-info'>

**Capacitance**
- Definition: The ability of a conductor to store electrical charge
- Formula: $C = \frac{Q}{\Delta V}$ (Capacitance = Charge / Potential Difference)
- Measurement unit: Farads ($F$)
- $1 \text{ Farad} = \frac{1 \text{ coulomb}}{1 \text{ Volt}}$
- Electrical potential energy stored in a capacitor: $PE_{electric} = \frac{1}{2} \cdot Q \cdot \Delta V$

</div>

Capacitors are components designed specifically to provide capacitance in circuits. Unlike resistors, which impede current flow, capacitors store energy in an electric field between two conductive plates. They serve critical functions in:

- Filtering signals and removing noise
- Storing energy for quick discharge
- Blocking DC voltage while allowing AC signals to pass
- Creating timing circuits when paired with resistors
- Smoothing power supply outputs

The relationship between potential difference and charge stored makes capacitors essential for many electronic applications, from simple timing circuits to complex power conditioning systems.

## IV. Appliance Operation & Power Consumption

Electrical appliances convert electricity into useful forms of energy like light, heat, motion, or sound. Understanding their power consumption helps in efficient design and use.

### Energy Conversion in Common Appliances

Different appliances convert electrical energy into different forms:

- **Heating appliances** (toasters, electric heaters) convert electricity directly into heat through resistive elements
- **Lighting devices** convert electricity into light, often with some heat as a byproduct
- **Motors** convert electricity into mechanical motion in fans, pumps, and compressors
- **Electronic devices** use electricity to process and transmit information

The efficiency of this energy conversion varies greatly. Incandescent bulbs convert only about 5% of energy to light, while LED bulbs convert more than 40%. Modern appliances are designed to maximize useful output while minimizing wasted energy.

### Power Ratings and Consumption

The power rating of an appliance indicates how much electrical energy it converts per second during operation. This is typically measured in watts ($W$) or kilowatts ($kW$).

High-power appliances include:
- Electric water heaters ($3,000-5,000 \text{W}$)
- Clothes dryers ($1,800-5,000 \text{W}$)
- Air conditioners ($1,000-4,000 \text{W}$)
- Electric ovens ($2,000-5,000 \text{W}$)

Low-power appliances include:
- LED light bulbs ($5-15 \text{W}$)
- Cell phone chargers ($5-10 \text{W}$)
- Wi-Fi routers ($5-20 \text{W}$)
- Modern televisions ($100-400 \text{W}$)

The total energy consumption depends on both the power rating and usage time. Energy used is calculated as:

$\text{Energy (watt-hours)} = \text{Power (watts)} \times \text{Time (hours)}$

For example, a $2000\text{W}$ electric heater running for 3 hours consumes $6000$ watt-hours (6 kilowatt-hours) of energy.

### Understanding Power Consumption Through Current and Voltage

We can analyze power consumption by looking at the relationship between current (amperes) and voltage:

1. **Standard household circuit** (120V in the US):
   - A 1200W hair dryer draws: $I = \frac{P}{V} = \frac{1200W}{120V} = 10A$
   - This is a significant portion of a typical 15A household circuit

2. **High-power appliance** (240V circuit):
   - A 4800W electric water heater draws: $I = \frac{P}{V} = \frac{4800W}{240V} = 20A$
   - Requires a dedicated high-amperage circuit

3. **Battery-powered device** (3.7V lithium battery):
   - A 5W smartphone draws: $I = \frac{P}{V} = \frac{5W}{3.7V} = 1.35A$
   - This high current draw explains why batteries drain quickly during intensive use

This analysis shows why high-power devices require:
- Heavier gauge wiring to carry larger currents safely
- Appropriate circuit breakers to prevent overheating
- Sometimes dedicated circuits to avoid overloading
- In some cases, special higher-voltage circuits (like $240\text{V}$ for electric ovens and dryers)

## V. Real-World Applications of Electrical Concepts

### Battery Selection and Performance

Understanding amperes and electrical potential energy helps in selecting appropriate power sources for devices:

- A digital watch requires very little current (microamperes) but needs stable voltage over a long time
- A power drill requires high current (several amperes) to provide sufficient mechanical energy
- An electric vehicle requires both high voltage and high current capacity to deliver significant power to its motors

Battery specifications typically include:
- Voltage (V): The electrical potential difference provided
- Capacity (mAh or Ah): The total charge the battery can deliver
- Maximum discharge rate: The highest current the battery can safely provide

For example, a 3000mAh smartphone battery at 3.7V stores approximately:
$E = Q \times V = 3 \text{ Ah} \times 3.7 \text{ V} = 11.1 \text{ Wh}$ of energy

### Safety Considerations and Circuit Protection

The relationship between current, voltage, and power has important safety implications:

- Even relatively low currents (>0.1A) through the body can be fatal
- Higher voltages more easily overcome skin resistance, increasing shock risk
- Circuit breakers and fuses are rated in amperes because heating and fire risks are determined by current
- Ground fault circuit interrupters (GFCIs) detect small current imbalances (typically 5mA) to prevent shock hazards

Understanding these concepts is essential for designing safe electrical systems and using electricity responsibly.

## VI. Summary of Formulas

The key formulas that govern electrical behavior are:

<div class='important-info'>

**Core Electrical Formulas**
- Electric Potential Energy: $PE_{electric} = q \times V$ (Potential Energy = Charge × Voltage)
- Electric Potential: $V = \frac{PE_{electric}}{q}$ (Voltage = Potential Energy / Charge)
- Potential Difference: $\Delta V = \frac{\Delta PE_{electric}}{q}$
- Potential Difference in Field: $\Delta V = -E \cdot d$
- Electric Current: $I = \frac{\Delta Q}{\Delta t}$ (Current = Change in charge / Change in time)
- Charge and Current: $Q = I \times t$ (Charge = Current × Time)
- Ohm's Law: $V = I \times R$ (Voltage = Current × Resistance)
- Resistance: $R = \frac{V}{I}$ (Resistance = Voltage / Current)
- Power: $P = V \times I$ (Power = Voltage × Current)
- Power as rate of work: $P = \frac{W}{\Delta t} = \frac{\Delta PE}{\Delta t}$
- Power (alternative): $P = I^2 \times R$ or $P = \frac{V^2}{R}$
- Capacitance: $C = \frac{Q}{\Delta V}$ (Capacitance = Charge / Voltage)
- Energy stored in capacitor: $PE_{electric} = \frac{1}{2} \cdot Q \cdot \Delta V$
- Energy consumption: $E = P \times t$ (Energy = Power × Time)

</div>

## VII. Key Takeaways

- **Historical Foundation**: The pioneering work of Galvani, Volta, Ampère, and Ohm established the fundamental principles of electricity and created the first practical electrical devices.

- **Core Relationships**: Ohm's Law ($V = I \times R$) and the power equation ($P = V \times I$) are the cornerstones of electrical circuit analysis.

- **Electrical Potential Energy**: The potential energy that charges possess in electric fields is the fundamental source of energy in electrical systems.

- **Current and Amperes**: The ampere measures the rate at which charge flows, which directly relates to how quickly electrical potential energy is converted to other forms.

- **Component Functionality**: Resistors and capacitors play complementary roles in circuits, with resistors controlling current flow and capacitors storing electrical potential energy.

- **Power Management**: Effective electrical system design requires understanding the power requirements of devices and ensuring circuits can safely provide the necessary current.

The principles discovered by early electrical pioneers continue to guide our modern technological world. From simple circuits to complex electronic devices, the fundamental relationships between voltage, current, resistance, and power remain unchanged, forming the foundation upon which our electrical and electronic infrastructure is built.

## Practice Problems: Section 2

1. A 100W light bulb is connected to a 120V outlet. Calculate:
   a) The current drawn by the bulb
   b) The amount of charge that flows through the bulb in one minute
   c) The electrical potential energy converted in one hour

2. Two identical circuits are connected to different batteries: Circuit A to a 1.5V battery and Circuit B to a 9V battery. If Circuit B draws 6 times more current than Circuit A, compare the resistances of the two circuits.

3. A household uses the following appliances simultaneously for 2 hours:
   - Three 60W LED light bulbs
   - One 2000W electric heater
   - One 200W television
   Calculate the total energy consumed in kilowatt-hours.

4. A 4700μF capacitor is charged to 12V. Calculate:
   a) The charge stored in the capacitor
   b) The electrical potential energy stored in the capacitor

[Solutions will be provided separately]

## Practice Problems: Section 3

1. Calculate the electric field at a point 0.3m from a +5μC charge. How would the field strength change if the distance was doubled?

2. Two point charges, +2μC and -3μC, are separated by 4cm. Find:
    a) The electric field at the midpoint between them
    b) The electric potential energy of this configuration
    c) The force between the charges

3. Sketch the electric field lines for:
    a) Two equal positive charges
    b) A positive and negative charge of equal magnitude
    Explain the key differences in these patterns.

4. A parallel plate capacitor has plates of area 0.02m² separated by 2mm. If the potential difference is 12V:
    a) Calculate the capacitance
    b) Find the stored charge if the dielectric constant is 2.1

5. An electron moves between two points in an electric field where ΔV = 500V. Calculate:
    a) The change in electric potential energy
    b) The work done by the electric field

6. Three charges form an equilateral triangle with side length 0.1m:
    - Vertex 1: +2μC
    - Vertex 2: -3μC
    - Vertex 3: +2μC
    Find the electric potential at the triangle's center.

7. A spherical conductor of radius 5cm is charged to +8μC. Calculate:
    a) The electric field just outside its surface
    b) The electric potential at a point 15cm from its center
    c) The work required to bring a +1μC charge from infinity to this point

8. Two parallel plates form a capacitor. If the plate separation is halved and the plate area is doubled:
    a) How does the capacitance change?
    b) If the voltage remains constant, how does the stored energy change?

## Solutions to Practice Problems: Section 3

<div class='important-info'>

**Problem 1**
- Using Coulomb's law for electric field: $E = \frac{k \cdot q}{r^2}$
- $k = 9 \times 10^9 \text{ N} \cdot \text{m}^2/\text{C}^2$
- $q = 5 \times 10^{-6} \text{ C}$
- $r = 0.3 \text{ m}$
- $E = \frac{9 \times 10^9 \times 5 \times 10^{-6}}{(0.3)^2} = \frac{45 \times 10^3}{0.09} = 5 \times 10^5 \text{ N/C}$
- If distance doubles to 0.6m, $E_{new} = \frac{5 \times 10^5}{4} = 1.25 \times 10^5 \text{ N/C}$ (field strength decreases by a factor of 4)

</div>

<div class='important-info'>

**Problem 2**
- $q_1 = +2 \times 10^{-6} \text{ C}$, $q_2 = -3 \times 10^{-6} \text{ C}$, separation = 0.04m

a) Electric field at midpoint:
- Field due to $q_1$: $E_1 = \frac{k \cdot q_1}{(d/2)^2} = \frac{9 \times 10^9 \times 2 \times 10^{-6}}{(0.02)^2} = \frac{18 \times 10^3}{4 \times 10^{-4}} = 4.5 \times 10^7 \text{ N/C}$ (rightward)
- Field due to $q_2$: $E_2 = \frac{k \cdot |q_2|}{(d/2)^2} = \frac{9 \times 10^9 \times 3 \times 10^{-6}}{(0.02)^2} = \frac{27 \times 10^3}{4 \times 10^{-4}} = 6.75 \times 10^7 \text{ N/C}$ (rightward)
- Total field: $E_{total} = E_1 + E_2 = 1.125 \times 10^8 \text{ N/C}$ (rightward)

b) Electric potential energy:
- $PE = \frac{k \cdot q_1 \cdot q_2}{r} = \frac{9 \times 10^9 \times 2 \times 10^{-6} \times (-3 \times 10^{-6})}{0.04} = \frac{-54 \times 10^{-3}}{0.04} = -1.35 \text{ J}$

c) Force between charges:
- $F = \frac{k \cdot |q_1| \cdot |q_2|}{r^2} = \frac{9 \times 10^9 \times 2 \times 10^{-6} \times 3 \times 10^{-6}}{(0.04)^2} = \frac{54 \times 10^{-3}}{16 \times 10^{-4}} = 33.75 \text{ N}$ (attractive)

</div>

<div class='important-info'>

**Problem 3**
a) Two equal positive charges:
- Field lines radiate outward from each charge
- Lines curve away from each other in the region between charges
- No field lines directly connect the two charges
- There's a neutral point (zero field) between the charges where fields cancel

b) Positive and negative charge:
- Field lines go from positive to negative charge
- Lines form a dipole pattern
- No neutral points in the field
- Field lines are densest in the region directly between charges

Key differences:
- Like charges have repulsive fields; opposite charges have attractive fields
- Only like-charge configurations produce null points in the field
- Opposite charges create more concentrated field lines between them

</div>

<div class='important-info'>

**Problem 4**
- For parallel plate capacitor: $C = \frac{\epsilon_0 \epsilon_r A}{d}$

a) Calculate capacitance:
- $\epsilon_0 = 8.85 \times 10^{-12} \text{ F/m}$
- $\epsilon_r = 2.1$
- $A = 0.02 \text{ m}^2$
- $d = 0.002 \text{ m}$
- $C = \frac{8.85 \times 10^{-12} \times 2.1 \times 0.02}{0.002} = \frac{3.717 \times 10^{-13}}{0.002} = 1.86 \times 10^{-10} \text{ F} = 186 \text{ pF}$

b) Stored charge:
- $Q = C \times V = 1.86 \times 10^{-10} \times 12 = 2.23 \times 10^{-9} \text{ C} = 2.23 \text{ nC}$

</div>

<div class='important-info'>

**Problem 5**
For an electron (charge = $-1.6 \times 10^{-19} \text{ C}$):

a) Change in electric potential energy:
- $\Delta PE = q \times \Delta V = -1.6 \times 10^{-19} \times 500 = -8 \times 10^{-17} \text{ J}$
- The negative sign indicates the electron gains kinetic energy

b) Work done by electric field:
- $W = -\Delta PE = -(-8 \times 10^{-17}) = 8 \times 10^{-17} \text{ J}$
- The positive work means the field does work on the electron, accelerating it

</div>

<div class='important-info'>

**Problem 6**
For an equilateral triangle with charges:

- Use superposition principle: $V = \frac{k \cdot q_1}{r_1} + \frac{k \cdot q_2}{r_2} + \frac{k \cdot q_3}{r_3}$
- For an equilateral triangle, the center is at equal distances from all vertices
- Distance from center to vertex = $\frac{a}{\sqrt{3}}$ where $a = 0.1\text{ m}$
- $r = \frac{0.1}{\sqrt{3}} \approx 0.0577 \text{ m}$

- $V = \frac{9 \times 10^9 \times 2 \times 10^{-6}}{0.0577} + \frac{9 \times 10^9 \times (-3) \times 10^{-6}}{0.0577} + \frac{9 \times 10^9 \times 2 \times 10^{-6}}{0.0577}$
- $V = \frac{9 \times 10^9 \times (2-3+2) \times 10^{-6}}{0.0577} = \frac{9 \times 10^9 \times 1 \times 10^{-6}}{0.0577} = 156 \times 10^3 = 156 \text{ kV}$

</div>

<div class='important-info'>

**Problem 7**
For a spherical conductor with charge $q = 8 \times 10^{-6} \text{ C}$ and radius $R = 0.05 \text{ m}$:

a) Electric field just outside:
- $E = \frac{k \cdot q}{R^2} = \frac{9 \times 10^9 \times 8 \times 10^{-6}}{(0.05)^2} = \frac{72 \times 10^3}{25 \times 10^{-4}} = 2.88 \times 10^7 \text{ N/C}$

b) Electric potential at 15cm:
- $V = \frac{k \cdot q}{r} = \frac{9 \times 10^9 \times 8 \times 10^{-6}}{0.15} = \frac{72 \times 10^3}{0.15} = 4.8 \times 10^5 \text{ V}$

c) Work to bring charge from infinity:
- $W = \frac{k \cdot q \cdot q'}{r} = \frac{9 \times 10^9 \times 8 \times 10^{-6} \times 1 \times 10^{-6}}{0.15} = \frac{72 \times 10^{-3}}{0.15} = 0.48 \text{ J}$

</div>

<div class='important-info'>

**Problem 8**
For parallel plate capacitor with:
- Initial capacitance $C_1 = \frac{\epsilon_0 A_1}{d_1}$
- Final capacitance $C_2 = \frac{\epsilon_0 A_2}{d_2}$
- Where $A_2 = 2A_1$ and $d_2 = \frac{d_1}{2}$

a) Capacitance change:
- $C_2 = \frac{\epsilon_0 \cdot 2A_1}{\frac{d_1}{2}} = \frac{2\epsilon_0 A_1}{\frac{d_1}{2}} = \frac{4\epsilon_0 A_1}{d_1} = 4 \cdot \frac{\epsilon_0 A_1}{d_1} = 4C_1$
- The capacitance increases by a factor of 4

b) Energy change at constant voltage:
- Energy stored: $E = \frac{1}{2}CV^2$
- If $C$ increases by factor of 4 and $V$ is constant, then:
- $E_2 = \frac{1}{2} \cdot 4C_1 \cdot V^2 = 4 \cdot \frac{1}{2}C_1V^2 = 4E_1$
- The energy increases by a factor of 4

</div>

[End of solutions]