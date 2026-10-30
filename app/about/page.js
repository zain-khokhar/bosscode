import PageShell from '@/components/layout/PageShell';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | BossCode',
  description:
    'BossCode is a Karachi-based team helping Pakistani businesses move from paper to digital — simply, honestly and with support after launch.',
};

const BELIEFS = [
  { icon: 'heart', title: 'Simple first', text: 'If your staff cannot use it in a day, we built it wrong.' },
  { icon: 'shield', title: 'Honest always', text: 'If you do not need us, we will tell you.' },
  { icon: 'lock', title: 'Your data is yours', text: 'You own your records. Always.' },
  { icon: 'phone', title: 'We stay after launch', text: 'A real person answers when you need help.' },
];

const STEPS = [
  { n: '01', title: 'Free chat', text: 'You tell us how you work today.' },
  { n: '02', title: 'Honest advice', text: 'We say what can go digital and what cannot.' },
  { n: '03', title: 'We build & set up', text: 'Together with you and your team.' },
  { n: '04', title: 'We stay with you', text: 'Support and small changes after launch.' },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="sp-hero">
        <div className="arch-grid" aria-hidden="true" />
        <div className="container sp-hero-inner">
          <div className="section-tag"><span className="dot" />About BossCode</div>
          <h1 className="sp-h1">
            Software that feels<br />
            <span className="gradient-word">like it was made for you.</span>
          </h1>
          <p className="sp-lead">
            We are a small team in Karachi, started in 2026, with one job: help Pakistani businesses leave registers and notebooks behind.
          </p>
        </div>
      </section>

      <section className="sp-section sp-section--tight">
        <div className="container">
          <Reveal className="sp-journey">
            <div className="sp-journey-from"><Icon name="file" size={26} /><span>Paper</span></div>
            <div className="sp-journey-line" aria-hidden="true"><i /></div>
            <div className="sp-journey-to"><Icon name="mobile" size={26} /><span>Digital</span></div>
          </Reveal>
          <p className="sp-center-note">That is the whole idea. Everything we build serves this one move.</p>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <Reveal><h2 className="sp-h2">What we believe</h2></Reveal>
          <div className="sp-feat-grid sp-feat-grid--4">
            {BELIEFS.map((b, n) => (
              <Reveal key={b.title} delay={n * 70} className="sp-feat">
                <span className="sp-feat-icon"><Icon name={b.icon} size={22} /></span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-dark">
        <div className="arch-grid arch-grid--dark" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal><h2 className="sp-h2 sp-h2--light">How we work with you</h2></Reveal>
          <div className="sp-steps sp-steps--4">
            {STEPS.map((s, n) => (
              <Reveal key={s.n} delay={n * 80} className="sp-step">
                <span className="sp-step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-section--tight">
        <div className="container">
          <Reveal className="sp-banner">
            <div className="sp-banner-icon"><Icon name="message" size={26} /></div>
            <div className="sp-banner-text">
              <h2>Let&apos;s talk about your business.</h2>
              <p>Free first chat. No pressure, no hidden costs.</p>
            </div>
            <Link href="/contact" className="btn btn-white">Contact us <Icon name="arrow" size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
