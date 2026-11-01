'use client';
import { useRef, useState } from 'react';
import Icon from '@/components/ui/Icon';
import { SOLUTIONS } from '@/lib/solutions';

const NEEDS = [
  ...SOLUTIONS.map((s) => ({ id: s.slug, label: s.name, icon: s.icon })),
  { id: 'custom', label: 'Custom Tool', icon: 'sparkles' },
];

export default function ContactForm({ initial = '' }) {
  const [need, setNeed] = useState(NEEDS.some((n) => n.id === initial) ? initial : '');
  const [sentMode, setSentMode] = useState('');
  const formRef = useRef(null);

  function buildPayload(formEl) {
    const f = new FormData(formEl);
    const label = NEEDS.find((n) => n.id === need)?.label || 'Free Check-up';
    const name = f.get('name') || '';
    const phone = f.get('phone') || '';
    const business = f.get('business') || '-';
    const message = f.get('message') || '';

    const text = [
      'Assalam o Alaikum BossCode,',
      `Name: ${name}`,
      `WhatsApp: ${phone}`,
      `Business: ${business}`,
      `Looking for: ${label}`,
      message ? `Note: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    return { label, text };
  }

  function onSubmitWhatsApp(e) {
    e.preventDefault();
    if (!formRef.current) return;
    const { text } = buildPayload(formRef.current);
    const waUrl = `https://wa.me/923197542768?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSentMode('whatsapp');
  }

  function onSendEmail() {
    if (!formRef.current) return;
    if (!formRef.current.reportValidity()) return;
    const { label, text } = buildPayload(formRef.current);
    window.location.href = `mailto:bosscodeofficial@gmail.com?subject=${encodeURIComponent(
      'Free chat request — ' + label
    )}&body=${encodeURIComponent(text)}`;
    setSentMode('email');
  }

  return (
    <form className="sp-form" ref={formRef} onSubmit={onSubmitWhatsApp} id="contact-form">
      <fieldset className="sp-need">
        <legend>1. Tap what you want to fix</legend>
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
        Business type <span>(optional)</span>
        <input name="business" placeholder="e.g. Retail store, Clinic, Wholesaler" />
      </label>
      <label>
        One-line note <span>(optional)</span>
        <textarea name="message" rows={2} placeholder="e.g. Want to replace my sales & stock register." />
      </label>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
        <button type="submit" className="btn btn-primary sp-form-submit">
          Start Chat on WhatsApp <Icon name="arrow" size={16} />
        </button>
        <button type="button" onClick={onSendEmail} className="btn btn-ghost">
          Or Send via Email
        </button>
      </div>

      <p className="sp-form-note" role="status">
        {sentMode === 'whatsapp'
          ? 'WhatsApp opened with your details. We reply within a few hours!'
          : sentMode === 'email'
          ? 'Opening your email app — or email bosscodeofficial@gmail.com directly.'
          : 'Free first chat · No pressure · Reply within 24 hours'}
      </p>
    </form>
  );
}
