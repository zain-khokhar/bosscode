'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { PROCESS_STEPS } from './aboutData';

export default function AboutScrollProcess() {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 78%', 'end 58%'],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0.06, 1]);

  const activeStep = PROCESS_STEPS[activeIdx] || PROCESS_STEPS[0];

  return (
    <section ref={sectionRef} className="ab-process">
      <div className="arch-grid arch-grid--dark" aria-hidden="true" />

      <div className="container ab-process-inner">
        <div className="ab-process-head">
          <div>
            <span className="section-tag section-tag--dark">
              <span className="dot" /> How We Work With You
            </span>
            <h2 className="sp-h2 sp-h2--light">
              Four clear steps from paper registers to daily speed.
            </h2>
          </div>
          <span className="ab-process-note">Click any step to inspect</span>
        </div>

        <div className="ab-track-wrap">
          <svg
            className="ab-track-svg"
            viewBox="0 0 1000 16"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="abTrackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0055FF" />
                <stop offset="100%" stopColor="#00D2FF" />
              </linearGradient>
            </defs>
            <line
              x1="0"
              y1="8"
              x2="1000"
              y2="8"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <motion.path
              d="M 0 8 L 1000 8"
              fill="none"
              stroke="url(#abTrackGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: lineProgress }}
            />
          </svg>

          <div className="ab-steps-grid" role="tablist" aria-label="BossCode delivery steps">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={step.num}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`ab-step-card${isActive ? ' ab-step-card--active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="ab-step-active-frame"
                      className="ab-step-active-frame"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  ) : null}

                  <span className="ab-step-num">{step.num}</span>
                  <h3 className="ab-step-title">{step.title}</h3>
                  <p className="ab-step-desc">{step.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.num}
            className="ab-step-preview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ab-preview-left">
              <span className="ab-preview-badge">
                <Icon name={activeStep.icon} size={18} strokeWidth={2} />
              </span>
              <div>
                <span className="ab-preview-kicker">{activeStep.previewKicker}</span>
                <p className="ab-preview-text">{activeStep.previewText}</p>
              </div>
            </div>
            <span className="ab-preview-chip">{activeStep.previewChip}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

