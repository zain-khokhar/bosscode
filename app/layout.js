import './globals.css';

export const metadata = {
  title: 'BossCode — Premium Digital Agency 2026',
  description: 'Strategy-first digital agency building high-performance web applications, SaaS platforms, and digital products that scale.',
  keywords: 'digital agency, web development, product design, Next.js, React, TypeScript',
  openGraph: {
    title: 'BossCode — Premium Digital Agency 2026',
    description: 'We design, engineer, and launch high-performance digital products.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000921',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for faster font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts — loaded via <link> NOT @import to keep globals.css clean for Tailwind v4 */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
