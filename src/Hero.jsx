


import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      {/* ===== TOP HERO SECTION ===== */}
      <div className="hero__top">
        <div className="container hero__top-inner">

          {/* LEFT */}
          <div className="hero__content reveal">
            <span className="section-tag">About Aadarsh Tuitions</span>

            <h1 className="hero__headline">
              Where Tradition <br />
              <span className="hero__headline-accent">Meets Innovation</span>
            </h1>

            <p className="hero__sub">
              Established in 1999, Aadarsh Tuitions is West Kochi's most trusted institute.
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn-primary">Enroll Today</a>
              <a href="#about" className="btn-outline">Know More</a>
            </div>

            {/* STATS */}
            <div className="hero__stats reveal">
              <div className="hero__stat">
                <span className="hero__stat-value">25+</span>
                <span className="hero__stat-label">Years</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">100%</span>
                <span className="hero__stat-label">Success</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">10K+</span>
                <span className="hero__stat-label">Students</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">#1</span>
                <span className="hero__stat-label">Rank</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="hero__images reveal">
            <div className="hero__img-main">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                alt="Students"
              />
            </div>

            <div className="hero__img-side">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80"
                alt="Classroom"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}