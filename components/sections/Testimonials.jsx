'use client';

const FAQ_L = [
  {
    q: 'How much will it cost?',
    a: 'It depends on your business. On our first call we give you a rough idea, and that call is free.',
  },
  {
    q: 'How long will it take?',
    a: 'A simple website takes 2-3 weeks. Bigger systems take 1-2 months. We tell you clearly on day one.',
  },
  {
    q: 'I\'m not technical at all. Is that a problem?',
    a: 'Not at all. We explain everything in plain words, like we\'re chatting over tea.',
  },
  {
    q: 'What if something goes wrong later?',
    a: 'We stay with you after launch. You\'re never left on your own.',
  },
];

const FAQ_R = [
  {
    q: 'Will I own the code and data?',
    a: 'Yes. It\'s your business and your system. We never hold anything back.',
  },
  {
    q: 'How do payments work?',
    a: 'In parts: at the start, in the middle, and at launch. We write it all down upfront.',
  },
  {
    q: 'Do you take on every kind of project?',
    a: 'No. We only do work that helps a business grow. We don\'t do student projects or random software.',
  },
  {
    q: 'Does the first conversation cost anything?',
    a: 'No, it\'s free. We listen to your situation, and if you don\'t need us, we\'ll say so.',
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
