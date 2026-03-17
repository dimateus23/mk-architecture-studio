import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { inView36 } from '../shared/motion/presets'

const inView = inView36

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const services = [
  {
    num: '01',
    title: 'Residential Architecture',
    desc: 'From intimate urban apartments to expansive private estates, we design homes that reflect the individuality of those who inhabit them. Every project begins with listening.',
    tags: ['New Build', 'Renovation', 'Interior', 'Landscape'],
  },
  {
    num: '02',
    title: 'Commercial Design',
    desc: 'Offices, hospitality spaces, and mixed-use developments that balance brand ambition with the practical needs of daily working life. Architecture that performs.',
    tags: ['Office', 'Retail', 'Hospitality', 'Mixed-Use'],
  },
  {
    num: '03',
    title: 'Cultural & Civic Buildings',
    desc: 'Museums, libraries, galleries, and civic centres — buildings that belong to the public and carry a responsibility to represent and inspire entire communities.',
    tags: ['Museum', 'Library', 'Gallery', 'Civic'],
  },
  {
    num: '04',
    title: 'Urban Design & Masterplanning',
    desc: 'We work at the scale of neighbourhoods and districts, designing frameworks that guide development, preserve character, and create lasting public value.',
    tags: ['Masterplan', 'Public Space', 'Infrastructure', 'Strategy'],
  },
  {
    num: '05',
    title: 'Interior Architecture',
    desc: 'Our interior architecture practice extends the logic of the building inward — to the quality of surfaces, the choreography of movement, and the intimacy of rooms.',
    tags: ['Spatial Design', 'Furniture', 'Lighting', 'Custom Joinery'],
  },
  {
    num: '06',
    title: 'Feasibility & Consultation',
    desc: 'Early-stage consultancy for developers, institutions, and private clients. We help clarify what is possible, what is wise, and what will endure.',
    tags: ['Site Analysis', 'Programming', 'Concept', 'Advisory'],
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | MK Architecture Studio</title>
        <meta name="description" content="Discover the full range of architectural services offered by MK Architecture Studio — from concept design to project delivery." />
      </Helmet>
      <motion.main
        className="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <div className="container">
          <motion.span
            className="page-eyebrow"
            initial="hidden"
            animate="show"
            variants={inView}
          >
            What We Offer
          </motion.span>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Services
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            A full-spectrum practice. From the first sketch to the final detail, we offer
            architectural services tailored to the complexity and ambition of your project.
          </motion.p>
        </div>
      </div>

      <div className="container">
        <div className="services-list">
          {services.map(({ num, title, desc, tags }, i) => (
            <motion.div
              key={num}
              className="service-item"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="service-num">{num}</span>
              <div className="service-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="service-tags">
                  {tags.map(tag => (
                    <span key={tag} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="service-arrow">
                <ArrowIcon />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={inView}
        >
          <h2>Ready to Begin?</h2>
          <p>
            Every great project starts with a conversation. Tell us about your vision
            and we will tell you how we can help realise it.
          </p>
          <div className="services-cta-btns">
            <Link to="/contact" className="btn-primary">
              Start a Project
              <ArrowIcon />
            </Link>
            <Link to="/projects" className="btn-outline">
              See Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.main>
    </>
  )
}
