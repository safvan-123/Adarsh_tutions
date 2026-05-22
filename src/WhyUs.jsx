import { useEffect, useRef, useState, useCallback } from 'react';
import './WhyUs.css';

const reasons = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Students Always Pass',
    desc: 'Every single year since 1999, all our students have passed their exams. Many of them top the Kerala Higher Secondary Board and get into top medical and engineering colleges.',
    stat: '100%',
    statLabel: 'Pass Rate',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Over 10,000 Successful Students',
    desc: 'More than 10,000 of our former students are now working as doctors, engineers, scientists, and managers across Kerala and India. You will be joining a strong, lifelong community.',
    stat: '10K+',
    statLabel: 'Alumni',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Smart Digital Classrooms',
    desc: 'We use smart boards, digital study materials, and live doubt-clearing sessions. Our classrooms are modern, but our teaching values stay rooted in 25 years of experience.',
    stat: '25+',
    statLabel: 'Years of Trust',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'We Help You Plan Your Career',
    desc: 'We do not just prepare you for exams. We help you choose the right career path — whether it is medicine, engineering, data science, or management — and guide you every step of the way.',
    stat: '4+',
    statLabel: 'Career Tracks',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Most Trusted in West Kochi',
    desc: 'Families in West Kochi have trusted us for over two decades. We did not build this reputation through advertisements — we earned it through the success of our students, year after year.',
    stat: '#1',
    statLabel: 'In West Kochi',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Every Student Gets Attention',
    desc: 'Our class sizes are small on purpose. Every student gets personal attention from the teacher. No one is ignored, no question is too small, and no student is left behind.',
    stat: 'Small',
    statLabel: 'Batch Sizes',
  },
];

const testimonials = [
  {
    name: 'Santhra S',
    rating: 5,
    time: '11 months ago',
    quote: 'Outstanding tutors! Not only did they clarify complex concepts, but their guidance on personality and career paths helped me discover my strengths and interests.',
  },
  {
    name: 'Aldrin Antony',
    rating: 5,
    time: '4 years ago',
    quote: 'One of the best and well known tuition center. The teachers are very brilliant and experts in this field and really helps you and motivates you to learn. Excellent way of teaching. Grateful for all these years. Even through this pandemic situation the teachers were working hard and sincere for us to achieve our goals. Always the best.',
  },
  {
    name: 'Gayathry Praveen',
    rating: 5,
    time: '11 months ago',
    quote: 'To be very honest in my words. Aadarsh coaching Centre taught me the way of studying and achieving dreams. I am very thankful to all the staffs, especially Mr. Sreekanth Sir, Mrs. Vijaysree Teacher and the environment there. Very much appreciated...',
  },
  {
    name: 'Aditi R Pai',
    rating: 5,
    time: '11 months ago',
    quote: 'Excellent guidance and support. The teachers are very much friendly, knowledgeable and approachable. Overall, a great experience that helped me achieve my goals. Highly recommended! Miss and sir are like our friends who guide us throughout our career.',
  },
  {
    name: 'Poornasree KJ',
    rating: 5,
    time: '11 months ago',
    quote: 'Aadarsh tution centre has always been the perfect place for strong basics and boards. Tutors there always treat students like individuals not just a batch, loved the care and support. Sir and miss has always been there for each one of us as teachers, friends, mentor, constant source of motivation and many more. They not just guide us in academics but also in life.',
  },
  {
    name: 'Sanju Thomas A',
    rating: 5,
    time: '11 months ago',
    quote: 'I had an excellent experience at Adarsh Tution Centre. The faculty members are not only highly knowledgeable in their respective subjects but also incredibly supportive and approachable. Their teaching methods are clear, structured, and focused on building strong foundational concepts, which really helped boost my confidence and understanding.',
  },
  {
    name: 'Aashwin Thomas',
    rating: 5,
    time: '11 months ago',
    quote: "I would like to wholeheartedly recommend Aadarsh Tuition, under the guidance of Sir Sreekanth, for any student seeking quality academic support and personal growth. Sir Sreekanth is an exceptional educator who brings clarity, structure, and patience to every lesson. His deep subject knowledge, approachable nature, and commitment to each student's success truly set him apart.",
  },
  {
    name: 'Sonia MJ',
    rating: 5,
    time: '2 months ago',
    quote: "One of the most supreme places to learn and grow ourselves. My love towards Maths and Accounting started from here. Sir and Ma'am have truly molded students with their vibrant efforts, dedication, and immense knowledge. Forever grateful. 🙏✨",
  },
];

function StarRating({ count }) {
  return (
    <div className="whyus__test-stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function WhyUs() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollRef = useRef(null);
  const CARD_WIDTH = 345;

  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    setActiveIndex(Math.round(el.scrollLeft / CARD_WIDTH));
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * CARD_WIDTH, behavior: 'smooth' });
  }, []);

  const startAutoScroll = useCallback(() => {
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
      el.scrollBy({ left: atEnd ? -(el.scrollWidth) : CARD_WIDTH, behavior: 'smooth' });
    }, 3000);
  }, []);

  const stopAutoScroll = useCallback(() => {
    clearInterval(autoScrollRef.current);
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, [startAutoScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="whyus" id="why-us" ref={sectionRef}>

      {/* ── HEADER ── */}
      <div className="whyus__header-section">
        <div className="container whyus__header-inner">
          <div className="whyus__header-text reveal">
            <span className="section-tag">Why Choose Us</span>
            <h1 className="whyus__title">
              Families Have Trusted<br />
              <span>Aadarsh for 25 Years</span>
            </h1>
            <p className="whyus__sub">
              We do not just promise good results — we have been delivering them every single year since 1999.
              Students from West Kochi and beyond choose us because our teaching truly works.
            </p>
            <div className="whyus__header-stats">
              <div className="whyus__stat-pill">
                <strong>100%</strong>
                <span>Pass Rate</span>
              </div>
              <div className="whyus__stat-divider" />
              <div className="whyus__stat-pill">
                <strong>10,000+</strong>
                <span>Happy Alumni</span>
              </div>
              <div className="whyus__stat-divider" />
              <div className="whyus__stat-pill">
                <strong>25+ Yrs</strong>
                <span>Experience</span>
              </div>
            </div>
          </div>
          <div className="whyus__header-img reveal" style={{ transitionDelay: '0.12s' }}>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
              alt="Students achieving success"
            />
            <div className="whyus__header-card">
              <div className="whyus__header-card-row">
                <span className="whyus__header-card-num">25</span>
                <span className="whyus__header-card-label">Years of<br />Unbroken Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── REASONS GRID ── */}
      <div className="whyus__reasons">
        <div className="container">
          <div className="whyus__reasons-header reveal">
            <span className="section-tag">Our Strengths</span>
            <h2>6 Reasons to Choose <span>Aadarsh</span></h2>
            <p>Every point below is backed by real student results — not just words.</p>
          </div>
          <div className="whyus__reasons-grid">
            {reasons.map((r, i) => (
              <div className="whyus__reason-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="whyus__reason-top">
                  <div className="whyus__reason-icon">{r.icon}</div>
                  <div className="whyus__reason-stat-block">
                    <span className="whyus__reason-stat">{r.stat}</span>
                    <span className="whyus__reason-stat-label">{r.statLabel}</span>
                  </div>
                </div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS CAROUSEL ── */}
      <div className="whyus__testimonials">
        <div className="container">
          <div className="whyus__test-header reveal">
            <div className="whyus__test-header-left">
              <span className="section-tag">Student Stories</span>
              <h2>Words From Our <span>Students</span></h2>
              <p>Real reviews from real students who studied right here in West Kochi.</p>
            </div>
            <div className="whyus__test-header-right">
              <div className="whyus__test-meta">
                <div className="whyus__test-overall-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="whyus__test-overall-label">5.0 · {testimonials.length} Google Reviews</p>
              </div>
              <div className="whyus__test-nav-btns">
                <button
                  className={`whyus__nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
                  onClick={() => { scroll(-1); stopAutoScroll(); setTimeout(startAutoScroll, 4000); }}
                  aria-label="Scroll left"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  className={`whyus__nav-btn ${!canScrollRight ? 'disabled' : ''}`}
                  onClick={() => { scroll(1); stopAutoScroll(); setTimeout(startAutoScroll, 4000); }}
                  aria-label="Scroll right"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Scroll track */}
          <div
            className="whyus__test-track-wrapper"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            <div className="whyus__test-track" ref={trackRef}>
              {testimonials.map((t, i) => (
                <div className="whyus__test-card" key={i}>
                  <div className="whyus__test-card-top">
                    <div className="whyus__test-avatar">{t.name.charAt(0)}</div>
                    <div className="whyus__test-author-info">
                      <strong>{t.name}</strong>
                      <span>{t.time}</span>
                    </div>
                    <div className="whyus__test-google-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>
                  <StarRating count={t.rating} />
                  <div className="whyus__test-quote-mark">"</div>
                  <p className="whyus__test-text">{t.quote}</p>
                </div>
              ))}
            </div>
            {/* Fade edges */}
            <div className="whyus__test-fade-left" style={{ opacity: canScrollLeft ? 1 : 0 }} />
            <div className="whyus__test-fade-right" style={{ opacity: canScrollRight ? 1 : 0 }} />
            {/* Dot indicators */}
            <div className="whyus__test-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`whyus__test-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    trackRef.current?.scrollTo({ left: i * CARD_WIDTH, behavior: 'smooth' });
                    stopAutoScroll();
                    setTimeout(startAutoScroll, 4000);
                  }}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div className="whyus__cta">
        <div className="container whyus__cta-inner reveal">
          <div className="whyus__cta-text">
            <p className="whyus__cta-eyebrow">Start Your Journey With Aadarsh</p>
            <h2>Ready to Begin Your Success Story?</h2>
            <p>
              Whether you want to join, have questions about our classes, or just want to come
              and see us — we are always happy to help. Reach out and take your first step.
            </p>
            <p className="whyus__cta-note">
              Admissions open now for Plus One &amp; Plus Two Science — 2025–26 batch.
            </p>
          </div>
          <div className="whyus__cta-btns">
            <a href="#contact" className="btn-primary">
              Enroll Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="tel:+919447109598" className="btn-outline whyus__cta-call">
              📞 +91 94471 09598
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}