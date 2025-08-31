---
title: "Projectile Motion: The Siege of Constantinople"
author: jonathan corbett
date: 22 August 2025
marp: true
size: 16:9
paginate: true
theme: default
math: katex
---

<!-- 
This lesson explores projectile motion through the dramatic lens of the 1453 Siege of Constantinople,
where Ottoman artillery changed the course of history and demonstrated physics principles in action.
-->

# 🏰 Projectile Motion
## The Fall of Constantinople, 1453

*How physics shaped the end of an empire*

---

# 📚 Learning Objectives

By the end of this lesson, you will:

- **Analyze** the independence of horizontal and vertical motion components
- **Calculate** projectile trajectories using kinematic equations  
- **Apply** physics principles to real historical artillery problems
- **Evaluate** how the Ottomans used massive cannons to breach the Theodosian Walls

![bg right:40% Historical painting of Constantinople siege](https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Constantinople+Siege)

---

# 🏛️ Historical Context: The Last Stand

**May 29, 1453** - The Byzantine Empire's final day

- **Constantinople**: Capital of the Byzantine Empire for over 1,000 years
- **The Theodosian Walls**: Legendary fortifications, never breached
- **Mehmed II**: 21-year-old Ottoman Sultan with revolutionary weapons
- **Orban's Cannon**: The superweapon that changed siege warfare forever

*What made these cannons so devastating? **Physics.***

---

# ⚔️ The Physics of Siege Warfare

## Traditional Weapons vs. Ottoman Artillery

**Before 1453:**
- Catapults and trebuchets: *mechanical energy storage*
- Arrows and bolts: *limited range and impact*
- Siege towers: *direct assault, high casualties*

**Ottoman Innovation:**
- **Gunpowder cannons**: *chemical energy → kinetic energy*
- **Massive projectiles**: *cannonballs weighing 600+ kg*
- **Projectile motion**: *parabolic trajectories over walls*

---

# 🎯 What Makes a Projectile?

## Orban's Great Cannon

![bg left:50% Illustration of massive Ottoman cannon](https://via.placeholder.com/500x300/2F4F4F/FFFFFF?text=Orban%27s+Cannon)

A **projectile** is any object launched through the air with:
1. **Initial velocity** (from gunpowder explosion)
2. **Only gravity acting on it** (after leaving the barrel)

**Key Physics Insight:**
*Once the cannonball leaves the cannon, gunpowder can't help it anymore. Only gravity affects its motion.*

---

# 🌍 The Two-Dimensional Nature of Projectile Motion

## Independence of Motion Components

**Horizontal Motion:**
- Velocity remains **constant** (ignoring air resistance)
- No horizontal forces after launch
- Distance = velocity × time

**Vertical Motion:**
- **Gravity accelerates** the projectile downward
- $g = 9.8 \text{ m/s}^2$ (same as dropping an object)
- Independent of horizontal velocity

**Revolutionary Insight:** *Horizontal and vertical motions are completely independent!*

---

# 📊 Modeling the Great Cannon's Trajectory

## Breaking Down the Motion

![bg right:60% Diagram showing parabolic trajectory over Constantinople walls](https://via.placeholder.com/600x400/4682B4/FFFFFF?text=Trajectory+Over+Walls)

**Horizontal Component:**
- $v_x = v_0 \cos\theta$
- $x = v_x t$

**Vertical Component:**
- $v_y = v_0 \sin\theta - gt$
- $y = v_0 \sin\theta \cdot t - \frac{1}{2}gt^2$

**Where:**
- $v_0$ = initial velocity from cannon
- $\theta$ = launch angle
- $t$ = time in flight

---

# ⏰ Example 1: Timing the Breach

## Historical Problem

Orban's cannon fires a 600 kg stone ball horizontally from the top of a 15-meter siege tower. The initial velocity is 150 m/s.

**Questions:**
1. How long until the cannonball hits the ground?
2. How far will it travel horizontally?
3. What's its final velocity when it strikes the Theodosian Wall?

![bg left:40% Image of stone cannonball](https://via.placeholder.com/300x300/8B4513/FFFFFF?text=600kg+Stone+Ball)

---

# 🔍 Solution: The Physics of Impact

## Step 1: Time of Flight
*Vertical motion only - horizontal velocity doesn't affect fall time*

$$y = y_0 + v_{y0}t - \frac{1}{2}gt^2$$

Since fired horizontally: $v_{y0} = 0$

$$0 = 15 + 0 - \frac{1}{2}(9.8)t^2$$

$$t = \sqrt{\frac{2 \times 15}{9.8}} = 1.75 \text{ seconds}$$

**Historical Note:** *The defenders had less than 2 seconds to take cover!*

---

# 🎯 Solution: Range and Impact

## Step 2: Horizontal Range
$$x = v_x t = 150 \times 1.75 = 263 \text{ meters}$$

## Step 3: Final Velocity
**Horizontal:** $v_x = 150 \text{ m/s}$ (unchanged)

**Vertical:** $v_y = gt = 9.8 \times 1.75 = 17.2 \text{ m/s}$

**Magnitude:** $v = \sqrt{v_x^2 + v_y^2} = \sqrt{150^2 + 17.2^2} = 151 \text{ m/s}$

**Impact:** *600 kg at 151 m/s = devastating force against stone walls*

---

# 📐 Example 2: Optimizing the Attack Angle

## The Siege Engineer's Dilemma

Mehmed II's engineers need to fire over the 12-meter Theodosian Wall to hit targets 400 meters behind it. Their cannon has a muzzle velocity of 200 m/s.

**Challenge:** *What launch angle maximizes their range while clearing the wall?*

![bg right:50% Diagram of trajectory over defensive wall](https://via.placeholder.com/500x300/CD853F/FFFFFF?text=Trajectory+Analysis)

---

# 🧮 Maximum Range Physics

## The Mathematics of Victory

**Range Formula:**
$$R = \frac{v_0^2 \sin(2\theta)}{g}$$

**Maximum Range:** Occurs at $\theta = 45°$

$$R_{max} = \frac{(200)^2}{9.8} = 4,082 \text{ meters}$$

**Strategic Advantage:** *Far exceeds the 400m target distance*

**Wall Clearance Check:** At $\theta = 45°$, height at 400m:
$$y = 400\tan(45°) - \frac{g(400)^2}{2(200)^2\cos^2(45°)} = 200 \text{ meters}$$

*Easily clears the 12m wall!*

---

# ⚡ The Historical Impact: Why Physics Mattered

## Before Ottoman Artillery
- **Siege Duration:** Often months or years
- **Success Rate:** Low against strong fortifications
- **Casualties:** Extremely high for attackers

## After Ottoman Artillery
- **Siege Duration:** 53 days total
- **Wall Breaches:** Multiple, decisive breaks
- **Victory:** Complete Ottoman success

**Physics Lesson:** *Understanding projectile motion gave the Ottomans overwhelming military advantage*

---

# 🔬 Real-World Applications Today

## From 1453 to Modern Times

**Historical Projectiles:**
- Cannonballs and arrows
- Siege artillery
- Naval bombardment

**Modern Applications:**
- **Sports:** Basketball trajectories, soccer kicks
- **Transportation:** Rocket launches, satellite orbits  
- **Safety:** Vehicle crash analysis, safety barriers
- **Engineering:** Bridge design, structural analysis

*The same physics principles that toppled Constantinople help us today*

---

# 🎓 Key Principles Summary

## The Physics of Projectile Motion

1. **Independence of Components:** Horizontal and vertical motions are separate
2. **Constant Horizontal Velocity:** No horizontal acceleration (ignoring air resistance)
3. **Vertical Acceleration:** Gravity affects only vertical motion
4. **Parabolic Trajectories:** All projectiles follow parabolic paths
5. **Time Dependence:** Time connects horizontal and vertical components

**Historical Insight:** *Mehmed II's success came from understanding these principles*

---

# 📝 Problem-Solving Strategy

## The Siege Engineer's Method

**Step 1:** Identify the projectile motion situation
**Step 2:** Choose coordinate system (origin, +x, +y directions)  
**Step 3:** Separate into horizontal and vertical components
**Step 4:** Apply kinematic equations to each component
**Step 5:** Use time as the connecting variable
**Step 6:** Solve for unknown quantities

*Same method used by Ottoman engineers 570 years ago!*

---

# 🏆 Practice Problem: Your Turn

## Design the Perfect Shot

You are Mehmed II's chief artillery engineer. Design a cannon shot to:

- Clear a 20m wall at 300m distance
- Hit a target 500m from your cannon
- Use minimum initial velocity (save gunpowder!)

**Given:** Your cannon can adjust from 10° to 60° elevation

**Find:** 
1. Minimum initial velocity needed
2. Optimal launch angle
3. Time of flight

---

# 🌟 Historical Legacy

## How Physics Changed the World

**May 29, 1453:** Constantinople falls
- **End of Byzantine Empire** (lasted 1,123 years)
- **Rise of Ottoman dominance** in Southeast Europe
- **Beginning of gunpowder age** in warfare

**Physics Principles:**
- Projectile motion equations
- Energy transformation (chemical → kinetic)
- Trajectory optimization

*Understanding physics literally changed the map of the world*

---

# 🔍 Next Steps: Beyond the Siege

## Connecting to Modern Physics

**Coming Up:**
- **Energy and Momentum:** How cannons generate force
- **Circular Motion:** Rotating cannon wheels and gears  
- **Waves:** Sound of artillery across the battlefield
- **Thermodynamics:** Heat from gunpowder explosions

**Research Brief Assignment:** 
*Analyze another historical event where physics principles determined the outcome*

---

# 📚 Resources & Further Learning

## Deepen Your Understanding

**Historical Sources:**
- Steven Runciman: "The Fall of Constantinople 1453"
- Roger Crowley: "1453: The Holy War for Constantinople"

**Physics Applications:**
- NASA trajectory calculations
- Sports physics analysis
- Engineering projectile problems

**Online Simulations:**
- PhET Projectile Motion Lab
- Artillery trajectory calculators

*Connect history with physics - see how science shapes civilization*