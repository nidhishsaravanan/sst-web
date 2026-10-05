import Icon from '../components/Icon.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { SITE_CONFIG } from '../data/siteData.js';
import { buildWhatsAppUrl } from '../utils/helpers.js';
import { usePageTitle } from '../hooks/usePageTitle.js';

const CATALOGS = [
  { title: 'Supreme Piping Systems Master Catalog 2026', category: 'Product Catalog', size: '14.2 MB', format: 'PDF', desc: 'Complete range of UPVC, CPVC, SWR, agricultural pipes, and fittings with technical specs and dimension tables.', link: '#' },
  { title: 'Ashirvad FlowGuard Plus CPVC Manual', category: 'Technical Guide', size: '8.5 MB', format: 'PDF', desc: 'Installation guidelines, solvent cement jointing procedures, and pressure ratings for hot & cold water plumbing.', link: '#' },
  { title: 'SWR Underground Drainage Pipe Dimension Chart', category: 'Dimensions & Specs', size: '3.1 MB', format: 'PDF', desc: 'SWR ring fit and solvent joint pipe diameters, rubber ring specifications, and slope calculations.', link: '#' },
  { title: 'Submersible Column & Casing Pipe Technical Datasheet', category: 'Borewell Systems', size: '5.4 MB', format: 'PDF', desc: 'Depth rating chart, thread profiles, load capacities, and drop pipe selector for deep borewell installations.', link: '#' },
  { title: 'Water Storage Tank Capacities & Installation Guide', category: 'Tanks & Accessories', size: '4.0 MB', format: 'PDF', desc: 'Triple layer & 4-layer foam tank dimensions, plumbing inlet/outlet placement, and UV protection specs.', link: '#' },
  { title: 'Sree Swamy Traders Wholesale Price List (Latest)', category: 'Price List', size: '2.8 MB', format: 'PDF', desc: 'Trade discount structure and approximate list prices for contractor bulk estimates.', link: '#' },
];

export default function Downloads() {
  usePageTitle('Downloads');
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsappNumber,
    'Hello Sree Swamy Traders, I would like to request specific PDF catalogues and technical brochures.'
  );

  // No PDFs are hosted yet (link: '#'), so keep the previous placeholder behaviour.
  const handleDownload = (e, item) => {
    if (item.link === '#') {
      e.preventDefault();
      alert(`Downloading catalog: ${item.title}`);
    }
  };

  return (
    <div className="page-wrapper pt-header">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: 'Downloads' }]} />
          <h1 className="page-title mt-2">Catalogs &amp; Technical Resources</h1>
          <p className="page-subtitle">Download product catalogs, technical spec sheets, dimension charts, and installation manuals.</p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="downloads-section">
        <div className="container">
          <div className="downloads-grid">
            {CATALOGS.map((item) => (
              <div key={item.title} className="download-card reveal">
                <div className="download-icon-box"><Icon name="download" /></div>
                <div className="download-info">
                  <div className="download-meta">
                    <span className="download-badge">{item.category}</span>
                    <span>{item.format} • {item.size}</span>
                  </div>
                  <h3 className="mt-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <a href={item.link} className="btn btn-outline download-btn" onClick={(e) => handleDownload(e, item)}>
                  <span><Icon name="download" /></span> Download Brochure
                </a>
              </div>
            ))}
          </div>

          {/* Custom docs card */}
          <div className="contact-card mt-5 reveal text-center flex-column align-center" style={{ background: 'var(--bg-card-hover)' }}>
            <div className="contact-card-icon" style={{ width: '60px', height: '60px', fontSize: '28px' }}>
              <Icon name="phone" />
            </div>
            <div className="contact-card-content text-center">
              <h4>Need Specific Manufacturer Datasheets or CAD Drawings?</h4>
              <p>
                If you require specialized structural CAD models, flow chart rate tables, or project tender compliance
                certificates, our team will send them directly to your WhatsApp.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-3">
                <span><Icon name="whatsapp" /></span> Request Document on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
