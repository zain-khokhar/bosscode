'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const PILLARS = [
  {
    title: 'Fixed Price in Rs',
    sub: 'Exact quote upfront. Zero surprise monthly bills.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: '100% Yours, Forever',
    sub: 'Your database, your domain, and daily backups.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Live Preview First',
    sub: 'Test your working screens before final launch.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="m9 10 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Karachi Team Support',
    sub: 'Direct WhatsApp help, even after launch.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

const TABS = [
  { id: 'plan', label: '01 · Day-1 Plan' },
  { id: 'own', label: '02 · You Own It' },
  { id: 'support', label: '03 · WhatsApp Help' },
];

export default function QuantumCore() {
  const sectionRef = useRef(null);
  const bgRef      = useRef(null);
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState('plan');

  useEffect(() => {
    const section = sectionRef.current;
    const bg      = bgRef.current;
    const content = contentRef.current;
    const servicesSection = document.getElementById('bc-services');
    if (!section) return;

    let animId;
    // Start progress (0 = white #ffffff, 1 = deep navy #000921)
    let smoothProgress = 0;

    function update() {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const startTrigger = vh * 0.95;
      const endTrigger   = vh * 0.15;
      const rawProgress  = (startTrigger - rect.top) / (startTrigger - endTrigger);
      const targetProgress = Math.min(Math.max(rawProgress, 0), 1);

      smoothProgress += (targetProgress - smoothProgress) * 0.05;
      if (Math.abs(targetProgress - smoothProgress) < 0.0005) {
        smoothProgress = targetProgress;
      }

      const t = smoothProgress * smoothProgress * (3 - 2 * smoothProgress);

      const r = Math.round(255 * Math.pow(1 - t, 1.55));
      const g = Math.round(255 - (255 - 9) * Math.pow(t, 0.72));
      const b = Math.round(255 - (255 - 33) * Math.pow(t, 0.92));
      const bgColor = `rgb(${r}, ${g}, ${b})`;

      section.style.backgroundColor = bgColor;
      if (servicesSection) {
        servicesSection.style.backgroundColor = bgColor;
      }

      if (bg) {
        bg.style.opacity = String(t.toFixed(4));
      }

      if (content) {
        const contentOpacity = 0.15 + 0.85 * t;
        const translateY = (1 - t) * 36;
        content.style.opacity = String(contentOpacity.toFixed(4));
        content.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      }

      animId = requestAnimationFrame(update);
    }

    animId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animId);
      if (servicesSection) {
        servicesSection.style.backgroundColor = '';
      }
    };
  }, []);

  return (
    <section id="bc-quantum" ref={sectionRef}>
      <div id="bc-quantum-bg" ref={bgRef} aria-hidden="true">
        <div className="arch-grid arch-grid--dark" />
        <div className="bc-quantum-glow" />
      </div>

      <div className="container">
        <div id="bc-quantum-content" ref={contentRef}>
          <div className="bc-quantum-layout">
            {/* Left Column: Clear Promise & 4 Proof Pillars */}
            <div className="bc-quantum-copy">
              <div className="section-tag section-tag--dark">
                <span className="dot" />
                Our Promise
              </div>
              <h2 id="bc-quantum-title">
                Straight Talk.<br />Honest Work.
              </h2>
              <p id="bc-quantum-sub">
                Clear plan, fixed price in Rs, and real WhatsApp support from our Karachi team.
              </p>

              <div id="bc-quantum-grid">
                {PILLARS.map((item) => (
                  <div className="bc-quantum-badge" key={item.title}>
                    <div className="bc-quantum-badge-icon" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div className="bc-quantum-badge-text">
                      <div className="bc-quantum-badge-title">{item.title}</div>
                      <div className="bc-quantum-badge-sub">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bc-quantum-actions">
                <a
                  href="https://wa.me/923197542768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bc-quantum-wa-btn"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <Link href="/contact" className="bc-quantum-link-btn">
                  Get a Free Plan →
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Proof & Deal Board */}
            <div className="bc-quantum-board" role="region" aria-label="BossCode Day-One Guarantee Board">
              <div className="bc-qboard-header">
                <div className="bc-qboard-brand">
                  <span className="bc-qboard-dot" />
                  <span>BOSSCODE DEAL SHEET</span>
                </div>
                <span className="bc-qboard-verified">Verified Standard</span>
              </div>

              <div className="bc-qboard-tabs" role="tablist">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={`bc-qboard-tab${activeTab === tab.id ? ' is-active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === 'plan' && (
                <div className="bc-qboard-panel">
                  {/* Visual 7-Day Launch Graphic */}
                  <div className="bc-qboard-timeline-box">
                    <div className="bc-qboard-label-row">
                      <span>TYPICAL LAUNCH TIMELINE</span>
                      <span className="bc-qboard-pill-cyan">7 Days Avg</span>
                    </div>
                    <svg className="bc-qboard-svg-track" viewBox="0 0 360 56" fill="none" aria-hidden="true">
                      <line x1="28" y1="22" x2="332" y2="22" stroke="rgba(255,255,255,0.14)" strokeWidth="3" strokeLinecap="round" />
                      <line x1="28" y1="22" x2="332" y2="22" stroke="url(#bcTrackGrad)" strokeWidth="3" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="bcTrackGrad" x1="28" y1="22" x2="332" y2="22" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0055FF" />
                          <stop offset="1" stopColor="#00D2FF" />
                        </linearGradient>
                      </defs>
                      <circle cx="28" cy="22" r="8" fill="#0055FF" stroke="#FFFFFF" strokeWidth="2.5" />
                      <circle cx="180" cy="22" r="8" fill="#0088FF" stroke="#FFFFFF" strokeWidth="2.5" />
                      <circle cx="332" cy="22" r="9" fill="#00D2FF" stroke="#FFFFFF" strokeWidth="2.5" />
                    </svg>
                    <div className="bc-qboard-milestones">
                      <div>
                        <strong>Day 1</strong>
                        <span>Free Chat & Quote</span>
                      </div>
                      <div>
                        <strong>Day 3</strong>
                        <span>Live Screen Demo</span>
                      </div>
                      <div>
                        <strong>Day 7</strong>
                        <span>Go Live + Training</span>
                      </div>
                    </div>
                  </div>

                  {/* Transparent Rs Breakdown */}
                  <div className="bc-qboard-rows">
                    <div className="bc-qboard-row">
                      <span>Custom System &amp; Setup</span>
                      <strong className="bc-qboard-val-cyan">Fixed Rs Quote</strong>
                    </div>
                    <div className="bc-qboard-row">
                      <span>Hidden Monthly Surprises</span>
                      <strong className="bc-qboard-val-ok">Rs 0 / mo</strong>
                    </div>
                    <div className="bc-qboard-row">
                      <span>Staff Training (Urdu / Eng)</span>
                      <strong className="bc-qboard-val-ok">Included</strong>
                    </div>
                    <div className="bc-qboard-row">
                      <span>Daily Auto-Backup</span>
                      <strong className="bc-qboard-val-ok">Included</strong>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'own' && (
                <div className="bc-qboard-panel">
                  <div className="bc-qboard-own-graphic">
                    <svg viewBox="0 0 360 150" fill="none" aria-hidden="true" className="bc-qboard-own-svg">
                      {/* Connecting Lines */}
                      <path d="M180 46 L72 104" stroke="rgba(0,210,255,0.45)" strokeWidth="2" strokeDasharray="4 4" />
                      <path d="M180 46 L180 104" stroke="rgba(0,210,255,0.65)" strokeWidth="2" />
                      <path d="M180 46 L288 104" stroke="rgba(0,210,255,0.45)" strokeWidth="2" strokeDasharray="4 4" />

                      {/* Top Node: Your Business */}
                      <rect x="105" y="10" width="150" height="38" rx="10" fill="#0055FF" stroke="#00D2FF" strokeWidth="1.5" />
                      <text x="180" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
                        YOUR BUSINESS
                      </text>

                      {/* Bottom Left: Your Data */}
                      <rect x="16" y="104" width="104" height="38" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
                      <text x="68" y="127" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif">
                        Your Database
                      </text>

                      {/* Bottom Center: Your Domain */}
                      <rect x="128" y="104" width="104" height="38" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
                      <text x="180" y="127" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif">
                        Your Domain
                      </text>

                      {/* Bottom Right: Excel Export */}
                      <rect x="240" y="104" width="104" height="38" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
                      <text x="292" y="127" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif">
                        Excel / PDF Out
                      </text>
                    </svg>
                  </div>

                  <div className="bc-qboard-rows">
                    <div className="bc-qboard-row">
                      <span>Vendor Lock-In</span>
                      <strong className="bc-qboard-val-ok">0% · Leave Anytime</strong>
                    </div>
                    <div className="bc-qboard-row">
                      <span>Works On</span>
                      <strong className="bc-qboard-val-cyan">Phone &amp; Counter PC</strong>
                    </div>
                    <div className="bc-qboard-row">
                      <span>Full Data Export</span>
                      <strong className="bc-qboard-val-ok">1-Click Download</strong>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'support' && (
                <div className="bc-qboard-panel">
                  <div className="bc-qboard-chat">
                    <div className="bc-qboard-chat-top">
                      <div className="bc-qboard-chat-who">
                        <span className="bc-qboard-avatar">BC</span>
                        <div>
                          <strong>BossCode Karachi Team</strong>
                          <span>Direct Builder Support</span>
                        </div>
                      </div>
                      <span className="bc-qboard-online">~15 min reply</span>
                    </div>

                    <div className="bc-qboard-msg-in">
                      &ldquo;Bhai, counter pe naya staff aaya hai — uska login aur discount limit set karni hai.&rdquo;
                    </div>

                    <div className="bc-qboard-msg-out">
                      <span>
                        &ldquo;Done! Naya login bana diya hai aur 1-minute Urdu voice note guide bhi bhej di hai.&rdquo;
                      </span>
                      <small>✓✓ 2 mins later</small>
                    </div>
                  </div>

                  <div className="bc-qboard-rows">
                    <div className="bc-qboard-row">
                      <span>Who Replies</span>
                      <strong className="bc-qboard-val-cyan">Real Builders (No Bots)</strong>
                    </div>
                    <div className="bc-qboard-row">
                      <span>Post-Launch Fixes</span>
                      <strong className="bc-qboard-val-ok">Covered</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
