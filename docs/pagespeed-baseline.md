# PageSpeed / Lighthouse baseline (pre-marketing)

Snapshot date: **2026-07-10**. Method: **production build** served locally (`next start`), Lighthouse **desktop** preset — same as CI (`.lighthouserc.cjs`).

Prod URL: [viralthumblify.com](https://viralthumblify.com/). App baseline: ViralThumbnails repo `docs/pagespeed-baseline.md`.

## Landing

| URL | Performance | Accessibility | LCP | CLS |
|-----|-------------|---------------|-----|-----|
| `/` | 0.94 | 0.96 | 1597 ms | 0.000 |
| `/terms` | 1.00 | 0.96 | 513 ms | 0.000 |
| `/privacy` | 1.00 | 0.96 | 546 ms | 0.000 |

Bundle (client JS): **0.82 MB** / 1.05 MB budget.

## CI hard-fail thresholds

| Metric | Gate | Rationale |
|--------|------|-----------|
| Performance score | ≥ 0.85 | ~0.09 below baseline `/` |
| LCP | ≤ 5000 ms | marketing-safe upper bound (CI runner headroom) |
| CLS | ≤ 0.10 | layout stability |
| Bundle | ≤ 1.05 MB | existing hard fail |

SEO, best-practices, accessibility, FCP/TTI remain **warn-only**.

## Refresh baseline

```bash
npm ci && npm run build && node scripts/check-bundle-budget.mjs
npm run start &
npx wait-on@7.2.0 http://127.0.0.1:3000
npx @lhci/cli@0.14.0 autorun --config=.lighthouserc.cjs
```

Update this file when thresholds change.
