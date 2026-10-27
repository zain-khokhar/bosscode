'use client';
import { useEffect, useRef } from 'react';

const PARTICLES = 60;

export default function QuantumCore() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height, particles, animId;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
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
            ctx.strokeStyle = `rgba(255,255,255,${0.12 * (1 - d / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
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
    { icon: '⚡', title: 'Performance', sub: 'Core Web Vitals A+' },
    { icon: '🛡', title: 'Security',    sub: 'SOC 2 Ready'        },
    { icon: '📦', title: 'Scalability', sub: 'Millions of users'  },
    { icon: '🚀', title: 'Velocity',    sub: '3.2× faster ships'  },
  ];

  return (
    <section id="bc-quantum" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="arch-grid arch-grid--dark" aria-hidden="true" />
      <canvas id="bc-quantum-canvas" ref={canvasRef} aria-hidden="true" />

      <div className="container">
        <div id="bc-quantum-content">
          <div className="section-tag section-tag--dark">
            <span className="dot" />
            Our Commitment
          </div>
          <h2 id="bc-quantum-title">
            Built to Perform.<br />Engineered to Last.
          </h2>
          <p id="bc-quantum-sub">
            Every product we ship meets enterprise-grade standards — performance, security, and scalability baked in from day one, not bolted on later.
          </p>

          <div id="bc-quantum-grid">
            {BADGES.map((b) => (
              <div className="bc-quantum-badge" key={b.title}>
                <span style={{ fontSize: '24px' }}>{b.icon}</span>
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
