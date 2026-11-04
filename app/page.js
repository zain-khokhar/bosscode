'use client';
import StartOverlay from '@/components/layout/StartOverlay';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import Services from '@/components/sections/Services';
import QuantumCore from '@/components/sections/QuantumCore';
import CapabilityFan from '@/components/sections/CapabilityFan';
import Portfolio from '@/components/sections/Portfolio';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Testimonials from '@/components/sections/Testimonials';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/layout/Footer';
import { useAdaptiveScroll } from '@/lib/useAdaptiveScroll';

export default function Home() {
  useAdaptiveScroll();

  return (
    <>
      <StartOverlay />
      {/* Scroll progress indicator */}
      <div id="scroll-indicator" aria-hidden="true">
        <div id="scroll-indicator-bar" />
      </div>

      <Navbar />

      <main id="bc-main" role="main">
        <Hero />
        <StatsBar />
        <Services />
        <QuantumCore />
        <CapabilityFan />
        <Portfolio />
        <ProcessTimeline />
        <Testimonials />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
