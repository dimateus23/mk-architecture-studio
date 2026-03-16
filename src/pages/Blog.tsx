import { motion } from 'framer-motion'

const inView = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const featured = {
  title: 'The Return of Brutalism: Why Rough Concrete Is Architecture\'s Most Honest Material',
  category: 'Theory',
  date: 'March 2026',
  readTime: '12 min read',
  excerpt:
    'Dismissed for decades as cold and inhuman, brutalist architecture is being rediscovered by a generation that values material honesty above all else. Miroslava Kucher argues that concrete — raw, uncompromising concrete — might be the most ethical material of our time.',
  image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
}

const posts = [
  {
    id: 1,
    title: 'On Silence in Architecture: The Rooms We Need',
    category: 'Essay',
    date: 'Feb 2026',
    readTime: '8 min',
    excerpt: 'In an era of open-plan everything, we argue for the return of the quiet room — spaces designed for contemplation, rest, and the recovery of attention.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 2,
    title: 'Designing for Climate: Beyond LEED Certification',
    category: 'Sustainability',
    date: 'Jan 2026',
    readTime: '10 min',
    excerpt: 'Sustainability cannot be a checklist. Genuine climate-responsive architecture requires rethinking orientation, mass, materiality, and the very purpose of a building.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 3,
    title: 'The Japanese Influence on Our Practice',
    category: 'Process',
    date: 'Dec 2025',
    readTime: '7 min',
    excerpt: 'After establishing our Tokyo partnership, the studio underwent a quiet transformation. Here is how Japanese spatial thinking changed the way we approach every new commission.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 4,
    title: 'Materiality and Memory: Why Buildings Should Age',
    category: 'Theory',
    date: 'Nov 2025',
    readTime: '9 min',
    excerpt: 'The patina of use, the weathering of surfaces, the darkening of stone — these are not failures of architecture. They are its biography.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 5,
    title: 'What Clients Don\'t Know They\'re Asking For',
    category: 'Practice',
    date: 'Oct 2025',
    readTime: '6 min',
    excerpt: 'A brief is a starting point, not a destination. The architect\'s task is to hear what is said, interpret what is meant, and imagine what is needed.',
    image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 6,
    title: 'The New Urban Village: Lessons from Vienna',
    category: 'Urban',
    date: 'Sep 2025',
    readTime: '11 min',
    excerpt: 'Vienna has long been considered the world\'s most liveable city. We explore the specific architectural and urban decisions behind that reputation.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=700&q=75',
  },
]

export default function Blog() {
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
            <img src={featured.image} alt={featured.title} loading="lazy" />
          </div>
          <div className="blog-featured-content">
            <p className="blog-eyebrow">{featured.category} · Featured</p>
            <h2 className="blog-featured-title">{featured.title}</h2>
            <div className="blog-meta">
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
            <p className="blog-excerpt">{featured.excerpt}</p>
            <a href="#" className="blog-read-more">
              Read Article
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
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
          {posts.map(({ id, title, category, date, readTime, excerpt, image }) => (
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
  )
}
