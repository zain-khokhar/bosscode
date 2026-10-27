# BossCode Website — Master Build Prompt

---

## 0 · Meta Context

You are an elite senior Next.js engineer and creative director at the world's most respected digital agency. You are about to build the official website for **BossCode** — a cutting-edge software agency founded in 2026 that builds premium digital products for ambitious companies. The site must position BossCode as the undisputed top-tier choice among agencies: visually extraordinary, technically impeccable, and culturally distinct.

This prompt is the single source of truth. Build every section exactly as specified. Do not approximate or simplify any effect — execute each one precisely.

---

## 1 · Tech Stack (Exact)

```
Framework      : Next.js 15 (App Router, JavaScript)
Styling        : Tailwind CSS v4
Animations     : Framer Motion 11  +  GSAP 3 + ScrollTrigger
Smooth Scroll  : Lenis (latest)
Fonts          : Space Grotesk (display)  +  DM Sans (body)  via next/font/google
Icons          : Lucide React
Utils          : clsx, tailwind-merge
Linting        : ESLint (Next.js default)
```

**Install all packages in a single command. Never use TypeScript. Use .js and .jsx only.**

---

## 2 · Design System

### 2.1 Color Tokens

Define every color as a CSS custom property on `:root` inside `globals.css`.

```css
:root {
  /* ── Backgrounds ── */
  --bg-base:         #050B1A;   /* deepest layer */
  --bg-surface:      #0A1628;   /* card / panel base */
  --bg-elevated:     #0F1F38;   /* hover / elevated surface */

  /* ── Glass System ── */
  --glass-1:         rgba(255,255,255,0.04);
  --glass-2:         rgba(255,255,255,0.07);
  --glass-3:         rgba(255,255,255,0.12);
  --glass-border:    rgba(255,255,255,0.10);
  --glass-border-hi: rgba(255,255,255,0.22);
  --glass-blur:      blur(24px);
  --glass-blur-heavy:blur(48px);

  /* ── Blue Palette ── */
  --blue-950: #0B1A3E;
  --blue-900: #1E3A8A;
  --blue-700: #1D4ED8;
  --blue-600: #2563EB;  /* primary CTA */
  --blue-500: #3B82F6;  /* primary accent */
  --blue-400: #60A5FA;  /* highlight */
  --blue-300: #93C5FD;  /* soft accent */
  --cyan-500: #06B6D4;
  --cyan-400: #22D3EE;
  --cyan-300: #67E8F9;

  /* ── White Scale ── */
  --white:     #FFFFFF;
  --white-90:  rgba(255,255,255,0.90);
  --white-70:  rgba(255,255,255,0.70);
  --white-50:  rgba(255,255,255,0.50);
  --white-20:  rgba(255,255,255,0.20);
  --white-10:  rgba(255,255,255,0.10);
  --white-05:  rgba(255,255,255,0.05);

  /* ── Glow Tokens ── */
  --glow-blue:   0 0 60px rgba(59,130,246,0.35), 0 0 120px rgba(59,130,246,0.15);
  --glow-cyan:   0 0 40px rgba(34,211,238,0.30), 0 0 80px  rgba(34,211,238,0.12);
  --glow-white:  0 0 30px rgba(255,255,255,0.15);
  --glow-card:   0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.10);

  /* ── Typography ── */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'DM Sans', sans-serif;

  /* ── Radii ── */
  --radius-sm:   8px;
  --radius-md:   16px;
  --radius-lg:   24px;
  --radius-xl:   32px;
  --radius-pill: 9999px;

  /* ── Motion ── */
  --ease-out-expo: cubic-bezier(0.16,1,0.3,1);
  --ease-in-expo:  cubic-bezier(0.7,0,0.84,0);
  --ease-spring:   cubic-bezier(0.34,1.56,0.64,1);
  --duration-fast: 200ms;
  --duration-base: 400ms;
  --duration-slow: 700ms;
}
```

### 2.2 Typography Scale

| Token | Font | Size (clamp) | Weight | Letter-spacing |
| --- | --- | --- | --- | --- |
| `display-2xl` | Space Grotesk | clamp(3rem, 8vw, 7.5rem) | 700 | -0.03em |
| `display-xl` | Space Grotesk | clamp(2.5rem, 5vw, 5rem) | 700 | -0.025em |
| `display-lg` | Space Grotesk | clamp(2rem, 3.5vw, 3.5rem) | 600 | -0.02em |
| `heading-md` | Space Grotesk | clamp(1.25rem,2vw,1.75rem) | 600 | -0.01em |
| `body-lg` | DM Sans | 1.125rem | 400 | 0 |
| `body-base` | DM Sans | 1rem | 400 | 0 |
| `label` | DM Sans | 0.875rem | 500 | 0.04em |
| `mono` | JetBrains Mono | 0.875rem | 400 | 0 |

### 2.3 Glass Card Mixin

Every card/panel on the site inherits this base. Build it as a reusable `GlassCard` component:

```css
.glass-card {
  background: var(--glass-2);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--glow-card);
  position: relative;
  overflow: hidden;
}

/* Top-edge shimmer line — always present */
.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.14) 0%,
    transparent 50%
  );
  pointer-events: none;
}
```

---

## 3 · Global Layout & Scaffolding

### File Structure

```
app/
  layout.js          ← Root layout: fonts, Lenis provider, cursor
  page.js            ← Assembles all sections
  globals.css        ← CSS variables + base resets
components/
  layout/
    Navbar.jsx
    Footer.jsx
  ui/
    GlassCard.jsx
    MagneticButton.jsx
    AnimatedText.jsx   ← word-by-word reveal
    GlowOrb.jsx        ← decorative background blob
    CustomCursor.jsx
    NoiseOverlay.jsx
  sections/
    Hero.jsx
    StatsBar.jsx
    Services.jsx
    Portfolio.jsx
    Process.jsx
    WhyUs.jsx
    Testimonials.jsx
    CtaBanner.jsx
    Contact.jsx
lib/
  motion.js          ← shared Framer Motion variants
  utils.js           ← cn() helper
hooks/
  useMagnet.js
  useParallax.js
  useSmoothScroll.js
  useMousePosition.js
```

### Root Layout (`layout.js`)

- Load **Space Grotesk** (weights: 400, 500, 600, 700) and **DM Sans** (400, 500) via `next/font/google`.
- Set `<html>` background to `--bg-base`, `color-scheme: dark`.
- Wrap the entire `{children}` in a **LenisProvider** that initialises Lenis smooth scroll with `lerp: 0.08`, `smoothWheel: true`.
- Render `<CustomCursor />` and `<NoiseOverlay />` as global overlays.
- Respect `prefers-reduced-motion`: if true, pass a `reducedMotion` context that disables all non-essential animations.

---

## 4 · Global Effects (Built Once, Used Everywhere)

### 4.1 Custom Cursor

`CustomCursor.jsx` — two elements:

1. **Inner dot** — 8 × 8 px solid white circle. Follows mouse position with zero lag (`transition: none`).
2. **Outer ring** — 40 × 40 px ring (border `1.5px solid var(--blue-400)`). Follows mouse with `lerp: 0.12` delay via `useAnimationFrame` + `useState`.

On any element with `data-cursor="magnetic"`: ring expands to 64 px, fills to `var(--glass-3)`, and shifts colour to `var(--cyan-400)`. On any element with `data-cursor="text"`: ring morphs to a text-select pill shape (80 × 32 px, 16 px radius, `var(--blue-600)` fill, white "DRAG" label inside).

Hide the system cursor globally with `cursor: none` on `*`.

### 4.2 Noise Overlay

`NoiseOverlay.jsx` — a fixed, full-screen `<canvas>` element at `z-index: 9999` with `pointer-events: none` and `opacity: 0.032`. Generate and cache a 256 × 256 grayscale noise texture on mount, tile it, and update its canvas offset by (1 px, 0) per frame at 24 fps to animate the grain. This adds tactile depth to every surface.

### 4.3 Aurora Background

`GlowOrb.jsx` — a component that renders 2–3 absolutely-positioned, blurred ellipses:

- **Orb A**: 800 × 600 px, `var(--blue-600)` at opacity 0.18, top-left quadrant, `animation: float-a 18s ease-in-out infinite alternate`.
- **Orb B**: 600 × 500 px, `var(--cyan-500)` at opacity 0.12, bottom-right quadrant, `animation: float-b 22s ease-in-out infinite alternate-reverse`.
- **Orb C**: 400 × 400 px, `var(--blue-900)` at opacity 0.25, center, `animation: float-c 14s ease-in-out infinite`.

All orbs are blurred with `filter: blur(80px)`. No orb moves more than 60 px from its origin. Layer these as the first child of the `<Hero>` and `<CtaBanner>` sections.

### 4.4 Shared Framer Motion Variants (`lib/motion.js`)

```js
export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16,1,0.3,1] } }
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const stagger = (delay = 0.1) => ({
  visible: { transition: { staggerChildren: delay } }
});

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: [0.16,1,0.3,1] } }
};

export const slideLeft = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0,
    transition: { duration: 0.7, ease: [0.16,1,0.3,1] } }
};
```

All sections use `whileInView` + `viewport={{ once: true, margin: '-10%' }}` rather than scroll-triggered mounts, so each element reveals exactly once.

---

## 5 · Component Specifications

### 5.1 `GlassCard.jsx`

Props: `children`, `className`, `hover` (bool), `glow` (bool), `tilt` (bool).

- Renders the `.glass-card` base styles.
- If `hover`: on `mouseenter`, background transitions to `var(--glass-3)`, border to `var(--glass-border-hi)`, and `box-shadow` gains `var(--glow-blue)`.
- If `tilt`: implement 3D tilt via `onMouseMove`. Calculate `rotateX` and `rotateY` from cursor offset (max ±8 deg). Apply via Framer Motion `style={{ rotateX, rotateY, transformPerspective: 1000 }}`. On `mouseleave`, spring back to 0. This creates the signature iPhone-Pro glass tilt effect.
- If `glow`: render a radial gradient spot that follows the mouse inside the card ("card spotlight" effect) — `rgba(59,130,246,0.08)` circle that tracks cursor position.

### 5.2 `MagneticButton.jsx`

Props: `children`, `variant` (`primary` | `ghost` | `outline`).

Implement magnetic attraction: on `mousemove` within a 120 px radius of the button, calculate a dampened pull vector (strength: 0.35) and translate the button toward the cursor using Framer Motion `animate`. On `mouseleave`, spring back.

**Primary variant**: `background: linear-gradient(135deg, var(--blue-600), var(--blue-500))`, `box-shadow: var(--glow-blue)`. On hover, shimmer — a white `linear-gradient` stripe sweeps from left to right over 600 ms.

**Ghost variant**: `background: var(--glass-2)`, `border: 1px solid var(--glass-border-hi)`, text white. Backdrop blur applied.

**Outline variant**: `background: transparent`, `border: 1.5px solid var(--blue-400)`, text `var(--blue-400)`. Hover fills with `var(--blue-600)`.

All variants: `border-radius: var(--radius-pill)`, `padding: 0.875rem 2.25rem`, `font: 500 1rem var(--font-display)`, `letter-spacing: -0.01em`.

### 5.3 `AnimatedText.jsx`

Props: `text` (string), `el` (`h1`–`h6` | `p`), `className`, `delay` (number).

Split the text string by word. Wrap each word in a `<span style={{ overflow: 'hidden', display: 'inline-block' }}>`. Wrap each word's text in an inner `<motion.span>` with `initial={{ y: '110%' }}` → `animate={{ y: '0%' }}` with staggered delays (0.04 s per word, starting from `delay` prop). Use `ease: [0.16,1,0.3,1]`, `duration: 0.7`. Trigger only when in viewport.

This creates a theatrical **word-mask reveal** where words rise from below their clipping container.

---

## 6 · Section-by-Section Specifications

---

### Section 1 · Navbar

**Layout**: Full-width, `position: fixed`, `top: 1.5rem`, centered horizontally. The nav is NOT edge-to-edge — it is a floating pill/bar: `max-width: 900px`, auto left/right margins, `border-radius: var(--radius-xl)`, `background: var(--glass-1)`, `backdrop-filter: var(--glass-blur-heavy)`, `border: 1px solid var(--glass-border)`, `padding: 0.875rem 2rem`.

**Scroll behaviour**: On page load, the bar is fully transparent (no glass, no border). Once the user scrolls past 80 px, transition (`transition: all 500ms ease`) to the glass style above. This makes it feel like the navbar crystallises out of the page.

**Contents (left → right)**:

- Logo mark: `BC` monogram in a 36 × 36 px square — `background: linear-gradient(135deg, var(--blue-600), var(--cyan-400))`, `border-radius: 10px`, white text in Space Grotesk 700. Beside it, `BossCode` in Space Grotesk 600, white, `font-size: 1.0625rem`.
- Nav links (center): Work · Services · Process · About. `DM Sans 500`, `var(--white-70)`, no underline. On hover, colour shifts to white with a `0.2s` ease. Active link shows a 3 × 3 px dot below it in `var(--blue-400)`.
- CTA (right): `MagneticButton` variant `primary`, text "Start a Project", `font-size: 0.9rem`, `padding: 0.65rem 1.5rem`.

**Mobile**: hamburger icon (3 lines → ✕ animated). Tapping opens a fullscreen drawer that slides down from the top with `Framer Motion` `y: -100% → 0`, `background: rgba(5,11,26,0.97)`, `backdrop-filter: blur(40px)`. Links stack vertically, large (2rem), centered.

---

### Section 2 · Hero

**Height**: `100svh`. `overflow: hidden`. Background: `var(--bg-base)`. `<GlowOrb />` is the first child.

**Grid**: Two-column on desktop (`1fr 1fr`), stacked on mobile. Left column holds text, right holds the visual.

**Left column** (vertically centered, `padding: 0 0 0 max(2rem, 8vw)`):

1. **Eyebrow badge**: A glass pill — `background: var(--glass-2)`, `border: 1px solid var(--glass-border-hi)`, `border-radius: var(--radius-pill)`, `padding: 0.375rem 1rem`. Contents: a 6 × 6 px pulsing dot (`var(--cyan-400)`, `animation: pulse 2s infinite`) + text `"Digital Agency · Est. 2026"` in DM Sans 500, `var(--cyan-300)`, 0.85rem. Animate in with `fadeIn` variant, delay 0.2 s.
2. **Headline**: `<AnimatedText>` component, `el="h1"`, delay 0.4 s. The text is three lines:

   ```
   We Build
   Software That
   Dominates.
   ```

   Style: `font: 700 clamp(3.5rem,8vw,7rem) var(--font-display)`, `letter-spacing: -0.04em`, `line-height: 1.05`, white. The word **Dominates.** is wrapped in a `<span>` with `background: linear-gradient(135deg, var(--blue-400), var(--cyan-300))`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent` — making it a gradient word.
3. **Sub-headline**: `fadeUp` variant, delay 0.9 s. `"From startups to enterprises — we craft digital products with obsessive precision and a flair for the extraordinary."` DM Sans 400, 1.125 rem, `var(--white-70)`, max-width 480 px, `line-height: 1.65`.
4. **CTA row**: Two buttons side-by-side (`gap: 1rem`), `fadeUp` delay 1.1 s:
   - `MagneticButton` primary: `"See Our Work"`
   - `MagneticButton` ghost: `"Book a Call ↗"`
5. **Social proof strip**: `fadeIn` delay 1.3 s. Flex row, left-aligned: five avatar circles (32 px, overlapping −8 px, glass border) + text `"50+ satisfied clients worldwide"` in DM Sans 400, 0.875 rem, `var(--white-50)`.

**Right column** — The Floating Device:

Create a purely CSS/SVG **"phone-like" glass device mockup** — not an actual image. Build it from `<div>` elements:

- Outer shell: 260 × 520 px, `border-radius: 40px`, `background: linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))`, `border: 1.5px solid rgba(255,255,255,0.20)`, `box-shadow: 0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)`, `backdrop-filter: blur(24px)`.
- Inside, render a mockup of the BossCode dashboard UI — glass cards with fake bar charts, status dots, and metric numbers — all built from `<div>` elements. Use `var(--blue-500)` for chart bars, `var(--cyan-400)` for active states.
- Camera notch at top center: 80 × 20 px pill, `background: rgba(0,0,0,0.8)`.
- Animate the device: `animation: hero-float 6s ease-in-out infinite` — a gentle 20 px vertical float + subtle `rotateY(4deg) rotateX(2deg)` at peak.
- Behind the device, a radial glow: `background: radial-gradient(ellipse 300px 300px, rgba(59,130,246,0.25), transparent)`, pulsing opacity 0.6 → 1 over 3 s.

**Scroll Indicator**: Bottom-center of hero, `fadeIn` delay 1.5 s. A vertical line (1 px, 60 px tall, gradient from `var(--blue-400)` to transparent) with a dot sliding down it on a 2 s loop. Text `"scroll"` in DM Sans 500, 0.75 rem, `var(--white-30)`, tracked out `0.15em`.

---

### Section 3 · Stats Bar

**Layout**: Full-width, `padding: 3.5rem 0`, no extra margin. `background: transparent`. A horizontal rule above and below: `1px solid var(--glass-border)`.

**Content**: Four stats, evenly spaced in a flex row. Vertical dividers between them (1 px, `var(--glass-border)`).

| Stat | Label |
| --- | --- |
| 50+ | Projects Shipped |
| 98% | Client Retention |
| 4× | Average ROI |
| ∞ | Cups of Coffee |

Each stat:

- Number: Space Grotesk 700, `clamp(2.5rem,5vw,4rem)`, `background: linear-gradient(135deg, var(--white), var(--blue-300))`, gradient text clip.
- Label: DM Sans 500, 0.875 rem, `var(--white-50)`, `letter-spacing: 0.04em`.

**Animation**: When the section enters viewport, use a GSAP `CountTo` effect — each number counts up from 0 to its final value over 2 s with `ease: Power3.easeOut`. The `∞` symbol scales in with a `spring` effect instead.

---

### Section 4 · Services

**Section padding**: `8rem 0`. Centered `max-width: 1200px`.

**Section header** (centered):

- Small label: `"WHAT WE BUILD"` — DM Sans 500, 0.8 rem, `var(--blue-400)`, `letter-spacing: 0.12em`. Render as a glass pill badge.
- `<AnimatedText>` h2: `"Built to perform. Designed to impress."` — Space Grotesk 700, `clamp(2rem,4vw,3.25rem)`, white, centered, `letter-spacing: -0.025em`.

**Grid**: 3 columns × 2 rows on desktop (6 service cards), 2 columns on tablet, 1 on mobile. `gap: 1.5rem`.

**Service Cards** — use `<GlassCard tilt hover glow>` for each:

Pad each card `2rem`. Contents:

1. Icon container: 52 × 52 px, `background: linear-gradient(135deg, var(--blue-700), var(--blue-600))`, `border-radius: var(--radius-md)`, `box-shadow: var(--glow-blue)`. Lucide icon inside, white, 24 px.
2. Service name: Space Grotesk 600, 1.25 rem, white, `margin-top: 1.5rem`.
3. Description: DM Sans 400, 0.9375 rem, `var(--white-60)`, `line-height: 1.65`, `margin-top: 0.625rem`.
4. Arrow link: `"Explore →"` in `var(--blue-400)`, DM Sans 500, 0.875 rem, `margin-top: 1.5rem`. On hover, arrow translates right 4 px.

Stagger card entrances: each card `fadeUp`, children staggered 0.1 s apart.

**The Six Services**:

1. **Web Platforms** — Blazing-fast web apps that convert visitors into customers.
2. **Mobile Apps** — Native-quality iOS & Android experiences, built cross-platform.
3. **AI Solutions** — Intelligent automation and AI features that make your product smarter.
4. **UI/UX Design** — Interfaces so intuitive, users forget they're using software.
5. **Cloud & DevOps** — Scalable infrastructure that handles whatever you throw at it.
6. **Growth Engineering** — Data-driven optimisation from day one, not day 100.

---

### Section 5 · Portfolio / Featured Work

**Layout**: Two parts — a pinned heading column (desktop) and a horizontally-scrolling work gallery.

**Desktop behaviour** (GSAP ScrollTrigger): Pin the left column (`"Selected Work"` + description + `"View All Projects"` button) while the right side scrolls 3 project cards horizontally. Implement with `ScrollTrigger.create({ pin: leftColumnRef.current, ... })`.

**Mobile behaviour**: Vertical stack, each project card full-width.

**Project Cards** — each is `<GlassCard tilt>`, `aspect-ratio: 4/5`, `min-width: 380px`:

1. **Background image area** (top 60% of card): A CSS-only abstract visual per project — use `background: linear-gradient(...)` + animated `background-size` to simulate a preview. On hover, `scale: 1.04` on the inner image div (clipped by overflow hidden). Include a technology badge row at the bottom of this area.
2. **Content area** (bottom 40%): `padding: 1.5rem`.
   - Project category pill: `var(--glass-3)` background, `var(--cyan-400)` text, DM Sans 500, 0.75 rem.
   - Project name: Space Grotesk 600, 1.375 rem, white.
   - Short description: DM Sans 400, 0.875 rem, `var(--white-60)`.
   - On hover, a `"View Case Study ↗"` link rises from below with a `y: 20 → 0, opacity: 0 → 1` transition.

**Three showcase projects**:

1. **NovaPay** — Fintech payment platform. Abstract blue/cyan gradient preview.
2. **ShiftHR** — B2B HR automation SaaS. Deep navy / steel preview.
3. **VibeCommerce** — AI-powered e-commerce. Purple-blue gradient preview.

---

### Section 6 · Process

**Layout**: `padding: 8rem 0`. Full-width with centered `max-width: 1100px` inner.

**Section header** (left-aligned):

- Glass badge: `"HOW WE WORK"`
- `<AnimatedText>` h2: `"A process as precise as the products we ship."`

**Process Steps**: Vertical timeline on mobile. On desktop: alternating left/right layout (step 1 left, step 2 right, etc.) connected by a dashed vertical line (`border-left: 2px dashed var(--glass-border)`) that **draws itself** as the section scrolls — implement via GSAP `drawSVG` or a `scaleY` reveal from top.

Each step is a `<GlassCard>` with:

- Step number: Space Grotesk 700, `4rem`, `var(--blue-900)` (faded, decorative background text).
- Step title: Space Grotesk 600, 1.375 rem, white.
- Description: DM Sans 400, 0.9375 rem, `var(--white-60)`, `line-height: 1.65`.
- Duration badge: glass pill, e.g. `"Week 1–2"`.

**Four Steps**:

1. **Discover** — Deep-dive into your goals, users, and competitive landscape.
2. **Architect** — Technical blueprint, design system, and project roadmap.
3. **Build** — Iterative sprints with weekly demos. Full transparency, zero surprises.
4. **Launch & Scale** — Deployment, monitoring, and ongoing optimisation.

---

### Section 7 · Why BossCode

**Layout**: `padding: 8rem 0`. Dark section: `background: var(--bg-surface)`. Centered `max-width: 1100px`.

**Headline** (centered): `"Most agencies ship. We obsess."` — gradient text, `font-size: clamp(2.5rem,5vw,4.5rem)`.

**Below the headline**: A `2 × 3` grid of `<GlassCard hover>` differentiator cards. Each card:

- Large check icon: `var(--cyan-400)`, 32 px.
- Title: Space Grotesk 600, 1.125 rem, white.
- Body: DM Sans 400, 0.875 rem, `var(--white-60)`.

Six differentiators: Senior-only engineers · Pixel-perfect design · 48 h response guarantee · Source code ownership · No vendor lock-in · Transparent fixed pricing.

---

### Section 8 · Testimonials

**Layout**: `padding: 8rem 0`. `background: var(--bg-base)`. Full-width horizontal marquee.

**Top row** (auto-scrolling left, speed: 40 s): 4 testimonial cards. **Bottom row** (auto-scrolling right, speed: 50 s, opposite direction): 4 testimonial cards.

Implement each row with a flex container duplicated (`[cards][cards]`), `animation: marquee-left 40s linear infinite`. Pause on hover (`animation-play-state: paused`).

Each testimonial card: `<GlassCard>`, `width: 380px`, `flex-shrink: 0`, `padding: 2rem`.

- Opening `"` glyph: Space Grotesk 700, `5rem`, `var(--blue-600)`, `line-height: 1`, `opacity: 0.6`.
- Quote text: DM Sans 400, 1rem, `var(--white-80)`, `line-height: 1.7`.
- Divider: 1 px, `var(--glass-border)`, `margin: 1.25rem 0`.
- Avatar + name: 40 px avatar circle (glass border), Space Grotesk 600 name, DM Sans 400 role/company in `var(--white-50)`.
- 5-star rating: five ★ in `var(--cyan-400)`.

---

### Section 9 · CTA Banner

**Layout**: `padding: 7rem 2rem`. `background: var(--bg-surface)`. `<GlowOrb />` behind content, orbs in `var(--blue-600)` and `var(--cyan-500)`, higher opacity (0.25).

**Inner container**: max-width 800 px, centered. Content:

1. Badge: `"READY TO BUILD?"`
2. `<AnimatedText>` h2 (centered): `"Let's make something the world hasn't seen yet."` — Space Grotesk 700, `clamp(2.25rem,5vw,4rem)`, gradient text.
3. Sub-text: `"Most project conversations start with a 30-minute call. No pressure. No sales deck. Just two teams figuring out if there's a fit."` DM Sans 400, 1.0625 rem, `var(--white-60)`, centered, max-width 560 px.
4. Two `<MagneticButton>` — primary: `"Start Your Project"`, ghost: `"hello@bossco.de"`.

**Background treatment**: Behind the text, render the `BC` logo monogram at `font-size: 30vw`, Space Grotesk 700, `var(--blue-950)`, `opacity: 0.15`, absolutely positioned, centered. This creates a giant watermark-like depth effect.

---

### Section 10 · Footer

**Layout**: `background: #020816` (darkest possible). Top border: 1 px `var(--glass-border)`. `padding: 4rem 0 2rem`.

**Four columns**:

1. **Brand**: Logo + tagline `"We build software that dominates."` + social icons (GitHub, LinkedIn, X/Twitter, Dribbble) as icon buttons with glass hover.
2. **Services**: Web Platforms · Mobile Apps · AI Solutions · Design · DevOps · Growth.
3. **Company**: Work · About · Process · Blog · Careers · Legal.
4. **Contact**: `hello@bossco.de` · `+1 (555) BOSS-CODE` · Schedule a call link.

**Bottom bar**: Flex row. Left: `© 2026 BossCode. All rights reserved.` Right: `Privacy · Terms`.

---

## 7 · Scroll & Page Transition Effects

### 7.1 Page Enter Transition

On initial load, a full-screen overlay (`background: var(--bg-base)`) covers the page. It splits into two halves (top and bottom) that slide apart to reveal the hero — `scaleY: 1 → 0` on each half, `duration: 1.2s`, `ease: [0.76,0,0.24,1]`, top half going up, bottom half going down. The logo mark `BC` is centered on the overlay during this transition and scales up `1 → 2` + fades out as the halves depart.

### 7.2 Section Entrance Rhythm

Each section heading uses `<AnimatedText>` (word mask reveal). Supporting content uses `fadeUp`. Stats and grids use staggered children. **Never use a simple opacity fade alone** — every reveal has a directional component.

### 7.3 Parallax Layers

In the Hero, the device mockup scrolls at `0.6×` the scroll speed (slower — appears deeper). The background glow orbs scroll at `0.3×`. The headline text scrolls at `1.0×`. This layering creates the illusion of depth.

Implement via GSAP ScrollTrigger `scrub: 1` on each element with a `yPercent` or `y` value proportional to scroll distance.

### 7.4 Horizontal Scroll Section (Portfolio)

On desktop, wrap the portfolio cards in a horizontally scrolling container linked to the vertical scroll via GSAP ScrollTrigger. As the user scrolls down 400 px of vertical distance, the cards travel 800 px horizontally. `scrub: 1.5` for a smooth, weighty feel.

---

## 8 · Micro-interaction Inventory

Every interactive element must have a micro-interaction. No exceptions.

| Element | Interaction |
| --- | --- |
| Nav links | Colour fade 200 ms + underline dot appears |
| Primary button | Shimmer sweep + glow intensifies + slight scale 1.02 |
| Ghost button | Border glows blue + background tints |
| Glass card (hover) | Glass deepens + tilt + spotlight follows cursor |
| Service card arrow | Translates right 4 px over 200 ms |
| Portfolio card | Image scales 1.04 + overlay info rises |
| Testimonial | Pause marquee |
| Footer social icons | Scale 1.15 + blue glow |
| Scroll indicator | Dot bounces perpetually |
| Stats numbers | Count up once on viewport entry |

---

## 9 · Responsive Breakpoints

| Breakpoint | Width | Changes |
| --- | --- | --- |
| Mobile | < 640 px | Single column, hero stacked, nav drawer, portfolio vertical |
| Tablet | 640–1024 px | 2-col service grid, device mockup smaller |
| Desktop | > 1024 px | Full layout as specified |
| Wide | > 1440 px | Max-width containers, font scaling caps |

---

## 10 · Performance Rules

- All Framer Motion and GSAP logic inside `useEffect` / `useLayoutEffect` — never on server.
- Use `next/font` only — no external font CDN calls.
- `will-change: transform` on all animated elements; remove on animation end.
- Lenis must be destroyed on component unmount.
- `prefers-reduced-motion` check: if true, disable all animations (instant show, no scroll effects, no parallax).
- Use `next/image` with blur placeholder for any real images.
- Lazy import GSAP: `const { gsap } = await import('gsap')` inside useEffect.
- No animation should block the main thread — all transforms, not layout properties.

---

## 11 · Copy Reference

| Location | Copy |
| --- | --- |
| Site title | BossCode — Digital Agency |
| Meta description | We build software that dominates. Web, mobile, and AI products for companies that refuse to settle. |
| Hero h1 | We Build / Software That / Dominates. |
| Hero sub | From startups to enterprises — we craft digital products with obsessive precision and a flair for the extraordinary. |
| CTA primary | See Our Work |
| CTA secondary | Book a Call ↗ |
| Stats | 50+ / 98% / 4× / ∞ |
| CTA banner h2 | Let's make something the world hasn't seen yet. |
| Footer tagline | We build software that dominates. |
| Email | hello@bossco.de |

---

## 12 · Final Build Checklist

Before declaring the build complete, verify every item:

- [ ] Noise grain overlay active and animating at 24 fps
- [ ] Custom cursor with two layers: dot (instant) + ring (lagged)
- [ ] Cursor changes state on magnetic / text elements
- [ ] Page-enter transition (split reveal) plays once on load
- [ ] Lenis smooth scroll active — no jerky native scroll
- [ ] Navbar crystallises from transparent to glass on scroll
- [ ] Hero device mockup floating animation playing
- [ ] Hero parallax layers at 0.3×, 0.6×, 1.0× scroll speeds
- [ ] `<AnimatedText>` word-mask reveal on all section headings
- [ ] Stats count up on viewport entry (GSAP)
- [ ] All 6 service cards have tilt + spotlight + glow hover
- [ ] Portfolio horizontal scroll linked to vertical scroll (GSAP)
- [ ] Process timeline line draws itself on scroll
- [ ] Testimonial marquee loops, pauses on hover
- [ ] CTA `BC` watermark visible in background
- [ ] All `<MagneticButton>` components attract cursor
- [ ] Shimmer sweep on primary button hover
- [ ] Footer social icons glow on hover
- [ ] Mobile nav drawer opens/closes correctly
- [ ] `prefers-reduced-motion` disables all animations
- [ ] No hydration errors in console
- [ ] All text meets WCAG AA contrast ratios

---

*End of prompt. Build exactly this. Do not simplify, skip, or approximate any specification.*
