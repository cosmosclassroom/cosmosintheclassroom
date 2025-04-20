---
layout: problemset
title: PS 5.5 Orbital Mechanics
author: Jonathan Corbett
date: March 2025
mathjax: true
css: problemset
---
<!--   cosmosintheclassroom\src\hphys\6_circ_grav\PS5.5_orbital_mechanics.md    -->
# Orbital Mechanics Problem Set

Use the [Planetary Fact Sheet](6.0_orbit_fact_sheet.md) and the following equations to solve these problems:

- Newton's Universal Law of Gravitation: $F_g = G\frac{m_1m_2}{r^2}$
- Kepler's Third Law (simplified): $T^2 = s^3$ (when using AU and years)
- Kepler's Third Law (fractional): $\frac{T_1^2}{T_2^2} = \frac{r_1^3}{r_2^3}$
- Kepler's Third Law (general): $T^2 = \frac{4\pi^2}{GM}r^3$

1. Calculate Mars' average orbital speed in m/s given its average distance from the Sun.

2. Venus has the most circular orbit of all planets. Calculate the difference between its apoapsis and periapsis distances as a percentage of its average orbital distance.

3. The ratio of Jupiter's mass to Saturn's mass is approximately 3.34. If they were brought to the same orbital distance, what would be the ratio of their orbital periods?

4. Calculate the escape velocity from Mars' surface using its mass and radius.

5. What percentage stronger is the Sun's gravitational pull on Mercury at perihelion compared to aphelion?

6. If Earth's orbit were perfectly circular (use average distance), how long would it take a satellite to orbit at twice Earth's radius from the center of Earth?

7. Compare the gravitational force between:
   a) The Earth and Moon at average distance
   b) Jupiter and Io (use Jupiter's radius + 421,800 km, Io mass = 8.93×10^22 kg)
   Which is stronger and by what factor?

8. The ISS orbits at approximately 408 km above Earth's surface. What is its orbital velocity?

9. For bodies orbiting the Sun, the period T (in years) and semi-major axis a (in AU) follow the relation T² = a³. Using this, find how many Earth years it would take a hypothetical asteroid to orbit the Sun at a distance of 3.5 AU.

10. Uranus' average orbital radius is about 19.2 AU. Without using the fact sheet, calculate its orbital period in years using Kepler's laws.

<div>
<style width: 100%>
</style>

## Solutions

1. Mars' orbital speed:
   - Using $v = \sqrt{\frac{GM}{r}}$ where $G = 6.67 \times 10^{-11}$, $M_{sun} = 1.989 \times 10^{30}$ kg
   - $r = 2.28 \times 10^{11}$ m
   - $v = \sqrt{\frac{(6.67 \times 10^{-11})(1.989 \times 10^{30})}{2.28 \times 10^{11}}}$
   - $v = 24,100$ m/s

2. Venus orbit circularity:
   - Apoapsis = $1.09 \times 10^{11}$ m
   - Periapsis = $1.08 \times 10^{11}$ m
   - Average = $1.08 \times 10^{11}$ m
   - Difference = $(1.09 - 1.08) \times 10^{11}$ = $0.01 \times 10^{11}$ m
   - Percentage = $\frac{0.01}{1.08} \times 100\% = 0.93\%$

3. Jupiter/Saturn orbital period ratio:
   - Using $T^2 = \frac{4\pi^2}{GM}r^3$
   - Period ratio = $\sqrt{\frac{M_{Saturn}}{M_{Jupiter}}} = \sqrt{\frac{1}{3.34}}$
   - $= 0.547$ (Saturn's period would be 0.547 times Jupiter's)

4. Mars escape velocity:
   - $v_{escape} = \sqrt{\frac{2GM}{r}}$
   - $M_{Mars} = 6.42 \times 10^{23}$ kg
   - $r = 3.396 \times 10^6$ m
   - $v_{escape} = \sqrt{\frac{2(6.67 \times 10^{-11})(6.42 \times 10^{23})}{3.396 \times 10^6}}$
   - $= 5,030$ m/s

5. Mercury Sun gravity comparison:
   - $F \propto \frac{1}{r^2}$
   - Perihelion: $r_p = 4.6 \times 10^{10}$ m
   - Aphelion: $r_a = 7.0 \times 10^{10}$ m
   - Ratio = $(\frac{r_a}{r_p})^2 = (\frac{7.0}{4.6})^2 = 2.32$
   - Percentage stronger = $(2.32 - 1) \times 100\% = 132\%$

6. Satellite at 2× Earth radius:
   - Using $T^2 = \frac{4\pi^2}{GM}r^3$
   - $r = 2(6.378 \times 10^6)$ m
   - $M_{Earth} = 5.97 \times 10^{24}$ kg
   - $T = 2\pi\sqrt{\frac{r^3}{GM}}$
   - $= 11.3$ hours

7. Gravitational force comparison:
   a) Earth-Moon: $F = G\frac{(5.97 \times 10^{24})(7.3 \times 10^{22})}{(3.84 \times 10^8)^2} = 1.98 \times 10^{20}$ N
   b) Jupiter-Io: $F = G\frac{(1.898 \times 10^{27})(8.93 \times 10^{22})}{(4.22 \times 10^8)^2} = 5.37 \times 10^{20}$ N
   - Jupiter-Io force is 2.71 times stronger

8. ISS orbital velocity:
   - $r = 6.378 \times 10^6 + 4.08 \times 10^5$ m
   - $v = \sqrt{\frac{GM_{Earth}}{r}} = \sqrt{\frac{(6.67 \times 10^{-11})(5.97 \times 10^{24})}{6.786 \times 10^6}}$
   - $= 7,670$ m/s

9. Asteroid at 3.5 AU:
   - Using $T^2 = a^3$ (in AU and years)
   - $T = \sqrt{3.5^3} = \sqrt{42.875}$
   - $= 6.55$ years

10. Uranus period:
    - Using $T^2 = a^3$ where $a = 19.2$ AU
    - $T = \sqrt{19.2^3} = \sqrt{7,077.888}$
    - $= 84.1$ years
</div>

<div class='pals'>
<style>
   :root {
      display: flex; flex-direction: row;
   }
   .givens content {
      display: flex; flex-direction: row;
      align: left;
      width: 300px; height: auto; font-style: italic; font-weight: light;
   }
   .givens p {
      display: flex; flex-direction: row;
   }
   .solutions {
      display: flex;
      width: 600px; align: right; font-style: bold; font-weight: normal; padding: 0.5rem;
   }
</style>

<div class='givens' markdown="1">

content $f = m \cdot a$ and some text to accompany it, which is NOT formatted properly, if I do say so

</div>
<div class = >

</div>

</div>