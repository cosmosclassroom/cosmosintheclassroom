---
title: "Geometric Optics: Light and Reflection"
author: "Physics Department"
date: "April 2025"
marp: true
size: 16:9
paginate: true
theme: default
---

<style>
section {
  font-size: 1.8rem;
  padding: 1rem; 
}

h1 {
  font-family: Georgia, serif;
  margin-bottom: 1rem;
}

p {
  font-family: system-ui, sans-serif;
}

img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  margin: auto;
}

.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.flexbox > div {
  flex: 1;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: black; 
  border: 1px black solid; 
}

.formula {
  margin: 2px;
  padding: 2px;
  text-align: center;
  background-color: lavender;
  border: 1px black solid; 
}

footer {
  font-size: 0.7rem;
  font-style: italic;
  text-align: left;
  opacity: 80%;
  margin-top: 0.5rem;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>

<!-- paginate: false -->
# Geometric Optics
### How can wave equations describe the behavior of electromagnetic radiation?

<div class="image-container">
  <img src="../../../assets/images/10_optics/lens-7105005_640.jpg" alt="Lens forming an image" />
</div>

---
<!-- paginate: true -->

# Contents

1. **Characteristics of Light**
   - Light as an electromagnetic wave
   - Wave-particle duality

2. **Reflection and Flat Mirrors**
   - Law of reflection
   - Ray diagrams
   - Virtual image formation

3. **Curved Mirrors**
   - Concave and convex mirrors
   - Ray diagrams
   - Mirror equation

---

# Origins of Optics

<div class="flexbox">
  <div>
    <p>Light has been studied since ancient times, with significant contributions from:</p>
    <ul>
      <li>Early civilizations - created primitive lenses</li>
      <li>Newton - developed corpuscular theory of light</li>
      <li>Huygens - proposed wave theory of light</li>
      <li>Maxwell - unified electromagnetism with light</li>
    </ul>
  </div>
  <div class="image-container">
    <img src="../../../assets/images/10_optics/Nimrud_lens_British_Museum.jpg" alt="Lens" />
    <p>Ancient Nimrud lens (750-710 BCE)</p>
  </div>
</div>

---

# Light as an Electromagnetic Wave

<div class="flexbox">
  <div>
    <p>Light originates from oscillating charged particles:</p>
    <ul>
      <li>Electrons in atoms undergo Simple Harmonic Motion</li>
      <li>Frequency of oscillation determines wavelength: <em>c = f · λ</em></li>
      <li>Electric and magnetic fields oscillate perpendicular to each other</li>
      <li>All EM waves move at the speed of light in a vacuum, <em>c = 3.00 × 10⁸ m/s</em></li>
    </ul>
  </div>
  <div class="image-container">
    <img src="../../../assets/images/10_optics/Onde_electromagnetique.svg.png" alt="Electromagnetic wave" style="height: 350px"/>
  </div>
</div>

---

# Wave-Particle Duality of Light

<div class="flexbox">
  <div>
    <h3>Wave Properties:</h3>
    <ul>
      <li>Interference</li>
      <li>Diffraction</li>
      <li>Polarization</li>
    </ul>
  </div>
  <div>
    <h3>Particle Properties:</h3>
    <ul>
      <li>Photoelectric effect</li>
      <li>Discrete energy packets (photons)</li>
      <li>Energy: E = hf</li>
    </ul>
  </div>
</div>

<div class="formula">
  <p>Wave directions of travel can be approximated as rays</p>
  <p>This allows us to use geometric optics to analyze light behavior</p>
</div>

---

# Law of Reflection

<div class="flexbox">
  <div>
    <h3>Key Principles:</h3>
    <ul>
      <li>The incident ray, the reflected ray, and the normal to the surface all lie in the same plane</li>
      <li>The angle of incidence equals the angle of reflection</li>
      <li>θᵢ = θᵣ</li>
    </ul>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Reflection_angles.svg/500px-Reflection_angles.svg.png" alt="Angle of reflection" />
  </div>
</div>

---

# Ray Diagrams to Predict Images

<div class="flexbox">
  <div>
    <h3>Imaging the tip of a pencil:</h3>
    <ul>
      <li><strong>Ray 1:</strong> incident angle = 0°, reflected angle = 0°</li>
      <li><strong>Ray 2:</strong> incident angle = θ°, reflected angle = θ°</li>
    </ul>
    <p><em>Both rays can be traced back to their point of apparent origination behind the mirror</em></p>
  </div>
  <div class="image-container">
    <img src="../img/0%20Lecture%20_%209%20Light%20and%20Optics_0.png" alt="Ray diagram" />
  </div>
</div>

---

# Virtual Image Formation

<div class="flexbox">
  <div>
    <h3>Imaging Process:</h3>
    <ul>
      <li>Dashed lines behind mirror meet at the <strong>image point</strong></li>
      <li>Collection of rays forms the <strong>virtual image</strong></li>
      <li>Image distance equals object distance: <em>p = q</em></li>
      <li>Virtual images cannot be projected onto a screen</li>
    </ul>
  </div>
  <div class="image-container">
    <img src="../img/0%20Lecture%20_%209%20Light%20and%20Optics_1.png" alt="Virtual image formation" />
  </div>
</div>

---

# Ray Diagrams on Flat Mirrors

<div class="flexbox">
  <div>
    <p>For a flat mirror:</p>
    <ul>
      <li>Dashed lines behind the mirror meet at the <strong>image point</strong></li>
      <li>The collection of all rays forms the <strong>virtual image</strong></li>
      <li>The virtual image appears as far behind the mirror as the object is in front of it</li>
      <li>\( p = q \) where <em>p</em> is object distance and <em>q</em> is image distance</li>
    </ul>
  </div>
  <div class="image-container">
    <img src="../img/0%20Lecture%20_%209%20Light%20and%20Optics_2.png" alt="Flat mirror ray diagram" />
  </div>
</div>

---

# Images on Flat Mirrors

<div class="flexbox">
  <div>
    <p>Properties of images in flat mirrors:</p>
    <ul>
      <li>Images appear reversed to observer (left-right inversion)</li>
      <li>Angles of perspective are maintained</li>
      <li>Image is upright (not inverted)</li>
      <li>Image size equals object size (magnification = 1)</li>
    </ul>
  </div>
  <div class="image-container">
    <img src="../img/0%20Lecture%20_%209%20Light%20and%20Optics_3.png" alt="Mirror image formation" />
  </div>
</div>

---

# Curved Mirrors: Introduction

<div class="flexbox">
  <div>
    <h3>Types of Curved Mirrors:</h3>
    <ul>
      <li><strong>Concave mirrors:</strong> curve inward, reflect light toward focus</li>
      <li><strong>Convex mirrors:</strong> curve outward, reflect light away from virtual focus</li>
    </ul>
    <p>Images formed on curved mirrors are rather different from those on flat mirrors</p>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Concave_and_convex_mirrors.svg/800px-Concave_and_convex_mirrors.svg.png" alt="Curved mirrors" />
  </div>
</div>

---

# Concave Mirrors: Key Terminology

<div class="flexbox">
  <div>
    <ul>
      <li><strong>Vertex:</strong> center point of the mirror surface</li>
      <li><strong>Center of curvature (C):</strong> center of the sphere from which the mirror is cut</li>
      <li><strong>Focal point (F):</strong> point where parallel rays converge after reflection</li>
      <li><strong>Focal length (f):</strong> distance from vertex to focal point</li>
      <li><strong>Principal axis:</strong> line passing through C and F</li>
    </ul>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Concave_mirror_ray_diagram.svg/800px-Concave_mirror_ray_diagram.svg.png" alt="Concave mirror ray diagram" />
  </div>
</div>

---

# Concave Mirror Ray Diagrams

<div class="flexbox">
  <div>
    <h3>Three Principal Rays:</h3>
    <ol>
      <li>Ray parallel to principal axis reflects through focal point</li>
      <li>Ray through focal point reflects parallel to principal axis</li>
      <li>Ray through center of curvature reflects back on itself</li>
    </ol>
    <p>Where these rays intersect is where the image forms</p>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Concave_mirror_principal_rays.png" alt="Concave mirror principal rays" />
  </div>
</div>

---

# Convex Mirror Ray Diagrams

<div class="flexbox">
  <div>
    <h3>Three Principal Rays:</h3>
    <ol>
      <li>Ray parallel to principal axis reflects as if coming from focal point</li>
      <li>Ray heading toward focal point reflects parallel to principal axis</li>
      <li>Ray heading toward center of curvature reflects back on itself</li>
    </ol>
    <p>Convex mirrors always form virtual, upright, diminished images</p>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Convex_mirror_principal_rays.png" alt="Convex mirror principal rays" />
  </div>
</div>

---

# Mirror Equation and Magnification

<div class="flexbox">
  <div>
    <h3>Mirror Equation:</h3>
    <div class="formula">
      \[ \frac{1}{f} = \frac{1}{p} + \frac{1}{q} \]
    </div>
    <p>where:</p>
    <ul>
      <li>\(f\) = focal length</li>
      <li>\(p\) = object distance</li>
      <li>\(q\) = image distance</li>
    </ul>
  </div>
  <div>
    <h3>Magnification:</h3>
    <div class="formula">
      \[ m = -\frac{q}{p} \]
    </div>
    <ul>
      <li>Positive m: upright image</li>
      <li>Negative m: inverted image</li>
      <li>|m| > 1: enlarged image</li>
      <li>|m| < 1: reduced image</li>
    </ul>
  </div>
</div>

---

# Sign Conventions for Mirrors

<div class="columns">
  <div>
    <h3>Focal Length (f):</h3>
    <ul>
      <li>Positive for concave mirrors</li>
      <li>Negative for convex mirrors</li>
    </ul>
    
    <h3>Object Distance (p):</h3>
    <ul>
      <li>Always positive for real objects</li>
    </ul>
  </div>
  <div>
    <h3>Image Distance (q):</h3>
    <ul>
      <li>Positive for real images (in front of mirror)</li>
      <li>Negative for virtual images (behind mirror)</li>
    </ul>
    
    <h3>Image Height (h'):</h3>
    <ul>
      <li>Positive for upright images</li>
      <li>Negative for inverted images</li>
    </ul>
  </div>
</div>

---

# Practice Problem 1

<div class="flexbox">
  <div>
    <p>A student stands 1.5 m in front of a flat mirror. If they are 1.7 m tall:</p>
    <ol>
      <li>How far behind the mirror does their image appear?</li>
      <li>What is the height of their image?</li>
      <li>What is the minimum mirror height needed to see their full body?</li>
    </ol>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Plane_mirror_height.svg/640px-Plane_mirror_height.svg.png" alt="Mirror height problem" />
  </div>
</div>

---

# Practice Problem 2

<div class="flexbox">
  <div>
    <p>A concave mirror has a focal length of 20 cm. An object is placed 30 cm from the mirror.</p>
    <p>Calculate:</p>
    <ol>
      <li>The image distance using \[\frac{1}{f} = \frac{1}{p} + \frac{1}{q}\]</li>
      <li>The magnification using \[m = -\frac{q}{p}\]</li>
      <li>Determine if the image is real or virtual</li>
    </ol>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Concave_mirror_ray_diagram.svg/800px-Concave_mirror_ray_diagram.svg.png" alt="Concave mirror ray diagram" />
  </div>
</div>

---

# Practice Problem 3

<div class="flexbox">
  <div>
    <p>Light strikes a flat mirror at an angle of 35° to the normal.</p>
    <ol>
      <li>What is the angle of reflection?</li>
      <li>What is the angle between the incident and reflected rays?</li>
      <li>If the mirror is rotated by 10°, how much does the reflected ray rotate?</li>
    </ol>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Reflection_angles.svg/500px-Reflection_angles.svg.png" alt="Angle of reflection" />
  </div>
</div>

---

# Applications of Mirrors

<div class="columns">
  <div>
    <h3>Concave Mirrors:</h3>
    <ul>
      <li>Makeup and shaving mirrors</li>
      <li>Headlights and flashlights</li>
      <li>Astronomical telescopes</li>
      <li>Solar collectors</li>
    </ul>
  </div>
  <div>
    <h3>Convex Mirrors:</h3>
    <ul>
      <li>Car side mirrors</li>
      <li>Security mirrors in stores</li>
      <li>Road safety mirrors</li>
      <li>Decorative fisheye effects</li>
    </ul>
  </div>
</div>

<div class="formula">
  The specific shape and focal length of mirrors are carefully designed for each application
</div>

---

# Summary: Geometric Optics

<div class="columns">
  <div>
    <h3>Flat Mirrors:</h3>
    <ul>
      <li>Virtual images</li>
      <li>Image distance = Object distance</li>
      <li>Magnification = 1</li>
      <li>Left-right reversal</li>
    </ul>
  </div>
  <div>
    <h3>Curved Mirrors:</h3>
    <ul>
      <li>Concave: can form real or virtual images</li>
      <li>Convex: always form virtual images</li>
      <li>Mirror equation: \(\frac{1}{f} = \frac{1}{p} + \frac{1}{q}\)</li>
      <li>Magnification: \(m = -\frac{q}{p}\)</li>
    </ul>
  </div>
</div>

<div class="formula">
  Next topic: Refraction and lenses
</div>