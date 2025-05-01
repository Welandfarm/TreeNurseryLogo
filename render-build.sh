#!/usr/bin/env bash

# Install all production dependencies
npm ci --omit=dev

# Install build dependencies needed for the build process
npm install -D esbuild typescript tsx @vitejs/plugin-react drizzle-kit

# Run the build process
npm run build