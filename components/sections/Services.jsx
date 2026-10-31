'use client';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const SERVICES = [
  {
    num: '01',
    title: 'Paper to Digital',
    desc: 'Turn paper registers into one safe, searchable screen.',
    tags: ['Registers', 'Files', 'Cloud Backup'],
    icon: 'file',
    href: '/solutions/shopledger',
    cta: 'See ShopLedger',
  },
  {
    num: '02',
    title: 'Orders & Staff Tasks',
    desc: 'Track every order, worker task, and deadline on one board.',
    tags: ['Order Board', 'Staff', 'Deadlines'],
    icon: 'clipboard',
    href: '/solutions/ordertrack',
    cta: 'See OrderTrack',
  },
  {
    num: '03',
    title: 'Accounts, Stock & Udhaar',
    desc: 'Live sales, low-stock alerts, and customer dues in one tap.',
    tags: ['Billing', 'Stock', 'Udhaar'],
    icon: 'store',
    href: '/solutions/shopledger',
    cta: 'See ShopLedger',
  },
  {
    num: '04',
    title: 'Appointments & Patient Files',
    desc: 'Daily patient queue, history, and WhatsApp slot reminders.',
    tags: ['Clinics', 'Patient History', 'Reminders'],
    icon: 'stethoscope',
    href: '/solutions/clinicflow',
    cta: 'See ClinicFlow',
  },
  {
    num: '05',
    title: 'Auto Bills & WhatsApp',
    desc: 'Scheduled invoices, payment nudges, and 2-second auto-replies.',
    tags: ['BillBot', 'ChatPilot', 'WhatsApp'],
    icon: 'message',
    href: '/solutions/chatpilot',
    cta: 'See ChatPilot',
  },
  {
    num: '06',
    title: 'Custom Business Tools',
    desc: 'Websites and software built around how your team already works.',
    tags: ['Custom App', 'Website', 'Setup'],
    icon: 'sparkles',
    href: '/contact?solution=custom',
    cta: 'Request Custom Tool',
  },
];

export default function Services() {
  return (
    <section id="bc-services" data-section="services">
      <div className="container">
        <div id="bc-services-header">
          <div className="section-tag">
            <span className="dot" />
            What We Do
          </div>
          <h2 className="bc-section-title">
            One Simple System<br />For Your Daily Work.
          </h2>
          <p className="bc-section-sub">
            Pick a ready-to-use tool or let us build one around your business.
          </p>
        </div>

        <div id="bc-services-grid">
          {SERVICES.map((s) => (
            <Link href={s.href} className="bc-card" key={s.num}>
              <div>
                <div className="bc-card-header">
                  <div className="bc-card-icon">
                    <Icon name={s.icon} size={20} />
                  </div>
                  <span className="bc-card-num">{s.num}</span>
                </div>
                <h3 className="bc-card-title">{s.title}</h3>
                <p className="bc-card-desc">{s.desc}</p>
              </div>
              <div>
                <div className="bc-card-tags">
                  {s.tags.map((t) => (
                    <span className="bc-tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="bc-card-link">
                  {s.cta}
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h10M8 4l3 3-3 3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
