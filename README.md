# Windows Directory Tree Commands

<<<<<<< HEAD
This is an instructional website by Jonathan Corbett.

## New Features

### Slides Rendered by Marp and Served by Reveal.js
- Slides are created using [Marp](https://marp.app/), a Markdown-based slide deck generator.
- The generated slides are served using [Reveal.js](https://revealjs.com/) for interactive presentations.
- Slides are located in the `slides` directory.

### Markdown Files Served via HTML Using Marked.js
- Markdown files are dynamically rendered into HTML using [Marked.js](https://marked.js.org/).
- These files are served through the `src` directory, with support for LaTeX rendering using KaTeX.
- Navigation between markdown files is enabled via JavaScript.

## Directory Structure
- `slides/`: Contains Marp-generated slides served by Reveal.js.
- `src/`: Contains HTML and JavaScript for rendering markdown files dynamically.
- `assets/`: Contains shared CSS and JavaScript assets.

## How to Use
1. **Slides**: Open the `slides/index.html` file in a browser to view the presentations.
2. **Markdown Viewer**: Open the `src/sphys/p5_waves_info/p5_notebook.html` file to navigate and view markdown files.
=======
## Limiting Tree Command Depth

To display a directory tree structure with files (`/F`) and limit it to only 3 levels deep, use the following command in Windows Command Prompt:

```cmd
tree /F /A /L 3
```

### Parameters Explained:

- `/F` - Display the names of the files in each folder
- `/A` - Use ASCII characters instead of extended characters
- `/L n` - Limit the display to n levels of the directory tree (e.g., `/L 3` for 3 levels)

### Example:

```
C:\>tree /F /A /L 3 D:\python
D:\PYTHON
|   README.txt
|   setup.py
|
+---cosmosintheclassroom
|   |   example.xml
|   |   README.md
|   |   test_xml_to_markdown.py
|   |   xml_to_markdown.py
|   |
|   \---output
|       |   example.md
|       |
|       \---images
|               [Files not shown due to level limit]
|
\---otherproject
    |   main.py
    |
    \---modules
        |   module1.py
        |   module2.py
        |
        \---submodules
                [Contents not shown due to level limit]
```

### Notes:

- Without the `/L` parameter, the `tree` command will display all levels.
- The maximum depth you can specify is 999.
- For very large directory structures, limiting the depth can make the output more manageable.
>>>>>>> dev
