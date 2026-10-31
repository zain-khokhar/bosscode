'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const TABS = [
  { id: 'today', label: '1. Paper Today' },
  { id: 'digital', label: '2. Digital App' },
  { id: 'result', label: '3. Your Result' },
];

const SCREENS = {
  today: {
    title: 'How work runs on paper today',
    stats: [
      { l: 'Registers', v: '3–4 Books' },
      { l: 'Daily typing', v: '2+ hrs' },
      { l: 'Missed dues', v: 'High risk' },
    ],
    rows: [
      { icon: 'file', a: 'Sales & Bills', b: 'Written by hand in registers', tag: 'Slow', tone: 'bad' },
      { icon: 'wallet', a: 'Customer Udhaar', b: 'Remembered in head or diary', tag: 'Risky', tone: 'warn' },
      { icon: 'message', a: 'WhatsApp Orders', b: 'Buried inside daily chats', tag: 'Missed', tone: 'bad' },
      { icon: 'boxes', a: 'Stock Count', b: 'Checked only when items run out', tag: 'Late', tone: 'warn' },
    ],
  },
  digital: {
    title: 'Everything on one clean screen',
    stats: [
      { l: 'Today\'s Sales', v: 'Rs 84,500' },
      { l: 'Bills Made', v: '36' },
      { l: 'Auto-WhatsApp', v: 'Active' },
    ],
    rows: [
      { icon: 'receipt', a: 'Bill #1042 · Cash', b: 'Saved & receipt sent in 3 taps', tag: 'Paid', tone: 'ok' },
      { icon: 'boxes', a: 'Cooking Oil 5L', b: '3 left · Low stock alert', tag: 'Restock', tone: 'warn' },
      { icon: 'bell', a: 'Ali Traders · Rs 32,000', b: 'Polite WhatsApp reminder sent', tag: 'Auto', tone: 'ok' },
      { icon: 'cloud', a: 'Daily Cloud Backup', b: 'Safe on phone & computer 24/7', tag: 'Safe', tone: 'ok' },
    ],
  },
  result: {
    title: 'What changes in your business',
    stats: [
      { l: 'Time Saved', v: '2+ hrs/day' },
      { l: 'Staff Training', v: '1 Day' },
      { l: 'Data Ownership', v: '100% Yours' },
    ],
    rows: [
      { icon: 'clock', a: 'Evening Closing', b: 'Sales & profit ready in 1 click', tag: 'Instant', tone: 'ok' },
      { icon: 'search', a: 'Find Any Record', b: 'Search by name, phone, or bill #', tag: '2 Sec', tone: 'ok' },
      { icon: 'shield', a: 'Zero Lost Udhaar', b: 'Every customer balance tracked live', tag: 'Clear', tone: 'ok' },
      { icon: 'phone', a: 'Local Karachi Support', b: 'Real humans help your team', tag: 'Included', tone: 'ok' },
    ],
  },
};

export default function Hero() {
  const [tab, setTab] = useState('digital');
  const [paused, setPaused] = useState(false);
  const wrapperRef = useRef(null);

  /* Auto-cycle tabs so non-tech visitors see the story without clicking */
  useEffect(() => {
    if (paused) return;
    const order = ['today', 'digital', 'result'];
    const id = setInterval(() => {
      setTab((curr) => order[(order.indexOf(curr) + 1) % order.length]);
    }, 3800);
    return () => clearInterval(id);
  }, [paused]);

  /* Subtle 2.5D tilt on desktop hover */
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      el.style.transform = `perspective(900px) rotateY(${dx * 8}deg) rotateX(${-dy * 6}deg) scale(1.01)`;
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

  const current = SCREENS[tab];

  return (
    <section id="bc-hero" data-section="hero">
      <div className="arch-grid" aria-hidden="true" />

      <div className="container">
        <div id="bc-hero-grid">
          {/* ── LEFT COLUMN (Minimal Text, Instant Clarity) ── */}
          <div id="bc-hero-left">
            <div id="bc-hero-badge">
              <span id="bc-hero-badge-dot" />
              Built for Pakistani Businesses
            </div>

            <h1 id="bc-hero-title">
              From Paper<br />
              <span className="gradient-word">To Digital</span><br />
              Made Simple.
            </h1>

            <p id="bc-hero-sub">
              Leave registers and messy chats behind. Manage sales, stock, and daily work on one simple screen.
            </p>

            <div id="bc-hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Get a Free Check-up
                <svg className="btn-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9h10M10 5l4 4-4 4" />
                </svg>
              </Link>
              <Link href="/solutions" className="btn btn-ghost">
                Explore Solutions
              </Link>
            </div>

            <div id="bc-hero-proof">
              <div id="bc-hero-avatars">
                {[
                  { i: 'BC', c: 'var(--navy)' },
                  { i: '24h', c: 'var(--blue)' },
                  { i: 'PK', c: 'var(--navy)' },
                  { i: '✓', c: 'var(--blue)' },
                ].map((a, n) => (
                  <div className="bc-avatar" key={n} style={{ background: a.c }}>{a.i}</div>
                ))}
              </div>
              <div id="bc-hero-proof-text">
                <strong>Free first chat · No pressure</strong>
                Works on phone or PC · Staff learns in 1 day
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Interactive Visual Business Board ── */}
          <div id="bc-hero-right">
            <div
              id="bc-device-wrapper"
              ref={wrapperRef}
              style={{ transition: 'transform 0.18s ease' }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div id="bc-device">
                <div id="bc-device-topbar">
                  <div id="bc-device-dots">
                    <div className="bc-dot" style={{ background: '#ff5f57' }} />
                    <div className="bc-dot" style={{ background: '#febc2e' }} />
                    <div className="bc-dot" style={{ background: '#28c840' }} />
                  </div>
                  <div id="bc-device-tabs" role="tablist" aria-label="Business transformation preview">
                    {TABS.map((t) => (
                      <button
                        key={t.id}
                        role="tab"
                        aria-selected={tab === t.id}
                        className={`bc-device-tab${tab === t.id ? ' active' : ''}`}
                        onClick={() => {
                          setTab(t.id);
                          setPaused(true);
                        }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Visual Dashboard Content */}
                <div className="bc-hero-board" key={tab}>
                  <div className="bc-hero-board-title">{current.title}</div>

                  <div className="bc-hero-kpis">
                    {current.stats.map((st) => (
                      <div className="bc-hero-kpi" key={st.l}>
                        <strong>{st.v}</strong>
                        <span>{st.l}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bc-hero-rows">
                    {current.rows.map((r) => (
                      <div className="bc-hero-row" key={r.a}>
                        <div className="bc-hero-row-left">
                          <span className="bc-hero-row-icon">
                            <Icon name={r.icon} size={15} />
                          </span>
                          <div>
                            <strong>{r.a}</strong>
                            <small>{r.b}</small>
                          </div>
                        </div>
                        <em className={`bc-pill tone-${r.tone}`}>{r.tag}</em>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div id="bc-device-badge">
                <div id="bc-device-badge-icon">
                  <Icon name="check" size={16} />
                </div>
                <div>
                  <div id="bc-device-badge-label">Fast Response</div>
                  <div id="bc-device-badge-value">Reply within 24 hours ✓</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
