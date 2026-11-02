#!/bin/sh
set -e

cd /migrate
echo "Running database migrations…"
node node_modules/prisma/build/index.js migrate deploy

cd /app
echo "Starting Next.js on :$PORT"
exec node server.js
