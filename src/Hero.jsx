import { useEffect, useRef, useState } from 'react';
import './Hero.css';
import Image1 from "./images/image_1__.jpeg"
import Image2 from "./images/image_2_.jpeg"
import Image3 from "./images/image_3_.jpeg"
import Image4 from "./images/image_4_.jpeg"
import Image5 from "./images/image_5_.jpeg"
import Image6 from "./images/image_6_.jpeg"
import { Link } from 'react-router-dom';

const STATS = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '100%', label: 'Success Rate' },
  { value: '10K+', label: 'Students Mentored' },
  { value: '#1', label: 'Rank in Kochi' },
];

const HERO_IMAGES = [
  { src: Image1, alt: 'Students collaborating' },
  { src: Image2, alt: 'Students studying together' },
  { src: Image3, alt: 'Classroom learning' },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState('');
  useEffect(() => {
    if (!start) return;
    const isNum = /^[\d]+/.test(target);
    if (!isNum) { setCount(target); return; }
    const num = parseInt(target);
    const suffix = target.replace(String(num), '');
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count || target;
}

function StatItem({ value, label, delay, inView }) {
  const count = useCountUp(value, 1600, inView);
  return (
    <div className="hero__stat" style={{ '--stat-delay': delay }}>
      <span className="hero__stat-value">{count}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [prevImg, setPrevImg] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    // Trigger page-load animation after paint
    const t = setTimeout(() => setInView(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const statsEl = sectionRef.current?.querySelector('.hero__stats');
    if (!statsEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(statsEl);
    return () => observer.disconnect();
  }, []);

  // Image slideshow — cycle every 2 seconds with crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((current) => {
        const next = (current + 1) % HERO_IMAGES.length;
        setPrevImg(current);
        setTransitioning(true);
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Clear transition flag after animation completes
  useEffect(() => {
    if (!transitioning) return;
    const t = setTimeout(() => {
      setPrevImg(null);
      setTransitioning(false);
    }, 700);
    return () => clearTimeout(t);
  }, [transitioning]);

  return (
    <section className="hero" id="home" ref={sectionRef}>

      {/* ── Decorative background blobs ── */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />

      {/* ── Floating dots grid ── */}
      <div className="hero__dots" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="hero__dot" style={{ '--i': i }} />
        ))}
      </div>

      <div className="container hero__inner">

        {/* ════ LEFT CONTENT ════ */}
        <div className={`hero__content${inView ? ' hero__content--visible' : ''}`}>

          <span className="hero__tag">
            <span className="hero__tag-dot" />
            About Aadarsh Tuitions
          </span>

          <h1 className="hero__headline">
            <span className="hero__headline-line">Where Tradition</span>
            <span className="hero__headline-line hero__headline-line--2">
              Meets{' '}
              <span className="hero__headline-accent">
                Innovation
                <svg className="hero__underline-svg" viewBox="0 0 220 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9 C 40 3, 100 14, 218 6" stroke="var(--primary)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </span>
          </h1>

          <p className="hero__sub">
            Established in 1999, Aadarsh Tuitions is Kochi's most trusted
            institute — shaping futures with expert guidance and care.
          </p>

    ```jsx id="6jxv0u"
<div className="hero__actions">

  <a href="#contact" className="btn-primary hero__btn-primary">
    Enroll Today

    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="hero__btn-icon"
    >
      <path
        d="M4 10h12M12 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>

  <a
    href="#contact"
    className="btn-outline hero__btn-outline"
    onClick={(e) => {
      e.preventDefault();

      document
        .getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
    }}
  >
    Know More
  </a>

</div>
```


          {/* STATS */}
          <div className="hero__stats">
            {STATS.map((s, i) => (
              <StatItem
                key={s.label}
                value={s.value}
                label={s.label}
                delay={`${i * 0.1}s`}
                inView={statsInView || inView}
              />
            ))}
          </div>
        </div>

        {/* ════ RIGHT IMAGES ════ */}
        <div className={`hero__images${inView ? ' hero__images--visible' : ''}`}>

          {/* Decorative ring */}
          <div className="hero__ring" aria-hidden="true" />

          {/* Main image — slideshow */}
          <div className="hero__img-main">
            {/* Previous image fading out */}
            {prevImg !== null && (
              <img
                key={`prev-${prevImg}`}
                src={HERO_IMAGES[prevImg].src}
                alt={HERO_IMAGES[prevImg].alt}
                className="hero__slide hero__slide--out"
              />
            )}
            {/* Active image fading in */}
            <img
              key={`active-${activeImg}`}
              src={HERO_IMAGES[activeImg].src}
              alt={HERO_IMAGES[activeImg].alt}
              className={`hero__slide hero__slide--in${transitioning ? ' hero__slide--entering' : ''}`}
            />

            {/* Shimmer overlay (on first load only) */}
            <div className="hero__img-shimmer" aria-hidden="true" />

            {/* Slide indicator dots */}
            <div className="hero__slide-dots" aria-hidden="true">
              {HERO_IMAGES.map((_, i) => (
                <span
                  key={i}
                  className={`hero__slide-dot${i === activeImg ? ' hero__slide-dot--active' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div className="hero__badge" aria-hidden="true">
            <span className="hero__badge-icon">🏆</span>
            <div>
              <strong>Rank #1</strong>
              <span>Kochi</span>
            </div>
          </div>

          {/* Year pill */}
          <div className="hero__year-pill" aria-hidden="true">
            Est. 1999
          </div>
        </div>

      </div>
    </section>
  );
}