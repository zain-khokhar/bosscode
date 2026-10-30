'use client';
import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import { SOLUTIONS } from '@/lib/solutions';

const NEEDS = [
  ...SOLUTIONS.map((s) => ({ id: s.slug, label: s.name, icon: s.icon })),
  { id: 'custom', label: 'Something else', icon: 'sparkles' },
];

export default function ContactForm({ initial = '' }) {
  const [need, setNeed] = useState(NEEDS.some((n) => n.id === initial) ? initial : '');
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const label = NEEDS.find((n) => n.id === need)?.label || 'Not sure yet';
    const body = [
      `Name: ${f.get('name')}`,
      `WhatsApp/Phone: ${f.get('phone')}`,
      `Business: ${f.get('business') || '-'}`,
      `Interested in: ${label}`,
      '',
      f.get('message') || '',
    ].join('\n');
    window.location.href = `mailto:hello@bosscode.agency?subject=${encodeURIComponent(
      'Free chat request — ' + label
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="sp-form" onSubmit={onSubmit} id="contact-form">
      <fieldset className="sp-need">
        <legend>What do you need help with?</legend>
        <div className="sp-need-grid">
          {NEEDS.map((n) => (
            <button
              type="button"
              key={n.id}
              className={`sp-need-opt${need === n.id ? ' active' : ''}`}
              onClick={() => setNeed(n.id)}
              aria-pressed={need === n.id}
            >
              <Icon name={n.icon} size={18} />
              {n.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="sp-form-row">
        <label>
          Your name
          <input name="name" required placeholder="e.g. Ahmed Khan" autoComplete="name" />
        </label>
        <label>
          WhatsApp number
          <input name="phone" required placeholder="03xx xxxxxxx" inputMode="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        Your business <span>(optional)</span>
        <input name="business" placeholder="e.g. General store, Gulshan" />
      </label>
      <label>
        Tell us in a line <span>(optional)</span>
        <textarea name="message" rows={3} placeholder="e.g. I keep my sales in a register and want to stop." />
      </label>

      <button type="submit" className="btn btn-primary sp-form-submit">
        Request a free chat <Icon name="arrow" size={16} />
      </button>
      <p className="sp-form-note" role="status">
        {sent ? 'Your email app should open now. If it did not, write to hello@bosscode.agency.' : 'Free · No pressure · We reply within 24 hours'}
      </p>
    </form>
  );
}
