<!--    \src\hphys\8_electromagnetism\paper_fourrier-key    -->

# Solutions to Wave Analysis Questions

## Question 1: Guitar String Frequencies

A guitar string plays a note with a frequency of 196 Hz (G below middle C). Using the relationship between string length and frequency, calculate:

a) The frequency when pressed at the halfway point
b) The frequency when pressed at the one-third point

### Solution:

From the relationship discovered by Fourier, we know that frequency is inversely proportional to string length:

$$f \propto \frac{1}{L}$$

This means:

$$\frac{f_1}{f_2} = \frac{L_2}{L_1}$$

Where:
- $f_1$ is the original frequency
- $f_2$ is the new frequency
- $L_1$ is the original length
- $L_2$ is the new length

#### Part a) Pressing at halfway point:

When we press at the halfway point, we're effectively reducing the string length to half of its original value.

$$L_2 = \frac{L_1}{2}$$

Therefore:

$$f_2 = f_1 \times \frac{L_1}{L_2} = f_1 \times \frac{L_1}{\frac{L_1}{2}} = f_1 \times 2$$

$$f_2 = 196 \text{ Hz} \times 2 = 392 \text{ Hz}$$

This is exactly one octave higher than the original note.

#### Part b) Pressing at one-third point:

When we press at the one-third point, we're reducing the string length to one-third of its original value.

$$L_2 = \frac{L_1}{3}$$

Therefore:

$$f_2 = f_1 \times \frac{L_1}{L_2} = f_1 \times \frac{L_1}{\frac{L_1}{3}} = f_1 \times 3$$

$$f_2 = 196 \text{ Hz} \times 3 = 588 \text{ Hz}$$

This is approximately a perfect fifth above the octave of the original note.

#### Explanation:
A single guitar string can produce different tones because its effective length can be changed by pressing it against the fretboard. When the string length is reduced, its frequency increases proportionally. This is exactly what Fourier observed in his string experiments.

The mathematical relationship $f \propto \frac{1}{L}$ explains why guitars have frets placed at specific positions - they are calculated to produce precise musical intervals by changing the effective length of the string.

## Question 2: Breaking Down a Complex Wave

### Solution:

Fourier would suggest the following steps to break down a complex wave pattern:

1. **Measure the Period**: First, determine the fundamental period ($T$) of the complex wave - how long it takes for the pattern to repeat.

2. **Calculate the Fundamental Frequency**: The fundamental frequency is:
   $$f_0 = \frac{1}{T}$$
   $$\omega_0 = 2\pi f_0 = \frac{2\pi}{T}$$

3. **Test Different Harmonics**: Set up an equation with unknown coefficients:
   $$f(t) = A_0 + A_1\sin(\omega_0 t + \phi_1) + A_2\sin(2\omega_0 t + \phi_2) + A_3\sin(3\omega_0 t + \phi_3) + ...$$

4. **Find the Coefficients**: For a function $f(t)$ with period $T$, the coefficients can be found using these formulas:

   $$A_0 = \frac{1}{T}\int_{0}^{T} f(t) dt$$
   
   $$A_n = \frac{2}{T}\int_{0}^{T} f(t)\cos(n\omega_0 t) dt$$
   
   $$B_n = \frac{2}{T}\int_{0}^{T} f(t)\sin(n\omega_0 t) dt$$

   Where the amplitude and phase angle for each harmonic component would be:
   
   $$A_n = \sqrt{A_n^2 + B_n^2}$$
   
   $$\phi_n = \tan^{-1}\left(\frac{B_n}{A_n}\right)$$

5. **Reconstruct and Verify**: Add the calculated harmonic components together to recreate the original wave. Compare the result with the original to check accuracy.

6. **Visual Representation**: Plot each component separately to see how they contribute to the overall shape.

For example, if our complex wave resembles a square wave, we would find that only odd harmonics (1, 3, 5, etc.) have non-zero coefficients, with amplitudes that decrease as $\frac{1}{n}$:

$$f(t) = \frac{4}{\pi}\left(\sin(\omega_0 t) + \frac{1}{3}\sin(3\omega_0 t) + \frac{1}{5}\sin(5\omega_0 t) + ...\right)$$

## Question 3: Pendulum Motion

A pendulum with a length of 0.5 meters swings back and forth.

### Solution:

#### Part a) Calculate the period:

The period of a pendulum is given by:

$$T = 2\pi\sqrt{\frac{L}{g}}$$

Where:
- $L = 0.5 \text{ m}$ (length of pendulum)
- $g = 9.8 \text{ m/s}^2$ (acceleration due to gravity)

Substituting these values:

$$T = 2\pi\sqrt{\frac{0.5 \text{ m}}{9.8 \text{ m/s}^2}}$$

$$T = 2\pi\sqrt{\frac{5}{98}} = 2\pi\sqrt{0.051}$$

$$T = 2\pi \times 0.226 = 1.42 \text{ seconds}$$

The pendulum takes approximately 1.42 seconds to complete one full swing.

#### Part b) Position equation:

For a pendulum starting at maximum displacement, the position equation is:

$$x(t) = A\cos(\omega t)$$

Where:
- $A = 0.10 \text{ m}$ (maximum displacement = 10 cm)
- $\omega = \frac{2\pi}{T} = \frac{2\pi}{1.42} = 4.42 \text{ rad/s}$

Therefore:

$$x(t) = 0.10 \text{ m} \times \cos(4.42 \text{ rad/s} \times t)$$

This equation gives the horizontal displacement of the pendulum from its equilibrium position at any time $t$.

#### Part c) Sound frequency:

If the pendulum makes a sound each time it passes the center, it will make two sounds per period (once moving right-to-left and once moving left-to-right).

Therefore, the frequency of the sound would be:

$$f = \frac{2}{T} = \frac{2}{1.42 \text{ s}} = 1.41 \text{ Hz}$$

**Connection to vibrating strings:**

This connects to Fourier's work on vibrating strings because both phenomena can be described by the same mathematical form:

1. Both pendulums and vibrating strings follow sinusoidal patterns described by sine or cosine functions.

2. In both cases, frequency is related to a physical property (length) by an inverse relationship:
   - For pendulums: $f \propto \frac{1}{\sqrt{L}}$
   - For strings: $f \propto \frac{1}{L}$

3. Both systems exhibit simple harmonic motion, which Fourier showed is the fundamental building block of all periodic motion.

4. The sounds produced by both systems can be analyzed using Fourier's methods, breaking them down into fundamental frequencies and harmonics.

This demonstrates the universality of Fourier's approach - the same mathematical tools apply to seemingly different physical systems, revealing their underlying similarities.