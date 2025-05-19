---
layout: default
title: PS 9.2 Simple Circuit Resistance
author: Jonathan Corbett
css: /assets/css/worksheets.css
---

# PS 9.2 | Simple Circuit Resistance

| Concept                        | Formula                                         | Variables/Symbols                | Description                                 |
|--------------------------------|-------------------------------------------------|----------------------------------|---------------------------------------------|
| Current                        | $I = \frac{Q}{t}$                               | $I$ (current), $Q$ (charge), $t$ (time) | Current as charge per time                  |
| Ohm's Law                      | $V = IR$                                        | $V$ (voltage), $I$ (current), $R$ (resistance) | Voltage, current, resistance relationship   |
| Resistance (series)            | $R_{series} = R_1 + R_2 + \dots$                | $R_{series}$, $R_1$, $R_2$, ...  | Total resistance in series                  |
| Resistance (parallel)          | $R_{parallel} = \left( \frac{1}{R_1} + \frac{1}{R_2} + \dots \right)^{-1}$ | $R_{parallel}$, $R_1$, $R_2$, ... | Total resistance in parallel      |
| Charge                         | $Q = It$                                        | $Q$ (charge), $I$ (current), $t$ (time) | Charge transferred                          |
| Power                          | $P = IV$, $P = I^2R$, $P = \frac{V^2}{R}$       | $P$ (power), $I$ (current), $V$ (voltage), $R$ (resistance) | Power in electric circuits                  |


**Formulas:**
- Series resistance: $R_{total} = R_1 + R_2 + \ldots$
- Parallel resistance: $\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots$
- Ohm's Law: $V = IR$

## Problems

1. Draw a simple series circuit with a battery and two resistors.

<details>
<summary>Solution</summary>
A series circuit diagram should show a battery connected in a single loop to two resistors, one after the other.  
*(Students should draw: Battery -- Resistor 1 -- Resistor 2 -- back to Battery)*
</details>

2. Draw a parallel circuit with a battery and two resistors.

<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
  <path d="M 100,150 L 150,150 L 150,100 L 350,100 L 350,150 L 400,150 L 400,250 L 100,250 L 100,150" 
        stroke="black" stroke-width="3" fill="none"/>
  
  <!-- Battery -->
  <line x1="100" y1="180" x2="100" y2="220" stroke="black" stroke-width="3"/>
  <line x1="90" y1="180" x2="110" y2="180" stroke="black" stroke-width="3"/>
  <line x1="80" y1="200" x2="120" y2="200" stroke="black" stroke-width="3"/>
  <line x1="90" y1="220" x2="110" y2="220" stroke="black" stroke-width="3"/>
  <text x="40" y="200" font-family="Arial" font-size="16">Battery</text>
  <text x="80" y="270" font-family="Arial" font-size="14">+</text>
  <text x="80" y="145" font-family="Arial" font-size="14">-</text>
  
  <!-- Resistor 1 -->
  <path d="M 175,100 L 175,90 L 185,85 L 195,95 L 205,85 L 215,95 L 225,85 L 235,95 L 245,85 L 255,95 L 265,85 L 275,95 L 285,90 L 285,100" 
        stroke="black" stroke-width="3" fill="none"/>
  <text x="230" y="60" font-family="Arial" font-size="16">R₁</text>
  
  <!-- Resistor 2 -->
  <path d="M 400,165 L 410,165 L 415,175 L 425,155 L 435,175 L 445,155 L 455,175 L 465,155 L 475,175 L 485,155 L 495,175 L 500,165 L 510,165" 
        stroke="black" stroke-width="3" fill="none" transform="translate(-100, 85)"/>
  <text x="430" y="230" font-family="Arial" font-size="16">R₂</text>
  
  <!-- Current direction -->
  <path d="M 230,230 L 270,230" stroke="black" stroke-width="2" fill="none"/>
  <polygon points="270,230 260,225 260,235" fill="black"/>
  <text x="230" y="215" font-family="Arial" font-size="16">I</text>
  
  <!-- Labels -->
  <text x="200" y="280" font-family="Arial" font-size="18">Simple Series Circuit</text>
</svg>

<details>
<summary>Solution</summary>
A parallel circuit diagram should show a battery connected so that two resistors are each connected across the same two points (branches).  
*(Students should draw: Battery with two branches, each branch containing one resistor, both branches reconnecting to the battery)*
</details>

3. Calculate the total resistance in a series circuit with $R_1 = 12\,\Omega$ and $R_2 = 8\,\Omega$.

<details>
<summary>Solution</summary>
$R_{total} = R_1 + R_2 = 12\,\Omega + 8\,\Omega = 20\,\Omega$
</details>

4. Calculate the total resistance in a parallel circuit with $R_1 = 10\,\Omega$ and $R_2 = 20\,\Omega$.

<details>
<summary>Solution</summary>
$\frac{1}{R_{total}} = \frac{1}{10\,\Omega} + \frac{1}{20\,\Omega} = \frac{2}{20} + \frac{1}{20} = \frac{3}{20}$  
$R_{total} = \frac{20}{3}\,\Omega \approx 6.67\,\Omega$
</details>

5. A $24\,\mathrm{V}$ battery is connected to a series circuit with $R_1 = 6\,\Omega$ and $R_2 = 6\,\Omega$. What is the current in the circuit?

<details>
<summary>Solution</summary>
$R_{total} = 6\,\Omega + 6\,\Omega = 12\,\Omega$  
$I = \frac{V}{R_{total}} = \frac{24\,\mathrm{V}}{12\,\Omega} = 2\,\mathrm{A}$
</details>

6. A $12\,\mathrm{V}$ battery is connected to a parallel circuit with $R_1 = 4\,\Omega$ and $R_2 = 12\,\Omega$. Find the current through each resistor.

<details>
<summary>Solution</summary>
$I_1 = \frac{12\,\mathrm{V}}{4\,\Omega} = 3\,\mathrm{A}$  
$I_2 = \frac{12\,\mathrm{V}}{12\,\Omega} = 1\,\mathrm{A}$
</details>

7. In a series circuit with a $9\,\mathrm{V}$ battery and two resistors ($R_1 = 2\,\Omega$, $R_2 = 4\,\Omega$), what is the voltage drop across each resistor?

<details>
<summary>Solution</summary>
$R_{total} = 2\,\Omega + 4\,\Omega = 6\,\Omega$  
$I = \frac{9\,\mathrm{V}}{6\,\Omega} = 1.5\,\mathrm{A}$  
$V_1 = I \times R_1 = 1.5\,\mathrm{A} \times 2\,\Omega = 3\,\mathrm{V}$  
$V_2 = I \times R_2 = 1.5\,\mathrm{A} \times 4\,\Omega = 6\,\mathrm{V}$
</details>

8. Explain why the total resistance in a parallel circuit is always less than the smallest individual resistor.

<details>
<summary>Solution</summary>
Adding more branches in parallel provides additional paths for current, reducing the overall opposition to current flow. Mathematically, $R_{total}$ is always less than the smallest $R$ because the reciprocals add, making the total reciprocal larger.
</details>

9. Identify and draw the standard circuit symbols for a battery, resistor, and switch.

<details>
<summary>Solution</summary>
- **Battery:** A pair of long and short parallel lines  
- **Resistor:** A zigzag line or rectangle  
- **Switch:** A break in the line with a pivoted lever  
*(Students should draw or recognize these symbols in a diagram.)*
</details>

10. A lamp rated at $60\,\mathrm{W}$ operates on $120\,\mathrm{V}$.  
a) What is the current through the lamp?  
b) What is its resistance?  
c) If two such lamps are connected in parallel to a $120\,\mathrm{V}$ source, what is the total current drawn?

<details>
<summary>Solution</summary>

a) $I = \frac{P}{V} = \frac{60\,\mathrm{W}}{120\,\mathrm{V}} = 0.5\,\mathrm{A}$  
b) $R = \frac{V}{I} = \frac{120\,\mathrm{V}}{0.5\,\mathrm{A}} = 240\,\Omega$  
c) Each lamp draws $0.5\,\mathrm{A}$, so total current is $0.5\,\mathrm{A} + 0.5\,\mathrm{A} = 1.0\,\mathrm{A}$

</details>

---