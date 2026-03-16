import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const inView = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const values = [
  {
    num: '01',
    title: 'Contextual Sensitivity',
    desc: 'Every site carries a history. We listen to the land, the culture, and the community before drawing a single line.',
  },
  {
    num: '02',
    title: 'Material Integrity',
    desc: 'We use materials honestly — for what they are, not what they simulate. Concrete, stone, timber, and glass each speak their own truth.',
  },
  {
    num: '03',
    title: 'Human Scale',
    desc: 'Architecture exists to be inhabited. Every proportion, every threshold, every view is considered in relation to the human body and spirit.',
  },
]

const timeline = [
  { year: '2008', title: 'Studio Founded', desc: 'Miroslava Kucher establishes MK Architecture in Vienna after a decade with leading European firms.' },
  { year: '2011', title: 'First Major Commission', desc: 'The Linz Cultural Pavilion opens to international acclaim, winning the EU Mies van der Rohe Award shortlist.' },
  { year: '2014', title: 'New York Office', desc: 'Expanding to New York to serve a growing roster of American clients across residential and commercial sectors.' },
  { year: '2018', title: 'Tokyo Partnership', desc: 'Strategic partnership with Hara Architectural Group opens the Asian market and brings new material influences.' },
  { year: '2022', title: 'Sustainability Charter', desc: 'Studio commits to net-zero embodied carbon across all new projects by 2030.' },
  { year: '2024', title: 'Retrospective Exhibition', desc: 'A 15-year retrospective of MK Architecture\'s work travels to Vienna, New York, and Seoul.' },
]

export default function About() {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <div className="container">
        <section className="about-hero" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <motion.div
            className="about-hero-image"
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
            className="about-hero-text"
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
        <section className="about-story" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={inView}
          >
            <span className="about-story-label">Story</span>
          </motion.div>

          <motion.div
            className="about-story-body"
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
      <section className="about-values">
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
            className="about-values-heading"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={inView}
          >
            What we believe in
          </motion.h2>
          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {values.map(({ num, title, desc }) => (
              <motion.div key={num} className="value-card" variants={inView}>
                <div className="value-num">{num}</div>
                <h3 className="value-title">{title}</h3>
                <p className="value-desc">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
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

          <div className="timeline">
            {timeline.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="timeline-year">{year}</div>
                <div className="timeline-content">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}
