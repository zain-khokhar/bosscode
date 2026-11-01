'use client';
import { useEffect, useRef, useState } from 'react';
import HeroReveal from './HeroReveal';

const TABS = ['problem', 'solution', 'result'];

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const ICON_BOOK = (
  <svg {...svgProps}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z" />
  </svg>
);
const ICON_SEARCH = (
  <svg {...svgProps}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const ICON_CLOCK = (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const ICON_UP = (
  <svg {...svgProps}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

function CodeContent({ tab }) {
  if (tab === 'solution') {
    return (
      <div id="bc-device-content">
        {[
          { layer: 'Records', val: 'Digital & searchable' },
          { layer: 'Accounts', val: 'Stock, sales, dues' },
          { layer: 'Orders', val: 'Tracked in one place' },
          { layer: 'WhatsApp', val: 'Auto alerts & replies' },
        ].map((r) => (
          <div className="bc-arch-row" key={r.layer}>
            <span className="bc-arch-layer">{r.layer}</span>
            <span className="bc-arch-val">{r.val}</span>
          </div>
        ))}
      </div>
    );
  }

  if (tab === 'result') {
    return (
      <div id="bc-device-content">
        {[
          { label: 'Time saved', val: 'Every day', icon: ICON_CLOCK },
          { label: 'Mistakes', val: 'Fewer', icon: ICON_UP },
          { label: 'Records', val: 'Safe & searchable', icon: ICON_SEARCH },
          { label: 'Daily work', val: 'Organized', icon: ICON_BOOK },
        ].map((r) => (
          <div className="bc-telemetry-row" key={r.label}>
            <span className="bc-telemetry-label">
              {r.icon}
              {r.label}
            </span>
            <span className="bc-telemetry-value">{r.val}</span>
          </div>
        ))}
      </div>
    );
  }

  // problem (default)
  return (
    <div id="bc-device-content">
      {[
        { layer: 'Records', val: 'Piles of paper' },
        { layer: 'Accounts', val: 'In a notebook' },
        { layer: 'Orders', val: 'Lost in WhatsApp' },
        { layer: 'Daily work', val: 'Done by hand' },
      ].map((r) => (
        <div className="bc-arch-row" key={r.layer}>
          <span className="bc-arch-layer">{r.layer}</span>
          <span className="bc-arch-val">{r.val}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [tab, setTab] = useState('problem');
  const wrapperRef = useRef(null);

  /* 2.5D tilt on hover */
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
      const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
      el.style.transform = `perspective(900px) rotateY(${dx * 10}deg) rotateX(${-dy * 8}deg) scale(1.02)`;
    };
    const onLeave = () => {
      el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
    <HeroReveal />
    <section id="bc-hero" data-section="hero-detail">
      <div className="arch-grid" aria-hidden="true" />

      <div className="container">
        <div id="bc-hero-grid">

          {/* ── LEFT COLUMN ── */}
          <div id="bc-hero-left">
            <div id="bc-hero-badge">
              <span id="bc-hero-badge-dot" />
              Built for Pakistani businesses
            </div>

            <h2 id="bc-hero-title">
              Your Daily Work,<br />
              <span className="gradient-word">One Simple Screen.</span>
            </h2>

            <p id="bc-hero-sub">
              Move from paper registers to one simple digital system.
            </p>

            <div id="bc-hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get a Free Check-up
                <svg className="btn-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9h10M10 5l4 4-4 4" />
                </svg>
              </a>
              <a href="#work" className="btn btn-ghost">See How We Help</a>
            </div>

            <div id="bc-hero-proof">
              <div id="bc-hero-avatars">
                {[{ i: 'BC', c: 'var(--navy)' }, { i: '24', c: 'var(--blue)' }, { i: '7d', c: 'var(--navy)' }, { i: '✓', c: 'var(--blue)' }].map((a, n) => (
                  <div className="bc-avatar" key={n} style={{ background: a.c }}>{a.i}</div>
                ))}
              </div>
              <div id="bc-hero-proof-text">
                <strong>Your first chat is free</strong>
                No pressure, no hidden costs
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Device ── */}
          <div id="bc-hero-right">
            <div id="bc-device-wrapper" ref={wrapperRef} style={{ transition: 'transform 0.18s ease' }}>
              <div id="bc-device">

                <div id="bc-device-topbar">
                  <div id="bc-device-dots">
                    <div className="bc-dot" style={{ background: '#ff5f57' }} />
                    <div className="bc-dot" style={{ background: '#febc2e' }} />
                    <div className="bc-dot" style={{ background: '#28c840' }} />
                  </div>
                  <div id="bc-device-tabs">
                    {TABS.map((t) => (
                      <button
                        key={t}
                        className={`bc-device-tab${tab === t ? ' active' : ''}`}
                        onClick={() => setTab(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animated panel */}
                <div style={{ transition: 'opacity 0.2s ease' }}>
                  <CodeContent tab={tab} />
                </div>
              </div>

              {/* Floating badge */}
              <div id="bc-device-badge">
                <div id="bc-device-badge-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 8 8 15 4" />
                    <path d="M1 4v8l7 4 7-4V4" />
                  </svg>
                </div>
                <div>
                  <div id="bc-device-badge-label">Reply</div>
                  <div id="bc-device-badge-value">Within 24 hours ✓</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
