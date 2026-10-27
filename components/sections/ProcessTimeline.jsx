'use client';
import { useEffect, useRef } from 'react';

const PHASES = [
  {
    phase: 'Phase 01',
    duration: 'Week 1–2',
    title: 'Discovery',
    desc: 'Business analysis, competitive teardown, user research, and a detailed technical scope document.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="7"/><path d="M9 5v4l3 3"/>
      </svg>
    ),
    deliverables: ['Product Brief', 'Tech Architecture', 'Project Roadmap'],
  },
  {
    phase: 'Phase 02',
    duration: 'Week 3–5',
    title: 'Design',
    desc: 'Wireframes, component library, full UI design, and interactive prototype delivered in Figma.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="14" height="14" rx="3"/><path d="M6 9h6M6 12h4M6 6h2"/>
      </svg>
    ),
    deliverables: ['Design System', 'Prototype', 'Dev Handoff'],
  },
  {
    phase: 'Phase 03',
    duration: 'Week 6–14',
    title: 'Engineering',
    desc: 'Agile sprints with daily standups. Full CI/CD pipeline, code reviews, and unit tests from the first commit.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 8 2 9 4 10"/><polyline points="14 8 16 9 14 10"/><line x1="10" y1="4" x2="8" y2="14"/>
      </svg>
    ),
    deliverables: ['Source Code', 'API Docs', 'Test Coverage'],
  },
  {
    phase: 'Phase 04',
    duration: 'Week 15–16',
    title: 'Launch',
    desc: 'Load testing, security audit, zero-downtime production deployment, and 30-day post-launch monitoring.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2l2 5h5l-4 3 1.5 5L9 12l-4.5 3L6 10 2 7h5z"/>
      </svg>
    ),
    deliverables: ['Live Product', 'Runbook', 'SLA Agreement'],
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
      <div className="container" ref={containerRef}>
        <div id="bc-process-header">
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>
            <span className="dot" />
            Delivery Engine
          </div>
          <h2 id="bc-process-title">
            How We Deliver<br />Every Project
          </h2>
          <p id="bc-process-sub">
            A proven 4-phase agile framework — transparent, predictable, and designed to ship on time, every time.
          </p>
        </div>

        <div id="bc-process-grid">
          {PHASES.map((p, i) => (
            <div className="bc-process-card" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div>
                <div className="bc-process-card-top">
                  <span className="bc-process-phase">{p.phase}</span>
                  <span className="bc-process-duration">{p.duration}</span>
                </div>
                <div className="bc-process-icon">{p.icon}</div>
                <h3 className="bc-process-title">{p.title}</h3>
                <p className="bc-process-desc">{p.desc}</p>
              </div>
              <div className="bc-process-deliverables">
                <div className="bc-deliverables-label">Deliverables</div>
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
