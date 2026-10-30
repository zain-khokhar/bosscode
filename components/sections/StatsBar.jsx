'use client';
import { useEffect, useRef } from 'react';

const STATS = [
  { number: '24',   suffix: 'h', label: 'Reply Time',        sub: 'We answer every message'         },
  { number: '100',  suffix: '%', label: 'You Own It',        sub: 'Your code, your data'            },
  { number: '7',    suffix: 'd', label: 'First Design',      sub: 'See it before you decide'        },
  { number: '2026', suffix: '',  label: 'Just Getting Started', sub: 'Full attention on every client' },
];

function animateCount(el, target, duration = 1400) {
  const start = performance.now();
  const isFloat = String(target).includes('.');
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(parseFloat(target) * ease * 10) / 10;
    el.textContent = isFloat ? current.toFixed(1) : Math.round(current);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

export default function StatsBar() {
  const containerRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;

          el.querySelectorAll('.bc-stat-item').forEach((item, i) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
              item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }, i * 120);
          });

          el.querySelectorAll('.bc-stat-number[data-target]').forEach((num) => {
            const raw = num.getAttribute('data-target');
            animateCount(num, raw);
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="bc-stats" ref={containerRef}>
      <div className="container">
        <div id="bc-stats-grid">
          {STATS.map((s, i) => (
            <div className="bc-stat-item" key={i}>
              <div className="bc-stat-number">
                <span data-target={s.number}>{s.number}</span>
                {s.suffix && <sup>{s.suffix}</sup>}
              </div>
              <div className="bc-stat-label">{s.label}</div>
              <div className="bc-stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
