---
marp: true
theme: default
paginate: true
# header: "Electromagnetic Waves and Wave-Particle Duality"
# footer: "High School Honors Physics | Unit 8"
---

# Electromagnetic Waves and Wave-Particle Duality

<style>
h1 {
  color:rgb(22, 47, 77);
}
h2 {
  color:rgb(20, 68, 31);
}
strong {
  color:rgb(95, 47, 28);
}
.column{
  column-count: 2;
  max-width: 100%;
  div{
    max-width: 50%
  }
}
.important-info {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 10px 0;
}
table {
    border: 1px solid var(--border-color);
    display: block;
    flex-direction: column;
    margin: 5px 0;
    max-width: 85rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1%;
    table-layout: fixed;
    width: 100%;
}

table th {
    background-color: var(--secondary-color);
    border-bottom: 2px solid var(--border-color);
    border-top: 2px solid var(--border-color);
    color: var(--text-color);
    display: table-cell;
    font-size: 1em;
    font-weight: 600;
    padding: 8px;
    text-align: left;
}

table td {
    border-bottom: 1px solid var(--border-color);
    font-size: 1em;
    padding: 5px;
    text-align: center;
    width: fit-content;
}
ul, {
  list-style:none;
}
</style>

---

## Review: Simple Harmonic Motion
<!-- style: inverse -->

- Mechanical waves illustrated differences between particle (oscillation, sometimes perpendicular) and wave (propagation, superposition) movements and interactions

---

## Electromagnetic Waves

Now we encounter **electromagnetic waves** that don't need a medium!
- These waves show a mysterious **dual nature**:
  - Sometimes act as waves (interference, diffraction)
  - Sometimes act as particles (photons)
- This duality is fundamental to modern technology:
  - Solar panels
  - Digital cameras
  - Fiber optic communications

---

## The Electromagnetic Spectrum

![width:800px](https://science.nasa.gov/wp-content/uploads/2023/06/em_spectrum.jpeg)

<div class="important-info">

All electromagnetic waves travel at <strong>speed of light</strong> 

$$c = 3.00 \times 10^8\,m/s$$

Relationship: $c = f\lambda$ 
- where $f$ is frequency and $\lambda$ is wavelength
- Higher frequency = shorter wavelength = more energy per photon
</div>

---

## The Electromagnetic Spectrum: Applications
<section>
<div style="font-size: 0.95rem;">
<div class='table'>

| Type | Wavelength | Applications |
|------:|:------------:|:--------------:|
| Radio waves | km to cm | Communications, broadcasting |
| Microwaves | cm to mm | Cooking, radar, cell phones |
| Infrared | mm to 700 nm | Heat detection, night vision |
| Visible light | 700-400 nm | Human vision, photography |
| Ultraviolet | 400-10 nm | Sterilization, black lights |
| X-rays | 10-0.01 nm | Medical imaging, security |
| Gamma rays | < 0.01 nm | Cancer treatment, nuclear detection |

</div>
</div>


![bg left fit ](../../../slides/img/9_waves-optics/position-light-electromagnetic-spectrum-range-right(1).jpg)

</section>

---
## Evidence for Light as a Wave

<div style="display: flex; justify-content: space-between; gap: 20px;">
<div style="flex: 1;">

![contain](Double-slit.svg.png)

![width: 15](Young_gif.gif)

</div>
<div style="flex: 1;">

Passing light through a double slit produced clear evidence of wave interference:
  - It creates alternating bright and dark bands (interference pattern)
  - Bright bands occur where waves combine **constructively**
  - Dark bands occur where waves cancel **destructively**

* This pattern can only be explained if light behaves as a **wave**!



</div>
</div>

---

## Wave Properties of Light

![width:500px](https://upload.wikimedia.org/wikipedia/commons/c/c5/Young%27s_Double_Slit_Experiment.svg)

- Light creates **interference patterns** when passing through slits
- Thomas Young's double-slit experiment (1801) demonstrated wave nature

<div class="important-info">
Mathematical relationship for double-slit interference: 

$$d \sin \theta = m\lambda$$

- $d$ = slit separation
- $\theta$ = angle to maximum
- $m$ = order number (0, 1, 2...)
- $\lambda$ = wavelength
</div>

---

## Light as Energy Transport

- Waves carry energy without transferring matter

<div class="important-info">
- For all waves, intensity is proportional to amplitude squared: 
  
$$I \propto A^2$$

</div>
  
For electromagnetic waves: $I = \frac{1}{2}\varepsilon_0 E_0^2 c$
  - $\varepsilon_0$ = permittivity of free space
  - $E_0$ = electric field amplitude
  - $c$ = speed of light


- A bright light bulb (100W) emits about $10^{20}$ photons/second!

---

## Electric and Magnetic Field Components

![width:600px](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Onde_electromagnetique.svg/1920px-Onde_electromagnetique.svg.png)

- EM waves consist of **oscillating electric and magnetic fields**
- Fields are **perpendicular** to each other and to direction of travel


- The fields follow the relationship: 

$$E = cB$$
<div class="important-info">

- These oscillating fields <strong>self-sustain</strong> each other:
  - Changing electric field creates magnetic field
  - Changing magnetic field creates electric field
</div>

---


## The Particle Nature of Light

- **Newton vs. Huygens debate** (1600s-1700s):
  - Newton: light is particles ("corpuscles")
  - Huygens: light is waves
  
- The **photoelectric effect** (observed late 1800s):
  - Light shining on metal causes electron emission
  - But doesn't follow wave predictions!
  
- **Einstein's explanation** (1905):
  - Light consists of discrete packets (photons)
  - Each photon carries a specific amount of energy
  - Won Nobel Prize for this work in 1921

---

## Photoelectric Effect: Evidence for Photons
<!-- _class="column" -->

<div style='column'>
<div>

![bg left](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Photoelectric_effect_in_a_solid_-_diagram.svg/1280px-Photoelectric_effect_in_a_solid_-_diagram.svg.png)

<div class="important-info">

Only explained by <strong>photons</strong> with $E = hf$

</div>

- Wave theory prediction: Higher intensity = higher energy electrons
- Actual observation: Higher frequency = higher energy electrons
  
</div>
</div>

---

## Photon Energy
- There is a **threshold frequency** below which no electrons are emitted

<div class="important-info">

- Energy is <strong>quantized</strong> into discrete packets (photons)
- Photon energy: $E = hf = \frac{hc}{\lambda}$
  - $h$ = Planck's constant = $6.63 \times 10^{-34}$ J·s
  - $f$ = frequency in Hz
  - $\lambda$ = wavelength in meters
</div>

---
<!-- _backgroundColor: Black
_color: yellow -->
## Example: Yellow light (550 nm)

* First, convert wavelength from nm to m:
  - $\lambda = 550 \text{ nm} = 550 \times 10^{-9} \text{ m}$

* Now we can calculate energy:
   - $E = \frac{(6.63 \times 10^{-34} \text{ J}\cdot\text{s})(3.00 \times 10^8 \text{ m/s})}{550 \times 10^{-9} \text{ m}}$
    - $E = 3.62 \times 10^{-19} \text{ J} = 2.26 \text{ eV}$

---

## Electron-Volt: Energy Unit

<div class="important-info">

- One electron-volt (eV) = energy gained by electron accelerated through 1 volt
  $$1 eV = 1.602 \times 10^{-19} J $$
  
</div>

- Useful for atomic-scale energies
- Visible light photons: ~1.8-3.1 eV
- UV photons: ~3.1-124 eV
- X-rays: ~124-124,000 eV

---

## Wave-Particle Duality

- Light behaves as **both** a wave and a particle
- **Which behavior we see depends on the experiment**:
  - Interference experiments → wave nature
  - Photoelectric effect → particle nature

<div class="important-info">

  * Matter also shows this duality!
  * De Broglie wavelength: $\lambda = \frac{h}{mv}$
    - $h$ = Planck's constant
    - $m$ = mass
    - $v$ = velocity
  
</div>

---

## Demonstrating Matter Waves

![width:600px](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Double-slit_experiment_results_electron.jpg/800px-Double-slit_experiment_results_electron.jpg)

- Electrons fired through double slits create **interference patterns**
- These patterns only make sense if electrons are waves!
- Confirmed by Davisson and Germer in 1927
- Larger particles have smaller wavelengths:
  - Electron: λ ≈ 10^-10 m
  - Baseball: λ ≈ 10^-34 m (too small to detect)

---

## Practical Applications of Wave-Particle Duality

- **Spectroscopy**: Analyzing light spectra to identify materials
- **Solar cells**: Converting photon energy into electrical energy
- **Electron microscopes**: Using electron waves to see tiny objects
- **Quantum computing**: Manipulating quantum states for computation
- **Lasers**: Coherent light based on quantum energy levels
- **Fluorescent materials**: Absorbing and re-emitting photons

---

## The Double-Slit Experiment Revisited


* Even single electrons or photons create an interference pattern over time
  - This means a single particle "interferes with itself"
* The **wave function** describes the probability of finding the particle
  - Observation collapses this probability into a definite position
  - This is the strange reality of **quantum mechanics**!
  - ![alt text](Young_gif-1.gif)

---

## Detecting Light: From Brightness to Photons

- **Classical detection**: Measures average intensity
  - Light meters in cameras
  - Solar irradiance measurements

- **Quantum detection**: Counts individual photons
  - Photomultiplier tubes
  - CCDs in digital cameras
  - Single-photon avalanche diodes

- **Detection limits**:
  - Human eye: ~5-10 photons
  - Modern detectors: single photon sensitivity

---

## Energy in Electromagnetic Waves

<div class="important-info">

- Energy density in electric field: $u_E = \frac{1}{2}\varepsilon_0 E^2$
- Energy density in magnetic field: $u_B = \frac{1}{2}\frac{B^2}{\mu_0}$
- Total energy density: $u = u_E + u_B = \varepsilon_0 E^2$

- Energy flow rate (Poynting vector): $\vec{S} = \frac{1}{\mu_0}\vec{E} \times \vec{B}$
- Magnitude: $S = \frac{EB}{\mu_0} = \varepsilon_0 cE^2$
  
</div>

- Intensity is magnitude of Poynting vector: $I = S$

---

## Resonant Absorption of EM Waves

* **Resonance**: When EM wave frequency matches natural frequency of a system

* Different materials and molecules resonate at different frequencies:
  * Water molecules: Rotate at microwave frequencies (~2.45 GHz)
  * Electrons in atoms: Oscillate at visible/UV frequencies
  * Chemical bonds: Vibrate at infrared frequencies


- **Applications of resonant absorption**:
  - Microwave cooking: Water molecules absorb 2.45 GHz radiation
  - MRI: Hydrogen nuclei absorb radio waves in magnetic field
  - Infrared spectroscopy: Identifies molecules by absorption patterns
  - Sunscreen: Absorbs harmful UV radiation

---
## Resonance - Dangerous Frequencies

Resonance - a match between an applied wave and the "natural" frequency

<iframe width="560" height="315" src="https://www.youtube.com/embed/XggxeuFDaDU?si=Ie7B1jNdrbIQI6oS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Resonance Explained

<iframe width="560" height="315" src="https://www.youtube.com/embed/l5Kt0xs_nTk?si=1w8uFcGoHX0YciVf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

---

## Connection to Electric Charges

- All electromagnetic waves originate from **accelerating charges**:
  - Radio waves: electrons oscillating in antennas
  - Light: electrons jumping between energy levels
  - X-rays: electrons hitting targets

- Static charges create electric fields
- Moving charges create magnetic fields
- Accelerating charges create electromagnetic waves

- Next up: Understanding electric charges and their interactions

---
## Practice Problem 1: Photon Energy
Calculate the energy of a photon of yellow light with wavelength 580 nm.

---

**Solution:**
Using $E = \frac{hc}{\lambda}$:
- $h = 6.63 \times 10^{-34}$ J·s
- $c = 3.00 \times 10^8$ m/s
- $\lambda = 580 \times 10^{-9}$ m

$E = \frac{(6.63 \times 10^{-34})(3.00 \times 10^8)}{580 \times 10^{-9}}$
$E = \frac{1.989 \times 10^{-25}}{580 \times 10^{-9}}$
$E = 3.43 \times 10^{-19}$ J

Converting to electron-volts:
$E = \frac{3.43 \times 10^{-19}}{1.602 \times 10^{-19}} = 2.14$ eV

---

## Practice Problem 2: Broadcast Radio Analysis
A radio station broadcasts at 101.5 MHz. Calculate:
a) The wavelength of these radio waves
b) The energy of a single photon

---

**Solution:**
<style>
  .column{
    display: flex;
    margin: 10px 10px 10px 10px;
    div {
      border-right: 1px solid black;
      padding: 5px;
    }
  }
  </style>

<div class='column'>
<div>

a) Using $c = f\lambda$:
   - $c = 3.00 \times 10^8$ m/s
   - $f = 101.5 \times 10^6$ Hz
   
$\lambda = \frac{c}{f} = \frac{3.00 \times 10^8 \, m/s}{101.5 \times 10^6\, \frac{1}{s}}$
   
$ = 2.96\,m$

</div>
<div>

b) Using $E = hf$:
   - $h = 6.63 \times 10^{-34}$ J·s
   - $f = 101.5 \times 10^6$ Hz
   
   $E = (6.63 \times 10^{-34})(101.5 \times 10^6) = 6.73 \times 10^{-26}$ J
   
   Converting to electron-volts:
   $E = \frac{6.73 \times 10^{-26}}{1.602 \times 10^{-19}} = 4.20 \times 10^{-7}$ eV

</div>
</div>
---

## Practice Problem 3: EM Wave Physics
An electromagnetic wave in vacuum has an electric field amplitude of 2.0 × 10³ V/m. Find:
a) The magnetic field amplitude
b) The intensity of this wave

---

**Solution:**
a) Using $E = cB$:
   - $E = 2.0 \times 10^3$ V/m
   - $c = 3.00 \times 10^8$ m/s
   
   $B = \frac{E}{c} = \frac{2.0 \times 10^3}{3.00 \times 10^8} = 6.67 \times 10^{-6}$ T

b) Using $I = \frac{1}{2}\varepsilon_0 E^2 c$:
   - $\varepsilon_0 = 8.85 \times 10^{-12}$ F/m
   - $E = 2.0 \times 10^3$ V/m
   
   $I = \frac{1}{2}(8.85 \times 10^{-12})(2.0 \times 10^3)^2(3.00 \times 10^8)$
   $I = \frac{1}{2}(8.85 \times 10^{-12})(4.0 \times 10^6)(3.00 \times 10^8)$
   $I = 5.31 \times 10^3$ W/m²

---

## Practice Problem 4: Double-Slit Experiment
Light with wavelength 650 nm passes through two slits separated by 0.2 mm. If a screen is placed 1.5 m away, what is the distance from the central maximum to the second bright fringe?

**Solution:**
For bright fringes, $d \sin \theta = m\lambda$, where $m$ is the order (0, 1, 2...)

For the second bright fringe, $m = 2$:
- $\lambda = 650 \times 10^{-9}$ m
- $d = 0.2 \times 10^{-3}$ m

$\sin \theta = \frac{m\lambda}{d} = \frac{2 \times 650 \times 10^{-9}}{0.2 \times 10^{-3}} = \frac{1300 \times 10^{-9}}{0.2 \times 10^{-3}} = 6.5 \times 10^{-3}$

For small angles, $\sin \theta \approx \theta$ (in radians), so $\theta \approx 6.5 \times 10^{-3}$ rad

The distance on the screen is $y = L \times \theta$:
- $L = 1.5$ m
- $\theta = 6.5 \times 10^{-3}$ rad

$y = 1.5 \times 6.5 \times 10^{-3} = 9.75 \times 10^{-3}$ m = 9.75 mm

---

## Practice Problem 5: De Broglie Wavelength
Calculate the de Broglie wavelength of an electron moving at 4.5 × 10⁶ m/s.

**Solution:**
Using $\lambda = \frac{h}{mv}$:
- $h = 6.63 \times 10^{-34}$ J·s
- $m = 9.11 \times 10^{-31}$ kg
- $v = 4.5 \times 10^6$ m/s

$\lambda = \frac{6.63 \times 10^{-34}}{(9.11 \times 10^{-31})(4.5 \times 10^6)}$
$\lambda = \frac{6.63 \times 10^{-34}}{4.10 \times 10^{-24}}$
$\lambda = 1.62 \times 10^{-10}$ m = 0.162 nm

---

## Practice Problem 6: Photon Detection
A light source emits green light (wavelength 525 nm) with power 2.0 μW. How many photons per second does it emit?


---

**Solution:**
Energy of one photon = $E_{photon} = \frac{hc}{\lambda}$:
- $h = 6.63 \times 10^{-34}$ J·s
- $c = 3.00 \times 10^8$ m/s
- $\lambda = 525 \times 10^{-9}$ m

$E_{photon} = \frac{(6.63 \times 10^{-34})(3.00 \times 10^8)}{525 \times 10^{-9}} = 3.79 \times 10^{-19}$ J

Number of photons per second = $\frac{\text{Total Power}}{E_{photon}}$:
- Total Power = 2.0 × 10⁻⁶ W = 2.0 × 10⁻⁶ J/s

$\text{Photons/second} = \frac{2.0 \times 10^{-6}}{3.79 \times 10^{-19}} = 5.28 \times 10^{12}$ photons/s

---

## Practice Problem 7: Microwave Resonance
A microwave oven operates at 2.45 GHz. Calculate the wavelength of these microwaves and explain how they cook food through resonance.

---

**Solution:**
Wavelength calculation using $c = f\lambda$:
- $c = 3.00 \times 10^8$ m/s
- $f = 2.45 \times 10^9$ Hz

$\lambda = \frac{c}{f} = \frac{3.00 \times 10^8}{2.45 \times 10^9} = 0.122$ m = 12.2 cm

Cooking explanation:
- Water molecules are polar (positive and negative ends)
- The 2.45 GHz frequency is specifically chosen to match a rotational resonance frequency of water
- As microwaves pass through food, water molecules rapidly rotate to align with oscillating electric field
- This rotation causes molecular friction/collisions
- Kinetic energy is transferred to surrounding molecules as heat
- This resonant absorption is much more efficient than non-resonant frequencies, allowing targeted heating of water-containing foods

---

# Review Questions

1. How does the energy of a red photon compare to the energy of a blue photon?

2. Why can we observe interference patterns with electrons?

3. What quantity is conserved when a photon is absorbed by an electron?

4. How does increasing the frequency of light affect the photoelectric effect?

5. Why don't we notice wave properties of large objects like baseballs?

