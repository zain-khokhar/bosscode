import PageShell from '@/components/layout/PageShell';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';

export const metadata = {
  title: 'Policies | BossCode',
  description: 'Our privacy, data ownership, terms, and payment rules in plain words.',
};

const POLICIES = [
  {
    id: 'privacy',
    icon: 'lock',
    title: 'Privacy',
    short: 'We never share or sell your contact details.',
    points: [
      { q: 'What do we collect?', a: 'Only your name, phone, and business details.' },
      { q: 'Who can see it?', a: 'Only our team. Never shared with third parties.' },
    ],
  },
  {
    id: 'data',
    icon: 'shield',
    title: 'Your Data',
    short: '100% of your business records belong to you.',
    points: [
      { q: 'Who owns my records?', a: 'You do — every bill, file, and customer list is yours.' },
      { q: 'Can I export a copy?', a: 'Yes, download your full data anytime.' },
    ],
  },
  {
    id: 'terms',
    icon: 'file',
    title: 'Terms of Work',
    short: 'Fixed price and timeline agreed in writing.',
    points: [
      { q: 'What is agreed upfront?', a: 'Exact features, delivery timeline, and fixed cost.' },
      { q: 'What about small changes?', a: 'Small tweaks during setup are included free.' },
    ],
  },
  {
    id: 'payments',
    icon: 'wallet',
    title: 'Payments & Refunds',
    short: 'Milestone payments. Zero hidden charges.',
    points: [
      { q: 'How do payments work?', a: 'In 3 parts: start, preview approval, and launch.' },
      { q: 'What if something is off?', a: 'We fix it at no extra cost until it matches.' },
    ],
  },
  {
    id: 'support',
    icon: 'phone',
    title: 'Support',
    short: 'Real humans in Karachi answer after launch.',
    points: [
      { q: 'How do I reach support?', a: 'WhatsApp 0319 7542768 or bosscodeofficial@gmail.com.' },
      { q: 'Is staff training included?', a: 'Yes, we train your team and stay for support.' },
    ],
  },
];

export default function PoliciesPage() {
  return (
    <PageShell>
      <section className="sp-hero sp-hero--short">
        <div className="arch-grid" aria-hidden="true" />
        <div className="container sp-hero-inner">
          <div className="section-tag"><span className="dot" />Policies</div>
          <h1 className="sp-h1">
            Simple rules.<br />
            <span className="gradient-word">Plain words.</span>
          </h1>
          <p className="sp-lead">The main promise first. Tap any question to expand.</p>
        </div>
      </section>

      <section className="sp-section sp-section--tight">
        <div className="container sp-policy-grid">
          <nav className="sp-policy-nav" aria-label="Policy sections">
            {POLICIES.map((p) => (
              <a key={p.id} href={`#${p.id}`}><Icon name={p.icon} size={16} />{p.title}</a>
            ))}
          </nav>

          <div className="sp-policy-list">
            {POLICIES.map((p) => (
              <Reveal as="section" key={p.id} className="sp-policy">
                <div id={p.id} className="sp-anchor" />
                <header>
                  <span className="sp-feat-icon"><Icon name={p.icon} size={22} /></span>
                  <div>
                    <h2>{p.title}</h2>
                    <p className="sp-policy-short">{p.short}</p>
                  </div>
                </header>
                <div className="sp-faq">
                  {p.points.map((pt) => (
                    <details key={pt.q}>
                      <summary>{pt.q}<Icon name="arrow" size={16} className="chev" /></summary>
                      <p>{pt.a}</p>
                    </details>
                  ))}
                </div>
              </Reveal>
            ))}
            <p className="sp-updated">Updated 2026 · WhatsApp 0319 7542768 · bosscodeofficial@gmail.com</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
