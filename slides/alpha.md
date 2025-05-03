---
title: alpha
layout: slidesC
author: Jonathan Corbett
marp: true

---

<style>
    . * {
        font-family: Garamond, serif;
        border: border-box;
    }
    
    }
    .container {
        display: flex;
        justify: center;
        flex: space-between;
    }

    .container > div {
        background: Grey;
        border: 1px black solid;
        box-shadow: 5px grey;
    }
    .container > img {
        padding: 1px;
        border: 1px black solid; 
        shadow: 1px black solid; 
    }
 
    h1 {
            display: block;
            margin: 1px;
            border
    }
    ul, li {
        list-style: none;
    }
</style>

# Marp
## This is the wing

### There are more subheadings

#### It goes smaller even still

before essentially standard text 

---

## This is H2 in Marp
<!-- _container -->

<div class="container">
    <div>
    This is content in the container and is causing the image to flex, which is good.
    - I think there is a list
    - *And now each list item will flex?
    - No, the list itself counts as a flex item - interesting. ok, good to know
    </div>
<div>

![align](../assets/images/aristotle.png)()

</div>

---

<!-- class="container" -->

# Slide B

Where exactly is this slide?

<div class='container'>
<div>

 alpha 

</div>
<div> beta </div>
</div>

---

<section>

# Second Slide

## Second Header on Second Slide

Second slide's body text in /slides/alpha.md
</section>

---
<!-- _container -->

Flex

Flex

Flexx

<div>
Flex?</div>


---