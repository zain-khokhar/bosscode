'use client';
import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const PROBLEMS = [
  {
    id: 'paper',
    num: '01',
    icon: 'file',
    title: 'Paper Registers Everywhere',
    pain: 'Bills and old records buried in notebooks. If a register is lost, everything is gone.',
    fix: 'Every bill and record saved in 3 taps, backed up in the cloud, and searchable in 2 seconds.',
    tool: 'ShopLedger',
    href: '/solutions/shopledger',
    metric: 'Find any bill in 2 sec',
  },
  {
    id: 'whatsapp',
    num: '02',
    icon: 'message',
    title: 'Orders Lost in WhatsApp',
    pain: 'Customer orders arrive in chats and calls. Some get missed and deadlines slip.',
    fix: 'Every order tracked on one shared board from New → Working → Ready → Delivered.',
    tool: 'OrderTrack',
    href: '/solutions/ordertrack',
    metric: 'Zero missed orders',
  },
  {
    id: 'udhaar',
    num: '03',
    icon: 'wallet',
    title: 'Stock & Udhaar in Memory',
    pain: 'Guessing how much stock is left and who owes money from a diary or memory.',
    fix: 'Live low-stock warnings plus an exact customer udhaar list with 1-tap reminders.',
    tool: 'ShopLedger',
    href: '/solutions/shopledger',
    metric: '100% dues visibility',
  },
  {
    id: 'typing',
    num: '04',
    icon: 'clock',
    title: 'Same Manual Typing Daily',
    pain: 'Hours wasted typing repeat bills, chasing payments, and building reports at night.',
    fix: 'Scheduled invoices, polite WhatsApp nudges, and morning summaries run on autopilot.',
    tool: 'BillBot',
    href: '/solutions/billbot',
    metric: '2+ hours saved daily',
  },
  {
    id: 'unsure',
    num: '05',
    icon: 'sparkles',
    title: 'Not Sure Where to Start?',
    pain: 'You know paper is slowing you down, but don\'t want something complicated for your staff.',
    fix: 'We sit with you for a free 15-minute check-up and show the simplest first step.',
    tool: 'Free Check-up',
    href: '/contact',
    metric: 'Free · No obligation',
  },
];

export default function CapabilityFan() {
  const [active, setActive] = useState(0);
  const current = PROBLEMS[active];

  return (
    <section id="bc-fan" data-section="capabilities">
      <div className="container">
        <div id="bc-fan-header">
          <div className="section-tag">
            <span className="dot" />
            Sound Familiar?
          </div>
          <div id="bc-fan-header-bottom">
            <h2 id="bc-fan-title">Tap Your Problem.<br />See Our Fix.</h2>
            <p id="bc-fan-sub">
              Pick the headache you deal with today to see how we solve it.
            </p>
          </div>
        </div>

        <div id="bc-fan-interactive">
          {/* Left: 5 Clickable Problem Tabs */}
          <div className="bc-fan-tabs" role="tablist" aria-label="Common business problems">
            {PROBLEMS.map((p, idx) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === idx}
                className={`bc-fan-tab${active === idx ? ' active' : ''}`}
                onClick={() => setActive(idx)}
              >
                <span className="bc-fan-tab-num">{p.num}</span>
                <span className="bc-fan-tab-icon">
                  <Icon name={p.icon} size={18} />
                </span>
                <span className="bc-fan-tab-title">{p.title}</span>
                <Icon name="arrow" size={15} className="bc-fan-tab-arrow" />
              </button>
            ))}
          </div>

          {/* Right: Visual Before vs. After Card */}
          <div className="bc-fan-panel" key={current.id} role="tabpanel">
            <div className="bc-fan-panel-top">
              <span className="bc-fan-panel-badge">
                <Icon name={current.icon} size={14} /> Problem {current.num}
              </span>
              <span className="bc-fan-panel-metric">
                <Icon name="check" size={14} /> {current.metric}
              </span>
            </div>

            <h3 className="bc-fan-panel-title">{current.title}</h3>

            <div className="bc-fan-compare">
              <div className="bc-fan-box bc-fan-box--pain">
                <div className="bc-fan-box-label">
                  <Icon name="x" size={15} /> On Paper Today
                </div>
                <p>{current.pain}</p>
              </div>

              <div className="bc-fan-box bc-fan-box--fix">
                <div className="bc-fan-box-label">
                  <Icon name="check" size={15} /> With {current.tool}
                </div>
                <p>{current.fix}</p>
              </div>
            </div>

            <div className="bc-fan-panel-actions">
              <Link href={current.href} className="btn btn-primary">
                Explore {current.tool} <Icon name="arrow" size={16} />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Ask on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
