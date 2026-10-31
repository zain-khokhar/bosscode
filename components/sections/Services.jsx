'use client';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const SERVICES = [
  {
    num: '01',
    title: 'Paper to Digital',
    desc: 'Turn registers into one searchable screen.',
    tags: ['Registers', 'Backup'],
    icon: 'file',
    href: '/solutions/shopledger',
    cta: 'See ShopLedger',
  },
  {
    num: '02',
    title: 'Orders & Staff Tasks',
    desc: 'Track orders and tasks in one place.',
    tags: ['Orders', 'Staff'],
    icon: 'clipboard',
    href: '/solutions/ordertrack',
    cta: 'See OrderTrack',
  },
  {
    num: '03',
    title: 'Accounts & Stock',
    desc: 'Sales, stock, and dues on one screen.',
    tags: ['Stock', 'Dues'],
    icon: 'store',
    href: '/solutions/shopledger',
    cta: 'See ShopLedger',
  },
  {
    num: '04',
    title: 'Clinic Bookings',
    desc: 'Daily patient queue and WhatsApp reminders.',
    tags: ['Bookings', 'WhatsApp'],
    icon: 'stethoscope',
    href: '/solutions/clinicflow',
    cta: 'See ClinicFlow',
  },
  {
    num: '05',
    title: 'WhatsApp Automation',
    desc: 'Auto bills, reminders, and instant replies.',
    tags: ['WhatsApp', 'Auto-reply'],
    icon: 'message',
    href: '/solutions/chatpilot',
    cta: 'See ChatPilot',
  },
  {
    num: '06',
    title: 'Websites & Custom Tools',
    desc: 'Built around how your business works.',
    tags: ['Website', 'Custom'],
    icon: 'sparkles',
    href: '/contact?solution=custom',
    cta: 'Ask Us',
  },
];

export default function Services() {
  return (
    <section id="bc-services" data-section="services">
      <div id="services" style={{ position: 'relative', top: '-90px' }} aria-hidden="true" />
      <div className="container">
        <div id="bc-services-header">
          <div className="section-tag">
            <span className="dot" />
            What We Do
          </div>
          <h2 className="bc-section-title">
            We Move Your Work<br />From Paper to Digital
          </h2>
          <p className="bc-section-sub">
            Simple tools to manage and automate your daily work.
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
