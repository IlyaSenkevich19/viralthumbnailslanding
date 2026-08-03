# Mobile landing audit (2026-08-04)

Traffic is expected mostly mobile (Ads). Primary KPI: **Get Started → app signup**.

## Verdict

**Mobile conversion chrome + product proof landed.** Consent/support stacking fixed earlier; this pass adds always-reachable signup, above-the-fold thumbnail proof, and section imagery on phones.

## Done criteria

- [x] Fresh mobile session: compact consent; hero CTA + proof visible; no support under consent
- [x] Header **Get started** reachable without opening the menu
- [x] After Accept + scroll past hero: sticky **Get started** (`3 free credits · no card`)
- [x] Sticky hides near final `#cta`, during consent, and on `md+`
- [x] Support FAB lifts above sticky bar (`html[data-vt-sticky-cta]`)
- [x] Problem + Features (+ How-it-works step) images visible on mobile
- [x] LCP stays hero text/CTA — proof thumbs small / lazy after first two

## Findings (history)

| Area | Severity | Status |
|------|----------|--------|
| Consent bar ~25–30% viewport | Critical | Fixed: compact + 2-col + safe-area |
| Support FAB covered by consent | Critical | Fixed: hide dock while `data-vt-consent-banner` |
| Support panel overflows narrow phones | High | Fixed: `min(100vw-2rem, 20rem)` |
| No `safe-area-inset-bottom` | High | Fixed on consent + support + sticky CTA |
| Header: signup only in hamburger | High | Fixed: compact Get started beside menu |
| CTA disappears mid-page after scroll | High | Fixed: `MobileStickyCta` |
| Hero marquee / proof hidden `< md` | High | Fixed: mobile proof strip (6 thumbs) |
| Problem / Features images `hidden md:block` | Medium | Fixed: show on mobile |
| How-it-works step images desktop-only | Medium | Fixed: show on mobile |
| Hero primary CTA above consent | OK | Keep |
| Proactive support nudge | Medium | Hidden with dock during consent |

## Smoke checklist

1. Chrome device mode **390×844**, fresh session (clear site data)
2. Consent: short bar; Reject | Accept; hero CTA + proof strip visible; no support FAB
3. Accept → scroll past hero → sticky bar appears; FAB sits above it
4. Header **Get started** works without opening menu
5. Open support panel — fits width; not covered by sticky
6. Scroll to final CTA — sticky hides (no double bar)
7. Problem / Features / How-it-works show images on phone
