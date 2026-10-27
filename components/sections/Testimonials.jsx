'use client';

const TESTIMONIALS_L = [
  {
    quote: "BossCode shipped our SaaS MVP in 8 weeks — faster than any agency we've worked with. The code quality is exceptional and the team actually understood our business goals.",
    name: 'Ahmad Hassan',
    role: 'CTO · TechFlow Inc.',
    init: 'AH',
    verified: true,
  },
  {
    quote: "They redesigned our entire e-commerce funnel and conversion rate jumped 68% within the first month. That's measurable, real impact. Highly recommend.",
    name: 'Maria Butt',
    role: 'Head of Growth · Luxe Brands',
    init: 'MB',
    verified: true,
  },
  {
    quote: "The design system they built for us has saved us hundreds of development hours. Everything is modular, documented, and our devs love it.",
    name: 'Zain Khan',
    role: 'Product Lead · NovaPay',
    init: 'ZK',
    verified: true,
  },
  {
    quote: "What stood out was their transparency. Daily updates, honest communication, zero scope creep. I wish I found them 3 years ago.",
    name: 'Sara Farooq',
    role: 'Founder · Medify Health',
    init: 'SF',
    verified: true,
  },
];

const TESTIMONIALS_R = [
  {
    quote: "Our platform now handles 2M+ daily events at sub-180ms latency. BossCode's infrastructure work gave us the foundation to scale without fear.",
    name: 'Usman Rao',
    role: 'VP Engineering · DataCore',
    init: 'UR',
    verified: true,
  },
  {
    quote: "They don't just execute — they push back when needed, suggest better approaches, and genuinely care about the product outcome. True partners.",
    name: 'Ayesha Malik',
    role: 'CEO · EduReach Platform',
    init: 'AM',
    verified: true,
  },
  {
    quote: "The mobile app they built has a 4.9★ App Store rating with 50K+ downloads in 3 months. Performance, design, everything is top tier.",
    name: 'Bilal Sheikh',
    role: 'Founder · FitSync App',
    init: 'BS',
    verified: true,
  },
  {
    quote: "Post-launch support and analytics setup were just as impressive as the build itself. They set us up to understand our users deeply.",
    name: 'Nadia Qureshi',
    role: 'Product Manager · LogiTrack',
    init: 'NQ',
    verified: true,
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 1l1.8 3.6L13 5.4l-3 2.9.7 4.1L7 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8z" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 13 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 0L8.1 2.1l2.5-.5.5 2.5 2.1 1.6-1.2 2.3 1.2 2.3-2.1 1.6-.5 2.5-2.5-.5L6.5 13l-1.6-2.1-2.5.5-.5-2.5L0 7.3l1.2-2.3L0 2.7l2.1-1.6.5-2.5 2.5.5z" />
      <path d="M4.5 6.5l1.5 1.5 3-3" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="bc-testimonial-card">
      <div>
        <div className="bc-testimonial-stars">
          {[0,1,2,3,4].map((i) => <StarIcon key={i} />)}
        </div>
        <p className="bc-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
      </div>
      <div>
        <div className="bc-testimonial-divider" />
        <div className="bc-testimonial-author" style={{ marginTop: '16px' }}>
          <div className="bc-testimonial-avatar">{t.init}</div>
          <div>
            <div className="bc-testimonial-name">
              {t.name}
              {t.verified && <VerifiedIcon />}
            </div>
            <div className="bc-testimonial-role">{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Track({ items, dir }) {
  const doubled = [...items, ...items];
  return (
    <div className={`bc-testimonials-track bc-testimonials-track--${dir}`}>
      {doubled.map((t, i) => (
        <TestimonialCard t={t} key={`${t.name}-${i}`} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="bc-testimonials" data-section="testimonials">
      <div className="container">
        <div id="bc-testimonials-header">
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>
            <span className="dot" />
            Client Voices
          </div>
          <h2 id="bc-testimonials-title">
            40+ Teams.<br />Zero Regrets.
          </h2>
        </div>
      </div>

      <div id="bc-testimonials-rows">
        <Track items={TESTIMONIALS_L} dir="left"  />
        <Track items={TESTIMONIALS_R} dir="right" />
      </div>
    </section>
  );
}
