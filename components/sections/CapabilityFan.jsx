'use client';
import { useEffect, useRef, useState } from 'react';

const CARDS = [
  {
    phase: 'Problem 1',
    num: '01 / 05',
    title: 'Paper Everywhere',
    desc: 'Registers, bills and files piled up. Finding one old record takes forever, and if it gets lost, it\'s gone.',
    cta: 'Go digital →',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="7"/><path d="M9 5v4l3 3"/>
      </svg>
    ),
  },
  {
    phase: 'Problem 2',
    num: '02 / 05',
    title: 'Orders Lost in WhatsApp',
    desc: 'Orders arrive in messages and calls. Some get missed, some get forgotten, and customers get upset.',
    cta: 'Track every order →',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="14" height="14" rx="3"/><path d="M6 9h6M6 12h4"/>
      </svg>
    ),
  },
  {
    phase: 'Problem 3',
    num: '03 / 05',
    title: 'Accounts in a Notebook',
    desc: 'How much stock is left? Who owes you money? How much did you sell today? You\'re running it all from memory or a notebook.',
    cta: 'Clean up your accounts →',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 8 2 9 4 10"/><polyline points="14 8 16 9 14 10"/><line x1="10" y1="4" x2="8" y2="14"/>
      </svg>
    ),
  },
  {
    phase: 'Problem 4',
    num: '04 / 05',
    title: 'The Same Work, Every Day',
    desc: 'Typing the same bills, reports and reminders by hand, again and again. It eats your time and mistakes slip in.',
    cta: 'Automate it →',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2l2 5h5l-4 3 1.5 5L9 12l-4.5 3L6 10 2 7h5z"/>
      </svg>
    ),
  },
  {
    phase: 'Problem 5',
    num: '05 / 05',
    title: 'Not Sure Where to Start?',
    desc: 'You know your work is messy, but you don\'t know what to change first. That\'s a good place for us to start.',
    cta: 'Let\'s talk →',
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
            Does This Sound Like You?
          </div>
          <div id="bc-fan-header-bottom">
            <h2 id="bc-fan-title">Problems We<br />Hear Every Day.</h2>
            <p id="bc-fan-sub">
              If any of these sound familiar, we can help.
            </p>
          </div>
        </div>

        <div id="bc-fan-stage">
          {/* Single active card */}
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
              <div className="bc-fan-card-footer">
                <span>{card.cta}</span>
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7h10M8 4l3 3-3 3" />
                </svg>
              </div>
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

        <p id="bc-fan-hint">Click to see the next problem</p>
      </div>
    </section>
  );
}
