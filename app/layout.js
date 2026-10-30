import './globals.css';

export const metadata = {
  title: 'BossCode | Grow Your Business Online: Websites, Online Stores & Business Systems',
  description: 'A Karachi-based team helping small and mid-sized Pakistani businesses grow with websites, online stores, and simple business systems. Your first chat is free.',
  keywords: 'website development Karachi, online store Pakistan, business software Pakistan, local SEO Pakistan, business growth Pakistan',
  openGraph: {
    title: 'BossCode | Grow Your Business Online',
    description: 'Websites, online stores and simple business systems that help your business grow.',
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
