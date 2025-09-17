# Answer Key: Mars Climate Orbiter Problem Set

<div style="page-break-after: always"></div>

## Segment 1: The Root of the Error

### B. Core Practice

1. **Converting 1.5 lbf to Newtons:**
   
   $1.5 \text{ lbf} \times \frac{4.45 \text{ N}}{1 \text{ lbf}} = 6.7 \text{ N}$

2. **Force produced when 0.5 lbf was interpreted as 0.5 N:**
   
   $0.5 \text{ lbf} \times \frac{4.45 \text{ N}}{1 \text{ lbf}} = 2.2 \text{ N}$

3. **Converting impulse to lbf⋅hours:**
   
   $89,000 \text{ N⋅s} \times \frac{1 \text{ lbf}}{4.45 \text{ N}} \times \frac{1 \text{ hr}}{3600 \text{ s}} = 5.6 \text{ lbf⋅hr}$

<div style="page-break-after: always"></div>

## Segment 2: Practice with Navigational Units

### B. Core Practice

1. **Converting speed from km/s to mi/h:**
   
   $5.5 \frac{\text{km}}{\text{s}} \times \frac{0.621 \text{ mi}}{1 \text{ km}} \times \frac{3600 \text{ s}}{1 \text{ hr}} = 1.2 \times 10^4 \text{ mi/hr}$

2. **Calculating altitude difference in feet:**
   
   $(150 \text{ km} - 57 \text{ km}) \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{3.28 \text{ ft}}{1 \text{ m}} = 3.1 \times 10^5 \text{ ft}$

3. **Total accumulated impulse error:**
   
   $4.45 \frac{\text{N⋅s}}{\text{day}} \times 286 \text{ days} = 1.27 \times 10^3 \text{ N⋅s}$

<div style="page-break-after: always"></div>

## Segment 3: Deconstructing a Trajectory Vector

### B. Core Practice

1. **Vector sketch:**
   *A sketch would show a 500 N vector at 20.0° angle with its horizontal and vertical components labeled.*

2. **Forward component of thrust:**
   
   $\vec{F}_x = 500 \text{ N} \times \cos(20.0^\circ) = 500 \times 0.940 = 4.70 \times 10^2 \text{ N}$

3. **Sideways component of thrust:**
   
   $\vec{F}_y = 500 \text{ N} \times \sin(20.0^\circ) = 500 \times 0.342 = 1.71 \times 10^2 \text{ N}$

<div style="page-break-after: always"></div>

## Segment 4: Practice with Vector Components

### B. Core Practice

1. **Planned velocity components:**
   
   $\vec{v}_x = 5.50 \text{ km/s} \times \cos(15.0^\circ) = 5.50 \times 0.966 = 5.31 \text{ km/s}$
   
   $\vec{v}_y = 5.50 \text{ km/s} \times \sin(15.0^\circ) = 5.50 \times 0.259 = 1.42 \text{ km/s}$

2. **Actual velocity components:**
   
   $\vec{v}_x = 5.52 \text{ km/s} \times \cos(16.2^\circ) = 5.52 \times 0.961 = 5.30 \text{ km/s}$
   
   $\vec{v}_y = 5.52 \text{ km/s} \times \sin(16.2^\circ) = 5.52 \times 0.279 = 1.54 \text{ km/s}$

3. **Component comparison:**
   
   The perpendicular component ($\vec{v}_y$) was more affected by the navigational error.

<div style="page-break-after: always"></div>

## Segment 5: The Quantitative & Qualitative Critique

### B. Core Practice

**Quantitative:**

1. **Percentage error in altitude:**
   
   $\left|\frac{150,000 \text{ m} - 57,000 \text{ m}}{150,000 \text{ m}}\right| \times 100\% = 62\%$

2. **Distance below minimum survivable altitude:**
   
   $80,000 \text{ m} - 57,000 \text{ m} = 23,000 \text{ m}$

**Qualitative:**

The systemic cause was a lack of process for verifying the consistency of units between different engineering teams and software modules.

<div style="page-break-after: always"></div>

## Segment 6: Metacognition & Review

### B. Core Practice

1. **Most important conversion factor:**
   
   The key conversion factor is $1 \text{ lbf} \approx 4.45 \text{ N}$.

2. **Relationship between unit conversions and vector components:**
   
   An error in a scalar quantity (the magnitude of the force due to unit conversion) created an incorrect vector (the force itself). This incorrect vector, applied over time, caused a cumulative change in the spacecraft's velocity vector, resulting in the wrong final trajectory.

<div style="page-break-after: always"></div>

## Answer Summary

### Segment 1: The Root of the Error
- 1.5 lbf = 6.7 N
- 0.5 lbf = 2.2 N
- 89,000 N⋅s = 5.6 lbf⋅hr

### Segment 2: Practice with Navigational Units
- 5.5 km/s = 1.2×10⁴ mi/hr
- Altitude difference = 3.1×10⁵ ft
- Total error = 1.27×10³ N⋅s

### Segment 3: Deconstructing a Trajectory Vector
- Forward component ($\vec{F}_x$) = 470 N
- Sideways component ($\vec{F}_y$) = 171 N

### Segment 4: Practice with Vector Components
- Planned: $\vec{v}_x$ = 5.31 km/s, $\vec{v}_y$ = 1.42 km/s
- Actual: $\vec{v}_x$ = 5.30 km/s, $\vec{v}_y$ = 1.54 km/s
- The perpendicular component ($\vec{v}_y$) was more affected

### Segment 5: The Quantitative & Qualitative Critique
- Percentage error = 62%
- Below survivable altitude = 23,000 m
- Systemic cause = lack of unit verification process

### Segment 6: Metacognition & Review
- Key conversion: 1 lbf ≈ 4.45 N
- Unit error created incorrect force vector, causing trajectory deviation
