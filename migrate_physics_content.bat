@echo off
echo Starting Physics Content Migration...
echo.

echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\0_principles
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\0_principles" (
  if not exist "physics\honors\units\01_principles\lessons\" mkdir "physics\honors\units\01_principles\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\0_principles" "physics\honors\units\01_principles\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\01_principles\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\0_principles
)
echo.
echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\10_optics
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\10_optics" (
  if not exist "physics\honors\units\10_optics\lessons\" mkdir "physics\honors\units\10_optics\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\10_optics" "physics\honors\units\10_optics\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\10_optics\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\10_optics
)
echo.
echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\1_mechanics
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\1_mechanics" (
  if not exist "physics\honors\units\02_kinematics1\lessons\" mkdir "physics\honors\units\02_kinematics1\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\1_mechanics" "physics\honors\units\02_kinematics1\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\02_kinematics1\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\1_mechanics
)
echo.
echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\2_kinematics-1
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\2_kinematics-1" (
  if not exist "physics\honors\units\02_kinematics1\lessons\" mkdir "physics\honors\units\02_kinematics1\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\2_kinematics-1" "physics\honors\units\02_kinematics1\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\02_kinematics1\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\2_kinematics-1
)
echo.
echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\3_kinematics-2
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\3_kinematics-2" (
  if not exist "physics\honors\units\03_kinematics2\lessons\" mkdir "physics\honors\units\03_kinematics2\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\3_kinematics-2" "physics\honors\units\03_kinematics2\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\03_kinematics2\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\3_kinematics-2
)
echo.
echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\4_dynamics
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\4_dynamics" (
  if not exist "physics\honors\units\04_dynamics\lessons\" mkdir "physics\honors\units\04_dynamics\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\4_dynamics" "physics\honors\units\04_dynamics\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\04_dynamics\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\4_dynamics
)
echo.
echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\6_circ_grav
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\6_circ_grav" (
  if not exist "physics\honors\units\06_circular_gravity\lessons\" mkdir "physics\honors\units\06_circular_gravity\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\6_circ_grav" "physics\honors\units\06_circular_gravity\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\06_circular_gravity\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\6_circ_grav
)
echo.
echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\7_shm
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\7_shm" (
  if not exist "physics\honors\units\07_shm\lessons\" mkdir "physics\honors\units\07_shm\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\7_shm" "physics\honors\units\07_shm\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\07_shm\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\7_shm
)
echo.
echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\8_electromagnetism
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\8_electromagnetism" (
  if not exist "physics\honors\units\08_electromagnetism\lessons\" mkdir "physics\honors\units\08_electromagnetism\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\8_electromagnetism" "physics\honors\units\08_electromagnetism\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\08_electromagnetism\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\8_electromagnetism
)
echo.
echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\8_waves
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\8_waves" (
  if not exist "physics\honors\units\08_electromagnetism\lessons\" mkdir "physics\honors\units\08_electromagnetism\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\8_waves" "physics\honors\units\08_electromagnetism\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\08_electromagnetism\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\8_waves
)
echo.
echo Moving honors_content: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\9_electrics
if exist "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\9_electrics" (
  if not exist "physics\honors\units\09_electricity\lessons\" mkdir "physics\honors\units\09_electricity\lessons\"
  xcopy "d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\9_electrics" "physics\honors\units\09_electricity\lessons\" /E /I /Y
  echo   Moved to physics\honors\units\09_electricity\lessons\
) else (
  echo   Source not found: d:\python\Jupyter\build\cosmosintheclassroom\src\hphys\9_electrics
)
echo.

echo Migration script completed.
echo Review the results and run cleanup when ready.
pause