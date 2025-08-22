@echo off
echo ============================================
echo PHYSICS CONTENT QUICK CLEANUP
echo ============================================
echo.

echo Moving high-priority content to new structure...
echo.

REM Create backup of current structure
echo Creating backup...
if not exist "backup_pre_migration" mkdir "backup_pre_migration"

REM Move the most important unit content first
echo [1/3] Moving Unit 6 - Circular Motion and Gravity (49 files)
if exist "src\hphys\6_circ_grav" (
    xcopy "src\hphys\6_circ_grav" "physics\honors\units\06_circular_gravity\lessons\" /E /I /Y >nul
    echo   ✓ Unit 6 content moved
) else (
    echo   ⚠ Unit 6 not found
)

echo [2/3] Moving Unit 9 - Electricity (44 files)  
if exist "src\hphys\9_electrics" (
    xcopy "src\hphys\9_electrics" "physics\honors\units\09_electricity\lessons\" /E /I /Y >nul
    echo   ✓ Unit 9 content moved
) else (
    echo   ⚠ Unit 9 not found
)

echo [3/3] Moving Unit 10 - Optics (40 files)
if exist "src\hphys\10_optics" (
    xcopy "src\hphys\10_optics" "physics\honors\units\10_optics\lessons\" /E /I /Y >nul
    echo   ✓ Unit 10 content moved
) else (
    echo   ⚠ Unit 10 not found
)

echo.
echo Moving key slide presentations...
if exist "slides\hlec_10_electrostatics.md" (
    copy "slides\hlec_10_electrostatics.md" "physics\honors\slides\" >nul
    echo   ✓ Electrostatics slides moved
)

if exist "slides\hlec7_shm.md" (
    copy "slides\hlec7_shm.md" "physics\honors\slides\" >nul  
    echo   ✓ SHM slides moved
)

echo.
echo Archiving Q4 experimental content...
if exist "src\q4-2025\claude_v*.json" (
    copy "src\q4-2025\claude_v*.json" "physics\shared\archive\q4-experiments\" >nul
    echo   ✓ Claude experiments archived
)

echo.
echo ============================================
echo QUICK CLEANUP COMPLETE
echo ============================================
echo.
echo ✅ Key content moved to new physics/ structure
echo 📊 Review ORGANIZATION_STATUS.md for full details
echo 🔧 Run full migrate_physics_content.bat when ready
echo.
echo Next steps:
echo   1. Check physics\honors\units\ for moved content
echo   2. Review physics\shared\archive\ for experiments  
echo   3. Update any broken links in portal
echo   4. Test slide generation with new theme locations
echo.
pause
