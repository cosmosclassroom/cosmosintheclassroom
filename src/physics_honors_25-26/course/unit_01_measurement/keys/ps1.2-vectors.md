# Problem Set 1.2: The Power of Vectors - Answer Key

## Introduction
This problem set focuses on vector components and mathematical vector addition, building from the graphical methods explored in the lab to the more precise mathematical approach needed for professional surveying and navigation.

<div style="page-break-after: always"></div>

## Apprentice Level: Foundational Skills

### Scalar vs. Vector Classification

1. **Identify each quantity as either a scalar or a vector:**
   - **a) Speed limit: 65 mph** → **Scalar** (magnitude only, no direction specified)
   - **b) Velocity: 65 mph due north** → **Vector** (has both magnitude and direction)
   - **c) Mass: 2.1 kg** → **Scalar** (magnitude only)
   - **d) Weight: 21 N downward** → **Vector** (has both magnitude and direction)
   - **e) Temperature: 22°C** → **Scalar** (magnitude only)

### Basic Vector Components

2. **Displacement vector: 50.0 m at 30.0° north of east**
   - **a) Eastward component:** $V_x = 50.0 \cos(30.0°) = 50.0 \times 0.866 = 43.3 \text{ m}$
   - **b) Northward component:** $V_y = 50.0 \sin(30.0°) = 50.0 \times 0.500 = 25.0 \text{ m}$

3. **Force vector: 85.0 N at 45.0° above horizontal**
   - **a) Horizontal component:** $F_x = 85.0 \cos(45.0°) = 85.0 \times 0.707 = 60.1 \text{ N}$
   - **b) Vertical component:** $F_y = 85.0 \sin(45.0°) = 85.0 \times 0.707 = 60.1 \text{ N}$

<div style="page-break-after: always"></div>

## Journeyman Level: Applied Problem-Solving

### Navigation and Bearings

4. **Airplane: 180.0 km/h on bearing 135°**
   
   *Convert bearing to standard angle:*
   - Bearing 135° (clockwise from north) corresponds to southeast direction
   - Standard angle = 360° - 135° + 90° = 315° (or equivalently -45°)
   
   - **a) Standard mathematical angle:** **315°** (or **-45°**)
   - **b) Eastward component:** $v_x = 180.0 \cos(315°) = 180.0 \times 0.707 = 127.3 \text{ km/h}$
   - **c) Northward component:** $v_y = 180.0 \sin(315°) = 180.0 \times (-0.707) = -127.3 \text{ km/h}$

### Vector Addition by Components

5. **Given vectors:**
   - **Vector A: 75.0 m at 60.0° north of east**
   - **Vector B: 40.0 m at 120.0° from positive x-axis**

   **Calculate:**
   - **a) Components of Vector A:**
     - $A_x = 75.0 \cos(60.0°) = 75.0 \times 0.500 = 37.5 \text{ m}$
     - $A_y = 75.0 \sin(60.0°) = 75.0 \times 0.866 = 65.0 \text{ m}$
   
   - **b) Components of Vector B:**
     - $B_x = 40.0 \cos(120.0°) = 40.0 \times (-0.500) = -20.0 \text{ m}$
     - $B_y = 40.0 \sin(120.0°) = 40.0 \times 0.866 = 34.6 \text{ m}$
   
   - **c) Components of resultant (A + B):**
     - $R_x = A_x + B_x = 37.5 + (-20.0) = 17.5 \text{ m}$
     - $R_y = A_y + B_y = 65.0 + 34.6 = 99.6 \text{ m}$
   
   - **d) Magnitude and direction of resultant:**
     - $|\vec{R}| = \sqrt{R_x^2 + R_y^2} = \sqrt{(17.5)^2 + (99.6)^2} = \sqrt{306.25 + 9920.16} = 101 \text{ m}$
     - $\theta = \tan^{-1}\left(\frac{R_y}{R_x}\right) = \tan^{-1}\left(\frac{99.6}{17.5}\right) = 80.0°$ north of east

<div style="page-break-after: always"></div>

## Master Level: Complex Analysis & Synthesis

### The Surveyor's Challenge

6. **Park landmarks relative to central fountain:**
   - **Landmark A (Oak tree): 80.0 m at 120.0° from positive x-axis**
   - **Landmark B (Picnic area): 100.0 m at 30.0° from positive x-axis**
   - **Landmark C (Playground): 60.0 m at 225.0° from positive x-axis**

   **Calculate:**
   - **a) Coordinates of each landmark:**
     - **Oak tree (A):** 
       - $x_A = 80.0 \cos(120.0°) = 80.0 \times (-0.500) = -40.0 \text{ m}$
       - $y_A = 80.0 \sin(120.0°) = 80.0 \times 0.866 = 69.3 \text{ m}$
       - **Coordinates: (-40.0 m, 69.3 m)**
     
     - **Picnic area (B):** 
       - $x_B = 100.0 \cos(30.0°) = 100.0 \times 0.866 = 86.6 \text{ m}$
       - $y_B = 100.0 \sin(30.0°) = 100.0 \times 0.500 = 50.0 \text{ m}$
       - **Coordinates: (86.6 m, 50.0 m)**
     
     - **Playground (C):** 
       - $x_C = 60.0 \cos(225.0°) = 60.0 \times (-0.707) = -42.4 \text{ m}$
       - $y_C = 60.0 \sin(225.0°) = 60.0 \times (-0.707) = -42.4 \text{ m}$
       - **Coordinates: (-42.4 m, -42.4 m)**

<div style="page-break-after: always"></div>
   
   - **b) Displacement from oak tree to picnic area ($\overrightarrow{d_{AB}}$):**
     - $d_{AB,x} = x_B - x_A = 86.6 - (-40.0) = 126.6 \text{ m}$
     - $d_{AB,y} = y_B - y_A = 50.0 - 69.3 = -19.3 \text{ m}$
     - $|\overrightarrow{d_{AB}}| = \sqrt{(126.6)^2 + (-19.3)^2} = \sqrt{16,028 + 372} = 128 \text{ m}$
     - $\theta_{AB} = \tan^{-1}\left(\frac{-19.3}{126.6}\right) = -8.7°$ (or 8.7° south of east)
   
   - **c) Displacement from picnic area to playground ($\overrightarrow{d_{BC}}$):**
     - $d_{BC,x} = x_C - x_B = -42.4 - 86.6 = -129.0 \text{ m}$
     - $d_{BC,y} = y_C - y_B = -42.4 - 50.0 = -92.4 \text{ m}$
     - $|\overrightarrow{d_{BC}}| = \sqrt{(-129.0)^2 + (-92.4)^2} = \sqrt{16,641 + 8,538} = 159 \text{ m}$
     - $\theta_{BC} = \tan^{-1}\left(\frac{-92.4}{-129.0}\right) = 35.6°$ south of west (or 215.6° from positive x-axis)
   
   - **d) Total displacement from oak tree to playground ($\overrightarrow{d_{total}}$):**
     - $d_{total,x} = x_C - x_A = -42.4 - (-40.0) = -2.4 \text{ m}$
     - $d_{total,y} = y_C - y_A = -42.4 - 69.3 = -111.7 \text{ m}$
     - $|\overrightarrow{d_{total}}| = \sqrt{(-2.4)^2 + (-111.7)^2} = \sqrt{5.8 + 12,477} = 112 \text{ m}$
     - $\theta_{total} = \tan^{-1}\left(\frac{-111.7}{-2.4}\right) = 88.8°$ south of west (or 268.8° from positive x-axis)

<div style="page-break-after: always"></div>

### Multi-Step Navigation Problem

7. **Rescue helicopter flight pattern:**
   - **Segment 1: 25.0 km on bearing 045° (northeast)**
   - **Segment 2: 18.0 km on bearing 180° (due south)**
   - **Segment 3: 32.0 km on bearing 270° (due west)**

   **Calculate:**
   
   *Convert bearings to standard angles:*
   - Bearing 045° → Standard angle: 90° - 45° = 45°
   - Bearing 180° → Standard angle: 90° - 180° = -90° (or 270°)
   - Bearing 270° → Standard angle: 90° - 270° = -180° (or 180°)
   
   - **a) Final position (x and y coordinates):**
     - **Segment 1:** $d_{1x} = 25.0 \cos(45°) = 25.0 \times 0.707 = 17.7 \text{ km}$
       $d_{1y} = 25.0 \sin(45°) = 25.0 \times 0.707 = 17.7 \text{ km}$
     
     - **Segment 2:** $d_{2x} = 18.0 \cos(270°) = 18.0 \times 0 = 0 \text{ km}$
       $d_{2y} = 18.0 \sin(270°) = 18.0 \times (-1) = -18.0 \text{ km}$
     
     - **Segment 3:** $d_{3x} = 32.0 \cos(180°) = 32.0 \times (-1) = -32.0 \text{ km}$
       $d_{3y} = 32.0 \sin(180°) = 32.0 \times 0 = 0 \text{ km}$
     
     - **Final position:**
       - $x_{final} = 17.7 + 0 + (-32.0) = -14.3 \text{ km}$
       - $y_{final} = 17.7 + (-18.0) + 0 = -0.3 \text{ km}$
       - **Final coordinates: (-14.3 km, -0.3 km)**
   
   - **b) Direct displacement magnitude and direction:**
     - $|\vec{d}_{direct}| = \sqrt{(-14.3)^2 + (-0.3)^2} = \sqrt{204.49 + 0.09} = 14.3 \text{ km}$
     - $\theta = \tan^{-1}\left(\frac{-0.3}{-14.3}\right) = 1.2°$ south of west (or bearing 271.2°)
   
   - **c) Extra distance flown:**
     - Total flight distance: $25.0 + 18.0 + 32.0 = 75.0 \text{ km}$
     - Direct route distance: $14.3 \text{ km}$
     - **Extra distance: $75.0 - 14.3 = 60.7 \text{ km}$**

<div style="page-break-after: always"></div>

## Reflection & Connection

**Sample Answer:**
The component method is more powerful and less error-prone than the graphical method because it provides exact numerical precision rather than relying on the accuracy of hand-drawn diagrams and measurements with rulers. In scientific and engineering work, small measurement errors can compound into significant mistakes in final results. The mathematical approach eliminates human drawing errors and provides reproducible, precise calculations that meet the strict accuracy requirements we established in our measurement unit, allowing us to maintain proper significant figures throughout our calculations.

<div style="page-break-after: always"></div>

## Answer Summary


1. Scalar vs. Vector:
   - a) Scalar
   - b) Vector
   - c) Scalar
   - d) Vector
   - e) Scalar
2. Displacement vector components:
   - a) 43.3 m (eastward)
   - b) 25.0 m (northward)

3. Force vector components:
   - a) 60.1 N (horizontal)
   - b) 60.1 N (vertical)

4. Airplane velocity:
   - a) 315° (standard angle)
   - b) 127.3 km/h (eastward)
   - c) -127.3 km/h (northward)

5. Vector addition:
   - a) Vector A components: 37.5 m (x), 65.0 m (y)
   - b) Vector B components: -20.0 m (x), 34.6 m (y)
   - c) Resultant components: 17.5 m (x), 99.6 m (y)
   - d) Resultant magnitude: 101 m, direction: 80.0° north of east

6. Surveyor's challenge:
   - a) Oak tree coordinates: (-40.0 m, 69.3 m)
      Picnic area coordinates: (86.6 m, 50.0 m)
      Playground coordinates: (-42.4 m, -42.4 m)
   - b) Displacement A→B: 128 m at -8.7° (8.7° south of east)
   - c) Displacement B→C: 159 m at 35.6° south of west (or 215.6°)
   - d) Displacement A→C: 112 m at 88.8° south of west (or 268.8°)

7. Navigation problem:
   - a) Final position: (-14.3 km, -0.3 km)
   - b) Direct displacement: 14.3 km at 1.2° south of west (or 271.2°)
   - c) Extra distance flown: 60.7 km

