---
title: Markdown implementations of HTML Styling
author: Jonathan Corbett
date: "March 22, 2025"
---

### CSS Flexbox or CSS Grid

Creates two columns

```
<div class="container">
  <div class="column">Column 1</div>
  <div class="column">Column 2</div>
</div>
```
and the corresponding css:
```
.container {
  display: flex;
}
```
### Using CSS Grid
```
<div class="grid-container">
  <div class="grid-item">Column 1</div>
  <div class="grid-item">Column 2</div>
</div>
```


# Markdown works inside of it

```
<div markdown="1" class="columns">
  <div markdown="1" class="column">
    Column 1
    This is the content for the first column. You can include text, images, or other elements here.
  </div>
  <div markdown="1" class="column">
    Column 2
    This is the content for the second column. It can also include various types of content.
  </div>
</div>


```