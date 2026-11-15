import PageShell from '@/components/layout/PageShell';
import '@/app/site-pages.css';
import '@/components/about/about.css';
import AboutHero3D from '@/components/about/AboutHero3D';
import AboutBentoValues from '@/components/about/AboutBentoValues';
import AboutScrollProcess from '@/components/about/AboutScrollProcess';
import AboutProofAndCta from '@/components/about/AboutProofAndCta';

export const metadata = {
  title: 'About Us | BossCode',
  description:
    'BossCode is a Karachi team helping Pakistani businesses move from paper registers to simple digital software.',
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero3D />
      <AboutBentoValues />
      <AboutScrollProcess />
      <AboutProofAndCta />
    </PageShell>
  );
}
