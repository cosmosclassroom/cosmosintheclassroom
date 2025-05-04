---
layout: slides
title: Principles of Optics
math: katex
marp: true
---

<style>
section {
  font-size: 2rem;
  padding: 1rem; 
}

h1 {
  font-family: Georgia, serif;
  margin: auto;
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

.formula{
    margin: 2px;
    padding: 2px;
    align: center;
    justify: center;
    border: 1px;
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

ul{
    list-style: none;
}
</style>

# Principles of Optics
<div class="flexbox">
  <div>
    <h2>How can light form an image?</h2>
  </div>
  <div class="image-container">
    <img src="../../../assets/images/10_optics/lens-7105005_640.jpg" alt="Lens forming an image" />
  </div>
</div>

---

# Origins
<div class="image-container">
  <img src="d:\python\cosmosintheclassroom\assets\images\10_optics\Nimrud_lens_British_Museum.jpg" alt="Lens" />
  <div>
    <p>Light has been studied since ancient times, with significant contributions from scientists like Newton and Huygens.</p>
  </div>
  <
</div>

<footer>Photo by user:geni | Author = Geni | Date = Feb 2011</footer>

---

# Light as an Electromagnetic Wave

<p>Light originates from oscillating charged particles</p>
<div class="flexbox">
  <div>
    <ul>
    
- Electrons in atoms undergo Simple Harmonic Motion
  
- Frequency of oscillation determines wavelength: $c = f \cdot \lambda$ 
  
- Electric and magnetic fields oscillate perpendicular to each other
      </ul>
  </div>
  <div class="image-container">
    <img src="../../../assets/images/10_optics/Onde_electromagnetique.svg.png" alt="Electromagnetic wave" style="height: 350px"/>
  </div>
</div>

<footer>Image: Wikimedia</footer>

---

# Simple Harmonic Motion and Light Production

## Atomic Level Process:
- Electrons oscillate around equilibrium position at the frequency:
  
  <div class="formula">

  $f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$
    
    </div>
- Acceleration causes EM radiation
- Energy of light: $E = hf$

---

# Contents
- Characteristics of Light
- Reflection and Flat Mirrors
- Curved Mirrors

---

# Ray Diagrams to Predict Images

<div class="flexbox">
  <div>
    <h2>Imaging the tip of a pencil:</h2>
    <ul>
      
Ray 1: incident angle = $0°$, reflected angle = $0°$
      
  Ray 2: incident angle = $\theta°$, reflected angle = $\theta'°$


<em>Both rays can be traced back to their point of apparent origination behind the mirror</em></p>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Snells_law2.svg/500px-Snells_law2.svg.png" alt="Ray diagram" />
  </div>
</div>

---

# Virtual Image Formation

<div class="flexbox">
  <div>
    <h2>Imaging Process:</h2>
    <ul>
      <li>Dashed lines behind mirror meet at image point</li>
      <li>Collection of rays forms the virtual image</li>
      <li>Image distance equals object distance ($p = q$)</li>
    </ul>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Plane_mirror_image.svg/640px-Plane_mirror_image.svg.png" alt="Virtual image formation" />
  </div>
</div>

---

# Ray Diagrams on Flat Mirrors

<div class="flexbox">
  <div>
    <ul>
      <li>Image point formed where dashed lines meet</li>
      <li>Virtual image forms from ray collection</li>
      <li>Distance relationship: $p = q$</li>
    </ul>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Reflection_in_a_plane_mirror.svg/640px-Reflection_in_a_plane_mirror.svg.png" alt="Flat mirror ray diagram" />
  </div>
</div>

---

# Images on Flat Mirrors

<div class="flexbox">
  <div>
    <ul>
      <li>Images appear reversed to observer</li>
      <li>Angles of perspective are maintained</li>
      <li>Left-right inversion occurs</li>
    </ul>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Image_in_a_mirror.png" alt="Mirror image formation" />
  </div>
</div>

---

# Images on Curved Mirrors

<div class="flexbox">
  <div>
    <h2>Key differences from flat mirrors:</h2>
    <ul>
      <li>Different image formation process</li>
      <li>Image location varies with object position</li>
      <li>Distance relationship more complex</li>
      <li>Can form real or virtual images</li>
    </ul>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Concave_and_convex_mirrors.svg/800px-Concave_and_convex_mirrors.svg.png" alt="Curved mirrors" />
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
      <li>The image distance using $\frac{1}{f} = \frac{1}{p} + \frac{1}{q}$</li>
      <li>The magnification using $m = -\frac{q}{p}$</li>
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
    <p>Light strikes a flat mirror at an angle of $35°$ to the normal.</p>
    <ol>
      <li>What is the angle of reflection?</li>
      <li>What is the angle between the incident and reflected rays?</li>
      <li>If the mirror is rotated by $10°$, how much does the reflected ray rotate?</li>
    </ol>
  </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Reflection_angles.svg/500px-Reflection_angles.svg.png" alt="Angle of reflection" />
  </div>
</div>

