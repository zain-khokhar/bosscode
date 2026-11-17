'use client';
import { useState } from 'react';
import Link from 'next/link';

const PROBLEMS = [
  {
    id: 'registers',
    num: '01',
    tag: 'Retail & Wholesale',
    problem: 'Paper Registers & Lost Bills',
    symptom: 'Old parchi gets lost. Daily closing takes 2 hours.',
    solution: 'ShopLedger',
    href: '/solutions/shopledger',
    saving: 'Saves ~2 hrs every night',
    beforeTitle: 'Before · Paper Register',
    beforeLines: [
      'Parchi #412 missing from counter',
      'Calculator total mismatch: Rs 4,200',
      '2 hours spent matching cash at 10 PM',
    ],
    afterTitle: 'After · ShopLedger Screen',
    afterBadge: 'Closing in 10 secs',
    kpis: [
      { label: 'Today Sales', value: 'Rs 94,200', tone: 'ok' },
      { label: 'Cash Drawer', value: 'Rs 61,000', tone: 'blue' },
      { label: 'Saved Bills', value: '48 / 48', tone: 'ok' },
    ],
    rows: [
      { left: 'Bill #1048 · Walk-in Cash', right: 'Rs 3,450', status: 'Paid', tone: 'ok' },
      { left: 'Bill #1047 · Hamza Hardware', right: 'Rs 18,900', status: 'Digital', tone: 'blue' },
    ],
  },
  {
    id: 'udhaar',
    num: '02',
    tag: 'Shops & Distributors',
    problem: 'Udhaar & Stock Guesswork',
    symptom: 'Forgotten customer dues and sudden out-of-stock surprises.',
    solution: 'ShopLedger',
    href: '/solutions/shopledger',
    saving: 'Stops silent stock & cash leaks',
    beforeTitle: 'Before · Memory & Diary',
    beforeLines: [
      'Who owes Rs 24,500 from last month?',
      'Fast-selling item finished without warning',
      'Awkward phone calls for payment follow-up',
    ],
    afterTitle: 'After · Live Dues & Stock',
    afterBadge: 'Auto Alerts On',
    kpis: [
      { label: 'Total Udhaar', value: 'Rs 142,500', tone: 'warn' },
      { label: 'Low Stock Items', value: '3 items', tone: 'bad' },
      { label: 'Recovered Today', value: 'Rs 38,000', tone: 'ok' },
    ],
    rows: [
      { left: 'Al-Noor Traders · 12 days due', right: 'Rs 24,500', status: 'WA Sent ✓', tone: 'ok' },
      { left: 'Cooking Oil 5L · Shelf A2', right: '3 left', status: 'Reorder', tone: 'warn' },
    ],
  },
  {
    id: 'whatsapp',
    num: '03',
    tag: 'Online & WhatsApp Sellers',
    problem: 'Orders Lost in WhatsApp Chats',
    symptom: '100+ daily messages. Pending orders get buried and missed.',
    solution: 'OrderTrack',
    href: '/solutions/ordertrack',
    saving: '0 missed customer orders',
    beforeTitle: 'Before · Messy Chat Scroll',
    beforeLines: [
      '47 unread chats — who paid advance?',
      'Staff forgot to pack Gulshan delivery',
      'Customers asking "order kahan pohancha?"',
    ],
    afterTitle: 'After · OrderTrack Board',
    afterBadge: 'All Orders Synced',
    kpis: [
      { label: 'New Today', value: '26 orders', tone: 'blue' },
      { label: 'Ready to Ship', value: '11 parcels', tone: 'warn' },
      { label: 'Missed Orders', value: '0', tone: 'ok' },
    ],
    rows: [
      { left: '#1042 · Ayesha Boutique (COD)', right: 'Rs 6,800', status: 'Packing', tone: 'blue' },
      { left: '#1043 · Bilal Autos (Advance)', right: 'Rs 14,200', status: 'Rider Out', tone: 'ok' },
    ],
  },
  {
    id: 'clinic',
    num: '04',
    tag: 'Clinics & Labs',
    problem: 'Crowded Waiting Room & Files',
    symptom: 'Token mix-ups, lost patient history, and manual reminders.',
    solution: 'ClinicFlow',
    href: '/solutions/clinicflow',
    saving: 'Calm counter, 2x faster check-in',
    beforeTitle: 'Before · Paper Slip Queue',
    beforeLines: [
      'Patients arguing over turn numbers',
      'Old prescription file not found in rack',
      'No-shows because nobody reminded them',
    ],
    afterTitle: 'After · ClinicFlow Queue',
    afterBadge: 'WhatsApp Tokens',
    kpis: [
      { label: 'Checked Today', value: '34 patients', tone: 'ok' },
      { label: 'Waiting Now', value: '6 patients', tone: 'blue' },
      { label: 'Avg Wait', value: '11 mins', tone: 'ok' },
    ],
    rows: [
      { left: 'Token #14 · Sara Khan', right: 'Dr. Room 1', status: 'Inside', tone: 'ok' },
      { left: 'Token #15 · Tariq Mehmood', right: 'Next', status: 'WA Notified', tone: 'blue' },
    ],
  },
  {
    id: 'billing',
    num: '05',
    tag: 'Offices & Service Teams',
    problem: 'Hours Wasted Typing Bills',
    symptom: 'Same invoices and payment reminders typed manually every day.',
    solution: 'BillBot',
    href: '/solutions/billbot',
    saving: 'Bills sent in 1 click',
    beforeTitle: 'Before · Manual Word / Excel',
    beforeLines: [
      'Copy-pasting customer names into PDFs',
      'Forgetting to send monthly fee reminders',
      'No clear list of who paid vs pending',
    ],
    afterTitle: 'After · BillBot Auto-Billing',
    afterBadge: 'Auto-Reminders',
    kpis: [
      { label: 'Billed This Week', value: 'Rs 285,000', tone: 'blue' },
      { label: 'Auto-Collected', value: '88%', tone: 'ok' },
      { label: 'Pending Follow-up', value: '4 bills', tone: 'warn' },
    ],
    rows: [
      { left: 'Inv #884 · Zainab Textiles', right: 'Rs 32,000', status: 'Sent on WA ✓', tone: 'ok' },
      { left: 'Inv #885 · Metro Logistics', right: 'Rs 19,500', status: 'Due in 2d', tone: 'warn' },
    ],
  },
];

export default function CapabilityFan() {
  const [activeIdx, setActiveIdx] = useState(0);
  const item = PROBLEMS[activeIdx];

  return (
    <section id="bc-fan" data-section="capabilities">
      <div className="container">
        <div id="bc-fan-header">
          <div className="section-tag">
            <span className="dot" />
            Problems We Fix
          </div>
          <div id="bc-fan-header-bottom">
            <h2 id="bc-fan-title">
              Daily Headaches,<br />Solved Simply.
            </h2>
            <p id="bc-fan-sub">
              Tap any problem below to see how our software turns daily mess into one clear screen.
            </p>
          </div>
        </div>

        <div className="bc-fix-layout">
          {/* Left: 5 Real Business Problems */}
          <div className="bc-fix-list" role="tablist" aria-label="Business problems we fix">
            {PROBLEMS.map((p, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`bc-fix-item${isActive ? ' is-active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className="bc-fix-item-num">{p.num}</div>
                  <div className="bc-fix-item-body">
                    <div className="bc-fix-item-tag">{p.tag}</div>
                    <div className="bc-fix-item-title">{p.problem}</div>
                    <div className="bc-fix-item-symptom">{p.symptom}</div>
                  </div>
                  <span className="bc-fix-item-arrow" aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>

          {/* Right: Live Before -> After Proof Stage */}
          <div className="bc-fix-stage" role="tabpanel" aria-label={item.problem}>
            {/* Top: Before Card (Paper / Manual Mess) */}
            <div className="bc-fix-before">
              <div className="bc-fix-before-head">
                <span className="bc-fix-pill-bad">{item.beforeTitle}</span>
                <span className="bc-fix-tag-muted">{item.tag}</span>
              </div>
              <ul className="bc-fix-before-list">
                {item.beforeLines.map((line) => (
                  <li key={line}>
                    <span className="bc-fix-x" aria-hidden="true">✕</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Connector */}
            <div className="bc-fix-connector">
              <span className="bc-fix-connector-line" aria-hidden="true" />
              <span className="bc-fix-connector-badge">
                Fixed with {item.solution}
              </span>
              <span className="bc-fix-connector-line" aria-hidden="true" />
            </div>

            {/* Bottom: After Card (Live BossCode Screen) */}
            <div className="bc-fix-after">
              <div className="bc-fix-after-head">
                <div className="bc-fix-after-title">
                  <span className="bc-fix-live-dot" />
                  <strong>{item.afterTitle}</strong>
                </div>
                <span className="bc-fix-pill-ok">{item.afterBadge}</span>
              </div>

              <div className="bc-fix-kpis">
                {item.kpis.map((kpi) => (
                  <div className="bc-fix-kpi" key={kpi.label}>
                    <small>{kpi.label}</small>
                    <strong className={`bc-fix-tone-${kpi.tone}`}>{kpi.value}</strong>
                  </div>
                ))}
              </div>

              <div className="bc-fix-rows">
                {item.rows.map((row) => (
                  <div className="bc-fix-row" key={row.left}>
                    <span className="bc-fix-row-left">{row.left}</span>
                    <div className="bc-fix-row-right">
                      <strong>{row.right}</strong>
                      <span className={`bc-fix-status bc-fix-status-${row.tone}`}>{row.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bc-fix-after-foot">
                <span className="bc-fix-saving">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 12 2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  {item.saving}
                </span>
                <Link href={item.href} className="bc-fix-cta">
                  See {item.solution} Preview →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
