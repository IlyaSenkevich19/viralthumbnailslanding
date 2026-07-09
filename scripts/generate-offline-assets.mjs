#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, '..');
const TEMPLATE_DIR = resolve(SCRIPT_DIR, 'templates');

function resolveBuildId() {
  const fromEnv =
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.trim() ||
    process.env.VERCEL_GIT_COMMIT_SHA?.trim();
  if (fromEnv) {
    return fromEnv.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 12);
  }
  return 'local';
}

const buildId = resolveBuildId();
const swTemplate = readFileSync(resolve(TEMPLATE_DIR, 'service-worker.template.js'), 'utf8');
writeFileSync(
  resolve(ROOT, 'public/sw.js'),
  swTemplate.replaceAll('__BUILD_ID__', buildId),
);

const pageTemplate = readFileSync(resolve(TEMPLATE_DIR, 'offline-page.template.html'), 'utf8');
const pageOutput = pageTemplate
  .replace(
    '__SUBTITLE__',
    'Reconnect to browse pricing, features, and start creating thumbnails.',
  )
  .replace('__TIP_1__', 'Check Wi-Fi or mobile data, then try again.')
  .replace(
    '__TIP_2__',
    'This page reloads automatically when your connection returns.',
  )
  .replace(
    '__TIP_3__',
    'Open the app at app.viralthumblify.com once you are back online.',
  );
writeFileSync(resolve(ROOT, 'public/offline.html'), pageOutput);
console.log(`[generate-offline-assets] buildId=${buildId}`);
