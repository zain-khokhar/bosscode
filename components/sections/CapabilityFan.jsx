'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';

const CARDS = [
  {
    phase: 'Problem 1',
    num: '01 / 05',
    title: 'Paper Everywhere',
    desc: 'Registers piled up. Old bills get lost.',
    cta: 'Go digital →',
    href: '/solutions/shopledger',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="7"/><path d="M9 5v4l3 3"/>
      </svg>
    ),
  },
  {
    phase: 'Problem 2',
    num: '02 / 05',
    title: 'Lost in WhatsApp',
    desc: 'Orders missed inside daily chats.',
    cta: 'Track orders →',
    href: '/solutions/ordertrack',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="14" height="14" rx="3"/><path d="M6 9h6M6 12h4"/>
      </svg>
    ),
  },
  {
    phase: 'Problem 3',
    num: '03 / 05',
    title: 'Notebook Accounts',
    desc: 'Stock and udhaar guessed from memory.',
    cta: 'Fix accounts →',
    href: '/solutions/shopledger',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 8 2 9 4 10"/><polyline points="14 8 16 9 14 10"/><line x1="10" y1="4" x2="8" y2="14"/>
      </svg>
    ),
  },
  {
    phase: 'Problem 4',
    num: '04 / 05',
    title: 'Same Daily Typing',
    desc: 'Hours wasted typing bills by hand.',
    cta: 'Automate it →',
    href: '/solutions/billbot',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2l2 5h5l-4 3 1.5 5L9 12l-4.5 3L6 10 2 7h5z"/>
      </svg>
    ),
  },
  {
    phase: 'Problem 5',
    num: '05 / 05',
    title: 'Where to Start?',
    desc: 'Work is messy? We guide you free.',
    cta: 'Let\'s talk →',
    href: '/contact',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 13l4-4 3 3 5-5 4 4"/>
      </svg>
    ),
  },
];

export default function CapabilityFan() {
  const [current, setCurrent] = useState(0);
  const deckRef = useRef(null);

  const goNext = () => setCurrent((c) => (c + 1) % CARDS.length);
  const goPrev = () => setCurrent((c) => (c - 1 + CARDS.length) % CARDS.length);

  const card = CARDS[current];

  return (
    <section id="bc-fan" data-section="capabilities">
      <div className="container">
        <div id="bc-fan-header">
          <div className="section-tag">
            <span className="dot" />
            Sound Familiar?
          </div>
          <div id="bc-fan-header-bottom">
            <h2 id="bc-fan-title">Problems We<br />Fix Every Day.</h2>
            <p id="bc-fan-sub">
              Tap the card to see the next problem.
            </p>
          </div>
        </div>

        <div id="bc-fan-stage">
          {/* Single active card in 3D stack */}
          <div id="bc-fan-deck" ref={deckRef}>
            {/* Stack preview cards (decorative) */}
            {[2, 1].map((offset) => (
              <div
                key={offset}
                className="bc-fan-card"
                style={{
                  transform: `translate(${offset * 14}px, ${offset * -10}px) rotate(${offset * 3}deg)`,
                  opacity: 1 - offset * 0.3,
                  zIndex: 3 - offset,
                  pointerEvents: 'none',
                }}
              />
            ))}

            {/* Active card */}
            <div
              className="bc-fan-card"
              style={{ zIndex: 4 }}
              onClick={goNext}
            >
              <div>
                <div className="bc-fan-card-top">
                  <span className="bc-fan-card-phase">{card.phase}</span>
                  <span className="bc-fan-card-num">{card.num}</span>
                </div>
                <div className="bc-fan-card-icon-wrap">{card.icon}</div>
                <h3 className="bc-fan-card-title">{card.title}</h3>
                <p className="bc-fan-card-desc">{card.desc}</p>
              </div>
              <Link
                href={card.href}
                className="bc-fan-card-footer"
                onClick={(e) => e.stopPropagation()}
              >
                <span>{card.cta}</span>
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7h10M8 4l3 3-3 3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <button onClick={goPrev} className="btn btn-ghost btn-sm" aria-label="Previous problem">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                <path d="M10 7H4M6 4L3 7l3 3" />
              </svg>
            </button>

            <div style={{ display: 'flex', gap: '6px' }}>
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? 20 : 6,
                    height: 6,
                    borderRadius: 999,
                    background: i === current ? 'var(--navy)' : 'var(--navy-18)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'width 0.3s ease, background 0.3s ease',
                    padding: 0,
                  }}
                  aria-label={`Go to problem ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={goNext} className="btn btn-ghost btn-sm" aria-label="Next problem">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                <path d="M4 7h10M8 4l3 3-3 3" />
              </svg>
            </button>
          </div>
        </div>

        <p id="bc-fan-hint">Click card for next</p>
      </div>
    </section>
  );
}
