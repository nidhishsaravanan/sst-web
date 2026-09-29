// ============================================
// FOOTER COMPONENT
// ============================================
import { SITE_CONFIG, CATEGORIES } from '../data.js';
import { ICONS } from '../utils/helpers.js';

export function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <!-- About Column -->
            <div class="footer-about">
              <div class="footer-logo">
                <div class="footer-logo-icon">SST</div>
                <span class="footer-logo-text">${SITE_CONFIG.name}</span>
              </div>
              <p>Your trusted partner for comprehensive piping solutions in Tamil Nadu. We distribute premium quality pipes, fittings, and plumbing accessories from India's top brands.</p>
              <div class="footer-social">
                <a href="${SITE_CONFIG.social.facebook}" target="_blank" aria-label="Facebook">${ICONS.facebook}</a>
                <a href="${SITE_CONFIG.social.instagram}" target="_blank" aria-label="Instagram">${ICONS.instagram}</a>
                <a href="${SITE_CONFIG.social.youtube}" target="_blank" aria-label="YouTube">${ICONS.youtube}</a>
                <a href="${SITE_CONFIG.social.linkedin}" target="_blank" aria-label="LinkedIn">${ICONS.linkedin}</a>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-column">
              <h4>Quick Links</h4>
              <div class="footer-links">
                <a href="#/">Home</a>
                <a href="#/about">About Us</a>
                <a href="#/products">Products</a>
                <a href="#/quality">Quality & Certifications</a>
                <a href="#/downloads">Downloads</a>
                <a href="#/contact">Contact Us</a>
              </div>
            </div>

            <!-- Products -->
            <div class="footer-column">
              <h4>Products</h4>
              <div class="footer-links">
                ${CATEGORIES.slice(0, 8).map(cat => `
                  <a href="#/products?category=${cat.id}">${cat.name}</a>
                `).join('')}
              </div>
            </div>

            <!-- Contact -->
            <div class="footer-column">
              <h4>Contact Us</h4>
              <div class="footer-contact-item">
                <div class="icon">${ICONS.mapPin}</div>
                <div class="info">
                  <h5>Address</h5>
                  <p>${SITE_CONFIG.address}</p>
                </div>
              </div>
              <div class="footer-contact-item">
                <div class="icon">${ICONS.phone}</div>
                <div class="info">
                  <h5>Phone</h5>
                  <a href="tel:${SITE_CONFIG.phone}">${SITE_CONFIG.phone}</a>
                </div>
              </div>
              <div class="footer-contact-item">
                <div class="icon" style="color: #25D366;">${ICONS.whatsapp}</div>
                <div class="info">
                  <h5>WhatsApp Support</h5>
                  <a href="https://wa.me/${SITE_CONFIG.whatsapp}" target="_blank" style="color: #25D366; font-weight: 500;">${SITE_CONFIG.phone}</a>
                </div>
              </div>
              <div class="footer-contact-item">
                <div class="icon">${ICONS.mail}</div>
                <div class="info">
                  <h5>Email</h5>
                  <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>
                </div>
              </div>
              <div class="footer-contact-item">
                <div class="icon">${ICONS.clock}</div>
                <div class="info">
                  <h5>Working Hours</h5>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-inner">
            <p>&copy; ${new Date().getFullYear()} ${SITE_CONFIG.name}. All rights reserved. Made with <span class="heart">♥</span> in Tamil Nadu</p>
            <div class="footer-bottom-links">
              <a href="#/privacy">Privacy Policy</a>
              <a href="#/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Back to Top -->
    <button class="back-to-top" id="back-to-top" aria-label="Back to top">
      ${ICONS.arrowUp}
    </button>

    <!-- WhatsApp Float -->
    <div class="whatsapp-float">
      <a href="https://wa.me/${SITE_CONFIG.whatsapp}" target="_blank" class="whatsapp-float-btn" aria-label="Chat on WhatsApp">
        <span class="pulse-ring"></span>
        ${ICONS.whatsapp}
      </a>
      <div class="whatsapp-tooltip">Chat with us!</div>
    </div>
  `;
}

export function initFooter() {
  const backToTop = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTop?.classList.add('visible');
    } else {
      backToTop?.classList.remove('visible');
    }
  }, { passive: true });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
