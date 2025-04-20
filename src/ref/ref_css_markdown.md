---
css: cosmosintheclassroom/assets/css/style.css
---

# CSS Reference Guide

## Selectors

### Basic Selectors
```css
/* Element selector */
div { color: blue; }

/* Class selector */
.highlight { background-color: yellow; }

/* ID selector */
#header { font-size: 24px; }

/* Universal selector */
* { margin: 0; padding: 0; }

/* Attribute selector */
input[type="text"] { border: 1px solid gray; }
a[href^="https"] { color: green; } /* Begins with */
a[href$=".pdf"] { color: red; } /* Ends with */
a[href*="example"] { color: purple; } /* Contains */
```

### Combinators
```css
/* Descendant selector (elements inside) */
article p { line-height: 1.5; }

/* Child selector (direct children) */
ul > li { list-style: square; }

/* Adjacent sibling selector (immediate next sibling) */
h2 + p { font-weight: bold; }

/* General sibling selector (all following siblings) */
h2 ~ p { margin-left: 20px; }
```

### Pseudo-classes
```css
/* Link states */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { text-decoration: underline; }
a:active { color: red; }

/* Structural */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background-color: #f9f9f9; }
li:nth-child(3n+1) { color: red; }
p:first-of-type { font-size: 1.2em; }
p:empty { display: none; }

/* Form-related */
input:focus { outline: 2px solid blue; }
input:disabled { background-color: #eee; }
input:checked + label { font-weight: bold; }
```

### Pseudo-elements
```css
/* First letter/line */
p::first-letter { font-size: 2em; }
p::first-line { font-weight: bold; }

/* Before/after elements */
.quote::before { content: '"'; }
.quote::after { content: '"'; }

/* Selection styling */
::selection { background: yellow; color: black; }
```

## Box Model

### Sizing
```css
/* Width and height */
.box {
  width: 200px;
  height: 150px;
  max-width: 100%;
  min-height: 50px;
  box-sizing: border-box; /* Includes padding and border in width/height */
}
```

### Spacing
```css
/* Margin (outside spacing) */
.box {
  margin: 10px; /* All sides */
  margin: 10px 20px; /* Top/bottom, left/right */
  margin: 10px 20px 15px; /* Top, left/right, bottom */
  margin: 10px 20px 15px 25px; /* Top, right, bottom, left (clockwise) */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 15px;
  margin-left: 25px;
}

/* Padding (inside spacing) */
.box {
  padding: 10px; /* All sides */
  padding: 10px 20px; /* Top/bottom, left/right */
  padding: 10px 20px 15px; /* Top, left/right, bottom */
  padding: 10px 20px 15px 25px; /* Top, right, bottom, left */
}
```

### Borders
```css
.box {
  border: 1px solid black; /* Width, style, color */
  border-width: 1px 2px 3px 4px; /* Top, right, bottom, left */
  border-style: solid dashed dotted double;
  border-color: red blue green yellow;
  
  /* Individual sides */
  border-top: 2px solid red;
  border-right: 1px dashed blue;
  
  /* Rounded corners */
  border-radius: 5px; /* All corners */
  border-radius: 10px 5px; /* Top-left/bottom-right, top-right/bottom-left */
  border-radius: 10px 20px 30px 40px; /* Top-left, top-right, bottom-right, bottom-left */
  border-top-left-radius: 10px;
}
```

### Outlines
```css
.box {
  outline: 2px solid red; /* Width, style, color */
  outline-offset: 5px; /* Space between border and outline */
}
```

## Typography

### Fonts
```css
.text {
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 16px; /* Can also use em, rem, %, pt */
  font-weight: bold; /* normal, bold, 100-900 */
  font-style: italic; /* normal, italic, oblique */
  font-variant: small-caps;
  font-stretch: condensed; /* normal, condensed, expanded */
  
  /* Shorthand */
  font: italic bold 16px/1.5 'Helvetica', sans-serif; /* style weight size/line-height family */
}

/* Web fonts */
@font-face {
  font-family: 'CustomFont';
  src: url('fonts/custom.woff2') format('woff2'),
       url('fonts/custom.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

### Text
```css
.text {
  color: #333;
  text-align: center; /* left, right, center, justify */
  text-decoration: underline; /* none, underline, line-through, overline */
  text-transform: uppercase; /* none, uppercase, lowercase, capitalize */
  text-indent: 20px;
  letter-spacing: 2px;
  word-spacing: 5px;
  line-height: 1.5;
  white-space: nowrap; /* normal, nowrap, pre, pre-wrap, pre-line */
  word-break: break-word; /* normal, break-all, keep-all, break-word */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}
```

## Layout

### Display
```css
.element {
  display: block; /* block, inline, inline-block, none, flex, grid */
  visibility: hidden; /* visible, hidden */
  opacity: 0.5; /* 0 to 1 */
  overflow: auto; /* visible, hidden, scroll, auto */
  overflow-x: hidden;
  overflow-y: scroll;
}
```

### Positioning
```css
.element {
  position: relative; /* static, relative, absolute, fixed, sticky */
  top: 10px;
  right: 20px;
  bottom: 30px;
  left: 40px;
  z-index: 10; /* Controls stacking order */
}

.element {
  float: left; /* left, right, none */
  clear: both; /* left, right, both, none */
}
```

### Flexbox
```css
.container {
  display: flex;
  flex-direction: row; /* row, row-reverse, column, column-reverse */
  flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
  flex-flow: row wrap; /* shorthand for direction and wrap */
  justify-content: space-between; /* flex-start, flex-end, center, space-between, space-around, space-evenly */
  gap: 10px; /* Gap between flex items */
}

.item {
  flex: 1 0 auto; /* grow shrink basis */
  order: 2; /* Controls order of items */
}
```

### Grid
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Three columns with proportional widths */
  grid-template-columns: repeat(3, 1fr); /* Same as above */
  grid-template-columns: minmax(100px, 1fr) 2fr; /* Minimum 100px, max 1fr */
  grid-template-rows: 100px auto 200px;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-gap: 10px; /* Gap between grid cells */
  gap: 10px 20px; /* row-gap column-gap */
  justify-items: center; /* start, end, center, stretch */
  align-items: center; /* start, end, center, stretch */
}

.item {
  grid-column: 1 / 3; /* Start at line 1, end at line 3 */
  grid-column: span 2; /* Span 2 columns */
  grid-row: 1 / 3;
  grid-area: header; /* Named area from grid-template-areas */
  justify-self: center; /* start, end, center, stretch */
  align-self: start; /* start, end, center, stretch */
}
```

## Visual Effects

### Colors and Backgrounds
```css
.element {
  color: #ff5733; /* Hex */
  color: rgb(255, 87, 51); /* RGB */
  color: rgba(255, 87, 51, 0.8); /* RGBA with alpha */
  color: hsl(14, 100%, 60%); /* HSL */
  color: hsla(14, 100%, 60%, 0.8); /* HSLA with alpha */
  
  background-color: #f0f0f0;
  background-image: url('image.jpg');
  background-repeat: no-repeat; /* repeat, repeat-x, repeat-y, no-repeat */
  background-position: center center;
  background-size: cover; /* auto, cover, contain, specific values */
  background-attachment: fixed; /* scroll, fixed, local */
  
  /* Shorthand */
  background: #f0f0f0 url('image.jpg') no-repeat center/cover fixed;
}
```

### Shadows
```css
.element {
  box-shadow: 0 2px 5px rgba(0,0,0,0.3); /* x-offset y-offset blur spread color */
  box-shadow: 0 2px 5px rgba(0,0,0,0.3), inset 0 0 3px rgba(0,0,0,0.2); /* Multiple shadows */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}
```

### Gradients
```css
.element {
  /* Linear gradient */
  background: linear-gradient(to right, #ff5733, #3498db);
  background: linear-gradient(45deg, #ff5733, #3498db);
  background: linear-gradient(to bottom, #ff5733 0%, #e84118 50%, #c23616 100%);
  
  /* Radial gradient */
  background: radial-gradient(circle, #ff5733, #3498db);
  background: radial-gradient(ellipse at top left, #ff5733 0%, #3498db 100%);
  
  /* Repeating gradients */
  background: repeating-linear-gradient(45deg, #ff5733, #ff5733 10px, #3498db 10px, #3498db 20px);
}
```

### Filters
```css
.element {
  filter: blur(5px);
  filter: brightness(1.2);
  filter: contrast(150%);
  filter: grayscale(50%);
  filter: hue-rotate(90deg);
  filter: invert(75%);
  filter: opacity(80%);
  filter: saturate(200%);
  filter: sepia(50%);
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));
  
  /* Multiple filters */
  filter: contrast(150%) brightness(1.2) blur(2px);
}
```

### Transforms
```css
.element {
  transform: translate(20px, 10px);
  transform: scale(1.5);
  transform: rotate(45deg);
  transform: skew(10deg, 5deg);
  
  /* Multiple transforms */
  transform: translate(20px, 10px) rotate(45deg) scale(1.5);
  
  /* 3D transforms */
  transform: rotateX(45deg);
  transform: rotateY(45deg);
  transform: perspective(500px) rotateY(45deg);
  
  transform-origin: center center; /* Change rotation point */
}
```

## Transitions and Animations

### Transitions
```css
.element {
  transition: property duration timing-function delay;
  transition: all 0.3s ease;
  transition: background-color 0.3s ease, transform 0.5s ease-in-out;
  
  transition-property: background-color, transform;
  transition-duration: 0.3s, 0.5s;
  transition-timing-function: ease, ease-in-out; /* linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier() */
  transition-delay: 0s, 0.2s;
}
```

### Animations
```css
/* Define keyframes */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Simple usage */
.element {
  animation: pulse 2s infinite;
}

/* Detailed properties */
.element {
  animation-name: pulse;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite; /* number or infinite */
  animation-direction: alternate; /* normal, reverse, alternate, alternate-reverse */
  animation-fill-mode: forwards; /* none, forwards, backwards, both */
  animation-play-state: running; /* running, paused */
}

/* Multiple animations */
.element {
  animation: pulse 2s infinite, slide 3s ease-in-out;
}
```

## Responsive Design

### Media Queries
```css
/* Basic media query */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}

/* Target specific devices */
/* Mobile */
@media screen and (max-width: 480px) { /* ... */ }

/* Tablet */
@media screen and (min-width: 481px) and (max-width: 1024px) { /* ... */ }

/* Desktop */
@media screen and (min-width: 1025px) { /* ... */ }

/* Device orientation */
@media (orientation: landscape) { /* ... */ }

/* Print styles */
@media print { /* ... */ }

/* Dark mode */
@media (prefers-color-scheme: dark) { /* ... */ }
```

### Viewport Units
```css
.element {
  width: 50vw; /* 50% of viewport width */
  height: 50vh; /* 50% of viewport height */
  font-size: 2vmin; /* 2% of viewport's smaller dimension */
  padding: 3vmax; /* 3% of viewport's larger dimension */
}
```

## Advanced Features

### Variables (Custom Properties)
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 16px;
  --spacing-unit: 8px;
}

.element {
  color: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
  font-size: var(--font-size-base, 16px); /* Fallback value */
}
```

### Calc Function
```css
.element {
  width: calc(100% - 40px);
  margin: calc(var(--spacing) * 2);
  font-size: calc(1rem + 0.5vw);
}
```

### Container Queries
```css
@container (min-width: 400px) {
  .element {
    display: flex;
    flex-direction: row;
  }
}

.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

@container sidebar (max-width: 300px) {
  .sidebar-item {
    flex-direction: column;
  }
}
```

### Feature Queries
```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}

@supports not (display: grid) {
  .container {
    display: flex;
  }
}

@supports (display: grid) and (grid-template-columns: subgrid) {
  /* Styles for browsers that support both grid and subgrid */
}
```

## Utility Classes

```css
/* Layout */
.d-flex { display: flex; }
.d-none { display: none; }
.d-block { display: block; }
.position-relative { position: relative; }
.position-absolute { position: absolute; }
.w-100 { width: 100%; }
.h-100 { height: 100%; }

/* Spacing */
.m-0 { margin: 0; }
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 1rem; }
.m-4 { margin: 1.5rem; }
.m-5 { margin: 3rem; }

.mt-3 { margin-top: 1rem; }
.mb-3 { margin-bottom: 1rem; }
.my-3 { margin-top: 1rem; margin-bottom: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

.p-0 { padding: 0; }
.p-3 { padding: 1rem; }
.px-3 { padding-left: 1rem; padding-right: 1rem; }
.py-3 { padding-top: 1rem; padding-bottom: 1rem; }

/* Flex utilities */
.flex-row { flex-direction: row; }
.flex-column { flex-direction: column; }
.justify-content-between { justify-content: space-between; }
.justify-content-center { justify-content: center; }
.align-items-center { align-items: center; }
.flex-wrap { flex-wrap: wrap; }
.flex-grow-1 { flex-grow: 1; }

/* Text */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.text-uppercase { text-transform: uppercase; }
.fw-bold { font-weight: bold; }
.fs-large { font-size: 1.25rem; }

/* Colors */
.bg-primary { background-color: #007bff; }
.bg-secondary { background-color: #6c757d; }
.text-white { color: white; }
.text-dark { color: #343a40; }

/* Visibility */
.visible { visibility: visible; }
.invisible { visibility: hidden; }
.opacity-50 { opacity: 0.5; }

/* Borders */
.border { border: 1px solid #dee2e6; }
.border-0 { border: 0; }
.rounded { border-radius: 0.25rem; }
.rounded-circle { border-radius: 50%; }

/* Shadows */
.shadow-sm { box-shadow: 0 .125rem .25rem rgba(0,0,0,.075); }
.shadow { box-shadow: 0 .5rem 1rem rgba(0,0,0,.15); }
.shadow-lg { box-shadow: 0 1rem 3rem rgba(0,0,0,.175); }
```

## Reset/Normalize Sample

```css
/* Mini CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
```
````markdown