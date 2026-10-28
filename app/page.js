'use client';
import { useEffect } from 'react';
import StartOverlay from '@/components/layout/StartOverlay';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import Services from '@/components/sections/Services';
import QuantumCore from '@/components/sections/QuantumCore';
import CapabilityFan from '@/components/sections/CapabilityFan';
import Portfolio from '@/components/sections/Portfolio';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import TechMarquee from '@/components/sections/TechMarquee';
import Testimonials from '@/components/sections/Testimonials';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  /* Smooth scroll + scroll indicator */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lenisInstance = null;
    let rafId = null;

    // Dynamically import Lenis only on client
    import('lenis').then((mod) => {
      const Lenis = mod.default;
      lenisInstance = new Lenis({ lerp: 0.1, smoothWheel: true });

      function raf(time) {
        lenisInstance.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }).catch(() => {
      // native scroll fallback
    });

    /* Scroll progress indicator */
    const indicator = document.getElementById('scroll-indicator');
    const bar = document.getElementById('scroll-indicator-bar');

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      if (indicator) indicator.style.opacity = '1';
      if (bar && indicator) {
        const maxTravel = indicator.clientHeight - bar.clientHeight;
        bar.style.top = `${progress * maxTravel}px`;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      lenisInstance?.destroy();
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

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
        <TechMarquee />
        <Testimonials />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
