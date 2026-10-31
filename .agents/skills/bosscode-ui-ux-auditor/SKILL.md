---
name: bosscode-ui-ux-auditor
description: >-
  Comprehensive UI, UX, layout, responsive, and conversion auditing skill for BossCode
  and SMB digital product websites. Use this skill whenever auditing pages for layout
  bugs, broken interactions, CSS variable mismatches, mobile responsiveness, scroll
  performance, or conversion friction for non-technical users.
---

# BossCode UI/UX & Layout Auditor Skill

Use this skill to systematically audit, diagnose, and fix UI/UX, layout, responsive, and conversion issues across the BossCode codebase.

## 1. Core Audit Protocol (5-Layer Inspection)

Whenever asked to find or fix UI/UX or layout issues, inspect every route and component through these five layers in order:

### Layer 1: Functional & Interaction Integrity
- **Anchor & Route Verification:** Every `href="#..."` or `href="/#..."` must match an exact DOM `id="..."` (not just `data-section="..."`).
- **Interactive Affordance Rule:** Any element styled with `cursor: pointer`, hover elevation (`translateY`), or action text (`Learn more →`, `Go digital →`) MUST be wrapped in a real `<Link>`, `<a>`, or have an explicit `onClick` handler.
- **Navigation Completeness:** Use `next/link` (`<Link>`) for all internal brand/logo/page links to prevent full-page reloads that re-trigger intro overlays.
- **Zero Dead Forms:** Every `<form>` must perform a real action (e.g., opening a pre-filled WhatsApp chat or submitting data) and display clear visual state feedback.

### Layer 2: CSS Token & Contrast Integrity
- **Token Verification:** Every `var(--...)` referenced in `app/globals.css` or `app/site-pages.css` must be defined in `:root`. Never use undefined opacity steps (check `--navy-*` and `--white-*`).
- **Dynamic Background Contrast Guard:** Any scroll-driven background transition (such as `QuantumCore`) must never turn an adjacent section's background dark while its text remains dark, nor render white text (`#ffffff`) over an un-transitioned light background (`t < 0.5`).
- **Scroll & RAF Hygiene:** Never run `getBoundingClientRect()`, `elementsFromPoint()`, or `getComputedStyle()` on every `requestAnimationFrame` tick when scroll position (`window.scrollY`) has not changed.

### Layer 3: Mobile-First & Ergonomic Layout (`320px` – `1024px`)
- **Mobile Navigation Drawer:** If desktop nav links hide below `900px`, a touch-friendly hamburger toggle (`>= 44x44px`) and accessible drawer menu must be present.
- **Floating Element Collision Check:** Fixed elements in the bottom-right corner (`.bc-wa-wrapper`, `.sp-sticky-cta`, `#scroll-indicator`) must never overlap or stack awkwardly on mobile viewports.
- **Negative Offset Overflow Guard:** Floating badges with negative offsets (`right: -16px`) must be clamped or tucked inside their container on viewports `< 640px` to prevent horizontal scrollbars or clipping.

### Layer 4: Cognitive Load & Non-Tech Comprehension (The 3-Second Test)
- **No Code Syntax for Non-Tech Buyers:** Never show IDE code blocks (`records = piles of paper`) to non-technical business owners. Always show recognizable business UI (Sales in `Rs`, Stock counts, Customer Udhaar, WhatsApp messages).
- **No Moving Text for Reading Content:** Never put FAQs or multi-sentence explanations inside a continuously moving marquee where users cannot read at their own pace.
- **Eliminate Section Redundancy:** Do not repeat the same problem/solution list across 4 consecutive sections. Consolidate or differentiate each section's job.

### Layer 5: Channel Fit (WhatsApp-First Conversion)
- For Pakistani SMB audiences, `mailto:` links frequently fail because desktop/mobile email clients are unconfigured. Always prioritize **WhatsApp (`wa.me`)** and **1-tap Contact** alongside email fallback.

## 2. Detailed Reference Checklists

See [references/audit-checklist.md](./references/audit-checklist.md) for the complete pre-release verification matrix and component-specific checks.

