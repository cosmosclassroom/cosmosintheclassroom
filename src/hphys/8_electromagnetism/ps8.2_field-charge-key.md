---
layout: default
title: "PS 8.2 Electric Field and Charge"
author: Jonathan Corbett
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

# PS 8.2 | Electric Field and Charge

## Problems

Q1. A point charge of +3.0 μC is placed at the origin.  
(a) What is the magnitude and direction of the electric field 25 cm away from the charge along the x-axis?  
(b) Explain what the direction of the electric field tells you about the force a positive test charge would experience at that point.

<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>
$E = k \frac{|q|}{r^2}$
</div>

<div class="givens">
<b>Substitute values:</b><br>
$k = 8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}$<br>
$q = 3.0~\mu\mathrm{C} = 3.0 \times 10^{-6}~\mathrm{C}$<br>
$r = 25~\mathrm{cm} = 0.25~\mathrm{m}$
</div>

<div class="calculations">
(a) <br>
$E = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \frac{3.0 \times 10^{-6}~\mathrm{C}}{(0.25~\mathrm{m})^2}$<br>
$E = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \frac{3.0 \times 10^{-6}~\mathrm{C}}{0.0625~\mathrm{m}^2}$<br>
$E = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \times 4.8 \times 10^{-5}~\mathrm{\frac{C}{m^2}}$<br>
<div class="sigfig">
$E = 4.3 \times 10^5~\mathrm{N/C}$
</div>
<br>
<b>Direction:</b> Away from the charge along the x-axis.
</div>

</div>

(b) The electric field direction shows the force direction on a positive test charge: away from positive, toward negative.

Q2. Two charges, +2.0 μC and -2.0 μC, are placed 40 cm apart on the x-axis.  
(a) Calculate the net electric field at a point exactly midway between them.  
(b) If both charges were positive, how would the direction and magnitude of the net electric field at the midpoint change? Explain.

<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>
$E = k \frac{|q|}{r^2}$<br>
$E_{net} = E_1 + E_2$ (vector sum)
</div>

<div class="givens">
<b>At midpoint:</b><br>
Distance from each charge: $r = 0.20~\mathrm{m}$<br>
$k = 8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}$<br>
$q_1 = +2.0~\mu\mathrm{C} = 2.0 \times 10^{-6}~\mathrm{C}$<br>
$q_2 = -2.0~\mu\mathrm{C} = -2.0 \times 10^{-6}~\mathrm{C}$
</div>

<div class="calculations">
(a) <br>
$E_1 = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \frac{2.0 \times 10^{-6}~\mathrm{C}}{(0.20~\mathrm{m})^2}$<br>
$E_1 = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \frac{2.0 \times 10^{-6}~\mathrm{C}}{0.04~\mathrm{m}^2}$<br>
$E_1 = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \times 5.0 \times 10^{-5}~\mathrm{\frac{C}{m^2}}$<br>
<div class="sigfig">
$E_1 = 4.5 \times 10^5~\mathrm{N/C}$
</div>
<br>
$E_2 = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \frac{2.0 \times 10^{-6}~\mathrm{C}}{0.04~\mathrm{m}^2} = 4.5 \times 10^5~\mathrm{N/C}$ (opposite direction)<br>
Since the fields are equal and opposite, 
<div class="sigfig">
$E_{net} = 0~\mathrm{N/C}$
</div>
</div>

</div>

(b) If both charges were positive, the fields would add at the midpoint, pointing away from each charge, resulting in a nonzero field.

Q3. Three point charges are arranged at the corners of an equilateral triangle (side 0.50 m): +4.0 μC at A, +4.0 μC at B, and -4.0 μC at C.  
(a) Find the magnitude and direction of the net electric field at the center of the triangle.  
(b) Why does the symmetry of the arrangement affect the direction of the net electric field at the center?

<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>
$E = k \frac{|q|}{r^2}$
</div>

<div class="givens">
<b>Distance from center to vertex:</b><br>
$r = \frac{a}{\sqrt{3}} = \frac{0.50~\mathrm{m}}{\sqrt{3}} = 0.289~\mathrm{m}$<br>
$k = 8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}$<br>
$q = 4.0~\mu\mathrm{C} = 4.0 \times 10^{-6}~\mathrm{C}$
</div>

<div class="calculations">
(a) <br>
$E_{vertex} = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \frac{4.0 \times 10^{-6}~\mathrm{C}}{(0.289~\mathrm{m})^2}$<br>
$E_{vertex} = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \frac{4.0 \times 10^{-6}~\mathrm{C}}{0.0835~\mathrm{m}^2}$<br>
$E_{vertex} = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \times 4.79 \times 10^{-5}~\mathrm{\frac{C}{m^2}}$<br>
<div class="sigfig">
$E_{vertex} = 4.3 \times 10^5~\mathrm{N/C}$
</div>
<br>
By symmetry, the two positive charges' fields partially cancel, and the net field points toward the negative charge. The total field is 
<div class="sigfig">
$8.0 \times 10^5~\mathrm{N/C}$
</div>
toward the negative charge.
</div>

</div>

(b) The symmetry means the fields from the positive charges partially cancel, so the net field points toward the negative charge.

Q4. A charge of -6.0 μC is located 30 cm from a point P.  
(a) What is the electric potential at point P due to this charge?  
(b) How much work is required to bring a +1.0 μC charge from infinity to point P?  
(c) Is electric potential a vector or a scalar? How does this affect how you combine potentials from multiple charges?

<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>
$V = k \frac{q}{r}$<br>
$PE = qV$
</div>

<div class="givens">
$k = 8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}$<br>
$q = -6.0~\mu\mathrm{C} = -6.0 \times 10^{-6}~\mathrm{C}$<br>
$r = 0.30~\mathrm{m}$
</div>

<div class="calculations">
(a) <br>
$V = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \frac{-6.0 \times 10^{-6}~\mathrm{C}}{0.30~\mathrm{m}}$<br>
$V = (8.99 \times 10^9~\mathrm{\frac{N \cdot m^2}{C^2}}) \times -2.0 \times 10^{-5}~\mathrm{V}$<br>
<div class="sigfig">
$V = -1.8 \times 10^5~\mathrm{V}$
</div>
<br>
(b)<br>
$PE = (1.0 \times 10^{-6}~\mathrm{C}) \times (-1.8 \times 10^5~\mathrm{V}) = $
<div class="sigfig">
$-0.18~\mathrm{J}$
</div>
</div>

</div>

(c) Electric potential is a scalar, so potentials from multiple charges are added algebraically (not as vectors).

Q5. A parallel plate capacitor has a capacitance of 8.0 μF and is charged to a potential difference of 15 V.  
(a) Calculate the energy stored in the capacitor.  
(b) What happens to the energy stored in a capacitor if the voltage is doubled? Explain why.

<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>
$U = \frac{1}{2}CV^2$
</div>

<div class="givens">
$C = 8.0~\mu\mathrm{F} = 8.0 \times 10^{-6}~\mathrm{F}$<br>
$V = 15~\mathrm{V}$
</div>

<div class="calculations">
(a) <br>
$U = \frac{1}{2}(8.0 \times 10^{-6}~\mathrm{F})(15~\mathrm{V})^2$<br>
$U = 0.5 \times 8.0 \times 10^{-6}~\mathrm{F} \times 225~\mathrm{V}^2$<br>
$U = 4.0 \times 10^{-6}~\mathrm{F} \times 225~\mathrm{V}^2$<br>
$U = 9.0 \times 10^{-4}~\mathrm{J}$
</div>

</div>

(b) If voltage is doubled, stored energy increases by a factor of four (since $U \propto V^2$).

Q6. The plates of a parallel plate capacitor are moved farther apart while keeping the charge constant.  
(a) Using the formula $U = \frac{1}{2}\frac{Q^2}{C}$, explain what happens to the energy stored in the capacitor as the plates are moved farther apart (with $Q$ constant). Show your reasoning.  
(b) Why does the electric field between the plates remain constant even as the plates are moved apart (with constant charge)?

<div class="solution-grid">

<div class="parent-formula">
<b>Parent formula:</b><br>
$E = \frac{\sigma}{\epsilon_0}$ (for ideal plates, $E$ depends only on charge and area)<br>
$V = \frac{Q}{C}$<br>
$U = \frac{1}{2}\frac{Q^2}{C}$
</div>

<div class="calculations">
(a) <br>
As the plates are moved apart (with $Q$ constant):<br>
- $E$ remains constant (depends only on charge and area)<br>
- $C$ decreases (capacitance decreases as distance increases)<br>
- $V$ increases (since $V = Q/C$ and $C$ decreases)<br>
- $U$ increases (since $U = \frac{1}{2}\frac{Q^2}{C}$ and $C$ decreases)
</div>

</div>

(b) The field depends only on charge and plate area, not separation (for ideal parallel plates).

Q7. Sketch the electric field lines and equipotential surfaces for a system of two equal but opposite charges separated by a small distance (an electric dipole).  
(a) Describe the pattern and explain the relationship between field lines and equipotentials.  
(b) How would the field pattern change if both charges were positive?

<div class="solution-grid">
(a) <br>
Field lines emerge from the positive charge and enter the negative charge; equipotentials are perpendicular to field lines and crowd near the charges.<br>
<img src="https://raw.githubusercontent.com/cosmosclassroom/cosmosintheclassroom/main/assets/images/8_electromagnetism/electric dipole.png" alt="Electric Dipole">
<br><br>
(b)<br>
If both charges were positive, field lines would repel and not connect between charges.<br>
<img src="https://raw.githubusercontent.com/cosmosclassroom/cosmosintheclassroom/main/assets/images/8_electromagnetism/dipole-positive.png" alt="Positive Dipole">
</div>

<p>
<b>Conceptual explanation:</b> The field lines show the direction a positive test charge would move. Equipotentials are always perpendicular to field lines. For two positive charges, the field lines repel and do not connect, and equipotentials are distorted accordingly.
</p>

Q8. A small test charge is placed near a large, positively charged *conducting* sphere.  
(a) Describe and explain the direction of the electric field and the force experienced by the test charge both outside and inside the sphere.  
(b) Why is the electric field inside a conductor zero in electrostatic equilibrium?

<div class="solution-grid">

<div class="calculations">
(a) <br>
<b>Outside:</b> The electric field points radially outward from the surface of the sphere. The force on a positive test charge is also radially outward (repulsive).<br>
<b>Inside:</b> The electric field is zero, so the force on the test charge is zero.
</div>

</div>

(b) The field inside a conductor is zero because charges redistribute to cancel any internal field.

<p>
<b>Conceptual explanation:</b> In electrostatic equilibrium, any excess charge on a conductor resides on its surface, and the charges arrange themselves so that the electric field inside is zero. This is why a test charge inside a conductor feels no force.
</p>
