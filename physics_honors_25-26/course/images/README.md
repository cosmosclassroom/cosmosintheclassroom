# Course Images Directory

This directory contains all images used throughout the Physics Honors course content.

## Structure

```
images/
├── unit_01_measurement/     # Measurement, vectors, scientific method
├── unit_02_kinematics_1d/   # 1D motion, graphical analysis
├── unit_03_kinematics_2d/   # 2D motion, projectiles
└── unit_04_dynamics/        # Forces, Newton's laws
```

## Usage in Content Files

Reference images from content using relative paths:

**From lectures:** `../images/unit_XX_name/filename.png`
**From flexbook:** `../images/unit_XX_name/filename.png`
**From labs:** `../images/unit_XX_name/filename.png`

## Build Process

1. Jekyll automatically copies these images during build
2. Export script copies them from Jekyll's `_site/` to main `_site/`
3. Images are available in final deployed site

## Adding New Images

1. Place images in appropriate unit subdirectory
2. Use descriptive, lowercase filenames with hyphens
3. Supported formats: PNG, JPG, GIF, SVG
4. Update this README when adding new unit directories