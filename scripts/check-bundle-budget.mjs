#!/usr/bin/env node
/**
 * Fails CI when compiled client JS under .next/static exceeds budget.
 * Run after `npm run build`.
 */
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const STATIC_DIR = join(process.cwd(), '.next/static');
/** ~1.05 MB — prod build ~0.82 MB; headroom for CI variance and marketing assets. */
const MAX_TOTAL_JS_BYTES = 1_100_000;

function collectJsFiles(dirPath) {
  const entries = readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectJsFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  return files;
}

function formatMegabytes(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function main() {
  let jsFiles;
  try {
    jsFiles = collectJsFiles(STATIC_DIR);
  } catch (err) {
    console.error(`[bundle-budget] Missing ${STATIC_DIR}. Run npm run build first.`);
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  }
  const totalBytes = jsFiles.reduce((sum, filePath) => sum + statSync(filePath).size, 0);
  if (totalBytes > MAX_TOTAL_JS_BYTES) {
    console.error(
      `[bundle-budget] FAILED: ${formatMegabytes(totalBytes)} exceeds limit ${formatMegabytes(MAX_TOTAL_JS_BYTES)} (${jsFiles.length} files).`,
    );
    process.exit(1);
  }
  console.log(
    `[bundle-budget] OK: ${formatMegabytes(totalBytes)} / ${formatMegabytes(MAX_TOTAL_JS_BYTES)} (${jsFiles.length} files).`,
  );
}

main();
