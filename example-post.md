---
layout: default
title: Your Page Title
description: A brief description of this page's content
math: true  # Set to false if you don't need math rendering
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PS Layout</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        .body {
            font-family: Arial, sans-serif;
            content: center;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        .container {
            display: inline-flex;
            flex-direction: row;
            min-width: 40%;
            max-height: auto;
            margin: 1rem;
            border: 1rem; solid: #e2e2e2;
            border-radius: 1rem;
            max-width: 90%;
            flex: 1;
            box-shadow: #e2e2e2 1px 1px 5px;
        }
        .content {
            padding: 20px;
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <div>
        <h1>This is the header for the content page</h1>
    </div>
    <div class="container">
        <div class="content">
            <h1>Content Panel 1</h1>
        </div>
    <div class="content">
        <h1>Content Panel 2</h1>
        <p>I don't really think this is great content, but it belongs in content panel 1.</p>
        </div>
    </div>
    <div class="content">
    # This is a header
      This is normal text
  </div>
  <span> Test </span>
  <span> Test Test Test Test </span>

  <button id="toggleContainerBtn">Hide Container</button>
  <script>
      const btn = document.getElementById('toggleContainerBtn');
      const container = document.querySelector('.container');
      let visible = true;
      btn.addEventListener('click', () => {
          visible = !visible;
          container.style.display = visible ? 'inline-flex' : 'none';
          btn.textContent = visible ? 'Hide Container' : 'Show Container';
      });
  </script>
    
</body>
</html>
