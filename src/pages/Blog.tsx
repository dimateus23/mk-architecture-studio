import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { BLOG_FEATURED } from '../content/blog'
import type { BlogPost } from '../content/types'
import { fetchBlogPosts } from '../api/mockApi'
import { inView36 } from '../shared/motion/presets'
import styles from './Blog.module.css'

const inView = inView36

export default function Blog() {
  const [posts, setPosts] = useState<readonly BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogPosts()
      .then(data => setPosts(data))
      .finally(() => setLoading(false))
  }, [])

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
            className={styles.blogFeatured}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={inView}
          >
            <div className={styles.blogFeaturedImage}>
              <img src={BLOG_FEATURED.image} alt={BLOG_FEATURED.title} loading="lazy" />
            </div>
            <div className={styles.blogFeaturedContent}>
              <p className={styles.blogEyebrow}>{BLOG_FEATURED.category} · Featured</p>
              <h2 className={styles.blogFeaturedTitle}>{BLOG_FEATURED.title}</h2>
              <div className={styles.blogMeta}>
                <span>{BLOG_FEATURED.date}</span>
                <span>·</span>
                <span>{BLOG_FEATURED.readTime}</span>
              </div>
              <p className={styles.blogExcerpt}>{BLOG_FEATURED.excerpt}</p>
              <button type="button" className={styles.blogReadMore}>
                Read Article
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Articles Grid */}
          {loading ? (
            <div className={styles.blogLoading} aria-live="polite" aria-busy="true">
              Loading articles…
            </div>
          ) : (
            <motion.div
              className={styles.blogGrid}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              {posts.map(({ id, title, category, date, readTime, excerpt, image }) => (
                <motion.article
                  key={id}
                  className={styles.blogCard}
                  variants={inView}
                >
                  <div className={styles.blogCardImage}>
                    <img src={image} alt={title} loading="lazy" />
                  </div>
                  <div className={styles.blogCardMeta}>
                    <span>{category}</span>
                    <span>·</span>
                    <span>{date}</span>
                    <span>·</span>
                    <span>{readTime}</span>
                  </div>
                  <h3 className={styles.blogCardTitle}>{title}</h3>
                  <p className={styles.blogCardExcerpt}>{excerpt}</p>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </motion.main>
    </>
  )
}
