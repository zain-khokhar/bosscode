import PageShell from '@/components/layout/PageShell';
import ContactForm from '@/components/sections/ContactForm';
import Icon from '@/components/ui/Icon';

export const metadata = {
  title: 'Contact Us | BossCode',
  description: 'Start your free first chat with BossCode on WhatsApp or email. We reply within 24 hours.',
};

const WA_LINK =
  'https://wa.me/923197542768?text=Assalam%20o%20Alaikum%20BossCode%2C%20mujhe%20apne%20business%20software%20k%20mutalliq%20baat%20karni%20hai.';

const NEXT = [
  { title: 'Pick your problem', text: 'Takes 30 seconds.' },
  { title: 'Reply in 24 hours', text: 'On WhatsApp or call.' },
  { title: 'Free honest advice', text: 'Clear price & plan.' },
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
          <p className="sp-lead">Tell us how you work today. No pressure, no hidden costs.</p>
        </div>
      </section>

      <section className="sp-section sp-section--tight">
        <div className="container sp-contact-grid">
          <div className="sp-card sp-card--form">
            <ContactForm initial={initial} />
          </div>

          <aside className="sp-contact-side">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-contact-card"
            >
              <span className="sp-feat-icon"><Icon name="message" size={20} /></span>
              <div><small>WhatsApp (Fastest)</small><strong>0319 7542768</strong></div>
            </a>
            <a href="mailto:bosscodeofficial@gmail.com" className="sp-contact-card">
              <span className="sp-feat-icon"><Icon name="mail" size={20} /></span>
              <div><small>Email</small><strong>bosscodeofficial@gmail.com</strong></div>
            </a>
            <div className="sp-contact-card">
              <span className="sp-feat-icon"><Icon name="pin" size={20} /></span>
              <div><small>Based in</small><strong>Karachi, Pakistan</strong></div>
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
