import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import ProductMock from '@/components/ui/ProductMock';
import { SOLUTIONS, getSolution } from '@/lib/solutions';

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return { title: `${s.name} | BossCode`, description: `${s.tagline} ${s.short}` };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();
  const others = SOLUTIONS.filter((x) => x.slug !== s.slug).slice(0, 3);
  const mail = `mailto:hello@bosscode.agency?subject=${encodeURIComponent(`${s.name} — I want to know more`)}`;

  return (
    <PageShell>
      {/* 1 · WHAT IS IT — answer first */}
      <section className="sp-hero sp-hero--product">
        <div className="arch-grid" aria-hidden="true" />
        <div className="container sp-product-grid">
          <div>
            <Link href="/solutions" className="sp-back"><Icon name="arrow" size={14} className="flip" /> All solutions</Link>
            <div className="section-tag"><span className="dot" />{s.category}</div>
            <h1 className="sp-h1 sp-h1--md">
              <span className="gradient-word">{s.name}</span>
            </h1>
            <p className="sp-lead sp-lead--strong">{s.tagline}</p>
            <div className="sp-actions">
              <Link href={`/contact?solution=${s.slug}`} className="btn btn-primary">
                Get {s.name} <Icon name="arrow" size={16} />
              </Link>
              <a href={mail} className="btn btn-ghost">Ask a question</a>
            </div>
            <ul className="sp-for">
              {s.forWho.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
          <div className="sp-product-visual">
            <ProductMock solution={s} />
            <div className="sp-float sp-float--a"><Icon name="check" size={14} /> Saved automatically</div>
            <div className="sp-float sp-float--b"><Icon name="clock" size={14} /> Hours saved daily</div>
          </div>
        </div>
      </section>

      {/* 2 · BEFORE / AFTER */}
      <section className="sp-section sp-section--tight">
        <div className="container">
          <Reveal className="sp-ba">
            <div className="sp-ba-col sp-ba-before">
              <h2><Icon name="x" size={18} /> Today</h2>
              <ul>{s.before.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="sp-ba-arrow" aria-hidden="true"><Icon name="arrow" size={22} /></div>
            <div className="sp-ba-col sp-ba-after">
              <h2><Icon name="check" size={18} /> With {s.name}</h2>
              <ul>{s.after.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 · WHAT YOU GET */}
      <section className="sp-section">
        <div className="container">
          <Reveal>
            <h2 className="sp-h2">What you get</h2>
          </Reveal>
          <div className="sp-feat-grid">
            {s.features.map((f, n) => (
              <Reveal key={f.title} delay={n * 60} className="sp-feat">
                <span className="sp-feat-icon"><Icon name={f.icon} size={22} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · HOW IT GOES */}
      <section className="sp-section sp-dark">
        <div className="arch-grid arch-grid--dark" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal><h2 className="sp-h2 sp-h2--light">Up and running in 3 steps</h2></Reveal>
          <div className="sp-steps">
            {s.steps.map((st, n) => (
              <Reveal key={st.title} delay={n * 90} className="sp-step">
                <span className="sp-step-num">{n + 1}</span>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · FAQ */}
      <section className="sp-section">
        <div className="container sp-narrow">
          <Reveal><h2 className="sp-h2">Quick answers</h2></Reveal>
          <div className="sp-faq">
            {s.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}<Icon name="arrow" size={16} className="chev" /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · CTA + MORE */}
      <section className="sp-section sp-section--tight">
        <div className="container">
          <Reveal className="sp-banner">
            <div className="sp-banner-icon"><Icon name={s.icon} size={26} /></div>
            <div className="sp-banner-text">
              <h2>Want {s.name} for your business?</h2>
              <p>Your first chat is free. We&apos;ll tell you honestly if it fits.</p>
            </div>
            <Link href={`/contact?solution=${s.slug}`} className="btn btn-white">
              Start a free chat <Icon name="arrow" size={16} />
            </Link>
          </Reveal>

          <h2 className="sp-h3">Other solutions</h2>
          <div className="sp-more">
            {others.map((o) => (
              <Link key={o.slug} href={`/solutions/${o.slug}`} className="sp-more-card">
                <span className="sp-sol-icon"><Icon name={o.icon} size={18} /></span>
                <div><strong>{o.name}</strong><small>{o.short}</small></div>
                <Icon name="arrow" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Link href={`/contact?solution=${s.slug}`} className="sp-sticky-cta" aria-label={`Get ${s.name}`}>
        Get {s.name} <Icon name="arrow" size={15} />
      </Link>
    </PageShell>
  );
}
