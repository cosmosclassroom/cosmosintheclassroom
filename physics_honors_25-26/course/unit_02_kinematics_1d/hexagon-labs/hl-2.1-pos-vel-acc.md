# Hexagon Lab 2.1: Analyzing Rocket Ascent Data

Complete the following investigations in your Science Notebook.

## Abstract

This investigation analyzes velocity-time data from a suborbital sounding rocket launch to identify different phases of motion and understand the relationship between rocket engine operation and kinematic behavior.

## Introduction

Sounding rockets are research vehicles designed to carry scientific instruments to altitudes between 50-1,500 km above Earth's surface. Unlike orbital rockets, they follow a parabolic trajectory, reaching their maximum altitude (apogee) and then returning to Earth. The telemetry data from these launches provides a clear window into the physics of accelerated motion.

During a typical sounding rocket flight, several distinct phases occur: initial engine burn, engine cutoff, coasting flight under gravity alone (ballistic phase), and eventual descent. Each phase has characteristic signatures in the velocity data that reveal the underlying physics of motion.

**Research Question:** How can we use velocity-time data to identify the different phases of rocket motion and determine the acceleration during each phase?

## Methods

### Materials
- Velocity-time dataset from NASA sounding rocket launch
- Graphing tools (digital or paper)
- Calculator
- Research Log

### Dataset
**Sounding Rocket Telemetry Data - Vertical Velocity Component**

| Time (s) | Velocity (m/s) |
|----------|----------------|
| 0.0      | 0.0           |
| 2.0      | 78.4          |
| 4.0      | 156.8         |
| 6.0      | 235.2         |
| 8.0      | 313.6         |
| 10.0     | 392.0         |
| 12.0     | 470.4         |
| 14.0     | 548.8         |
| 16.0     | 627.2         |
| 18.0     | 705.6         |
| 20.0     | 784.0         |
| 22.0     | 764.4         |
| 24.0     | 744.8         |
| 26.0     | 725.2         |
| 28.0     | 705.6         |
| 30.0     | 686.0         |
| 32.0     | 666.4         |
| 34.0     | 646.8         |
| 36.0     | 627.2         |
| 38.0     | 607.6         |
| 40.0     | 588.0         |

**Given Information:**
- Launch occurs at t = 0 s from sea level
- $a_g = 9.80 \text{ m/s}^2$ (acceleration due to gravity)
- All measurements are for vertical motion only
- Data collected at 2.0 s intervals

---

## Results

### Investigation 1: Engine Burn Phase Analysis

**Variable Interpretation & Calibration**
Examine the early portion of the flight data (0-20 s) to identify when the rocket engine is firing and calculate the acceleration during this phase.

**Guiding Questions:**
1. Plot the velocity-time data for the first 20 seconds. Describe the shape of this portion of the graph.

2. Calculate the acceleration during this phase using two data points:
   - At t = 0.0 s: $\overrightarrow{v} = 0.0 \text{ m/s}$
   - At t = 20.0 s: $\overrightarrow{v} = 784.0 \text{ m/s}$
   - $\overrightarrow{a} = \frac{\Delta \overrightarrow{v}}{\Delta t} = \frac{784.0 - 0.0}{20.0 - 0.0} = $ _______ $\text{m/s}^2$

3. Compare this acceleration to what happens when objects fall freely under gravity alone ($a_g = 9.80 \text{ m/s}^2$). What does the magnitude of the rocket's acceleration tell you about what must be happening during this phase of flight?

**Summary Statement:**
**What evidence from the velocity data indicates that the rocket engine is operating during the first 20 seconds?** Make and support a claim using the calculated acceleration values and comparison to gravity.

| **Your Response:** |
| :---- |
| **Claim:** |
| **Evidence:** |
| **Reasoning:** |

### Investigation 2: Engine Cutoff and Ballistic Phase

**Variable Interpretation & Calibration**
Analyze what happens after t = 20 s to identify when the engine shuts off and calculate the acceleration during the ballistic (engine-off) phase.

**Guiding Questions:**
1. Examine the velocity data after t = 20 s. What change do you observe in the pattern of the velocity values?

2. Calculate the acceleration during the ballistic phase using data from 20-30 s:
   - At t = 20.0 s: $\overrightarrow{v} = 784.0 \text{ m/s}$
   - At t = 30.0 s: $\overrightarrow{v} = 686.0 \text{ m/s}$
   - $\overrightarrow{a} = \frac{\Delta \overrightarrow{v}}{\Delta t} = \frac{686.0 - 784.0}{30.0 - 20.0} = $ _______ $\text{m/s}^2$

3. How does this calculated acceleration compare to $a_g = -9.80 \text{ m/s}^2$ (the acceleration of objects in free fall)? What does this comparison tell you about what is happening to the rocket after t = 20 s?

**Summary Statement:**
**How does the velocity pattern change at t = 20 s, and what does this reveal about the rocket's engine operation?** Use the calculated accelerations to support your explanation.

| **Your Response:** |
| :---- |
| **Claim:** |
| **Evidence:** |
| **Reasoning:** |

### Investigation 3: Predicting Apogee

**Variable Interpretation & Calibration**
Use the ballistic phase data to predict when the rocket will reach its maximum altitude (apogee), where velocity = 0.

**Guiding Questions:**
1. During the ballistic phase, the rocket follows the kinematic equation:
   $\overrightarrow{v}_1 = \overrightarrow{v}_0 + \overrightarrow{a} \cdot \Delta t$

2. At apogee, $\overrightarrow{v}_1 = 0$. Using the conditions at t = 20 s as initial conditions for the ballistic phase:
   - $\overrightarrow{v}_0 = 784.0 \text{ m/s}$ (velocity at engine cutoff)  
   - $\overrightarrow{a} = -9.80 \text{ m/s}^2$ (gravity only)
   - $\overrightarrow{v}_1 = 0 \text{ m/s}$ (at apogee)

3. Solve for the time after engine cutoff when apogee occurs:
   $0 = 784.0 + (-9.80) \cdot \Delta t$
   $\Delta t = $ _______ seconds after engine cutoff

4. Therefore, apogee occurs at: $t = 20.0 + $ _______ $= $ _______ seconds after launch

**Summary Statement:**
**Based on your kinematic analysis, when should the rocket reach its maximum altitude?** Show your mathematical reasoning and explain any assumptions you made.

| **Your Response:** |
| :---- |
| **Claim:** |
| **Evidence:** |
| **Reasoning:** |

---

## Discussion

### Summary of Findings
Synthesize your findings from all three investigations. How do the different phases of rocket motion reveal distinct patterns in the velocity data? What story does the velocity-time graph tell about the rocket's journey?

**Connection to Unit Learning Objectives:**
- How does this analysis demonstrate that acceleration is the rate of change of velocity?
- What patterns in the velocity data reveal different phases of the rocket's flight?

### Scientific Thinking Reflection
**Metacognitive Prompt:** Reflect on how analyzing the slope of different sections of the velocity-time graph revealed different phases of motion. What was challenging about interpreting the transition from powered flight to ballistic flight, and how did the mathematical analysis help clarify this transition?

| **Your Reflection:** |
| :---- |
|  |

### Real-World Applications
Consider how this type of kinematic analysis applies to these scenarios:
1. Launch trajectory optimization for space missions
2. Analyzing aircraft performance during takeoff
3. Designing safety systems for emergency rocket engine shutdowns

Choose one scenario and explain how velocity-time analysis would be essential for engineers working on that problem.

| **Application Analysis:** |
| :---- |
|  |

---

## References
- NASA Sounding Rocket Program Office telemetry data
- Course textbook: Unit 2, Kinematics and Motion Analysis