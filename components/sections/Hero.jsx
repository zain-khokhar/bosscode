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

function Dashboard({ mobile = false, activeKey, onActivate }) {
  const x = mobile ? 24 : 494;
  const y = mobile ? 416 : 68;
  const w = mobile ? 352 : 252;
  const h = mobile ? 236 : 334;
  const pad = 16;
  const innerW = w - pad * 2;
  const kpiW = (innerW - 8) / 2;
  const rowsStartY = mobile ? 106 : 122;
  const rowStep = mobile ? 28 : 34;

  return (
    <g className="paper-flow-dashboard" transform={`translate(${x} ${y})`}>
      {/* Outer Card */}
      <rect className="paper-flow-dashboard-card" width={w} height={h} rx="18" />
      <rect
        x="1"
        y="1"
        width={w - 2}
        height={h - 2}
        rx="17"
        fill="none"
        stroke="rgba(0, 210, 255, 0.22)"
        strokeWidth="1"
      />

      {/* Top Chrome Bar */}
      <circle cx={pad + 4} cy="19" r="3" fill="#ff5f56" opacity="0.85" />
      <circle cx={pad + 14} cy="19" r="3" fill="#ffbd2e" opacity="0.85" />
      <circle cx={pad + 24} cy="19" r="3" fill="#27c93f" opacity="0.85" />
      <rect x={w - pad - 54} y="11" width="54" height="16" rx="8" fill="rgba(18, 183, 106, 0.16)" stroke="rgba(18, 183, 106, 0.4)" strokeWidth="0.8" />
      <circle cx={w - pad - 44} cy="19" r="2.5" fill="#12b76a" />
      <text x={w - pad - 37} y="22" fill="#32d583" fontSize="8.5" fontWeight="700" fontFamily="JetBrains Mono, monospace">LIVE</text>

      {/* Header */}
      <text className="paper-flow-dashboard-title" x={pad} y="44">Your Business</text>
      <text className="paper-flow-dashboard-subtitle" x={pad} y="59">Synced across counter &amp; phone</text>

      {/* Top 2 KPI Tiles */}
      <g transform={`translate(${pad} 68)`}>
        <rect width={kpiW} height={mobile ? 30 : 42} rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="9" y={mobile ? 12 : 15} fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="DM Sans, sans-serif">Today&apos;s Sales</text>
        <text x="9" y={mobile ? 24 : 32} fill="#FFFFFF" fontSize={mobile ? 10.5 : 12.5} fontWeight="800" fontFamily="Space Grotesk, sans-serif">Rs 84,500</text>
        {!mobile && <text x={kpiW - 8} y="31" textAnchor="end" fill="#32d583" fontSize="8.5" fontWeight="700" fontFamily="JetBrains Mono, monospace">+14%</text>}

        <rect x={kpiW + 8} width={kpiW} height={mobile ? 30 : 42} rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x={kpiW + 17} y={mobile ? 12 : 15} fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="DM Sans, sans-serif">System Health</text>
        <text x={kpiW + 17} y={mobile ? 24 : 32} fill="#00D2FF" fontSize={mobile ? 10.5 : 12.5} fontWeight="800" fontFamily="Space Grotesk, sans-serif">100% Synced</text>
      </g>

      {/* 4 Live Rows */}
      {FLOW_DATA.map((item, index) => {
        const rowY = rowsStartY + index * rowStep;
        const isRowActive = activeKey === item.key;
        return (
          <g
            className={`paper-flow-row${isRowActive ? ' is-active' : ''}`}
            key={item.key}
            onClick={() => onActivate(item.key)}
            style={{ cursor: 'pointer' }}
          >
            <rect x={pad} y={rowY} width={innerW} height={mobile ? 24 : 28} rx="8" />
            <circle className="paper-flow-status" cx={pad + 12} cy={rowY + (mobile ? 12 : 14)} r="3" />
            <text className="paper-flow-row-label" x={pad + 22} y={rowY + (mobile ? 15.5 : 17.5)}>{item.label}</text>
            <text className="paper-flow-row-value" x={pad + innerW - 10} y={rowY + (mobile ? 15.5 : 17.5)} textAnchor="end">{item.digital}</text>
          </g>
        );
      })}

      {/* Mini Trend & Footer (Desktop) */}
      {!mobile && (
        <g transform={`translate(${pad} 264)`}>
          <rect width={innerW} height="54" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
          <text x="10" y="15" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="JetBrains Mono, monospace">7-DAY REVENUE</text>
          <text x={innerW - 10} y="15" textAnchor="end" fill="#32d583" fontSize="8" fontWeight="700" fontFamily="JetBrains Mono, monospace">+18% ↑</text>
          <g transform="translate(10 22)">
            {[10, 14, 11, 18, 15, 22, 24].map((barH, i) => (
              <rect
                key={i}
                x={i * 29}
                y={24 - barH}
                width="18"
                height={barH}
                rx="3"
                fill={i === 6 ? '#00D2FF' : 'rgba(0, 85, 255, 0.7)'}
              />
            ))}
          </g>
        </g>
      )}
    </g>
  );
}

function FlowSvg({ mobile = false, activeKey, onActivate }) {
  const positions = mobile ? MOBILE_SOURCES : DESKTOP_SOURCES;
  const sourceCenterX = mobile ? 126 : 118;
  const hub = mobile ? { x: 200, y: 374 } : { x: 388, y: 212 };
  const dashboardLine = mobile ? 'M200 404V416' : 'M432 212h62';
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
      <Dashboard mobile={mobile} activeKey={activeKey} onActivate={onActivate} />
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
