'use client';
import { useEffect, useRef } from 'react';

const PARTICLES = 60;

export default function QuantumCore() {
  const sectionRef = useRef(null);
  const bgRef      = useRef(null);
  const contentRef = useRef(null);
  const canvasRef  = useRef(null);
  const mouseRef   = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas  = canvasRef.current;
    const section = sectionRef.current;
    const bg      = bgRef.current;
    const content = contentRef.current;
    const servicesSection = document.getElementById('bc-services');
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    let width, height, particles, animId;

    // Start progress (0 = white #ffffff, 1 = deep navy #000921)
    let smoothProgress = 0;

    function resize() {
      const rect = section.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    }

    function initParticles() {
      particles = Array.from({ length: PARTICLES }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Lusion-style smooth background color interpolation at the START of #bc-quantum
      // As the top of #bc-quantum scrolls from 95% of viewport height up to 15% of viewport height,
      // progress smoothly moves from 0 (White) to 1 (Deep Navy #000921).
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const startTrigger = vh * 0.95;
      const endTrigger   = vh * 0.15;
      const rawProgress  = (startTrigger - rect.top) / (startTrigger - endTrigger);
      const targetProgress = Math.min(Math.max(rawProgress, 0), 1);

      // Silky-smooth damping factor (Lusion-like inertia)
      smoothProgress += (targetProgress - smoothProgress) * 0.045;
      if (Math.abs(targetProgress - smoothProgress) < 0.0005) {
        smoothProgress = targetProgress;
      }

      // Smooth cubic ease
      const t = smoothProgress * smoothProgress * (3 - 2 * smoothProgress);

      // Rich sapphire/navy color curve from White (255, 255, 255) -> Deep Navy (0, 9, 33)
      // Red & Green drop faster than Blue so mid-tones pass through sleek blue/navy instead of grey
      const r = Math.round(255 * Math.pow(1 - t, 1.55));
      const g = Math.round(255 - (255 - 9) * Math.pow(t, 0.72));
      const b = Math.round(255 - (255 - 33) * Math.pow(t, 0.92));
      const bgColor = `rgb(${r}, ${g}, ${b})`;

      section.style.backgroundColor = bgColor;
      if (servicesSection) {
        servicesSection.style.backgroundColor = bgColor;
      }

      if (bg) {
        bg.style.opacity = String(t.toFixed(4));
      }

      if (content) {
        // Content smoothly brightens and glides into place as the background turns deep navy
        const contentOpacity = 0.15 + 0.85 * t;
        const translateY = (1 - t) * 36;
        content.style.opacity = String(contentOpacity.toFixed(4));
        content.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      }

      // Update positions
      for (const p of particles) {
        // Mouse repel
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.vx += (dx / dist) * force * 0.8;
          p.vy += (dy / dist) * force * 0.8;
        }

        // Damping
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.12 * (1 - d / 110) * t})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity * t})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    const onResize = () => { resize(); initParticles(); };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      if (servicesSection) {
        servicesSection.style.backgroundColor = '';
      }
    };
  }, []);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  const BADGES = [
    {
      title: 'Performance',
      sub: 'Core Web Vitals A+',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: 'Security',
      sub: 'SOC 2 Ready',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Scalability',
      sub: 'Millions of users',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      title: 'Velocity',
      sub: '3.2× faster ships',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="bc-quantum" ref={sectionRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div id="bc-quantum-bg" ref={bgRef} aria-hidden="true">
        <div className="arch-grid arch-grid--dark" />
        <canvas id="bc-quantum-canvas" ref={canvasRef} />
      </div>

      <div className="container">
        <div id="bc-quantum-content" ref={contentRef}>
          <div className="section-tag section-tag--dark">
            <span className="dot" />
            Our Commitment
          </div>
          <h2 id="bc-quantum-title">
            Built to Perform.<br />Engineered to Last.
          </h2>
          <p id="bc-quantum-sub">
            Every product we ship meets enterprise-grade standards with performance, security, and scalability baked in from day one, not bolted on later.
          </p>

          <div id="bc-quantum-grid">
            {BADGES.map((b) => (
              <div className="bc-quantum-badge" key={b.title}>
                <div className="bc-quantum-badge-icon" aria-hidden="true">
                  {b.icon}
                </div>
                <div className="bc-quantum-badge-title">{b.title}</div>
                <div className="bc-quantum-badge-sub">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
