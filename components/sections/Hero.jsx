'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const TABS = [
  { id: 'digital', label: 'Your Future System' },
  { id: 'paper', label: 'On Paper Today' },
];

function HeroPreviewContent({ tab }) {
  if (tab === 'paper') {
    return (
      <div id="bc-device-content" className="bc-hero-preview-body">
        <div className="bc-hero-preview-head">
          <span>How daily work feels on paper</span>
          <em className="bc-hero-tag bc-hero-tag--muted">Manual &amp; Slow</em>
        </div>

        <div className="bc-hero-paper-list">
          {[
            {
              icon: 'file',
              title: 'Sales & Udhaar in Paper Registers',
              sub: 'Takes 15 minutes to flip pages and find old dues',
              badge: 'Lost records',
            },
            {
              icon: 'message',
              title: 'Customer Orders Buried in WhatsApp',
              sub: 'Orders missed inside 50+ unread voice notes & chats',
              badge: 'Missed orders',
            },
            {
              icon: 'clock',
              title: 'Counting Stock & Cash at Night',
              sub: '2 hours spent typing bills and tallying registers by hand',
              badge: '2+ hrs wasted',
            },
          ].map((item) => (
            <div key={item.title} className="bc-hero-paper-row">
              <span className="bc-hero-paper-icon">
                <Icon name={item.icon} size={16} />
              </span>
              <div className="bc-hero-paper-text">
                <strong>{item.title}</strong>
                <small>{item.sub}</small>
              </div>
              <span className="bc-hero-paper-pill">{item.badge}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: 'digital' — How your system will look when we build it
  return (
    <div id="bc-device-content" className="bc-hero-preview-body">
      <div className="bc-hero-preview-head">
        <span>How your screen looks if we build it</span>
        <em className="bc-hero-tag bc-hero-tag--cyan">Concept Preview</em>
      </div>

      <div className="bc-hero-stats-strip">
        <div className="bc-hero-stat-box">
          <span>Today&apos;s Sales</span>
          <strong>Rs 84,500</strong>
        </div>
        <div className="bc-hero-stat-box">
          <span>Pending Udhaar</span>
          <strong>Rs 18,200</strong>
        </div>
        <div className="bc-hero-stat-box">
          <span>Saved Daily</span>
          <strong>2+ Hours</strong>
        </div>
      </div>

      <div className="bc-hero-live-slip">
        <div className="bc-hero-live-slip-top">
          <div>
            <strong>Bill #1042 · Ali Traders</strong>
            <small>Saved in 3 taps · Stock updated automatically</small>
          </div>
          <b>Rs 12,200</b>
        </div>
        <div className="bc-hero-live-slip-foot">
          <span><Icon name="check" size={13} /> PDF Bill &amp; Reminder sent on WhatsApp</span>
          <em>Auto ✓</em>
        </div>
      </div>

      <div className="bc-hero-stock-bar">
        <div className="bc-hero-stock-top">
          <strong>Low Stock Warning · Cooking Oil 5L</strong>
          <span>Only 3 cartons left</span>
        </div>
        <div className="bc-hero-stock-track">
          <div style={{ width: '22%' }} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [tab, setTab] = useState('digital');
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
              Built for Pakistani businesses
            </div>

            <h1 id="bc-hero-title">
              From Paper<br />
              <span className="gradient-word">To Digital</span><br />
              Made Simple.
            </h1>

            <p id="bc-hero-sub">
              Move from paper registers to one simple digital system.
            </p>

            <div id="bc-hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Get a Free Check-up
                <svg className="btn-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9h10M10 5l4 4-4 4" />
                </svg>
              </Link>
              <a href="#work" className="btn btn-ghost">See How It Will Look</a>
            </div>

            <div id="bc-hero-proof">
              <div id="bc-hero-avatars">
                {[{ i: 'BC', c: 'var(--navy)' }, { i: '24', c: 'var(--blue)' }, { i: '7d', c: 'var(--navy)' }, { i: '✓', c: 'var(--blue)' }].map((a, n) => (
                  <div className="bc-avatar" key={n} style={{ background: a.c }}>{a.i}</div>
                ))}
              </div>
              <div id="bc-hero-proof-text">
                <strong>First chat is free</strong>
                No pressure, no hidden costs
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Interactive Concept Device ── */}
          <div id="bc-hero-right">
            <div id="bc-device-wrapper" ref={wrapperRef} style={{ transition: 'transform 0.18s ease' }}>
              <div id="bc-device">

                <div id="bc-device-topbar">
                  <div className="bc-hero-concept-pill">
                    <i /> EXAMPLE CONCEPT
                  </div>
                  <div id="bc-device-tabs">
                    {TABS.map((t) => (
                      <button
                        key={t.id}
                        className={`bc-device-tab${tab === t.id ? ' active' : ''}`}
                        onClick={() => setTab(t.id)}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animated panel */}
                <div style={{ transition: 'opacity 0.2s ease' }}>
                  <HeroPreviewContent tab={tab} />
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
                  <div id="bc-device-badge-label">Custom Built</div>
                  <div id="bc-device-badge-value">Around your work ✓</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
