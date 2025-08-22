@echo off
REM Cosmos in the Classroom - Content Restructure Script (August 2025)
REM Establishes proper development workflow with branching strategy

echo ====================================
echo Cosmos in the Classroom Setup
echo ====================================

REM 1. Check current branch and status
echo Current branch:
git branch --show-current
echo.
echo Git status:
git status --short
echo.

REM 2. Create development branch structure (if not exists)
git show-ref --verify --quiet refs/heads/feature/ui-development || git branch feature/ui-development
git show-ref --verify --quiet refs/heads/feature/content-development || git branch feature/content-development
git show-ref --verify --quiet refs/heads/hotfix/cleanup || git branch hotfix/cleanup

REM 3. Archive legacy files only if they exist
if exist index_mockup.html (
    if not exist physics\shared\archive mkdir physics\shared\archive
    move index_mockup.html physics\shared\archive\index_mockup.html
)
if exist index_original.html move index_original.html physics\shared\archive\index_original.html
if exist index_current_backup.html move index_current_backup.html physics\shared\archive\index_current_backup.html
if exist index_complex_backup.html move index_complex_backup.html physics\shared\archive\index_complex_backup.html

REM 4. Move documentation to proper locations
if not exist src\docs mkdir src\docs
if exist PORTAL_REDESIGN_PROPOSAL.md move PORTAL_REDESIGN_PROPOSAL.md src\docs\PORTAL_REDESIGN_PROPOSAL.md
if exist HOMEPAGE_OPTIMIZATION.md move HOMEPAGE_OPTIMIZATION.md src\docs\HOMEPAGE_OPTIMIZATION.md
if exist HOMEPAGE_SIMPLIFICATION.md move HOMEPAGE_SIMPLIFICATION.md src\docs\HOMEPAGE_SIMPLIFICATION.md
if exist IMPLEMENTATION_SUMMARY.md move IMPLEMENTATION_SUMMARY.md src\docs\IMPLEMENTATION_SUMMARY.md

REM 5. Move research content
if not exist src\socrates mkdir src\socrates
if exist RESEARCH_BRIEF_EXAMPLES.md move RESEARCH_BRIEF_EXAMPLES.md src\socrates\RESEARCH_BRIEF_EXAMPLES.md

echo.
echo ====================================
echo Development Workflow Guide
echo ====================================
echo.
echo For UI experiments: git checkout feature/ui-development
echo For content work:   git checkout feature/content-development  
echo For quick fixes:    git checkout hotfix/cleanup
echo Back to main:       git checkout main
echo.
echo Available branches:
git branch -a
echo.
echo Next steps:
echo 1. Choose appropriate branch for your work
echo 2. Make changes and commit regularly
echo 3. Merge back to main when stable
echo 4. Delete feature branches when complete
echo.

pause