---
layout: default
title: "Document Title"
author: "Your Name"
date: "March 22, 2025"
abstract: A concise reference sheet for producing scientific educational content using pandoc
---

# Pandoc Reference Sheet
**Focus: LaTeX-rich exports with KaTeX and Marp**  
*Last updated: March 22, 2025*

## Basic Conversion Commands

| From | To | Command |
|------|------|---------|
| Markdown | PDF | `pandoc input.md -o output.pdf --pdf-engine=xelatex` |
| Markdown | HTML (with KaTeX) | `pandoc input.md -o output.html --katex` |
| Markdown | PPTX (via Marp) | `marp input.md --pptx -o slides.pptx` |
| Multiple files | Single PDF | `pandoc chapter1.md chapter2.md -o book.pdf` |

## HTML Export with KaTeX for Math

```bash
# Basic HTML with KaTeX rendering for math
pandoc input.md -o output.html --katex

# Standalone HTML with custom styling
pandoc input.md -o output.html --katex --standalone --css=style.css

# Self-contained HTML (includes all assets)
pandoc input.md -o output.html --katex --self-contained
```

### KaTeX-Specific Options

```bash
# Use a specific KaTeX version
pandoc input.md -o output.html --katex="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/"

# Add KaTeX options
pandoc input.md -o output.html --katex --metadata katexOptions:"{throwOnError: false}"
```

## PDF Export with LaTeX Math

```bash
# Basic PDF with LaTeX math
pandoc input.md -o output.pdf --pdf-engine=xelatex

# PDF with customized margins and font size
pandoc input.md -o output.pdf --pdf-engine=xelatex -V geometry:margin=1in -V fontsize=12pt

# PDF with table of contents and numbered sections
pandoc input.md -o output.pdf --pdf-engine=xelatex --toc --number-sections

# PDF with bibliography and citations
pandoc input.md -o output.pdf --pdf-engine=xelatex --citeproc --bibliography=sources.bib
```

## Presentations with Marp (PPTX)

```bash
# Basic Marp presentation
marp input.md --pptx -o slides.pptx

# Marp with specific theme
marp input.md --pptx -o slides.pptx --theme default

# Marp with custom theme file
marp input.md --pptx -o slides.pptx --theme-set custom-theme.css
```

### Alternative: Direct Pandoc to PPTX

```bash
# Using Pandoc for PowerPoint (less LaTeX support than Marp)
pandoc input.md -o slides.pptx -t pptx

# With slide level specified
pandoc input.md -o slides.pptx -t pptx --slide-level=2
```

## Writing LaTeX in Your Markdown

### Inline Math

```markdown
Einstein's equation: $E = mc^2$

The Pythagorean theorem: $a^2 + b^2 = c^2$
```

### Display Math

```markdown
The quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

Maxwell's equations:

$$\begin{aligned}
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
\end{aligned}$$
```

## Setting Document Metadata

```yaml
---
title: "Document Title"
author: "Your Name"
date: "March 22, 2025"
abstract: "A brief description of the document."
bibliography: references.bib
---
```

## Marp-Specific Syntax

```markdown
---
marp: true
theme: default
paginate: true
math: katex
---

# Slide 1

Content for first slide

---

# Slide 2

Math example: $E = mc^2$

---

<!-- 
_backgroundColor: black
_color: white
-->

# Dark Slide

With custom background
```

## Example Workflow: Math-Heavy PDF Document

1. Create markdown file with LaTeX equations
2. Include YAML metadata header with document info
3. Run: `pandoc input.md -o output.pdf --pdf-engine=xelatex --toc`

## Example Workflow: Math Presentation with Marp

1. Create markdown file with marp directives and LaTeX
2. Include marp: true in YAML header with math: katex
3. Run: `marp input.md --pptx -o presentation.pptx`

## Example Workflow: Web Page with KaTeX

1. Create markdown file with inline and display math
2. Create custom CSS file for styling (optional)
3. Run: `pandoc input.md -o webpage.html --katex --standalone --css=style.css`

## Helpful Resources

- [Pandoc Documentation](https://pandoc.org/MANUAL.html)
- [KaTeX Documentation](https://katex.org/docs/supported.html)
- [Marp Documentation](https://marp.app/)
- [LaTeX Math Reference](https://en.wikibooks.org/wiki/LaTeX/Mathematics)