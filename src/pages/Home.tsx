import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

// ─── Slideshow images ────────────────────────────────────────────────────────
const SLIDES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80',
]

// ─── Shared variants ──────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const inView = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const featuredProjects = [
  {
    id: 1,
    title: 'Meridian Residences',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Pavilion Cultural Centre',
    type: 'Cultural',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Helix Tower',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=900&q=80',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0)

  // Parallax: independent of slideshow
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], ['0px', '-400px'])

  // Auto-advance every 4 s, loops infinitely
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex(i => (i + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.main
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="home-hero">

        {/* Parallax wrapper — taller than viewport so upward shift never shows a gap */}
        <motion.div className="home-hero-parallax" style={{ y: bgY }}>
          {/* Crossfade slideshow — mode="sync" lets old & new slide render simultaneously */}
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={slideIndex}
              className="hero-slide"
              style={{ backgroundImage: `url(${SLIDES[slideIndex]})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </motion.div>

        {/* Dark gradient so text stays readable over any slide */}
        <div className="home-hero-overlay" />

        {/* Hero text — normal scroll speed, sits above parallax + overlay */}
        <div className="home-hero-content">
          <div className="container">
            <motion.span
              className="hero-eyebrow"
              custom={0.1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              Miroslava Kucher · Est. 2008
            </motion.span>

            <motion.h1
              className="home-hero-title"
              custom={0.2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              MK<br />Architecture
            </motion.h1>

            <motion.p
              className="home-hero-tagline"
              custom={0.35}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              Crafting Spaces With Purpose
            </motion.p>

            <motion.div
              className="hero-cta-row"
              custom={0.45}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <Link to="/projects" className="btn-primary">
                View Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-outline">
                Book Consultation
              </Link>
            </motion.div>

            <motion.div
              className="hero-scroll-hint"
              custom={0.6}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <span className="scroll-line" />
              Scroll to explore
            </motion.div>
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="hero-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === slideIndex ? ' active' : ''}`}
              onClick={() => setSlideIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter — top right */}
        <motion.div
          className="hero-counter"
          custom={0.7}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <span className="hero-counter-current">
            {String(slideIndex + 1).padStart(2, '0')}
          </span>
          <span className="hero-counter-sep" />
          <span className="hero-counter-total">
            {String(SLIDES.length).padStart(2, '0')}
          </span>
        </motion.div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────────── */}
      <section className="home-stats">
        {[
          { number: '18+', label: 'Years of Practice' },
          { number: '240', label: 'Projects Completed' },
          { number: '32', label: 'Awards Received' },
        ].map(({ number, label }, i) => (
          <motion.div
            key={label}
            className="stat-item"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={inView}
            transition={{ delay: i * 0.1 } as never}
          >
            <span className="stat-number">{number}</span>
            <span className="stat-label">{label}</span>
          </motion.div>
        ))}
      </section>

      {/* ── Intro ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="home-intro">
            <motion.div
              className="home-intro-text"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={inView}
            >
              <h2>Architecture as a dialogue between built form and human life</h2>
              <p>
                MK Architecture Studio was founded on the belief that every space has the power
                to shape how we live, work, and feel. We approach each project as a unique
                conversation — between site and structure, client and culture, present and future.
              </p>
              <p>
                Our practice spans residential, commercial, cultural, and urban design across
                three continents. We bring the same rigorous thinking and craft to a private
                home as we do to a civic landmark.
              </p>
              <Link to="/about" className="btn-outline">
                Our Story
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              className="home-intro-image"
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80"
                alt="MK Architecture studio interior"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ──────────────────────────────────────────────── */}
      <section className="home-featured">
        <div className="container">
          <div className="section-header">
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
            >
              Selected Work
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
            >
              <Link to="/projects" className="section-link">
                All Projects
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="featured-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {featuredProjects.map(({ id, title, type, image }) => (
              <motion.div key={id} className="featured-card" variants={inView}>
                <img src={image} alt={title} loading="lazy" />
                <div className="featured-card-info">
                  <p className="featured-card-type">{type}</p>
                  <p className="featured-card-title">{title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy ─────────────────────────────────────────────────────── */}
      <section className="home-philosophy">
        <div className="container">
          <div className="philosophy-inner">
            <motion.div
              className="philosophy-line"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <motion.blockquote
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
            >
              "We do not design buildings. We design the experience of inhabiting them — the quality
              of light in the morning, the sound of the city at a distance, the sense of shelter
              and openness held in precise balance."
            </motion.blockquote>
            <motion.p
              className="philosophy-attribution"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
            >
              — Miroslava Kucher, Principal Architect
            </motion.p>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
