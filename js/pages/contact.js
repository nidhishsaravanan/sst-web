// ============================================
// CONTACT US PAGE
// ============================================
import { SITE_CONFIG, CATEGORIES } from '../data.js';
import { ICONS, buildWhatsAppUrl } from '../utils/helpers.js';

export function renderContactPage() {
  setTimeout(() => {
    initContactFormHandler();
  }, 50);

  return `
    <div class="page-wrapper pt-header">
      <!-- Page Hero -->
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">/</span>
            <span class="current">Contact Us</span>
          </div>
          <h1 class="page-title mt-2">Get in Touch with Our Team</h1>
          <p class="page-subtitle">Have questions about products, wholesale pricing, or stock availability? Contact us directly!</p>
        </div>
      </section>

      <!-- Main Contact Section -->
      <section class="contact-section">
        <div class="container">
          <div class="contact-grid">
            
            <!-- Left Column: Contact Cards -->
            <div class="contact-info-wrapper reveal-left">
              
              <div class="contact-card">
                <div class="contact-card-icon">
                  ${ICONS.phone}
                </div>
                <div class="contact-card-content">
                  <h4>Phone & Direct Sales</h4>
                  <p><a href="tel:${SITE_CONFIG.phone}">${SITE_CONFIG.phone}</a></p>
                  <p style="font-size: 0.85rem; color: var(--accent-gold);">Call for instant quotes & supply support</p>
                </div>
              </div>

              <div class="contact-card">
                <div class="contact-card-icon">
                  ${ICONS.whatsapp}
                </div>
                <div class="contact-card-content">
                  <h4>Instant WhatsApp Inquiry</h4>
                  <p><a href="${buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, "Hi Sree Swamy Traders, I would like to make an inquiry.")}" target="_blank">${SITE_CONFIG.phone} (Click to Chat)</a></p>
                  <p style="font-size: 0.85rem; color: var(--accent-gold);">Available Mon-Sat for instant stock updates</p>
                </div>
              </div>

              <div class="contact-card">
                <div class="contact-card-icon">
                  ${ICONS.mail}
                </div>
                <div class="contact-card-content">
                  <h4>Email Support</h4>
                  <p><a href="mailto:info@sreeswamytraders.com">info@sreeswamytraders.com</a></p>
                  <p><a href="mailto:sales@sreeswamytraders.com">sales@sreeswamytraders.com</a></p>
                </div>
              </div>

              <div class="contact-card">
                <div class="contact-card-icon">
                  ${ICONS.location}
                </div>
                <div class="contact-card-content">
                  <h4>Warehouse & Head Office</h4>
                  <p>${SITE_CONFIG.address}</p>
                </div>
              </div>

              <div class="contact-card">
                <div class="contact-card-icon">
                  ${ICONS.star}
                </div>
                <div class="contact-card-content">
                  <h4>Business Hours</h4>
                  <p>Monday – Saturday: 8:30 AM – 8:00 PM</p>
                  <p style="color: var(--text-dark);">Sunday: Closed</p>
                </div>
              </div>

            </div>

            <!-- Right Column: Interactive WhatsApp Form -->
            <div class="contact-form-box reveal-right">
              <div class="tag-badge mb-2">Direct Inquiry</div>
              <h3>Send Us a Message</h3>
              <p>Fill in your details below. Submitting this form will automatically format and send your inquiry to our team via <strong>WhatsApp</strong> for immediate response.</p>

              <form id="contact-whatsapp-form" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="contact-name">Full Name *</label>
                    <input type="text" id="contact-name" class="form-input" placeholder="e.g. Ramesh Kumar" required>
                  </div>
                  <div class="form-group">
                    <label for="contact-phone">Phone / WhatsApp Number *</label>
                    <input type="tel" id="contact-phone" class="form-input" placeholder="e.g. 9876543210" required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="contact-user-type">You Are A *</label>
                    <select id="contact-user-type" class="form-select" required>
                      <option value="Plumbing Contractor">Plumbing Contractor</option>
                      <option value="Builder / Developer">Builder / Developer</option>
                      <option value="Industrial Buyer">Industrial Buyer</option>
                      <option value="Farmer / Agriculture">Farmer / Agriculture</option>
                      <option value="Retailer / Dealer">Retailer / Dealer</option>
                      <option value="Home Owner">Home Owner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="contact-category">Product Category Interest</label>
                    <select id="contact-category" class="form-select">
                      <option value="General Inquiry">-- Select Category --</option>
                      ${CATEGORIES.map(cat => `
                        <option value="${cat.name}">${cat.name}</option>
                      `).join('')}
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="contact-message">Requirements / Message *</label>
                  <textarea id="contact-message" class="form-textarea" placeholder="Describe the pipes, sizes, or quantities you need quotation for..." required></textarea>
                </div>

                <button type="submit" class="whatsapp-submit-btn">
                  <span>${ICONS.whatsapp}</span> Send Inquiry via WhatsApp
                </button>
              </form>
            </div>

          </div>

          <!-- Embedded Google Map -->
          <div class="map-container reveal">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.748281987556!2d78.13845050000001!3d11.664325!2m3!1f0!0!f0!30!m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1cc92476d0b%3A0xbef0f1bc41f92e80!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Sree Swamy Traders Map Location">
            </iframe>
          </div>

        </div>
      </section>
    </div>
  `;
}

export function initContactPage() {
  initContactFormHandler();
}

function initContactFormHandler() {
  const form = document.getElementById('contact-whatsapp-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const userType = document.getElementById('contact-user-type').value;
    const category = document.getElementById('contact-category').value;
    const message = document.getElementById('contact-message').value.trim();

    const formattedMessage = `Hello Sree Swamy Traders!\n\nI am contacting you from your website.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Category:* ${userType}\n*Interested Product:* ${category}\n\n*Requirement Details:*\n${message}`;

    const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, formattedMessage);

    window.open(whatsappUrl, '_blank');
  });
}
