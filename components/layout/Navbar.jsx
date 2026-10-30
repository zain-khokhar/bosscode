'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const innerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/solutions', label: 'Solutions' },
    { href: '/#services', label: 'What We Do' },
    { href: '/#process', label: 'How It Works' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav id="bc-navbar" aria-label="Main navigation">
      <div id="bc-navbar-inner" ref={innerRef} className={scrolled ? 'scrolled' : ''}>

        {/* Logo */}
        <a id="bc-logo" href="/">
          <div id="bc-logo-mark">BC</div>
          <div id="bc-logo-text">
            <span id="bc-logo-name">Boss<span>Code</span></span>
            <span id="bc-logo-est">EST. 2026</span>
          </div>
        </a>

        {/* Links */}
        <ul id="bc-nav-links" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                className="bc-nav-link"
                href={l.href}
                style={pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href + '/')) ? { color: 'var(--navy)' } : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div id="bc-nav-right">
          <div id="bc-availability-pill">
            <span id="bc-availability-dot" />
            Taking new projects
          </div>
          <Link href="/contact" className="btn btn-primary btn-sm">
            Get a Free Check-up
          </Link>
        </div>
      </div>
    </nav>
  );
}
