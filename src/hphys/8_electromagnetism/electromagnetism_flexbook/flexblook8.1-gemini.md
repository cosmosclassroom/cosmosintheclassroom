---
layout: default
title: 11.1 Charge, Coulomb's Law, and Electric Fields
author: Jonathan Corbett and Claude 3.7 Sonnet
---
# Chapter 11: Electrostatics

## 11.1 Electric Charge, Coulomb's Law, and Electric Fields

Have you ever felt a static shock after walking across a carpet, or seen your hair stand on end after rubbing a balloon against it? These are everyday examples of a fundamental property of matter: electric charge. Charge is the source of electric forces, which are responsible for holding atoms and molecules together and powering everything from lightning strikes to your electronic devices. In this section, we will explore the nature of electric charge, the law that describes the force between charges, and the concept of an electric field.

### Electric Charge

Electric charge is an intrinsic property of fundamental particles, much like mass. There are two types of electric charge: positive and negative. By convention, electrons carry a negative charge, and protons carry a positive charge. Neutrons, as their name suggests, are electrically neutral.

Matter is typically electrically neutral, meaning it contains equal amounts of positive and negative charge. Objects become charged when there is an imbalance of protons and electrons. An object with an excess of electrons has a net negative charge, while an object with a deficiency of electrons has a net positive charge.

A key principle is the **conservation of charge**: the total electric charge in an isolated system remains constant. Charge can be transferred between objects, but it cannot be created or destroyed.

Another fundamental property is the **quantization of charge**: electric charge exists in discrete packets. The smallest unit of charge is the magnitude of the charge of an electron or proton, denoted by $e$. Its value is approximately:

$$e \approx 1.602 \times 10^{-19} \text{ C}$$

Where C stands for Coulombs, the SI unit of charge. Any observed electric charge is an integer multiple of this elementary charge ($q = ne$, where $n$ is an integer).

Like charges repel each other, and opposite charges attract each other. This fundamental interaction is described by Coulomb's Law.

### Coulomb's Law

Coulomb's Law quantifies the electric force between two point charges. A point charge is an idealized charge located at a single point in space. The force is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them. The force acts along the line connecting the two charges.

Mathematically, the magnitude of the electric force ($F$) between two point charges ($q_1$ and $q_2$) separated by a distance ($r$) is given by:

$$F = k \frac{|q_1 q_2|}{r^2}$$

Where:
- $F$ is the magnitude of the electric force (N)
- $|q_1|$ and $|q_2|$ are the magnitudes of the charges (C)
- $r$ is the distance between the charges (m)
- $k$ is Coulomb's constant, approximately $8.9875 \times 10^9 \text{ N} \cdot \text{m}^2/\text{C}^2$.

Coulomb's constant $k$ is often expressed in terms of the permittivity of free space ($\epsilon_0$):

$$k = \frac{1}{4 \pi \epsilon_0}$$

Where $\epsilon_0 \approx 8.854 \times 10^{-12} \text{ C}^2/\text{N} \cdot \text{m}^2$.

If the charges have the same sign (both positive or both negative), the force is repulsive. If they have opposite signs, the force is attractive. When dealing with the force as a vector ($\vec{F}$), the signs of the charges determine the direction of the force. For instance, the force exerted by $q_1$ on $q_2$ is given by:

$$\vec{F}_{12} = k \frac{q_1 q_2}{r^2} \hat{r}_{12}$$

Where $\hat{r}_{12}$ is a unit vector pointing from $q_1$ to $q_2$. If $q_1 q_2 > 0$, the force is in the direction of $\hat{r}_{12}$ (repulsive). If $q_1 q_2 < 0$, the force is in the opposite direction of $\hat{r}_{12}$ (attractive).

For a system of multiple charges, the net force on any single charge is the vector sum of the forces exerted by all the other charges (principle of superposition).

### Electric Fields

Instead of thinking of charges exerting forces on each other directly, it is often more useful to introduce the concept of an electric field. An electric field is a region of space around a charge or a distribution of charges where an electric force would be exerted on another charge placed in that region. The electric field is a vector quantity.

The electric field ($\vec{E}$) at a point in space is defined as the electric force ($\vec{F}$) experienced by a small positive test charge ($q_0$) placed at that point, divided by the magnitude of the test charge:

$$\vec{E} = \frac{\vec{F}}{q_0}$$

The units of the electric field are Newtons per Coulomb (N/C). The direction of the electric field at a point is the direction of the force that would be exerted on a positive test charge placed there.

For a single point charge ($q$), the magnitude of the electric field at a distance ($r$) from the charge is given by:

$$E = k \frac{|q|}{r^2}$$

The direction of the electric field is radially outward from a positive point charge and radially inward towards a negative point charge.

Similar to forces, the electric field due to a distribution of charges is the vector sum of the electric fields produced by each individual charge (principle of superposition). This makes calculating fields around complex charge configurations possible.

Visualizing electric fields is often done using electric field lines. These lines originate from positive charges, terminate on negative charges, and their density indicates the strength of the field (closer lines mean a stronger field). The direction of the field at any point is tangent to the field line at that point.

## 11.2 Practice Problems: Charge, Coulomb's Law, and Electric Fields

Now let's apply these concepts to solve some problems.

### Problem Set 11.1: Electric Charge

1.  How many excess electrons are on an object that has a net charge of -5.0 nC (nanocoulombs)?
2.  A balloon is rubbed against wool, acquiring a charge of +1.2 $\mu$C (microcoulombs). How many electrons were removed from the balloon?
3.  If two identical spheres are charged, one with +3.0 pC (picocoulombs) and the other with -1.5 pC, and they touch each other and are then separated, what is the final charge on each sphere?
4.  A nucleus has a charge of $+4e$. What is this charge in Coulombs?
5.  An object has a charge of $3.2 \times 10^{-18}$ C. Is it possible for an object to have this charge? Explain why or why not.

### Problem Set 11.2: Coulomb's Law

1.  Calculate the magnitude of the electric force between two point charges of +2.0 $\mu$C and -3.0 $\mu$C placed 0.50 m apart.
2.  Two protons are separated by a distance of $1.0 \times 10^{-10}$ m (a typical atomic distance). Calculate the magnitude of the electric force between them.
3.  An electron is placed 0.10 nm ($1.0 \times 10^{-10}$ m) from a proton. Calculate the magnitude of the electric force between them. Is it attractive or repulsive?
4.  Three charges are arranged along a straight line. Charge $q_1 = +1.0 \mu$C is at the origin, $q_2 = -2.0 \mu$C is at $x = 0.50$ m, and $q_3 = +3.0 \mu$C is at $x = 1.0$ m. Calculate the net electric force on $q_2$.
5.  Two charges, $q_A = +5.0$ nC and $q_B = -8.0$ nC, are placed at two corners of an equilateral triangle with sides of 0.20 m. A third charge $q_C = +6.0$ nC is placed at the third corner. Calculate the magnitude of the net electric force on $q_C$.

### Problem Set 11.3: Electric Fields

1.  Calculate the magnitude of the electric field at a point 0.25 m away from a point charge of $+4.0 \mu$C.
2.  What is the magnitude and direction of the electric field at a point 0.10 m to the left of a point charge of -5.0 nC?
3.  A point charge of +3.0 nC is placed in an electric field of $100$ N/C directed to the right. What is the magnitude and direction of the electric force on the charge?
4.  Two point charges, $q_1 = +2.0$ nC and $q_2 = -2.0$ nC, are separated by a distance of 0.10 m. Calculate the electric field at the midpoint between the two charges.
5.  A uniform electric field of magnitude 500 N/C is directed along the positive x-axis. What is the force on an electron placed in this field?

### Answers to Selected Problems:

11.1.1. Number of electrons = $\frac{-5.0 \times 10^{-9} \text{ C}}{-1.602 \times 10^{-19} \text{ C/electron}} \approx 3.12 \times 10^{10}$ electrons.

11.2.1. $F = k \frac{|q_1 q_2|}{r^2} = (8.9875 \times 10^9) \frac{|(2.0 \times 10^{-6})(-3.0 \times 10^{-6})|}{(0.50)^2} \approx 0.216 \text{ N}$.

11.3.1. $E = k \frac{|q|}{r^2} = (8.9875 \times 10^9) \frac{|4.0 \times 10^{-6}|}{(0.25)^2} \approx 5.75 \times 10^5 \text{ N/C}$.

---

## Summary

In this section, we introduced the fundamental concept of electric charge, noting its two types (positive and negative), the principle of conservation, and its quantized nature. We then explored Coulomb's Law, which provides a mathematical description of the electric force between point charges, highlighting its dependence on the magnitude of charges and the inverse square of the distance between them. Finally, we defined the electric field as a region of influence created by charges, understanding it as the force per unit charge and learning how to calculate it for point charges and distributions using superposition. These foundational concepts are essential building blocks for understanding all subsequent topics in electromagnetism.