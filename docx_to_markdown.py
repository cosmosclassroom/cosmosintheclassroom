import os
import zipfile
import re
import mammoth
import shutil
from pathlib import Path
from docx import Document

def extract_images_from_docx(docx_path, output_dir):
    """Extract images from a docx file to the output directory."""
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Extract images using zipfile
    image_files = []
    with zipfile.ZipFile(docx_path) as zf:
        for file_info in zf.infolist():
            if file_info.filename.startswith('word/media/'):
                image_name = os.path.basename(file_info.filename)
                image_path = os.path.join(output_dir, image_name)
                with open(image_path, 'wb') as f:
                    f.write(zf.read(file_info.filename))
                image_files.append((image_name, image_path))
    
    return image_files

def convert_docx_to_markdown(docx_path, output_dir):
    """Convert a docx file to Markdown and extract images."""
    # Create base filename without extension
    base_name = os.path.splitext(os.path.basename(docx_path))[0]
    
    # Create image directory for this document
    image_dir = os.path.join(output_dir, f"{base_name}_images")
    os.makedirs(image_dir, exist_ok=True)
    
    # Extract images
    images = extract_images_from_docx(docx_path, image_dir)
    
    # Convert to markdown using mammoth
    with open(docx_path, "rb") as docx_file:
        result = mammoth.convert_to_markdown(
            docx_file,
            extract_images=mammoth.images.inline(lambda image: {
                "src": f"{base_name}_images/{image.alt_text or 'image'}.png"
            })
        )
    
    markdown = result.value
    
    # Write markdown to file
    markdown_path = os.path.join(output_dir, f"{base_name}.md")
    with open(markdown_path, "w", encoding="utf-8") as md_file:
        md_file.write(markdown)
    
    print(f"Converted {docx_path} to {markdown_path}")
    print(f"Extracted {len(images)} images to {image_dir}")
    
    return markdown_path, image_dir

def batch_convert(input_dir, output_dir):
    """Convert all docx files in input_dir to markdown in output_dir."""
    os.makedirs(output_dir, exist_ok=True)
    
    converted_files = []
    for file in os.listdir(input_dir):
        if file.endswith(".docx") and not file.startswith("~$"):  # Exclude temp files
            docx_path = os.path.join(input_dir, file)
            markdown_path, image_dir = convert_docx_to_markdown(docx_path, output_dir)
            converted_files.append((docx_path, markdown_path, image_dir))
    
    return converted_files

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Convert DOCX files to Markdown with image extraction")
    parser.add_argument("input_dir", help="Directory containing DOCX files")
    parser.add_argument("--output_dir", help="Output directory for Markdown files and images", 
                        default="markdown_output")
    
    args = parser.parse_args()
    
    converted = batch_convert(args.input_dir, args.output_dir)
    
    print(f"\nConverted {len(converted)} files:")
    for docx, md, img_dir in converted:
        print(f"  {os.path.basename(docx)} → {os.path.basename(md)}")
    
    print(f"\nAll files have been converted to {os.path.abspath(args.output_dir)}")

