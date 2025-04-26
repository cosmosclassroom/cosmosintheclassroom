# socrates
This is Socrates, an AI-Assisted Educational Library designed by Jonathan Corbett


# Repository Separation Plan

## Overview
- **cosmos-repo**: Public-facing website repository (built HTML, CSS, JS)
- **socrates-repo**: Private source files repository (source materials, answers, exams)

## File Mapping

| Original Location (cosmos) | New Location (socrates) | Notes |
|---------------------------|------------------------|-------|
| `/build/scripts/*.py` | `/scripts/*.py` | Move all build scripts to socrates |
| `/00 Exams/*` | `/courses/physics/exams/*` | Move all exam content to socrates |
| `/00 Teacher/*` | `/courses/physics/teacher/*` | Move teacher materials to socrates |
| `/*.md` | `/docs/*.md` | Move documentation to socrates |
| `/styles/*` | `/public/styles/*` | Keep in cosmos (public website files) |
| `/images/*` | `/public/images/*` | Keep in cosmos (public website files) |
| `/js/*` | `/public/js/*` | Keep in cosmos (public website files) |

## Data Storage
- Move all data storage to socrates:
  - `/data/quiz_responses/*` → `/data/quiz_responses/*`

## GitHub Actions Workflows
- Update workflows to:
  1. Pull from socrates
  2. Build the site
  3. Deploy to cosmos

## Path Updates Required
- Update all file path references in Python scripts
- Update all import paths in JS files
- Update all image and CSS references in Markdown files

## Testing Areas
For each module, verify:
1. Scripts execute correctly
2. Data is saved in the correct location
3. References between files remain intact