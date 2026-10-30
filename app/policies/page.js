import PageShell from '@/components/layout/PageShell';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';

export const metadata = {
  title: 'Policies | BossCode',
  description: 'Our privacy, data ownership, terms and payment policies — in plain, simple language.',
};

/* NOTE: Plain-language starter policies. Have them reviewed by a legal professional
   and fill in any specific terms (payment schedule, support hours) before launch. */
const POLICIES = [
  {
    id: 'privacy',
    icon: 'lock',
    title: 'Privacy',
    short: 'We only collect what we need, and we never sell it.',
    points: [
      { q: 'What do we collect?', a: 'Your name, contact details and what you tell us about your business — only to talk to you and do the work.' },
      { q: 'Who sees it?', a: 'Only our team. We do not sell or share your details with anyone for advertising.' },
      { q: 'Can I ask you to delete it?', a: 'Yes. Email hello@bosscode.agency and we will remove your details.' },
    ],
  },
  {
    id: 'data',
    icon: 'shield',
    title: 'Your Data',
    short: 'Your business records belong to you. Always.',
    points: [
      { q: 'Who owns the records?', a: 'You do. Sales, customers, patients, stock — all of it is yours.' },
      { q: 'Can I take it with me?', a: 'Yes. You can ask for a copy of your data at any time.' },
      { q: 'How do we keep it safe?', a: 'Access is limited to people you approve, and we keep backups.' },
    ],
  },
  {
    id: 'terms',
    icon: 'file',
    title: 'Terms of Work',
    short: 'Clear scope, clear price, no surprises.',
    points: [
      { q: 'What do we agree before starting?', a: 'What we will build, how long it takes and what it costs — written down and shared with you.' },
      { q: 'What if I want changes?', a: 'Small changes are easy. Bigger ones we discuss and agree first.' },
      { q: 'What do we expect from you?', a: 'Timely answers and the information needed to set things up properly.' },
    ],
  },
  {
    id: 'payments',
    icon: 'wallet',
    title: 'Payments & Refunds',
    short: 'You always know what you are paying for.',
    points: [
      { q: 'How do payments work?', a: 'We agree the payment plan in writing before work starts.' },
      { q: 'What if it is not right?', a: 'Tell us. We fix issues that do not match what we agreed.' },
      { q: 'Can I cancel?', a: 'Yes. We will settle fairly for the work already done.' },
    ],
  },
  {
    id: 'support',
    icon: 'phone',
    title: 'Support',
    short: 'A real person answers, even after launch.',
    points: [
      { q: 'How do I reach you?', a: 'Email hello@bosscode.agency. We reply within 24 hours.' },
      { q: 'Is help included after launch?', a: 'Yes. We stay available to help your team get comfortable.' },
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
          <p className="sp-lead">The short version first. Open any point for details.</p>
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
              <Reveal as="section" key={p.id} className="sp-policy" >
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
            <p className="sp-updated">Last updated: 2026 · Questions? hello@bosscode.agency</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
