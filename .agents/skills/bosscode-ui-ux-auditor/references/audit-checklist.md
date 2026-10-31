# UI/UX & Layout Audit Checklist Reference

## 1. Above-the-Fold 5-Second Test
- [ ] Can a non-technical shopkeeper, clinic doctor, or wholesaler tell **what BossCode sells** within 3 seconds of landing?
- [ ] Is the primary visual an interactive **Business UI Preview** (Sales, Stock, Dues, Appointments, WhatsApp) rather than abstract shapes or computer code?
- [ ] Does the primary CTA clearly state the low-risk offer (`Free Check-up` / `WhatsApp Us`)?
- [ ] Does the page load immediately without locking scroll behind a long (>1.5s) intro curtain on repeat visits?

## 2. Layout & Responsive Breakpoints Matrix
| Viewport | Width | Critical Checks |
| :--- | :--- | :--- |
| **Small Mobile** | `320px – 390px` | No horizontal overflow (`overflow-x`), badges stay inside bounds, buttons full-width or cleanly wrapped, hamburger menu accessible. |
| **Mobile / Phablet** | `391px – 720px` | Single-column grids, sticky CTAs do not collide with WhatsApp button, readable font sizes (`>= 14px` body), touch targets `>= 44x44px`. |
| **Tablet** | `721px – 1024px` | 2-column grids for services/features/steps, product hero stacks cleanly, policy nav converts to horizontal chips. |
| **Desktop** | `> 1024px` | Balanced 1280px container, interactive mockups beside concise copy, clear active nav indicators. |

## 3. Copy Density Limits (Non-Tech SMB Standard)
- **Hero Headline (H1):** Max 6–8 words.
- **Hero Subtitle:** Max 15–18 words (1–2 short lines).
- **Card Title (H3):** Max 3–5 words.
- **Card Description:** Max 8–12 words (1 punchy sentence).
- **Before / After Bullets:** Max 4–6 words per bullet.
- **Step Description:** Max 8–10 words per step.
- **FAQ Answer:** Max 15–22 words (direct answer first).

