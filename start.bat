@echo off
title ETIMS 2027 - Local Development Server
echo ====================================================
echo   ETIMS 2027 Conference Portal - Local Launcher
echo   Netaji Subhas Institute of Technology (NSIT)
echo ====================================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found on your system.
    echo Please install Node.js (v18 or higher) from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [1/3] Node.js detected:
node -v
echo.

:: Check if client dependencies exist; if not, run npm install
if not exist "client\node_modules" (
    echo [2/3] Installing dependencies (first time only, please wait)...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install encountered an error.
        pause
        exit /b 1
    )
) else (
    echo [2/3] Dependencies already installed.
)
echo.

:: Launch Vite development server
echo [3/3] Starting ETIMS 2027 local server...
echo The portal will open automatically at http://localhost:5173
echo Press Ctrl+C in this window to stop the server anytime.
echo.

:: Open default browser after 2 seconds
start "" http://localhost:5173

:: Start dev server
call npm run dev

pause
