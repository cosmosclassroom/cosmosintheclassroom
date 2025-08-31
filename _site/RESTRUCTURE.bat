@echo off
REM --- Create new folders ---
mkdir src\courses
mkdir src\modules
mkdir src\config
mkdir src\core
mkdir src\experimental

REM --- Move course folders ---
if exist src\hphys move src\hphys src\courses\
if exist src\sphys move src\sphys src\courses\

REM --- Move module folders ---
if exist src\Chunker move src\Chunker src\modules\
if exist "src\Consequence Engine" move "src\Consequence Engine" src\modules\ConsequenceEngine
if exist src\mermaids move src\mermaids src\modules\
if exist src\portal move src\portal src\modules\
if exist src\Ratatoskr move src\Ratatoskr src\modules\
if exist src\ref move src\ref src\modules\
if exist src\shared move src\shared src\modules\
if exist src\slides move src\slides src\modules\
if exist src\socrates move src\socrates src\modules\

REM --- Move configuration ---
if exist src\.vscode move src\.vscode src\config\
if exist src\cosmos.config.json.md move src\cosmos.config.json.md src\config\

REM --- Move core files ---
if exist src\index.html move src\index.html src\core\
if exist src\input.css move src\input.css src\core\
if exist src\js move src\js src\core\

REM --- Move experimental/legacy ---
if exist src\q4-2025 move src\q4-2025 src\experimental\

@echo Migration complete. Please update code references and documentation as needed.
pause