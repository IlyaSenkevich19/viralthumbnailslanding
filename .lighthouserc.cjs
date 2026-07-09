/**
 * Lighthouse CI gates for landing (production build on CI).
 * Baseline snapshot: docs/pagespeed-baseline.md (2026-07-10).
 * Hard fail: performance score, LCP, CLS. Other metrics stay warn-only.
 */
/** @type {import('@lhci/cli').LHCI.ServerCommand.Options} */
module.exports = {
  ci: {
    collect: {
      url: [
        'http://127.0.0.1:3000/',
        'http://127.0.0.1:3000/terms',
        'http://127.0.0.1:3000/privacy',
      ],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 3000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 4000 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        interactive: ['warn', { maxNumericValue: 5000 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
