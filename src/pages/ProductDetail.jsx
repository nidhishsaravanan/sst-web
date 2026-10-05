import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ProductCard, { getCategoryName, getProductImage } from '../components/ProductCard.jsx';
import { PRODUCTS, SITE_CONFIG } from '../data/siteData.js';
import { buildWhatsAppUrl } from '../utils/helpers.js';
import { usePageTitle } from '../hooks/usePageTitle.js';

const DEFAULT_SIZES = ['1/2 inch', '3/4 inch', '1 inch', '1.25 inch', '1.5 inch', '2 inch', '3 inch', '4 inch'];
const DEFAULT_FEATURES = [
  'Leak-proof jointing & superior flow capacity',
  'Corrosion resistant & zero scale build-up',
  'High pressure rating suitable for harsh environments',
  'Long life service expectancy (>50 years)',
  'Eco-friendly, lead-free & non-toxic formulation',
];
const DEFAULT_APPLICATIONS = ['Residential Plumbing', 'Industrial Chemical Transport', 'Agricultural Irrigation', 'Borewell & Underground Piping'];

const TABS = [
  { id: 'specs', label: 'Technical Specifications' },
  { id: 'applications', label: 'Applications' },
  { id: 'standards', label: 'Quality & Standards' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.slug === id || String(p.id) === String(id));
  usePageTitle(product?.name ?? 'Product Not Found');

  if (!product) {
    return (
      <div className="page-wrapper pt-header">
        <div className="container section-padding text-center">
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist or has been removed.</p>
          <Link to="/products" className="btn btn-primary mt-4">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // key={product.id} resets gallery/tab state when navigating between products
  return <ProductDetailView key={product.id} product={product} />;
}

function ProductDetailView({ product }) {
  const categoryName = getCategoryName(product.category);
  const mainImage = getProductImage(product);
  const galleryImages = product.images?.length > 1 ? product.images : [mainImage, mainImage, mainImage];
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('specs');

  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const brand = product.brand || 'Supreme Pipelines';

  const waMessage = `Hello Sree Swamy Traders! I am interested in inquiring about the following product:\n\n*Product:* ${product.name}\n*Category:* ${categoryName}\n*Brand:* ${product.brand || 'Supreme'}\n\nPlease share price, available stock, and specification details.`;
  const whatsappLink = buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, waMessage);

  const specs = product.specifications && Object.keys(product.specifications).length > 0
    ? Object.entries(product.specifications)
    : [
        ['Material Grade', product.material || 'Virgin Polyvinyl Chloride / CPVC'],
        ['Standard Specification', 'IS 4985 / IS 15778 / ASTM Standards'],
        ['Pressure Rating / Class', 'PN 6 to PN 16 / SDR 11 / SDR 13.5'],
      ];

  return (
    <div className="page-wrapper pt-header">
      {/* Breadcrumb Header */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Products', to: '/products' },
              { label: categoryName, to: `/products?category=${product.category}` },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      {/* Main Product Detail */}
      <section className="section-padding">
        <div className="container">
          <div className="product-detail-grid">
            {/* Left: Gallery */}
            <div className="detail-gallery-container reveal-left">
              <div className="main-image-wrapper">
                <img id="main-product-img" src={galleryImages[activeImage]} alt={product.name} className="main-product-img" />
                <span className="detail-category-tag">{categoryName}</span>
              </div>
              <div className="detail-thumbnails">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`thumbnail-item${idx === activeImage ? ' active' : ''}`}
                    onClick={() => setActiveImage(idx)}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="detail-info-container reveal-right">
              <div className="detail-header">
                <div className="detail-brand-badge">{brand}</div>
                <h1 className="detail-title">{product.name}</h1>
                <div className="detail-meta-row">
                  <span className="meta-item"><Icon name="check" /> In Stock</span>
                  <span className="meta-item"><Icon name="shield" /> ISO / BIS Certified</span>
                  <span className="meta-item"><Icon name="box" /> High Grade Material</span>
                </div>
              </div>

              <div className="detail-description">
                <p>{product.description}</p>
              </div>

              <div className="detail-spec-box">
                <h4><span className="icon-gold"><Icon name="ruler" /></span> Available Size Range</h4>
                <div className="size-tags">
                  {(product.sizes || DEFAULT_SIZES).map((size) => (
                    <span key={size} className="size-tag">{size}</span>
                  ))}
                </div>
              </div>

              <div className="detail-spec-box">
                <h4><span className="icon-gold"><Icon name="star" /></span> Key Features &amp; Highlights</h4>
                <ul className="detail-features-list">
                  {(product.features || DEFAULT_FEATURES).map((feat) => (
                    <li key={feat}><span className="check-icon"><Icon name="check" /></span> {feat}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-cta-group">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp flex-1">
                  <span><Icon name="whatsapp" /></span> Enquire on WhatsApp
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  <span><Icon name="mail" /></span> Contact Sales
                </Link>
              </div>

              <div className="detail-trust-note">
                <Icon name="info" /> Direct distributor rates available for bulk orders. Pan-Tamil Nadu delivery support.
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="detail-tabs-wrapper mt-5 reveal">
            <div className="detail-tabs-header">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'specs' && (
              <div className="tab-content active" id="tab-specs">
                <table className="detail-specs-table">
                  <tbody>
                    {specs.map(([key, val]) => (
                      <tr key={key}>
                        <th>{key}</th>
                        <td>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="tab-content active" id="tab-applications">
                <div className="applications-detail-grid">
                  {(product.applications || DEFAULT_APPLICATIONS).map((app) => (
                    <div key={app} className="app-card-mini">
                      <div className="app-icon-mini"><Icon name="pipe" /></div>
                      <div>
                        <h5>{app}</h5>
                        <p>Engineered to deliver high performance in {app.toLowerCase()} environments.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'standards' && (
              <div className="tab-content active" id="tab-standards">
                <div className="standards-detail-box">
                  <h4>Certified for Maximum Safety &amp; Durability</h4>
                  <p>
                    All products distributed by Sree Swamy Traders undergo rigorous quality audits and adhere strictly to
                    Bureau of Indian Standards (BIS) and International ISO parameters.
                  </p>
                  <div className="standards-badges mt-3">
                    <span className="badge-item">IS 4985 Certified</span>
                    <span className="badge-item">IS 15778 Certified</span>
                    <span className="badge-item">ISO 9001:2015</span>
                    <span className="badge-item">CIPP Approved</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products-section mt-5 reveal">
              <div className="section-header">
                <h2>Related Products in {categoryName}</h2>
                <p>Explore other piping solutions in this category</p>
              </div>
              <div className="products-grid mt-4">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
