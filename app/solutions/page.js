import PageShell from '@/components/layout/PageShell';
import SolutionsExplorer from '@/components/sections/SolutionsExplorer';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

export const metadata = {
  title: 'Concept Previews | BossCode',
  description:
    'Concept previews showing how your business software will look when BossCode custom-builds it for you: accounts & stock, clinic queue, auto billing, orders, and WhatsApp automation.',
};

export default function SolutionsPage() {
  return (
    <PageShell>
      <section className="sp-hero sp-hero--short">
        <div className="arch-grid" aria-hidden="true" />
        <div className="container sp-hero-inner">
          <div className="section-tag">
            <span className="dot" />
            Concept Previews · What We Can Build
          </div>
          <h1 className="sp-h1">
            How Your System<br />
            <span className="gradient-word">Will Look.</span>
          </h1>
          <p className="sp-lead">
            These are concept designs showing how your software will look if we build it for your business.
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
              <h2>Want us to build a system for your work?</h2>
              <p>Tell us how you work today. We design and build it around your exact routine.</p>
            </div>
            <Link href="/contact?solution=custom" className="btn btn-white">
              Start Free Chat <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
