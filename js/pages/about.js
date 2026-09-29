// ============================================
// ABOUT US PAGE
// ============================================
import { SITE_CONFIG, STATS, BRAND_PARTNERS } from '../data.js';
import { ICONS, buildWhatsAppUrl } from '../utils/helpers.js';

export function renderAboutPage() {
  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, "Hello Sree Swamy Traders, I would like to learn more about your pipe dealership options and supply capabilities.");

  return `
    <div class="page-wrapper pt-header">
      <!-- Page Hero -->
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">/</span>
            <span class="current">About Us</span>
          </div>
          <h1 class="page-title mt-2">Empowering Infrastructure with Quality Piping</h1>
          <p class="page-subtitle">Tamil Nadu's trusted wholesale distributor & stockist of premium piping systems since 2008.</p>
        </div>
      </section>

      <!-- Company Overview Section -->
      <section class="section-padding">
        <div class="container">
          <div class="grid grid-2 align-center gap-5">
            <div class="about-image-wrapper reveal-left">
              <div class="about-img-frame">
                <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=80" alt="Sree Swamy Traders Pipe Warehouse" class="rounded-lg shadow-xl">
              </div>
              <div class="about-experience-badge">
                <span class="exp-years">15+</span>
                <span class="exp-text">Years of Piping Excellence</span>
              </div>
            </div>

            <div class="about-text-content reveal-right">
              <div class="tag-badge mb-3">Our Legacy & Story</div>
              <h2 class="section-title">Your Reliability Partner for Every Piping Need</h2>
              <p class="text-muted leading-relaxed mb-4">
                Founded with a steadfast commitment to quality and service, <strong>Sree Swamy Traders</strong> has grown to become one of Tamil Nadu's premier stockists and authorized dealers of top-tier piping systems. We cater to plumbing contractors, industrial setups, agricultural farms, and commercial projects across the region.
              </p>
              <p class="text-muted leading-relaxed mb-4">
                We bridge the gap between world-class pipe manufacturers and builders by providing instant stock availability, competitive wholesale pricing, and expert technical guidance for any scale of installation.
              </p>

              <div class="about-highlights-grid mt-4">
                <div class="highlight-card">
                  <div class="icon">${ICONS.check}</div>
                  <div>
                    <h4>100% Genuine Brands</h4>
                    <p>Direct factory authorization for Supreme, Ashirvad, Finolex & Astral</p>
                  </div>
                </div>
                <div class="highlight-card">
                  <div class="icon">${ICONS.truck}</div>
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

      <!-- Vision & Mission -->
      <section class="section-padding bg-surface-dark">
        <div class="container">
          <div class="section-header text-center reveal">
            <div class="tag-badge">Guiding Principles</div>
            <h2>Driven By Purpose & Precision</h2>
          </div>

          <div class="grid grid-2 gap-4 mt-5">
            <div class="vision-card reveal-left">
              <div class="card-icon">${ICONS.star}</div>
              <h3>Our Vision</h3>
              <p>To be the most trusted and preferred single-source piping solutions provider across South India, celebrated for customer satisfaction, product authenticity, and supply consistency.</p>
            </div>

            <div class="vision-card reveal-right">
              <div class="card-icon">${ICONS.shield}</div>
              <h3>Our Mission</h3>
              <p>To deliver certified, durable, and eco-friendly piping products to every sector—from domestic homes to heavy industrial complexes—with transparent pricing and speed of delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Values -->
      <section class="section-padding">
        <div class="container">
          <div class="section-header text-center reveal">
            <div class="tag-badge">Core Pillars</div>
            <h2>Why Contractors Trust Sree Swamy Traders</h2>
          </div>

          <div class="grid grid-4 gap-4 mt-5">
            <div class="value-card reveal">
              <div class="value-icon">${ICONS.shield}</div>
              <h4>Quality Assurance</h4>
              <p>Every batch adheres strictly to BIS, ISI, and ISO specifications for maximum burst resistance and longevity.</p>
            </div>

            <div class="value-card reveal">
              <div class="value-icon">${ICONS.pipe}</div>
              <h4>Exhaustive Inventory</h4>
              <p>Over 5,000+ SKUs under one roof including UPVC, CPVC, SWR, HDPE, Borewell casing, and water storage tanks.</p>
            </div>

            <div class="value-card reveal">
              <div class="value-icon">${ICONS.award}</div>
              <h4>Direct Wholesale Rates</h4>
              <p>Unmatched trade discounts and clear, transparent pricing structures for high-volume purchasing.</p>
            </div>

            <div class="value-card reveal">
              <div class="value-icon">${ICONS.phone}</div>
              <h4>Technical Support</h4>
              <p>Our experienced team helps calculate pressure ratings, pipe sizing, and fitting compatibility for your projects.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Brand Partners Strip -->
      <section class="section-padding bg-surface-dark">
        <div class="container">
          <div class="section-header text-center reveal">
            <div class="tag-badge">Authorized Distributorships</div>
            <h2>We Deal Only in Industry Leaders</h2>
          </div>

          <div class="brands-grid mt-5 reveal">
            ${BRAND_PARTNERS.map(brand => `
              <div class="brand-item-card">
                <h4>${brand.name}</h4>
                <p>${brand.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA Banner -->
      <section class="section-padding cta-section text-center">
        <div class="container reveal">
          <h2>Ready to Supply Your Next Big Piping Project?</h2>
          <p class="max-w-600 mx-auto mt-3">Get in touch with our sales advisory team today for customized quotations, product specs, or bulk order delivery schedules.</p>
          <div class="cta-actions mt-4">
            <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp btn-lg">
              <span>${ICONS.whatsapp}</span> Chat with Piping Experts
            </a>
            <a href="#/contact" class="btn btn-outline btn-lg">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
