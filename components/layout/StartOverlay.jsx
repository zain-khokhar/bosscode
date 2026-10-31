'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * BossCode — Fast, Non-Blocking Intro Curtain
 * ───────────────────────────────────────────
 * - Runs ONCE per browser session (stored in sessionStorage) so clicking the logo
 *   or navigating back to '/' never traps the user again.
 * - Immediately bypassed when `prefers-reduced-motion: reduce` is enabled.
 * - Snappy ~1.15s total duration so non-technical visitors see the Hero immediately.
 */
export default function StartOverlay() {
  const overlayRef = useRef(null);
  const rectRef    = useRef(null);
  const labelRef   = useRef(null);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const rect    = rectRef.current;
    const label   = labelRef.current;
    if (!overlay || !rect || !label) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem('bc_intro_shown') === '1';
      sessionStorage.setItem('bc_intro_shown', '1');
    } catch {
      // sessionStorage unavailable
    }

    if (prefersReduced || alreadyShown) {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      setSkip(true);
      return;
    }

    document.body.style.overflow = 'hidden';

    const tl = [
      () => {
        overlay.style.opacity = '1';
        rect.style.opacity    = '1';
        rect.style.transform  = 'scaleX(1) scaleY(1)';
      },
      () => {
        label.style.transition  = 'opacity 0.15s ease';
        label.style.opacity     = '0';
        rect.style.transition   = 'border-radius 0.3s ease, width 0.32s cubic-bezier(0.76,0,0.24,1), height 0.32s cubic-bezier(0.76,0,0.24,1)';
        rect.style.width        = '100vw';
        rect.style.height       = '100vh';
        rect.style.borderRadius = '0';
      },
      () => {
        overlay.style.transition = 'transform 0.45s cubic-bezier(0.76,0,0.24,1)';
        overlay.style.transform  = 'translateY(-100%)';
        document.body.style.overflow = '';
      },
      () => {
        overlay.style.display = 'none';
      },
    ];

    const delays = [20, 420, 740, 1200];
    const timers = delays.map((d, i) => setTimeout(tl[i], d));

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  if (skip) return null;

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
        pointerEvents:   'none',
        overflow:        'hidden',
      }}
    >
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
          transform:       'scaleX(0.6) scaleY(0.6)',
          transition:      'opacity 0.22s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1)',
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
