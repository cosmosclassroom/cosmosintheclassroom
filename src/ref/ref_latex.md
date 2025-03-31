---
layout: default
title: Latex Reference
author: Jonathan Corbett
date: 23 March 2025
markdown: kandown
mathjax: true
---

# Reference - LaTeX

Regular variables
```
x, v, a, F  
```
Change in variables
```
\Delta x, \Delta t
```
Vectors

$\vec{F},\, \vec{v}$
```
\vec{F}, \vec{v}

```

# Fractions #

$\frac{a}{b}$ 

``
$\frac{a}{b}
``
## Exponents ##

Exponents | Example
------------------ | -----------------------
 `x^2, y^{-1} `| $x^2, y^{-1}$

## Greek Letters  ##

$\alpha, \beta, \gamma, \theta, \lambda$

\alpha, \beta, \gamma, \theta, \lambda

## Trigonometry ##
$\sin \theta, \cos \theta, \tan \theta$

```
\sin \theta, \cos \theta, \tan \theta
```

## Inline Equations ##
```
$F = ma$  % Inline equation


\begin{equation}
    \vec{F} = ma
\end{equation}
```
$F = ma$  % Inline equation

$$
\begin{equation}
    \vec{F} = ma \label{eq:force}
\end{equation}
$$

You can reference this equation as Equation \ref{eq:force}.

## Subscripts

```
$F_g=m \cdot a_g$
$F_{g_{Europa}} = x \cdot a_g?$
```

$F_g=m \cdot a_g$

$F_{g_{Europa}} = x \cdot a_{g_{Earth}}$ 

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


## Scientific Notation ##

$3.0 \times 10^8 \text{ m/s}$

```
3.0 \times 10^8 \text{ m/s}
3.0 \times 10^{80} \text{ m/s}
```


<footer>
  <p><a href="index.html">Back to Home Page</a></p>
</footer>
