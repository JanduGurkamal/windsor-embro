#!/bin/bash
# Windsor Embro — Laravel Forge deployment (low-memory VPS safe)
# Site → Deployment → paste entire script

set -e

$CREATE_RELEASE()

cd "$FORGE_RELEASE_DIRECTORY"

export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1
export FORGE_LOW_MEMORY=1

# Cap Node heap so the OS OOM killer doesn't SIGKILL the webpack worker
# Increase to 2048 only if your server has 4GB+ RAM
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=1536}"

# Single-threaded install reduces peak RAM (optional; comment out on 4GB+ servers)
export PNPM_CHILD_CONCURRENCY=1
export PNPM_NETWORK_CONCURRENCY=2

pnpm install --frozen-lockfile
pnpm run build:forge

$ACTIVATE_RELEASE()

if [ ! -f /home/forge/.pm2-conf/site-3210774.json ]; then
  mkdir -p /home/forge/.pm2-conf
  cat <<'EOF' > /home/forge/.pm2-conf/site-3210774.json
{
  "name": "site-3210774",
  "cwd": "/home/forge/windsor.on-forge.com/current",
  "script": "./node_modules/next/dist/bin/next",
  "args": "start --hostname 0.0.0.0 --port 3002",
  "instances": 1,
  "exec_mode": "fork",
  "env": {
    "NODE_ENV": "production",
    "PORT": "3002"
  }
}
EOF
fi

pm2 start /home/forge/.pm2-conf/site-3210774.json 2>/dev/null || pm2 reload site-3210774 --update-env
pm2 save
