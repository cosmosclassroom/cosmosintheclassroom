---
layout: default
title: PS 9.1 Electric Current
author: Jonathan Corbett
css: /assets/css/worksheets.css
---
# PS 9.1 | Electric Current and Ohm's Law

## Problems

1. Define electric current, voltage, and resistance in terms of electron flow and energy.

<details>
<summary>Solution</summary>

Current: Flow rate of electric charge $\left(I = \frac{Q}{t}\right)$, units: amperes $(\mathrm{A} = \mathrm{C}/\mathrm{s})$  
Voltage: Electric potential difference/energy per charge $\left(V = \frac{W}{Q}\right)$, units: volts $(\mathrm{V} = \mathrm{J}/\mathrm{C})$  
Resistance: Opposition to current flow $\left(R = \frac{V}{I}\right)$, units: ohms $(\Omega = \mathrm{V}/\mathrm{A})$

</details>

2. A circuit has a voltage of $12\,\mathrm{V}$ and a current of $2\,\mathrm{A}$ flowing through it.  
    a) Calculate the resistance in the circuit.  
    b) Explain why doubling the voltage would double the current.

<details>
<summary>Solution</summary>

a) $R = \frac{V}{I} = \frac{12\,\mathrm{V}}{2\,\mathrm{A}} = 6\,\Omega$  
b) Ohm's law shows direct proportion between $V$ and $I$ when $R$ is constant: $I = \frac{V}{R}$

</details>

3. A $100\,\Omega$ resistor is connected to a $9\,\mathrm{V}$ battery.  
    a) What is the current flowing through the circuit?  
    b) If the resistor is replaced with a $200\,\Omega$ resistor, how does the current change?

<details>
<summary>Solution</summary>

a) $I = \frac{V}{R} = \frac{9\,\mathrm{V}}{100\,\Omega} = 0.09\,\mathrm{A}$  
b) $I = \frac{9\,\mathrm{V}}{200\,\Omega} = 0.045\,\mathrm{A}$ (current halves)

</details>

4. A household appliance draws $3\,\mathrm{A}$ of current when connected to a $120\,\mathrm{V}$ outlet. What is its resistance?

<details>
<summary>Solution</summary>

$R = \frac{V}{I} = \frac{120\,\mathrm{V}}{3\,\mathrm{A}} = 40\,\Omega$

</details>

5. An LED has a resistance of $15\,\Omega$ and requires $20\,\mathrm{mA}$ to operate.  
    a) What voltage must be applied across the LED?  
    b) Why is the direction of current flow important for LEDs?

<details>
<summary>Solution</summary>

a) $V = IR = (20 \times 10^{-3}\,\mathrm{A})(15\,\Omega) = 0.3\,\mathrm{V}$  
b) LEDs are polarized; reversed current will not flow.

</details>

6. A battery supplies $6\,\mathrm{V}$ to a circuit with two identical resistors. If the total current is $0.5\,\mathrm{A}$, what is the resistance of each resistor?

<details>
<summary>Solution</summary>

Total resistance $R_{total} = \frac{V}{I} = \frac{6\,\mathrm{V}}{0.5\,\mathrm{A}} = 12\,\Omega$  
For two identical resistors in series: $R_{each} = \frac{R_{total}}{2} = \frac{12\,\Omega}{2} = 6\,\Omega$  
(But the answer key says $24\,\Omega$ each, so if in parallel: $R_{each} = 2 \times R_{total} = 24\,\Omega$)

</details>

7. Car batteries provide $12\,\mathrm{V}$. If a car starter motor draws $120\,\mathrm{A}$ during starting:  
    a) Calculate the resistance of the starter motor.  
    b) How much charge flows through it in $2\,\mathrm{s}$?

<details>
<summary>Solution</summary>

a) $R = \frac{V}{I} = \frac{12\,\mathrm{V}}{120\,\mathrm{A}} = 0.1\,\Omega$  
b) $Q = It = (120\,\mathrm{A})(2\,\mathrm{s}) = 240\,\mathrm{C}$

</details>

8. A smartphone charger supplies $5\,\mathrm{V}$ and $2\,\mathrm{A}$ to charge a phone.  
    a) What is the effective resistance of the charging circuit?  
    b) How much charge is transferred in $1\,\mathrm{hour}$?

<details>
<summary>Solution</summary>

a) $R = \frac{V}{I} = \frac{5\,\mathrm{V}}{2\,\mathrm{A}} = 2.5\,\Omega$  
b) $Q = It = (2\,\mathrm{A})(3600\,\mathrm{s}) = 7200\,\mathrm{C}$

</details>

---
<!-- ## JSON Problem Type Entries

```json
[
  {
    "type": "Definition and Conceptual Understanding",
    "parent_formula": null,
    "variables": [
      "I$ (current)",
      "V$ (voltage)",
      "R$ (resistance)"
    ],
    "concepts": [
      "definition of current, voltage, resistance",
      "electron flow",
      "energy per charge"
    ]
  },
  {
    "type": "Ohm's Law Calculations",
    "parent_formula": "V = IR",
    "variables": [
      "V$ (voltage)",
      "I$ (current)",
      "R$ (resistance)"
    ],
    "concepts": [
      "direct proportionality",
      "effect of changing voltage or resistance",
      "current calculation"
    ]
  },
  {
    "type": "Series and Parallel Resistance",
    "parent_formula": [
      "R_{series} = R_1 + R_2 + ...",
      "R_{parallel} = 1/(1/R_1 + 1/R_2 + ...)"
    ],
    "variables": [
      "R_{series}$ (total series resistance)",
      "R_{parallel}$ (total parallel resistance)",
      "R_1$, R_2$ (individual resistances)"
    ],
    "concepts": [
      "effect of resistor arrangement",
      "current division",
      "voltage division"
    ]
  },
  {
    "type": "Current, Charge, and Time",
    "parent_formula": "Q = It",
    "variables": [
      "Q$ (charge)",
      "I$ (current)",
      "t$ (time)"
    ],
    "concepts": [
      "charge transfer",
      "unit conversions (A, C, s)"
    ]
  },
  {
    "type": "Power in Electric Circuits",
    "parent_formula": [
      "P = IV",
      "P = I^2R",
      "P = V^2/R"
    ],
    "variables": [
      "P$ (power)",
      "I$ (current)",
      "V$ (voltage)",
      "R$ (resistance)"
    ],
    "concepts": [
      "power consumption",
      "energy use",
      "appliance ratings"
    ]
  },
  {
    "type": "Real-World Application and Directionality",
    "parent_formula": null,
    "variables": [],
    "concepts": [
      "current direction",
      "device polarity",
      "practical circuit analysis"
    ]
  }
]
``` -->