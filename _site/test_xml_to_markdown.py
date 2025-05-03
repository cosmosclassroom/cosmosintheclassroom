import os
from xml_to_markdown import convert_xml_to_markdown

def main():
    # Define file paths
    current_dir = os.path.dirname(os.path.abspath(__file__))
    xml_file = os.path.join(current_dir, "example.xml")
    output_dir = os.path.join(current_dir, "output")
    
    print("Converting XML to Markdown...")
    markdown_path = convert_xml_to_markdown(xml_file, output_dir)
    
    print(f"\nConverted Markdown content:")
    with open(markdown_path, 'r', encoding='utf-8') as f:
        print(f.read())

if __name__ == "__main__":
    main()
