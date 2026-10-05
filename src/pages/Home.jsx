import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import CountUp from '../components/CountUp.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { SITE_CONFIG, CATEGORIES, PRODUCTS, TESTIMONIALS, BRANDS, STATS } from '../data/siteData.js';
import { getCategoryIcon } from '../utils/helpers.js';
import { usePageTitle } from '../hooks/usePageTitle.js';

const HERO_SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1920&q=80',
    alt: 'Piping Warehouse',
    overlay: undefined,
  },
  {
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80',
    alt: 'Industrial Piping',
    overlay: 'linear-gradient(135deg, rgba(30,58,95,0.92), rgba(10,22,40,0.85))',
  },
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    alt: 'Construction Pipelines',
    overlay: 'linear-gradient(135deg, rgba(10,22,40,0.95), rgba(30,58,95,0.88))',
  },
];

const ABOUT_FEATURES = [
  'Quality Assured Products',
  'Wide Product Range',
  'Expert Technical Guidance',
  'Competitive Pricing',
  'Pan-TN Delivery',
  'After-Sales Support',
];

const WHY_CHOOSE = [
  { icon: 'shield', title: 'Quality Assured', text: 'Every product we sell is ISI/ISO certified, ensuring you get only the best quality pipes and fittings for your projects.' },
  { icon: 'pipe', title: 'Wide Product Range', text: 'Over 5,000 products across 12+ categories — from PVC and CPVC to HDPE and PPR, we have everything you need.' },
  { icon: 'users', title: 'Expert Guidance', text: 'Our team of experienced professionals helps you choose the right piping system for your specific application and budget.' },
  { icon: 'truck', title: 'Fast Delivery', text: 'Prompt delivery across Tamil Nadu with our well-established logistics network. Bulk orders dispatched within 24-48 hours.' },
  { icon: 'target', title: 'Competitive Pricing', text: 'As authorized distributors, we offer factory-direct pricing without compromising on quality or service.' },
  { icon: 'heart', title: 'After-Sales Support', text: "Our relationship doesn't end with the sale. We provide ongoing technical support and quick resolution of any issues." },
];

const SECTORS = [
  { name: 'Residential', desc: 'Complete plumbing solutions for homes and apartments', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
  { name: 'Commercial', desc: 'Hotels, hospitals, offices & shopping complexes', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
  { name: 'Industrial', desc: 'Factories, plants & manufacturing facilities', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
  { name: 'Agricultural', desc: 'Irrigation, borewell & farming water supply', img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80' },
];

const CERTS = [
  { icon: 'shield', label: 'ISO 9001:2015' },
  { icon: 'award', label: 'BIS / ISI Certified' },
  { icon: 'check', label: 'ASTM Standards' },
  { icon: 'globe', label: 'NSF International' },
];

/** Auto-advancing index with manual selection that restarts the timer. */
function useAutoSlider(count, intervalMs) {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  const start = useCallback(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
  }, [count, intervalMs]);

  useEffect(() => {
    start();
    return () => clearInterval(timer.current);
  }, [start]);

  const goTo = (i) => {
    setIndex(i);
    start();
  };

  return [index, goTo];
}

export default function Home() {
  usePageTitle(null);
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 4);
  const [heroIndex, goToHero] = useAutoSlider(HERO_SLIDES.length, 5000);
  const [testimonialIndex, goToTestimonial] = useAutoSlider(TESTIMONIALS.length, 6000);

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-slider">
          {HERO_SLIDES.map((slide, i) => (
            <div key={slide.alt} className={`hero-slide${i === heroIndex ? ' active' : ''}`}>
              <img src={slide.img} alt={slide.alt} className="hero-slide-bg" />
              <div className="hero-slide-overlay" style={slide.overlay ? { background: slide.overlay } : undefined}></div>
            </div>
          ))}
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot"></span>
              Trusted Pipe Distributors Since {SITE_CONFIG.founded}
            </div>
            <h1>
              <span className="highlight">Piping Solutions</span>
              <br />
              You Can Trust
            </h1>
            <p className="hero-description">
              Your one-stop destination for premium quality pipes, fittings &amp; plumbing accessories from India's leading
              brands. Serving residential, commercial, industrial &amp; agricultural sectors across Tamil Nadu.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore Products <Icon name="arrowRight" />
              </Link>
              <Link to="/contact" className="btn btn-glass btn-lg">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-dots">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.alt}
              className={`hero-dot${i === heroIndex ? ' active' : ''}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goToHero(i)}
            ></button>
          ))}
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="brands-strip">
        <div className="section-label">Authorized Distributors Of</div>
        <div className="brands-marquee">
          <div className="brands-track">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span key={`${brand}-${i}`} className="brand-item">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="about-snapshot">
        <div className="container">
          <div className="about-snapshot-grid">
            <div className="about-snapshot-image reveal-left">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                alt="Sree Swamy Traders Pipe Warehouse Facility"
                style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }}
              />
              <div className="experience-badge">
                <div className="number">15+</div>
                <div className="label">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="about-snapshot-content reveal-right">
              <h2>
                Your Trusted <span className="highlight">Piping Partner</span> in Tamil Nadu
              </h2>
              <p>
                Sree Swamy Traders has been a leading distributor and dealer of premium quality piping products for over 15
                years. We partner with India's top pipe brands to bring you the widest range of pipes, fittings, and
                plumbing accessories.
              </p>
              <p>
                Whether you're building a home, setting up an industrial plant, or managing a large-scale agricultural
                project, we have the right piping solution for every need.
              </p>
              <div className="about-features">
                {ABOUT_FEATURES.map((f) => (
                  <div key={f} className="about-feature">
                    <span className="check"><Icon name="check" /></span> {f}
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us <Icon name="arrowRight" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories section-dark">
        <div className="container">
          <div className="section-title reveal">
            <h2>
              Our <span className="highlight">Product</span> Categories
            </h2>
            <span className="subtitle-line"></span>
            <p>Explore our comprehensive range of piping products across 12+ categories, sourced from India's most trusted brands.</p>
          </div>
          <div className="categories-grid reveal-stagger">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to={`/products?category=${cat.id}`} className="category-card reveal">
                <div className="category-icon"><Icon svg={getCategoryIcon(cat.id)} /></div>
                <h4>{cat.name}</h4>
                <p>{cat.count} products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title reveal text-center">
            <h2>
              Featured <span className="highlight">Piping Systems</span>
            </h2>
            <span className="subtitle-line" style={{ margin: '0.75rem auto 1.5rem auto' }}></span>
            <p>Handpicked top-selling pipes trusted by engineers, contractors, and builders across Tamil Nadu.</p>
          </div>
          <div className="products-grid mt-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} badge="Featured" reveal />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="reveal">
            <Link to="/products" className="btn btn-primary btn-lg">
              Explore Full Catalog (12+ Categories) <Icon name="arrowRight" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="section-title reveal">
            <h2>
              Why Choose <span className="highlight">SST</span>
            </h2>
            <span className="subtitle-line"></span>
            <p>What makes us the preferred choice for thousands of customers across Tamil Nadu.</p>
          </div>
          <div className="why-choose-grid reveal-stagger">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="why-card reveal">
                <div className="why-card-icon"><Icon name={item.icon} /></div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid reveal">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-item">
                <CountUp end={stat.number} suffix={stat.suffix} />
                <div className="stat-divider"></div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <div className="container">
          <div className="section-title reveal">
            <h2>
              Serving Every <span className="highlight">Sector</span>
            </h2>
            <span className="subtitle-line"></span>
            <p>From homes to factories, farms to high-rises — our piping solutions power every sector.</p>
          </div>
          <div className="applications-grid reveal-stagger">
            {SECTORS.map((app) => (
              <div
                key={app.name}
                className="application-card reveal"
                style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', height: '260px' }}
              >
                <img
                  src={app.img}
                  alt={`${app.name} Piping`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, transition: 'transform 0.4s ease' }}
                />
                <div
                  className="application-card-overlay"
                  style={{
                    background: 'linear-gradient(180deg, rgba(10,22,40,0.2) 0%, rgba(10,22,40,0.92) 85%)',
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.5rem',
                  }}
                >
                  <h4>{app.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.35rem' }}>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Band */}
      <section className="certifications-band">
        <div className="container">
          <div className="certifications-flex reveal">
            {CERTS.map((c) => (
              <div key={c.label} className="cert-item">
                <div className="cert-icon"><Icon name={c.icon} /></div>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title reveal">
            <h2>
              What Our <span className="highlight">Customers</span> Say
            </h2>
            <span className="subtitle-line"></span>
          </div>
          <div className="testimonials-slider reveal">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.author} className={`testimonial-card${i === testimonialIndex ? ' active' : ''}`}>
                <div className="testimonial-quote">"</div>
                <p>{t.text}</p>
                <div className="testimonial-author">
                  <h5>{t.author}</h5>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
            <div className="testimonial-nav">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.author}
                  className={`testimonial-dot${i === testimonialIndex ? ' active' : ''}`}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => goToTestimonial(i)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content reveal">
            <h2>
              Need <span className="highlight">Piping Solutions?</span>
              <br />
              Get in Touch Today!
            </h2>
            <p>
              Whether you need a single fitting or thousands of meters of pipes, we're here to help. Get expert advice and
              competitive quotes.
            </p>
            <div className="cta-actions">
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="whatsapp-enquiry-btn">
                <Icon name="whatsapp" /> Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Us <Icon name="arrowRight" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
