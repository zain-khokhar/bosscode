'use client';
import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import ProductMock from '@/components/ui/ProductMock';
import { FILTERS, SOLUTIONS } from '@/lib/solutions';

export default function SolutionsExplorer() {
  const [active, setActive] = useState('all');
  const list = SOLUTIONS.filter((s) => active === 'all' || s.filters.includes(active));

  return (
    <>
      <div className="sp-chips" role="tablist" aria-label="What do you want to fix?">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={active === f.id}
            className={`sp-chip${active === f.id ? ' active' : ''}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="sp-sol-grid">
        {list.map((s) => (
          <Link key={s.slug} href={`/solutions/${s.slug}`} className="sp-sol-card" id={`solution-${s.slug}`}>
            <div className="sp-sol-preview">
              <ProductMock solution={s} compact />
            </div>
            <div className="sp-sol-info">
              <div className="sp-sol-top">
                <span className="sp-sol-icon"><Icon name={s.icon} size={18} /></span>
                <span className="sp-sol-cat">{s.category}</span>
              </div>
              <h3>{s.name}</h3>
              <p>{s.short}</p>
              <span className="sp-sol-go">
                See how it works <Icon name="arrow" size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
