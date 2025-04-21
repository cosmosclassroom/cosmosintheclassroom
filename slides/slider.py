import argparse
from pathlib import Path
import subprocess
import yaml
import sys
import os

class MarpConverter:
    def __init__(self, config_file=None):
        self.config = {}
        if config_file and Path(config_file).exists():
            with open(config_file) as f:
                self.config = yaml.safe_load(f)
    
    def extract_frontmatter(self, markdown_file):
        """Extract YAML frontmatter from markdown file"""
        with open(markdown_file) as f:
            content = f.read()
        if content.startswith('---'):
            _, frontmatter, _ = content.split('---', 2)
            return yaml.safe_load(frontmatter)
        return {}

    def validate_theme(self, theme_path):
        """Validate theme CSS syntax"""
        if not theme_path.exists():
            return False
        
        try:
            with open(theme_path) as f:
                css = f.read()
            # Basic validation - check for missing semicolons
            if css.count('{') != css.count('}') or ';{}'.format('') not in css:
                print(f"Warning: Theme file {theme_path} may have syntax errors")
                return False
            return True
        except Exception as e:
            print(f"Error validating theme: {e}")
            return False

    def convert_slides(self, input_path: str, output_dir: Path, theme=None):
        """Convert Marp markdown to HTML"""
        try:
            # Convert input path to absolute path
            if not os.path.isabs(input_path):
                # Remove any leading 'cosmosintheclassroom/slides' if present
                input_path = input_path.replace('cosmosintheclassroom/slides/', '')
                input_path = input_path.replace('cosmosintheclassroom\\slides\\', '')
                # Make path relative to script location
                input_path = os.path.join(os.path.dirname(__file__), input_path)
            
            input_path = Path(input_path)
            
            # Add .md extension if missing
            if not input_path.suffix:
                input_path = input_path.with_suffix('.md')
            
            if not input_path.exists():
                raise FileNotFoundError(f"Input file not found: {input_path}")
                
            output_dir = Path(output_dir)
            if not output_dir.suffix:
                output_dir = output_dir.with_suffix('.html')
            
            # Get theme from frontmatter if not specified
            if not theme:
                frontmatter = self.extract_frontmatter(input_path)
                theme = frontmatter.get('theme')
            
            # Ensure output directory exists
            output_dir.parent.mkdir(parents=True, exist_ok=True)
            
            # Build marp-cli command
            cmd = ["cmd", "/c", "npx.cmd", "@marp-team/marp-cli"]
            cmd.extend([str(input_path), "--html"])
            cmd.extend(["--output", str(output_dir)])
            
            if theme:
                theme_path = Path("themes") / f"{theme}.css"
                if self.validate_theme(theme_path):
                    cmd.extend(["--theme", str(theme_path)])
                else:
                    print(f"Warning: Using default theme due to validation errors")
            
            print(f"Converting: {input_path}")
            print(f"Output to: {output_dir}")
            subprocess.run(cmd, check=True)
            print("Conversion successful!")
            
        except Exception as e:
            print(f"Error: {e}")
            sys.exit(1)

def list_available_themes(theme_dir="themes"):
    theme_files = list(Path(theme_dir).glob("*.css"))
    print("\nAvailable themes:")
    for theme in theme_files:
        print(f"- {theme.stem}")
    return theme_files

def get_user_preferences(input_path):
    themes = list_available_themes()
    if themes:
        theme_choice = input("\nEnter theme name (or press Enter to skip): ").strip()
        if theme_choice and not any(t.stem == theme_choice for t in themes):
            print("Warning: Selected theme not found. Proceeding without theme.")
            theme_choice = None
    else:
        theme_choice = None
    
    default_output = Path(input_path).stem + '.html'
    output_name = input(f"\nEnter output filename (default: {default_output}): ").strip()
    output_name = output_name if output_name else default_output
    
    return theme_choice, output_name

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert Marp markdown to HTML")
    parser.add_argument("input", help="Input markdown file or directory (with or without .md extension)")
    parser.add_argument("--output", "-o", help="Output directory", default=".")
    parser.add_argument("--theme", "-t", help="Marp theme to use")
    parser.add_argument("--config", "-c", help="Config file path")
    
    try:
        args = parser.parse_args()
        theme_choice, output_name = get_user_preferences(args.input)
        
        converter = MarpConverter(args.config)
        output_path = Path(args.output) / output_name
        converter.convert_slides(args.input, output_path, theme_choice or args.theme)
    except KeyboardInterrupt:
        print("\nOperation cancelled by user.")
        sys.exit(0)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)