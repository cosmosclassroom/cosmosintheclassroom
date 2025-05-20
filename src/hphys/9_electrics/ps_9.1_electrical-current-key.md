---
layout: default
title: PS 9.1 Electric Current Key
author: Jonathan Corbett
css: /assets/css/solutions.css
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
  grid-column: 1;
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
### Student Solution Key

---

## Solutions

1. **Conceptual Explanation:**

- Electric current ($I$): rate of charge flow through a conductor.<br>
- Voltage ($V$): electric potential difference or "pressure" driving the current.<br>
- Resistance ($R$): opposition to current flow in the conductor.
- Units: $I$ (A = C/s), $V$ (V = J/C), $R$ ($\Omega$ = V/A)

2. a) Calculate the resistance in the circuit.<br>
   b) Explain why doubling the voltage would double the current.
<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>

$V = IR$ (Ohm's Law)
</div>
<div class="givens">

$V = 230~\text{V}$<br>
$I = 1.75~\text{A}$
</div>
<div class="calculations">

a) $R = \frac{V}{I}$<br>
$R = \frac{230}{1.75}$<br>
$R = 131~\Omega$<br>
</div>
<div class="sigfig">

$R = 131~\Omega$
</div>
</div>

- b) Ohm's Law: $I = \frac{V}{R}$. If $R$ is constant, doubling $V$ doubles $I$.

3. a) What is the current flowing through the circuit?<br>
   b) If the resistor is replaced with a $1.00~\text{k}\Omega$ resistor, how does the current change?
<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>
$I = \frac{V}{R}$ (Ohm's Law)
</div>
<div class="givens">

$V = 9.00~\text{V}$<br>
$R_1 = 470~\Omega$<br>
$R_2 = 1.00~\text{k}\Omega$
</div>
<div class="calculations">

a) $I_1 = \frac{9.00}{470}$<br>
$I_1 = 0.0191~\text{A}$<br>
b) $I_2 = \frac{9.00}{1000}$<br>
$I_2 = 0.00900~\text{A}$<br>
Current decreases as resistance increases.
</div>
<div class="sigfig">

$I_1 = 0.0191~\text{A}$<br>
$I_2 = 0.00900~\text{A}$
</div>
</div>

4. What is the resistance of a microwave drawing $12.5~\text{A}$ at $120~\text{V}$?
<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>
$R = \frac{V}{I}$ (Ohm's Law)
</div>
<div class="givens">

$V = 120~\text{V}$<br>
$I = 12.5~\text{A}$
</div>
<div class="calculations">

$R = \frac{V}{I}$<br>
$R = \frac{120}{12.5}$<br>
$R = 9.60~\Omega$
</div>
<div class="sigfig">

$R = 9.60~\Omega$
</div>
</div>

5. a) What voltage must be applied across a $33.0~\Omega$ LED requiring $15.0~\text{mA}$?<br>
   b) Why is the direction of current flow important for LEDs?
<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>
$V = IR$ (Ohm's Law)
</div>
<div class="givens">

$R = 33.0~\Omega$<br>
$I = 15.0~\text{mA} = 0.0150~\text{A}$
</div>
<div class="calculations">

a) $V = IR$<br>
$V = (0.0150)(33.0)$<br>
$V = 0.495~\text{V}$<br>
b) LEDs only allow current flow in one direction due to their semiconductor properties. Reverse current can damage the device.
</div>
<div class="sigfig">

$V = 0.495~\text{V}$
</div>
</div>

6. A battery supplies $24.0~\text{V}$ to a circuit with two identical resistors. If the total current is $0.800~\text{A}$, what is the resistance of each resistor?
<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>
$R_{total} = \frac{V}{I}$<br>
$R_{series} = R_1 + R_2$<br>
$\frac{1}{R_{parallel}} = \frac{1}{R_1} + \frac{1}{R_2}$
</div>
<div class="givens">

$V = 24.0~\text{V}$<br>
$I = 0.800~\text{A}$
</div>
<div class="calculations">

$R_{total} = \frac{V}{I}$<br>
$R_{total} = 30.0~\Omega$<br>
If series: $R_{each} = 15.0~\Omega$<br>
If parallel: $R_{each} = 60.0~\Omega$
</div>
<div class="sigfig">

$R_{total} = 30.0~\Omega$<br>
$R_{each,series} = 15.0~\Omega$<br>
$R_{each,parallel} = 60.0~\Omega$
</div>
</div>

7. a) Calculate the resistance of a car starter motor ($12.6~\text{V}$, $185~\text{A}$).<br>
   b) How much charge flows through it in $3.00~\text{s}$?
<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>
$R = \frac{V}{I}$<br>
$Q = I \times t$
</div>
<div class="givens">

$V = 12.6~\text{V}$<br>
$I = 185~\text{A}$<br>
$t = 3.00~\text{s}$
</div>
<div class="calculations">
a) $R = \frac{V}{I}$<br>
$R = \frac{12.6}{185}$<br>
$R = 0.0681~\Omega$<br>
b) $Q = It$<br>
$Q = (185)(3.00)$<br>
$Q = 555~\text{C}$
</div>
<div class="sigfig">

$R = 0.0681~\Omega$<br>
$Q = 555~\text{C}$
</div>
</div>

8. a) What is the effective resistance of a laptop charging circuit ($19.5~\text{V}$, $3.33~\text{A}$)?<br>
   b) How much charge is transferred in $2.00~\text{hours}$?
<div class="solution-grid">
<div class="parent-formula">
<b>Parent formula:</b><br>
$R = \frac{V}{I}$<br>
$Q = I \times t$
</div>
<div class="givens">

$V = 19.5~\text{V}$<br>
$I = 3.33~\text{A}$<br>
$t = 2.00~\text{hr} = 7200~\text{s}$
</div>
<div class="calculations">
a) $R = \frac{V}{I}$<br>
$R = \frac{19.5}{3.33}$<br>
$R = 5.86~\Omega$<br>
b) $Q = It$<br>
$Q = (3.33)(7200)$<br>
$Q = 24000~\text{C}$
</div>
<div class="sigfig">

$R = 5.86~\Omega$<br>
$Q = 24000~\text{C}$
</div>
</div>

