import PageShell from '@/components/layout/PageShell';
import SolutionsExplorer from '@/components/sections/SolutionsExplorer';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

export const metadata = {
  title: 'Solutions | BossCode',
  description:
    'Simple software for Pakistani businesses: accounts & stock, appointments, billing, orders and WhatsApp automation. Pick your problem and see how it works.',
};

export default function SolutionsPage() {
  return (
    <PageShell>
      <section className="sp-hero">
        <div className="arch-grid" aria-hidden="true" />
        <div className="container sp-hero-inner">
          <div className="section-tag"><span className="dot" />Our Solutions</div>
          <h1 className="sp-h1">
            Pick your problem.<br />
            <span className="gradient-word">See the fix.</span>
          </h1>
          <p className="sp-lead">Ready-to-use software for everyday business work. Tap one to see it in action.</p>
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
              <h2>Don&apos;t see your exact work?</h2>
              <p>We also build custom tools around the way you already work.</p>
            </div>
            <Link href="/contact" className="btn btn-white">
              Tell us about it <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
