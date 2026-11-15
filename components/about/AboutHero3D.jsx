'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import Icon from '@/components/ui/Icon';
import { createAbout3DScene } from './about3dScene';
import { ASSEMBLY_STATES, BUSINESS_MODES } from './aboutData';

const HEADLINE_WORDS = [
  { text: 'Software', gradient: false },
  { text: 'built', gradient: false },
  { text: 'around', gradient: true },
  { text: 'your', gradient: false },
  { text: 'work.', gradient: false },
];

export default function AboutHero3D() {
  const heroRef = useRef(null);
  const canvasHostRef = useRef(null);
  const sceneCtrlRef = useRef(null);

  const [modeId, setModeId] = useState(BUSINESS_MODES[0].id);
  const [assemblyState, setAssemblyState] = useState('fitted');
  const [webglFailed, setWebglFailed] = useState(false);

  const activeMode =
    BUSINESS_MODES.find((item) => item.id === modeId) || BUSINESS_MODES[0];
  const activeAssembly =
    ASSEMBLY_STATES.find((item) => item.id === assemblyState) || ASSEMBLY_STATES[1];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 32]);
  const stageScale = useTransform(scrollYProgress, [0, 1], [1, 0.975]);

  useEffect(() => {
    const host = canvasHostRef.current;
    if (!host) return undefined;

    const handleFailure = () => {
      queueMicrotask(() => setWebglFailed(true));
    };

    const controller = createAbout3DScene({
      container: host,
      initialMode: BUSINESS_MODES[0],
      initialState: 'fitted',
      onWebGLError: handleFailure,
    });

    if (!controller) {
      handleFailure();
      return undefined;
    }

    sceneCtrlRef.current = controller;
    return () => {
      controller.dispose();
      sceneCtrlRef.current = null;
    };
  }, []);

  useEffect(() => {
    sceneCtrlRef.current?.setMode(activeMode);
  }, [activeMode]);

  useEffect(() => {
    sceneCtrlRef.current?.setAssemblyState(assemblyState);
  }, [assemblyState]);

  return (
    <section ref={heroRef} className="ab-hero">
      <div className="arch-grid" aria-hidden="true" />
      <div className="ab-hero-wash" aria-hidden="true" />

      <div className="container ab-hero-grid">
        {/* Left Column: Editorial Lead + Business Mode Selector */}
        <div className="ab-hero-copy">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="dot" /> Karachi · Custom Business Software
          </motion.span>

          <h1 className="sp-h1 ab-h1" aria-label="Software built around your work.">
            {HEADLINE_WORDS.map((word, idx) => (
              <span key={word.text} className="ab-word-mask">
                <motion.span
                  className={`ab-word${word.gradient ? ' gradient-word' : ''}`}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.08 + idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word.text}
                </motion.span>
                {idx < HEADLINE_WORDS.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h1>

          <motion.p
            className="sp-lead ab-lead"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            Show us your paper registers. We build daily screens and WhatsApp alerts around your
            counter.
          </motion.p>

          <motion.div
            className="ab-mode-block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ab-mode-label">
              <span>Pick a counter to fold software around it</span>
            </div>

            <div className="ab-mode-rail" role="tablist" aria-label="Business workflow modes">
              {BUSINESS_MODES.map((mode) => {
                const isActive = mode.id === activeMode.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`ab-mode-btn${isActive ? ' ab-mode-btn--active' : ''}`}
                    onClick={() => setModeId(mode.id)}
                  >
                    <span className="ab-mode-icon">
                      <Icon name={mode.icon} size={16} strokeWidth={2.1} />
                    </span>
                    <span className="ab-mode-meta">
                      <span className="ab-mode-name">{mode.label}</span>
                      <span className="ab-mode-sub">{mode.sub}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode.id}
                className="ab-mode-summary"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="ab-summary-left">
                  <span className="ab-summary-kicker">{activeMode.label} Result</span>
                  <span className="ab-summary-line">{activeMode.summaryLine}</span>
                </div>
                <span className="ab-summary-badge">{activeMode.summaryBadge}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Column: Interactive Real-Time 3D Machined Origami Blueprint */}
        <motion.div
          className="ab-stage-wrap"
          style={{ y: stageY, scale: stageScale }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ab-stage">
            <div className="ab-stage-grid" aria-hidden="true" />
            <div className="ab-cad-corner ab-cad-corner--tl" aria-hidden="true" />
            <div className="ab-cad-corner ab-cad-corner--tr" aria-hidden="true" />
            <div className="ab-cad-corner ab-cad-corner--bl" aria-hidden="true" />
            <div className="ab-cad-corner ab-cad-corner--br" aria-hidden="true" />

            <div className="ab-stage-hud">
              <span className="ab-hud-chip">
                <span className="ab-hud-dot" />
                {webglFailed ? '3D Preview · Interactive' : 'Live 3D · Drag to Rotate'}
              </span>
              <span className="ab-hud-chip">{activeAssembly.hint}</span>
            </div>

            {webglFailed ? (
              <div className="ab-fallback" aria-label={activeMode.label}>
                <div className={`ab-fallback-rig ab-fallback-rig--${assemblyState}`}>
                  <div className="ab-fallback-plate" />
                  <div className="ab-fallback-core">
                    <span className="ab-fallback-tag">{activeMode.coreTag}</span>
                    <strong className="ab-fallback-metric">{activeMode.heroMetric}</strong>
                    <span className="ab-fallback-note">{activeMode.rowOneLabel}</span>
                  </div>
                  <div className="ab-fallback-glass" />
                </div>
              </div>
            ) : (
              <div
                ref={canvasHostRef}
                className="ab-canvas-host"
                role="img"
                aria-label={`Interactive 3D architectural model for ${activeMode.label}`}
              />
            )}

            <div className="ab-dock-bar">
              <div className="ab-dock" role="tablist" aria-label="3D inspection state">
                {ASSEMBLY_STATES.map((item) => {
                  const isActive = item.id === assemblyState;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`ab-dock-btn${isActive ? ' ab-dock-btn--active' : ''}`}
                      onClick={() => setAssemblyState(item.id)}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="ab-dock-pill"
                          className="ab-dock-pill"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        />
                      ) : null}
                      <span className="ab-dock-index">{item.index}</span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {!webglFailed ? (
                <div className="ab-dock-actions">
                  <span className="ab-layer-hint">4 Z-Strata</span>
                  <button
                    type="button"
                    className="ab-reset-btn"
                    title="Reset 3D angle"
                    aria-label="Reset 3D camera angle"
                    onClick={() => sceneCtrlRef.current?.resetCamera()}
                  >
                    <RotateCcw size={15} strokeWidth={2.2} />
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
