'use client';

const SERVICES = [
  {
    num: '01',
    title: 'Move From Paper to Digital',
    desc: 'Replace registers, notebooks and loose files with one simple system. Everything is saved, easy to find and safe.',
    tags: ['Digital Records', 'Registers', 'Files', 'Backup'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="16" height="13" rx="2"/>
        <path d="M8 7l-2 2 2 2M12 7l2 2-2 2M10 7v6"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Manage Your Work Better',
    desc: 'Keep orders, tasks and staff in one place, so nothing gets missed or forgotten.',
    tags: ['Orders', 'Tasks', 'Staff', 'Reports'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8"/>
        <path d="M10 6v4l3 3"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Accounts & Stock System',
    desc: 'Sales, stock, dues and expenses on one clean screen. No more notebooks and messy Excel sheets.',
    tags: ['Accounts', 'Stock', 'Dues', 'Reports'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 14l4-4 3 3 5-5 4 4"/>
        <path d="M18 6l-2 2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Automate Repetitive Work',
    desc: 'Bills, reports and follow-ups that someone types by hand every day can run on their own.',
    tags: ['Billing', 'Reports', 'Follow-ups', 'Automation'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 10a5 5 0 0 1 9.5-2H16a3 3 0 0 1 0 6H5a4 4 0 0 1 0-8"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'WhatsApp & Messaging Automation',
    desc: 'Order confirmations, payment reminders and common replies can go out automatically.',
    tags: ['WhatsApp', 'Reminders', 'Auto-reply'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="17" y2="6"/>
        <path d="M12 10a2 2 0 0 1-4 0"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Websites & Custom Tools',
    desc: 'Need a website, or a tool made just for the way you work? We build it once we understand your work.',
    tags: ['Website', 'Custom', 'Apps', 'Integration'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="2"/>
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"/>
      </svg>
    ),
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
            We Move Your Work<br />From Paper to Digital
          </h2>
          <p className="bc-section-sub">
            We help you manage your work more efficiently and automate the repetitive parts.
          </p>
        </div>

        <div id="bc-services-grid">
          {SERVICES.map((s, i) => (
            <article className="bc-card" key={i} tabIndex={0} role="article">
              <div>
                <div className="bc-card-header">
                  <div className="bc-card-icon">{s.icon}</div>
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
                  Learn more
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h10M8 4l3 3-3 3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
