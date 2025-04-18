# Simple Harmonic Motion & Wave Equation Reference Sheet

## Simple Harmonic Motion (SHM)

### Definition
Simple harmonic motion is a pattern of motion where an object oscillates around an equilibrium position with a restoring force proportional to its displacement.

### Key Equations
- **Position equation**: $x(t) = A\cos(\omega t + \phi)$
  - $A$ = amplitude (maximum displacement)
  - $\omega$ = angular frequency (radians/second)
  - $\phi$ = phase constant (radians)
  - $t$ = time (seconds)

- **Velocity**: $v(t) = -A\omega\sin(\omega t + \phi)$

- **Acceleration**: $a(t) = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x(t)$

- **Angular frequency**: $\omega = 2\pi f = \frac{2\pi}{T}$
  - $f$ = frequency (Hz)
  - $T$ = period (seconds)

### Common Examples of SHM
1. **Pendulum** (small angles):
   - Period: $T = 2\pi\sqrt{\frac{L}{g}}$
   - Frequency: $f = \frac{1}{2\pi}\sqrt{\frac{g}{L}}$

2. **Mass on a spring**:
   - Period: $T = 2\pi\sqrt{\frac{m}{k}}$
   - Frequency: $f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$
   - Restoring force: $F = -kx$

## Wave Motion

### Definition
Wave motion is the transfer of energy through a medium or space by the oscillation of particles.

### The Wave Equation
$$\frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2}$$

Where:
- $y$ = displacement
- $t$ = time
- $x$ = position
- $v$ = wave speed

### Wave Parameters
- **Wavelength** ($\lambda$): Distance between consecutive corresponding points
- **Period** ($T$): Time for one complete oscillation at a fixed point
- **Frequency** ($f$): Number of oscillations per second = $\frac{1}{T}$
- **Wave speed** ($v$): $v = \lambda f = \frac{\lambda}{T}$

### Types of Waves
- **Transverse waves**: Particles move perpendicular to wave direction (e.g., light waves)
- **Longitudinal waves**: Particles move parallel to wave direction (e.g., sound waves)
- **Standing waves**: Fixed patterns formed when waves of equal frequency interfere

## The Connection: From SHM to Waves

### Mathematical Connection
Simple harmonic motion describes the motion of a single point, while waves describe how that motion propagates through space. The wave equation has solutions of the form:

$$y(x,t) = A\sin(kx - \omega t + \phi)$$

Where:
- $k = \frac{2\pi}{\lambda}$ (wave number)
- $\omega = 2\pi f$ (angular frequency)

### Physical Connection
1. **Single oscillator** → **Multiple coupled oscillators** → **Continuous medium**
2. Each particle in a wave undergoes SHM with position described by sine or cosine functions
3. The wave equation shows how the SHM of one particle affects neighboring particles

### Fourier's Insight
Any periodic wave, no matter how complex, can be expressed as a sum of sine and cosine functions (simple harmonic oscillations):

$$f(t) = A_0 + \sum_{n=1}^{\infty} A_n\sin(n\omega t + \phi_n)$$

### Experimental Verification
1. **Pendulums**: Demonstrate SHM with period proportional to $\sqrt{L}$
2. **Vibrating strings**: Show harmonic relationships where $f \propto \frac{1}{L}$
3. **Standing waves**: Demonstrate how SHM creates wave patterns with nodes and antinodes

## Quick Example: Wave on a String
- Wave speed: $v = \sqrt{\frac{F}{μ}}$ (where $F$ = tension, $μ$ = linear mass density)
- Frequency of standing waves: $f_n = \frac{n}{2L}\sqrt{\frac{F}{μ}}$ (where $n$ = harmonic number)
- Wavelength of standing waves: $\lambda_n = \frac{2L}{n}$