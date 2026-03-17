import { useState, type FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { EASE_OUT, inView36 } from '../shared/motion/presets'
import styles from './Contact.module.css'

const inView = inView36

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact | MK Architecture Studio</title>
        <meta name="description" content="Get in touch with MK Architecture Studio to discuss your next project or collaboration." />
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
              Get In Touch
            </motion.span>
            <motion.h1
              className="page-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
            >
              Contact
            </motion.h1>
            <motion.p
              className="page-subtitle"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE_OUT }}
            >
              We welcome enquiries from clients, collaborators, institutions, and students.
              Every conversation begins with curiosity.
            </motion.p>
          </div>
        </div>

        <div className="container">
          <div className={styles.contactLayout}>
            {/* Info */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
            >
              <h2 className={styles.contactInfoTitle}>
                Let's build something<br />meaningful together
              </h2>
              <p className={styles.contactInfoDesc}>
                Whether you have a fully formed brief or just a vague feeling about what you need,
                we would love to hear from you.
              </p>

              <div className={styles.contactDetails}>
                <div>
                  <span className={styles.contactDetailLabel}>New York Studio</span>
                  <p className={styles.contactDetailValue}>45 West 18th Street, Suite 6<br />New York, NY 10011</p>
                </div>
                <div>
                  <span className={styles.contactDetailLabel}>Vienna Studio</span>
                  <p className={styles.contactDetailValue}>Schottenfeldgasse 62<br />1070 Wien, Austria</p>
                </div>
                <div>
                  <span className={styles.contactDetailLabel}>Email</span>
                  <p className={styles.contactDetailValue}>studio@mkarchitecture.com</p>
                </div>
                <div>
                  <span className={styles.contactDetailLabel}>Phone</span>
                  <p className={styles.contactDetailValue}>+1 (212) 555-1234</p>
                </div>
              </div>

              <div className={styles.contactSocial}>
                {['IG', 'LI', 'PX', 'BE'].map(s => (
                  <button key={s} type="button" className={styles.socialLink} aria-label={s}>
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    height: '100%',
                    gap: '16px',
                    padding: '60px 0',
                  }}
                >
                  <span className="page-eyebrow">Message Sent</span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}>
                    Thank you for reaching out.
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.85, maxWidth: '400px' }}>
                    We have received your message and will respond within two business days.
                    We look forward to learning about your project.
                  </p>
                </motion.div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="firstName">First Name</label>
                      <input id="firstName" type="text" placeholder="Miroslava" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="lastName">Last Name</label>
                      <input id="lastName" type="text" placeholder="Kucher" required />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="you@example.com" required />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input id="phone" type="tel" placeholder="+1 (000) 000-0000" />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="projectType">Project Type</label>
                    <select id="projectType" required defaultValue="">
                      <option value="" disabled>Select a category</option>
                      <option>Residential — New Build</option>
                      <option>Residential — Renovation</option>
                      <option>Commercial</option>
                      <option>Cultural / Civic</option>
                      <option>Urban Design</option>
                      <option>Interior Architecture</option>
                      <option>Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="budget">Approximate Budget</label>
                    <select id="budget" defaultValue="">
                      <option value="" disabled>Select a range</option>
                      <option>Under $250k</option>
                      <option>$250k – $1M</option>
                      <option>$1M – $5M</option>
                      <option>$5M – $20M</option>
                      <option>$20M+</option>
                      <option>Not yet determined</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Tell Us About Your Project</label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Describe your vision, site, timeline, and any specific requirements..."
                      required
                    />
                  </div>

                  <div className={styles.formSubmit}>
                    <button type="submit" className="btn-primary">
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Book Consultation */}
        <section className={styles.contactConsultation}>
          <div className="container">
            <motion.div
              className={styles.consultationInner}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={inView}
            >
              <div>
                <h2>Book a Consultation</h2>
                <p>
                  Not ready to commit to a full enquiry? Schedule a complimentary 30-minute
                  discovery call with our team. We will listen, ask questions, and help you
                  understand what architecture can do for your project.
                </p>
              </div>
              <button type="button" className="btn-primary" style={{ flexShrink: 0 }}>
                Schedule a Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </>
  )
}
