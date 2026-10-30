'use client';
import { useEffect, useState } from 'react';
import Icon from '@/components/ui/Icon';

/* Looks like the real product. Tabs auto-cycle so the visitor "gets it" without reading. */
export default function ProductMock({ solution, compact = false }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const screens = solution.screens;
  const s = screens[i];

  useEffect(() => {
    if (paused || compact) return;
    const id = setInterval(() => setI((n) => (n + 1) % screens.length), 3800);
    return () => clearInterval(id);
  }, [paused, compact, screens.length]);

  return (
    <div
      className={`sp-mock${compact ? ' sp-mock--compact' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="sp-mock-bar">
        <span className="sp-mock-dots"><i /><i /><i /></span>
        <span className="sp-mock-name">
          <Icon name={solution.icon} size={13} /> {solution.name}
        </span>
        {!compact && (
          <div className="sp-mock-tabs" role="tablist">
            {screens.map((t, n) => (
              <button
                key={t.tab}
                role="tab"
                aria-selected={n === i}
                className={n === i ? 'active' : ''}
                onClick={() => { setI(n); setPaused(true); }}
              >
                {t.tab}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="sp-mock-body" key={i}>
        <div className="sp-mock-title">{s.title}</div>
        <div className="sp-mock-stats">
          {s.stats.map((x) => (
            <div key={x.l} className="sp-mock-stat">
              <b>{x.v}</b>
              <span>{x.l}</span>
            </div>
          ))}
        </div>
        <div className="sp-mock-chart" aria-hidden="true">
          {s.bars.map((h, n) => (
            <span key={n} style={{ height: `${h}%`, animationDelay: `${n * 60}ms` }} />
          ))}
        </div>
        <div className="sp-mock-rows">
          {s.rows.slice(0, compact ? 2 : 3).map((r) => (
            <div key={r.a + r.b} className="sp-mock-row">
              <div>
                <strong>{r.a}</strong>
                <small>{r.b}</small>
              </div>
              <em className={`tone-${r.tone}`}>{r.tag}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
