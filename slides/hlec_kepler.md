---
title: Kepler's Laws and Planetary Motion
author: jonathan corbett
date: 18 April 2025
marp: true
size: 16:9
paginate: true
stylesheet: slidesA
---

# Kepler's Laws and Planetary Motion
## The Mathematical Framework of Our Solar System

---

# Historical Context

- Ancient astronomers noticed certain "stars" moved differently
- Greeks called these "planets" (meaning wanderer)
- Ptolemy's geocentric model (perfect circles) lasted 1,400 years
- Tycho Brahe (1576) made precise astronomical observations
- Discovery of supernova challenged "unchanging heavens" belief

![bg right:40% 90%](<img/5_circ-gravitation/0 Lecture _ 53 Laws of Planetary Motion_1.jpg>)

---

# Kepler's Journey to Discovery

- Worked with Tycho Brahe at Uraniborg observatory
- Had access to most accurate astronomical data of the time
- Spent years trying to reconcile Plato's geometric rules with Brahe's measurements
- Finally abandoned perfect circles for ellipses
- Developed three fundamental laws of planetary motion

<dir class='img'>
<style>
  img {
    padding-top: 20px;
    margin-top: 20px;
    shadow: solid
  }
</style>

![bg right:60%](<img/5_circ-gravitation/0 Lecture _ 53 Laws of Planetary Motion_3.png>)

</dir>

---

# Kepler's First Law: Elliptical Orbits

- Planets orbit the Sun in elliptical paths
- Sun is located at one focus of the ellipse
- Characterized by:
  - Semi-major axis ($a$)
  - Eccentricity ($e$)
- Most planets have low eccentricity (nearly circular)

![bg right:40% width:400px](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Kepler-first-law.svg/330px-Kepler-first-law.svg.png)

---

# Visualizing Elliptical Orbits

![bg right:60% 90%](<img/5_circ-gravitation/0 Lecture _ 53 Laws of Planetary Motion_5.gif>)

- Explains orbital shapes of:
  - Planets
  - Comets
  - Asteroids
  - Artificial satellites
- Special case: circular orbit ($e = 0$)

---

# Kepler's Second Law: Equal Areas

- A line from Sun to planet sweeps equal areas in equal times
- Mathematical expression: $\frac{dA}{dt} = \text{constant}$
- Physical meaning: conservation of angular momentum
- Consequence: Planets move:
  - Faster at perihelion (closest approach)
  - Slower at aphelion (farthest point)

![bg right:50% 90%](<img/5_circ-gravitation/0 Lecture _ 53 Laws of Planetary Motion_6.png>)

---

# Kepler's Third Law: Orbital Periods

- Relates orbital period to size of orbit
- Mathematical form: $T^2 \propto a^3$
- For any two objects orbiting same body:
$\left(\frac{T_1}{T_2}\right)^2 = \left(\frac{a_1}{a_2}\right)^3$

- Newton later showed: $T^2 = \frac{4\pi^2}{GM}a^3$

![bg right:40% 90%](<img/5_circ-gravitation/0 Lecture _ 53 Laws of Planetary Motion_7.png>)

---

# Practical Units & Applications

- Astronomical Unit (AU): Earth's average distance from Sun
  - 1 AU = 149,597,871 km
- Simplified form for solar system:
  - When using AU and years: $T^2 = a^3$
  - $T$ in Earth years
  - $a$ in AU

![bg right:40% vertical](<img/5_circ-gravitation/0 Lecture _ 53 Laws of Planetary Motion_9.png>)
(<img/5_circ-gravitation/0 Lecture _ 53 Laws of Planetary Motion_10.png>)

---

# Example: Mars' Orbit

Given: Mars' orbital period = 1.88 years

Using $T^2 = a^3$:
- $(1.88)^2 = a^3$
- $a = \sqrt[3]{3.5344} \approx 1.52$ AU
- In kilometers: $1.52 \times 149,597,871 \approx 2.27 \times 10^8$ km

This matches observational data!

---

# Evidence in Our Solar System

| Planet   | Mean Distance ($a$) [AU] | Period ($T$) [years] | $\frac{a^3}{T^2}$ |
|----------|:-----------------------:|:-------------------:|:-----------------:|
| Mercury  | 0.39                    | 0.24               | 1.00              |
| Venus    | 0.72                    | 0.62               | 1.00              |
| Earth    | 1.00                    | 1.00               | 1.00              |
| Mars     | 1.52                    | 1.88               | 1.00              |
| Jupiter  | 5.20                    | 11.86              | 1.00              |

The constant ratio confirms Kepler's Third Law!

---

# Newton's Synthesis

- Kepler described *how* planets move
- Newton explained *why* they move this way
- Gravitational force provides centripetal force:
  - $F_g = G\frac{Mm}{r^2}$ = $m\frac{v^2}{r}$
- Slight orbital variations due to planetary interactions
- Foundation of modern orbital mechanics

![bg right:40% 90%](<img/5_circ-gravitation/0 Lecture _ 53 Laws of Planetary Motion_16.png>)

