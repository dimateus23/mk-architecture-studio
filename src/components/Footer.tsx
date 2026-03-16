import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              MK<span> Architecture</span>
            </div>
            <p>
              Crafting spaces where form and function exist in perfect balance.
              Architecture that speaks to the human experience.
            </p>
          </div>

          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Journal</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Residential</Link></li>
              <li><Link to="/services">Commercial</Link></li>
              <li><Link to="/services">Urban Design</Link></li>
              <li><Link to="/services">Interior</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Get in Touch</Link></li>
              <li><Link to="/contact">Book Consultation</Link></li>
              <li><a href="mailto:studio@mkarchitecture.com">Email Studio</a></li>
              <li><a href="tel:+12125551234">+1 (212) 555-1234</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MK Architecture Studio. All rights reserved.</p>
          <p>New York · Vienna · Tokyo</p>
        </div>
      </div>
    </footer>
  )
}
