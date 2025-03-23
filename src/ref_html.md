
# Heading in HTML
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

3. Figures and Tables:

<figure>: Represents self-contained content, often with a caption (e.g., images, diagrams, code snippets).
<img>: Embeds an image. Use the src attribute for the image path and alt for alternative text.
<figcaption>: Provides a caption for the <figure>.
<table>: Creates a table for presenting data.
<thead>: Contains the table header rows (<th>).
<tbody>: Contains the main table data rows (<tr>) with data cells (<td>).
<tfoot>: Contains the table footer rows (optional).
<caption>: Provides a title for the <table>.

Example:
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

4. Mathematical Content:

While HTML itself doesn't render complex mathematical notation, you can integrate it using:

MathML: A markup language for describing mathematical notation within HTML. Requires browser support or JavaScript libraries for rendering.
LaTeX via JavaScript Libraries: Libraries like MathJax or KaTeX can render LaTeX equations within your HTML. This is a common approach in scientific writing.

Example (using MathJax - requires including the library in your <head>):
```
HTML
<p>The equation for Einstein's theory of relativity is:</p>
<p>$$E = mc^2$$</p>
```

5. Citations and References:

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
