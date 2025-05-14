---
layout: default
title: PS 9.3 Electrical Power
author: Jonathan Corbett
css: /assets/css/worksheets.css
---

<style>
.solution-grid {
  display: grid;
  grid-template-columns: 60% 40%;
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
  grid-column: 1;
  grid-row: 1;
  background-color: #e9ecef;
  padding: 8px;
  border-radius: 4px;
}
.givens {
  grid-column: 1;
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
  background-color: #f8f9fa;
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

# PS 9.3 | Electrical Power

## Calculation Problems

Q1. A toaster draws 8.0 A of current when connected to a 120 V outlet.  
(a) Calculate the power consumed by the toaster in watts.  
(b) If the toaster is used for 5.0 minutes each morning, how much electrical energy in kilowatt-hours does it consume in a 30-day month?

<details>
<summary>Solution</summary>
<div class="solution-grid">
  <div class="parent-formula">
    <b>Parent formula:</b><br>
    P = IV<br>
    E = P × t
  </div>
  <div class="sigfig">
    <b>Results:</b><br>
    P = 960 W<br>
    E = 2.4 kWh
  </div>
  <div class="givens">
    <b>Given:</b><br>
    I = 8.0 A<br>
    V = 120 V<br>
    t = 5.0 min/day × 30 days
  </div>
  <div class="calculations">
    <b>Calculations:</b><br>
    (a)<br>
    P = (8.0 A)(120 V)<br>
    P = 960 W<br>
    <br>
    (b)<br>
    E = (0.96 kW) × (5.0 min/day) × (1 hr/60 min) × (30 days)<br>
    E = 2.4 kWh
  </div>
</div>
</details>

Q2. A household circuit has a 15 A circuit breaker. What is the maximum number of 60 W light bulbs that can be safely operated simultaneously on this circuit if the voltage is 120 V?

<details>
<summary>Solution</summary>
<div class="solution-grid">
  <div class="parent-formula">
    <b>Parent formula:</b><br>
    P<sub>max</sub> = IV<br>
    Number of bulbs = P<sub>max</sub> / P<sub>bulb</sub>
  </div>
  <div class="sigfig">
    <b>Results:</b><br>
    P<sub>max</sub> = 1800 W<br>
    30 bulbs
  </div>
  <div class="givens">
    <b>Given:</b><br>
    I = 15 A<br>
    V = 120 V<br>
    P<sub>bulb</sub> = 60 W
  </div>
  <div class="calculations">
    <b>Calculations:</b><br>
    P<sub>max</sub> = (15 A)(120 V)<br>
    P<sub>max</sub> = 1800 W<br>
    <br>
    Number of bulbs = 1800 W ÷ 60 W<br>
    Number of bulbs = 30 bulbs
  </div>
</div>
</details>

Q3. A hair dryer has a resistance of 10 Ω when operating.  
(a) If it is connected to a 120 V outlet, what current will it draw?  
(b) What is the power consumption of the hair dryer?  
(c) How much electrical energy in joules does it consume when used for 8.0 minutes?

<details>
<summary>Solution</summary>
<div class="solution-grid">
  <div class="parent-formula">
    <b>Parent formula:</b><br>
    I = V/R<br>
    P = VI<br>
    E = Pt
  </div>
  <div class="sigfig">
    <b>Results:</b><br>
    I = 12 A<br>
    P = 1440 W<br>
    E = 691,200 J
  </div>
  <div class="givens">
    <b>Given:</b><br>
    R = 10 Ω<br>
    V = 120 V<br>
    t = 8.0 min × 60 s/min
  </div>
  <div class="calculations">
    <b>Calculations:</b><br>
    (a)<br>
    I = 120 V / 10 Ω<br>
    I = 12 A<br>
    <br>
    (b)<br>
    P = (120 V)(12 A)<br>
    P = 1440 W<br>
    <br>
    (c)<br>
    E = (1440 W)(8.0 min)(60 s/min)<br>
    E = 691,200 J
  </div>
</div>
</details>

Q4. A student accidentally connects a 6.0 V battery to a 3.0 V, 0.50 W light bulb.  
(a) What is the resistance of the light bulb when operating normally?  
(b) What current will flow through the bulb with the 6.0 V battery?  
(c) What power will the bulb dissipate with the 6.0 V battery?  
(d) Why might this cause the bulb to burn out?

<details>
<summary>Solution</summary>
<div class="solution-grid">
  <div class="parent-formula">
    <b>Parent formula:</b><br>
    R = V²/P<br>
    I = V/R<br>
    P = VI
  </div>
  <div class="sigfig">
    <b>Results:</b><br>
    R = 18 Ω<br>
    I = 0.33 A<br>
    P = 2.0 W
  </div>
  <div class="givens">
    <b>Given:</b><br>
    V<sub>normal</sub> = 3.0 V<br>
    P<sub>normal</sub> = 0.50 W<br>
    V<sub>battery</sub> = 6.0 V
  </div>
  <div class="calculations">
    <b>Calculations:</b><br>
    (a)<br>
    R = (3.0 V)² / 0.50 W<br>
    R = 18 Ω<br>
    <br>
    (b)<br>
    I = 6.0 V / 18 Ω<br>
    I = 0.33 A<br>
    <br>
    (c)<br>
    P = (6.0 V)(0.33 A)<br>
    P = 2.0 W
  </div>
</div>
<div style="margin-left: 20px; margin-top: 10px;">
(d) The bulb will dissipate 4 times more power than its rating, causing excessive heating and likely failure.
</div>
</details>

Q5. The electrical energy cost is $0.14 per kilowatt-hour. A refrigerator with a power rating of 350 W operates with a duty cycle where it runs 40% of the time.  
(a) How much electrical energy in kilowatt-hours does it consume in a day?  
(b) What is the monthly cost (30 days) to operate the refrigerator?

<details>
<summary>Solution</summary>
<div class="solution-grid">
  <div class="parent-formula">
    <b>Parent formula:</b><br>
    E = P × t × (duty cycle)<br>
    Cost = E × rate
  </div>
  <div class="sigfig">
    <b>Results:</b><br>
    E = 3.36 kWh<br>
    Cost = $14.11
  </div>
  <div class="givens">
    <b>Given:</b><br>
    P = 0.350 kW<br>
    t = 24 h<br>
    duty cycle = 0.40<br>
    rate = $0.14/kWh
  </div>
  <div class="calculations">
    <b>Calculations:</b><br>
    (a)<br>
    E = (0.350 kW)(24 h)(0.40)<br>
    E = 3.36 kWh<br>
    <br>
    (b)<br>
    Cost = (3.36 kWh/day)(30 days)($0.14/kWh)<br>
    Cost = $14.11
  </div>
</div>
</details>

## Conceptual Problems

Q6. Explain the difference between electrical energy and electrical power. Include the units for each and explain how they are related.

<details>
<summary>Solution</summary>
Electrical energy is the capacity to do work, measured in joules (J) or kilowatt-hours (kWh), while electrical power is the rate at which energy is transferred, measured in watts (W). Power equals energy divided by time: P = E/t.
</details>

Q7. Two light bulbs are labeled 75 W and 40 W respectively, and both are designed to operate at 120 V.  
(a) Which bulb has the higher resistance?  
(b) Which bulb draws more current?  
(c) Explain why the power rating is related to the brightness of the bulb.

<details>
<summary>Solution</summary>
(a) The 40 W bulb has higher resistance (R = V²/P: R<sub>40W</sub> = (120 V)²/40 W = 360 Ω; R<sub>75W</sub> = (120 V)²/75 W = 192 Ω)  
<br>
(b) The 75 W bulb draws more current (I = P/V: I<sub>75W</sub> = 75 W/120 V = 0.625 A; I<sub>40W</sub> = 40 W/120 V = 0.333 A)  
<br>
(c) Higher power means more electrical energy converted to light and heat per unit time, resulting in greater brightness.
</details>

Q8. A space heater can be operated at either 1000 W or 1500 W settings.  
(a) If the voltage remains constant at 120 V, how does the current change when switching from the lower to the higher setting?  
(b) How does the resistance of the heater element change when switching from the lower to the higher setting?

<details>
<summary>Solution</summary>
(a) I<sub>1000W</sub> = 1000 W/120 V = 8.33 A; I<sub>1500W</sub> = 1500 W/120 V = 12.5 A; Current increases by 50%.  
<br>
(b) R<sub>1000W</sub> = (120 V)²/1000 W = 14.4 Ω; R<sub>1500W</sub> = (120 V)²/1500 W = 9.6 Ω; Resistance decreases.
</details>

Q9. A power transmission line delivers electrical energy from a generating station to a city. The same amount of power can be transmitted using either high voltage and low current, or low voltage and high current.  
(a) Which approach would result in less energy lost as heat in the transmission lines? Why?  
(b) If the resistance of the transmission line is 5.0 Ω, compare the power lost when transmitting 100 kW at 20,000 V versus transmitting 100 kW at 4,000 V.

<details>
<summary>Solution</summary>
(a) High voltage and low current would result in less energy lost as heat because power loss is proportional to the square of current (P = I²R).  
<br>
(b) P<sub>20,000V</sub> = I²R = (P/V)²R = (100,000 W/20,000 V)²(5.0 Ω) = (5 A)²(5.0 Ω) = 125 W  
<br>
P<sub>4,000V</sub> = (100,000 W/4,000 V)²(5.0 Ω) = (25 A)²(5.0 Ω) = 3,125 W  
<br>
The power loss is 25 times greater at the lower voltage.
</details>

Q10. Three resistors of 3.0 Ω, 6.0 Ω, and 9.0 Ω are connected in the following configurations:  
(a) If connected in series to a 12 V battery, which resistor will dissipate the most power? The least power? Explain why without doing calculations.  
(b) If connected in parallel to the same 12 V battery, which resistor will dissipate the most power? The least power? Explain why without doing calculations.  
(c) For which configuration (series or parallel) will the battery deliver more total power? Explain.

<details>
<summary>Solution</summary>
(a) In series, all resistors have the same current. Since P = I²R, the 9.0 Ω resistor will dissipate the most power and the 3.0 Ω resistor will dissipate the least power.  
<br>
(b) In parallel, all resistors have the same voltage. Since P = V²/R, the 3.0 Ω resistor will dissipate the most power and the 9.0 Ω resistor will dissipate the least power.  
<br>
(c) The parallel configuration will deliver more total power because the equivalent resistance is lower, allowing more current from the battery.
</details>
