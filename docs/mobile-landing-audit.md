# Mobile landing audit (2026-08-04)

Traffic is expected mostly mobile. Audit: live `www` at 390×844 + code review.

## Verdict

**Not ready as-is for mobile ads.** Hero/CTA OK; consent + support stacking was broken on first visit.

## Findings

| Area | Severity | Status |
|------|----------|--------|
| Consent bar ~25–30% viewport (stacked buttons + long copy) | Critical | Fixed: compact copy + 2-col actions + safe-area |
| Support FAB fully covered by consent (`bottom` offset 7.25rem vs ~18rem bar) | Critical | Fixed: hide `.vt-support-dock` while `data-vt-consent-banner` |
| Support panel `w-[320px]` overflows narrow phones | High | Fixed: `min(100vw-2rem, 20rem)` |
| No `safe-area-inset-bottom` (iPhone home bar) | High | Fixed on consent + support |
| Hero primary CTA still above consent | OK | Keep |
| Header hamburger + Get started in menu | OK | Keep |
| Marquee/thumbs hidden `< md` | OK (perf) | Intentional |
| Proactive support nudge after 45–60s | Medium | Hidden with dock during consent; OK after Accept |

## Smoke after deploy

1. iPhone / Chrome device mode 390×844, fresh session  
2. Consent: short bar, Reject | Accept side-by-side, hero CTA visible  
3. No support FAB until Accept/Reject  
4. After Accept: FAB bottom-right, above home indicator; open panel fits width  
5. Tap Get Started — works above/under overlays  
