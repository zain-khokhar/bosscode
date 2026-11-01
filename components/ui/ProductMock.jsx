'use client';
import Icon from '@/components/ui/Icon';

/* =============================================================================
   MINIMAL BRANDED VISUAL (Replaces Fake Software Dashboard UI)
   Pure BossCode architectural visual: Navy + White + Electric Blue + Cyan,
   glowing ambient orbs, central frosted-glass emblem, and Paper -> Digital flow.
   ============================================================================= */
export default function ProductMock({ solution, compact = false }) {
  return (
    <div className={`sp-brand-canvas${compact ? ' sp-brand-canvas--compact' : ''}`}>
      {/* Subtle architectural grid & ambient glow blobs */}
      <div className="arch-grid arch-grid--dark" aria-hidden="true" />
      <div className="sp-brand-glow sp-brand-glow--tr" aria-hidden="true" />
      <div className="sp-brand-glow sp-brand-glow--bl" aria-hidden="true" />

      {/* Top minimal meta row */}
      <div className="sp-brand-top">
        <span className="sp-brand-live">● EXAMPLE</span>
        <span className="sp-brand-code">{solution.code || 'BC // 2026'}</span>
      </div>

      {/* Center Minimal Branded Emblem & Flow */}
      <div className="sp-brand-stage">
        <div className="sp-brand-flow">
          {/* Left node: Old way */}
          <div className="sp-brand-node sp-brand-node--from">
            <div className="sp-brand-node-box">
              <Icon name={solution.fromIcon || 'file'} size={compact ? 18 : 22} />
            </div>
            <span>{solution.fromLabel || 'Paper'}</span>
          </div>

          {/* Animated connecting line */}
          <div className="sp-brand-beam" aria-hidden="true">
            <i />
          </div>

          {/* Center BossCode Frosted Emblem */}
          <div className="sp-brand-center">
            <div className="sp-brand-ring" aria-hidden="true" />
            <div className="sp-brand-emblem">
              <Icon name={solution.icon} size={compact ? 24 : 30} />
            </div>
            <strong>BC</strong>
          </div>

          {/* Animated connecting line */}
          <div className="sp-brand-beam" aria-hidden="true">
            <i />
          </div>

          {/* Right node: Digital way */}
          <div className="sp-brand-node sp-brand-node--to">
            <div className="sp-brand-node-box">
              <Icon name={solution.toIcon || 'zap'} size={compact ? 18 : 22} />
            </div>
            <span>{solution.toLabel || 'Digital'}</span>
          </div>
        </div>

        {!compact && solution.pills && (
          <div className="sp-brand-pills">
            {solution.pills.map((p) => (
              <span key={p} className="sp-brand-pill">
                {p}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom minimal title row */}
      <div className="sp-brand-bottom">
        <div>
          <div className="sp-brand-title">{solution.name}</div>
          <div className="sp-brand-sub">Built around your work</div>
        </div>
        <span className="sp-brand-mark">BC</span>
      </div>
    </div>
  );
}
