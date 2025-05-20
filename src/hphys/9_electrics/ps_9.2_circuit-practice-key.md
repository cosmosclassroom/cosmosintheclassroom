---
layout: default
title: PS 9.2 Circuit Practice Problems
author: Jonathan Corbett
css: /assets/css/worksheets.css
---

<style>
.solution-grid {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: auto auto;
  gap: 10px;
  margin: 15px 0;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
}
.sigfig {
  grid-column: 2;
  grid-row: 1;
  background-color: #e9ecef;
  padding: 8px;
  border-radius: 4px;
  text-align: right;
}
.parent-formula {
  grid-column: 2;
  text-align: right;
  grid-row: 1;
  background-color: #e9ecef;
  padding: 8px;
  border-radius: 4px;
}
.givens {
  grid-column: 1;
  text-align: right;
  grid-row: 2;
  background-color: #e9ecef;
  padding: 8px;
  border-radius: 4px;
}
.calculations {
  grid-column: 2;
  grid-row: 2;
  background-color: #e9ecef;
  padding: 8px;
  border-radius: 4px;
}
details {
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  border-left: 5px solid #007bff;
}
summary {
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 10px;
}
details[open] summary {
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
  padding-left: 8px;
}
</style>

# PS 9.4 | Circuit Practice Problems

## Formula Summary

| Concept                        | Formula                                         | Description                                 |
|--------------------------------|-------------------------------------------------|---------------------------------------------|
| Ohm's Law                      | $V = IR$                                        | Voltage, current, resistance relationship   |
| Resistance (series)            | $R_{total} = R_1 + R_2 + \dots$                | Total resistance in series                  |
| Resistance (parallel)          | $\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$ | Total resistance in parallel      |
| Power                          | $P = IV$                                       | Power as product of current and voltage     |
| Power from resistance          | $P = I^2R$                                     | Power dissipated by a resistor              |
| Power from voltage             | $P = \frac{V^2}{R}$                            | Alternative power formula using voltage     |

<!-- These concepts are not covered this year:
| Current Division (parallel)    | $I_n = \frac{R_{total}}{R_n} \times I_{total}$ | Current through a branch in parallel circuit |
| Voltage Division (series)      | $V_n = \frac{R_n}{R_{total}} \times V_{total}$ | Voltage across a resistor in series circuit |
-->

## Basic Current and Resistance Problems

1. The electron and proton in a hydrogen atom are separated by approximately $5.3 \times 10^{-11}$ m. If we could create a minuscule resistor between these particles with a resistance of $1.0 \times 10^6~\Omega$, what would be the current flow if the potential difference is $3.0 \times 10^{-19}$ V?


<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>

$I = \frac{V}{R}$ (Ohm's Law)
</div>
<div class="givens">

$V = 3.00 \times 10^{-19}~\text{V}$<br>
$R = 1.00 \times 10^{6}~\Omega$
</div>
<div class="calculations">

$I = \frac{V}{R}$<br>
$I = \frac{3.00 \times 10^{-19}~\text{V}}{1.00 \times 10^{6}~\Omega}$<br>
$I = 3.00 \times 10^{-25}~\text{A}$
</div>
<div class="sigfig">

$I = 3.00 \times 10^{-25}~\text{A}$
</div>
</div>


2. A circuit contains a resistor of $5.00~\Omega$. When connected to a battery, it draws a current of $2.50~\text{A}$.  
   a) What is the voltage of the battery?  
   b) If a second identical resistor is added in series, what will be the new current?  
   c) If instead the second resistor is added in parallel with the first, what will be the new current?


<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>

$V = IR$<br>
$R_{series} = R_1 + R_2$<br>
$\frac{1}{R_{parallel}} = \frac{1}{R_1} + \frac{1}{R_2}$
</div>
<div class="givens">

$R_1 = R_2 = 5.00~\Omega$<br>
$I_{initial} = 2.50~\text{A}$
</div>
<div class="calculations">

a) $V = IR_1 = (2.50~\text{A})(5.00~\Omega) = 12.5~\text{V}$<br>

b) In series: $R_{total} = 5.00~\Omega + 5.00~\Omega = 10.0~\Omega$<br>
$I_{series} = \frac{V}{R_{total}} = \frac{12.5~\text{V}}{10.0~\Omega} = 1.25~\text{A}$<br>

c) In parallel: $R_{total} = \frac{5.00~\Omega \times 5.00~\Omega}{5.00~\Omega + 5.00~\Omega} = 2.50~\Omega$<br>
$I_{parallel} = \frac{V}{R_{total}} = \frac{12.5~\text{V}}{2.50~\Omega} = 5.00~\text{A}$
</div>
<div class="sigfig">

$V = 12.5~\text{V}$<br>
$I_{series} = 1.25~\text{A}$<br>
$I_{parallel} = 5.00~\text{A}$
</div>
</div>


## Series Circuit Problems

3. Three resistors with values $6.00~\Omega$, $12.0~\Omega$, and $18.0~\Omega$ are connected in series with a $36.0~\text{V}$ battery. 
   (a) Calculate the total resistance of the circuit.
   (b) What is the current in the circuit?
   (c) What is the voltage across each resistor?


<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>
$R_{total} = R_1 + R_2 + R_3$
</div>
<div class="givens">
$R_1 = 6.00~\Omega$<br>
$R_2 = 12.0~\Omega$<br>
$R_3 = 18.0~\Omega$
</div>
<div class="calculations">
(a) $R_{total} = 6.00~\Omega + 12.0~\Omega + 18.0~\Omega = 36.0~\Omega$
</div>
<div class="sigfig">
$R_{total} = 36.0~\Omega$
</div>
</div>

<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>
$I = \frac{V}{R_{total}}$
</div>
<div class="givens">
$V_{battery} = 36.0~\text{V}$<br>
$R_{total} = 36.0~\Omega$
</div>
<div class="calculations">
(b) $I = \frac{36.0~\text{V}}{36.0~\Omega} = 1.00~\text{A}$
</div>
<div class="sigfig">
$I = 1.00~\text{A}$
</div>
</div>

<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>
$V_n = IR_n$
</div>
<div class="givens">
$I = 1.00~\text{A}$<br>
$R_1 = 6.00~\Omega$<br>
$R_2 = 12.0~\Omega$<br>
$R_3 = 18.0~\Omega$
</div>
<div class="calculations">
(c) $V_1 = 1.00~\text{A} \times 6.00~\Omega = 6.00~\text{V}$<br>
$V_2 = 1.00~\text{A} \times 12.0~\Omega = 12.0~\text{V}$<br>
$V_3 = 1.00~\text{A} \times 18.0~\Omega = 18.0~\text{V}$
</div>
<div class="sigfig">
$V_1 = 6.00~\text{V}$<br>
$V_2 = 12.0~\text{V}$<br>
$V_3 = 18.0~\text{V}$
</div>
</div>



4. In a string of 50 identical Christmas lights connected in series, each bulb has a resistance of $24~\Omega$. If the string is connected to a $120~\text{V}$ outlet:
   (a) What is the total resistance of the circuit?
   (b) What is the current through the circuit?
   (c) What is the voltage across each bulb?
   (d) What happens to the brightness of the remaining bulbs if one bulb burns out? Explain.



<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>

$R_{total} = 50 \times R_{bulb}$<br>
$I = \frac{V}{R_{total}}$<br>
$V_{bulb} = \frac{V_{total}}{50}$
</div>
<div class="givens">

$R_{bulb} = 24~\Omega$<br>
$V_{total} = 120~\text{V}$<br>
$n = 50~\text{bulbs}$
</div>
<div class="calculations">

(a) $R_{total} = 50 \times 24~\Omega = 1200~\Omega$<br>

(b) $I = \frac{V}{R_{total}} = \frac{120~\text{V}}{1200~\Omega} = 0.100~\text{A}$<br>

(c) $V_{bulb} = \frac{V_{total}}{50} = \frac{120~\text{V}}{50} = 2.40~\text{V}$<br>

(d) If one bulb burns out, the circuit is broken and no current flows. All bulbs go out because the circuit has been opened. This is a disadvantage of series circuits for lighting.
</div>
<div class="sigfig">

$R_{total} = 1200~\Omega$<br>
$I = 0.100~\text{A}$<br>
$V_{bulb} = 2.40~\text{V}$
</div>
</div>



## Parallel Circuit Problems

5. Three resistors with values $15.0~\Omega$, $30.0~\Omega$, and $45.0~\Omega$ are connected in parallel with a $12.0~\text{V}$ battery.
   (a) Calculate the total resistance of the circuit.
   (b) What is the current drawn from the battery?
   (c) What is the current through each resistor?


<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>

$\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$<br>
$I_{total} = \frac{V}{R_{total}}$<br>
$I_n = \frac{V}{R_n}$
</div>
<div class="givens">

$R_1 = 15.0~\Omega$<br>
$R_2 = 30.0~\Omega$<br>
$R_3 = 45.0~\Omega$<br>
$V = 12.0~\text{V}$
</div>
<div class="calculations">

(a) $\frac{1}{R_{total}} = \frac{1}{15.0~\Omega} + \frac{1}{30.0~\Omega} + \frac{1}{45.0~\Omega}$<br>
$\frac{1}{R_{total}} = \frac{3.00}{45.0~\Omega} + \frac{1.50}{45.0~\Omega} + \frac{1.00}{45.0~\Omega} = \frac{5.50}{45.0~\Omega}$<br>
$R_{total} = \frac{45.0~\Omega}{5.50} = 8.18~\Omega$<br>

(b) $I_{total} = \frac{V}{R_{total}} = \frac{12.0~\text{V}}{8.18~\Omega} = 1.47~\text{A}$<br>

(c) $I_1 = \frac{V}{R_1} = \frac{12.0~\text{V}}{15.0~\Omega} = 0.800~\text{A}$<br>
$I_2 = \frac{V}{R_2} = \frac{12.0~\text{V}}{30.0~\Omega} = 0.400~\text{A}$<br>
$I_3 = \frac{V}{R_3} = \frac{12.0~\text{V}}{45.0~\Omega} = 0.267~\text{A}$<br>

Verification: $I_{total} = I_1 + I_2 + I_3 = 0.800~\text{A} + 0.400~\text{A} + 0.267~\text{A} = 1.47~\text{A}$
</div>
<div class="sigfig">

$R_{total} = 8.18~\Omega$<br>
$I_{total} = 1.47~\text{A}$<br>
$I_1 = 0.800~\text{A}$<br>
$I_2 = 0.400~\text{A}$<br>
$I_3 = 0.267~\text{A}$
</div>
</div>



6. In a modern home, many outlets are connected in parallel to a $120~\text{V}$ source. If a circuit has a circuit breaker rated at $20~\text{A}$, calculate:
   (a) The minimum total resistance the circuit can have before the breaker trips.
   (b) If you are already running a $1500~\text{W}$ heater on this circuit, what is the maximum power rating of an additional appliance you can connect without tripping the breaker?



<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>

$I_{max} = 20~\text{A}$<br>
$R_{min} = \frac{V}{I_{max}}$<br>
$P = IV$<br>
$P_{available} = P_{max} - P_{used}$
</div>
<div class="givens">

$V = 120~\text{V}$<br>
$I_{max} = 20~\text{A}$<br>
$P_{heater} = 1500~\text{W}$
</div>
<div class="calculations">

(a) $R_{min} = \frac{V}{I_{max}} = \frac{120~\text{V}}{20~\text{A}} = 6.0~\Omega$<br>

(b) Maximum power the circuit can handle:<br>
$P_{max} = V \times I_{max} = 120~\text{V} \times 20~\text{A} = 2400~\text{W}$<br>

Available power for additional appliance:<br>
$P_{available} = P_{max} - P_{heater} = 2400~\text{W} - 1500~\text{W} = 900~\text{W}$
</div>
<div class="sigfig">

$R_{min} = 6.0~\Omega$<br>
$P_{available} = 900~\text{W}$
</div>
</div>



## Combination Circuit Problems

7. In the circuit shown below, calculate:
   (a) The equivalent resistance of the entire circuit
   (b) The current through each resistor
   (c) The voltage across each resistor
   (d) The power dissipated by each resistor

   ```
   A --- [R₁ = 20Ω] --- B --- [R₂ = 40Ω] --- C
                         |                   |
                         |                   |
                         D --- [R₃ = 30Ω] --- E
   
   Battery (36V) connected between A and E
   ```



<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>

$R_{parallel} = \frac{R_2 \times R_3}{R_2 + R_3}$<br>
$R_{total} = R_1 + R_{parallel}$<br>
$I_{total} = \frac{V}{R_{total}}$<br>
$V_n = IR_n$<br>
$P = I^2R$
</div>
<div class="givens">

$R_1 = 20~\Omega$<br>
$R_2 = 40~\Omega$<br>
$R_3 = 30~\Omega$<br>
$V_{battery} = 36~\text{V}$
</div>
<div class="calculations">

(a) $R_{parallel} = \frac{R_2 \times R_3}{R_2 + R_3} = \frac{40~\Omega \times 30~\Omega}{40~\Omega + 30~\Omega} = \frac{1200~\Omega}{70~\Omega} = 17.1~\Omega$<br>
$R_{total} = R_1 + R_{parallel} = 20~\Omega + 17.1~\Omega = 37.1~\Omega$<br>

(b) $I_{total} = I_1 = \frac{V}{R_{total}} = \frac{36~\text{V}}{37.1~\Omega} = 0.970~\text{A}$<br>

Voltage at point B = $V_B = V - I_1 \times R_1 = 36~\text{V} - 0.970~\text{A} \times 20~\Omega = 16.6~\text{V}$<br>

$I_2 = \frac{V_B}{R_2} = \frac{16.6~\text{V}}{40~\Omega} = 0.415~\text{A}$<br>
$I_3 = \frac{V_B}{R_3} = \frac{16.6~\text{V}}{30~\Omega} = 0.553~\text{A}$<br>

(c) $V_1 = I_1 \times R_1 = 0.970~\text{A} \times 20~\Omega = 19.4~\text{V}$<br>
$V_2 = I_2 \times R_2 = 0.415~\text{A} \times 40~\Omega = 16.6~\text{V}$<br>
$V_3 = I_3 \times R_3 = 0.553~\text{A} \times 30~\Omega = 16.6~\text{V}$<br>

(d) $P_1 = I_1^2 \times R_1 = (0.970~\text{A})^2 \times 20~\Omega = 18.8~\text{W}$<br>
$P_2 = I_2^2 \times R_2 = (0.415~\text{A})^2 \times 40~\Omega = 6.89~\text{W}$<br>
$P_3 = I_3^2 \times R_3 = (0.553~\text{A})^2 \times 30~\Omega = 9.18~\text{W}$
</div>
<div class="sigfig">

$R_{total} = 37.1~\Omega$<br>
$I_1 = 0.970~\text{A}$<br>
$I_2 = 0.415~\text{A}$<br>
$I_3 = 0.553~\text{A}$<br>
$V_1 = 19.4~\text{V}$<br>
$V_2 = 16.6~\text{V}$<br>
$V_3 = 16.6~\text{V}$<br>
$P_1 = 18.8~\text{W}$<br>
$P_2 = 6.89~\text{W}$<br>
$P_3 = 9.18~\text{W}$
</div>
</div>



## Conceptual Questions

8. For each of the following statements, identify whether it applies to series circuits, parallel circuits, or both:
   (a) The current through each component is the same.
   (b) The voltage across each component is the same.
   (c) If one component fails and becomes an open circuit, all other components stop working.
   (d) Adding more components decreases the total resistance.
   (e) The total resistance is always greater than the largest individual resistance.




(a) Series circuits - In a series circuit, the current must be the same through each component because there is only one path for charge to flow.

(b) Parallel circuits - Components connected in parallel all have the same voltage across them because they are connected directly to the same two points in the circuit.

(c) Series circuits - In a series circuit, if one component fails, the circuit is broken and current stops flowing through all components.

(d) Parallel circuits - In a parallel circuit, adding another resistance in parallel provides another path for current, reducing the total resistance.

(e) Series circuits - In a series circuit, the total resistance is the sum of all individual resistances, so it must be greater than the largest individual resistance.


9. Consider two lightbulbs, one rated at 60 W and another at 100 W, both designed for use with 120 V.
   (a) Which bulb has higher resistance?
   (b) If these bulbs are connected in series to a 120 V source, which bulb will be brighter? Explain.
   (c) If these bulbs are connected in parallel to a 120 V source, which bulb will be brighter? Explain.



<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>

$R = \frac{V^2}{P}$<br>
$P = I^2R$
</div>
<div class="givens">

$P_1 = 60~\text{W}$<br>
$P_2 = 100~\text{W}$<br>
$V = 120~\text{V}$
</div>
<div class="calculations">

(a) $R_{60W} = \frac{V^2}{P} = \frac{(120~\text{V})^2}{60~\text{W}} = 240~\Omega$<br>
$R_{100W} = \frac{V^2}{P} = \frac{(120~\text{V})^2}{100~\text{W}} = 144~\Omega$<br>
The 60W bulb has higher resistance.<br>

(b) In series, both bulbs will have the same current. Since $P = I^2R$ and the 60W bulb has higher resistance, it will dissipate more power and be brighter than the 100W bulb (contrary to their ratings at 120V).<br>

(c) In parallel, both bulbs will receive the full 120V. The 100W bulb will draw more current and operate at its rated 100W, making it brighter than the 60W bulb.
</div>
<div class="sigfig">

$R_{60W} = 240~\Omega$<br>
$R_{100W} = 144~\Omega$
</div>
</div>



10. Explain why high-voltage transmission lines are more efficient for transmitting electrical power over long distances than low-voltage lines. In your answer, discuss:
    (a) The relationship between voltage, current, and power
    (b) How power loss in transmission lines occurs
    (c) How increasing voltage affects power loss




(a) The relationship between voltage, current, and power is given by P = IV. For a constant power, if voltage increases, current decreases proportionally.

(b) Power loss in transmission lines occurs due to the heating effect of current flowing through the resistance of the wires. This loss is given by P_loss = I²R where R is the resistance of the transmission lines.

(c) Increasing voltage while transmitting the same power means decreasing current (P = IV). Since power loss is proportional to the square of the current (P_loss = I²R), doubling the voltage reduces the current by half, which reduces power loss by a factor of four. 

For example, to transmit 100 MW of power:
- At 100 kV: I = 1000 A, loss ∝ (1000)² = 1,000,000 × R
- At 500 kV: I = 200 A, loss ∝ (200)² = 40,000 × R

This is why power companies use extremely high voltages (often 345 kV to 765 kV) for long-distance transmission, then step down the voltage near the destination.


