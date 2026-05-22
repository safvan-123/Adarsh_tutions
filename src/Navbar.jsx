
import { useState, useEffect } from 'react';
import './Navbar.css';
import image3 from "./images/Aadarsh_tutions_logo.png"

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  // { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);

    // Close menu on resize (important fix)
    const handleResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <img
            src={image3}
            alt="Logo"
            className="navbar__logo-image"
          />
        </a>
        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <a href="tel:+919447109598" className="navbar__phone">
            📞 +91 94471 09598
          </a>
          <a href="#contact" className="btn-primary navbar__cta">Enroll Now</a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.label} href={link.href} className="navbar__mobile-link" onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
        <a href="tel:+919447109598" className="navbar__mobile-link navbar__mobile-phone" onClick={handleLinkClick}>
          📞 +91 94471 09598
        </a>
        <a href="#contact" className="btn-primary navbar__mobile-cta" onClick={handleLinkClick}>
          Enroll Now
        </a>
      </div>
    </header>
  );
}