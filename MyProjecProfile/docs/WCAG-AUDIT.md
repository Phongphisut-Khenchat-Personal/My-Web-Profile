# WCAG Audit — Phongphisut Portfolio

**Date:** 2026-09-13  
**Target:** WCAG 2.2 Level AA  
**Scope:** `MyProjecProfile/public/` (static HTML/CSS/JS)  
**Live:** https://mywebprofile-9ee72.web.app

## Summary

The site was **partially AA-compliant** before this pass. Strong foundations existed (skip link, bilingual lang switch, hamburger ARIA, decorative `alt=""`, reduced-motion handling). Several **contrast**, **focus**, **dialog**, and **link-name** issues failed AA. Fixes below were applied in code; residual risks are listed for a future redesign.

| Status | Count |
|--------|------:|
| Pass / already good | 8 |
| Fixed in this pass | 7 |
| Residual / redesign | 4 |

## Findings

### Fixed (this pass)

| ID | Criterion | Severity | Issue | Fix |
|----|-----------|----------|-------|-----|
| A1 | 1.4.3 Contrast (Minimum) | High | Muted text used cream at ~0.45 opacity on dark navy (~4.0:1, fails AA 4.5:1) | Introduced `--text-soft` / `--text-muted` ≥ ~0.68 opacity; replaced low-opacity body/meta/rail/footer colors |
| A2 | 2.4.7 Focus Visible | High | Most controls lacked `:focus-visible` rings | Global focus ring on links, buttons, lang, carousel, chapter rail, CTAs |
| A3 | 2.4.4 / 4.1.2 Link Purpose / Name | High | Chapter rail exposed only `00`–`07` | Added `aria-label` per chapter; numbers `aria-hidden` |
| A4 | 2.1.2 / 2.4.3 Dialog keyboard | High | Intro `role="dialog"` without Escape, focus move, or trap | Focus skip control, Tab trap, Escape to dismiss, `inert` + `aria-hidden` after close, restore focus to hero name |
| A5 | 1.3.1 / 2.4.1 Headings | Medium | Two `h1` nodes (intro + hero) while intro in DOM | Intro title → `p` with `role="heading" aria-level="1"`; page `h1` remains hero name |
| A6 | 2.2.2 Pause, Stop, Hide | Medium | Carousel paused on hover only | Also pause on `focusin` / arrow-button focus |
| A7 | 4.1.3 Status Messages | Medium | Guide `aria-live="polite"` announced every chapter | Live region only when chat is open (`aria-live` toggled) |

### Already good

| Criterion | Notes |
|-----------|--------|
| 2.4.1 Bypass Blocks | Skip link present |
| 3.1.1 Language of Page | `lang` updated with EN/TH toggle |
| 1.1.1 Non-text Content | Decorative images `alt=""`; model-viewer has alt |
| 2.5.5 Target Size (enhanced) | Many controls ≥ 44×44 (lang, social, rail) |
| 2.3.3 Animation from Interactions | `prefers-reduced-motion` disables snap + cinematic |
| 4.1.2 Name, Role, Value | Hamburger `aria-expanded`; lang `aria-pressed` |
| 1.4.4 Resize Text | Root font ≥ 16px; clamp used carefully |
| 2.4.2 Page Titled | Document title set |

### Residual / recommend for redesign

| ID | Criterion | Notes |
|----|-----------|--------|
| R1 | 2.4.6 Headings / IA | Story “chapter” IA is delightful but slower for recruiters scanning in 30s — consider project-first landing |
| R2 | 2.2.2 | Dedicated Pause control for marquees would be clearer than hover/focus alone |
| R3 | 1.4.11 Non-text Contrast | Gold accents on dark are strong; verify any future light UI chips meet 3:1 |
| R4 | Cognitive / motor | Full-page `scroll-snap` can feel sticky; already off under reduced motion — optional user toggle later |

## Contrast notes (AA normal text ≥ 4.5:1)

| Pair | Approx ratio | AA |
|------|-------------:|:--:|
| Cream `#e8eef8` on ink `#07111f` | ~15.8 | Pass |
| Cream @ 0.45 on ink | ~4.0 | Fail (was) |
| Cream @ 0.68 on ink (`--text-muted`) | ~7.3 | Pass |
| Gold `#fb923c` on ink | ~7.0 | Pass |
| Mute `#94a3b8` on ink | ~7.5 | Pass |

## Files touched

- `public/styles.css` — tokens, contrast, focus rings  
- `public/index.html` — intro heading role, chapter labels, guide live region  
- `public/scripts.js` — dialog a11y, guide live toggle, carousel focus pause  

## Verification checklist

- [ ] Keyboard-only: Tab through nav, rail, CTAs — visible gold ring  
- [ ] Open intro (clear sessionStorage `pk-intro-done`): Tab trapped, Escape skips, focus lands on name  
- [ ] Screen reader: chapter rail announces “Chapter 05: Projects”  
- [ ] Carousel: Tab to arrow — motion pauses  
- [ ] Guide closed: chapter changes do not spam announcements  

## Design recommendation (UX for junior SE job seeker)

See canvas artifact for wireframes. Preferred hybrid:

1. **Hero (recruiter scan):** name, role, 1-line value, CTA Resume + Projects  
2. **Proof strip:** 3 featured projects with outcome bullets  
3. **Story optional:** keep cinematic mascot as secondary personality after proof  

Palette keep navy + warm orange (graduation/personal brand) but raise surface contrast; avoid purple-gradient / cream-serif clichés.
