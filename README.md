# XML to Markdown Converter

A Python utility for converting XML documents to Markdown format and extracting embedded images.

## Features

- Converts common XML elements to their Markdown equivalents
- Extracts embedded base64 images and saves them to a separate folder
- Handles external image references
- Preserves document structure and formatting

## Usage

### Command Line

```bash
python xml_to_markdown.py your_xml_file.xml --output_dir output_folder
```

### Python API

```python
from xml_to_markdown import convert_xml_to_markdown

# Convert XML to markdown
convert_xml_to_markdown('your_xml_file.xml', 'output_folder')
```

## Supported XML Elements

- Headings (h1, h2, h3)
- Paragraphs (p)
- Text formatting (strong, b, em, i, code)
- Links (a href)
- Lists (ul, ol, li)
- Images (img with src attribute)
- Code blocks (pre)

## Requirements

- Python 3.6 or higher

## Getting Started

1. Clone the repository
2. Run the test script: `python test_xml_to_markdown.py`
3. Check the output folder for the generated Markdown and extracted images

## Example

See the included `example.xml` file for a demonstration of the conversion capabilities.
