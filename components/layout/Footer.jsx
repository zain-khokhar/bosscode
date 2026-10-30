'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

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
      { label: 'All solutions', href: '/solutions' },
    ],
  },
  {
    heading: 'Contact',
    type: 'offices',
    offices: [
      { city: 'Karachi, PK', coords: 'Our base' },
      { city: 'Email', coords: 'hello@bosscode.agency' },
    ],
  },
];

export default function Footer() {
  const clockRef = useRef(null);

  useEffect(() => {
    let id;
    const tick = () => {
      if (clockRef.current) {
        const now = new Date();
        clockRef.current.textContent = now.toUTCString().split(' ').slice(-2).join(' ');
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  function scrollTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer id="bc-footer" role="contentinfo">
      <div className="arch-grid arch-grid--dark" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Newsletter strip */}
        <div id="bc-footer-newsletter">
          <div id="bc-newsletter-heading">
            <div id="bc-newsletter-eyebrow">Newsletter</div>
            <div id="bc-newsletter-title">
              Business tips, once a month.
            </div>
          </div>
          <form id="bc-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              id="bc-newsletter-input"
              type="email"
              placeholder="you@company.com"
              aria-label="Email address"
            />
            <button id="bc-newsletter-submit" type="submit">Subscribe</button>
          </form>
        </div>

        {/* Main grid */}
        <div id="bc-footer-grid">
          {/* Brand column */}
          <div>
            <a id="bc-footer-brand-logo" href="/">
              <div id="bc-footer-logo-mark">BC</div>
              <div id="bc-footer-logo-name">Boss<span>Code</span></div>
            </a>
            <p className="bc-footer-tagline">
              Helping businesses move from paper to digital.
            </p>
            <div className="bc-footer-live-clock">
              <span className="bc-footer-clock-dot" />
              <span ref={clockRef} style={{ fontVariantNumeric: 'tabular-nums' }}>UTC</span>
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
                    <div className="bc-footer-node-coords">{o.coords}</div>
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
            © 2026 BossCode · Made in Pakistan, for Pakistani businesses
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
