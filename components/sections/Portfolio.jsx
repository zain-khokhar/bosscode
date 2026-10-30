'use client';

const PROJECTS = [
  {
    cat: 'Online Store',
    client: 'Example: Clothing brand',
    title: 'From Instagram DMs to a Real Online Store',
    desc: 'Orders pile up in DMs and some get missed. We build an online store where customers order and pay on their own, and you see everything in one place.',
    metric: 'All orders in one place',
    tags: ['Store', 'JazzCash', 'Easypaisa', 'Delivery'],
    visual: { name: 'Clothing Brand', year: 'EXAMPLE', accent: '#00d2ff' },
  },
  {
    cat: 'Booking System',
    client: 'Example: Clinic',
    title: 'Online Appointments Instead of Phone Calls',
    desc: 'Appointments are taken by phone and some get forgotten. We add online booking and WhatsApp reminders so patients show up and your time is saved.',
    metric: 'Fewer missed appointments',
    tags: ['Booking', 'WhatsApp', 'Reminders', 'Website'],
    visual: { name: 'Clinic', year: 'EXAMPLE', accent: '#0055ff' },
  },
  {
    cat: 'Management System',
    client: 'Example: Wholesaler',
    title: 'From a Notebook to a Dashboard',
    desc: 'Stock and dues are written in a notebook. We build a simple dashboard where stock, sales and pending payments show up on one screen.',
    metric: 'Everything on one screen',
    tags: ['Stock', 'Dues', 'Reports', 'Staff'],
    visual: { name: 'Wholesaler', year: 'EXAMPLE', accent: '#00d2ff' },
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
              How We Help
            </div>
            <h2 id="bc-portfolio-title">
              Real Problems,<br />Simple Fixes.
            </h2>
          </div>
          <p id="bc-portfolio-sub">
            These examples show the kind of problems we solve. Real client work will be added here soon.
          </p>
        </div>

        <div id="bc-portfolio-list">
          {PROJECTS.map((p, i) => (
            <article className="bc-project-card" key={i}>
              {/* Info */}
              <div className="bc-project-info">
                <div>
                  <div className="bc-project-meta">
                    <span className="bc-project-cat">{p.cat}</span>
                    <span className="bc-project-client">{p.client}</span>
                  </div>
                  <h3 className="bc-project-title">{p.title}</h3>
                  <p className="bc-project-desc">{p.desc}</p>
                  <div className="bc-project-metric">
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 10l3-4 3 2 3-4 3 2" />
                    </svg>
                    {p.metric}
                  </div>
                </div>
                <div className="bc-project-bottom">
                  <div className="bc-project-tags">
                    {p.tags.map((t) => (
                      <span className="bc-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <a href="#contact" className="bc-project-cta">
                    Talk to us about this
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 2h10v10M12 2L2 12" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Visual */}
              <div className="bc-project-visual">
                <div className="bc-project-visual-inner" style={{
                  background: `linear-gradient(135deg, var(--navy) 0%, var(--navy-surface) 100%)`,
                }}>
                  {/* Glow blobs */}
                  <div style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-60px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: `${p.visual.accent}22`,
                    filter: 'blur(48px)',
                    pointerEvents: 'none',
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '-40px',
                    left: '-40px',
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    background: 'rgba(0,85,255,0.18)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                  }} />

                  <div className="bc-project-visual-top" style={{ position: 'relative', zIndex: 2 }}>
                    <span className="bc-project-live-tag">● {p.visual.year}</span>
                    <a href="#" className="bc-project-visual-link" aria-label="View project">
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 2h10v10M12 2L2 12" />
                      </svg>
                    </a>
                  </div>

                  {/* Center logo mark */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '22px',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 900,
                      fontSize: '22px',
                      color: 'var(--white)',
                      letterSpacing: '-0.04em',
                    }}>
                      {p.visual.name.charAt(0)}
                    </span>
                  </div>

                  <div className="bc-project-visual-bottom" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="bc-project-visual-name">{p.visual.name}</div>
                    <div className="bc-project-visual-sla">How it works</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <a href="#contact" className="btn btn-primary">
            Tell Us Your Problem
            <svg className="btn-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9h10M10 5l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
