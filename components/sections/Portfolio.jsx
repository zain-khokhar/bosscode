'use client';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const CONCEPTS = [
  {
    cat: 'Concept 01 · Retail & Stores',
    client: 'How it looks if we build it',
    title: 'Shop Counter, Stock & Udhaar System',
    desc: 'If we build your shop system, your daily sales, stock alerts, and customer udhaar will sit on one simple screen.',
    metric: 'Outcome: Any bill or udhaar found in 2 seconds',
    tags: ['3-Tap Bill', 'Stock Alerts', 'Udhaar Khata'],
    href: '/solutions/shopledger',
    preview: {
      badge: 'CONCEPT PREVIEW · SHOP SYSTEM',
      kind: 'shop',
      kpis: [
        { l: 'Today\'s Sales', v: 'Rs 84,500' },
        { l: 'Total Udhaar', v: 'Rs 1.4L' },
      ],
      bill: {
        title: 'Bill #1042 · Ali Traders',
        sub: '2× Oil 5L + 1× Rice 25kg',
        amt: 'Rs 12,200',
        status: 'WhatsApp Slip Sent ✓',
      },
      meter: {
        label: 'Cooking Oil 5L Stock',
        note: 'Only 3 cartons left · Low alert',
        pct: 18,
      },
    },
  },
  {
    cat: 'Concept 02 · Clinics & Labs',
    client: 'How it looks if we build it',
    title: 'Patient Token Queue & Digital Files',
    desc: 'If we build your clinic system, reception and doctors will see live tokens, past prescriptions, and auto WhatsApp reminders.',
    metric: 'Outcome: Zero lost files & fewer missed visits',
    tags: ['Live Token Board', 'Patient History', 'Auto Reminders'],
    href: '/solutions/clinicflow',
    preview: {
      badge: 'CONCEPT PREVIEW · CLINIC DESK',
      kind: 'clinic',
      tokens: [
        { num: '#13', label: 'Done', state: 'done' },
        { num: '#14', label: 'In Cabin', state: 'active' },
        { num: '#15', label: 'Waiting', state: 'todo' },
      ],
      patient: {
        name: 'Token #14 · Ayesha Khan',
        sub: '3rd Visit · Last Rx & Blood Report attached',
        tag: 'In Cabin',
      },
      reminder: '✓ Auto WhatsApp alert sent to Token #15 (5:30 PM)',
    },
  },
  {
    cat: 'Concept 03 · Wholesalers & Workshops',
    client: 'How it looks if we build it',
    title: 'Auto Invoices, Order Stages & WhatsApp',
    desc: 'If we build your automation, repeat party bills, workshop order stages, and polite payment nudges will run on schedule.',
    metric: 'Outcome: 2+ hours of manual typing saved daily',
    tags: ['Auto Invoices', 'Order Pipeline', 'WhatsApp Nudges'],
    href: '/solutions/billbot',
    preview: {
      badge: 'CONCEPT PREVIEW · AUTOPILOT',
      kind: 'autopilot',
      stages: [
        { name: 'Booked', state: 'done' },
        { name: 'In Work', state: 'active' },
        { name: 'Ready', state: 'todo' },
      ],
      invoice: {
        party: 'Invoice #089 · Rehman Mart',
        sub: '45 Wholesale Cartons · Auto-generated',
        amt: 'Rs 70,000',
      },
      chat: '"Assalam o Alaikum, Invoice #089 (Rs 70,000) PDF attached hai."',
    },
  },
];

function ConceptVisual({ p }) {
  const { preview } = p;

  return (
    <div className="bc-concept-window">
      <div className="bc-concept-topbar">
        <span className="bc-concept-pill">
          <i /> {preview.badge}
        </span>
        <span className="bc-concept-tag">Example UI</span>
      </div>

      {preview.kind === 'shop' && (
        <div className="bc-concept-body">
          <div className="bc-concept-kpis">
            {preview.kpis.map((k) => (
              <div key={k.l} className="bc-concept-kpi">
                <span>{k.l}</span>
                <strong>{k.v}</strong>
              </div>
            ))}
          </div>

          <div className="bc-concept-card">
            <div className="bc-concept-card-row">
              <div>
                <strong>{preview.bill.title}</strong>
                <small>{preview.bill.sub}</small>
              </div>
              <b className="bc-concept-amt">{preview.bill.amt}</b>
            </div>
            <div className="bc-concept-foot-ok">{preview.bill.status}</div>
          </div>

          <div className="bc-concept-meter">
            <div className="bc-concept-meter-top">
              <strong>{preview.meter.label}</strong>
              <span>{preview.meter.note}</span>
            </div>
            <div className="bc-concept-meter-track">
              <div style={{ width: `${preview.meter.pct}%` }} />
            </div>
          </div>
        </div>
      )}

      {preview.kind === 'clinic' && (
        <div className="bc-concept-body">
          <div className="bc-concept-steps">
            {preview.tokens.map((t) => (
              <div key={t.num} className={`bc-concept-step is-${t.state}`}>
                <b>{t.num}</b>
                <span>{t.label}</span>
              </div>
            ))}
          </div>

          <div className="bc-concept-card">
            <div className="bc-concept-card-row">
              <div>
                <strong>{preview.patient.name}</strong>
                <small>{preview.patient.sub}</small>
              </div>
              <span className="bc-concept-status">{preview.patient.tag}</span>
            </div>
          </div>

          <div className="bc-concept-note">{preview.reminder}</div>
        </div>
      )}

      {preview.kind === 'autopilot' && (
        <div className="bc-concept-body">
          <div className="bc-concept-steps">
            {preview.stages.map((s, idx) => (
              <div key={s.name} className={`bc-concept-step is-${s.state}`}>
                <b>0{idx + 1}</b>
                <span>{s.name}</span>
              </div>
            ))}
          </div>

          <div className="bc-concept-card">
            <div className="bc-concept-card-row">
              <div>
                <strong>{preview.invoice.party}</strong>
                <small>{preview.invoice.sub}</small>
              </div>
              <b className="bc-concept-amt">{preview.invoice.amt}</b>
            </div>
          </div>

          <div className="bc-concept-chat">
            <span>Auto WhatsApp Message</span>
            <p>{preview.chat}</p>
          </div>
        </div>
      )}

      <div className="bc-concept-bottombar">
        <span>How it will look when we build it</span>
        <Link href={p.href} className="bc-concept-open">
          Interactive preview <Icon name="arrow" size={13} />
        </Link>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="bc-portfolio" data-section="work">
      <div id="work" style={{ position: 'relative', top: '-90px' }} aria-hidden="true" />
      <div className="container">
        <div id="bc-portfolio-header">
          <div>
            <div className="section-tag">
              <span className="dot" />
              Concept Previews · What We Can Build
            </div>
            <h2 id="bc-portfolio-title">
              How Your System<br />Will Look.
            </h2>
          </div>
          <p id="bc-portfolio-sub">
            We haven&apos;t added past client work yet — these concept designs show how your software will look if we build it for you.
          </p>
        </div>

        <div id="bc-portfolio-list">
          {CONCEPTS.map((p, i) => (
            <article className="bc-project-card" key={i}>
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
                  <Link href={p.href} className="bc-project-cta">
                    Explore concept preview
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 2h10v10M12 2L2 12" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Bespoke Concept Preview */}
              <div className="bc-project-visual">
                <div
                  className="bc-project-visual-inner"
                  style={{
                    background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-surface) 100%)',
                  }}
                >
                  <ConceptVisual p={p} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <Link href="/solutions" className="btn btn-primary">
            See All 5 Concept Previews
            <svg className="btn-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9h10M10 5l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
