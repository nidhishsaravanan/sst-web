// ============================================
// PRODUCT DETAIL PAGE
// ============================================
import { PRODUCTS, CATEGORIES, SITE_CONFIG } from '../data.js';
import { ICONS, getCategoryIcon, getProductPlaceholderSVG, buildWhatsAppUrl } from '../utils/helpers.js';

export function renderProductDetailPage(params) {
  const productId = params?.id;
  const product = PRODUCTS.find(p => p.slug === productId || String(p.id) === String(productId)) || PRODUCTS[0];

  if (!product) {
    return `
      <div class="page-wrapper pt-header">
        <div class="container section-padding text-center">
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist or has been removed.</p>
          <a href="#/products" class="btn btn-primary mt-4">Back to Products</a>
        </div>
      </div>
    `;
  }

  const category = CATEGORIES.find(c => c.id === product.category);
  const categoryName = category?.name || product.category;
  // Attach categoryName for template use
  product.categoryName = categoryName;
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  relatedProducts.forEach(rp => {
    rp.categoryName = categoryName;
  });

  // Fallback placeholder images if no images in product
  const mainImage = product.image || getProductPlaceholderSVG(product.name, product.categoryName);
  const galleryImages = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [mainImage, mainImage, mainImage];

  const waMessage = `Hello Sree Swamy Traders! I am interested in inquiring about the following product:\n\n*Product:* ${product.name}\n*Category:* ${product.categoryName}\n*Brand:* ${product.brand || 'Supreme'}\n\nPlease share price, available stock, and specification details.`;
  const whatsappLink = buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, waMessage);

  setTimeout(() => {
    initGalleryHandlers();
  }, 50);

  return `
    <div class="page-wrapper pt-header">
      <!-- Breadcrumb Header -->
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">/</span>
            <a href="#/products">Products</a>
            <span class="separator">/</span>
            <a href="#/products?category=${product.category}">${product.categoryName}</a>
            <span class="separator">/</span>
            <span class="current">${product.name}</span>
          </div>
        </div>
      </section>

      <!-- Main Product Detail -->
      <section class="section-padding">
        <div class="container">
          <div class="product-detail-grid">
            <!-- Left: Gallery Showcase -->
            <div class="detail-gallery-container reveal-left">
              <div class="main-image-wrapper">
                <img id="main-product-img" src="${mainImage}" alt="${product.name}" class="main-product-img">
                <span class="detail-category-tag">${product.categoryName}</span>
              </div>
              <div class="detail-thumbnails">
                ${galleryImages.map((img, idx) => `
                  <div class="thumbnail-item ${idx === 0 ? 'active' : ''}" data-src="${img}">
                    <img src="${img}" alt="${product.name} thumbnail ${idx + 1}">
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Right: Details & Info -->
            <div class="detail-info-container reveal-right">
              <div class="detail-header">
                <div class="detail-brand-badge">${product.brand || 'Supreme Pipelines'}</div>
                <h1 class="detail-title">${product.name}</h1>
                <div class="detail-meta-row">
                  <span class="meta-item">${ICONS.check} In Stock</span>
                  <span class="meta-item">${ICONS.shield} ISO / BIS Certified</span>
                  <span class="meta-item">${ICONS.box} High Grade Material</span>
                </div>
              </div>

              <div class="detail-description">
                <p>${product.description}</p>
              </div>

              <!-- Available Sizes Badge List -->
              <div class="detail-spec-box">
                <h4><span class="icon-gold">${ICONS.ruler}</span> Available Size Range</h4>
                <div class="size-tags">
                  ${(product.sizes || ['1/2 inch', '3/4 inch', '1 inch', '1.25 inch', '1.5 inch', '2 inch', '3 inch', '4 inch']).map(size => `
                    <span class="size-tag">${size}</span>
                  `).join('')}
                </div>
              </div>

              <!-- Key Features -->
              <div class="detail-spec-box">
                <h4><span class="icon-gold">${ICONS.star}</span> Key Features & Highlights</h4>
                <ul class="detail-features-list">
                  ${(product.features || [
                    'Leak-proof jointing & superior flow capacity',
                    'Corrosion resistant & zero scale build-up',
                    'High pressure rating suitable for harsh environments',
                    'Long life service expectancy (>50 years)',
                    'Eco-friendly, lead-free & non-toxic formulation'
                  ]).map(feat => `
                    <li><span class="check-icon">${ICONS.check}</span> ${feat}</li>
                  `).join('')}
                </ul>
              </div>

              <!-- Action CTAs -->
              <div class="detail-cta-group">
                <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp flex-1">
                  <span>${ICONS.whatsapp}</span> Enquire on WhatsApp
                </a>
                <a href="#/contact" class="btn btn-secondary">
                  <span>${ICONS.mail}</span> Contact Sales
                </a>
              </div>

              <!-- Support Note -->
              <div class="detail-trust-note">
                ${ICONS.info} Direct distributor rates available for bulk orders. Pan-Tamil Nadu delivery support.
              </div>
            </div>
          </div>

          <!-- Technical Specs & Applications Tabs Section -->
          <div class="detail-tabs-wrapper mt-5 reveal">
            <div class="detail-tabs-header">
              <button class="tab-btn active" data-target="#tab-specs">Technical Specifications</button>
              <button class="tab-btn" data-target="#tab-applications">Applications</button>
              <button class="tab-btn" data-target="#tab-standards">Quality & Standards</button>
            </div>

            <div class="tab-content active" id="tab-specs">
              <table class="detail-specs-table">
                <tbody>
                  ${product.specifications && Object.keys(product.specifications).length > 0 ? Object.entries(product.specifications).map(([key, val]) => `
                    <tr>
                      <th>${key}</th>
                      <td>${val}</td>
                    </tr>
                  `).join('') : `
                    <tr>
                      <th>Material Grade</th>
                      <td>${product.material || 'Virgin Polyvinyl Chloride / CPVC'}</td>
                    </tr>
                    <tr>
                      <th>Standard Specification</th>
                      <td>IS 4985 / IS 15778 / ASTM Standards</td>
                    </tr>
                    <tr>
                      <th>Pressure Rating / Class</th>
                      <td>PN 6 to PN 16 / SDR 11 / SDR 13.5</td>
                    </tr>
                  `}
                </tbody>
              </table>
            </div>

            <div class="tab-content" id="tab-applications" style="display: none;">
              <div class="applications-detail-grid">
                ${(product.applications || ['Residential Plumbing', 'Industrial Chemical Transport', 'Agricultural Irrigation', 'Borewell & Underground Piping']).map(app => `
                  <div class="app-card-mini">
                    <div class="app-icon-mini">${ICONS.pipe}</div>
                    <div>
                      <h5>${app}</h5>
                      <p>Engineered to deliver high performance in ${app.toLowerCase()} environments.</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="tab-content" id="tab-standards" style="display: none;">
              <div class="standards-detail-box">
                <h4>Certified for Maximum Safety & Durability</h4>
                <p>All products distributed by Sree Swamy Traders undergo rigorous quality audits and adhere strictly to Bureau of Indian Standards (BIS) and International ISO parameters.</p>
                <div class="standards-badges mt-3">
                  <span class="badge-item">IS 4985 Certified</span>
                  <span class="badge-item">IS 15778 Certified</span>
                  <span class="badge-item">ISO 9001:2015</span>
                  <span class="badge-item">CIPP Approved</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Related Products Section -->
          ${relatedProducts.length > 0 ? `
            <div class="related-products-section mt-5 reveal">
              <div class="section-header">
                <h2>Related Products in ${product.categoryName}</h2>
                <p>Explore other piping solutions in this category</p>
              </div>
              <div class="products-grid mt-4">
                ${relatedProducts.map(rel => `
                  <div class="product-card">
                    <div class="product-card-image">
                      <img src="${rel.image || getProductPlaceholderSVG(rel.name, rel.categoryName)}" alt="${rel.name}">
                      <span class="product-badge">${rel.categoryName}</span>
                    </div>
                    <div class="product-card-body">
                      <h3 class="product-card-title">${rel.name}</h3>
                      <p class="product-card-desc">${rel.description.substring(0, 80)}...</p>
                      <div class="product-card-footer">
                        <a href="#/product/${rel.id}" class="btn btn-outline btn-sm">View Specs</a>
                        <a href="${buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, `Hi, I am inquiring about ${rel.name}`)}" target="_blank" class="btn btn-whatsapp btn-sm">${ICONS.whatsapp}</a>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

        </div>
      </section>
    </div>
  `;
}

export function initProductDetailPage() {
  initGalleryHandlers();
}

function initGalleryHandlers() {
  const thumbnails = document.querySelectorAll('.thumbnail-item');
  const mainImg = document.getElementById('main-product-img');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const src = thumb.getAttribute('data-src');
      if (mainImg && src) {
        mainImg.src = src;
      }
    });
  });

  // Tab handlers
  const tabBtns = document.querySelectorAll('.detail-tabs-header .tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.style.display = 'none');

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetContent = document.querySelector(targetId);
      if (targetContent) {
        targetContent.style.display = 'block';
      }
    });
  });
}
