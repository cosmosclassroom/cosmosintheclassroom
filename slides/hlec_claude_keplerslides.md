---
marp: true
theme: slidesA
paginate: true
---

# Kepler's Laws and Universal Gravitation

---

## Introduction

- Kepler's empirical observations (early 1600s) laid groundwork for Newton's theoretical framework (1687)
- Kepler described *how* planets move; Newton explained *why* they move this way
- Connection between circular motion, universal gravitation, and orbital mechanics

---

## Review: Universal Gravitation & Circular Motion

- Newton's Law of Universal Gravitation: $F_g = G\frac{m_1 m_2}{r^2}$
- For orbiting bodies, gravitational force provides the centripetal force
- Recall uniform circular motion: $a_c = \frac{v^2}{r}$
- For an orbit: $F_g = F_c$ → $G\frac{m_1 m_2}{r^2} = m_1\frac{v^2}{r}$

---

## Kepler's First Law: Law of Elliptical Orbits

- Planets orbit the Sun in elliptical paths with the Sun at one focus
- Ellipse defined by semi-major axis $a$ and eccentricity $e$
- Solar system planets have relatively small eccentricities (nearly circular)
- Special case: circular orbit when $e = 0$ (circle is a type of ellipse)

![width:500px](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Kepler-first-law.svg/330px-Kepler-first-law.svg.png)

---

## Kepler's Second Law: Law of Equal Areas

- A line connecting planet to Sun sweeps equal areas in equal times
- Mathematical expression: $\frac{dA}{dt} = \text{constant}$
- Physical meaning: conservation of angular momentum
- Planets move faster at perihelion (closest approach) and slower at aphelion (farthest point)

![width:500px](https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Kepler-second-law.svg/500px-Kepler-second-law.svg.png)

---

## Kepler's Third Law: Law of Periods

- The square of a planet's orbital period is proportional to the cube of its semi-major axis
- Mathematical form: $T^2 \propto a^3$
- More precisely: $T^2 = \frac{4\pi^2}{GM}a^3$ (where $M$ is Sun's mass)
- For solar system (using astronomical units): $T^2 = a^3$ (where $T$ is in years, $a$ in AU)

---

## Derivation: Connecting Kepler to Newton

- For circular orbits, starting with: $G\frac{Mm}{r^2} = m\frac{v^2}{r}$
- For a circular orbit: $v = \frac{2\pi r}{T}$
- Substituting: $G\frac{M}{r^2} = \frac{4\pi^2 r}{T^2}$
- Rearranging: $T^2 = \frac{4\pi^2}{GM}r^3$
- For elliptical orbits, replace $r$ with semi-major axis $a$: $T^2 = \frac{4\pi^2}{GM}a^3$

---

## Practical Applications: Units and Conversions

- Astronomical Unit (AU): mean Earth-Sun distance = 149,597,871 km
- For calculations in solar system:
  - When $a$ is in AU and $T$ in years: $T^2 = a^3$
  - When $a$ is in meters and $T$ in seconds: $T^2 = \frac{4\pi^2}{G \cdot M_{sun}}a^3$

---

## Example: Finding Orbital Distance

Mars orbital period: 1.88 years

Using $T^2 = a^3$:
- $(1.88)^2 = a^3$
- $a = \sqrt[3]{3.5344} \approx 1.52$ AU
- Converting to km: $1.52 \times 149,597,871 \approx 2.27 \times 10^8$ km

---

## Example: Finding Orbital Period

Jupiter's semi-major axis: 5.2 AU

Using $T^2 = a^3$:
- $T^2 = (5.2)^3 = 140.6$
- $T = \sqrt{140.6} \approx 11.86$ years

---

## Observational Verification

- Kepler's Laws can be verified using observational data
- Third law relationship forms a straight line when plotting $\log(T^2)$ vs $\log(a^3)$
- Slope of exactly 1 confirms the relationship $T^2 \propto a^3$

![width:450px](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kepler-third-law.svg/300px-Kepler-third-law.svg.png)

---

## Key Insights

- Kepler's Laws are empirical (based on observation) but have theoretical foundation in Newton's Laws
- Circular motion and gravitational force combine to explain orbital mechanics
- These principles apply universally—from satellites around Earth to exoplanets around distant stars