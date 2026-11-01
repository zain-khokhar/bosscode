'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/#bc-services', label: 'What We Do' },
  { href: '/#bc-process', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [onDarkHero, setOnDarkHero] = useState(pathname === '/');
  const [menuOpen, setMenuOpen] = useState(false);
  const innerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const revealEl = document.getElementById('bc-reveal');
      if (revealEl) {
        const rect = revealEl.getBoundingClientRect();
        const insideReveal = rect.bottom > 88;
        setOnDarkHero(insideReveal);
        setScrolled(!insideReveal && window.scrollY > 40);
      } else {
        setOnDarkHero(false);
        setScrolled(window.scrollY > 40);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const innerClass = menuOpen || scrolled ? 'scrolled' : onDarkHero ? 'on-dark' : '';

  return (
    <nav id="bc-navbar" aria-label="Main navigation">
      <div id="bc-navbar-inner" ref={innerRef} className={innerClass}>
        {/* Logo */}
        <Link id="bc-logo" href="/">
          <div id="bc-logo-mark">BC</div>
          <div id="bc-logo-text">
            <span id="bc-logo-name">Boss<span>Code</span></span>
            <span id="bc-logo-est">EST. 2026</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul id="bc-nav-links" role="list">
          {LINKS.map((l) => {
            const isActive =
              pathname === l.href || (l.href !== '/' && !l.href.startsWith('/#') && pathname.startsWith(l.href + '/'));
            return (
              <li key={l.href}>
                <Link
                  className={`bc-nav-link${isActive ? ' active' : ''}`}
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div id="bc-nav-right">
          <div id="bc-availability-pill">
            <span id="bc-availability-dot" />
            Free first chat
          </div>
          <Link href="/contact" className="btn btn-primary btn-sm bc-nav-cta-desktop">
            Free Check-up
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            id="bc-nav-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="bc-mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`bc-burger${menuOpen ? ' is-open' : ''}`}>
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div id="bc-mobile-menu" role="dialog" aria-label="Mobile navigation">
          <ul id="bc-mobile-links" role="list">
            {LINKS.map((l) => {
              const isActive =
                pathname === l.href || (l.href !== '/' && !l.href.startsWith('/#') && pathname.startsWith(l.href + '/'));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`bc-mobile-link${isActive ? ' active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div id="bc-mobile-actions">
            <Link href="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              Get a Free Check-up
            </Link>
            <a
              href="https://wa.me/923197542768?text=Assalam%20o%20Alaikum%20BossCode%2C%20mujhe%20apne%20business%20software%20k%20mutalliq%20baat%20karni%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              onClick={() => setMenuOpen(false)}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
