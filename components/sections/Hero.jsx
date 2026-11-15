'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const FLOW_DATA = [
  {
    key: 'records',
    label: 'Records',
    paper: 'piles of paper',
    digital: '1,240 filed',
    before: 'Files and registers pile up. Finding one old record means digging through paper.',
    after: 'Every record is stored once and found in seconds, from any phone.',
  },
  {
    key: 'accounts',
    label: 'Accounts',
    paper: 'in a notebook',
    digital: 'Rs 62,000 due',
    before: "Balances live in a notebook. Who owes what depends on someone's memory.",
    after: 'Live balances and due dates on one screen, with reminders sent for you.',
  },
  {
    key: 'orders',
    label: 'Orders',
    paper: 'lost in WhatsApp',
    digital: '18 open',
    before: 'Orders arrive as WhatsApp messages and get buried under new chats.',
    after: 'Every order is logged and tracked from request to delivery.',
  },
  {
    key: 'daily',
    label: 'Daily work',
    paper: 'only in my head',
    digital: '7 of 9 done',
    before: 'Daily tasks are remembered, not recorded, so things slip.',
    after: "A daily view of what's done, what's pending and who's on it.",
  },
];

const DESKTOP_SOURCES = [
  { x: 16, y: 38, rotate: -2 },
  { x: 16, y: 142, rotate: 1.5 },
  { x: 16, y: 246, rotate: -1 },
  { x: 16, y: 350, rotate: 2 },
];
const MOBILE_SOURCES = [
  { x: 24, y: 22, rotate: -2 },
  { x: 24, y: 114, rotate: 1.5 },
  { x: 24, y: 206, rotate: -1 },
  { x: 24, y: 298, rotate: 2 },
];

function PaperCard({ item, index, position, activeKey, onActivate }) {
  const isActive = activeKey === item.key;
  return (
    <g
      className={`paper-flow-source${isActive ? ' is-active' : ''}`}
      transform={`translate(${position.x} ${position.y}) rotate(${position.rotate} 102 37)`}
      tabIndex="0"
      role="button"
      aria-label={`Show how ${item.label} changes`}
      aria-pressed={isActive}
      onClick={() => onActivate(item.key)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onActivate(item.key);
        }
      }}
    >
      <rect className="paper-flow-card" width="204" height="74" rx="10" />
      <path className="paper-flow-rule" d="M16 48h172M16 58h172" />
      <text className="paper-flow-label" x="16" y="27">{item.label}</text>
      <text className="paper-flow-scribble" x="16" y="66">{item.paper}</text>
      <text className="paper-flow-index" x="184" y="20" textAnchor="end">0{index + 1}</text>
    </g>
  );
}

function Dashboard({ mobile = false, activeKey }) {
  const x = mobile ? 32 : 516;
  const y = mobile ? 424 : 174;
  return (
    <g className="paper-flow-dashboard" transform={`translate(${x} ${y})`}>
      <rect className="paper-flow-dashboard-card" width={mobile ? 336 : 218} height={mobile ? 218 : 260} rx="16" />
      <text className="paper-flow-dashboard-title" x="18" y="30">Your business</text>
      <text className="paper-flow-dashboard-subtitle" x="18" y="49">One screen. Always current.</text>
      {FLOW_DATA.map((item, index) => {
        const rowY = 68 + index * (mobile ? 32 : 37);
        return (
          <g className={`paper-flow-row${activeKey === item.key ? ' is-active' : ''}`} key={item.key}>
            <rect x="12" y={rowY - 16} width={mobile ? 312 : 194} height="28" rx="7" />
            <circle className="paper-flow-status" cx="25" cy={rowY - 2} r="3" />
            <text className="paper-flow-row-label" x="36" y={rowY + 2}>{item.label}</text>
            <text className="paper-flow-row-value" x={mobile ? 310 : 194} y={rowY + 2} textAnchor="end">{item.digital}</text>
          </g>
        );
      })}
      <g className="paper-flow-chart" transform={`translate(18 ${mobile ? 190 : 220})`}>
        <path d={`M0 22h${mobile ? 300 : 180}`} />
        <rect x="10" y="8" width="12" height="14" rx="2" />
        <rect x="40" y="1" width="12" height="21" rx="2" />
        <rect x="70" y="11" width="12" height="11" rx="2" />
        <rect x="100" y="-7" width="12" height="29" rx="2" />
        <rect x="130" y="4" width="12" height="18" rx="2" />
        <rect x="160" y="-14" width="12" height="36" rx="2" />
      </g>
    </g>
  );
}

function FlowSvg({ mobile = false, activeKey, onActivate }) {
  const positions = mobile ? MOBILE_SOURCES : DESKTOP_SOURCES;
  const sourceCenterX = mobile ? 126 : 118;
  const hub = mobile ? { x: 200, y: 378 } : { x: 388, y: 212 };
  const dashboardLine = mobile ? 'M200 410V424' : 'M432 212h84';
  return (
    <svg
      className={`paper-flow-svg${mobile ? ' paper-flow-svg-mobile' : ''}`}
      viewBox={mobile ? '0 0 400 660' : '0 0 760 470'}
      role="img"
      aria-label="Paper records, accounts, orders and daily work flowing into one BossCode digital business dashboard"
    >
      <defs>
        <filter id={`hub-glow-${mobile ? 'mobile' : 'desktop'}`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g className="paper-flow-connections">
        {positions.map((position, index) => {
          const startY = position.y + 37;
          const path = mobile
            ? `M${sourceCenterX} ${startY} C150 ${startY}, 176 ${hub.y - 62}, ${hub.x} ${hub.y - 25}`
            : `M${sourceCenterX} ${startY} C218 ${startY}, 276 ${hub.y + (index - 1.5) * 20}, ${hub.x - 25} ${hub.y}`;
          return (
            <g className={`paper-flow-connection${activeKey === FLOW_DATA[index].key ? ' is-active' : ''}`} key={FLOW_DATA[index].key}>
              <path id={`paper-flow-path-${mobile ? 'm' : 'd'}-${FLOW_DATA[index].key}`} d={path} />
              <circle className="paper-flow-traveller" r="4">
                <animateMotion dur="3.6s" begin={`${index * 0.6}s`} repeatCount="indefinite" path={path} />
              </circle>
            </g>
          );
        })}
        <path className="paper-flow-hub-line" d={dashboardLine} />
        <circle className="paper-flow-traveller paper-flow-traveller-after" r="4">
          <animateMotion dur="2.4s" begin="0.8s" repeatCount="indefinite" path={dashboardLine} />
        </circle>
      </g>
      <g className="paper-flow-hub" transform={`translate(${hub.x} ${hub.y})`} filter={`url(#hub-glow-${mobile ? 'mobile' : 'desktop'})`}>
        <circle className="paper-flow-pulse" r="43" />
        <circle className="paper-flow-hub-core" r="29" />
        <text className="paper-flow-hub-mark" textAnchor="middle" y="6">BC</text>
        <text className="paper-flow-hub-caption" textAnchor="middle" y="51">one system</text>
      </g>
      {FLOW_DATA.map((item, index) => (
        <PaperCard
          key={item.key}
          item={item}
          index={index}
          position={positions[index]}
          activeKey={activeKey}
          onActivate={onActivate}
        />
      ))}
      <Dashboard mobile={mobile} activeKey={activeKey} />
    </svg>
  );
}

export default function Hero() {
  const [activeKey, setActiveKey] = useState(FLOW_DATA[0].key);
  const cycleRef = useRef(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!cycleRef.current) return;
      setActiveKey((current) => {
        const index = FLOW_DATA.findIndex((item) => item.key === current);
        return FLOW_DATA[(index + 1) % FLOW_DATA.length].key;
      });
    }, 3600);
    return () => window.clearInterval(timer);
  }, []);

  const activeItem = useMemo(
    () => FLOW_DATA.find((item) => item.key === activeKey) || FLOW_DATA[0],
    [activeKey],
  );
  const activate = (key) => {
    cycleRef.current = false;
    setActiveKey(key);
  };

  return (
    <section id="bc-hero" data-section="hero">
      <div className="arch-grid" aria-hidden="true" />
      <div className="container">
        <div id="bc-hero-grid">
          <div id="bc-hero-left">
            <div id="bc-hero-badge"><span id="bc-hero-badge-dot" />Built for Pakistani businesses</div>
            <h1 id="bc-hero-title">From Paper<br /><span className="gradient-word">To Digital</span><br />Made Simple.</h1>
            <p id="bc-hero-sub">Move from paper registers to one simple digital system.</p>
            <div id="bc-hero-actions">
              <a href="#contact" className="btn btn-primary">Get a Free Check-up <svg className="btn-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9h10M10 5l4 4-4 4" /></svg></a>
              <a href="#work" className="btn btn-ghost">See How We Help</a>
            </div>
            <div id="bc-hero-proof">
              <div id="bc-hero-avatars">{['BC', '24', '7d', '✓'].map((value, index) => <div className="bc-avatar" key={value} style={{ background: index % 2 ? 'var(--blue)' : 'var(--navy)' }}>{value}</div>)}</div>
              <div id="bc-hero-proof-text"><strong>Your first chat is free</strong>No pressure, no hidden costs</div>
            </div>
          </div>
          <div id="bc-hero-right">
            <div className="paper-flow-visual">
              <FlowSvg activeKey={activeKey} onActivate={activate} />
              <FlowSvg mobile activeKey={activeKey} onActivate={activate} />
              <div className="paper-flow-panels" aria-live="polite">
                <div className="paper-flow-panel paper-flow-panel-before"><span>Before</span><p>{activeItem.before}</p></div>
                <div className="paper-flow-panel paper-flow-panel-after"><span>With BossCode</span><p>{activeItem.after}</p></div>
              </div>
              <p className="paper-flow-hint">Tap any card on the left to see what changes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
