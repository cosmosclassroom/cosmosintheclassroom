---
layout: default
title: PS 9.3 Electrical Power
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

# PS 9.3 | Electrical Power

## Calculation Problems

Q1. A toaster draws 8.0 A of current when connected to a 120 V outlet.  
(a) Calculate the power consumed by the toaster in watts.  
(b) If the toaster is used for 5.0 minutes each morning, how much electrical energy in kilowatt-hours does it consume in a 30-day month?

<details>
<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>

$P = IV$
$E = P \times t$
</div>

<div class="givens">

$I = 8.0~\text{A}$<br>
$V = 120~\text{V}$<br>
$t = 5.0~\text{min/day} \times 30~\text{days}$
</div>

<div class="calculations">
(a)<br>

$P = (8.0~\text{A})(120~\text{V})$<br>
<div class="sigfig">
$P = 960~\text{W}$
</div>
<br>
(b)<br>

$E = (0.96~\text{kW}) \times (5.0~\text{min/day}) \times (1~\text{hr}/60~\text{min}) \times (30~\text{days})$<br>
<div class="sigfig">

$E = 2.4~\text{kWh}$
</div>
</div>
</div>
</details>

Q2. A household circuit has a 15 A circuit breaker. What is the maximum number of 60 W light bulbs that can be safely operated simultaneously on this circuit if the voltage is 120 V?

<details>
<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>

$P_\text{max} = IV$<br>
$\text{Number of bulbs} = P_\text{max} / P_\text{bulb}$
</div>

<div class="givens">

$I = 15~\text{A}$<br>
$V = 120~\text{V}$<br>
$P_\text{bulb} = 60~\text{W}$
</div>

<div class="calculations">

$P_\text{max} = (15~\text{A})(120~\text{V})$<br>
<div class="sigfig">

$P_\text{max} = 1800~\text{W}$
</div>
<br>

$\text{Number of bulbs} = 1800~\text{W} \div 60~\text{W}$<br>
<div class="sigfig">
30 bulbs
</div>
</div>
</div>
</details>

Q3. A hair dryer has a resistance of 10 Ω when operating.  
- (a) If it is connected to a 120 V outlet, what current will it draw?  
- (b) What is the power consumption of the hair dryer?  
- (c) How much electrical energy in joules does it consume when used for 8.0 minutes?

<details>
<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>

$I = V/R$<br>
$P = VI$<br>
$E = Pt$
</div>

<div class="givens">

$R = 10~\Omega$<br>
$V = 120~\text{V}$<br>
$t = 8.0~\text{min} \times 60~\text{s/min}$
</div>

<div class="calculations">
(a)<br>

$I = 120~\text{V} / 10~\Omega$<br>
<div class="sigfig">

$I = 12~\text{A}$
</div>
<br>
(b)<br>

$P = (120~\text{V})(12~\text{A})$<br>
<div class="sigfig">

$P = 1440~\text{W}$
</div>
<br>
(c)<br>

$E = (1440~\text{W})(8.0~\text{min})(60~\text{s/min})$<br>
<div class="sigfig">

$E = 691,200~\text{J}$
</div>
</div>
</div>
</details>

Q4. A student accidentally connects a 6.0 V battery to a 3.0 V, 0.50 W light bulb.  
(a) What is the resistance of the light bulb when operating normally?  
(b) What current will flow through the bulb with the 6.0 V battery?  
(c) What power will the bulb dissipate with the 6.0 V battery?  
(d) Why might this cause the bulb to burn out?

<details>
<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>

$R = V^2/P$<br>
$I = V/R$<br>
$P = VI$
</div>

<div class="givens">

$V_\text{normal} = 3.0~\text{V}$<br>
$P_\text{normal} = 0.50~\text{W}$<br>
$V_\text{battery} = 6.0~\text{V}$
</div>

<div class="calculations">
(a)<br>

$R = (3.0~\text{V})^2 / 0.50~\text{W}$<br>
<div class="sigfig">

$R = 18~\Omega$
</div>
<br>
(b)<br>

$I = 6.0~\text{V} / 18~\Omega$<br>
<div class="sigfig">

$I = 0.33~\text{A}$
</div>
<br>
(c)<br>

$P = (6.0~\text{V})(0.33~\text{A})$<br>
<div class="sigfig">

$P = 2.0~\text{W}$
</div>
</div>
</div>
<div class="calculations">
(d) The bulb will dissipate 4 times more power than its rating, causing excessive heating and likely failure.
</div>
</details>

Q5. The electrical energy cost is $0.14 per kilowatt-hour. A refrigerator with a power rating of 350 W operates with a duty cycle where it runs 40% of the time.  
(a) How much electrical energy in kilowatt-hours does it consume in a day?  
(b) What is the monthly cost (30 days) to operate the refrigerator?

<details>
<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>

$E = P \times t \times (\text{duty cycle})$<br>
$\text{Cost} = E \times \text{rate}$
</div>

<div class="givens">

$P = 0.350~\text{kW}$<br>
$t = 24~\text{h}$<br>
$\text{duty cycle} = 0.40$<br>
$\text{rate} = \$0.14/\text{kWh}$
</div>

<div class="calculations">
(a)<br>

$E = (0.350~\text{kW})(24~\text{h})(0.40)$<br>
<div class="sigfig">

$E = 3.36~\text{kWh}$
</div>
<br>
(b)<br>

$\text{Cost} = (3.36~\text{kWh/day})(30~\text{days})(\$0.14/\text{kWh})$<br>
<div class="sigfig">

\$14.11
</div>
</div>
</div>
</details>

## Conceptual Problems

Q6. Explain the difference between electrical energy and electrical power. Include the units for each and explain how they are related.

<details>
<div class="solution-grid">
<div class="givens">

Electrical energy: capacity to do work<br>
Units: joules (J), kilowatt-hours (kWh)<br>
Electrical power: rate of energy transfer<br>
Units: watts (W)
</div>
<div class="calculations">

Power equals energy divided by time:<br>
$P = E/t$
</div>
<div class="sigfig">

Example: $1~\text{kWh} = 3.60 \times 10^6~\text{J}$<br>
$1~\text{W} = 1~\text{J/s}$
</div>
</div>
</details>

Q7. Two light bulbs are labeled 75 W and 40 W respectively, and both are designed to operate at 120 V.  
(a) Which bulb has the higher resistance?  
(b) Which bulb draws more current?  
(c) Explain why the power rating is related to the brightness of the bulb.

<details>
<div class="solution-grid">
<div class="givens">

$P_{75W} = 75~\text{W}$<br>
$P_{40W} = 40~\text{W}$<br>
$V = 120~\text{V}$
</div>
<div class="calculations">

(a) $R = V^2/P$<br>
$R_{40W} = (120~\text{V})^2/40~\text{W} = 360~\Omega$<br>
$R_{75W} = (120~\text{V})^2/75~\text{W} = 192~\Omega$<br>
(b) $I = P/V$<br>
$I_{75W} = 75~\text{W}/120~\text{V} = 0.625~\text{A}$<br>
$I_{40W} = 40~\text{W}/120~\text{V} = 0.333~\text{A}$<br>
(c) Higher power means more energy converted to light and heat per unit time, so the 75 W bulb is brighter.
</div>
<div class="sigfig">

$R_{40W} = 360~\Omega$<br>
$R_{75W} = 192~\Omega$<br>
$I_{75W} = 0.625~\text{A}$<br>
$I_{40W} = 0.333~\text{A}$
</div>
</div>
</details>

Q8. A space heater can be operated at either 1000 W or 1500 W settings.  
(a) If the voltage remains constant at 120 V, how does the current change when switching from the lower to the higher setting?  
(b) How does the resistance of the heater element change when switching from the lower to the higher setting?

<details>
<div class="solution-grid">
<div class="givens">

$P_1 = 1000~\text{W}$<br>
$P_2 = 1500~\text{W}$<br>
$V = 120~\text{V}$
</div>
<div class="calculations">

(a) $I_1 = 1000~\text{W}/120~\text{V} = 8.33~\text{A}$<br>
$I_2 = 1500~\text{W}/120~\text{V} = 12.5~\text{A}$<br>
Current increases by 50%.<br>
(b) $R_1 = (120~\text{V})^2/1000~\text{W} = 14.4~\Omega$<br>
$R_2 = (120~\text{V})^2/1500~\text{W} = 9.60~\Omega$<br>
Resistance decreases.
</div>
<div class="sigfig">

$I_1 = 8.33~\text{A}$<br>
$I_2 = 12.5~\text{A}$<br>
$R_1 = 14.4~\Omega$<br>
$R_2 = 9.60~\Omega$
</div>
</div>
</details>

Q9. A power transmission line delivers electrical energy from a generating station to a city. The same amount of power can be transmitted using either high voltage and low current, or low voltage and high current.  
(a) Which approach would result in less energy lost as heat in the transmission lines? Why?  
(b) If the resistance of the transmission line is 5.0 Ω, compare the power lost when transmitting 100 kW at 20,000 V versus transmitting 100 kW at 4,000 V.

<details>
<div class="solution-grid">
<div class="givens">

$P = 100,000~\text{W}$<br>
$V_1 = 20,000~\text{V}$<br>
$V_2 = 4,000~\text{V}$<br>
$R = 5.0~\Omega$
</div>
<div class="calculations">

(a) High voltage and low current result in less energy lost as heat because $P_\text{loss} = I^2R$.<br>
(b) $I_1 = 100,000~\text{W}/20,000~\text{V} = 5.00~\text{A}$<br>
$P_{1,\text{loss}} = (5.00~\text{A})^2 \times 5.0~\Omega = 125~\text{W}$<br>
$I_2 = 100,000~\text{W}/4,000~\text{V} = 25.0~\text{A}$<br>
$P_{2,\text{loss}} = (25.0~\text{A})^2 \times 5.0~\Omega = 3,130~\text{W}$<br>
Power loss is 25 times greater at the lower voltage.
</div>
<div class="sigfig">

$P_{1,\text{loss}} = 125~\text{W}$<br>
$P_{2,\text{loss}} = 3,130~\text{W}$
</div>
</div>
</details>

Q10. Three resistors of 3.0 Ω, 6.0 Ω, and 9.0 Ω are connected in the following configurations:  
(a) If connected in series to a 12 V battery, which resistor will dissipate the most power? The least power? Explain why without doing calculations.  
(b) If connected in parallel to the same 12 V battery, which resistor will dissipate the most power? The least power? Explain why without doing calculations.  
(c) For which configuration (series or parallel) will the battery deliver more total power? Explain.

<details>
<div class="solution-grid">
<div class="givens">

$R_1 = 3.0~\Omega$<br>
$R_2 = 6.0~\Omega$<br>
$R_3 = 9.0~\Omega$<br>
$V = 12~\text{V}$
</div>
<div class="calculations">

(a) In series, all resistors have the same current. $P = I^2R$; the 9.0 Ω resistor dissipates the most power, 3.0 Ω the least.<br>
(b) In parallel, all resistors have the same voltage. $P = V^2/R$; the 3.0 Ω resistor dissipates the most power, 9.0 Ω the least.<br>
(c) The parallel configuration delivers more total power because the equivalent resistance is lower, allowing more current from the battery.
</div>
<div class="sigfig">

Series: $P_{9\Omega} > P_{6\Omega} > P_{3\Omega}$<br>
Parallel: $P_{3\Omega} > P_{6\Omega} > P_{9\Omega}$
</div>
</div>
</details>


<!--  COPIED FROM AI EXPORT - FOR FUTURE REFERENCE

#### Problem Set 9.3: Electrical Power
**Formulas:**
- Power: $P = IV$
- Power (resistor): $P = I^2R$, $P = \frac{V^2}{R}$
- Energy: $E = Pt$
- Cost: $\text{Cost} = \text{Energy (kWh)} \times \text{rate}$
- Efficiency: $\text{Efficiency} = \frac{\text{Output Power}}{\text{Input Power}} \times 100\%$

1. Define electrical power and its unit.
2. Calculate power consumed by a device given current and voltage.
3. Use $P = I^2R$ and $P = \frac{V^2}{R}$ to find power in a resistor.
4. Calculate energy used by a device over a given time.
5. Calculate the cost of running an appliance for a month.
6. Explain the difference between AC and DC power.
7. Describe how fuses and circuit breakers protect circuits.
8. Calculate the efficiency of a device given input and output power.
9. Explain why power lines are high voltage for long-distance transmission.
10. Give a real-world example of electrical power in use (e.g., toaster, microwave). -->