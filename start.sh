#!/usr/bin/env bash
echo "===================================================="
echo "  ETIMS 2027 Conference Portal - Local Launcher"
echo "  Netaji Subhas Institute of Technology (NSIT)"
echo "===================================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed. Please install Node.js (v18+) from https://nodejs.org/"
    exit 1
fi

echo "[1/3] Node.js version: $(node -v)"

# Install dependencies if missing
if [ ! -d "client/node_modules" ]; then
    echo "[2/3] Installing dependencies..."
    npm install
fi

echo "[3/3] Starting ETIMS 2027 local server at http://localhost:5173..."
npm run dev
