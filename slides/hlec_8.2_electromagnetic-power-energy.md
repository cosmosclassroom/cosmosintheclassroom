---
marp: true
theme: default
paginate: true
backgroundColor: #fff
header: '**Electrodynamics**'
footer: 'High School Physics - Ch. 9.2'
style: |
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  img {
    max-height: 500px;
  }
  section.title {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section {
    font-size: 1.1rem;
  }
---

<!-- _class: title -->
# 11 Electrodynamics
High School Physics

---

## Electromagnetism Fundamentals

- **Light**: range of electromagnetic radiation visible to the human eye
- **Electromagnetic Spectrum**: range of all wavelengths/frequencies of electromagnetic radiation
- **Electromagnetic Radiation**: waves produced by synchronization of oscillations between electric and magnetic fields
  - Caused by the movement (oscillations) of charged particles
  - EM waves vary depending on frequency and wavelength
  - Composed of oscillating, perpendicular electric and magnetic fields
- All EM waves move at the speed of light
  - In a vacuum, c = 3.00 x 10^8 m/s
- Wave directions of travel can be approximated as rays

---

## Electric Potential & Voltage: Fundamentals

- When a force is applied to move an object, **work** is done on that object
- Work being done equals a **change** in the **energy** of the object
- **Electric Potential**: energy that a charged object has because of its shape and position in an electric field
- Electric potential energy (PE_electric) in a uniform field depends on:
  - The charge (*q*)
  - Strength of the field (*E*)
  - Displacement (*d*)

$$PE_{electric}=\,-q\cdot \overrightarrow{E}\cdot d$$

$$\text{electric}\;\text{potential}\;=\,\frac{\text{electric}\;\text{potential}\;\text{energy}}{\text{charge}}$$

---

## Electric Potential & Displacement

- The displacement, *d*, is generally chosen as movement in the direction of the field
- Potential difference: measure of potential energy at two different locations in a field
  - Represents energy a particle would gain or lose by traveling between positions
- The amount of **work** done by a field to move a charge equals the negative of the change in potential energy

$$W\,=\,\overrightarrow{F}\cdot d=\,q\cdot E\cdot d$$

$$\text{work}\;=\text{force}\;\times\text{displacement}\;\text{=}\;\text{charge}\;\times\text{field}\;\text{strength}\;\times\text{displacement}$$

---

## Electric Potential Concepts

- An electric potential *exists at some point in an electric field whether or not there is another charge at that point*
- The negative sign indicates that electrical potential energy:
  - **Increases** if the charge is **negative** 
  - **Decreases** if the charge is **positive**
- When electric force does positive work on a charge:
  - Kinetic energy increases
  - Potential energy decreases
- **Electric potential *(V)*** is the amount of potential energy per unit charge
- Unit: *Joule* per Coulomb = Volt (V)

---

## Understanding Potential Difference

$$\Delta V\,=\,\frac{\Delta PE}{q}$$

$$\text{electric}\;\text{potential}\;\text{=}\;\frac{\text{potential}\;\text{electrical}\;\text{energy}}{\text{charge}}$$

- The charge in this case is the charge creating the field, not the test charge
- SI unit for potential difference: **volt (V)**
  - 1 volt = 1 joule per coulomb

$$1\,\text{Volt}\,=\,\frac{1\,Joule}{1\,Coulomb}$$

$$\text{Voltage}\;\text{=}\;\frac{\text{Energy}\;\text{(J)}}{\text{Charge}\;\text{(C)}}$$

---

## Voltage and Electric Field Relationship

- V (regular) stands for volts, the unit of potential
- *V* (italics) stands for voltage, the electric potential itself
- As a charge of 1 C (1.6x10^-19 electrons) moves through a potential difference of 1 V, the charge gains 1 Joule of energy

$$\Delta V=-E\cdot d$$

$$\text{potential}\;\text{difference}\;\text{=}\;\left(\text{magnitude}\;\text{of}\;\text{electric}\;\text{field}\right)\times\left(\text{displacement}\right)$$

*d is displacement parallel to the field*

---

<!-- _class: title -->
## The History of Batteries

---

## Luigi Galvani's Discoveries

- Around 1791, Luigi Galvani found that frog legs could twitch if:
  - Static electricity was applied to them
  - They were injected with mixtures of metals
- Galvani assumed that the metals acted like conductors for the frog's "life force"

---

## Alessandro Volta's Contributions

- Volta was skeptical of Galvani's explanation
- He predicted that metals were the source of electricity, and frog tissues merely conducted it
- He demonstrated that frog legs are sensitive instruments for detecting *electromotive force* (voltage)
- To test his hypothesis, Volta created the first battery:
  - Placed discs of zinc and silver in columns
  - Separated them by cloth/paper soaked in salt or acid
  - These "piles" or "batteries" produced much larger potential difference than static electricity
  - The voltage was strong enough to create sparks

---

## How Batteries Work

- An **electric battery** transforms chemical energy into electric energy
- Structure:
  - Two **electrodes** made of different materials
  - Immersed in a solution or paste (**electrolyte**)
  - This assembly is called a **cell** (batteries have one or more cells)

- Operation:
  - Electrolyte dissolves one electrode, releasing electrons and positive ions
  - Solution attracts electrons from other electrode, creating positive charge
  - When connected by a conductor, continuous flow of electrons occurs
  - Voltage depends on electrode materials and their reaction with the acid

---

## Battery Connections

- Multiple cells can be connected in series:
  - Connect positive terminal of one to negative terminal of another
  - Combined voltage is the algebraic sum of individual cell voltages

---

## Voltage: The Driving Force

- Also known as electric potential difference
- Measures electric potential energy per unit charge between two points in a circuit
- Acts as the "push" that drives electric charge through a conductor
- Provides the energy needed for charges to move or flow (similar to water pressure)
- Measured in **volts (V)**

$$1\,\text{V}=1\frac{\,\text{J}}{\text{C}}$$

$$\text{voltage}\;\text{=}\;\frac{\text{energy}}{\text{charge}}$$

---

## Electric Current Fundamentals

- **Electric current** (*I*): the **rate** of **flow** of electric charge through a **conductor** in a **circuit**
- Measured in **amperes (A)**

$$1\,A\,=\,1\,\frac{\,C}{s}$$

$$\text{amperage}\;\text{=}\;\frac{\text{charge}}{\text{time}}$$

- The flow of charge through a conductor resembles water flowing through a pipe
- Conventional current direction: positive charge flow (historical convention)
  - Positive conventional current flows from high to low potential
  - In a wire, electrons actually flow in the opposite direction

---

<!-- _class: title -->
## Ohm's Law

---

## Resistance Concepts

- **Resistance** (R): measures how much a material opposes current flow
- Measured in **ohms (Ω)**
- Analogous to a narrow pipe restricting water flow or a thumb over a hose
- Resistance of a device is defined by Ohm's Law:

$$V\,=\,IR$$

$$\text{voltage}\;\text{=}\;\text{current}\,\times\,\text{resistance}$$

- Resistance in a circuit depends on:
  - Length of conductor
  - Cross-sectional area
  - Temperature
  - Material properties

---

<!-- _class: title -->
## Electric Power

---

## Power Calculations

- Electrical power: rate at which electrical energy is converted to another form
  - Heat, light, motion, etc.
- Measured in watts (W)
- Calculation methods:

$$P\,=\,IV$$
$$\text{power}\;\text{=}\;\text{current}\;\times\text{voltage}\;$$

- From Ohm's Law:

$$P\,=\,I^{2}\cdot R$$
$$\text{power}\;\text{=}\;\text{current}^{2\,}\times \text{resistance}\;$$

$$P\,=\,\frac{V^{2}}{R}$$
$$\text{power}\;\text{=}\;\frac{\text{voltage}^{2}}{\text{resistance}\;}$$

---

## Historical Context

- **Luigi Galvani (1737–1798)**
  - Italian physician and physicist
  - Pioneered bioelectricity research
  - Discovered frog muscle twitching with metal contact
  - Proposed "animal electricity"

- **Alessandro Volta (1745–1827)**
  - Italian physicist
  - Challenged Galvani's theory
  - Showed metals were the electricity source
  - Invented voltaic pile (first chemical battery)

- **Georg Simon Ohm (1789–1854)**
  - German physicist
  - Formulated Ohm's Law relating voltage, current, and resistance
  - Foundation for understanding electric current behavior

---

## Energy in Batteries

- Energy stored in a battery:
  - Formula: $E = Q \cdot V$
  - $Q$ = total charge stored
  - $V$ = potential difference provided
  - Measured in joules (J)

- Electric potential energy (PEE):
  - Energy associated with charge position in electric field
  - Measured in joules (J)

---

## Current and Charge Relationships

- Electric current is the flow of electric charge
- Total charge passing through a circuit:
  - $Q = I \cdot t$
  - $I$ = current
  - $t$ = time
  - Charge measured in coulombs (C)

- Voltage drop across a resistor:
  - Using Ohm's Law: $V = I \cdot R$
  - $V$ = voltage drop
  - $I$ = current
  - $R$ = resistance

---

## Resistors and Their Function

- **Resistors**: passive components introducing resistance into circuits
- **Ohm's Law**: current is proportional to voltage and inversely proportional to resistance
- Resistance calculation: $R = V / I$

- Functions of resistors:
  - Regulate/limit electric current flow
  - Control amount of current passing through
  - Reduce current flow
  - Divide voltage
  - Provide specific voltage drop
  - Common applications: LED brightness control, amplifier gain setting, transistor biasing

---

## Electrical Power and Appliances

- **Electrical power**: rate of energy transfer/conversion
- Formula: $P = V \cdot I$
- Measured in watts (W)

- Common energy conversions in appliances:
  - Light bulbs: Electrical → light + heat
  - Heaters: Electrical → heat
  - Motors: Electrical → mechanical (rotation, movement)

- Power consumption depends on voltage and current requirements
- Higher power ratings = more energy required to operate

---

## Power Consumption Calculations

- To determine power consumed:
  - Multiply voltage across device by current flowing through it
  - $P = V \cdot I$

- Understanding these principles provides foundation for:
  - Electric potential energy
  - Voltage
  - Current
  - Resistance
  - Power in high school physics

---

<!-- _class: title -->
# Thank You
Understanding electricity from Galvani to modern applications