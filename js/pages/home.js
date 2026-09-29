// ============================================
// HOME PAGE
// ============================================
import { SITE_CONFIG, CATEGORIES, PRODUCTS, TESTIMONIALS, BRANDS, STATS, APPLICATIONS } from '../data.js';
import { ICONS, getCategoryIcon, getProductPlaceholderSVG } from '../utils/helpers.js';
import { initScrollReveal, animateCounters, initHeroSlider, initTestimonialSlider } from '../utils/animations.js';

export function renderHomePage() {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);
  
  return `
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero-slider">
        <div class="hero-slide active">
          <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1920&q=80" alt="Piping Warehouse" class="hero-slide-bg">
          <div class="hero-slide-overlay"></div>
        </div>
        <div class="hero-slide">
          <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80" alt="Industrial Piping" class="hero-slide-bg">
          <div class="hero-slide-overlay" style="background: linear-gradient(135deg, rgba(30,58,95,0.92), rgba(10,22,40,0.85))"></div>
        </div>
        <div class="hero-slide">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80" alt="Construction Pipelines" class="hero-slide-bg">
          <div class="hero-slide-overlay" style="background: linear-gradient(135deg, rgba(10,22,40,0.95), rgba(30,58,95,0.88))"></div>
        </div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="dot"></span>
            Trusted Pipe Distributors Since ${SITE_CONFIG.founded}
          </div>
          <h1>
            <span class="highlight">Piping Solutions</span><br>
            You Can Trust
          </h1>
          <p class="hero-description">
            Your one-stop destination for premium quality pipes, fittings & plumbing accessories from India's leading brands. Serving residential, commercial, industrial & agricultural sectors across Tamil Nadu.
          </p>
          <div class="hero-actions">
            <a href="#/products" class="btn btn-primary btn-lg">Explore Products ${ICONS.arrowRight}</a>
            <a href="#/contact" class="btn btn-glass btn-lg">Get a Quote</a>
          </div>
        </div>
      </div>

      <div class="hero-dots">
        <button class="hero-dot active" aria-label="Slide 1"></button>
        <button class="hero-dot" aria-label="Slide 2"></button>
        <button class="hero-dot" aria-label="Slide 3"></button>
      </div>

      <div class="hero-scroll">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
      </div>
    </section>

    <!-- Trusted Brands -->
    <section class="brands-strip">
      <div class="section-label">Authorized Distributors Of</div>
      <div class="brands-marquee">
        <div class="brands-track">
          ${[...BRANDS, ...BRANDS].map(brand => `
            <span class="brand-item">${brand}</span>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- About Snapshot -->
    <section class="about-snapshot">
      <div class="container">
        <div class="about-snapshot-grid">
          <div class="about-snapshot-image reveal-left">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80" alt="Sree Swamy Traders Pipe Warehouse Facility" style="width:100%;height:450px;object-fit:cover;border-radius:var(--radius-xl);box-shadow:var(--shadow-xl);">
            <div class="experience-badge">
              <div class="number">15+</div>
              <div class="label">Years of<br>Experience</div>
            </div>
          </div>
          <div class="about-snapshot-content reveal-right">
            <h2>Your Trusted <span class="highlight">Piping Partner</span> in Tamil Nadu</h2>
            <p>Sree Swamy Traders has been a leading distributor and dealer of premium quality piping products for over 15 years. We partner with India's top pipe brands to bring you the widest range of pipes, fittings, and plumbing accessories.</p>
            <p>Whether you're building a home, setting up an industrial plant, or managing a large-scale agricultural project, we have the right piping solution for every need.</p>
            <div class="about-features">
              <div class="about-feature"><span class="check">${ICONS.check}</span> Quality Assured Products</div>
              <div class="about-feature"><span class="check">${ICONS.check}</span> Wide Product Range</div>
              <div class="about-feature"><span class="check">${ICONS.check}</span> Expert Technical Guidance</div>
              <div class="about-feature"><span class="check">${ICONS.check}</span> Competitive Pricing</div>
              <div class="about-feature"><span class="check">${ICONS.check}</span> Pan-TN Delivery</div>
              <div class="about-feature"><span class="check">${ICONS.check}</span> After-Sales Support</div>
            </div>
            <a href="#/about" class="btn btn-primary">Learn More About Us ${ICONS.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <section class="product-categories section-dark">
      <div class="container">
        <div class="section-title reveal">
          <h2>Our <span class="highlight">Product</span> Categories</h2>
          <span class="subtitle-line"></span>
          <p>Explore our comprehensive range of piping products across 12+ categories, sourced from India's most trusted brands.</p>
        </div>
        <div class="categories-grid reveal-stagger">
          ${CATEGORIES.map(cat => `
            <a href="#/products?category=${cat.id}" class="category-card reveal">
              <div class="category-icon">${getCategoryIcon(cat.id)}</div>
              <h4>${cat.name}</h4>
              <p>${cat.count} products</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Featured Products Showcase -->
    <section class="section-padding">
      <div class="container">
        <div class="section-title reveal text-center">
          <h2>Featured <span class="highlight">Piping Systems</span></h2>
          <span class="subtitle-line" style="margin: 0.75rem auto 1.5rem auto;"></span>
          <p>Handpicked top-selling pipes trusted by engineers, contractors, and builders across Tamil Nadu.</p>
        </div>
        <div class="products-grid mt-4">
          ${featuredProducts.map(p => `
            <div class="product-card reveal">
              <a href="#/product/${p.slug}">
                <div class="product-card-image">
                  <img src="${p.images && p.images.length > 0 ? p.images[0] : getProductPlaceholderSVG(p.name, p.category)}" alt="${p.name}" loading="lazy">
                  <div class="product-card-badge"><span class="badge">Featured</span></div>
                </div>
              </a>
              <div class="product-card-body">
                <div class="product-card-category">${(CATEGORIES.find(c => c.id === p.category)?.name || p.category).toUpperCase()}</div>
                <a href="#/product/${p.slug}">
                  <h3 class="product-card-title">${p.name}</h3>
                </a>
                <p class="product-card-description">${p.shortDescription}</p>
                <div class="product-card-footer">
                  <a href="#/product/${p.slug}" class="product-card-link">View Details ${ICONS.arrowRight}</a>
                  <a href="https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi Sree Swamy Traders, I am interested in inquiring about ${p.name}`)}" target="_blank" class="product-card-whatsapp" title="Enquire on WhatsApp">${ICONS.whatsapp}</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 2.5rem;" class="reveal">
          <a href="#/products" class="btn btn-primary btn-lg">Explore Full Catalog (12+ Categories) ${ICONS.arrowRight}</a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose">
      <div class="container">
        <div class="section-title reveal">
          <h2>Why Choose <span class="highlight">SST</span></h2>
          <span class="subtitle-line"></span>
          <p>What makes us the preferred choice for thousands of customers across Tamil Nadu.</p>
        </div>
        <div class="why-choose-grid reveal-stagger">
          <div class="why-card reveal">
            <div class="why-card-icon">${ICONS.shield}</div>
            <h4>Quality Assured</h4>
            <p>Every product we sell is ISI/ISO certified, ensuring you get only the best quality pipes and fittings for your projects.</p>
          </div>
          <div class="why-card reveal">
            <div class="why-card-icon">${ICONS.pipe}</div>
            <h4>Wide Product Range</h4>
            <p>Over 5,000 products across 12+ categories — from PVC and CPVC to HDPE and PPR, we have everything you need.</p>
          </div>
          <div class="why-card reveal">
            <div class="why-card-icon">${ICONS.users}</div>
            <h4>Expert Guidance</h4>
            <p>Our team of experienced professionals helps you choose the right piping system for your specific application and budget.</p>
          </div>
          <div class="why-card reveal">
            <div class="why-card-icon">${ICONS.truck}</div>
            <h4>Fast Delivery</h4>
            <p>Prompt delivery across Tamil Nadu with our well-established logistics network. Bulk orders dispatched within 24-48 hours.</p>
          </div>
          <div class="why-card reveal">
            <div class="why-card-icon">${ICONS.target}</div>
            <h4>Competitive Pricing</h4>
            <p>As authorized distributors, we offer factory-direct pricing without compromising on quality or service.</p>
          </div>
          <div class="why-card reveal">
            <div class="why-card-icon">${ICONS.heart}</div>
            <h4>After-Sales Support</h4>
            <p>Our relationship doesn't end with the sale. We provide ongoing technical support and quick resolution of any issues.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Counter -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid reveal">
          ${STATS.map(stat => `
            <div class="stat-item">
              <div class="stat-number" data-count="${stat.number}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
              <div class="stat-divider"></div>
              <div class="stat-label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Applications -->
    <section class="applications">
      <div class="container">
        <div class="section-title reveal">
          <h2>Serving Every <span class="highlight">Sector</span></h2>
          <span class="subtitle-line"></span>
          <p>From homes to factories, farms to high-rises — our piping solutions power every sector.</p>
        </div>
        <div class="applications-grid reveal-stagger">
          ${[
            { name: 'Residential', desc: 'Complete plumbing solutions for homes and apartments', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
            { name: 'Commercial', desc: 'Hotels, hospitals, offices & shopping complexes', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
            { name: 'Industrial', desc: 'Factories, plants & manufacturing facilities', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
            { name: 'Agricultural', desc: 'Irrigation, borewell & farming water supply', img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80' }
          ].map(app => `
            <div class="application-card reveal" style="position:relative;overflow:hidden;border-radius:var(--radius-lg);height:260px;">
              <img src="${app.img}" alt="${app.name} Piping" style="width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;transition:transform 0.4s ease;">
              <div class="application-card-overlay" style="background: linear-gradient(180deg, rgba(10,22,40,0.2) 0%, rgba(10,22,40,0.92) 85%); position:relative; z-index:2; height:100%; display:flex; flex-direction:column; justify-content:flex-end; padding:1.5rem;">
                <h4>${app.name}</h4>
                <p style="color:var(--text-secondary);font-size:0.875rem;margin-top:0.35rem;">${app.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Certifications Band -->
    <section class="certifications-band">
      <div class="container">
        <div class="certifications-flex reveal">
          <div class="cert-item">
            <div class="cert-icon">${ICONS.shield}</div>
            <span>ISO 9001:2015</span>
          </div>
          <div class="cert-item">
            <div class="cert-icon">${ICONS.award}</div>
            <span>BIS / ISI Certified</span>
          </div>
          <div class="cert-item">
            <div class="cert-icon">${ICONS.check}</div>
            <span>ASTM Standards</span>
          </div>
          <div class="cert-item">
            <div class="cert-icon">${ICONS.globe}</div>
            <span>NSF International</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-title reveal">
          <h2>What Our <span class="highlight">Customers</span> Say</h2>
          <span class="subtitle-line"></span>
        </div>
        <div class="testimonials-slider reveal">
          ${TESTIMONIALS.map((t, i) => `
            <div class="testimonial-card ${i === 0 ? 'active' : ''}">
              <div class="testimonial-quote">"</div>
              <p>${t.text}</p>
              <div class="testimonial-author">
                <h5>${t.author}</h5>
                <span>${t.role}</span>
              </div>
            </div>
          `).join('')}
          <div class="testimonial-nav">
            ${TESTIMONIALS.map((_, i) => `
              <button class="testimonial-dot ${i === 0 ? 'active' : ''}" aria-label="Testimonial ${i + 1}"></button>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-banner">
      <div class="container">
        <div class="cta-content reveal">
          <h2>Need <span class="highlight">Piping Solutions?</span><br>Get in Touch Today!</h2>
          <p>Whether you need a single fitting or thousands of meters of pipes, we're here to help. Get expert advice and competitive quotes.</p>
          <div class="cta-actions">
            <a href="https://wa.me/${SITE_CONFIG.whatsapp}" target="_blank" class="whatsapp-enquiry-btn">${ICONS.whatsapp} Chat on WhatsApp</a>
            <a href="#/contact" class="btn btn-outline">Contact Us ${ICONS.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHomePage() {
  initScrollReveal();
  animateCounters();
  initHeroSlider();
  initTestimonialSlider();
}
