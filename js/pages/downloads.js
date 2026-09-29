// ============================================
// DOWNLOADS PAGE
// ============================================
import { SITE_CONFIG } from '../data.js';
import { ICONS, buildWhatsAppUrl } from '../utils/helpers.js';

export function renderDownloadsPage() {
  const catalogs = [
    {
      title: 'Supreme Piping Systems Master Catalog 2026',
      category: 'Product Catalog',
      size: '14.2 MB',
      format: 'PDF',
      desc: 'Complete range of UPVC, CPVC, SWR, agricultural pipes, and fittings with technical specs and dimension tables.',
      link: '#'
    },
    {
      title: 'Ashirvad FlowGuard Plus CPVC Manual',
      category: 'Technical Guide',
      size: '8.5 MB',
      format: 'PDF',
      desc: 'Installation guidelines, solvent cement jointing procedures, and pressure ratings for hot & cold water plumbing.',
      link: '#'
    },
    {
      title: 'SWR Underground Drainage Pipe Dimension Chart',
      category: 'Dimensions & Specs',
      size: '3.1 MB',
      format: 'PDF',
      desc: 'SWR ring fit and solvent joint pipe diameters, rubber ring specifications, and slope calculations.',
      link: '#'
    },
    {
      title: 'Submersible Column & Casing Pipe Technical Datasheet',
      category: 'Borewell Systems',
      size: '5.4 MB',
      format: 'PDF',
      desc: 'Depth rating chart, thread profiles, load capacities, and drop pipe selector for deep borewell installations.',
      link: '#'
    },
    {
      title: 'Water Storage Tank Capacities & Installation Guide',
      category: 'Tanks & Accessories',
      size: '4.0 MB',
      format: 'PDF',
      desc: 'Triple layer & 4-layer foam tank dimensions, plumbing inlet/outlet placement, and UV protection specs.',
      link: '#'
    },
    {
      title: 'Sree Swamy Traders Wholesale Price List (Latest)',
      category: 'Price List',
      size: '2.8 MB',
      format: 'PDF',
      desc: 'Trade discount structure and approximate list prices for contractor bulk estimates.',
      link: '#'
    }
  ];

  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, "Hello Sree Swamy Traders, I would like to request specific PDF catalogues and technical brochures.");

  return `
    <div class="page-wrapper pt-header">
      <!-- Page Hero -->
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">/</span>
            <span class="current">Downloads</span>
          </div>
          <h1 class="page-title mt-2">Catalogs & Technical Resources</h1>
          <p class="page-subtitle">Download product catalogs, technical spec sheets, dimension charts, and installation manuals.</p>
        </div>
      </section>

      <!-- Downloads Grid -->
      <section class="downloads-section">
        <div class="container">
          <div class="downloads-grid">
            ${catalogs.map(item => `
              <div class="download-card reveal">
                <div class="download-icon-box">
                  ${ICONS.download}
                </div>
                <div class="download-info">
                  <div class="download-meta">
                    <span class="download-badge">${item.category}</span>
                    <span>${item.format} • ${item.size}</span>
                  </div>
                  <h3 class="mt-2">${item.title}</h3>
                  <p>${item.desc}</p>
                </div>
                <a href="${item.link}" class="btn btn-outline download-btn" onclick="alert('Downloading catalog: ${item.title}'); return false;">
                  <span>${ICONS.download}</span> Download Brochure
                </a>
              </div>
            `).join('')}
          </div>

          <!-- Need custom docs card -->
          <div class="contact-card mt-5 reveal text-center flex-column align-center" style="background: var(--bg-card-hover);">
            <div class="contact-card-icon" style="width: 60px; height: 60px; font-size: 28px;">
              ${ICONS.phone}
            </div>
            <div class="contact-card-content text-center">
              <h4>Need Specific Manufacturer Datasheets or CAD Drawings?</h4>
              <p>If you require specialized structural CAD models, flow chart rate tables, or project tender compliance certificates, our team will send them directly to your WhatsApp.</p>
              <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp mt-3">
                <span>${ICONS.whatsapp}</span> Request Document on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
