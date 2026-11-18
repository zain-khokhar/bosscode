'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const SYSTEMS = [
  {
    id: 'boutique-rental',
    num: '01',
    shortLabel: 'Boutique Rental',
    theme: 'light',
    badge: '01 / 03 · ALREADY DEVELOPED',
    securityBadge: 'Offline + Online · Secure Desktop',
    title: 'Boutique Rental Management System',
    summary:
      'Manage bridal & formal dress bookings, fitting dates, security deposits, and returns with zero date clashes.',
    features: [
      {
        title: 'Date-Clash Lock',
        desc: 'Blocks double-booking any dress on overlapping dates.',
      },
      {
        title: 'Security Deposit & Balance',
        desc: 'Tracks advance, deposit, and return refunds in Rs.',
      },
      {
        title: 'Tailor & Dry-Clean Status',
        desc: 'Knows what is at fitting, laundry, or ready on rack.',
      },
      {
        title: 'Offline + Online Backup',
        desc: 'Works without internet and syncs encrypted backups.',
      },
    ],
    windowTitle: 'BossCode Boutique Rental · Desktop',
    syncLabel: 'Offline Ready · Encrypted',
    kpis: [
      { label: 'Booked This Week', value: '24 Dresses', tone: 'blue' },
      { label: 'Security Held', value: 'Rs 185,000', tone: 'ok' },
      { label: 'Date Clashes', value: '0 Conflicts', tone: 'ok' },
    ],
    rows: [
      {
        code: '#BR-408',
        name: 'Crimson Bridal Lehnga',
        meta: 'Return: 21 Nov · Deposit Rs 15,000',
        status: 'On Rent',
        tone: 'blue',
      },
      {
        code: '#BR-409',
        name: 'Ivory Sherwani (Size 40)',
        meta: 'Fitting: Today 5 PM · Adv Rs 8,000',
        status: 'At Tailor',
        tone: 'warn',
      },
      {
        code: '#BR-410',
        name: 'Emerald Velvet Maxi',
        meta: '24–26 Nov · Clash Check Passed',
        status: 'Ready',
        tone: 'ok',
      },
    ],
    footerNote: 'Local Encrypted DB + Auto Cloud Sync',
    demoHref: '/contact?solution=boutique-rental',
    waText:
      'Assalam o Alaikum BossCode, mujhe Boutique Rental Management System ka desktop demo dekhna hai.',
  },
  {
    id: 'school-management',
    num: '02',
    shortLabel: 'School System',
    theme: 'dark',
    badge: '02 / 03 · ALREADY DEVELOPED',
    securityBadge: 'Offline + Online · Secure Desktop',
    title: 'School Management System',
    summary:
      'Handle student admissions, monthly fee challans, attendance, exam results, and parent WhatsApp alerts from one desktop.',
    features: [
      {
        title: '1-Click Fee Challans',
        desc: 'Print monthly challans and spot unpaid dues fast.',
      },
      {
        title: 'Attendance & Parent Alerts',
        desc: 'Mark class attendance and notify parents on WhatsApp.',
      },
      {
        title: 'Exams & Report Cards',
        desc: 'Auto-calculate grades, positions, and clean mark sheets.',
      },
      {
        title: 'Role-Based Security',
        desc: 'Separate PINs for Principal, Accountant, and Teachers.',
      },
    ],
    windowTitle: 'BossCode School Suite · Desktop',
    syncLabel: 'Offline + Cloud Sync',
    kpis: [
      { label: 'Total Students', value: '840', tone: 'blue' },
      { label: 'Fees Collected', value: 'Rs 1,420,000', tone: 'ok' },
      { label: 'Today Attendance', value: '94%', tone: 'ok' },
    ],
    rows: [
      {
        code: 'CLS-9A',
        name: 'Class 9-A Morning Roll',
        meta: '38 / 40 Present · 2 Absent Alerts Sent',
        status: 'Marked ✓',
        tone: 'ok',
      },
      {
        code: '#CH-2214',
        name: 'Zainab Ali · Grade 6',
        meta: 'Monthly Fee · Rs 6,500',
        status: 'Paid',
        tone: 'ok',
      },
      {
        code: '#CH-2215',
        name: 'Hamza Tariq · Grade 8',
        meta: 'Monthly Fee · Rs 6,500 Due',
        status: 'WA Reminded',
        tone: 'warn',
      },
    ],
    footerNote: 'Encrypted Student Records · Role PIN Protected',
    demoHref: '/contact?solution=school-management',
    waText:
      'Assalam o Alaikum BossCode, mujhe School Management System ka desktop demo dekhna hai.',
  },
  {
    id: 'retail-management',
    num: '03',
    shortLabel: 'Retail POS',
    theme: 'soft',
    badge: '03 / 03 · ALREADY DEVELOPED',
    securityBadge: 'Offline + Online · Secure Desktop',
    title: 'Retail Management System',
    summary:
      'Fast barcode POS billing, live stock alerts, supplier ledgers, and customer udhaar — built to run even when internet drops.',
    features: [
      {
        title: '3-Second Barcode POS',
        desc: 'Scan items and print thermal receipts without lag.',
      },
      {
        title: 'Stock & Expiry Warnings',
        desc: 'Alerts before fast-moving items or batches run out.',
      },
      {
        title: 'Udhaar & Supplier Ledger',
        desc: 'Track customer credit, supplier bills, and daily profit.',
      },
      {
        title: 'Zero-Downtime Offline Mode',
        desc: 'Counter billing never stops; syncs to owner phone.',
      },
    ],
    windowTitle: 'BossCode Retail POS · Desktop',
    syncLabel: 'Offline POS Ready · Encrypted',
    kpis: [
      { label: 'Today Counter Sales', value: 'Rs 148,500', tone: 'ok' },
      { label: 'Bills Printed', value: '112', tone: 'blue' },
      { label: 'Low Stock Alerts', value: '4 Items', tone: 'warn' },
    ],
    rows: [
      {
        code: '#POS-8841',
        name: 'Walk-in Counter Sale (6 Items)',
        meta: 'Cash Rs 4,250 · Thermal Receipt',
        status: 'Printed',
        tone: 'ok',
      },
      {
        code: 'STK-109',
        name: 'Cooking Oil 5L · Shelf A2',
        meta: 'Only 4 units left in store',
        status: 'Reorder',
        tone: 'warn',
      },
      {
        code: 'UDH-204',
        name: 'Al-Noor Traders · Credit',
        meta: 'Balance Rs 24,500 · Synced',
        status: 'Synced',
        tone: 'blue',
      },
    ],
    footerNote: 'Works 100% Offline · Syncs When Online',
    demoHref: '/contact?solution=retail-management',
    waText:
      'Assalam o Alaikum BossCode, mujhe Retail Management System ka desktop demo dekhna hai.',
  },
];

export default function SoftwareShowcase() {
  const [activeId, setActiveId] = useState(SYSTEMS[0].id);

  useEffect(() => {
    const sections = SYSTEMS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSystem = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sw-wrap">
      {/* Floating Right-Side Scroll Progress Rail */}
      <nav className="sw-rail" aria-label="Jump to software">
        {SYSTEMS.map((sys) => (
          <button
            key={sys.id}
            type="button"
            className={`sw-rail-btn${activeId === sys.id ? ' is-active' : ''}`}
            onClick={() => scrollToSystem(sys.id)}
          >
            <span className="sw-rail-num">{sys.num}</span>
            <span className="sw-rail-label">{sys.shortLabel}</span>
          </button>
        ))}
      </nav>

      {/* Full-Screen Software Chapters */}
      {SYSTEMS.map((sys, idx) => {
        const nextSys = SYSTEMS[idx + 1];
        const isDark = sys.theme === 'dark';

        return (
          <section
            key={sys.id}
            id={sys.id}
            className={`sw-screen sw-screen--${sys.theme}`}
          >
            {isDark && <div className="arch-grid arch-grid--dark" aria-hidden="true" />}
            {!isDark && <div className="arch-grid" aria-hidden="true" />}

            <div className="container sw-container">
              <div className="sw-grid">
                {/* Left: Clear Software Info */}
                <div className="sw-copy">
                  <div className="sw-badges">
                    <span className={`sw-badge-main${isDark ? ' is-dark' : ''}`}>
                      <span className="sw-badge-dot" />
                      {sys.badge}
                    </span>
                    <span className={`sw-badge-sec${isDark ? ' is-dark' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      {sys.securityBadge}
                    </span>
                  </div>

                  <h2 className="sw-title">{sys.title}</h2>
                  <p className="sw-summary">{sys.summary}</p>

                  <div className="sw-features">
                    {sys.features.map((feat) => (
                      <div className="sw-feat" key={feat.title}>
                        <span className="sw-feat-check" aria-hidden="true">✓</span>
                        <div>
                          <strong>{feat.title}</strong>
                          <small>{feat.desc}</small>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sw-actions">
                    <Link
                      href={sys.demoHref}
                      className={`btn ${isDark ? 'btn-white' : 'btn-primary'}`}
                    >
                      Book Live Desktop Demo →
                    </Link>
                    <a
                      href={`https://wa.me/923197542768?text=${encodeURIComponent(sys.waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`sw-wa-btn${isDark ? ' is-dark' : ''}`}
                    >
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Right: Desktop Software Preview Window */}
                <div className="sw-visual">
                  <div className={`sw-window${isDark ? ' is-dark' : ''}`}>
                    {/* Desktop Title Bar */}
                    <div className="sw-win-bar">
                      <div className="sw-win-dots" aria-hidden="true">
                        <span /><span /><span />
                      </div>
                      <span className="sw-win-title">{sys.windowTitle}</span>
                      <span className="sw-win-sync">
                        <i />
                        {sys.syncLabel}
                      </span>
                    </div>

                    {/* Desktop Window Body */}
                    <div className="sw-win-body">
                      <div className="sw-win-kpis">
                        {sys.kpis.map((kpi) => (
                          <div className="sw-win-kpi" key={kpi.label}>
                            <small>{kpi.label}</small>
                            <strong className={`sw-tone-${kpi.tone}`}>{kpi.value}</strong>
                          </div>
                        ))}
                      </div>

                      <div className="sw-win-list">
                        {sys.rows.map((row) => (
                          <div className="sw-win-row" key={row.code}>
                            <span className="sw-win-code">{row.code}</span>
                            <div className="sw-win-row-info">
                              <strong>{row.name}</strong>
                              <small>{row.meta}</small>
                            </div>
                            <span className={`sw-win-pill sw-pill-${row.tone}`}>
                              {row.status}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="sw-win-foot">
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                          {sys.footerNote}
                        </span>
                        <span className="sw-win-os">Windows Desktop</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Software Scroll Cue */}
              {nextSys && (
                <button
                  type="button"
                  className={`sw-next-cue${isDark ? ' is-dark' : ''}`}
                  onClick={() => scrollToSystem(nextSys.id)}
                >
                  <span>Next: {nextSys.num} · {nextSys.title}</span>
                  <span className="sw-next-arrow" aria-hidden="true">↓</span>
                </button>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
