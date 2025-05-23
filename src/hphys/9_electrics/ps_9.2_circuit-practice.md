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

# PS 9.2| Circuit Practice Problems

## Formula Summary

| Concept                        | Formula                                         | Description                                 |
|--------------------------------|-------------------------------------------------|---------------------------------------------|
| Ohm's Law                      | $V = IR$                                        | Voltage, current, resistance relationship   |
| Resistance (series)            | $R_{total} = R_1 + R_2 + \dots$                | Total resistance in series                  |
| Resistance (parallel)          | $\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$ | Total resistance in parallel      |
| Current Division (parallel)    | $I_n = \frac{R_{total}}{R_n} \times I_{total}$ | Current through a branch in parallel circuit |
| Voltage Division (series)      | $V_n = \frac{R_n}{R_{total}} \times V_{total}$ | Voltage across a resistor in series circuit |

## Basic Current and Resistance Problems

1. The electron and proton in a hydrogen atom are separated by approximately $5.3 \times 10^{-11}$ m. If we could create a minuscule resistor between these particles with a resistance of $1.0 \times 10^6~\Omega$, what would be the current flow if the potential difference is $3.0 \times 10^{-19}$ V?


2. A circuit contains a resistor of $5.00~\Omega$. When connected to a battery, it draws a current of $2.50~\mathrm{A}$.  
   a) What is the voltage of the battery?  
   b) If a second identical resistor is added in series, what will be the new current?  
   c) If instead the second resistor is added in parallel with the first, what will be the new current?


3. Three resistors with values $6.00~\Omega$, $12.0~\Omega$, and $18.0~\Omega$ are connected in series with a $36.0~\mathrm{V}$ battery. 
   (a) Calculate the total resistance of the circuit.
   (b) What is the current in the circuit?
   (c) What is the voltage across each resistor?

4. In a string of 50 identical Christmas lights connected in series, each bulb has a resistance of $24~\Omega$. If the string is connected to a $120~\mathrm{V}$ outlet:
   (a) What is the total resistance of the circuit?
   (b) What is the current through the circuit?
   (c) What is the voltage across each bulb?
   (d) What happens to the brightness of the remaining bulbs if one bulb burns out? Explain.

5. Three resistors with values $15.0~\Omega$, $30.0~\Omega$, and $45.0~\Omega$ are connected in parallel with a $12.0~\mathrm{V}$ battery.
   (a) Calculate the total resistance of the circuit.
   (b) What is the current drawn from the battery?
   (c) What is the current through each resistor?



6. In a modern home, many outlets are connected in parallel to a $120~\mathrm{V}$ source. If a circuit has a circuit breaker rated at $20~\mathrm{A}$, calculate:
   (a) The minimum total resistance the circuit can have before the breaker trips.
   (b) If you are already running a $1500~\mathrm{W}$ heater on this circuit, what is the maximum power rating of an additional appliance you can connect without tripping the breaker?


<!-- 7. In the cir BROKEN BROKEN BROKEN BROKEN BROKEN -->

## Conceptual Questions

7. For each of the following statements, identify whether it applies to series circuits, parallel circuits, or both:
a. The current through each component is the same  
b. The voltage across each component is the same  
c. If one component fails and becomes an open circuit, all other components stop working  
d. Adding more components decreases the total resistance  
e. The total resistance is always greater than the largest individual resistance



8. Consider two lightbulbs, one rated at 60 W and another at 100 W, both designed for use with 120 V.
  a. Which bulb has higher resistance?
  b. If these bulbs are connected in series to a 120 V source, which bulb will be brighter? Explain.
  c. If these bulbs are connected in parallel to a 120 V source, which bulb will be brighter? Explain.

  ## Solutions
It seems #7 is a conceptual question that may not require a numeric solution. Here is the content:

1. 3.0 \times 10^{-25}\,\mathrm{A}

2.  A circuit with a 5.00\,\Omega resistor:
   a) $ 12.5\,\mathrm{V}  $
   b) $ 1.25\,\mathrm{A}  $
   c) $ 5.00\,\mathrm{A} $

3.  Three resistors in series:
   a) $36.0\,\Omega$  
   b) $1.00\,\mathrm{A}$  
   c) $V_1 = 6.00\,\mathrm{V},\; V_2 = 12.0\,\mathrm{V},\; V_3 = 18.0\,\mathrm{V}$

4. A string of Christmas lights
   a) $ 1200\,\Omega  $
   b) $ 0.100\,\mathrm{A}  $
   c) $ 2.40\,\mathrm{V}  $
   d) All bulbs go out

5.  Three resistors in parallel:
   a) $8.18\,\Omega  $
   b) $1.47\,\mathrm{A}  $
   c) $I_1 = 0.800\,\mathrm{A},\; I_2 = 0.400\,\mathrm{A},\; I_3 = 0.267\,\mathrm{A}$

6. Circuit breaker in a home
   a) $6.00\,\Omega  $
   b) $900\,\mathrm{W}$

7. Comparing series and parallel circuits:
   a) Series  
   b) Parallel  
   c) Series  
   d) Parallel  
   e) Series

8.  Two Lightbulbs
   a) $R_{60W} = 240\,\Omega,\; R_{100W} = 144\,\Omega$
   b) 60 W bulb brighter in series  
   c) 100 W bulb brighter in parallel
