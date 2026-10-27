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
  const doubled = [...items, ...items];
  return (
    <div className={`bc-marquee-track bc-marquee-track--${dir}`}>
      {doubled.map((item, i) => (
        <div className="bc-marquee-item" key={`${item}-${i}`}>
          {item}
        </div>
      ))}
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
