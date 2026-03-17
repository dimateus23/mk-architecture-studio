import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ABOUT_TIMELINE, ABOUT_VALUES } from '../content/about'
import { inView40 } from '../shared/motion/presets'
import styles from './About.module.css'

const inView = inView40

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | MK Architecture Studio</title>
        <meta name="description" content="Learn about MK Architecture Studio — our story, values, and the team behind our award-winning architectural designs." />
      </Helmet>
      <motion.main
        className="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Hero */}
        <div className="container">
          <section className={styles.aboutHero} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <motion.div
              className={styles.aboutHeroImage}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Miroslava Kucher"
              />
            </motion.div>

            <motion.div
              className={styles.aboutHeroText}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="page-eyebrow">About</span>
              <h1>
                Miroslava<br />Kucher
              </h1>
              <p>
                Principal architect, urban theorist, and founder of MK Architecture Studio.
                For eighteen years, Miroslava has led projects that redefine the relationship
                between architecture and lived experience — from intimate private homes to civic
                landmarks that shape entire neighbourhoods.
              </p>
            </motion.div>
          </section>
        </div>

        {/* Story */}
        <div className="container">
          <section className={styles.aboutStory} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
            >
              <span className={styles.aboutStoryLabel}>Story</span>
            </motion.div>

            <motion.div
              className={styles.aboutStoryBody}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={inView}
            >
              <p>
                Born in Kyiv, trained in Vienna, and shaped by nearly a decade working alongside
                masters of European modernism, Miroslava Kucher brings a rare combination of
                intellectual rigour and sensory attentiveness to every project she leads.
              </p>
              <p>
                After graduating with distinction from the Vienna University of Technology and
                completing a postgraduate fellowship at the Architectural Association in London,
                she spent eight years at Coop Himmelb(l)au before establishing her own practice
                in 2008 with a single conviction: that architecture at its finest is an act of
                care — for people, for place, for the future.
              </p>
              <p>
                Today, MK Architecture Studio operates across three continents with a team of
                thirty-two architects, interior designers, and urban planners. The studio is known
                for its disciplined aesthetic, its deep engagement with materiality, and its
                ability to find the specific solution that a given site, client, and culture demands.
              </p>
              <Link to="/projects" className="btn-outline" style={{ marginTop: '8px' }}>
                View Portfolio
              </Link>
            </motion.div>
          </section>
        </div>

        {/* Values */}
        <section className={styles.aboutValues}>
          <div className="container">
            <motion.span
              className="page-eyebrow"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
            >
              Philosophy
            </motion.span>
            <motion.h2
              className={styles.aboutValuesHeading}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
            >
              What we believe in
            </motion.h2>
            <motion.div
              className={styles.valuesGrid}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              {ABOUT_VALUES.map(({ num, title, desc }) => (
                <motion.div key={num} className={styles.valueCard} variants={inView}>
                  <div className={styles.valueNum}>{num}</div>
                  <h3 className={styles.valueTitle}>{title}</h3>
                  <p className={styles.valueDesc}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.aboutTimeline}>
          <div className="container">
            <div className="section-header">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={inView}
              >
                Studio History
              </motion.h2>
            </div>

            <div className={styles.timeline}>
              {ABOUT_TIMELINE.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={styles.timelineYear}>{year}</div>
                  <div className={styles.timelineContent}>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.main>
    </>
  )
}
