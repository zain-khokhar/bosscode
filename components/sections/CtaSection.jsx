'use client';

export default function CtaSection() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
              Let&apos;s Work Together
            </div>
            <h2 id="bc-cta-title">
              Ready to Build<br />Something Iconic?
            </h2>
            <p id="bc-cta-sub">
              Tell us your vision. We&apos;ll tell you how to execute it in 12 weeks. No fluff, no NDAs on day one — just a real conversation about your product.
            </p>
            <div id="bc-cta-actions">
              <a href="mailto:hello@bosscode.agency" className="btn btn-white">
                hello@bosscode.agency
                <svg className="btn-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9h10M10 5l4 4-4 4" />
                </svg>
              </a>
              <a href="#" className="btn btn-ghost-white">
                Book a Call
              </a>
            </div>
            <p id="bc-cta-note">No commitment required · Response within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
