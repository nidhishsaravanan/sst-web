import Icon from '../components/Icon.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { SITE_CONFIG } from '../data/siteData.js';
import { buildWhatsAppUrl } from '../utils/helpers.js';
import { usePageTitle } from '../hooks/usePageTitle.js';

const CERTIFICATIONS = [
  { icon: 'shield', title: 'BIS / ISI Standard', spec: 'IS 4985 / IS 15778 / IS 13592', text: 'Certified by Bureau of Indian Standards for dimensions, pressure ratings, and impact durability.' },
  { icon: 'award', title: 'ISO 9001:2015', spec: 'Quality Management System', text: 'Ensures stringent quality assurance protocols at every stage of production and batch testing.' },
  { icon: 'check', title: 'Lead-Free & Potable Safe', spec: 'NSF / CIPP Approved', text: '100% heavy-metal-free compounds safe for drinking water transportation with zero toxic leeching.' },
  { icon: 'star', title: 'ASTM Specifications', spec: 'ASTM D1785 / ASTM D2846', text: 'International standard compliance for Schedule 40, Schedule 80, and SDR series CPVC/UPVC pipes.' },
];

const TESTS = [
  { num: '01', title: 'Hydrostatic Pressure Test', text: 'Pipes are subjected to internal water pressure at 4x their rated capacity to verify burst resistance.' },
  { num: '02', title: 'Impact Resistance Test', text: 'Weight drop tests at sub-zero and room temperatures ensure toughness during transportation & handling.' },
  { num: '03', title: 'Thermal Reversion Test', text: 'Evaluating dimensional stability and heat endurance under extreme temperature stress conditions.' },
];

export default function Quality() {
  usePageTitle('Quality & Certifications');
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsappNumber,
    'Hello Sree Swamy Traders, I have an inquiry regarding quality certifications and compliance standards of your products.'
  );

  return (
    <div className="page-wrapper pt-header">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: 'Quality & Certifications' }]} />
          <h1 className="page-title mt-2">Uncompromised Quality Standards</h1>
          <p className="page-subtitle">
            Every pipe and fitting supplied by Sree Swamy Traders strictly adheres to national &amp; international standards.
          </p>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2 align-center gap-5">
            <div className="reveal-left">
              <div className="tag-badge mb-3">Our Benchmark</div>
              <h2 className="section-title">Engineered for Pressure, Built for Generations</h2>
              <p className="text-muted leading-relaxed mb-4">
                Piping systems form the hidden backbone of any building or infrastructure. At Sree Swamy Traders, quality is
                non-negotiable. We source exclusively from certified ISO 9001:2015 manufacturing plants that utilize virgin
                grade raw materials and computer-controlled extrusion processes.
              </p>
              <p className="text-muted leading-relaxed">
                Whether it's potable water distribution under high pressure or industrial effluent transport, our products
                guarantee zero leakage, high chemical resistance, and non-corrosive performance for over 50 years.
              </p>
            </div>
            <div className="quality-image-card reveal-right">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Quality Control Testing"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-surface-dark">
        <div className="container">
          <div className="section-header text-center reveal">
            <div className="tag-badge">Official Compliance</div>
            <h2>Standard Certifications &amp; Marks</h2>
          </div>
          <div className="certifications-grid mt-5">
            {CERTIFICATIONS.map((c) => (
              <div key={c.title} className="cert-card reveal">
                <div className="cert-icon"><Icon name={c.icon} /></div>
                <h3>{c.title}</h3>
                <p className="cert-spec">{c.spec}</p>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center reveal">
            <div className="tag-badge">Factory Testing</div>
            <h2>Rigorous Quality Testing Methods</h2>
          </div>
          <div className="grid grid-3 gap-4 mt-5">
            {TESTS.map((t) => (
              <div key={t.num} className="test-card reveal">
                <div className="test-num">{t.num}</div>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding cta-section text-center">
        <div className="container reveal">
          <h2>Need Quality Certificates or Test Reports for a Tender?</h2>
          <p className="max-w-600 mx-auto mt-3">
            We provide official manufacturer test certificates (MTC) and quality documentation for all major commercial orders.
          </p>
          <div className="cta-actions mt-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
              <span><Icon name="whatsapp" /></span> Request Quality Dossier
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
