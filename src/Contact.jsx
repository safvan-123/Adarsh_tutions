


import { useEffect, useRef, useState } from 'react';
import './Contact.css';
import Image4 from "./images/image_4_.jpeg"
import Image5 from "./images/image_5_.jpeg"
import Image6 from "./images/image_6_.jpeg"

const contactDetails = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 5.54 5.54l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 94471 09598',
    href: 'tel:+919447109598',
    sub: 'Mon – Sat, 8 AM – 7 PM',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'aadarshtuitions@gmail.com',
    href: 'mailto:info@aadarshtuitions.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'West Kochi, Kerala',
    href: 'https://www.google.com/maps/place/Aadarsh+Tuition+Centre,+Fort+Kochi+Veli+Ground,+H+No+9%2F77+A,+Balthaek,+Odatha+Rd,+Veli,+Kerala+682001',
    sub: 'Near Vytilla Junction',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    label: 'Admissions',
    value: 'Batches Enrolling Now',
    href: 'https://wa.me/919447109598',
    sub: 'Plus One & Two Science',
  },
];

const courses = [
  'Plus One Science (Batch A – Morning)',
  'Plus One Science (Batch B – Evening)',
  'Plus Two Science (Batch A – Morning)',
  'Plus Two Science (Batch B – Evening)',
  'NEET Foundation',
  'JEE Foundation',
  'Career Guidance',
];

/* ─── MAP COMPONENT ──────────────────────────────────────────────────────── */
function AadarshMap() {
  return (
    <div className="contact__map-wrapper">
      {/* ── Labelled pin bar shown ABOVE the map ── */}
      <div className="contact__map-label">
        <span className="contact__map-label-dot" />
        <span className="contact__map-label-name">Aadarsh Tuition Centre</span>
        <span className="contact__map-label-addr">H No 9/77 A, Odatha Rd, Veli, Kochi – 682001</span>
      </div>

      {/* ── Official Google Maps embed with exact business pin ── */}
      <div className="contact__map">
        <iframe
          title="Aadarsh Tuitions Campus Location"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125745.78219958892!2d76.30829335!3d9.970874599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b086d3fb9d704cd%3A0x70215d2e17dbfe4e!2sAadarsh%20Tuition%20Centre%2C%20Fort%20Kochi%20Veli%20Ground%2C%20H%20No%209%2F77%20A%2C%20Balthaek%2C%20Odatha%20Rd%2C%20Veli%2C%20Kerala%20682001!3m2!1d9.9511243!2d76.24566279999999!5e0!3m2!1sen!2sin!4v1779269198223!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* ── "View on Google Maps" button with exact business deep-link ── */}
      <a
        href="https://www.google.com/maps/place/Aadarsh+Tuition+Centre,+Fort+Kochi+Veli+Ground,+H+No+9%2F77+A,+Balthaek,+Odatha+Rd,+Veli,+Kerala+682001"
        target="_blank"
        rel="noreferrer"
        className="contact__map-open-btn"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
        View Aadarsh Tuition Centre on Google Maps
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
        </svg>
      </a>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */
export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit mobile number';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.course) e.course = 'Please select a course';
    return e;
  };

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const errs = validate();

  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  if (form.name && form.phone && form.course) {
    const messageText =
      `Hi Aadarsh Learning & Career Solutions 👋\n\n` +
      `I would like to know more details about the courses and admission process at Aadarsh Tuitions. 🎓\n\n` +
      `• *Name:* ${form.name}\n` +
      `• *Contact Number:* ${form.phone}\n` +
      `• *Email:* ${form.email || 'Not provided'}\n` +
      `• *Course Interested In:* ${form.course}\n\n` +
      `📝 *Additional Message:*\n` +
      `${form.message || 'I would like to get more information regarding available batches, class timings, fee structure, and admission details.'}\n\n` +
      `Looking forward to your response. Thank you!`;

    const encodedMessage = encodeURIComponent(messageText);
    const targetWhatsAppNumber = "919447109598";

    setSubmitted(true);

    window.open(
      `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`,
      "_blank"
    );
  }
};

  return (
    <section className="contact" id="contact" ref={sectionRef}>

      {/* ── HEADER ── */}
      <div className="contact__header-section">
        <div className="container contact__header-inner">
          <div className="contact__header-text reveal">
            <span className="section-tag">Get In Touch</span>
            <h1 className="contact__title">
              Start Your Journey <br />
              <span>With Aadarsh</span>
            </h1>
            <p className="contact__sub">
              Whether you're ready to enroll, have questions about our courses, or want to
              schedule a visit — we're here to help. Reach out and take the first step
              toward your academic breakthrough.
            </p>
          </div>
          <div className="contact__header-img reveal" style={{ transitionDelay: '0.12s' }}>
            <img
              src={Image5}
              alt="Contact Aadarsh Tuitions"
              style={{backgroundSize:"100% 100%",width:"100%"}}
            />
            <div className="contact__header-badge">
              <span>📞</span>
              <div>
                <strong>Call Us Now</strong>
                <a href="tel:+919447109598">+91 94471 09598</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT DETAIL CARDS ── */}
      <div className="contact__details-section">
        <div className="container">
          <div className="contact__details-grid">
            {contactDetails.map((d, i) => (
              <a
                href={d.href}
                className="contact__detail-card"
                key={i}
                style={{ animationDelay: `${i * 0.08}s` }}
                target={d.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <div className="contact__detail-icon">{d.icon}</div>
                <div className="contact__detail-body">
                  <span className="contact__detail-label">{d.label}</span>
                  <strong className="contact__detail-value">{d.value}</strong>
                  <span className="contact__detail-sub">{d.sub}</span>
                </div>
                <div className="contact__detail-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORM + INFO PANEL ── */}
      <div className="contact__main" id="contact-form">
        <div className="container contact__main-inner">

          {/* Form */}
          <div className="contact__form-wrap reveal">
            <div className="contact__form-header">
              <span className="section-tag">Enrollment Form</span>
              <h2>Book Your <span>Free Counselling</span></h2>
              <p>Fill in your details and our academic counsellor will get back to you within one working day.</p>
            </div>

            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3>Thank You, {form.name.split(' ')[0]}!</h3>
                <p>Your enquiry has been received. Our team will contact you at <strong>{form.phone}</strong> shortly.</p>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', phone: '', email: '', course: '', message: '' });
                  }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-row">
                  <div className={`contact__field${errors.name ? ' contact__field--error' : ''}`}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="e.g. Arjun Menon"
                      value={form.name} onChange={handleChange}
                    />
                    {errors.name && <span className="contact__error">{errors.name}</span>}
                  </div>
                  <div className={`contact__field${errors.phone ? ' contact__field--error' : ''}`}>
                    <label htmlFor="phone">Mobile Number *</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="10-digit mobile"
                      value={form.phone} onChange={handleChange}
                    />
                    {errors.phone && <span className="contact__error">{errors.phone}</span>}
                  </div>
                </div>

                <div className={`contact__field${errors.email ? ' contact__field--error' : ''}`}>
                  <label htmlFor="email">Email Address <span className="contact__optional">(optional)</span></label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@example.com"
                    value={form.email} onChange={handleChange}
                  />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>

                <div className={`contact__field${errors.course ? ' contact__field--error' : ''}`}>
                  <label htmlFor="course">Course Interested In *</label>
                  <select id="course" name="course" value={form.course} onChange={handleChange}>
                    <option value="">— Select a course —</option>
                    {courses.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.course && <span className="contact__error">{errors.course}</span>}
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Message <span className="contact__optional">(optional)</span></label>
                  <textarea
                    id="message" name="message" rows="4"
                    placeholder="Any questions, preferred timings, or anything you'd like us to know…"
                    value={form.message} onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary contact__submit">
                  Send Enquiry via WhatsApp
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>

                <p className="contact__form-note">
                  🔒 Your information is completely private and will never be shared.
                </p>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div className="contact__info-panel reveal" style={{ transitionDelay: '0.14s' }}>
            <div className="contact__info-card">
              <h3>Find Us</h3>
              <p>We welcome walk-in visits on weekdays. Talk to our counsellors in person and take a campus tour.</p>

              {/* ── UPDATED MAP WITH BUSINESS NAME ── */}
              <AadarshMap />

              <div className="contact__timings">
                <h4>Office Hours</h4>
                <ul>
                  <li><span>Mon – Fri</span><span>8:00 AM – 7:00 PM</span></li>
                  <li><span>Saturday</span><span>9:00 AM – 5:00 PM</span></li>
                  <li><span>Sunday</span><span>Closed</span></li>
                </ul>
              </div>
            </div>

            <div className="contact__quick-links">
              <h4>Quick Actions</h4>
              <a href="tel:+919447109598" className="contact__quick-btn">
                <span>📞</span> Call Us Now
              </a>
              <a href="https://wa.me/919447109598" target="_blank" rel="noreferrer" className="contact__quick-btn contact__quick-btn--green">
                <span>💬</span> WhatsApp Us
              </a>
              <a
                href="https://www.google.com/maps/place/Aadarsh+Tuition+Centre,+Fort+Kochi+Veli+Ground,+H+No+9%2F77+A,+Balthaek,+Odatha+Rd,+Veli,+Kerala+682001"
                target="_blank" rel="noreferrer"
                className="contact__quick-btn contact__quick-btn--outline"
              >
                <span>📍</span> Get Directions
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

function FAQItem({ question, answer, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`contact__faq-item reveal${open ? ' contact__faq-item--open' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <button className="contact__faq-q" onClick={() => setOpen(v => !v)}>
        <span>{question}</span>
        <span className={`contact__faq-chevron${open ? ' open' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </button>
      {open && <div className="contact__faq-a">{answer}</div>}
    </div>
  );
}