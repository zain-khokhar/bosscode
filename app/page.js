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
// import TechMarquee from '@/components/sections/TechMarquee';
import Testimonials from '@/components/sections/Testimonials';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  /* Smooth scroll + dynamic adaptive scroll indicator */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lenisInstance = null;
    let rafId = null;

    /* Scroll progress & adaptive color elements */
    const indicator = document.getElementById('scroll-indicator');
    const bar = document.getElementById('scroll-indicator-bar');

    // Helper: sample background luminance at viewport coordinate (x, y)
    function getLuminanceAt(x, y) {
      const clampedY = Math.min(Math.max(y, 2), window.innerHeight - 2);
      const elements = document.elementsFromPoint
        ? document.elementsFromPoint(x, clampedY)
        : [document.elementFromPoint(x, clampedY)];

      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (!el || el === indicator || el === bar || el.id === 'scroll-indicator' || el.id === 'scroll-indicator-bar') continue;

        const style = window.getComputedStyle(el);
        const bg = style.backgroundColor;
        if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
          const match = bg.match(/[\d.]+/g);
          if (match && match.length >= 3) {
            const r = parseFloat(match[0]);
            const g = parseFloat(match[1]);
            const b = parseFloat(match[2]);
            const a = match[3] !== undefined ? parseFloat(match[3]) : 1;
            if (a > 0.08) {
              return 0.299 * r + 0.587 * g + 0.114 * b;
            }
          }
        }
      }
      return 255; // Default white background
    }

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      if (indicator) indicator.style.opacity = '1';

      if (bar && indicator) {
        const maxTravel = indicator.clientHeight - bar.clientHeight;
        const currentTop = progress * maxTravel;
        bar.style.top = `${currentTop}px`;

        // Calculate exact coordinates of the moving indicator bar
        const indicatorRect = indicator.getBoundingClientRect();
        const barTop = indicatorRect.top + currentTop;
        const barHeight = bar.clientHeight || 36;
        const barBottom = barTop + barHeight;
        const testX = Math.max(indicatorRect.left - 20, 10);

        // Sample background luminance at the top and bottom of the bar
        const topLum = getLuminanceAt(testX, barTop + 1);
        const bottomLum = getLuminanceAt(testX, barBottom - 1);

        const isTopLight = topLum >= 120;
        const isBottomLight = bottomLum >= 120;

        if (isTopLight && isBottomLight) {
          // Situation 1: Completely on Light/White background
          bar.style.background = '#000921';
          bar.style.boxShadow = '0 2px 8px rgba(0, 9, 33, 0.25)';
          indicator.style.background = 'rgba(0, 9, 33, 0.08)';
          indicator.style.borderColor = 'rgba(0, 9, 33, 0.22)';
          indicator.style.boxShadow = '0 2px 10px rgba(0, 9, 33, 0.08)';
        } else if (!isTopLight && !isBottomLight) {
          // Situation 2: Completely on Dark/Navy background
          bar.style.background = '#ffffff';
          bar.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.65), 0 2px 6px rgba(0, 0, 0, 0.4)';
          indicator.style.background = 'rgba(255, 255, 255, 0.14)';
          indicator.style.borderColor = 'rgba(255, 255, 255, 0.45)';
          indicator.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.35)';
        } else {
          // Situation 3: Half-and-half boundary crossing!
          // Pinpoint the boundary between light & dark using 4-step binary search
          let low = barTop;
          let high = barBottom;
          for (let step = 0; step < 4; step++) {
            const mid = (low + high) / 2;
            const midLum = getLuminanceAt(testX, mid);
            if ((midLum >= 120) === isTopLight) {
              low = mid;
            } else {
              high = mid;
            }
          }
          const boundaryY = (low + high) / 2;
          const split = Math.min(Math.max(((boundaryY - barTop) / barHeight) * 100, 0), 100).toFixed(1);

          if (isTopLight) {
            // Top is on White (#000921), Bottom is on Dark (#ffffff)
            bar.style.background = `linear-gradient(to bottom, #000921 0%, #000921 ${split}%, #ffffff ${split}%, #ffffff 100%)`;
            bar.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.35)';
            indicator.style.background = `linear-gradient(to bottom, rgba(0, 9, 33, 0.08) 0%, rgba(0, 9, 33, 0.08) ${split}%, rgba(255, 255, 255, 0.14) ${split}%, rgba(255, 255, 255, 0.14) 100%)`;
            indicator.style.borderColor = 'rgba(255, 255, 255, 0.45)';
          } else {
            // Top is on Dark (#ffffff), Bottom is on White (#000921)
            bar.style.background = `linear-gradient(to bottom, #ffffff 0%, #ffffff ${split}%, #000921 ${split}%, #000921 100%)`;
            bar.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.35)';
            indicator.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.14) ${split}%, rgba(0, 9, 33, 0.08) ${split}%, rgba(0, 9, 33, 0.08) 100%)`;
            indicator.style.borderColor = 'rgba(255, 255, 255, 0.45)';
          }
        }
      }
    };

    // Dynamically import Lenis only on client
    import('lenis').then((mod) => {
      const Lenis = mod.default;
      lenisInstance = new Lenis({ lerp: 0.1, smoothWheel: true });
      lenisInstance.on('scroll', onScroll);

      function raf(time) {
        lenisInstance.raf(time);
        onScroll(); // Continuously update while smooth-scrolling or when background colors animate
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }).catch(() => {
      // native scroll fallback
    });

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
        {/* <TechMarquee /> */}
        <Testimonials />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
