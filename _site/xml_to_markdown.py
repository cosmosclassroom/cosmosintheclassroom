import os
import sys
import re
import base64
import argparse
from pathlib import Path
import xml.etree.ElementTree as ET

def convert_xml_to_markdown(xml_path, output_dir):
    """
    Convert XML content to Markdown and extract images
    
    Args:
        xml_path (str): Path to the XML file
        output_dir (str): Directory to save markdown and images
    """
    # Create output directory if it doesn't exist
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)
    
    # Create images directory
    img_dir = output_dir / "images"
    img_dir.mkdir(exist_ok=True)
    
    # Parse XML file
    tree = ET.parse(xml_path)
    root = tree.getroot()
    
    # Extract title if available
    title = ""
    title_elem = root.find(".//title")
    if title_elem is not None and title_elem.text:
        title = f"# {title_elem.text.strip()}\n\n"
    
    # Convert XML content to markdown
    markdown_content = title + process_element(root, img_dir)
    
    # Save markdown file
    md_filename = os.path.splitext(os.path.basename(xml_path))[0] + ".md"
    md_path = output_dir / md_filename
    
    with open(md_path, "w", encoding="utf-8") as md_file:
        md_file.write(markdown_content)
    
    print(f"Markdown file saved to: {md_path}")
    print(f"Images extracted to: {img_dir}")
    
    return md_path

def process_element(element, img_dir, depth=0):
    """Process an XML element recursively and convert to markdown"""
    if element.tag == 'img' or element.tag.endswith('}img'):
        return process_image(element, img_dir)
    
    text = element.text or ""
    tail = element.tail or ""
    
    # Handle various XML tags
    if element.tag.endswith('}h1') or element.tag == 'h1':
        text = f"# {text.strip()}\n\n"
    elif element.tag.endswith('}h2') or element.tag == 'h2':
        text = f"## {text.strip()}\n\n"
    elif element.tag.endswith('}h3') or element.tag == 'h3':
        text = f"### {text.strip()}\n\n"
    elif element.tag.endswith('}p') or element.tag == 'p':
        text = f"{text.strip()}\n\n"
    elif element.tag.endswith('}strong') or element.tag == 'strong' or element.tag.endswith('}b') or element.tag == 'b':
        text = f"**{text.strip()}**"
    elif element.tag.endswith('}em') or element.tag == 'em' or element.tag.endswith('}i') or element.tag == 'i':
        text = f"*{text.strip()}*"
    elif element.tag.endswith('}code') or element.tag == 'code':
        text = f"`{text.strip()}`"
    elif element.tag.endswith('}a') or element.tag == 'a':
        href = element.get('href')
        if href:
            text = f"[{text.strip()}]({href})"
    elif element.tag.endswith('}ul') or element.tag == 'ul':
        # List items will be handled by their children
        text = ""
    elif element.tag.endswith('}ol') or element.tag == 'ol':
        # List items will be handled by their children
        text = ""
    elif element.tag.endswith('}li') or element.tag == 'li':
        if element.getparent() is not None and (element.getparent().tag.endswith('}ol') or element.getparent().tag == 'ol'):
            # If we don't have access to parent or index, we'll just use a simple list marker
            text = f"1. {text.strip()}\n"
        else:
            text = f"* {text.strip()}\n"
    elif element.tag.endswith('}pre') or element.tag == 'pre':
        text = f"```\n{text}\n```\n\n"
    
    # Process children
    children_text = ""
    for child in element:
        children_text += process_element(child, img_dir, depth + 1)
    
    return text + children_text + tail

def process_image(img_element, img_dir):
    """Extract and save an image from an XML element"""
    img_src = img_element.get('src')
    alt_text = img_element.get('alt', '')
    
    if not img_src:
        return ""
    
    # Handle different image formats
    if img_src.startswith('data:image'):
        # Base64 encoded image
        img_data = re.sub('^data:image/[a-zA-Z]+;base64,', '', img_src)
        img_extension = re.search('data:image/([a-zA-Z]+);', img_src)
        if img_extension:
            img_extension = img_extension.group(1).lower()
        else:
            img_extension = 'png'
            
        img_filename = f"image_{len(os.listdir(img_dir)) + 1}.{img_extension}"
        img_path = os.path.join(img_dir, img_filename)
        
        with open(img_path, 'wb') as img_file:
            img_file.write(base64.b64decode(img_data))
        
        # Return markdown image syntax
        return f"![{alt_text}](images/{img_filename})\n\n"
    else:
        # External or relative URL
        if img_src.startswith(('http://', 'https://')):
            # Just return markdown with original URL for external images
            return f"![{alt_text}]({img_src})\n\n"
        else:
            # For relative paths, we'll try to copy the image if found
            try:
                # Basic handling of relative paths
                img_filename = os.path.basename(img_src)
                img_path = os.path.join(img_dir, img_filename)
                
                # If the image file exists locally relative to XML
                if os.path.exists(img_src):
                    import shutil
                    shutil.copy2(img_src, img_path)
                    return f"![{alt_text}](images/{img_filename})\n\n"
                else:
                    # Can't locate image, but keep the reference
                    return f"![{alt_text}]({img_src})\n\n"
            except Exception as e:
                print(f"Error processing image {img_src}: {e}")
                return f"![{alt_text}]({img_src})\n\n"

def main():
    parser = argparse.ArgumentParser(description='Convert XML to Markdown and extract images')
    parser.add_argument('xml_file', help='Path to the XML file')
    parser.add_argument('--output_dir', '-o', default='output',
                        help='Directory to save markdown and images (default: output)')
    
    args = parser.parse_args()
    
    convert_xml_to_markdown(args.xml_file, args.output_dir)

if __name__ == "__main__":
    main()
