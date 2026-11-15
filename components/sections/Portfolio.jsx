'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const PROJECTS = [
  {
    name: 'ShopLedger',
    category: 'Retail management',
    title: 'Stock and credit, without the guesswork.',
    pain: 'Know what sold, what is low, and who still owes you.',
    features: ['Stock alerts', 'Daily sales', 'Customer credit'],
    paper: ['Rice, 20 bags?', 'Sugar, finished?', 'Ahmed owes... 12,500?', 'Today sales: ???'],
    menu: ['Dashboard', 'Stock', 'Sales', 'Credit', 'Reports'],
    stats: [['Sales today', 'Rs 148,500'], ['Low stock', '3 items'], ['Credit due', 'Rs 62,000']],
    listTitle: 'Low stock',
    list: ['Basmati rice 5kg', 'Sugar 1kg', 'Cooking oil 3L'],
    href: '/solutions/shopledger',
  },
  {
    name: 'ClinicFlow',
    category: 'Clinic management',
    title: 'Appointments and patient files, together.',
    pain: 'Keep every booking, note, and reminder ready for your team.',
    features: ['Daily appointments', 'Patient files', 'WhatsApp reminders'],
    paper: ['Dr. Ali, 4pm?', 'File #284 is missing', 'Call patient tomorrow', 'Paid? Ask reception'],
    menu: ['Today', 'Patients', 'Appointments', 'Payments', 'Reports'],
    stats: [['Today', '18 visits'], ['Waiting', '4 patients'], ['Collected', 'Rs 42,000']],
    listTitle: 'Today’s appointments',
    list: ['Sana Malik · 10:30', 'Hassan Raza · 11:15', 'Nadia Ahmed · 12:00'],
    href: '/solutions/clinicflow',
  },
  {
    name: 'BillBot',
    category: 'Billing automation',
    title: 'Bills and reminders, ready on time.',
    pain: 'Send clear bills and payment reminders without repeating the same work.',
    features: ['Quick billing', 'Dues tracking', 'WhatsApp follow-ups'],
    paper: ['Invoice #1024?', 'Send bill to Hamza', 'Who paid this week?', 'Reminder... later'],
    menu: ['Overview', 'Invoices', 'Customers', 'Reminders', 'Reports'],
    stats: [['Billed today', 'Rs 86,400'], ['Due this week', 'Rs 21,500'], ['Sent', '32 bills']],
    listTitle: 'Payment follow-ups',
    list: ['Hamza Traders · Rs 8,500', 'Muneeb Store · Rs 6,200', 'Adeel Khan · Rs 3,800'],
    href: '/solutions/billbot',
  },
];

function PaperNotes({ lines }) {
  return (
    <div className="bc-portfolio-paper" aria-hidden="true">
      {lines.map((line, index) => <p className={index === 1 ? 'is-crossed' : ''} key={line}>{line}</p>)}
    </div>
  );
}

function DigitalPreview({ project }) {
  return (
    <div className="bc-portfolio-app" aria-hidden="true">
      <aside className="bc-portfolio-sidebar">
        <div className="bc-portfolio-logo">BC</div>
        {project.menu.map((item, index) => <span className={index === 0 ? 'is-active' : ''} key={item}>{item}</span>)}
      </aside>
      <div className="bc-portfolio-dashboard">
        <div className="bc-portfolio-toolbar">
          <strong>{project.name}</strong>
          <span className="bc-portfolio-search">Search</span>
          <span className="bc-portfolio-add">+ Add</span>
        </div>
        <div className="bc-portfolio-stats">
          {project.stats.map(([label, value]) => <div key={label}><small>{label}</small><b>{value}</b></div>)}
        </div>
        <div className="bc-portfolio-panel">
          <div className="bc-portfolio-panel-heading"><span>{project.listTitle}</span><small>View all</small></div>
          {project.list.map((item, index) => (
            <div className="bc-portfolio-row" key={item}>
              <i>{String(index + 1).padStart(2, '0')}</i>
              <span>{item}</span>
              <em className={index === 1 ? 'is-warn' : ''}>{index === 1 ? 'Follow up' : 'Ready'}</em>
            </div>
          ))}
        </div>
        <div className="bc-portfolio-chart">
          <span /><span /><span /><span /><span /><span /><span />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [digital, setDigital] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setDigital(true);
    }, { rootMargin: '-28% 0px -28% 0px' });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={cardRef} className={`bc-project-card${digital ? ' is-digital' : ''}`} style={{ '--project-index': index }}>
      <div className="bc-project-info">
        <div>
          <div className="bc-project-meta">
            <span className="bc-project-number">0{index + 1} / 03</span>
            <span className="bc-project-cat">{project.category}</span>
          </div>
          <h3 className="bc-project-title">{project.title}</h3>
          <p className="bc-project-desc">{project.pain}</p>
          <ul className="bc-project-tags">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
        <div className="bc-project-bottom">
          <button type="button" className="bc-project-toggle" onClick={() => setDigital((value) => !value)}>
            {digital ? 'Show paper version' : 'Show digital version'}
          </button>
          <Link href={project.href} className="bc-project-cta">
            Explore {project.name}
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 2h10v10M12 2L2 12" /></svg>
          </Link>
        </div>
      </div>
      <div className="bc-project-visual" role="img" aria-label={`${project.name} turns paper notes into a simple digital dashboard`}>
        <DigitalPreview project={project} />
        <PaperNotes lines={project.paper} />
        <i className="bc-project-scan" />
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="bc-portfolio" data-section="work">
      <div id="work" style={{ position: 'relative', top: '-90px' }} aria-hidden="true" />
      <div className="container">
        <header id="bc-portfolio-header">
          <div>
            <div className="section-tag"><span className="dot" />Our software</div>
            <h2 id="bc-portfolio-title">The work you do.<br /><span>Made simpler.</span></h2>
          </div>
          <p id="bc-portfolio-sub">See how paper notes become clear, useful systems for your everyday work.</p>
        </header>
        <div id="bc-portfolio-list">
          {PROJECTS.map((project, index) => <ProjectCard project={project} index={index} key={project.name} />)}
        </div>
        <div className="bc-portfolio-end">
          <h3>Don’t see your business?</h3>
          <p>Tell us how you work. We’ll show you what can be simpler.</p>
          <div className="bc-portfolio-actions">
            <Link href="#contact" className="btn btn-primary">Tell us your problem</Link>
            <a className="btn btn-secondary" href="https://wa.me/923197542768">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
