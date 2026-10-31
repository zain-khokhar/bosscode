'use client';
import { useEffect, useRef } from 'react';

const STATS = [
  { number: '24',   suffix: 'h', label: 'Fast Reply',       sub: 'On WhatsApp or call'            },
  { number: '100',  suffix: '%', label: 'You Own It',       sub: 'Your records, your data'        },
  { number: '1',    suffix: 'd', label: 'Staff Training',   sub: 'Simple enough to learn in a day' },
  { number: '2026', suffix: '',  label: 'Karachi Team',     sub: 'Direct support after launch'    },
];

function animateCount(el, target, duration = 1200) {
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
            }, i * 100);
          });

          el.querySelectorAll('.bc-stat-number[data-target]').forEach((num) => {
            const raw = num.getAttribute('data-target');
            animateCount(num, raw);
          });
        }
      },
      { threshold: 0.25 }
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
