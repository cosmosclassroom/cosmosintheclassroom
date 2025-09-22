# Physics Practice Assessment: The Mars Climate Orbiter Failure

**Anchoring Phenomenon:** The 1999 failure of the Mars Climate Orbiter due to a unit conversion error.

**Core Concepts:** Unit Conversion (Dimensional Analysis), Vector Decomposition ($\vec{v}_x = \vec{v}\cos\theta$, $\vec{v}_y = \vec{v}\sin\theta$).

## Segment 1 of 6: The Root of the Error (Estimated Time: 20 minutes)

### A. Context & Phenomenon Link
The Mars Climate Orbiter was lost because one engineering team used English units (pounds) while another used metric units (Newtons). Let's start by exploring the exact conversion that was missed.

### B. Core Practice

1. The thrusters on the orbiter were designed to produce a force measured in Newtons (N). The software, however, calculated the required force in pound-force (lbf). Convert a force of 1.5 lbf to its equivalent in Newtons. (Use the conversion factor 1 lbf ≈ 4.45 N).

2. If the software thought it was requesting a tiny thruster firing of 0.5 N, but the hardware interpreted this as 0.5 lbf, how much actual force was produced in Newtons?

3. This error accumulated over months. If the spacecraft experienced an unintended force of 2.225 N (your answer from #2) for a total of 40,000 seconds, the total extra impulse would be 89,000 N⋅s. Convert this impulse value to lbf⋅hours.

### C. Synthesis & Cross-Cutting Lens (Cause and Effect)
The difference between the intended and actual force in problem #2 seems small. How can such a tiny, persistent error (cause) lead to the complete loss of a $125 million spacecraft (effect)?

### D. Metacognitive Prompt
When you perform a unit conversion, how do you check that your answer makes sense? For example, should the number of Newtons be larger or smaller than the number of pounds? Why?

## Segment 2 of 6: Practice with Navigational Units (Estimated Time: 20 minutes)

### A. Context & Phenomenon Link
Spacecraft navigation involves many different units for velocity, distance, and time that must be perfectly consistent. Let's practice converting between the complex units used in orbital mechanics.

### B. Core Practice

1. The Mars Climate Orbiter was traveling at approximately 5.5 km/s as it approached the planet. Convert this speed to miles per hour (mi/h). (Use 1 km ≈ 0.621 mi).

2. The planned altitude for the orbiter's closest approach was 150 km. The actual trajectory, due to the error, brought it to 57 km. What is the difference in altitude in feet (ft)? (Use 1 km = 1000 m and 1 m ≈ 3.28 ft).

3. A NASA report stated the navigation error was about 4.45 N⋅s per day. This is a measure of impulse (Force × time). How many total Newton-seconds of error accumulated over the spacecraft's 286-day journey to Mars?

### C. Synthesis & Cross-Cutting Lens (Scale, Proportion, and Quantity)
Your answer for the total error in #3 is a large number. How does this calculation demonstrate that small, seemingly insignificant quantities can become critically important when scaled up over a long duration or distance?

### D. Metacognitive Prompt
The problems in this segment involved multiple conversion steps. What strategy did you use to keep your work organized and ensure you didn't miss a step?

## Segment 3 of 6: Deconstructing a Trajectory Vector (Estimated Time: 20 minutes)

### A. Context & Phenomenon Link
A spacecraft's velocity is a vector—it has both magnitude (speed) and direction. To accurately model its trajectory, navigators must break this velocity down into its components.

### B. Core Practice

1. Imagine the orbiter is firing its main engine, creating a thrust vector of 500 N at an angle of 20.0° relative to its direction of travel. Sketch this vector and label its x (forward) and y (sideways) components.

2. Calculate the forward component of the thrust ($\vec{F}_x$). This is the part of the force that slows the spacecraft down to enter orbit.

3. Calculate the sideways component of the thrust ($\vec{F}_y$). This is the part of the force that pushes the spacecraft off its intended course.

### C. Synthesis & Cross-Cutting Lens (Cause and Effect)
Using the vector components you just calculated, explain how a single engine firing (the cause) can produce two different outcomes simultaneously (slowing down and moving sideways, the effects).

### D. Metacognitive Prompt
In your own words, why is it useful to break a single vector, like thrust, into perpendicular components? How does this simplify the problem?

## Segment 4 of 6: Practice with Vector Components (Estimated Time: 20 minutes)

### A. Context & Phenomenon Link
The cumulative effect of the unit error was a small but steady push, altering the orbiter's velocity vector over time. Let's practice calculating the components of these velocity vectors.

### B. Core Practice

1. The orbiter's planned final approach velocity was 5.50 km/s at an angle of 15.0° relative to the Martian equator. Calculate the component of this velocity parallel to the equator ($\vec{v}_x$) and the component perpendicular to the equator ($\vec{v}_y$).

2. Due to the error, the actual final approach velocity was 5.52 km/s at an angle of 16.2° relative to the Martian equator. Calculate the components of this actual velocity ($\vec{v}_x$ and $\vec{v}_y$).

3. Compare your answers from #1 and #2. Which component of the velocity (x or y) was more affected by the navigational error?

### C. Synthesis & Cross-Cutting Lens (Scale, Proportion, and Quantity)
The difference between the planned and actual angles (1.2°) seems very small. Based on your component calculations, how does this small change in direction result in a significant change in the orbiter's final path?

### D. Metacognitive Prompt
What was the most common mistake you had to watch out for when using sine and cosine on your calculator for these problems? (e.g., calculator modes, mixing up SOH and CAH).

## Segment 5 of 6: The Quantitative & Qualitative Critique (Estimated Time: 20 minutes)

### A. Context & Phenomenon Link
We will now synthesize our understanding by analyzing the final trajectory data to explain precisely what went wrong, both mathematically and systemically.

### B. Core Practice (The Quantitative & Qualitative Critique)
You are given the following summary data:

- Planned closest altitude: 150,000 m
- Actual closest altitude: 57,000 m
- Minimum survivable altitude: 80,000 m
- Root Cause: Software produced impulse values in lbf⋅s instead of the required N⋅s.

Perform the following critique:

1. **Quantitative:** Calculate the percentage error between the planned and actual altitudes. Then, calculate how far below the minimum survivable altitude the orbiter actually flew, expressed in meters.

2. **Qualitative:** The unit conversion error was the direct cause, but what was the systemic cause? In 1-2 sentences, critique the process that allowed this error to go unnoticed. (Think about teamwork and checking work).

### C. Synthesis & Cross-Cutting Lens (Cause and Effect)
Explain how the systemic failure you described in your qualitative critique (cause) directly led to the massive percentage error you calculated in the quantitative part (effect).

### D. Metacognitive Prompt
How did combining a numerical calculation (quantitative) with a procedural explanation (qualitative) give you a more complete understanding of the mission failure?

## Segment 6 of 6: Metacognition & Review (Estimated Time: 20 minutes)

### A. Context & Phenomenon Link
This entire incident has become a famous case study in engineering. Let's reflect on the physics and professional practices we can learn from it.

### B. Core Practice

1. Review your work from the previous five segments. Identify the single most important equation or conversion factor that explains the orbiter's failure.

2. In a few sentences, explain how the two core concepts of this problem set—unit conversions and vector components—are related. How did an error in one (units) lead to a deviation in the other (the trajectory vector)?

### C. Synthesis & Cross-Cutting Lens (Cause and Effect)
This problem set focused on a failure. How could the same physics principles (precise unit conversions and vector component calculations) be used to ensure a mission's success?

### D. Metacognitive Prompt
Has this problem set changed how you view "small mistakes" in a math or science problem? Why is showing your units and checking your work a critical scientific practice, not just something you do to get full credit?