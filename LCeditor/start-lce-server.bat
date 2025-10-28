@echo off
REM ==============================================================================
REM Local Content Editor (LCE) API Server Startup Script
REM ==============================================================================
REM 
REM For Curriculum Team Use:
REM Double-click this file to start the content creation API server.
REM 
REM The server will run on: http://localhost:8080
REM Available endpoints:
REM   - API Info: http://localhost:8080/
REM   - Health Check: http://localhost:8080/health
REM   - Create Content: POST to http://localhost:8080/api/scaffold
REM   - Trigger Build: POST to http://localhost:8080/api/build
REM 
REM Press Ctrl+C to stop the server when done.
REM ==============================================================================

echo.
echo ============================================================
echo   🚀 Local Content Editor (LCE) API Server
echo ============================================================
echo.
echo   📍 Server URL: http://localhost:8080
echo   🌐 Web Interface: http://localhost:8080
echo   📋 Health Check: http://localhost:8080/health
echo   🛠️  Content Creation: Ready
echo   ⚡ Build Trigger: Ready
echo.
echo   ⚠️  IMPORTANT: Keep this window open while creating content
echo   🛑 Press Ctrl+C to stop the server when finished
echo.
echo ============================================================
echo.

REM Navigate to workspace root (one level up from LCeditor)
cd /d "%~dp0.."

REM Check if we're in the correct directory
if not exist "public\website\src" (
    echo ❌ ERROR: Must run from the workspace root directory
    echo    Expected to find: public\website\src
    echo    Current directory: %CD%
    echo.
    echo    Please navigate to the correct folder and try again.
    echo.
    pause
    exit /b 1
)

REM Check if Python virtual environment exists
if not exist "venv\Scripts\python.exe" (
    echo ❌ ERROR: Python virtual environment not found
    echo    Expected to find: venv\Scripts\python.exe
    echo    Current directory: %CD%
    echo.
    echo    Please ensure the Python environment is set up correctly.
    echo.
    pause
    exit /b 1
)

REM Check if the API server script exists
if not exist "scripts\content\lce_api_server.py" (
    echo ❌ ERROR: LCE API server script not found
    echo    Expected to find: scripts\content\lce_api_server.py
    echo.
    pause
    exit /b 1
)

echo ✅ Environment checks passed
echo.
echo 🔄 Starting LCE API Server...
echo.

REM Start the LCE API server
"venv\Scripts\python.exe" scripts\content\lce_api_server.py --port 8080

REM If we get here, the server was stopped
echo.
echo 🛑 LCE API Server stopped
echo.
pause