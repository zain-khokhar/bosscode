'use client';
import { useEffect, useRef, useState } from 'react';

const TABS = ['architecture', 'api', 'deploy'];

function CodeContent({ tab }) {
  if (tab === 'api') {
    return (
      <div id="bc-device-content">
        {[
          {
            label: 'Build velocity',
            val: '3.2× faster',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              </svg>
            ),
          },
          {
            label: 'API latency',
            val: '<180ms avg',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            ),
          },
          {
            label: 'Deploy freq.',
            val: 'Daily',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            ),
          },
          {
            label: 'Code coverage',
            val: '94%',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ),
          },
          {
            label: 'Sprint velocity',
            val: '42 pts',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            ),
          },
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

  if (tab === 'deploy') {
    return (
      <div id="bc-device-content">
        <div className="bc-code-comment">{'// Stack Layers'}</div>
        <br />
        {[
          { layer: 'Frontend',   val: 'Next.js 15 + TS'  },
          { layer: 'API',        val: 'GraphQL / REST'    },
          { layer: 'Database',   val: 'PostgreSQL + Redis'},
          { layer: 'Infra',      val: 'AWS + Kubernetes'  },
          { layer: 'CI/CD',      val: 'GitHub Actions'    },
          { layer: 'Monitoring', val: 'Datadog + Sentry'  },
        ].map((r) => (
          <div className="bc-arch-row" key={r.layer}>
            <span className="bc-arch-layer">{r.layer}</span>
            <span className="bc-arch-val">{r.val}</span>
          </div>
        ))}
      </div>
    );
  }

  // architecture (default)
  return (
    <div id="bc-device-content">
      <div className="bc-code-comment">{'// BossCode 2026: System Architecture'}</div>
      <br />
      <div>
        <span className="bc-code-keyword">type </span>
        <span className="bc-code-type">DigitalProduct</span>
        {' = {'}
      </div>
      <div>{'  '}strategy: <span className="bc-code-type">ResearchFirst</span>;</div>
      <div>{'  '}design: <span className="bc-code-type">PixelPerfect</span>;</div>
      <div>{'  '}code: <span className="bc-code-type">ProductionGrade</span>;</div>
      <div>{'  '}delivery: <span className="bc-code-type">OnSchedule</span>;</div>
      <div>{'}'}</div>
      <br />
      <div className="bc-code-comment">{'// Guaranteed outcomes'}</div>
      <div>
        <span className="bc-code-keyword">const </span>sla = {'{'}
      </div>
      <div>{'  '}uptime: <span className="bc-code-number">99.97</span>%,</div>
      <div>{'  '}latency: <span className="bc-code-number">&lt;180</span>ms,</div>
      <div>{'  '}deploys: <span className="bc-code-string">&apos;daily&apos;</span></div>
      <div>{'}'}</div>
    </div>
  );
}

export default function Hero() {
  const [tab, setTab] = useState('architecture');
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
    <section id="bc-hero" data-section="hero">
      <div className="arch-grid" aria-hidden="true" />

      <div className="container">
        <div id="bc-hero-grid">

          {/* ── LEFT COLUMN ── */}
          <div id="bc-hero-left">
            <div id="bc-hero-badge">
              <span id="bc-hero-badge-dot" />
              BossCode Digital Agency · 2026
            </div>

            <h1 id="bc-hero-title">
              We Build<br />
              <span className="gradient-word">Products</span><br />
              That Scale.
            </h1>

            <p id="bc-hero-sub">
              Strategy-first digital agency. We design, engineer, and launch
              high-performance web applications that drive measurable business growth.
            </p>

            <div id="bc-hero-actions">
              <a href="#contact" className="btn btn-primary">
                Start Your Project
                <svg className="btn-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9h10M10 5l4 4-4 4" />
                </svg>
              </a>
              <a href="#work" className="btn btn-ghost">See Our Work</a>
            </div>

            <div id="bc-hero-proof">
              <div id="bc-hero-avatars">
                {[{ i: 'AH', c: 'var(--navy)' }, { i: 'MB', c: 'var(--blue)' }, { i: 'ZK', c: 'var(--navy)' }, { i: 'SF', c: 'var(--blue)' }].map((a, n) => (
                  <div className="bc-avatar" key={n} style={{ background: a.c }}>{a.i}</div>
                ))}
              </div>
              <div id="bc-hero-proof-text">
                <strong>40+ Projects Delivered</strong>
                Trusted by teams worldwide
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
                  <div id="bc-device-badge-label">Status</div>
                  <div id="bc-device-badge-value">Production Live ✓</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
