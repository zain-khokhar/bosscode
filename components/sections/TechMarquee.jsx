'use client';

const ROW1 = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'Redis', 'GraphQL', 'AWS', 'Kubernetes', 'Docker', 'Figma',
];
const ROW2 = [
  'Framer Motion', 'Tailwind CSS', 'Prisma', 'tRPC', 'Stripe',
  'Shopify', 'Vercel', 'GitHub Actions', 'Terraform', 'Datadog',
  'OpenAI', 'LangChain',
];

function Track({ items, dir }) {
  // Repeat 4x per half so a single half (~4,500px) is always wider than any viewport,
  // and render two identical halves so translate3d(-50%, 0, 0) loops with zero jerk.
  const half = [...items, ...items, ...items, ...items];

  return (
    <div className={`bc-marquee-track bc-marquee-track--${dir}`}>
      <div className="bc-marquee-group">
        {half.map((item, i) => (
          <div className="bc-marquee-item" key={`a-${item}-${i}`}>
            {item}
          </div>
        ))}
      </div>
      <div className="bc-marquee-group" aria-hidden="true">
        {half.map((item, i) => (
          <div className="bc-marquee-item" key={`b-${item}-${i}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section id="bc-marquee" data-section="tech">
      <div id="bc-marquee-label">Technologies We Master</div>
      <div id="bc-marquee-rows">
        <Track items={ROW1} dir="left"  />
        <Track items={ROW2} dir="right" />
      </div>
    </section>
  );
}
