---
layout: default
title: PS 9.3 Electrical Power
author: Jonathan Corbett
css: /assets/css/worksheets.css
---

# PS 9.3 | Electrical Power

**Formulas:**
- Power: $P = IV$
- Power (resistor): $P = I^2R$, $P = \frac{V^2}{R}$
- Energy: $E = Pt$
- Cost: $\text{Cost} = \text{Energy (kWh)} \times \text{rate}$
- Efficiency: $\text{Efficiency} = \frac{\text{Output Power}}{\text{Input Power}} \times 100\%$

## Problems

1. Define electrical power and its unit.  
   **Conceptual:** Why is power an important quantity in electrical systems?

<details>
<summary>Solution</summary>

**Definition:**  
Electrical power is the rate at which electrical energy is transferred or converted.  
**Unit:** The SI unit of power is the watt ($\mathrm{W}$), where $1~\mathrm{W} = 1~\mathrm{J/s}$.

**Conceptual:**  
Power tells us how quickly energy is used or supplied. High-power devices use energy faster, which affects efficiency, safety, and cost.

</details>

2. A device operates at $24\,\mathrm{V}$ and draws $3.0\,\mathrm{A}$ of current. Calculate the power consumed.  
   **Conceptual:** What happens to the power if the current is doubled?

<details>
<summary>Solution</summary>

**Parent formula:**  
$P = IV$

**Substitute values:**  
$P = (24~\mathrm{V})(3.0~\mathrm{A}) = 72~\mathrm{W}$

**Conceptual:**  
If current doubles ($I = 6.0~\mathrm{A}$), $P = (24~\mathrm{V})(6.0~\mathrm{A}) = 144~\mathrm{W}$, so power also doubles.

</details>

3. A $10\,\Omega$ resistor has a current of $2.0\,\mathrm{A}$ flowing through it.  
a) Calculate the power dissipated using $P = I^2R$.  
b) Calculate the power using $P = \frac{V^2}{R}$ if the voltage across the resistor is $20\,\mathrm{V}$.  
**Conceptual:** Why do both formulas give the same result?

<details>
<summary>Solution</summary>

a) **Parent formula:** $P = I^2R$  
$P = (2.0~\mathrm{A})^2 \times 10~\Omega = 4.0 \times 10 = 40~\mathrm{W}$

b) **Parent formula:** $P = \frac{V^2}{R}$  
$P = \frac{(20~\mathrm{V})^2}{10~\Omega} = \frac{400}{10} = 40~\mathrm{W}$

**Conceptual:**  
Both formulas are derived from Ohm's Law ($V = IR$), so they are equivalent for resistors.

</details>

4. A $60\,\mathrm{W}$ light bulb is left on for $8$ hours.  
a) How much energy does it use in joules?  
b) How much in kilowatt-hours?  
**Conceptual:** Why do electric companies bill in kilowatt-hours?

<details>
<summary>Solution</summary>

a) **Parent formula:** $E = Pt$  
$t = 8~\mathrm{h} = 8 \times 3600~\mathrm{s} = 28,800~\mathrm{s}$  
$E = 60~\mathrm{W} \times 28,800~\mathrm{s} = 1,728,000~\mathrm{J}$

b) $E = 60~\mathrm{W} \times 8~\mathrm{h} = 480~\mathrm{Wh} = 0.48~\mathrm{kWh$

**Conceptual:**  
Kilowatt-hours are a convenient unit for large amounts of energy used over time, matching household consumption.

</details>

5. An electric heater rated at $1500\,\mathrm{W}$ runs for $5$ hours each day for a month ($30$ days). If electricity costs $0.12$ per kWh, what is the monthly cost to run the heater?  
**Conceptual:** How can you reduce the cost of running the heater?

<details>
<summary>Solution</summary>

**Parent formula:**  
$\text{Energy} = P \times t$  
$\text{Cost} = \text{Energy (kWh)} \times \text{rate}$

Total hours: $5~\mathrm{h/day} \times 30~\mathrm{days} = 150~\mathrm{h}$  
Energy: $E = 1.5~\mathrm{kW} \times 150~\mathrm{h} = 225~\mathrm{kWh}$  
Cost: $225~\mathrm{kWh} \times \$0.12/\mathrm{kWh} = \$27.00$

**Conceptual:**  
Reduce cost by using the heater fewer hours, lowering the power setting, or improving insulation.

</details>

6. Explain the difference between AC and DC power.  
**Calculation:** If a $120\,\mathrm{V}$ RMS AC source supplies $5.0\,\mathrm{A}$ to a device, what is the average power delivered?

<details>
<summary>Solution</summary>

**Conceptual:**  
- **DC (Direct Current):** Current flows in one direction (e.g., batteries).
- **AC (Alternating Current):** Current reverses direction periodically (e.g., household outlets).

**Calculation:**  
**Parent formula:** $P = IV$ (for AC, use RMS values)  
$P = (120~\mathrm{V})(5.0~\mathrm{A}) = 600~\mathrm{W}$

</details>

7. A fuse in a circuit is rated for $2.0\,\mathrm{A}$. The circuit operates at $120\,\mathrm{V}$.  
a) What is the maximum power the circuit can safely use?  
**Conceptual:** How does a fuse protect the circuit?

<details>
<summary>Solution</summary>

a) **Parent formula:** $P = IV$  
$P_{max} = (2.0~\mathrm{A})(120~\mathrm{V}) = 240~\mathrm{W}$

**Conceptual:**  
A fuse melts and breaks the circuit if current exceeds its rating, preventing overheating and fire.

</details>

8. A device has an input power of $200\,\mathrm{W}$ and an output power of $150\,\mathrm{W}$.  
a) Calculate its efficiency.  
**Conceptual:** What happens to the "lost" power?

<details>
<summary>Solution</summary>

a) **Parent formula:** $\text{Efficiency} = \frac{\text{Output Power}}{\text{Input Power}} \times 100\%$  
$\text{Efficiency} = \frac{150~\mathrm{W}}{200~\mathrm{W}} \times 100\% = 75\%$

**Conceptual:**  
The lost power is converted to heat, sound, or other non-useful forms.

</details>

9. Power lines transmit $500,000\,\mathrm{W}$ of power at $10,000\,\mathrm{V}$.  
a) What is the current in the lines?  
b) If the voltage is doubled, what happens to the current?  
**Conceptual:** Why are high voltages used for power transmission?

<details>
<summary>Solution</summary>

a) **Parent formula:** $P = IV \implies I = \frac{P}{V}$  
$I = \frac{500,000~\mathrm{W}}{10,000~\mathrm{V}} = 50~\mathrm{A}$

b) If $V = 20,000~\mathrm{V}$, $I = \frac{500,000~\mathrm{W}}{20,000~\mathrm{V}} = 25~\mathrm{A}$

**Conceptual:**  
High voltage reduces current, minimizing energy lost as heat ($P_{loss} = I^2R$) in transmission lines.

</details>

10. A microwave oven is rated at $1200\,\mathrm{W}$ and operates on $120\,\mathrm{V}$.  
a) What is the current drawn by the oven?  
b) How much energy does it use in $10$ minutes?  
**Conceptual:** Why is it important to match appliance ratings to circuit capacity?

<details>
<summary>Solution</summary>

a) **Parent formula:** $I = \frac{P}{V}$  
$I = \frac{1200~\mathrm{W}}{120~\mathrm{V}} = 10~\mathrm{A}$

b) **Parent formula:** $E = Pt$  
$t = 10~\mathrm{min} = 600~\mathrm{s}$  
$E = 1200~\mathrm{W} \times 600~\mathrm{s} = 720,000~\mathrm{J}$

**Conceptual:**  
If an appliance draws more current than the circuit can handle, it can cause overheating or trip the breaker.

</details>

---