@echo off
REM Cosmos in the Classroom - Content Restructure Script (August 2025)
REM Moves legacy HTML backups, curriculum docs, and example content to new locations

REM 1. Archive legacy homepage HTML files
move index_mockup.html physics\shared\archive\index_mockup.html
move index_original.html physics\shared\archive\index_original.html
move index_current_backup.html physics\shared\archive\index_current_backup.html
move index_complex_backup.html physics\shared\archive\index_complex_backup.html

REM 2. Move curriculum design docs to src/docs/
move PORTAL_REDESIGN_PROPOSAL.md src\docs\PORTAL_REDESIGN_PROPOSAL.md
move HOMEPAGE_OPTIMIZATION.md src\docs\HOMEPAGE_OPTIMIZATION.md
move HOMEPAGE_SIMPLIFICATION.md src\docs\HOMEPAGE_SIMPLIFICATION.md
move IMPLEMENTATION_SUMMARY.md src\docs\IMPLEMENTATION_SUMMARY.md

REM 3. Move research brief examples to src/socrates/
move RESEARCH_BRIEF_EXAMPLES.md src\socrates\RESEARCH_BRIEF_EXAMPLES.md

REM 4. Audit for stray curriculum folders (manual step)
echo Please manually move any curriculum folders (e.g., lecture_outline, q4-2025) to physics\shared\archive or physics\honors\units as appropriate.

REM 5. Update documentation (manual step)
echo Update MINUTES.md and README.md to reflect these changes.

echo Restructure complete. Please verify file moves and update documentation.
pause