import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { SITE_CONFIG, CATEGORIES } from '../data/siteData.js';
import { buildWhatsAppUrl } from '../utils/helpers.js';
import { usePageTitle } from '../hooks/usePageTitle.js';

const USER_TYPES = ['Plumbing Contractor', 'Builder / Developer', 'Industrial Buyer', 'Farmer / Agriculture', 'Retailer / Dealer', 'Home Owner', 'Other'];

const INITIAL_FORM = {
  name: '',
  phone: '',
  userType: USER_TYPES[0],
  category: 'General Inquiry',
  message: '',
};

export default function Contact() {
  usePageTitle('Contact Us');
  const [form, setForm] = useState(INITIAL_FORM);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage =
      `Hello Sree Swamy Traders!\n\nI am contacting you from your website.\n\n` +
      `*Name:* ${form.name.trim()}\n*Phone:* ${form.phone.trim()}\n*Category:* ${form.userType}\n*Interested Product:* ${form.category}\n\n` +
      `*Requirement Details:*\n${form.message.trim()}`;
    window.open(buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, formattedMessage), '_blank');
  };

  return (
    <div className="page-wrapper pt-header">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <h1 className="page-title mt-2">Get in Touch with Our Team</h1>
          <p className="page-subtitle">Have questions about products, wholesale pricing, or stock availability? Contact us directly!</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Cards */}
            <div className="contact-info-wrapper reveal-left">
              <div className="contact-card">
                <div className="contact-card-icon"><Icon name="phone" /></div>
                <div className="contact-card-content">
                  <h4>Phone &amp; Direct Sales</h4>
                  <p><a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }}>Call for instant quotes &amp; supply support</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon"><Icon name="whatsapp" /></div>
                <div className="contact-card-content">
                  <h4>Instant WhatsApp Inquiry</h4>
                  <p>
                    <a
                      href={buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, 'Hi Sree Swamy Traders, I would like to make an inquiry.')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {SITE_CONFIG.phone} (Click to Chat)
                    </a>
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }}>Available Mon-Sat for instant stock updates</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon"><Icon name="mail" /></div>
                <div className="contact-card-content">
                  <h4>Email Support</h4>
                  <p><a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon"><Icon name="location" /></div>
                <div className="contact-card-content">
                  <h4>Warehouse &amp; Head Office</h4>
                  <p>{SITE_CONFIG.address}</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon"><Icon name="star" /></div>
                <div className="contact-card-content">
                  <h4>Business Hours</h4>
                  <p>Monday – Saturday: 8:30 AM – 8:00 PM</p>
                  <p style={{ color: 'var(--text-dark)' }}>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Right: WhatsApp Form */}
            <div className="contact-form-box reveal-right">
              <div className="tag-badge mb-2">Direct Inquiry</div>
              <h3>Send Us a Message</h3>
              <p>
                Fill in your details below. Submitting this form will automatically format and send your inquiry to our team
                via <strong>WhatsApp</strong> for immediate response.
              </p>

              <form id="contact-whatsapp-form" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input type="text" id="contact-name" className="form-input" placeholder="e.g. Ramesh Kumar" required value={form.name} onChange={update('name')} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone / WhatsApp Number *</label>
                    <input type="tel" id="contact-phone" className="form-input" placeholder="e.g. 9876543210" required value={form.phone} onChange={update('phone')} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-user-type">You Are A *</label>
                    <select id="contact-user-type" className="form-select" required value={form.userType} onChange={update('userType')}>
                      {USER_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-category">Product Category Interest</label>
                    <select id="contact-category" className="form-select" value={form.category} onChange={update('category')}>
                      <option value="General Inquiry">-- Select Category --</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Requirements / Message *</label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    placeholder="Describe the pipes, sizes, or quantities you need quotation for..."
                    required
                    value={form.message}
                    onChange={update('message')}
                  ></textarea>
                </div>

                <button type="submit" className="whatsapp-submit-btn">
                  <span><Icon name="whatsapp" /></span> Send Inquiry via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="map-container reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.748281987556!2d78.13845050000001!3d11.664325!2m3!1f0!0!f0!30!m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1cc92476d0b%3A0xbef0f1bc41f92e80!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sree Swamy Traders Map Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
