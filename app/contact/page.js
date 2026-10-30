import PageShell from '@/components/layout/PageShell';
import ContactForm from '@/components/sections/ContactForm';
import Icon from '@/components/ui/Icon';

export const metadata = {
  title: 'Contact Us | BossCode',
  description: 'Book your free first chat with BossCode. Tell us how you work today — we reply within 24 hours.',
};

const NEXT = [
  { icon: 'send', title: 'You send a message', text: 'Takes one minute.' },
  { icon: 'clock', title: 'We reply in 24 hours', text: 'On WhatsApp or email.' },
  { icon: 'message', title: 'Free chat', text: 'We listen and give honest advice.' },
];

export default async function ContactPage({ searchParams }) {
  const sp = await searchParams;
  const initial = typeof sp?.solution === 'string' ? sp.solution : '';

  return (
    <PageShell>
      <section className="sp-hero sp-hero--short">
        <div className="arch-grid" aria-hidden="true" />
        <div className="container sp-hero-inner">
          <div className="section-tag"><span className="dot" />Contact</div>
          <h1 className="sp-h1">
            Let&apos;s have a<br />
            <span className="gradient-word">free chat.</span>
          </h1>
        </div>
      </section>

      <section className="sp-section sp-section--tight">
        <div className="container sp-contact-grid">
          <div className="sp-card sp-card--form">
            <ContactForm initial={initial} />
          </div>

          <aside className="sp-contact-side">
            <a href="mailto:hello@bosscode.agency" className="sp-contact-card">
              <span className="sp-feat-icon"><Icon name="mail" size={20} /></span>
              <div><small>Email</small><strong>hello@bosscode.agency</strong></div>
            </a>
            <div className="sp-contact-card">
              <span className="sp-feat-icon"><Icon name="pin" size={20} /></span>
              <div><small>Based in</small><strong>Karachi, Pakistan</strong></div>
            </div>
            <div className="sp-contact-card">
              <span className="sp-feat-icon"><Icon name="clock" size={20} /></span>
              <div><small>Reply time</small><strong>Within 24 hours</strong></div>
            </div>

            <div className="sp-next">
              <h2>What happens next</h2>
              <ol>
                {NEXT.map((n, i) => (
                  <li key={n.title}>
                    <span>{i + 1}</span>
                    <div><strong>{n.title}</strong><small>{n.text}</small></div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
