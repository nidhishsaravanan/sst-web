import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { CATEGORIES, SITE_CONFIG } from '../data/siteData.js';
import { buildWhatsAppUrl, getProductPlaceholderSVG } from '../utils/helpers.js';

export function getCategoryName(categoryId) {
  return CATEGORIES.find((c) => c.id === categoryId)?.name || categoryId;
}

export function getProductImage(product) {
  return product.images?.length > 0 ? product.images[0] : getProductPlaceholderSVG(product.name, product.category);
}

/** Product card used on the Products listing, homepage Featured section, and Related Products. */
export default function ProductCard({ product, badge, reveal = false }) {
  const url = `/product/${product.slug}`;
  const badgeText = badge ?? (product.new ? 'New' : null);
  const waUrl = buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, `Hi Sree Swamy Traders, I'm interested in: ${product.name}`);

  return (
    <div className={`product-card${reveal ? ' reveal' : ''}`}>
      <Link to={url}>
        <div className="product-card-image">
          <img src={getProductImage(product)} alt={product.name} loading="lazy" />
          {badgeText && (
            <div className="product-card-badge">
              <span className="badge">{badgeText}</span>
            </div>
          )}
          <div className="product-card-actions">
            <span className="product-card-action-btn" title="Quick View">
              <Icon name="eye" />
            </span>
          </div>
        </div>
      </Link>
      <div className="product-card-body">
        <div className="product-card-category">{getCategoryName(product.category)}</div>
        <Link to={url}>
          <h3 className="product-card-title">{product.name}</h3>
        </Link>
        <p className="product-card-description">{product.shortDescription}</p>
        <div className="product-card-footer">
          <Link to={url} className="product-card-link">
            View Details <Icon name="arrowRight" />
          </Link>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="product-card-whatsapp" title="Enquire on WhatsApp">
            <Icon name="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
}
