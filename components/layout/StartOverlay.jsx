'use client';
import { useEffect, useRef } from 'react';

/**
 * BossCode — Intro Curtain Animation
 * ──────────────────────────────────
 * Phase 1: Navy screen + white pill with "BC" label fades in
 * Phase 2: Pill expands horizontally into full-width white bar
 * Phase 3: Bar expands vertically to fill screen (white flash)
 * Phase 4: White overlay slides UP revealing the site
 * Phase 5: Overlay removed from DOM
 */
export default function StartOverlay() {
  const overlayRef = useRef(null);
  const rectRef    = useRef(null);
  const labelRef   = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const rect    = rectRef.current;
    const label   = labelRef.current;
    if (!overlay || !rect || !label) return;

    // Lock scroll during animation
    document.body.style.overflow = 'hidden';

    const tl = [
      // 0ms — start hidden
      () => {
        overlay.style.opacity = '1';
        rect.style.opacity    = '0';
        rect.style.transform  = 'scaleX(0.3) scaleY(0.3)';
      },

      // 300ms — pill appears
      () => {
        rect.style.transition = 'opacity 0.35s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)';
        rect.style.opacity    = '1';
        rect.style.transform  = 'scaleX(1) scaleY(1)';
      },

      // 1000ms — pill stretches to full width bar
      () => {
        label.style.transition = 'opacity 0.2s ease';
        label.style.opacity    = '0';
        rect.style.transition  = 'border-radius 0.5s ease, width 0.55s cubic-bezier(0.76,0,0.24,1), height 0.55s cubic-bezier(0.76,0,0.24,1)';
        rect.style.width       = '100vw';
        rect.style.height      = '6px';
        rect.style.borderRadius = '0';
      },

      // 1620ms — bar expands to fill whole screen
      () => {
        rect.style.transition = 'height 0.55s cubic-bezier(0.76,0,0.24,1)';
        rect.style.height     = '100vh';
      },

      // 2260ms — white screen slides up revealing site
      () => {
        overlay.style.transition = 'transform 0.75s cubic-bezier(0.76,0,0.24,1)';
        overlay.style.transform  = 'translateY(-100%)';
      },

      // 3100ms — cleanup
      () => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      },
    ];

    const delays = [0, 300, 1000, 1620, 2260, 3100];
    const timers = delays.map((d, i) => setTimeout(tl[i], d));

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      id="start-overlay"
      ref={overlayRef}
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          99999,
        background:      'var(--navy)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        opacity:         1,
        pointerEvents:   'all',
        overflow:        'hidden',
      }}
    >
      {/* Animated pill / bar / full-screen rect */}
      <div
        id="start-rect"
        ref={rectRef}
        style={{
          position:        'relative',
          width:           '160px',
          height:          '52px',
          borderRadius:    '999px',
          background:      '#ffffff',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          opacity:         0,
          willChange:      'transform, width, height, border-radius',
          overflow:        'hidden',
        }}
      >
        <div
          ref={labelRef}
          style={{
            display:        'flex',
            alignItems:     'center',
            gap:            '10px',
            fontFamily:     'var(--font-mono)',
            fontSize:       '11px',
            fontWeight:     700,
            letterSpacing:  '0.22em',
            textTransform:  'uppercase',
            color:          'var(--navy)',
            whiteSpace:     'nowrap',
            userSelect:     'none',
          }}
        >
          {/* Logo mark */}
          <span style={{
            width:        '28px',
            height:       '28px',
            borderRadius: '8px',
            background:   'var(--navy)',
            display:      'flex',
            alignItems:   'center',
            justifyContent: 'center',
            fontFamily:   'var(--font-display)',
            fontWeight:   900,
            fontSize:     '11px',
            color:        '#fff',
            flexShrink:   0,
            letterSpacing: '-0.5px',
          }}>
            BC
          </span>
          BossCode
        </div>
      </div>
    </div>
  );
}
