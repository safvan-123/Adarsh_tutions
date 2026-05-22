import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Brand Column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">A</div>
            <span>Aadarsh <strong>Tuitions</strong></span>
          </div>
          <p className="footer__tagline">
            Where Tradition Meets Innovation.<br />
            Kochi's Premier Science Institute since 1999.
          </p>

          <div className="footer__socials">
            <a href="https://www.facebook.com/profile.php?id=100063573956249" target="_blank" rel="noopener noreferrer" className="footer__social-btn footer__social-btn--fb" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a href="https://www.instagram.com/aadarsh_tuition_centre_kochi?igsh=ODA4ejI0ZXoyeGFy" target="_blank" rel="noopener noreferrer" className="footer__social-btn footer__social-btn--ig" aria-label="Instagram">
              <span className="footer__ig-gradient">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </span>
            </a>

            <a href="https://wa.me/919447109598" target="_blank" rel="noopener noreferrer" className="footer__social-btn footer__social-btn--wa" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#why">Why Choose Us</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Courses Column */}
        <div className="footer__links">
          <h4>Our Courses</h4>

          <div className="footer__course-group">
            <span className="footer__course-label">State Board</span>
            <a href="#contact">Plus One Science</a>
            <a href="#contact">Plus Two Science</a>
          </div>

          <div className="footer__course-group">
            <span className="footer__course-label">CBSE</span>
            <a href="#contact">CBSE Physics</a>
            <a href="#contact">CBSE Chemistry</a>
            <a href="#contact">CBSE Mathematics</a>
          </div>

          <div className="footer__course-group">
            <span className="footer__course-label">Entrance Exams</span>
            <a href="#contact">NEET Coaching</a>
            <a href="#contact">CUET Coaching</a>
          </div>
        </div>

        {/* Contact Column */}
        <div className="footer__contact">
          <h4>Contact</h4>
          <p>
            <span className="footer__contact-icon">📍</span>
            West Kochi, Kerala
          </p>
          <a href="tel:+919447109598">
            <span className="footer__contact-icon">📞</span>
            +91 9447109598
          </a>
          <a href="https://wa.me/919447109598" target="_blank" rel="noopener noreferrer" className="footer__whatsapp-text-link">
            <span className="footer__contact-icon">💬</span>
            WhatsApp Support
          </a>
          <div className="footer__badge">
            <span>🎓</span>
            <span>25+ Years of Excellence</span>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Aadarsh Tuitions. All rights reserved.</span>
          <span className="footer__bottom-right">Kochi's Premier Science Institute</span>
        </div>
      </div>
    </footer>
  )
}