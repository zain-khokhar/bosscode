'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { PROOF_METRICS, WHATSAPP_URL } from './aboutData';

function MetricCounter({ target, prefix, suffix }) {
  const wrapRef = useRef(null);
  const numRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const numEl = numRef.current;
    if (!wrap || !numEl || target <= 1) return undefined;

    let rafId = 0;
    let hasRun = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun) return;
        hasRun = true;
        observer.disconnect();

        const startVal = Math.max(1, Math.round(target * 0.25));
        const duration = 750;
        const startTime = performance.now();

        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const next = Math.round(startVal + (target - startVal) * eased);
          numEl.textContent = String(next);
          if (progress < 1) {
            rafId = requestAnimationFrame(step);
          } else {
            numEl.textContent = String(target);
          }
        };

        rafId = requestAnimationFrame(step);
      },
      { threshold: 0.15 }
    );

    observer.observe(wrap);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target]);

  return (
    <div ref={wrapRef} className="ab-proof-value">
      {prefix}
      <span ref={numRef}>{target}</span>
      {suffix}
    </div>
  );
}

export default function AboutProofAndCta() {
  const handleBannerPointer = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="ab-proof-section">
      <div className="container">
        <div className="ab-proof-grid">
          {PROOF_METRICS.map((item, idx) => (
            <motion.div
              key={item.label}
              className="ab-proof-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <MetricCounter
                target={item.target}
                prefix={item.prefix}
                suffix={item.suffix}
              />
              <div className="ab-proof-label">{item.label}</div>
              <div className="ab-proof-sub">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="sp-banner ab-cta-sheen"
          onPointerMove={handleBannerPointer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="sp-banner-icon">
            <Icon name="message" size={24} />
          </div>
          <div className="sp-banner-text">
            <h2>Ready to replace paper registers at your counter?</h2>
            <p>Talk with our Karachi team — see live screens tailored to your work in 15 minutes.</p>
          </div>
          <div className="ab-cta-actions">
            <Link href="/contact" className="btn btn-white">
              <span>Book Free Demo</span>
              <Icon name="arrow" size={16} className="btn-icon" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-white"
            >
              <Icon name="message" size={16} className="btn-icon" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
