// ============================================
// QUALITY & CERTIFICATIONS PAGE
// ============================================
import { SITE_CONFIG } from '../data.js';
import { ICONS, buildWhatsAppUrl } from '../utils/helpers.js';

export function renderQualityPage() {
  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, "Hello Sree Swamy Traders, I have an inquiry regarding quality certifications and compliance standards of your products.");

  return `
    <div class="page-wrapper pt-header">
      <!-- Page Hero -->
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">/</span>
            <span class="current">Quality & Certifications</span>
          </div>
          <h1 class="page-title mt-2">Uncompromised Quality Standards</h1>
          <p class="page-subtitle">Every pipe and fitting supplied by Sree Swamy Traders strictly adheres to national & international standards.</p>
        </div>
      </section>

      <!-- Quality Commitment -->
      <section class="section-padding">
        <div class="container">
          <div class="grid grid-2 align-center gap-5">
            <div class="reveal-left">
              <div class="tag-badge mb-3">Our Benchmark</div>
              <h2 class="section-title">Engineered for Pressure, Built for Generations</h2>
              <p class="text-muted leading-relaxed mb-4">
                Piping systems form the hidden backbone of any building or infrastructure. At Sree Swamy Traders, quality is non-negotiable. We source exclusively from certified ISO 9001:2015 manufacturing plants that utilize virgin grade raw materials and computer-controlled extrusion processes.
              </p>
              <p class="text-muted leading-relaxed">
                Whether it's potable water distribution under high pressure or industrial effluent transport, our products guarantee zero leakage, high chemical resistance, and non-corrosive performance for over 50 years.
              </p>
            </div>
            <div class="quality-image-card reveal-right">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" alt="Quality Control Testing" class="rounded-lg shadow-xl">
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications Grid -->
      <section class="section-padding bg-surface-dark">
        <div class="container">
          <div class="section-header text-center reveal">
            <div class="tag-badge">Official Compliance</div>
            <h2>Standard Certifications & Marks</h2>
          </div>

          <div class="certifications-grid mt-5">
            <div class="cert-card reveal">
              <div class="cert-icon">${ICONS.shield}</div>
              <h3>BIS / ISI Standard</h3>
              <p class="cert-spec">IS 4985 / IS 15778 / IS 13592</p>
              <p>Certified by Bureau of Indian Standards for dimensions, pressure ratings, and impact durability.</p>
            </div>

            <div class="cert-card reveal">
              <div class="cert-icon">${ICONS.award}</div>
              <h3>ISO 9001:2015</h3>
              <p class="cert-spec">Quality Management System</p>
              <p>Ensures stringent quality assurance protocols at every stage of production and batch testing.</p>
            </div>

            <div class="cert-card reveal">
              <div class="cert-icon">${ICONS.check}</div>
              <h3>Lead-Free & Potable Safe</h3>
              <p class="cert-spec">NSF / CIPP Approved</p>
              <p>100% heavy-metal-free compounds safe for drinking water transportation with zero toxic leeching.</p>
            </div>

            <div class="cert-card reveal">
              <div class="cert-icon">${ICONS.star}</div>
              <h3>ASTM Specifications</h3>
              <p class="cert-spec">ASTM D1785 / ASTM D2846</p>
              <p>International standard compliance for Schedule 40, Schedule 80, and SDR series CPVC/UPVC pipes.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testing & Inspection Protocols -->
      <section class="section-padding">
        <div class="container">
          <div class="section-header text-center reveal">
            <div class="tag-badge">Factory Testing</div>
            <h2>Rigorous Quality Testing Methods</h2>
          </div>

          <div class="grid grid-3 gap-4 mt-5">
            <div class="test-card reveal">
              <div class="test-num">01</div>
              <h4>Hydrostatic Pressure Test</h4>
              <p>Pipes are subjected to internal water pressure at 4x their rated capacity to verify burst resistance.</p>
            </div>

            <div class="test-card reveal">
              <div class="test-num">02</div>
              <h4>Impact Resistance Test</h4>
              <p>Weight drop tests at sub-zero and room temperatures ensure toughness during transportation & handling.</p>
            </div>

            <div class="test-card reveal">
              <div class="test-num">03</div>
              <h4>Thermal Reversion Test</h4>
              <p>Evaluating dimensional stability and heat endurance under extreme temperature stress conditions.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-padding cta-section text-center">
        <div class="container reveal">
          <h2>Need Quality Certificates or Test Reports for a Tender?</h2>
          <p class="max-w-600 mx-auto mt-3">We provide official manufacturer test certificates (MTC) and quality documentation for all major commercial orders.</p>
          <div class="cta-actions mt-4">
            <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp btn-lg">
              <span>${ICONS.whatsapp}</span> Request Quality Dossier
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}
