---
layout: default
title: Latex Reference
author: Jonathan Corbett
date: 23 March 2025
math: kandown
---

<div style="display: flex; gap: 10px;">
  <a href="ref_latex.html"><button>LaTeX Reference</button></a>
  <a href="ref_pandoc.html"><button>Pandoc Reference</button></a>
  <a href="stable-diffusion.html"><button>Stable Diffusion Reference</button></a>
  <a href="additional_ref_1.html"><button>Additional Reference 1</button></a>
  <a href="additional_ref_2.html"><button>Additional Reference 2</button></a>
</div>


Regular variables
```
x, v, a, F  % Regular variables
```
Change in variables
```
\Delta x, \Delta t
```

Vectors
```
\vec{F}, \vec{v}

```

# Fractions #
``
$\frac{a}{b}  % Fraction (a/b) | $\frac{a}{b}$
``
## Exponents ##

Exponents | Example
------------------ | -----------------------
 x^2, y^{-1} | $x^2, y^{-1}$

## Greek Letters  ##
\alpha, \beta, \gamma, \theta, \lambda

## Trigonometry ##
```
\sin \theta, \cos \theta, \tan \theta
```

## Inline Equations ##
```
$F = ma$  % Inline equation
```
```
\begin{equation}
    F = ma
\end{equation}
```

## Systems of equations ##
```
\begin{align}
    v_f &= v_i + at \\
    s &= v_i t + \frac{1}{2} a t^2
\end{align}
```
$$
\begin{align}
    v_f &= v_i + at \\
    s &= v_i t + \frac{1}{2} a t^2
\end{align}
$$

## SI Units (siunitx Package) #
```
\SI{9.8}{m/s^2}  % 9.8 m/s²
```

## Scientific Notation ##
```
3.0 \times 10^8 \text{ m/s}  % Scientific notation
```


<footer>
  <p><a href="index.html">Back to Home Page</a></p>
</footer>