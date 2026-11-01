'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

function WidgetView({ widget, compact }) {
  if (!widget) return null;

  /* 1 · DIGITAL RECEIPT / INVOICE / PATIENT SLIP */
  if (widget.kind === 'receipt') {
    const items = compact ? widget.items.slice(0, 1) : widget.items;
    return (
      <div className="sp-w-receipt">
        <div className="sp-w-receipt-head">
          <div>
            <span className="sp-w-receipt-no">{widget.billNo}</span>
            <strong className="sp-w-receipt-party">{widget.customer}</strong>
          </div>
          <span className="sp-w-badge sp-w-badge--cyan">Digital Slip</span>
        </div>

        <div className="sp-w-receipt-items">
          {items.map((it) => (
            <div key={it.name} className="sp-w-receipt-item">
              <div>
                <strong>{it.name}</strong>
                <small>{it.qty}</small>
              </div>
              <b>{it.amount}</b>
            </div>
          ))}
        </div>

        <div className="sp-w-receipt-total">
          <div className="sp-w-receipt-sum">
            <span>Total</span>
            <strong>{widget.total}</strong>
          </div>
          <div className="sp-w-receipt-pills">
            <span className="sp-w-pill sp-w-pill--ok">{widget.paid}</span>
            <span className="sp-w-pill sp-w-pill--blue">{widget.due}</span>
          </div>
        </div>

        {!compact && widget.footer && (
          <div className="sp-w-receipt-foot">
            <Icon name="check" size={13} /> {widget.footer}
          </div>
        )}
      </div>
    );
  }

  /* 2 · LABELED VISUAL STOCK / COLLECTION METERS */
  if (widget.kind === 'meters') {
    const items = compact ? widget.items.slice(0, 2) : widget.items;
    return (
      <div className="sp-w-meters">
        {items.map((m) => (
          <div key={m.label} className="sp-w-meter">
            <div className="sp-w-meter-top">
              <div>
                <strong>{m.label}</strong>
                <small>{m.meta}</small>
              </div>
              <span className={`sp-w-pill sp-w-pill--${m.state === 'ok' ? 'ok' : 'blue'}`}>
                {m.pct}%
              </span>
            </div>
            <div className="sp-w-meter-track">
              <div
                className={`sp-w-meter-fill sp-w-meter-fill--${m.state}`}
                style={{ width: `${m.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* 3 · VISUAL STAGE PIPELINE + QUEUE ROWS */
  if (widget.kind === 'pipeline') {
    const rows = compact ? (widget.rows || []).slice(0, 1) : widget.rows || [];
    return (
      <div className="sp-w-pipeline">
        {widget.trackTitle && (
          <div className="sp-w-pipeline-head">{widget.trackTitle}</div>
        )}
        <div
          className="sp-w-stages"
          style={{ gridTemplateColumns: `repeat(${widget.stages.length}, 1fr)` }}
        >
          {widget.stages.map((st) => (
            <div key={st.step + st.name} className={`sp-w-stage is-${st.state}`}>
              <div className="sp-w-stage-top">
                <span className="sp-w-stage-num">{st.step}</span>
                <span className="sp-w-stage-dot" />
              </div>
              <strong>{st.name}</strong>
              {!compact && <small>{st.sub}</small>}
            </div>
          ))}
        </div>

        {rows.length > 0 && (
          <div className="sp-mock-rows">
            {rows.map((r) => (
              <div key={r.a} className="sp-mock-row">
                <div>
                  <strong>{r.a}</strong>
                  <small>{r.b}</small>
                </div>
                <em className={`sp-w-pill sp-w-pill--${r.tone === 'ok' ? 'ok' : 'blue'}`}>
                  {r.tag}
                </em>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  /* 4 · TWO-WAY WHATSAPP CONVERSATION PREVIEW */
  if (widget.kind === 'chat') {
    const msgs = compact ? widget.messages.slice(0, 2) : widget.messages;
    return (
      <div className="sp-w-chat">
        {msgs.map((m, idx) => (
          <div
            key={idx}
            className={`sp-w-bubble ${m.from === 'bot' ? 'sp-w-bubble--bot' : 'sp-w-bubble--user'}`}
          >
            <div className="sp-w-bubble-meta">
              <strong>{m.sender}</strong>
              <span>{m.time}</span>
            </div>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default function ProductMock({ solution, compact = false }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const screens = solution.screens;
  const s = screens[i];

  useEffect(() => {
    if (paused || compact) return;
    const id = setInterval(() => setI((n) => (n + 1) % screens.length), 4500);
    return () => clearInterval(id);
  }, [paused, compact, screens.length]);

  return (
    <div
      className={`sp-mock${compact ? ' sp-mock--compact' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Architectural Concept Topbar (No fake macOS red/yellow/green dots) */}
      <div className="sp-mock-bar">
        <div className="sp-mock-brand">
          <span className="sp-mock-concept-pill">
            <i /> CONCEPT PREVIEW
          </span>
          {!compact && (
            <span className="sp-mock-name">
              <Icon name={solution.icon} size={13} /> {solution.name}
            </span>
          )}
        </div>

        {!compact && (
          <div className="sp-mock-tabs" role="tablist" aria-label="Preview screens">
            {screens.map((t, n) => (
              <button
                key={t.tab}
                role="tab"
                aria-selected={n === i}
                className={n === i ? 'active' : ''}
                onClick={() => {
                  setI(n);
                  setPaused(true);
                }}
              >
                {t.tab}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Screen Body */}
      <div className="sp-mock-body" key={i}>
        <div className="sp-mock-head-row">
          <div className="sp-mock-title">{s.title}</div>
          {!compact && (
            <span className="sp-mock-subnote">How it looks if we build it for you</span>
          )}
        </div>

        <div className="sp-mock-stats">
          {s.stats.map((x) => (
            <div key={x.l} className="sp-mock-stat">
              <b>{x.v}</b>
              <span>{x.l}</span>
            </div>
          ))}
        </div>

        <WidgetView widget={s.widget} compact={compact} />
      </div>

      {/* Integrated Concept Footer Bar */}
      {!compact && (
        <div className="sp-mock-footer">
          <div className="sp-mock-badges">
            <span>
              <Icon name="sparkles" size={13} /> Example design — custom-built around your business
            </span>
          </div>
          <Link href={`/contact?solution=${solution.slug}`} className="sp-mock-cta">
            Build This For Me <Icon name="arrow" size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}
