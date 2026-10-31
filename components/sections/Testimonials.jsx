'use client';

const FAQ_L = [
  {
    q: 'How much will it cost?',
    a: 'Fixed price shared on our free first call.',
  },
  {
    q: 'How long will it take?',
    a: 'Websites take 2 weeks. Systems take 3–6 weeks.',
  },
  {
    q: 'I am not technical at all.',
    a: 'No problem. We explain everything in plain words.',
  },
  {
    q: 'What if something breaks later?',
    a: 'We stay with you and support you.',
  },
];

const FAQ_R = [
  {
    q: 'Will I own my data?',
    a: 'Yes, 100%. Your system and data are yours.',
  },
  {
    q: 'How do payments work?',
    a: 'In 3 parts: start, middle, and launch.',
  },
  {
    q: 'What projects do you take?',
    a: 'Business systems, websites, and WhatsApp automation.',
  },
  {
    q: 'Is the first call free?',
    a: 'Yes, 100% free with zero obligation.',
  },
];

function FaqCard({ t }) {
  return (
    <div className="bc-testimonial-card">
      <div>
        <p className="bc-testimonial-name" style={{ marginBottom: '12px' }}>{t.q}</p>
        <p className="bc-testimonial-quote">{t.a}</p>
      </div>
      <div>
        <div className="bc-testimonial-divider" />
        <div className="bc-testimonial-author" style={{ marginTop: '16px' }}>
          <div className="bc-testimonial-avatar">BC</div>
          <div>
            <div className="bc-testimonial-name">BossCode</div>
            <div className="bc-testimonial-role">Straight answer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Track({ items, dir }) {
  const half = [...items, ...items];
  return (
    <div className={`bc-testimonials-track bc-testimonials-track--${dir}`}>
      <div className="bc-marquee-group">
        {half.map((t, i) => (
          <FaqCard t={t} key={`a-${t.q}-${i}`} />
        ))}
      </div>
      <div className="bc-marquee-group" aria-hidden="true">
        {half.map((t, i) => (
          <FaqCard t={t} key={`b-${t.q}-${i}`} />
        ))}
      </div>
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
            Common Questions
          </div>
          <h2 id="bc-testimonials-title">
            Whatever&apos;s On Your Mind,<br />Just Ask.
          </h2>
        </div>
      </div>

      <div id="bc-testimonials-rows">
        <Track items={FAQ_L} dir="left"  />
        <Track items={FAQ_R} dir="right" />
      </div>
    </section>
  );
}
