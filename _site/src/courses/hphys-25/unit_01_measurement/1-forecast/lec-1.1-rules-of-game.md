---
marp: true
theme: default
size: 16:9
paginate: true
header: 'Unit 1: Speaking the Same Language'
footer: 'Lecture 1.1: The Rules of the Game'
math: katex
---

<!-- _fragment_ -->
# Lecture 1.1: The Rules of the Game

_Just as cultures need to agree on the rules of language, scientists need shared rules for measurement to ensure everyone understands and trusts reported results._

---

<!-- _fragment_ -->
## Today's Essential Questions

- Why is it critical for scientists to have a shared system of units?
- What is the difference between accuracy and precision?
- How do significant figures help a scientist be "honest" about their measurements?
- What are the rules for using significant figures in calculations?

---

<!-- _fragment_ -->
## Connecting to Our Last Investigation

In our first Hexagon Lab, we saw how Eratosthenes used a shadow's angle and a distance to measure the Earth. The uncertainty in his distance measurement directly affected his final answer. Today, we'll learn the formal rules scientists use to handle this uncertainty and ensure their measurements are understood by everyone.

---

<!-- _fragment_ -->
## SI Units

**Definition:**  
Scientists use the Système International (SI) to avoid confusion and communicate measurements clearly.

 * **Analogy:**  
SI units are the "grammar" of science—everyone speaks the same language.

---

<!-- _fragment_ -->
## SI Base Units

**Definition:**  
The building blocks of measurement:  
* - Length: meter (m)  
* - Mass: kilogram (kg)  
* - Time: second (s)

---

<!-- _fragment_ -->
## SI Derived Units

**Definition:**  
Units like force, energy, and velocity are built from SI base units.

---

<!-- _fragment_ -->
## Accuracy

**Definition:**  
How close a measurement is to the true or accepted value.

* - **Analogy:**  
  Accuracy is hitting the bullseye. <!-- _fragment_ -->

---

## Precision

**Definition:**  
How close repeated measurements are to each other.

* - **Analogy:**  
  Precision is grouping arrows tightly, even if not on the bullseye. <!-- _fragment_ -->

---

## Accuracy vs. Precision

**Key Insight:**  
You can be precise without being accurate!

* How?
---

<!-- _fragment_ -->
## Significant Figures

**Definition:**  
All digits known with certainty plus one estimated digit.

* **Analogy:**  
Significant figures are your "honest estimate" of a measurement.

---

<!-- Inserted slides: counting rules + practice (moved here) -->

<!-- _fragment_ -->
## Counting Significant Figures — Rules & Examples

* - Rule 1 — Nonzero digits are always significant.  
  Example: 374 → 3 sig figs.
* - Rule 2 — Captive (sandwiched) zeros are significant.  
  Example: 4.02 → 3 sig figs.
* - Rule 3 — Leading zeros are not significant.  
  Example: 0.0045 → 2 sig figs.
* - Rule 4 — Trailing zeros are significant only if there is a decimal point.  
  Examples: 1500 → 2 sig figs (ambiguous); 15.00 → 4 sig figs; 1500. → 4 sig figs.

---
## Counting Significant Figures — Rules & Examples

- **Rule 5 — Exact counts or defined constants have infinitely many significant figures (treat as exact in calculations).**  
  Examples: There are exactly 12 inches in 1 foot; 3 apples; 1000 g in 1 kg. These have zero uncertainty, so they do not limit significant figures in calculations.
* Consider:
  1. Measured: Lab table length = 1.74 m (measurement, uncertainty ≈ ±0.01 m)  
   Defined/Exact: 1 m = 100 cm (exact unit conversion)

  2. Measured: Sample mass = 12.3 g (measured on a balance, has uncertainty)  
   Defined/Exact: 1000 g = 1 kg (exact)


---

<!-- _fragment_ -->
## Practice: Identify the Number of Significant Figures

1. 0.02030 → ____ sig figs
* 4 sig figs
2. 300 → ____ sig figs
* 1 sig fig
3. 3.0010 × 10^2 → ____ sig figs
* 5 sig figs

---

<!-- _fragment_ -->
## Why Significant Figures Matter

**Definition:**  
They tell the story of how precisely you measured.

* **Example:**  
If you measure a line as 8.72 cm, the '2' is your honest estimate. Writing "8.720" would be dishonest.

---

<!-- _fragment_ -->
## Calculations: Multiplication & Division

**Rule:**  
The answer has the same number of significant figures as the measurement with the fewest sig figs.

* **Formula Example:**  
$3.1415 \times 2.25 = 7.07$ (rounded to 3 sig figs)

---

<!-- _fragment_ -->
## Calculations: Addition & Subtraction

**Rule:**  
Round the answer to the same number of decimal places as the measurement with the fewest decimal places.

* **Formula Example:**  
$15.22 + 9.1 = 24.3$ (rounded to 1 decimal place)

---

<!-- _fragment_ -->
## Example: Area Calculation

A field measures **12.4 m** wide and **105.88 m** long.  
Area = length × width  
* $105.88\,m \times 12.4\,m = 1310\,m^2$ (rounded to 3 sig figs)

---

<!-- _fragment_ -->
## Example: Density Calculation

Mass: **30.25 g**  
Volume: **18.1 cm³**  
Density = mass / volume  
* $30.25\,g / 18.1\,cm^3 = 1.67\,g/cm^3$ (rounded to 3 sig figs)

---

<!-- _fragment_ -->
## Dimensional Analysis: Converting Units

**Definition:**  
Dimensional analysis (also called the factor-label method) uses conversion factors to change units while keeping the value the same.

* **How-To:**  
Multiply by fractions ("conversion factors") that equal 1, so units cancel and you end up with the desired unit.

---

**Examples:**

1. **Simple:**  
   Convert $5.0\ \mathrm{km}$ to meters.  
   $$
   \begin{aligned}
   5.0\ \mathrm{km}\times\frac{1000\ \mathrm{m}}{1\ \mathrm{km}} &= 5.0\times1000\ \mathrm{m} \\
   &= 5000\ \mathrm{m}
   \end{aligned}
   $$

---

2. **Intermediate:**  
   Convert $60\ \mathrm{km/h}$ to $\mathrm{m/s}$.  
   $$
   \begin{aligned}
   60\ \frac{\mathrm{km}}{\mathrm{h}}
   \times\frac{1000\ \mathrm{m}}{1\ \mathrm{km}}
   \times\frac{1\ \mathrm{h}}{3600\ \mathrm{s}}
   &= \frac{60\times1000}{3600}\ \frac{\mathrm{m}}{\mathrm{s}} \\
   &= 16.7\ \mathrm{m/s}
   \end{aligned}
   $$

---

3. **Multi-step:**  
   Convert $250\ \mathrm{cm^3}$ to $\mathrm{L}$.  
   $$
   \begin{aligned}
   250\ \mathrm{cm^3}\times\frac{1\ \mathrm{mL}}{1\ \mathrm{cm^3}}
   \times\frac{1\ \mathrm{L}}{1000\ \mathrm{mL}}
   &= 250\ \mathrm{mL}\times\frac{1\ \mathrm{L}}{1000\ \mathrm{mL}} \\
   &= 0.25\ \mathrm{L}
   \end{aligned}
   $$

---

4. **Complex:**  
   Convert $45\ \mathrm{g}$ to $\mathrm{lb}$ (given $1\ \mathrm{lb}=454\ \mathrm{g}$).  
   $$
   \begin{aligned}
   45\ \mathrm{g}\times\frac{1\ \mathrm{lb}}{454\ \mathrm{g}}
   &= \frac{45}{454}\ \mathrm{lb} \\
   &\approx 0.099\ \mathrm{lb}
   \end{aligned}
   $$

---


<!-- _fragment_ -->
## Thinking Lens: Scale, Proportion, and Quantity

How do consistent units and honest measurement help scientists compare, convert, and communicate quantities?

---

<!-- _fragment_ -->
## Summary: Answering Our Questions

- **Why is it critical for scientists to have a shared system of units?**  
  * - To ensure clear, global communication. <!-- _fragment_ -->
- **What is the difference between accuracy and precision?**  
  * - Accuracy is closeness to truth; precision is repeatability. <!-- _fragment_ -->
- **How do significant figures help a scientist be "honest"?**  
  * - They show the true precision of a measurement. <!-- _fragment_ -->
- **What are the rules for using significant figures in calculations?**  
  * - Use the fewest sig figs for multiplication/division; match decimal places for addition/subtraction. <!-- _fragment_ -->

---

<!-- _fragment_ -->
## Preparing for Our Next Task

In Problem Set 1.1: The Language of Measurement, you'll convert units, perform calculations, and report answers with the correct number of significant figures. The rules from today are your tools.

---