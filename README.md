# Windows Directory Tree Commands

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
