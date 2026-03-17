import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECT_FILTERS } from '../content/projects'
import type { Project, ProjectType } from '../content/types'
import { fetchProjects } from '../api/mockApi'
import { inView36 } from '../shared/motion/presets'

const inView = inView36

export default function Projects() {
  const [active, setActive] = useState<(typeof PROJECT_FILTERS)[number]>('All')
  const [projects, setProjects] = useState<readonly Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
      .then(data => setProjects(data))
      .finally(() => setLoading(false))
  }, [])

  const filtered =
    active === 'All'
      ? projects
      : projects.filter(p => p.type === (active satisfies ProjectType))

  return (
    <>
      <Helmet>
        <title>Projects | MK Architecture Studio</title>
        <meta name="description" content="Browse MK Architecture Studio's portfolio of residential, commercial, and cultural architecture projects." />
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
            {PROJECT_FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn${active === f ? ' active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="projects-loading" aria-live="polite" aria-busy="true">
              Loading projects…
            </div>
          ) : (
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
          )}
        </div>
      </motion.main>
    </>
  )
}
