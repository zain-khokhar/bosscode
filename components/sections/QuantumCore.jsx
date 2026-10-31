'use client';
import Icon from '@/components/ui/Icon';

const BADGES = [
  {
    title: 'Price Upfront',
    sub: 'Fixed cost, zero hidden fees',
    icon: 'wallet',
  },
  {
    title: '100% Your Data',
    sub: 'You own every record',
    icon: 'shield',
  },
  {
    title: 'Direct Builders',
    sub: 'Talk straight to our team',
    icon: 'users',
  },
  {
    title: 'Support Included',
    sub: 'We stay after launch',
    icon: 'phone',
  },
];

export default function QuantumCore() {
  return (
    <section id="bc-quantum">
      <div id="bc-quantum-bg" aria-hidden="true">
        <div className="arch-grid arch-grid--dark" />
      </div>

      <div className="container">
        <div id="bc-quantum-content">
          <div className="section-tag section-tag--dark">
            <span className="dot" />
            Our Promise
          </div>
          <h2 id="bc-quantum-title">
            Straight Talk.<br />Honest Work.
          </h2>
          <p id="bc-quantum-sub">
            Clear scope, fixed price, and timeline on day one. No tech jargon.
          </p>

          <div id="bc-quantum-grid">
            {BADGES.map((b) => (
              <div className="bc-quantum-badge" key={b.title}>
                <div className="bc-quantum-badge-icon" aria-hidden="true">
                  <Icon name={b.icon} size={20} />
                </div>
                <div className="bc-quantum-badge-title">{b.title}</div>
                <div className="bc-quantum-badge-sub">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
