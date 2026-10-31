import PageShell from '@/components/layout/PageShell';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | BossCode',
  description:
    'BossCode is a Karachi team helping Pakistani businesses move from paper registers to simple digital software.',
};

const BELIEFS = [
  { icon: 'heart', title: '1-Day Simple', text: 'Your staff learns it in a single day.' },
  { icon: 'shield', title: 'Straight Talk', text: 'Fixed price upfront. Zero tech jargon.' },
  { icon: 'lock', title: '100% Your Data', text: 'You own every record and customer list.' },
  { icon: 'phone', title: 'Post-Launch Care', text: 'Real humans in Karachi answer your call.' },
];

const STEPS = [
  { n: '01', title: 'Free Chat', text: 'Tell us how your work runs today.' },
  { n: '02', title: 'See Screens', text: 'Preview the design before we build.' },
  { n: '03', title: 'We Set Up', text: 'We load your items and old records.' },
  { n: '04', title: 'Stay Together', text: 'Staff training and ongoing support.' },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="sp-hero sp-hero--short">
        <div className="arch-grid" aria-hidden="true" />
        <div className="container sp-hero-inner">
          <div className="section-tag"><span className="dot" />About BossCode</div>
          <h1 className="sp-h1">
            Software built<br />
            <span className="gradient-word">around your work.</span>
          </h1>
          <p className="sp-lead">
            A Karachi team with one job: help Pakistani businesses replace paper registers with simple screens.
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
          <p className="sp-center-note">One move: from messy registers to one clean screen.</p>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <Reveal><h2 className="sp-h2">What we stand for</h2></Reveal>
          <div className="sp-feat-grid sp-feat-grid--4">
            {BELIEFS.map((b, n) => (
              <Reveal key={b.title} delay={n * 60} className="sp-feat">
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
              <Reveal key={s.n} delay={n * 70} className="sp-step">
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
              <p>Free first chat. Honest advice, no hidden costs.</p>
            </div>
            <Link href="/contact" className="btn btn-white">Start Free Chat <Icon name="arrow" size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
