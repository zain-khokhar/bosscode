'use client';

import { useEffect, useRef } from 'react';

export default function StartOverlay({ onComplete }) {
  const overlayRef = useRef(null);
  const rectRef = useRef(null);

  useEffect(() => {
    let ctx;
    async function runIntro() {
      const { gsap } = await import('gsap');

      ctx = gsap.context(() => {
        gsap.set(overlayRef.current, {
          opacity: 1,
          display: 'flex',
          backgroundColor: '#000921',
        });
        gsap.set(rectRef.current, {
          width: 96,
          height: 42,
          opacity: 0,
          borderRadius: 8,
          transformOrigin: 'center center',
        });

        const tl = gsap.timeline({
          delay: 0.2,
          onComplete: () => {
            if (overlayRef.current) overlayRef.current.style.display = 'none';
            if (onComplete) onComplete();
          },
        });

        tl.to(rectRef.current, { opacity: 1, duration: 0.25, ease: 'power2.out' })
          .to(rectRef.current, { width: 340, duration: 0.65, ease: 'power3.inOut' })
          .to(rectRef.current, {
            rotationX: 26,
            rotationY: -20,
            skewX: -9,
            duration: 0.38,
            ease: 'power2.in',
          })
          .to(rectRef.current, {
            width: '280vw',
            height: '280vh',
            rotationX: 0,
            rotationY: 0,
            skewX: 0,
            borderRadius: 0,
            duration: 0.48,
            ease: 'expo.in',
          })
          .to(
            overlayRef.current,
            {
              opacity: 0,
              duration: 0.42,
              ease: 'power2.out',
            },
            '-=0.08'
          );
      });
    }

    runIntro().catch(console.error);

    return () => ctx?.revert();
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      id="start-overlay"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#000921] pointer-events-none"
    >
      <div style={{ perspective: 900 }}>
        <div
          ref={rectRef}
          className="relative bg-white flex items-center justify-center overflow-hidden shadow-2xl border border-white/20"
        >
          <div className="flex items-center gap-2.5 px-4 font-display font-bold text-xs uppercase tracking-[0.2em] text-[#000921]">
            <span className="w-2 h-2 rounded-full bg-[#000921] animate-ping" />
            <span>BOSSCODE · 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
