# Hexagon Lab 2.1: Analyzing Rocket Ascent Data - Answer Key

## Investigation 1: Engine Burn Phase Analysis

### Guiding Questions:

1. **Plot description (0-20 s):**
   - Graph shows a straight line with positive slope
   - Linear relationship between velocity and time
   - Velocity increases uniformly from 0 to 784.0 m/s

2. **Acceleration calculation:**
   $\overrightarrow{a}_{net} = \frac{\Delta \overrightarrow{v}}{\Delta t} = \frac{784.0 - 0.0}{20.0 - 0.0} = \frac{784.0}{20.0} = 39.2 \text{ m/s}^2$

3. **Comparison to gravity:**
   The rocket's acceleration (39.2 m/s² upward) is much larger than gravitational acceleration (9.80 m/s² downward). This large upward acceleration indicates that something powerful must be accelerating the rocket upward during this phase.

### Summary Statement (Sample Response):
**Claim:** The rocket engine is operating during the first 20 seconds.

**Evidence:** The velocity increases linearly from 0 to 784.0 m/s, giving a net upward acceleration of 39.2 m/s². This acceleration is much larger than gravity alone (9.80 m/s²).

**Reasoning:** Such a large upward acceleration indicates that the rocket's engine must be operating to accelerate the rocket upward against gravity and produce additional acceleration beyond what gravity alone could provide.

---

## Investigation 2: Engine Cutoff and Ballistic Phase

### Guiding Questions:

1. **Pattern change after t = 20 s:**
   - Velocity no longer increases linearly
   - Velocity begins to decrease at a constant rate
   - The rate of change (slope) becomes negative and constant

2. **Ballistic phase acceleration:**
   $\overrightarrow{a}_{ballistic} = \frac{\Delta \overrightarrow{v}}{\Delta t} = \frac{686.0 - 784.0}{30.0 - 20.0} = \frac{-98.0}{10.0} = -9.80 \text{ m/s}^2$

3. **Comparison to gravity:**
   The calculated acceleration (-9.80 m/s²) exactly equals the acceleration due to gravity. This indicates that the rocket is now in free fall - only gravity is affecting its motion.

### Summary Statement (Sample Response):
**Claim:** The rocket engine shuts off at t = 20 s, and the rocket enters free fall.

**Evidence:** At t = 20 s, the velocity pattern changes from increasing linearly to decreasing at exactly -9.80 m/s². The acceleration during 20-30 s is -9.80 m/s², which exactly matches gravitational acceleration.

**Reasoning:** When the engine is operating, the acceleration is much greater than gravity alone. After t = 20 s, the acceleration equals exactly -g, indicating the engine is no longer operating—the rocket is now in free fall under gravity alone.

---

## Investigation 3: Predicting Apogee

### Guiding Questions:

2. **Initial conditions for ballistic phase:**
   - $\overrightarrow{v}_0 = 784.0 \text{ m/s}$ ✓
   - $\overrightarrow{a} = -9.80 \text{ m/s}^2$ ✓  
   - $\overrightarrow{v}_1 = 0 \text{ m/s}$ ✓

3. **Time calculation:**
   $0 = 784.0 + (-9.80) \cdot \Delta t$
   $9.80 \cdot \Delta t = 784.0$
   $\Delta t = \frac{784.0}{9.80} = 80.0 \text{ s after engine cutoff}$

4. **Apogee time:**
   $t = 20.0 + 80.0 = 100.0 \text{ s after launch}$

### Summary Statement (Sample Response):
**Claim:** The rocket will reach apogee at t = 100.0 seconds after launch.

**Evidence:** Using kinematic equations with initial velocity of 784.0 m/s at engine cutoff and acceleration of -9.80 m/s², it takes 80.0 seconds for the velocity to reach zero.

**Reasoning:** During ballistic flight, the rocket follows $\overrightarrow{v} = \overrightarrow{v}_0 + \overrightarrow{a}t$. Setting final velocity to zero and solving for time gives the moment when upward motion stops (apogee).

---

## Discussion - Sample Responses

### Summary of Findings:
The velocity-time graph reveals three distinct phases: (1) Engine burn phase (0-20 s) with constant upward acceleration of 39.2 m/s² indicating active engine operation, (2) Engine cutoff at t = 20 s marked by an abrupt change in acceleration, and (3) Ballistic phase (20 s onward) with constant deceleration of -9.80 m/s² indicating free fall under gravity alone. The rocket reaches maximum velocity at engine cutoff, then decelerates predictably until reaching apogee at t = 100 s.

### Scientific Thinking Reflection (Sample):
Analyzing the slope of different graph sections was like being a detective—each phase had a distinct "signature" in the data. The challenging part was recognizing that the sudden change in slope at t = 20 s represented engine cutoff, not just a gradual change. The mathematical analysis provided concrete evidence for what the visual pattern suggested, turning observation into quantitative physics.

### Real-World Applications (Sample - Launch Trajectory Optimization):
Mission planners use this type of velocity analysis to optimize fuel consumption and payload capacity. By analyzing how long to burn engines and when to shut them off, engineers can calculate exactly when spacecraft will reach desired altitudes and velocities. This is critical for satellite deployment, space station rendezvous, and planetary mission trajectories.

---

## Key Learning Objectives Addressed:
- **Graphical Analysis:** Students interpret slope as acceleration
- **Kinematics:** Apply $\overrightarrow{a} = \frac{\Delta \overrightarrow{v}}{\Delta t}$ and $\overrightarrow{v} = \overrightarrow{v}_0 + \overrightarrow{a}t$
- **Force Analysis:** Distinguish between net force effects and individual force contributions
- **Scientific Reasoning:** Use data patterns to infer physical processes