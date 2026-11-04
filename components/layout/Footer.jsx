'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const WA_LINK =
  'https://wa.me/923197542768?text=Assalam%20o%20Alaikum%20BossCode%2C%20mujhe%20apne%20business%20software%20k%20mutalliq%20baat%20karni%20hai.';

const NAV_LINKS = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Policies', href: '/policies' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'ShopLedger', href: '/solutions/shopledger' },
      { label: 'ClinicFlow', href: '/solutions/clinicflow' },
      { label: 'BillBot', href: '/solutions/billbot' },
      { label: 'OrderTrack', href: '/solutions/ordertrack' },
      { label: 'ChatPilot', href: '/solutions/chatpilot' },
    ],
  },
  {
    heading: 'Direct Contact',
    type: 'offices',
    offices: [
      { city: 'Karachi, Pakistan', coords: 'Local team · PKT (GMT+5)' },
      { city: 'WhatsApp', coords: '0319 7542768', href: WA_LINK },
      { city: 'Email', coords: 'bosscodeofficial@gmail.com', href: 'mailto:bosscodeofficial@gmail.com' },
    ],
  },
];

export default function Footer() {
  const clockRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      if (clockRef.current) {
        try {
          const timeStr = new Intl.DateTimeFormat('en-PK', {
            timeZone: 'Asia/Karachi',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          }).format(new Date());
          clockRef.current.textContent = `Karachi · ${timeStr} PKT`;
        } catch {
          clockRef.current.textContent = 'Karachi · PKT';
        }
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  function scrollTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer id="bc-footer" role="contentinfo">
      <div className="arch-grid arch-grid--dark" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Action strip (Replaces dead newsletter form with 1-tap WhatsApp / Free Chat) */}
        <div id="bc-footer-newsletter">
          <div id="bc-newsletter-heading">
            <div id="bc-newsletter-eyebrow">Free First Chat</div>
            <div id="bc-newsletter-title">
              Ready to leave paper registers behind?
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              Chat on WhatsApp
            </a>
            <Link href="/contact" className="btn btn-ghost-white">
              Pick Your Solution
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div id="bc-footer-grid">
          {/* Brand column */}
          <div>
            <Link id="bc-footer-brand-logo" href="/">
              <div id="bc-footer-logo-mark">BC</div>
              <div id="bc-footer-logo-name">Boss<span>Code</span></div>
            </Link>
            <p className="bc-footer-tagline">
              Simple software for Pakistani businesses. From paper to digital.
            </p>
            <div className="bc-footer-live-clock">
              <span className="bc-footer-clock-dot" />
              <span ref={clockRef} style={{ fontVariantNumeric: 'tabular-nums' }}>Karachi · PKT</span>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_LINKS.map((col) =>
            col.type === 'offices' ? (
              <div key={col.heading}>
                <div className="bc-footer-col-heading">{col.heading}</div>
                {col.offices.map((o) => (
                  <div className="bc-footer-node" key={o.city}>
                    <div className="bc-footer-node-city">{o.city}</div>
                    {o.href ? (
                      <a
                        href={o.href}
                        target={o.href.startsWith('http') ? '_blank' : undefined}
                        rel={o.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="bc-footer-node-coords"
                        style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}
                      >
                        {o.coords}
                      </a>
                    ) : (
                      <div className="bc-footer-node-coords">{o.coords}</div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div key={col.heading}>
                <div className="bc-footer-col-heading">{col.heading}</div>
                <div className="bc-footer-links">
                  {col.links.map((l) => (
                    <Link className="bc-footer-link" href={l.href} key={l.href}>
                      {l.label}
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 2h8v8M10 2L2 10" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
        <div id="bc-footer-bottom">
          <span id="bc-footer-copyright">
            © 2026 BossCode · Built in Karachi for Pakistani businesses
          </span>
          <button id="bc-footer-scroll-top" onClick={scrollTop} aria-label="Scroll to top">
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 12V2M3 6l4-4 4 4" />
            </svg>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
