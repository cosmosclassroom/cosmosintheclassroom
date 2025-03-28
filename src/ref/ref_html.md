---
layout: default
title: HTML Reference
author: Jonathan Corbett
date: 23 March 2025
---
<toc></toc>

# Reference | HTML


[HTML Reference]: (#-HTML-Div-and-Containers-Reference-Guide)


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Document Title</title>
</head>
</html>
```
### Body would then be
```
<html>
<body>
    </body>
</html>
```

## Section Types

|Code|Type|
|-|-|
|`<!DOCTYPE html>`|: Declares the document type.
`<html lang="en">`|: The root element, specifies the document language.
`<head>`|: Contains meta-information about the HTML document (title, character set, etc.).
`<meta charset="UTF-8">`|: Sets the character encoding for proper display of various symbols.
`<meta name="viewport" ...>`|: Configures the viewport for responsive design.
`<title>`|Your Document Title</title>: The title that appears in the browser tab.
`<body>`|: Contains the visible page content.

## Semantic Sectioning:

Use these elements to structure your content logically:
Element|Layout
-|:-
``<header>``|Introductory content for a section or the entire document (e.g., title, author, abstract).
`<nav>`|Contains navigation links (less common for typical academic papers, but useful for online versions or supplementary materials).
`<main>`|The primary content of the document.
`<article>`|A self-contained composition in a document, page, application, or site (e.g., a chapter, a section with a specific focus).
`<section>`|A thematic grouping of content within an <article> or <main>. Use when content forms a related set.
`<aside>`|Content tangentially related to the main content (e.g., sidebars, supplementary notes).
`<footer>`|Contains footer information for a section or the entire document (e.g., copyright, acknowledgments, contact info).

Example:

```
HTML
<body>
    <header>
        <h1>Research Paper Title</h1>
        <p>Authors: John Doe, Jane Smith</p>
        <p>Abstract: A brief summary of the research.</p>
    </header>

    <main>
        <article>
            <section id="introduction">
                <h2>Introduction</h2>
                <p>Background information and research question.</p>
            </section>

            <section id="methods">
                <h2>Methods</h2>
                <p>Description of the experimental setup and procedures.</p>
            </section>

            <section id="results">
                <h2>Results</h2>
                <p>Presentation of the findings.</p>
            </section>

            <section id="discussion">
                <h2>Discussion</h2>
                <p>Interpretation of the results and their significance.</p>
            </section>

            <section id="conclusion">
                <h2>Conclusion</h2>
                <p>Summary of the main findings and future directions.</p>
            </section>
        </article>
    </main>

    <footer>
        <p>© 2025 John Doe and Jane Smith</p>
        <p>Contact: john.doe@email.com</p>
    </footer>
</body>
```

### Figures and Tables:

|||
|-|-|
`<figure>`| Represents self-contained content, often with a caption (e.g., images, `diagrams, code snippets).
`<img>`| Embeds an image. Use the src attribute for the image path and alt for `alternative text.
`<figcaption>`| Provides a caption for the `<figure>`.
`<table>`| Creates a table for presenting data.
`<thead>`| Contains the table header rows (`<th>`).
`<tbody>`| Contains the main table data rows (`<tr>`) with data cells (`<td>`).
`<tfoot>`| Contains the table footer rows (optional).
`<caption>`| Provides a title for the `<table>`.

---

##### Example:

Example of an html code for a table
```
HTML
<figure>
    <img src="figure1.png" alt="Graph showing experimental results">
    <figcaption>Figure 1: Experimental results over time.</figcaption>
</figure>

<table>
    <caption>Table 1: Summary of Statistical Analysis</caption>
    <thead>
        <tr>
            <th>Variable</th>
            <th>Mean</th>
            <th>Standard Deviation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Group A</td>
            <td>10.5</td>
            <td>2.1</td>
        </tr>
        <tr>
            <td>Group B</td>
            <td>12.3</td>
            <td>1.8</td>
        </tr>
    </tbody>
</table>

```
HTML
<figure>
    <img src="figure1.png" alt="Graph showing experimental results">
    <figcaption>Figure 1: Experimental results over time.</figcaption>
</figure>

<table>
    <caption>Table 1: Summary of Statistical Analysis</caption>
    <thead>
        <tr>
            <th>Variable</th>
            <th>Mean</th>
            <th>Standard Deviation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Group A</td>
            <td>10.5</td>
            <td>2.1</td>
        </tr>
        <tr>
            <td>Group B</td>
            <td>12.3</td>
            <td>1.8</td>
        </tr>
    </tbody>
</table>


### Mathematical Content:

While HTML itself doesn't render complex mathematical notation, you can integrate it using:

*MathML*: A markup language for describing mathematical notation within HTML. Requires browser support or JavaScript libraries for rendering.
LaTeX via JavaScript Libraries: Libraries like MathJax or KaTeX can render LaTeX equations within your HTML. This is a common approach in scientific writing.

Example (using MathJax - requires including the library in your `<head>`):
```HTML
<p>The equation for Einstein's theory of relativity is:</p>
<p>$$E = mc^2$$</p>
```

<html>
<p>The equation for Einstein's theory of relativity is:</p>
<p>$$E = mc^2$$</p>
</html>

#### Citations and References:

While HTML doesn't have specific citation elements, you can use standard text and potentially link to a bibliography section.
Consider using JavaScript libraries or server-side processing for more sophisticated citation management.
A simple approach is to have a dedicated <section> for "References" at the end.

Example:
```
HTML
<p>As demonstrated in previous research [Doe et al., 2020]...</p>

<section id="references">
    <h2>References</h2>
    <ul>
        <li>Doe, J., Smith, J., & Brown, K. (2020). Title of the Research Paper. <em>Journal Name</em>, <em>Volume</em>(Issue), pages.</li>
    </ul>
</section>
```

6. Metadata (within <head>):

<meta name="author" content="Your Name">: Specifies the author of the document.
<meta name="keywords" content="keywords, relevant, to, your, research">: Keywords for search engines.
<meta name="description" content="A brief description of your document.">: Description for search engine results.

7. Tips for Academic/Scientific Style:

Prioritize Semantic Markup: Use elements that accurately describe the content's meaning.
Keep it Clean and Simple: Avoid excessive styling in the HTML itself. Use CSS for visual presentation.
Accessibility: Ensure your content is accessible to everyone by using appropriate alt text for images and clear semantic structure.
Validation: Validate your HTML to ensure it is well-formed.

This cheat sheet provides a foundation for structuring your academic and scientific writing in HTML. Remember to adapt it to the specific requirements of your document and consider using CSS for styling and JavaScript for enhanced functionality.

# HTML Formatting Reference for Academic Writing (Markdown-Friendly)

This reference guide covers HTML elements that are useful for academic writing and compatible with Markdown documents. These HTML elements can be embedded directly within Markdown files to enhance layout and formatting options.

## Document Structure Elements

### Article

```html
<article>
  <h2>Section Title</h2>
  <p>Content goes here. Useful for self-contained compositions like papers or reports.</p>
</article>
```

### Section
```html
<section>
  <h3>Subsection Heading</h3>
  <p>Groups related content together. Good for organizing chapters or major divisions.</p>
</section>
```

## Layout Elements

### Columns
```html
<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
    <h3>Column 1</h3>
    <p>First column content here.</p>
  </div>
  <div style="flex: 1;">
    <h3>Column 2</h3>
    <p>Second column content here.</p>
  </div>
</div>
```

### Grid Layout
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

## Academic Elements

### Figure with Caption
```html
<figure>
  <img src="image.jpg" alt="Description of image">
  <figcaption>Figure 1: Detailed description of the figure. (Source: Citation)</figcaption>
</figure>
```

### Block Quote with Citation
```html
<blockquote>
  <p>The quoted text goes here.</p>
  <cite>— Author Name, <i>Publication Title</i>, Year</cite>
</blockquote>
```

### Table with Caption
```html
<figure>
  <table>
    <caption>Table 1: Description of data presented</caption>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
  </table>
  <figcaption>Note: Additional information about the table data or methodology.</figcaption>
</figure>
```

## Footnotes & References

### Footnote
```html
<p>This sentence needs a footnote<sup id="fnref1"><a href="#fn1">1</a></sup>.</p>

<!-- At the end of the document: -->
<section class="footnotes">
  <ol>
    <li id="fn1">Footnote content here. <a href="#fnref1">↩</a></li>
  </ol>
</section>
```

### Definition List (Glossary)
```html
<dl>
  <dt>Term</dt>
  <dd>Definition or explanation of the term.</dd>
  
  <dt>Another Term</dt>
  <dd>Its definition.</dd>
</dl>
```

## Styling & Semantic Elements

### Text Highlighting
```html
<mark>Highlighted text</mark> for emphasis or to indicate relevance.
```

### Subscript & Superscript
```html
H<sub>2</sub>O (subscript)
E = mc<sup>2</sup> (superscript)
```

### Code or Variable
```html
<code>var = function()</code> for inline code
<var>x</var> for mathematical variables
```

### Abbreviation with Full Form
```html
<abbr title="Full form of the abbreviation">Abbr</abbr>
```

## Accessibility Elements

### Details & Summary (Expandable Content)
```html
<details>
  <summary>Click to expand for additional information</summary>
  <p>Extended content that appears when expanded. Good for supplementary material.</p>
</details>
```

### Keyboard Navigation
```html
<div tabindex="0" role="button">Interactive element</div>
```

# HTML Div and Containers Reference Guide

## What is a <div>?
- A <div> is a block-level container element used to group and structure content
- Stands for "division" and provides a way to create logical sections in HTML
- By default, takes up the full width of its parent container
- Primarily used for layout and styling purposes

## Basic Usage
```html
<div class="container">
    <div class="section">
        <p>Content inside nested divs</p>
    </div>
</div>
```

## Key Attributes
- `class`: Assign CSS classes for styling
- `id`: Unique identifier for specific targeting
- `style`: Inline styling (use sparingly)

## Container Types
1. **Block Containers**
   - Full-width elements that stack vertically
   - Examples: `<div>`, `<section>`, `<article>`

2. **Inline Containers**
   - Content flows inline
   - Examples: `<span>`, `<label>`

## Common Container Patterns
### Flexbox Container
```html
<div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
</div>
```
```css
.flex-container {
    display: flex;
    justify-content: space-between;
}
```

### Grid Container
```html
<div class="grid-container">
    <div class="grid-item">Grid Cell 1</div>
    <div class="grid-item">Grid Cell 2</div>
</div>
```
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
```

## Best Practices
- Use semantic HTML5 elements when possible (e.g., `<section>`, `<article>`)
- Keep divs meaningful and avoid excessive nesting
- Use classes for styling, IDs for unique JavaScript interactions
- Prioritize accessibility and meaningful structure

## Performance Tips
- Minimize unnecessary div wrappers
- Use CSS Grid or Flexbox for efficient layouts
- Consider using CSS `display` properties for advanced structuring



# HTML Div and Containers Reference Guide

## What is a <div>?
- A <div> is a block-level container element used to group and structure content
- Stands for "division" and provides a way to create logical sections in HTML
- By default, takes up the full width of its parent container
- Primarily used for layout and styling purposes

## Basic Usage
```html
<div class="container">
    <div class="section">
        <p>Content inside nested divs</p>
    </div>
</div>
```

## Key Attributes
- `class`: Assign CSS classes for styling
- `id`: Unique identifier for specific targeting
- `style`: Inline styling (use sparingly)

## Container Types
1. **Block Containers**
   - Full-width elements that stack vertically
   - Examples: `<div>`, `<section>`, `<article>`

2. **Inline Containers**
   - Content flows inline
   - Examples: `<span>`, `<label>`

## Common Container Patterns
### Flexbox Container
```html
<div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
</div>
```


```css
.flex-container {
    display: flex;
    justify-content: space-between;
}
```

### Grid Container
```html
<div class="grid-container">
    <div class="grid-item">Grid Cell 1</div>
    <div class="grid-item">Grid Cell 2</div>
</div>
```
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
```

## Best Practices
- Use semantic HTML5 elements when possible (e.g., `<section>`, `<article>`)
- Keep divs meaningful and avoid excessive nesting
- Use classes for styling, IDs for unique JavaScript interactions
- Prioritize accessibility and meaningful structure

## Performance Tips
- Minimize unnecessary div wrappers
- Use CSS Grid or Flexbox for efficient layouts
- Consider using CSS `display` properties for advanced structuring