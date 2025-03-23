---
title: "Document Title"
author: "Your Name"
date: "March 22, 2025"
css: templates/styles/styles.css
---

# Markdown Reference

[TOC]

[The end of the document](#the-end-of-the-document)
[ref_lated](D:/python/Jupyter/Reference/ref_latex.html)



| Feature    | Description  | Example |
|------------|--------------|---------|
| Headers    | Titles       | `# Title (H1)`<br>`## Section (H2)`<br>`### Subsection (H3)` |
| Emphasis   | Text Styles  | `*Italic* or _Italic_` <br> `**Bold** or __Bold__`<br>`~~Strikethrough~~` |
| Lists      | Bullets      | `- Bullet list item` <br> `- nested list item` <br> `1. Numbered List Item` <br> `2. Another list item` <br> `> Indented block quote` |
| Equations  | Euler’s formula | `$e^{i\pi} + 1 = 0$` |
| Images     | Inline image | `![Caption][image.png]` |
| Layout     | Horizontal Line | `---` |
| Links      | Hyperlinks   | `[Link Text](http://example.com)` <br> `[Link Text][1]` <br> `[1]: http://example.com` |
| Code       | Inline and Block | `` `Inline code` `` <br> ``` ```python<br>def function():<br>    pass<br>``` ``` |

#### A code block

```html
<button onclick="toggleVisibility()">Toggle Content</button>
<div id="content" style="display:none;">
  This content can be shown or hidden.
  ```Markdown
  This is markdown information that is hidden
  ```
</div>

<script>
function toggleVisibility() {
  var content = document.getElementById("content");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
</script>
```


# # The end of the document

A Subsection

## a subsection subsection
- Bullet
dhis is markdown
*but* it's doing strange things

mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;

# footer

<footer>
  <p><a href="index.html">Back to Home Page</a></p>
</footer>

