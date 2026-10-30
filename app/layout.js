import './globals.css';
import './site-pages.css';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata = {
  title: 'BossCode | From Paper to Digital: Business Management & Automation Solutions',
  description: 'A Karachi-based team helping Pakistani businesses move from paper-based processes to digital solutions, manage their work efficiently and automate operations. Your first chat is free.',
  keywords: 'paper to digital Pakistan, business management software Pakistan, business automation Pakistan, accounts and stock software, digital transformation Karachi',
  openGraph: {
    title: 'BossCode | From Paper to Digital',
    description: 'We help businesses move from paper-based processes to digital solutions, manage work efficiently and automate operations.',
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
