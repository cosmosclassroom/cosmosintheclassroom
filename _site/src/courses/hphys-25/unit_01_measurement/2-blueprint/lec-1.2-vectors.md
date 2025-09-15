---
marp: true
theme: default
size: 16:9
paginate: true
header: 'Unit 1: Speaking the Same Language'
footer: 'Lecture 1.2: A New Way of Seeing'
math: katex
---
<style>
ul, ol {
    list-style: none;
    padding-left: 0;
}
</style>
# Lecture 1.2: A New Way of Seeing

Just as language lets us describe the world, vectors let us describe both how much and which way—unlocking a new way of seeing motion through space.

![bg left Vectors vs Scalars](../../../assets/images/vectors-examples.png)

---

## Essential Questions for Today

- What makes vectors more powerful than scalars for describing the physical world?
- How can we move from visual vector addition to precise mathematical calculation?
- Why is the component method the key to professional scientific problem-solving?

---

## Bridge Back: From Lab to Lecture

**In your Hexagon Lab, you discovered something important...**

* Vectors could be added graphically (head-to-tail)
* Order didn't matter: $\overrightarrow{A} + \overrightarrow{B} = \overrightarrow{B} + \overrightarrow{A}$
* Multiple vectors could be replaced by a single resultant

![bg left fit](../../../assets/images/vectors-tip-tail.png)

---

## But There Was a Limitation...

**Graphical methods are:**
- Imprecise (how exact can your drawing be?)
- Hard to get numerical answers
- Difficult with more than 2-3 vectors

<!-- image placeholder: Messy hand-drawn vector diagram with multiple vectors showing obvious imprecision and measurement difficulties -->

**Today we solve that problem with mathematics.**

---

## The Power of Vector Notation

### Course Conventions
- **Always use $\overrightarrow{notation}$ for vectors**
- **All measurements in metric units** (global science = global language)
    - Vector arrows indicate to the physicist that direction conventions must be observed.

Scalar

---

## Scalars vs Vectors: More Than Just Direction

**Scalars (Magnitude Only):**
- Speed: $25.0 \text{ m/s}$
- Distance: $10.0 \text{ m}$
- Mass: $5.0 \text{ kg}$
- Temperature: $22°\text{C}$
 
---

**Vectors (Magnitude + Direction):**
- Velocity: $\overrightarrow{v} = 25.0 \text{ m/s}$ due East
- Displacement: $\overrightarrow{d} = 10.0 \text{ m}$ at $30.0°$
- Force: $\overrightarrow{F} = 50.0 \text{ N}$ downward

* **Key Insight:** Physics problems often require knowing "which way"

---

### Coordinate Systems
## How Do We Measure Angles?

Physicists usually measure angles **from the positive x-axis**, which is defined as $0^{\circ}$ and points along the positive x-axis.
- $0^{\circ}$: positive x-axis (East)
- $90^{\circ}$: positive y-axis (North)
- $180^{\circ}$: negative x-axis (West)
- $270^{\circ}$: negative y-axis (South)

![bg right fit](../../../assets/images/standard-degrees.png)

---

**Sometimes, we use cardinal directions (N, S, E, W):**
- Example: "$30^{\circ}$ North of East" means start at East ($0^{\circ}$), then rotate $30^{\circ}$ toward North.
- This is common in navigation and mapping.

*Always check which convention is being used in a problem!*
![bg left fit](../../../assets/images/compassrose.jpg)

---

## The Component Method: Break It Down

**The Big Idea:**
*Any vector can be broken into perpendicular components - like finding "how far east" and "how far north" instead of just "how far diagonally."*

![bg contain 100% left](../../../assets/images/vector-components.png)

* **This turns one complex diagonal problem into two simple straight-line problems.**

---

## The Mathematics: 
#### SOH CAH TOA

**Remember:** 
- $\cos(\theta) = \frac{\text{adjacent}}{\text{hypotenuse}}$
- $\sin(\theta) = \frac{\text{opposite}}{\text{hypotenuse}}$

* For vector $\overrightarrow{A}$ with magnitude $A$ at angle $\theta$:

* $$\overrightarrow{A_x} = A \cos(\theta) \quad \text{(adjacent)}$$
* $$\overrightarrow{A_y} = A \sin(\theta) \quad \text{(opposite)}$$

![bg left fit](../../../assets/images/vector-components.png)


---

## Worked Example: Step by Step
![bg left 90%](../../../assets/images/vector-ex.png)
**Problem:** Find components of $\overrightarrow{d} = 50.0 \text{ m}$ at $30.0°$ North of East

### Step 1: Sketch
Draw the vector and its components (forms a right triangle)


---

## Worked Example: Continued

### Step 2: Identify the Triangle
- **Hypotenuse** = main vector ($50.0 \text{ m}$)
- **Adjacent side** = x-component ($\overrightarrow{d_x}$)
- **Opposite side** = y-component ($\overrightarrow{d_y}$)
- **Angle** = $30.0°$

### Step 3: Apply SOH CAH TOA
* $$d_x = (50.0 \text{ m}) \cos(30.0°) = 43.3 \text{ m}$$
* $$d_y = (50.0 \text{ m}) \sin(30.0°) = 25.0 \text{ m}$$

---

![bg center 80%](../../../assets/images/vector-ex-3.png)

---

## Your Turn: Guided Practice

**Problem:** Find components of $\overrightarrow{v} = 80.0 \text{ km/h}$ at $60.0°$ North of West

**Work with your partner:**
1. Sketch the vector and set up coordinate system
2. Identify the correct angle for your trigonometry  
3. Apply SOH CAH TOA
4. Calculate numerical values

<!-- image placeholder: Blank coordinate system for students to work on, with just the axes labeled -->

**Be ready to share your strategy and answer in 3 minutes.**

---

## Practice Solution
![bg left fit](../../../assets/images/vector-ex4.png)

**Setup:** Vector points $60.0°$ North of West
* - Magnitude: $80.0 \text{ km/h}$
* - Standard angle: $180° - 60.0° = 120°$ from positive x-axis

* **Components:**
* $$v_x = (80.0 \text{ km/h}) \cos(120°) = -40.0 \text{ km/h}$$
* $$v_y = (80.0 \text{ km/h}) \sin(120°) = 69.3 \text{ km/h}$$



---

## Why This Matters: Systems Thinking

**Thinking Lens: Systems and System Models**

* Vectors are the perfect tool for modeling complex systems.

**Example:** Airplane Navigation
* Engine provides $\overrightarrow{v_{plane}}$
* Wind provides $\overrightarrow{v_{wind}}$
* Actual path: $\overrightarrow{v_{resultant}} = \overrightarrow{v_{plane}} + \overrightarrow{v_{wind}}$

![bg left fit ](../../../assets/images/airplane-vector-sum.jpg)

---

## The Power of Components

**Breaking into components lets us:**
- Analyze x and y directions **independently**
- Turn one complex problem into two simple ones
- Get exact numerical answers
- Handle any number of vectors


* **This is why GPS works so precisely!**

---

## Connection to Your Mapping Project

**From your Research Brief:**
- Rough sketches → Scientifically accurate maps
- "About 5 steps northeast" → "$4.2 \text{ m}$ at $45.0°$"
- Guessing positions → Calculating exact coordinates

<!-- image placeholder: Side-by-side showing a rough hand-drawn classroom map vs. a precise coordinate-based map with exact positions -->

**Component method = Professional-level precision**

---

## Bridge Forward: Next Steps

**Today's Journey:**
- **Lab:** Visual understanding of vector addition
- **Lecture:** Mathematical tools for precision  
- **Next:** Problem Set 1.2 - Apply component method to complex problems

**Key Skill for Success:** Always start with a clear sketch, then apply mathematics systematically.

---

## Problem Set 1.2 Preview

**You'll tackle:**
- Navigation problems with bearings
- Multi-step vector addition
- Real-world mapping scenarios
- Complex helicopter rescue missions

**All preparation for your final mapping project!**

<!-- image placeholder: Montage showing navigation compass, rescue helicopter, and surveyor's map to hint at upcoming problem types -->

---

## Quick Self-Check

**Before you leave:**

✓ Can you distinguish a scalar from a vector?
✓ Can you find vector components using SOH CAH TOA?  
✓ Do you see why components make vector addition more precise?

**If no to any:** Review the worked example, ask questions, or see me after class.

---

## Summary: Essential Questions Answered

**What makes vectors more powerful than scalars?**
* They capture both "how much" and "which way
**How do we move from visual to mathematical?**
* Break vectors into x and y components using r Sgonometry

**Why is the component method key to professional problem-solving?**
* Turns complex geometry into simple arithmetic
* Gives exact numerical answers
* Scales to any number of vector
 
---

**Next up: Put these tools to work in Problem Set 1.2!**