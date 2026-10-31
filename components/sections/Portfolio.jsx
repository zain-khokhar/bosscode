'use client';
import Link from 'next/link';
import ProductMock from '@/components/ui/ProductMock';
import Icon from '@/components/ui/Icon';
import { getSolution } from '@/lib/solutions';

const PROJECTS = [
  {
    slug: 'shopledger',
    cat: 'Retail & Stores',
    client: 'ShopLedger',
    title: 'Registers Replaced With 1-Tap Billing & Stock',
    desc: 'Sales, low-stock warnings, and customer udhaar on one clean screen.',
    metric: 'Every bill & balance found in 2 seconds',
    tags: ['3-Tap Billing', 'Live Stock', 'Udhaar Tracker'],
  },
  {
    slug: 'clinicflow',
    cat: 'Clinics & Labs',
    client: 'ClinicFlow',
    title: 'Patient Queue, History & Auto WhatsApp Alerts',
    desc: 'Moved diary bookings and paper files into one screen with auto reminders.',
    metric: 'Fewer missed patient appointments',
    tags: ['Token Queue', 'Patient Files', 'WhatsApp Reminders'],
  },
  {
    slug: 'billbot',
    cat: 'Wholesalers & B2B',
    client: 'BillBot',
    title: 'Invoices, Payment Nudges & Reports on Autopilot',
    desc: 'Automated repeat bills, polite WhatsApp follow-ups, and morning summaries.',
    metric: '2+ hours of daily typing saved',
    tags: ['Auto Invoices', 'Dues Board', 'Morning Brief'],
  },
];

export default function Portfolio() {
  return (
    <section id="bc-portfolio" data-section="work">
      <div className="container">
        <div id="bc-portfolio-header">
          <div>
            <div className="section-tag">
              <span className="dot" />
              Ready-to-Use Systems
            </div>
            <h2 id="bc-portfolio-title">
              Real Problems.<br />Visual Fixes.
            </h2>
          </div>
          <p id="bc-portfolio-sub">
            See how our tools replace registers and manual typing. Tap any system to try it.
          </p>
        </div>

        <div id="bc-portfolio-list">
          {PROJECTS.map((p) => {
            const sol = getSolution(p.slug);
            return (
              <article className="bc-project-card" key={p.slug}>
                {/* Left Info */}
                <div className="bc-project-info">
                  <div>
                    <div className="bc-project-meta">
                      <span className="bc-project-cat">{p.cat}</span>
                      <span className="bc-project-client">{p.client}</span>
                    </div>
                    <h3 className="bc-project-title">{p.title}</h3>
                    <p className="bc-project-desc">{p.desc}</p>
                    <div className="bc-project-metric">
                      <Icon name="check" size={14} />
                      {p.metric}
                    </div>
                  </div>
                  <div className="bc-project-bottom">
                    <div className="bc-project-tags">
                      {p.tags.map((t) => (
                        <span className="bc-tag" key={t}>{t}</span>
                      ))}
                    </div>
                    <Link href={`/solutions/${p.slug}`} className="bc-project-cta">
                      See {p.client}
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 2h10v10M12 2L2 12" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right Live Interactive UI Preview */}
                <Link
                  href={`/solutions/${p.slug}`}
                  className="bc-project-visual"
                  aria-label={`Preview ${p.client}`}
                >
                  <div className="bc-project-visual-inner">
                    <div className="bc-project-visual-top">
                      <span className="bc-project-live-tag">● LIVE PREVIEW · {p.client}</span>
                      <span className="bc-project-visual-link">
                        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 2h10v10M12 2L2 12" />
                        </svg>
                      </span>
                    </div>

                    {sol && (
                      <div className="bc-project-mock-wrap">
                        <ProductMock solution={sol} compact />
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/solutions" className="btn btn-primary">
            See All 5 Solutions
            <svg className="btn-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9h10M10 5l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
