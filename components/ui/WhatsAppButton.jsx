'use client';
import { useState, useEffect } from 'react';

const WA_NUMBER = '923197542768';
const WA_DISPLAY = '0319 7542768';
const WA_PREFILLED = encodeURIComponent(
  'Assalam o Alaikum BossCode, mujhe apne business software k mutalliq baat karni hai.'
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_PREFILLED}`;

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <aside className="bc-wa-wrapper" aria-label="WhatsApp Contact">
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bc-wa-anchor"
        aria-label={`Chat with BossCode on WhatsApp at ${WA_DISPLAY}`}
      >
        {/* Floating WhatsApp Button */}
        <div className="bc-wa-core">
          {/* Main button disc with official brand gradient & organic wobble */}
          <div className="bc-wa-btn">
            {/* Crisp official WhatsApp SVG glyph */}
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              className="bc-wa-svg"
              aria-hidden="true"
            >
              <path d="M16.002 2C8.28 2 2 8.28 2 16c0 2.67.75 5.17 2.05 7.31L2.5 29.5l6.43-1.49A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16.002 2zm0 25.57c-2.32 0-4.49-.66-6.33-1.8l-.45-.28-4.15.97.99-4-.31-.46A12.06 12.06 0 013.86 16c0-6.7 5.44-12.14 12.14-12.14 6.7 0 12.14 5.44 12.14 12.14 0 6.7-5.44 12.14-12.14 12.14zm7.25-9.16c-.4-.2-2.36-1.16-2.71-1.29-.35-.13-.6-.19-.86.19-.25.38-.98 1.29-1.2 1.54-.23.26-.45.29-.85.09-.4-.2-1.68-.62-3.2-1.98-1.18-1.05-1.98-2.35-2.21-2.75-.24-.4-.03-.61.17-.81.18-.18.4-.47.6-.7.2-.23.27-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.86-2.07-1.18-2.83-.31-.75-.62-.64-.86-.66-.22-.01-.48-.01-.73-.01-.25 0-.67.1-1.02.48-.35.38-1.33 1.3-1.33 3.17 0 1.88 1.36 3.69 1.55 3.94.2.25 2.69 4.1 6.5 5.75.91.39 1.62.63 2.17.8.91.3 1.74.25 2.4.15.74-.1 2.36-.96 2.69-1.9.34-.93.34-1.73.24-1.9-.1-.16-.37-.26-.77-.46z" />
            </svg>
          </div>
        </div>
      </a>
    </aside>
  );
}
