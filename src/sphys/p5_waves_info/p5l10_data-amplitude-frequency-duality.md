---
layout: stemplate
title: "P5L10 Data: Amplitude and Frequency"
subtitle: Experimental Data B
date: 21 April 2025
stylesheet: /assets/css/worksheets.css
math: true
---
<!-- cosmosintheclassroom\src\sphys\p5_waves_info\p5l10_data-amplitude-frequency-duality.md -->


### Introduction

This study investigates the relationship between electromagnetic wave properties and their interactions with biological and electronic devices in the form of solar panels. Through controlled experiments examining both cellular damage and photoelectric effects, data were collected across a spectrum of frequencies (4.5×10¹⁴ Hz to 3.0×10¹⁸ Hz) and two amplitude levels. The results provide empirical evidence for understanding how the frequency and amplitude of electromagnetic radiation independently affect energy transfer in quantum interactions. These findings serve as a foundation for exploring the dual wave-particle nature of light in modern physics.

[Scientific Notation Reference](P5L9_wave-eq-powers-ten-lesson.md){: .button}
{: .reference-box}

<div class='figure-caption'>

**Table 1**: Effects of Light on civing cells. Using various laser sources, this experiment measures cellular damage caused by different frequencies (colors) of light at both low and high intensities. Exposure time is kept constant to isolate frequency and amplitude effects.

</div>

<div class='data-table'>

|Light Source|Frequency (Hz)|Amplitude|Exposure Time (seconds)|Cell Damage Observed|Damage Level|
|------------|-------------|---------|---------------------|-------------------|------------|
|Red Laser|$14.3 \times 10^{14}$|Low|30|No|None|
|Red Laser|$14.3 \times 10^{14}$|High|30|No|None|
|Green Laser|$15.5 \times 10^{14}$|Low|30|No|None|
|Green Laser|$15.5 \times 10^{14}$|High|30|No|None|
|UV Lamp 1|$1.0 \times 10^{16}$|Low|30|Yes|Low|
|UV Lamp 2|$1.0 \times 10^{16}$|High|30|Yes|Medium|
|X-ray Source 1|$3.0 \times 10^{18}$|Low|30|Yes|High|
|X-ray Source 2|$3.0 \times 10^{18}$|High|30|Yes|Very High|

</div>

**Table 2**: Photoelectric effects of a simple photovoltaic (PV) panel. This experiment measures the electric current produced when light hits a metal surface. Current indicates the number of electrons ejected, while frequency determines if electrons will be ejected at all and with what energy. Electric currents are reported in microamps ($\mu A$).

<div class='data-table'>

|Light Source|Frequency (Hz)|Amplitude|Electrons Ejected|Kinetic Energy (J $\times 10^{-19}$)|Current (μA)|
|------------|-------------|---------|-----------------|-------------------------|------------|
|Red Light 1|$4.5 \times 10^{14}$|Low|No|0|0|
|Red Light 2|$4.5 \times 10^{14}$|High|No|0|0|
|Green Light 1|$5.8 \times 10^{14}$|Low|Yes|0.3|0.5|
|Green Light 2|$5.8 \times 10^{14}$|High|Yes|0.3|1.2|
|Blue Light 1|$6.7 \times 10^{14}$|Low|Yes|0.9|0.7|
|Blue Light 2|$6.7 \times 10^{14}$|High|Yes|0.9|1.8|
|UV Light 1|$1.2 \times 10^{15}$|Low|Yes|2.5|1.0|
|UV Light 2|$1.2 \times 10^{15}$|High|Yes|2.5|2.8|

</div>

### Analysis Questions

1. Compare the cell damage observed across different frequencies of electromagnetic radiation (from red laser to X-ray). What pattern do you notice about the relationship between frequency and biological damage? How might this inform safety protocols for working with different parts of the electromagnetic spectrum?

   *Looking at Table 1, I notice that cell damage only occurs at higher frequencies, starting with UV radiation (1.0×10¹⁶ Hz) and becoming more severe with X-rays (3.0×10¹⁸ Hz). The red laser (4.3×10¹⁴ Hz) and green laser (5.5×10¹⁴ Hz) didn't cause any damage regardless of amplitude. This suggests there's a threshold frequency above which EM radiation becomes harmful to cells. The pattern shows that as frequency increases, damage becomes more severe - from "low" with UV to "very high" with X-rays.**

2. For both the low and high amplitude UV and X-ray exposures, what happens to the damage level when amplitude increases? Now compare this to what happens when frequency increases (e.g., from UV to X-ray). Which factor appears to have a stronger influence on biological damage?

   *When comparing the same frequency at different amplitudes, I notice that increasing amplitude does increase damage level. For UV radiation, low amplitude caused "low" damage while high amplitude caused "medium" damage. Similarly, for X-rays, low amplitude caused "high" damage while high amplitude caused "very high" damage.
   However, when comparing across frequencies (from UV to X-ray), the damage jump is much more dramatic. Even low-amplitude X-rays (causing "high" damage) are more harmful than high-amplitude UV (causing only "medium" damage). This suggests that frequency has a stronger influence on biological damage than amplitude does. It seems like the energy of individual photons (determined by frequency) is more important for causing cellular damage than the number of photons (determined by amplitude).*

3. In Table 2, analyze the relationship between light amplitude and current produced in the photovoltaic panel. For each frequency level that produces electrons, what happens to the current when amplitude increases? Explain why this occurs in terms of the number of photons striking the surface.

   For each frequency level that produces electrons, the current consistently increases when amplitude increases. For green light, the current increases from 0.5 μA at low amplitude to 1.2 μA at high amplitude. For blue light, it increases from 0.7 μA to 1.8 μA, and for UV light, from 1.0 μA to 2.8 μA.
   This occurs because amplitude represents the intensity of light, which relates to the number of photons striking the surface. Higher amplitude means more photons hitting the photovoltaic panel per second. Since each photon (with sufficient energy) can eject an electron, more photons result in more electrons being ejected, creating a stronger electric current. The data shows that approximately 2-3 times more current is produced when switching from low to high amplitude at the same frequency.


4. Notice that red light produces no current regardless of amplitude, while green light and beyond all produce some current. Using both tables, formulate a hypothesis about why high frequency EM waves might be both more dangerous to cells and more effective at initiating the photoelectric effect, while higher amplitude primarily affects the magnitude of the current.