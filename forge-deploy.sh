#!/bin/bash
# Laravel Forge deployment script for Windsor Embro (Next.js)
# Paste into Forge → Site → Deployment Script (replace CREATE_RELEASE section install/build)

set -e

cd "$FORGE_RELEASE_DIRECTORY"

export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1
export FORGE=1

# Option A: npm (uses package-lock.json — recommended)
npm ci
npm run build

# Option B: pnpm (uses pnpm-lock.yaml — uncomment if you prefer)
# pnpm install --frozen-lockfile
# pnpm run build
