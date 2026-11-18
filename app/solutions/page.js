import PageShell from '@/components/layout/PageShell';
import SoftwareShowcase from '@/components/sections/SoftwareShowcase';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

export const metadata = {
  title: 'Software & Solutions | BossCode',
  description:
    'Ready-to-use offline & online secure desktop software by BossCode: Boutique Rental Management, School Management, and Retail Management Systems.',
};

export default function SolutionsPage() {
  return (
    <PageShell>
      <section className="sp-hero sp-hero--short">
        <div className="arch-grid" aria-hidden="true" />
        <div className="container sp-hero-inner">
          <div className="section-tag">
            <span className="dot" />
            Ready Desktop Software
          </div>
          <h1 className="sp-h1">
            Built, Secure &amp;<br />
            <span className="gradient-word">Ready to Run.</span>
          </h1>
          <p className="sp-lead">
            Offline &amp; online secure desktop software — scroll down to explore each system full-screen.
          </p>

          <div className="sw-hero-jumps">
            <a href="#boutique-rental" className="sw-jump-pill">
              <span>01</span> Boutique Rental System
            </a>
            <a href="#school-management" className="sw-jump-pill">
              <span>02</span> School Management System
            </a>
            <a href="#retail-management" className="sw-jump-pill">
              <span>03</span> Retail Management System
            </a>
          </div>
        </div>
      </section>

      <SoftwareShowcase />

      <section className="sp-section sp-section--tight">
        <div className="container">
          <Reveal className="sp-banner">
            <div className="sp-banner-icon"><Icon name="sparkles" size={26} /></div>
            <div className="sp-banner-text">
              <h2>Need a custom desktop or web system?</h2>
              <p>Tell us how your business works today. First chat is free.</p>
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
