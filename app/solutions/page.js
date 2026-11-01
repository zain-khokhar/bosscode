import PageShell from '@/components/layout/PageShell';
import SolutionsExplorer from '@/components/sections/SolutionsExplorer';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

export const metadata = {
  title: 'Solutions | BossCode',
  description:
    'Examples of what BossCode can build for your business: accounts & stock, clinic bookings, auto billing, orders, and WhatsApp automation.',
};

export default function SolutionsPage() {
  return (
    <PageShell>
      <section className="sp-hero sp-hero--short">
        <div className="arch-grid" aria-hidden="true" />
        <div className="container sp-hero-inner">
          <div className="section-tag">
            <span className="dot" />
            How We Help
          </div>
          <h1 className="sp-h1">
            Real Problems.<br />
            <span className="gradient-word">Simple Fixes.</span>
          </h1>
          <p className="sp-lead">
            Examples of systems we can build around your business.
          </p>
        </div>
      </section>

      <section className="sp-section sp-section--tight">
        <div className="container">
          <SolutionsExplorer />
        </div>
      </section>

      <section className="sp-section sp-section--tight">
        <div className="container">
          <Reveal className="sp-banner">
            <div className="sp-banner-icon"><Icon name="sparkles" size={26} /></div>
            <div className="sp-banner-text">
              <h2>Need something built for your work?</h2>
              <p>Tell us how you work today. First chat is free.</p>
            </div>
            <Link href="/contact?solution=custom" className="btn btn-white">
              Tell Us Your Problem <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
