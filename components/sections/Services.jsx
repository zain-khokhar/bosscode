'use client';

const SERVICES = [
  {
    num: '01',
    title: 'Web & App Engineering',
    desc: 'Production-grade web applications built with Next.js, React, and TypeScript. From SaaS platforms to e-commerce, engineered to handle millions of users.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="16" height="13" rx="2"/>
        <path d="M8 7l-2 2 2 2M12 7l2 2-2 2M10 7v6"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Product Strategy & UX',
    desc: 'We don\'t just design, we solve business problems. Deep user research, competitive analysis, and data-backed design systems that convert.',
    tags: ['Figma', 'User Research', 'Prototyping', 'A/B Testing'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8"/>
        <path d="M10 6v4l3 3"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Brand & Visual Identity',
    desc: 'Logos, systems, and motion identities that command attention. We build brand assets that work consistently across every digital and print touchpoint.',
    tags: ['Logo Design', 'Brand System', 'Motion', 'Typography'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 14l4-4 3 3 5-5 4 4"/>
        <path d="M18 6l-2 2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Cloud Infrastructure & DevOps',
    desc: 'Zero-downtime deployments, auto-scaling infrastructure, and CI/CD pipelines on AWS and GCP. Your product stays fast, secure, and always available.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 10a5 5 0 0 1 9.5-2H16a3 3 0 0 1 0 6H5a4 4 0 0 1 0-8"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'E-commerce & Marketplaces',
    desc: 'Headless Shopify, custom checkout flows, and marketplace platforms built for conversion. We engineer the complete shopping experience from search to delivery.',
    tags: ['Shopify', 'Stripe', 'Next.js', 'Analytics'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="17" y2="6"/>
        <path d="M12 10a2 2 0 0 1-4 0"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'AI-Powered Features',
    desc: 'Integrate LLMs, computer vision, and ML pipelines directly into your product. We make AI practical, not a buzzword, but a real competitive advantage.',
    tags: ['OpenAI', 'LangChain', 'Python', 'Vector DBs'],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="2"/>
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="bc-services" data-section="services">
      <div className="container">
        <div id="bc-services-header">
          <div className="section-tag">
            <span className="dot" />
            What We Build
          </div>
          <h2 className="bc-section-title">
            Full-Stack<br />Capabilities
          </h2>
          <p className="bc-section-sub">
            End-to-end digital execution from concept to code to cloud. We cover every discipline needed to ship world-class digital products.
          </p>
        </div>

        <div id="bc-services-grid">
          {SERVICES.map((s, i) => (
            <article className="bc-card" key={i} tabIndex={0} role="article">
              <div>
                <div className="bc-card-header">
                  <div className="bc-card-icon">{s.icon}</div>
                  <span className="bc-card-num">{s.num}</span>
                </div>
                <h3 className="bc-card-title">{s.title}</h3>
                <p className="bc-card-desc">{s.desc}</p>
              </div>
              <div>
                <div className="bc-card-tags">
                  {s.tags.map((t) => (
                    <span className="bc-tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="bc-card-link">
                  Learn more
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h10M8 4l3 3-3 3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
