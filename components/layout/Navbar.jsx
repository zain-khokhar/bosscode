'use client';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const innerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'work', label: 'How We Help' },
    { id: 'services', label: 'What We Do' },
    { id: 'process', label: 'How It Works' },
    { id: 'about', label: 'FAQ' },
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
            <li key={l.id}>
              <a className="bc-nav-link" href={`#${l.id}`}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div id="bc-nav-right">
          <div id="bc-availability-pill">
            <span id="bc-availability-dot" />
            Taking new projects
          </div>
          <a href="#contact" className="btn btn-primary btn-sm">
            Get a Free Check-up
          </a>
        </div>
      </div>
    </nav>
  );
}
