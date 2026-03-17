import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { BLOG_FEATURED, BLOG_POSTS } from '../content/blog'
import { inView36 } from '../shared/motion/presets'

const inView = inView36

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Journal | MK Architecture Studio</title>
        <meta name="description" content="Read the MK Architecture Studio journal — insights on design, materiality, and the stories behind our projects." />
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
            Journal
          </motion.span>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Writing &<br />Thinking
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Essays, observations, and provocations on architecture, cities, materials,
            and the art of making places that matter.
          </motion.p>
        </div>
      </div>

      <div className="container">
        {/* Featured Article */}
        <motion.div
          className="blog-featured"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={inView}
        >
          <div className="blog-featured-image">
            <img src={BLOG_FEATURED.image} alt={BLOG_FEATURED.title} loading="lazy" />
          </div>
          <div className="blog-featured-content">
            <p className="blog-eyebrow">{BLOG_FEATURED.category} · Featured</p>
            <h2 className="blog-featured-title">{BLOG_FEATURED.title}</h2>
            <div className="blog-meta">
              <span>{BLOG_FEATURED.date}</span>
              <span>·</span>
              <span>{BLOG_FEATURED.readTime}</span>
            </div>
            <p className="blog-excerpt">{BLOG_FEATURED.excerpt}</p>
            <button type="button" className="blog-read-more">
              Read Article
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="blog-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {BLOG_POSTS.map(({ id, title, category, date, readTime, excerpt, image }) => (
            <motion.article
              key={id}
              className="blog-card"
              variants={inView}
            >
              <div className="blog-card-image">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <div className="blog-card-meta">
                <span>{category}</span>
                <span>·</span>
                <span>{date}</span>
                <span>·</span>
                <span>{readTime}</span>
              </div>
              <h3 className="blog-card-title">{title}</h3>
              <p className="blog-card-excerpt">{excerpt}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.main>
    </>
  )
}
