import PageShell from '@/components/layout/PageShell';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';

export const metadata = {
  title: 'Policies | BossCode',
  description: 'Our privacy, data ownership, terms, and payment rules in plain, simple words.',
};

const POLICIES = [
  {
    id: 'privacy',
    icon: 'lock',
    title: 'Privacy',
    short: 'We only collect what is needed and never sell your details.',
    points: [
      { q: 'What do we collect?', a: 'Only your name, phone, and business details so we can set up your system.' },
      { q: 'Who can see it?', a: 'Only our team. We never share or sell your contact info to anyone.' },
      { q: 'Can I delete my info?', a: 'Yes. Message us anytime and we will remove your details immediately.' },
    ],
  },
  {
    id: 'data',
    icon: 'shield',
    title: 'Your Data',
    short: '100% of your business records belong to you. Always.',
    points: [
      { q: 'Who owns my sales & customer records?', a: 'You do — every bill, patient file, stock count, and customer list is yours.' },
      { q: 'Can I export a copy anytime?', a: 'Yes. You can download your full business records whenever you want.' },
      { q: 'How is it kept safe?', a: 'Protected with staff-only logins and automatic cloud backups.' },
    ],
  },
  {
    id: 'terms',
    icon: 'file',
    title: 'Terms of Work',
    short: 'Clear scope, fixed price, and timeline agreed in writing.',
    points: [
      { q: 'What do we agree before starting?', a: 'Exact features, delivery timeline, and fixed cost — written down clearly.' },
      { q: 'What if I want small changes?', a: 'Small tweaks during setup are included. Bigger additions are agreed upfront.' },
    ],
  },
  {
    id: 'payments',
    icon: 'wallet',
    title: 'Payments & Refunds',
    short: 'Step-by-step milestone payments. Zero hidden charges.',
    points: [
      { q: 'How do payments work?', a: 'Split into clear milestones: start, preview approval, and go-live.' },
      { q: 'What if something does not match our agreement?', a: 'We fix it promptly at no extra cost until it matches what we promised.' },
    ],
  },
  {
    id: 'support',
    icon: 'phone',
    title: 'Support',
    short: 'A real person in Karachi answers even after launch.',
    points: [
      { q: 'How do I reach support?', a: 'WhatsApp 0319 7542768 or email hello@bosscode.agency. We reply within 24 hours.' },
      { q: 'Is staff training included?', a: 'Yes. We train your team at launch and stay available when you need help.' },
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
            <p className="sp-updated">Updated 2026 · WhatsApp 0319 7542768 · hello@bosscode.agency</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
