# BossCode Project Guidelines (`AGENTS.md`)

## 1. Brand POV & Audience
- **Company:** BossCode (Karachi, Pakistan).
- **Mission:** Helping Pakistani businesses (retail shops, clinics, wholesalers, workshops, online sellers) move **from paper registers and manual work to simple digital software and WhatsApp automation**.
- **Target Audience:** Non-technical business owners. Every screen, component, and sentence must be immediately understandable in under 3 seconds without technical jargon.

## 2. Strict Copy & Visual Hierarchy Rules
- **Show, Don't Tell:** Prefer interactive UI previews (`ProductMock`, visual Paper-vs-Digital switchers, badges, numbers in `Rs`) over explanatory paragraphs.
- **Low Text Density:**
  - Keep hero subtitles under 18 words.
  - Keep card descriptions to a single sentence of 6–12 words.
  - Never show programming code or terminal syntax to represent business workflows.
- **Static Readability:** Never place FAQs or multi-line reading content inside continuously moving marquees.

## 3. Design System & Technical Rules
- **Color Palette:** Strict adherence to White (`#FFFFFF`), Deep Navy (`#000921`), Electric Blue (`#0055FF`), and Cyan (`#00D2FF`), plus semantic status tones (`.tone-ok`, `.tone-warn`, `.tone-bad`) inside product mocks.
- **Navigation & Links:**
  - Always use Next.js `<Link>` for internal page transitions.
  - Ensure all `#anchor` links match actual DOM element `id` attributes.
  - Maintain a functional mobile navigation drawer on viewports `<= 900px`.
- **Conversion Channels:** Always provide a direct WhatsApp action (`https://wa.me/923197542768`) alongside email/form actions.

