'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAdaptiveScroll } from '@/lib/useAdaptiveScroll';

export default function PageShell({ children }) {
  useAdaptiveScroll();

  return (
    <>
      <div id="scroll-indicator" aria-hidden="true">
        <div id="scroll-indicator-bar" />
      </div>
      <Navbar />
      <main id="bc-main" role="main" className="sp-main">{children}</main>
      <Footer />
    </>
  );
}
