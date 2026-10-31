'use client';
import Icon from '@/components/ui/Icon';

const FAQS = [
  {
    q: 'How much will it cost?',
    a: 'We give you a clear fixed price on our first free call based on what your business needs.',
  },
  {
    q: 'I am not technical. Can my staff use it?',
    a: 'Yes. If your staff can use WhatsApp, they can learn our screens in one day.',
  },
  {
    q: 'How long does setup take?',
    a: 'Ready-made tools take a few days. Custom tools take 2 to 6 weeks.',
  },
  {
    q: 'Who owns my business data and records?',
    a: 'You own 100% of your records and data. You can download a copy anytime.',
  },
  {
    q: 'What if we need help after launch?',
    a: 'We stay with you after launch. A real person in Karachi answers your WhatsApp or call.',
  },
  {
    q: 'Does the first check-up cost anything?',
    a: 'No, it is 100% free. If you do not need software yet, we will tell you honestly.',
  },
];

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
            Straight Answers.<br />Zero Jargon.
          </h2>
        </div>

        <div className="bc-faq-grid">
          {FAQS.map((f, idx) => (
            <details className="bc-faq-item" key={f.q} open={idx < 2}>
              <summary>
                <span>{f.q}</span>
                <Icon name="arrow" size={16} className="bc-faq-chev" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
