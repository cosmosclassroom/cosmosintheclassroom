---
layout: default
title: PS 9.1 Electric Current Key
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
</style>

# PS 9.1 | Electric Current and Ohm's Law

## Solutions

1. **Conceptual Explanation:**
<details>
<summary>Solution</summary>
<div class="solution-grid">
<div class="givens">
$I = \frac{Q}{t}$<br>
$V = \frac{W}{Q}$<br>
$R = \frac{V}{I}$
</div>
<div class="calculations">
Electric current ($I$): rate of charge flow through a conductor.<br>
Voltage ($V$): electric potential difference or "pressure" driving the current.<br>
Resistance ($R$): opposition to current flow in the conductor.
</div>
<div class="sigfig">
Units: $I$ (A = C/s), $V$ (V = J/C), $R$ ($\Omega$ = V/A)
</div>
</div>
</details>

2. a) Calculate the resistance in the circuit.<br>
   b) Explain why doubling the voltage would double the current.
<details>
<summary>Solution</summary>
<div class="solution-grid">
<div class="givens">
$V = 12.0~\mathrm{V}$<br>
$I = 2.00~\mathrm{A}$
</div>
<div class="calculations">
a) $R = \frac{V}{I} = \frac{12.0}{2.00} = 6.00~\Omega$<br>
b) Ohm's Law: $I = \frac{V}{R}$. If $R$ is constant, doubling $V$ doubles $I$.
</div>
<div class="sigfig">
$R = 6.00~\Omega$
</div>
</div>
</details>

3. a) What is the current flowing through the circuit?<br>
   b) If the resistor is replaced with a $200\,\Omega$ resistor, how does the current change?
<details>
<summary>Solution</summary>
<div class="solution-grid">
<div class="givens">
$V = 9.00~\mathrm{V}$<br>
$R_1 = 100~\Omega$<br>
$R_2 = 200~\Omega$
</div>
<div class="calculations">
a) $I_1 = \frac{9.00}{100} = 0.0900~\mathrm{A}$<br>
b) $I_2 = \frac{9.00}{200} = 0.0450~\mathrm{A}$<br>
Current is inversely proportional to resistance.
</div>
<div class="sigfig">
$I_1 = 0.0900~\mathrm{A}$<br>
$I_2 = 0.0450~\mathrm{A}$
</div>
</div>
</details>

4. What is the resistance of an appliance drawing $3.00\,\mathrm{A}$ at $120\,\mathrm{V}$?
<details>
<summary>Solution</summary>
<div class="solution-grid">
<div class="givens">
$V = 120~\mathrm{V}$<br>
$I = 3.00~\mathrm{A}$
</div>
<div class="calculations">
$R = \frac{V}{I} = \frac{120}{3.00} = 40.0~\Omega$
</div>
<div class="sigfig">
$R = 40.0~\Omega$
</div>
</div>
</details>

5. a) What voltage must be applied across a $15.0\,\Omega$ LED requiring $20.0\,\mathrm{mA}$?<br>
   b) Why is the direction of current flow important for LEDs?
<details>
<summary>Solution</summary>
<div class="solution-grid">
<div class="givens">
$R = 15.0~\Omega$<br>
$I = 20.0~\mathrm{mA} = 0.0200~\mathrm{A}$
</div>
<div class="calculations">
a) $V = IR = (0.0200)(15.0) = 0.300~\mathrm{V}$<br>
b) LEDs only allow current flow in one direction due to their semiconductor properties. Reverse current can damage the device.
</div>
<div class="sigfig">
$V = 0.300~\mathrm{V}$
</div>
</div>
</details>

6. A battery supplies $6.00\,\mathrm{V}$ to a circuit with two identical resistors. If the total current is $0.500\,\mathrm{A}$, what is the resistance of each resistor?
<details>
<summary>Solution</summary>
<div class="solution-grid">
<div class="givens">
$V = 6.00~\mathrm{V}$<br>
$I = 0.500~\mathrm{A}$
</div>
<div class="calculations">
$R_{total} = \frac{V}{I} = 12.0~\Omega$<br>
If series: $R_{each} = 6.00~\Omega$<br>
If parallel: $R_{each} = 24.0~\Omega$
</div>
<div class="sigfig">
$R_{total} = 12.0~\Omega$<br>
$R_{each,series} = 6.00~\Omega$<br>
$R_{each,parallel} = 24.0~\Omega$
</div>
</div>
</details>

7. a) Calculate the resistance of a car starter motor ($12.0\,\mathrm{V}$, $120\,\mathrm{A}$).<br>
   b) How much charge flows through it in $2.00\,\mathrm{s}$?
<details>
<summary>Solution</summary>
<div class="solution-grid">
<div class="givens">
$V = 12.0~\mathrm{V}$<br>
$I = 120~\mathrm{A}$<br>
$t = 2.00~\mathrm{s}$
</div>
<div class="calculations">
a) $R = \frac{V}{I} = \frac{12.0}{120} = 0.100~\Omega$<br>
b) $Q = It = (120)(2.00) = 240~\mathrm{C}$
</div>
<div class="sigfig">
$R = 0.100~\Omega$<br>
$Q = 240~\mathrm{C}$
</div>
</div>
</details>

8. a) What is the effective resistance of a phone charging circuit ($5.00\,\mathrm{V}$, $2.00\,\mathrm{A}$)?<br>
   b) How much charge is transferred in $1.00\,\mathrm{hr}$?
<details>
<summary>Solution</summary>
<div class="solution-grid">
<div class="givens">
$V = 5.00~\mathrm{V}$<br>
$I = 2.00~\mathrm{A}$<br>
$t = 1.00~\mathrm{hr} = 3600~\mathrm{s}$
</div>
<div class="calculations">
a) $R = \frac{V}{I} = \frac{5.00}{2.00} = 2.50~\Omega$<br>
b) $Q = It = (2.00)(3600) = 7200~\mathrm{C}$
</div>
<div class="sigfig">
$R = 2.50~\Omega$<br>
$Q = 7200~\mathrm{C}$
</div>
</div>
</details>

