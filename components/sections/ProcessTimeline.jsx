'use client';
import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/Icon';

const PHASES = [
  {
    phase: 'Phase 01',
    duration: 'Day 1 · Free',
    title: 'Let\'s Talk',
    desc: 'Tell us how you work today.',
    icon: 'message',
    deliverables: ['Clear plan', 'Fixed price'],
  },
  {
    phase: 'Phase 02',
    duration: 'Week 1',
    title: 'See the Design',
    desc: 'Preview the screens before we build.',
    icon: 'mobile',
    deliverables: ['Visual preview', 'Your approval'],
  },
  {
    phase: 'Phase 03',
    duration: 'Week 2–4',
    title: 'We Build It',
    desc: 'We build and share weekly updates.',
    icon: 'zap',
    deliverables: ['Weekly updates', 'Tested system'],
  },
  {
    phase: 'Phase 04',
    duration: 'After launch',
    title: 'Go Live & Support',
    desc: 'We launch, train your staff, and stay.',
    icon: 'heart',
    deliverables: ['Staff training', 'Ongoing support'],
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
            }, i * 120);
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
      <div id="process" style={{ position: 'relative', top: '-90px' }} aria-hidden="true" />
      <div className="container" ref={containerRef}>
        <div id="bc-process-header">
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>
            <span className="dot" />
            How It Works
          </div>
          <h2 id="bc-process-title">
            You Always Know<br />What&apos;s Happening
          </h2>
          <p id="bc-process-sub">
            No surprises. We check with you at every step.
          </p>
        </div>

        <div id="bc-process-grid">
          {PHASES.map((p, i) => (
            <div className="bc-process-card" key={p.phase} style={{ transitionDelay: `${i * 80}ms` }}>
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
                <div className="bc-deliverables-label">What You Get</div>
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
