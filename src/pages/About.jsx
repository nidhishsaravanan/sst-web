import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { SITE_CONFIG, BRAND_PARTNERS } from '../data/siteData.js';
import { buildWhatsAppUrl } from '../utils/helpers.js';
import { usePageTitle } from '../hooks/usePageTitle.js';

const CORE_VALUES = [
  { icon: 'shield', title: 'Quality Assurance', text: 'Every batch adheres strictly to BIS, ISI, and ISO specifications for maximum burst resistance and longevity.' },
  { icon: 'pipe', title: 'Exhaustive Inventory', text: 'Over 5,000+ SKUs under one roof including UPVC, CPVC, SWR, HDPE, Borewell casing, and water storage tanks.' },
  { icon: 'award', title: 'Direct Wholesale Rates', text: 'Unmatched trade discounts and clear, transparent pricing structures for high-volume purchasing.' },
  { icon: 'phone', title: 'Technical Support', text: 'Our experienced team helps calculate pressure ratings, pipe sizing, and fitting compatibility for your projects.' },
];

export default function About() {
  usePageTitle('About Us');
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsappNumber,
    'Hello Sree Swamy Traders, I would like to learn more about your pipe dealership options and supply capabilities.'
  );

  return (
    <div className="page-wrapper pt-header">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <h1 className="page-title mt-2">Empowering Infrastructure with Quality Piping</h1>
          <p className="page-subtitle">Tamil Nadu's trusted wholesale distributor &amp; stockist of premium piping systems since 2008.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2 align-center gap-5">
            <div className="about-image-wrapper reveal-left">
              <div className="about-img-frame">
                <img
                  src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=80"
                  alt="Sree Swamy Traders Pipe Warehouse"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="about-experience-badge">
                <span className="exp-years">15+</span>
                <span className="exp-text">Years of Piping Excellence</span>
              </div>
            </div>

            <div className="about-text-content reveal-right">
              <div className="tag-badge mb-3">Our Legacy &amp; Story</div>
              <h2 className="section-title">Your Reliability Partner for Every Piping Need</h2>
              <p className="text-muted leading-relaxed mb-4">
                Founded with a steadfast commitment to quality and service, <strong>Sree Swamy Traders</strong> has grown to
                become one of Tamil Nadu's premier stockists and authorized dealers of top-tier piping systems. We cater to
                plumbing contractors, industrial setups, agricultural farms, and commercial projects across the region.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                We bridge the gap between world-class pipe manufacturers and builders by providing instant stock
                availability, competitive wholesale pricing, and expert technical guidance for any scale of installation.
              </p>

              <div className="about-highlights-grid mt-4">
                <div className="highlight-card">
                  <div className="icon"><Icon name="check" /></div>
                  <div>
                    <h4>100% Genuine Brands</h4>
                    <p>Direct factory authorization for Supreme, Ashirvad, Finolex &amp; Astral</p>
                  </div>
                </div>
                <div className="highlight-card">
                  <div className="icon"><Icon name="truck" /></div>
                  <div>
                    <h4>Pan-State Logistics</h4>
                    <p>Fast dispatch and on-site delivery capability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-surface-dark">
        <div className="container">
          <div className="section-header text-center reveal">
            <div className="tag-badge">Guiding Principles</div>
            <h2>Driven By Purpose &amp; Precision</h2>
          </div>

          <div className="grid grid-2 gap-4 mt-5">
            <div className="vision-card reveal-left">
              <div className="card-icon"><Icon name="star" /></div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and preferred single-source piping solutions provider across South India, celebrated
                for customer satisfaction, product authenticity, and supply consistency.
              </p>
            </div>
            <div className="vision-card reveal-right">
              <div className="card-icon"><Icon name="shield" /></div>
              <h3>Our Mission</h3>
              <p>
                To deliver certified, durable, and eco-friendly piping products to every sector—from domestic homes to heavy
                industrial complexes—with transparent pricing and speed of delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center reveal">
            <div className="tag-badge">Core Pillars</div>
            <h2>Why Contractors Trust Sree Swamy Traders</h2>
          </div>

          <div className="grid grid-4 gap-4 mt-5">
            {CORE_VALUES.map((v) => (
              <div key={v.title} className="value-card reveal">
                <div className="value-icon"><Icon name={v.icon} /></div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="section-padding bg-surface-dark">
        <div className="container">
          <div className="section-header text-center reveal">
            <div className="tag-badge">Authorized Distributorships</div>
            <h2>We Deal Only in Industry Leaders</h2>
          </div>

          <div className="brands-grid mt-5 reveal">
            {BRAND_PARTNERS.map((brand) => (
              <div key={brand.name} className="brand-item-card">
                <h4>{brand.name}</h4>
                <p>{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding cta-section text-center">
        <div className="container reveal">
          <h2>Ready to Supply Your Next Big Piping Project?</h2>
          <p className="max-w-600 mx-auto mt-3">
            Get in touch with our sales advisory team today for customized quotations, product specs, or bulk order delivery
            schedules.
          </p>
          <div className="cta-actions mt-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
              <span><Icon name="whatsapp" /></span> Chat with Piping Experts
            </a>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
