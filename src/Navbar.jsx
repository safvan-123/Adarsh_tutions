import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import image3 from "./images/Aadarsh_tutions__.jpeg"

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const linksRef = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);

    const handleResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  // Sliding indicator for active/hovered link
  const handleLinkHover = (label) => {
    const el = linksRef.current[label];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
    }
    setActiveLink(label);
  };

  const handleNavLeave = () => {
    setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    setActiveLink('');
  };

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <img
            src={image3}
            alt="Aadarsh Tuitions Logo"
            className="navbar__logo-image"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" onMouseLeave={handleNavLeave}>
          {/* Sliding indicator */}
          <span className="navbar__indicator" style={indicatorStyle} />
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link${activeLink === link.label ? ' navbar__link--active' : ''}`}
              ref={el => linksRef.current[link.label] = el}
              onMouseEnter={() => handleLinkHover(link.label)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <a href="tel:+919447109598" className="navbar__phone">
            <span className="navbar__phone-icon">📞</span>
            <span>+91 94471 09598</span>
          </a>
          <a href="#contact" className="btn-primary navbar__cta">
            <span>Enroll Now</span>
            <svg className="navbar__cta-arrow" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="navbar__mobile-links">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              style={{ '--delay': `${i * 0.07 + 0.1}s` }}
              onClick={handleLinkClick}
            >
              <span className="navbar__mobile-link-text">{link.label}</span>
              <svg className="navbar__mobile-arrow" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </nav>

        <div className="navbar__mobile-footer" style={{ '--delay': `${navLinks.length * 0.07 + 0.15}s` }}>
          <a href="tel:+919447109598" className="navbar__mobile-phone" onClick={handleLinkClick}>
            <span>📞</span> +91 94471 09598
          </a>
          <a href="#contact" className="btn-primary navbar__mobile-cta" onClick={handleLinkClick}>
            Enroll Now
            <svg viewBox="0 0 16 16" fill="none" className="navbar__cta-arrow">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="navbar__overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </header>
  );
}