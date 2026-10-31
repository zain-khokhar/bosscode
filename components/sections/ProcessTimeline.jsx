'use client';
import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/Icon';

const PHASES = [
  {
    phase: 'Step 01',
    duration: 'Day 1 · Free',
    title: 'Free Chat',
    desc: 'Tell us how you work today. Zero pressure.',
    icon: 'message',
    deliverables: ['Clear plan', 'Fixed price', 'Timeline'],
  },
  {
    phase: 'Step 02',
    duration: 'Week 1',
    title: 'See the Screens',
    desc: 'Preview how it looks on your phone before we build.',
    icon: 'mobile',
    deliverables: ['Visual preview', 'Your feedback', 'Final sign-off'],
  },
  {
    phase: 'Step 03',
    duration: 'Week 2–4',
    title: 'We Set It Up',
    desc: 'We build it, move your old records, and test everything.',
    icon: 'zap',
    deliverables: ['Data imported', 'Ready system', 'Weekly updates'],
  },
  {
    phase: 'Step 04',
    duration: 'Launch+',
    title: 'Train & Support',
    desc: 'We train your staff in 1 day and stay for support.',
    icon: 'heart',
    deliverables: ['1-day staff training', 'Cloud backup', 'Direct support'],
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          el.querySelectorAll('.bc-process-card').forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, i * 100);
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="bc-process" data-section="process">
      <div className="container" ref={containerRef}>
        <div id="bc-process-header">
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>
            <span className="dot" />
            How It Works
          </div>
          <h2 id="bc-process-title">
            Up and Running<br />In 4 Simple Steps.
          </h2>
          <p id="bc-process-sub">
            No surprises. You see and approve everything step by step.
          </p>
        </div>

        <div id="bc-process-grid">
          {PHASES.map((p, i) => (
            <div className="bc-process-card" key={p.phase} style={{ transitionDelay: `${i * 70}ms` }}>
              <div>
                <div className="bc-process-card-top">
                  <span className="bc-process-phase">{p.phase}</span>
                  <span className="bc-process-duration">{p.duration}</span>
                </div>
                <div className="bc-process-icon">
                  <Icon name={p.icon} size={18} />
                </div>
                <h3 className="bc-process-title">{p.title}</h3>
                <p className="bc-process-desc">{p.desc}</p>
              </div>
              <div className="bc-process-deliverables">
                <div className="bc-deliverables-label">You Get</div>
                {p.deliverables.map((d) => (
                  <div className="bc-deliverable-item" key={d}>{d}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
