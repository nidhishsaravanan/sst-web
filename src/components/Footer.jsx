import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { SITE_CONFIG, CATEGORIES } from '../data/siteData.js';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">
              {/* About Column */}
              <div className="footer-about">
                <div className="footer-logo">
                  <div className="footer-logo-icon">SST</div>
                  <span className="footer-logo-text">{SITE_CONFIG.name}</span>
                </div>
                <p>
                  Your trusted partner for comprehensive piping solutions in Tamil Nadu. We distribute premium quality pipes,
                  fittings, and plumbing accessories from India's top brands.
                </p>
                <div className="footer-social">
                  <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
                  <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
                  <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="youtube" /></a>
                  <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-column">
                <h4>Quick Links</h4>
                <div className="footer-links">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/quality">Quality &amp; Certifications</Link>
                  <Link to="/downloads">Downloads</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>

              {/* Products */}
              <div className="footer-column">
                <h4>Products</h4>
                <div className="footer-links">
                  {CATEGORIES.slice(0, 8).map((cat) => (
                    <Link key={cat.id} to={`/products?category=${cat.id}`}>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="footer-column">
                <h4>Contact Us</h4>
                <div className="footer-contact-item">
                  <div className="icon"><Icon name="mapPin" /></div>
                  <div className="info">
                    <h5>Address</h5>
                    <p>{SITE_CONFIG.address}</p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="icon"><Icon name="phone" /></div>
                  <div className="info">
                    <h5>Phone</h5>
                    <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="icon" style={{ color: '#25D366' }}><Icon name="whatsapp" /></div>
                  <div className="info">
                    <h5>WhatsApp Support</h5>
                    <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 500 }}>
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="icon"><Icon name="mail" /></div>
                  <div className="info">
                    <h5>Email</h5>
                    <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="icon"><Icon name="clock" /></div>
                  <div className="info">
                    <h5>Working Hours</h5>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-inner">
              <p>
                &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Made with <span className="heart">♥</span> in Tamil Nadu
              </p>
              <div className="footer-bottom-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        className={`back-to-top${showBackToTop ? ' visible' : ''}`}
        id="back-to-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="arrowUp" />
      </button>

      {/* WhatsApp Float */}
      <div className="whatsapp-float">
        <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="whatsapp-float-btn" aria-label="Chat on WhatsApp">
          <span className="pulse-ring"></span>
          <Icon name="whatsapp" />
        </a>
        <div className="whatsapp-tooltip">Chat with us!</div>
      </div>
    </>
  );
}
