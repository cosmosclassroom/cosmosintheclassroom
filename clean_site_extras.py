import os
import shutil

# Paths to clean
SITE_DIR = os.path.join(os.path.dirname(__file__), '_site')
EXTRA_FOLDERS = ['_includes', '_layouts']

removed = []
for folder in EXTRA_FOLDERS:
    path = os.path.join(SITE_DIR, folder)
    if os.path.exists(path):
        shutil.rmtree(path)
        removed.append(path)
    # Also check for nested _includes/_layouts inside _site/_includes
    nested_path = os.path.join(SITE_DIR, '_includes', folder)
    if os.path.exists(nested_path):
        shutil.rmtree(nested_path)
        removed.append(nested_path)

if removed:
    print("Removed extra folders:")
    for p in removed:
        print(f"- {p}")
else:
    print("No extra folders found in _site.")
