import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

const inView: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_OUT } },
}

const projects = [
  { id: 1, title: 'Meridian Residences', type: 'Residential', year: '2024', location: 'New York', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=75' },
  { id: 2, title: 'Pavilion Cultural Centre', type: 'Cultural', year: '2023', location: 'Vienna', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=700&q=75' },
  { id: 3, title: 'Helix Tower', type: 'Commercial', year: '2023', location: 'Tokyo', image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=700&q=75' },
  { id: 4, title: 'The Grove Estate', type: 'Residential', year: '2022', location: 'London', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=75' },
  { id: 5, title: 'Civic Arts Museum', type: 'Cultural', year: '2022', location: 'Berlin', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=75' },
  { id: 6, title: 'Harbor Plaza', type: 'Commercial', year: '2021', location: 'Sydney', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=700&q=75' },
  { id: 7, title: 'Nordvik Quarter', type: 'Urban', year: '2021', location: 'Oslo', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=700&q=75' },
  { id: 8, title: 'Villa Solaris', type: 'Residential', year: '2020', location: 'Barcelona', image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=700&q=75' },
  { id: 9, title: 'The Arch Bridge', type: 'Urban', year: '2020', location: 'Dubai', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=700&q=75' },
]

const filters = ['All', 'Residential', 'Commercial', 'Cultural', 'Urban']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active)

  return (
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
            Portfolio
          </motion.span>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Selected<br />Projects
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Two decades of architectural work across residential, commercial, cultural,
            and urban scales — in cities across four continents.
          </motion.p>
        </div>
      </div>

      <div className="container">
        <div className="projects-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card-overlay">
                  <div className="project-card-meta">
                    <p className="project-card-type">{project.type}</p>
                    <p className="project-card-title">{project.title}</p>
                    <p className="project-card-year">{project.location} · {project.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.main>
  )
}
