'use client';

import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { BENTO_VALUES } from './aboutData';

function renderWidget(item) {
  switch (item.type) {
    case 'timeline':
      return (
        <div className="ab-widget">
          <div className="ab-timeline">
            {item.nodes.map((node) => (
              <div
                key={node.time}
                className={`ab-time-node${node.done ? ' ab-time-node--done' : ''}`}
              >
                <span className="ab-time-clock">{node.time}</span>
                <span className="ab-time-label">{node.label}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case 'seal':
      return (
        <div className="ab-widget">
          <div className="ab-seal-row">
            <span className="ab-seal-price">{item.priceText}</span>
            <span className="ab-seal-pill">{item.pillText}</span>
          </div>
        </div>
      );
    case 'vault':
      return (
        <div className="ab-widget">
          <div className="ab-vault-row">
            <span className="ab-vault-ring" aria-hidden="true">
              <Icon name="lock" size={16} strokeWidth={2.2} />
            </span>
            <div className="ab-vault-meta">
              <span className="ab-vault-title">{item.vaultTitle}</span>
              <span className="ab-vault-sub">{item.vaultSub}</span>
            </div>
          </div>
        </div>
      );
    case 'support':
      return (
        <div className="ab-widget">
          <div className="ab-support-bar">
            <span className="ab-support-live">
              <span className="ab-hud-dot" aria-hidden="true" />
              {item.liveLabel}
            </span>
            <span className="ab-support-speed">{item.speedLabel}</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function AboutBentoValues() {
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="ab-section">
      <div className="container">
        <div className="ab-section-head">
          <span className="section-tag">
            <span className="dot" /> What We Stand For
          </span>
          <h2 className="sp-h2">Built for real owners, not IT experts.</h2>
        </div>

        <div className="ab-bento">
          {BENTO_VALUES.map((item, idx) => (
            <motion.article
              key={item.id}
              className={`ab-bento-card ab-bento-card--${item.span}`}
              onPointerMove={handlePointerMove}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div>
                <div className="ab-bento-top">
                  <span className="ab-bento-icon">
                    <Icon name={item.icon} size={20} strokeWidth={2} />
                  </span>
                  <span className="ab-bento-tag">{item.tag}</span>
                </div>

                <div className="ab-bento-copy">
                  <h3 className="ab-bento-title">{item.title}</h3>
                  <p className="ab-bento-desc">{item.desc}</p>
                </div>
              </div>

              {renderWidget(item)}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
