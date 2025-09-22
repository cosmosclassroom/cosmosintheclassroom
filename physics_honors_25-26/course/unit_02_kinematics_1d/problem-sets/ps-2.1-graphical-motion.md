# Problem Set 2.1: Graphical Analysis of Motion

Complete this problem set on separate paper to be collected by your instructor.

**Introduction:** In the rocket lab, you analyzed velocity-time data to understand different phases of motion. Now you'll practice interpreting various types of motion graphs and extracting quantitative information from them. Remember: the slope of a position-time graph gives velocity, and the slope of a velocity-time graph gives acceleration.

## Part A: The Apprentice's Practice - Foundational Skills

Complete the following problems, showing all work and paying close attention to units and significant figures.

### Problem 1: Walking to School
**Dataset JSON:**
```json
{
  "problemId": "2.1.A.1",
  "title": "Walking to School",
  "description": "Position-time data for a student walking to school at constant velocity",
  "xAxis": {"label": "Time (s)", "range": [0, 600]},
  "yAxis": {"label": "Position (m)", "range": [0, 900]},
  "dataPoints": [
    {"x": 0, "y": 0},
    {"x": 120, "y": 180},
    {"x": 240, "y": 360},
    {"x": 360, "y": 540},
    {"x": 480, "y": 720},
    {"x": 600, "y": 900}
  ],
  "graphType": "position_vs_time",
  "expectedPattern": "linear_increasing"
}
```

**Questions:**
a) What is the student's average velocity between t = 120 s and t = 480 s?
b) How far does the student travel in the first 240 s?
c) What is the student's displacement after 600 s?

### Problem 2: Bicycle Ride Analysis
**Dataset JSON:**
```json
{
  "problemId": "2.1.A.2", 
  "title": "Bicycle Velocity Analysis",
  "description": "Velocity-time data for a bicycle rider accelerating from rest",
  "xAxis": {"label": "Time (s)", "range": [0, 12]},
  "yAxis": {"label": "Velocity (m/s)", "range": [0, 18]},
  "dataPoints": [
    {"x": 0, "y": 0},
    {"x": 2, "y": 3.0},
    {"x": 4, "y": 6.0},
    {"x": 6, "y": 9.0},
    {"x": 8, "y": 12.0},
    {"x": 10, "y": 15.0},
    {"x": 12, "y": 18.0}
  ],
  "graphType": "velocity_vs_time",
  "expectedPattern": "linear_increasing"
}
```

**Questions:**
a) Calculate the bicycle's acceleration between t = 4.0 s and t = 10.0 s.
b) What is the bicycle's displacement during the first 8.0 s? (Hint: Find the area under the curve)
c) If this acceleration continues, what will the bicycle's velocity be at t = 16.0 s?

### Problem 3: Elevator Motion
**Dataset JSON:**
```json
{
  "problemId": "2.1.A.3",
  "title": "Elevator Velocity Profile", 
  "description": "Velocity-time data for an elevator moving between floors",
  "xAxis": {"label": "Time (s)", "range": [0, 20]},
  "yAxis": {"label": "Velocity (m/s)", "range": [-3, 5]},
  "dataPoints": [
    {"x": 0, "y": 0},
    {"x": 2, "y": 4.0},
    {"x": 6, "y": 4.0},
    {"x": 10, "y": 4.0},
    {"x": 14, "y": 0},
    {"x": 16, "y": 0},
    {"x": 18, "y": -2.0},
    {"x": 20, "y": -2.0}
  ],
  "graphType": "velocity_vs_time",
  "expectedPattern": "multi_phase_motion"
}
```

**Questions:**
a) During which time intervals is the elevator accelerating?
b) What is the elevator's acceleration between t = 10.0 s and t = 14.0 s?
c) Calculate the elevator's total displacement from t = 0 to t = 20.0 s.

## Part B: The Journeyman's Task - Synthesis & Application

### Problem 4: Rocket Telemetry Analysis
Building on your lab experience, analyze this velocity-time data from a different sounding rocket launch.

**Dataset JSON:**
```json
{
  "problemId": "2.1.B.4",
  "title": "Alternative Rocket Launch Profile",
  "description": "Velocity-time data from sounding rocket with different engine burn time",
  "xAxis": {"label": "Time (s)", "range": [0, 50]},
  "yAxis": {"label": "Velocity (m/s)", "range": [0, 600]},
  "dataPoints": [
    {"x": 0, "y": 0},
    {"x": 5, "y": 120},
    {"x": 10, "y": 240},
    {"x": 15, "y": 360},
    {"x": 25, "y": 480},
    {"x": 30, "y": 431},
    {"x": 35, "y": 382},
    {"x": 40, "y": 333},
    {"x": 45, "y": 284},
    {"x": 50, "y": 235}
  ],
  "graphType": "velocity_vs_time",
  "expectedPattern": "rocket_burn_then_ballistic"
}
```

**Analysis Questions:**
a) Determine the rocket's acceleration during the engine burn phase.
b) Determine the rocket's acceleration during the ballistic (engine-off) phase.
c) At what time does the engine cut off? Provide evidence from the data.
d) Calculate when this rocket will reach apogee (maximum altitude).
e) Compare this rocket's performance to the rocket from your lab. Which reaches higher velocity at engine cutoff?

## Part C: The Master's Insight - Metacognitive Reflection

### Problem 5: Motion Detective Challenge
**Dataset JSON:**
```json
{
  "problemId": "2.1.C.5",
  "title": "Mystery Motion Analysis",
  "description": "Position-time data for an unknown moving object - determine what it represents",
  "xAxis": {"label": "Time (s)", "range": [0, 16]},
  "yAxis": {"label": "Position (m)", "range": [0, 25]},
  "dataPoints": [
    {"x": 0, "y": 0},
    {"x": 2, "y": 8.0},
    {"x": 4, "y": 14.4},
    {"x": 6, "y": 19.2},
    {"x": 8, "y": 22.4},
    {"x": 10, "y": 24.0},
    {"x": 12, "y": 24.0},
    {"x": 14, "y": 22.4},
    {"x": 16, "y": 19.2}
  ],
  "graphType": "position_vs_time", 
  "expectedPattern": "projectile_motion_vertical"
}
```

**Challenge Questions:**
a) Construct the velocity-time graph for this motion by calculating the velocity at each time interval.
b) Construct the acceleration-time graph using your velocity data.
c) Based on your analysis, what type of motion does this represent? (Hint: Compare your acceleration values to $a_g = 9.80 \text{ m/s}^2$)
d) At what time does this object reach its maximum height? How do you know?

### Reflection Question:
Answer the following question in 2-3 complete sentences:

| **How does a single velocity-time graph contain complete information about one-dimensional motion?** Explain how you can extract position, velocity, and acceleration information from just this one type of graph, using specific examples from today's problems. |
| :---- |
|  |

---

## Mathematical Relationships Reference:
- **Slope of position-time graph** = velocity
- **Slope of velocity-time graph** = acceleration  
- **Area under velocity-time graph** = displacement
- **Average velocity** = $\frac{\Delta x}{\Delta t}$
- **Average acceleration** = $\frac{\Delta v}{\Delta t}$