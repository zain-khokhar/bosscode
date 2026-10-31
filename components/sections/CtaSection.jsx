'use client';
import Link from 'next/link';

const WA_LINK =
  'https://wa.me/923197542768?text=Assalam%20o%20Alaikum%20BossCode%2C%20mujhe%20free%20business%20check-up%20chahiye.';

export default function CtaSection() {
  return (
    <section id="bc-cta" data-section="contact">
      <div className="container">
        <div id="bc-cta-banner">
          {/* BC watermark */}
          <div id="bc-cta-watermark" aria-hidden="true">BC</div>

          {/* Corner crosses */}
          <svg className="bc-cta-cross bc-cta-cross--tl" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <line x1="8" y1="0" x2="8" y2="16" stroke="white" strokeWidth="1"/>
            <line x1="0" y1="8" x2="16" y2="8" stroke="white" strokeWidth="1"/>
          </svg>
          <svg className="bc-cta-cross bc-cta-cross--tr" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <line x1="8" y1="0" x2="8" y2="16" stroke="white" strokeWidth="1"/>
            <line x1="0" y1="8" x2="16" y2="8" stroke="white" strokeWidth="1"/>
          </svg>
          <svg className="bc-cta-cross bc-cta-cross--bl" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <line x1="8" y1="0" x2="8" y2="16" stroke="white" strokeWidth="1"/>
            <line x1="0" y1="8" x2="16" y2="8" stroke="white" strokeWidth="1"/>
          </svg>
          <svg className="bc-cta-cross bc-cta-cross--br" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <line x1="8" y1="0" x2="8" y2="16" stroke="white" strokeWidth="1"/>
            <line x1="0" y1="8" x2="16" y2="8" stroke="white" strokeWidth="1"/>
          </svg>

          <div id="bc-cta-content">
            <div className="section-tag section-tag--dark">
              <span className="dot" />
              Let&apos;s Talk
            </div>
            <h2 id="bc-cta-title">
              Ready to Move Your<br />Business Off Paper?
            </h2>
            <p id="bc-cta-sub">
              Tell us how you work today. Your first chat is 100% free, with honest advice and zero pressure.
            </p>
            <div id="bc-cta-actions">
              <Link href="/contact" className="btn btn-white">
                Get a Free Check-up
                <svg className="btn-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9h10M10 5l4 4-4 4" />
                </svg>
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-white"
              >
                Chat on WhatsApp
              </a>
            </div>
            <p id="bc-cta-note">Free · No pressure · Reply within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
