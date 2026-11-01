'use client';
import { useEffect, useRef } from 'react';

const WORD = 'PAPER TO DIGITAL';
const CHARS = Array.from(WORD);

const clamp = (v, a = 0, b = 1) => Math.min(Math.max(v, a), b);
const easeInOut = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Lusion-style pinned scroll hero.
 * Stage 1 (Land): Giant full-width "PAPER TO DIGITAL" across the bottom of a Deep Navy canvas.
 * Stage 2-3 (Scroll): Per-character staggered Bezier ribbon + liquid shear & SVG displacement
 *                     flows the giant word up into the headline.
 * Stage 4 (Settled): Locks cleanly between "FROM" and "MADE SIMPLE."
 */
export default function HeroReveal() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const bigRef = useRef(null);
  const ghostRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const rightTagRef = useRef(null);
  const hintRef = useRef(null);
  const dispRef = useRef(null);
  const bigCharRefs = useRef([]);
  const ghostCharRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const big = bigRef.current;
    const ghost = ghostRef.current;
    const topEl = topRef.current;
    const bottomEl = bottomRef.current;
    const rightTag = rightTagRef.current;
    const hint = hintRef.current;
    const disp = dispRef.current;
    if (!section || !pin || !big || !ghost) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let geo = null;
    let raf = 0;
    let smooth = reduce ? 1 : 0;

    const measure = () => {
      const vw = pin.clientWidth;
      const vh = pin.clientHeight;
      const padX = clamp(vw * 0.042, 18, 60);
      pin.style.setProperty('--rv-pad', `${padX}px`);

      // Reset character transforms before measuring natural layout
      big.style.filter = 'none';
      for (let i = 0; i < CHARS.length; i++) {
        const ch = bigCharRefs.current[i];
        if (ch) ch.style.transform = 'none';
      }

      big.style.fontSize = '100px';
      const w100 = big.getBoundingClientRect().width || 1;
      const targetFullWidth = Math.max(vw - padX * 2, 260);
      const fs = (100 * targetFullWidth) / w100;
      big.style.fontSize = `${fs}px`;

      const pinRect = pin.getBoundingClientRect();
      const bigRect = big.getBoundingClientRect();
      const ghostRect = ghost.getBoundingClientRect();

      // Position the giant word container at bottom-left on landing
      const baseLeft = padX;
      const baseTop = Math.max(vh - bigRect.height - clamp(vh * 0.08, 44, 78), vh * 0.55);
      big.style.left = `${baseLeft}px`;
      big.style.top = `${baseTop}px`;

      // Re-read after setting base left/top
      const items = CHARS.map((_, i) => {
        const bEl = bigCharRefs.current[i];
        const gEl = ghostCharRefs.current[i];
        const bR = bEl ? bEl.getBoundingClientRect() : bigRect;
        const gR = gEl ? gEl.getBoundingClientRect() : ghostRect;
        return {
          x0: bR.left - pinRect.left,
          y0: bR.top - pinRect.top,
          x1: gR.left - pinRect.left,
          y1: gR.top - pinRect.top,
        };
      });

      geo = {
        vw,
        vh,
        s1: ghostRect.width / Math.max(bigRect.width, 1),
        items,
      };
      big.style.opacity = '1';
    };

    const render = (s) => {
      if (!geo) return;
      const { vw, vh, s1, items } = geo;
      const N = items.length;

      // Main morph progress (0 -> 1 between scroll 0.03 and 0.80)
      const p = clamp((s - 0.03) / 0.77);
      const staggerSpan = 0.44;

      for (let i = 0; i < N; i++) {
        const ch = bigCharRefs.current[i];
        if (!ch) continue;

        const u = N > 1 ? i / (N - 1) : 0;
        const rawT = clamp((p - u * staggerSpan) / (1 - staggerSpan));
        const e = easeInOut(rawT);
        const wave = Math.sin(Math.PI * e);

        const { x0, y0, x1, y1 } = items[i];

        // Quadratic Bezier control point for sweeping Lusion S-ribbon trajectory
        const cx = x0 * 0.62 + x1 * 0.38 + (u - 0.18) * vw * 0.16;
        const cy = y0 * 0.74 + y1 * 0.26 + Math.sin(u * Math.PI) * vh * 0.09 - vh * 0.06;

        const omt = 1 - e;
        const bx = omt * omt * x0 + 2 * omt * e * cx + e * e * x1;
        const by = omt * omt * y0 + 2 * omt * e * cy + e * e * y1;

        const dx = bx - x0;
        const dy = by - y0;

        const baseScale = 1 + (s1 - 1) * e;
        // Liquid horizontal elongation + subtle vertical pinch mid-flight
        const sx = baseScale * (1 + wave * (0.42 + u * 0.48));
        const sy = baseScale * (1 - wave * 0.1 + wave * (1 - u) * 0.16);

        // Strong liquid italic shear & ribbon curve rotation mid-flight
        const skewX = -wave * (24 + u * 16);
        const rot = -wave * (7 - u * 14);

        ch.style.transform =
          `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0) ` +
          `rotate(${rot.toFixed(2)}deg) skewX(${skewX.toFixed(2)}deg) ` +
          `scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`;
      }

      // Organic SVG liquid displacement during active morph
      const globalWave = Math.sin(Math.PI * p);
      if (globalWave > 0.02 && disp && vw > 640) {
        disp.setAttribute('scale', (globalWave * 36).toFixed(1));
        big.style.filter = 'url(#bc-liquid)';
      } else {
        big.style.filter = 'none';
      }

      // "FROM" fades & slides in early so the ribbon flows right beneath it
      const topO = clamp((p - 0.12) / 0.32);
      const topY = (1 - easeInOut(topO)) * 28;
      if (topEl) {
        topEl.style.opacity = topO.toFixed(3);
        topEl.style.transform = `translate3d(0, ${topY.toFixed(1)}px, 0)`;
      }

      // "MADE SIMPLE." and right caption fade in as the ribbon settles
      const botO = clamp((p - 0.38) / 0.38);
      const botY = (1 - easeInOut(botO)) * 32;
      if (bottomEl) {
        bottomEl.style.opacity = botO.toFixed(3);
        bottomEl.style.transform = `translate3d(0, ${botY.toFixed(1)}px, 0)`;
      }
      if (rightTag) {
        rightTag.style.opacity = botO.toFixed(3);
        rightTag.style.transform = `translate3d(0, ${botY.toFixed(1)}px, 0)`;
      }

      if (hint) {
        hint.style.opacity = (1 - clamp(s / 0.08)).toFixed(3);
      }
    };

    const target = () => {
      const rect = section.getBoundingClientRect();
      const range = Math.max(rect.height - window.innerHeight, 1);
      return clamp(-rect.top / range);
    };

    const loop = () => {
      const t = target();
      smooth += (t - smooth) * 0.1;
      if (Math.abs(t - smooth) < 0.0003) smooth = t;
      render(smooth);
      raf = requestAnimationFrame(loop);
    };

    const init = () => {
      measure();
      if (reduce) {
        render(1);
      } else {
        smooth = target();
        render(smooth);
        raf = requestAnimationFrame(loop);
      }
    };

    let cancelled = false;
    const ready =
      document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    ready.then(() => {
      if (!cancelled) init();
    });

    const onResize = () => {
      if (!geo) return;
      measure();
      render(smooth);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="bc-reveal" ref={sectionRef} data-section="hero">
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
        style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
      >
        <filter id="bc-liquid" x="-20%" y="-50%" width="140%" height="200%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.022"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            ref={dispRef}
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="bc-reveal-pin" ref={pinRef}>
        <div className="arch-grid arch-grid--dark" aria-hidden="true" />
        <div className="bc-reveal-glow" aria-hidden="true" />

        {/* Lusion-style horizontal crosshair row */}
        <div className="bc-reveal-crosses" aria-hidden="true">
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
        </div>

        {/* Settled headline stage */}
        <div className="bc-reveal-stage">
          <div className="bc-reveal-headline-row">
            <h1 className="bc-reveal-title" aria-label="From Paper to Digital Made Simple.">
              <span className="bc-reveal-line" ref={topRef} aria-hidden="true">
                From
              </span>
              <span className="bc-reveal-ghost" ref={ghostRef} aria-hidden="true">
                {CHARS.map((ch, i) => (
                  <span
                    key={i}
                    className="bc-rv-ghost-ch"
                    ref={(el) => {
                      ghostCharRefs.current[i] = el;
                    }}
                  >
                    {ch === ' ' ? '\u00A0' : ch}
                  </span>
                ))}
              </span>
              <span
                className="bc-reveal-line bc-reveal-line--italic"
                ref={bottomRef}
                aria-hidden="true"
              >
                Made Simple.
              </span>
            </h1>

            <p className="bc-reveal-side-tag" ref={rightTagRef} aria-hidden="true">
              Simple Digital Software
              <br />
              <span>&amp; WhatsApp Automation</span>
            </p>
          </div>
        </div>

        {/* Giant morphing word */}
        <div className="bc-reveal-big" ref={bigRef} aria-hidden="true">
          {CHARS.map((ch, i) => (
            <span
              key={i}
              className="bc-rv-ch"
              ref={(el) => {
                bigCharRefs.current[i] = el;
              }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </div>

        <div className="bc-reveal-hint" ref={hintRef} aria-hidden="true">
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
