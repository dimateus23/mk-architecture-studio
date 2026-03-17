import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { FEATURED_PROJECTS } from '../content/projects'
import { HOME_SLIDES } from '../content/slides'
import { EASE_OUT, fadeUp32, inView40 } from '../shared/motion/presets'
import styles from './Home.module.css'

// ─── Shared variants ──────────────────────────────────────────────────────────
const fadeUp = fadeUp32
const inView = inView40

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0)

  // Parallax: independent of slideshow
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], ['0px', '-400px'])

  // Auto-advance every 4 s, loops infinitely
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex(i => (i + 1) % HOME_SLIDES.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <Helmet>
        <title>MK Architecture Studio | Crafting Spaces With Purpose</title>
        <meta name="description" content="MK Architecture Studio designs purposeful spaces that blend form, function, and narrative. Explore our portfolio of residential and commercial architecture." />
      </Helmet>
      <motion.main
        className="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <section className={styles.homeHero}>

          {/* Parallax wrapper */}
          <motion.div className={styles.homeHeroParallax} style={{ y: bgY }}>
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={slideIndex}
                className={styles.heroSlide}
                style={{ backgroundImage: `url(${HOME_SLIDES[slideIndex]})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </motion.div>

          <div className={styles.homeHeroOverlay} />

          <div className={styles.homeHeroContent}>
            <div className="container">
              <motion.span
                className={styles.heroEyebrow}
                custom={0.1}
                initial="hidden"
                animate="show"
                variants={fadeUp}
              >
                Miroslava Kucher · Est. 2008
              </motion.span>

              <motion.h1
                className={styles.homeHeroTitle}
                custom={0.2}
                initial="hidden"
                animate="show"
                variants={fadeUp}
              >
                MK<br />Architecture
              </motion.h1>

              <motion.p
                className={styles.homeHeroTagline}
                custom={0.35}
                initial="hidden"
                animate="show"
                variants={fadeUp}
              >
                Crafting Spaces With Purpose
              </motion.p>

              <motion.div
                className={styles.heroCtaRow}
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
                className={styles.heroScrollHint}
                custom={0.6}
                initial="hidden"
                animate="show"
                variants={fadeUp}
              >
                <span className={styles.scrollLine} />
                Scroll to explore
              </motion.div>
            </div>
          </div>

          {/* Slide indicator dots */}
          <div className={styles.heroDots}>
            {HOME_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`${styles.heroDot}${i === slideIndex ? ' ' + styles.active : ''}`}
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <motion.div
            className={styles.heroCounter}
            custom={0.7}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <span className={styles.heroCounterCurrent}>
              {String(slideIndex + 1).padStart(2, '0')}
            </span>
            <span className={styles.heroCounterSep} />
            <span>
              {String(HOME_SLIDES.length).padStart(2, '0')}
            </span>
          </motion.div>
        </section>

        {/* ── Stats ──────────────────────────────────────────────────────────── */}
        <section className={styles.homeStats}>
          {[
            { number: '18+', label: 'Years of Practice' },
            { number: '240', label: 'Projects Completed' },
            { number: '32', label: 'Awards Received' },
          ].map(({ number, label }, i) => (
            <motion.div
              key={label}
              className={styles.statItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
              transition={{ delay: i * 0.1 } as never}
            >
              <span className={styles.statNumber}>{number}</span>
              <span className={styles.statLabel}>{label}</span>
            </motion.div>
          ))}
        </section>

        {/* ── Intro ──────────────────────────────────────────────────────────── */}
        <section style={{ padding: '120px 0' }}>
          <div className="container">
            <div className={styles.homeIntro}>
              <motion.div
                className={styles.homeIntroText}
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
                className={styles.homeIntroImage}
                initial={{ opacity: 0, scale: 1.04 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1, ease: EASE_OUT }}
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
        <section className={styles.homeFeatured}>
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
                <Link to="/projects" className={styles.sectionLink}>
                  All Projects
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className={styles.featuredGrid}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            >
              {FEATURED_PROJECTS.map(({ id, title, type, image }) => (
                <motion.div key={id} className={styles.featuredCard} variants={inView}>
                  <img src={image} alt={title} loading="lazy" />
                  <div className={styles.featuredCardInfo}>
                    <p className={styles.featuredCardType}>{type}</p>
                    <p className={styles.featuredCardTitle}>{title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Philosophy ─────────────────────────────────────────────────────── */}
        <section className={styles.homePhilosophy}>
          <div className="container">
            <div className={styles.philosophyInner}>
              <motion.div
                className={styles.philosophyLine}
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
                className={styles.philosophyAttribution}
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
    </>
  )
}
