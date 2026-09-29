// ============================================
// PRODUCTS PAGE
// ============================================
import { PRODUCTS, CATEGORIES, APPLICATIONS, SITE_CONFIG } from '../data.js';
import { ICONS, getCategoryIcon, getProductPlaceholderSVG, debounce } from '../utils/helpers.js';
import { initScrollReveal } from '../utils/animations.js';

let currentView = 'grid';
let activeFilters = { categories: [], applications: [], search: '' };
let currentSort = 'name';

export function renderProductsPage(params = {}) {
  // Pre-set filters from URL params
  if (params.category) {
    activeFilters.categories = [params.category];
  } else if (!window.location.hash.includes('category=')) {
    activeFilters.categories = [];
  }

  const initialFiltered = getFilteredProducts();
  const initialCards = initialFiltered.length > 0
    ? initialFiltered.map(p => renderProductCard(p)).join('')
    : `
      <div class="products-empty" style="grid-column:1/-1;">
        ${ICONS.search}
        <h3>No Products Found</h3>
        <p>Try adjusting your filters or search terms to find what you're looking for.</p>
      </div>
    `;

  let initialTags = '';
  activeFilters.categories.forEach(catId => {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (cat) {
      initialTags += `<span class="active-filter-tag">${cat.name} <span class="remove" data-type="category" data-value="${catId}">${ICONS.close}</span></span>`;
    }
  });

  return `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <div class="breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">${ICONS.chevronRight}</span>
            <span class="current">Products</span>
          </div>
          <h1>Our <span class="highlight">Products</span></h1>
          <p>Explore our complete range of pipes, fittings & plumbing accessories from India's top brands.</p>
        </div>
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <div class="products-layout">
          <!-- Sidebar -->
          <aside class="products-sidebar" id="products-sidebar">
            <div class="filter-close-btn" style="display:none;">
              <h3>Filters</h3>
              <button id="filter-close">${ICONS.close}</button>
            </div>
            
            <!-- Search -->
            <div class="filter-section">
              <div class="filter-search">
                ${ICONS.search}
                <input type="text" id="product-search" placeholder="Search products..." value="${activeFilters.search}">
              </div>
            </div>

            <!-- Categories -->
            <div class="filter-section">
              <h3>Categories <span class="filter-clear" id="clear-categories">Clear</span></h3>
              <div class="filter-options" id="category-filters">
                ${CATEGORIES.map(cat => `
                  <div class="filter-option ${activeFilters.categories.includes(cat.id) ? 'active' : ''}" data-category="${cat.id}">
                    <span class="checkbox">${ICONS.check}</span>
                    <span>${cat.name}</span>
                    <span class="count">${cat.count}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Applications -->
            <div class="filter-section">
              <h3>Applications <span class="filter-clear" id="clear-applications">Clear</span></h3>
              <div class="filter-options" id="application-filters">
                ${APPLICATIONS.map(app => `
                  <div class="filter-option ${activeFilters.applications.includes(app.id) ? 'active' : ''}" data-application="${app.id}">
                    <span class="checkbox">${ICONS.check}</span>
                    <span>${app.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </aside>

          <!-- Products Main -->
          <div class="products-main">
            <!-- Toolbar -->
            <div class="products-toolbar">
              <div>
                <button class="mobile-filter-btn" id="mobile-filter-btn">${ICONS.filter} Filters</button>
                <span class="products-count" id="products-count">Showing <strong>${initialFiltered.length}</strong> of ${PRODUCTS.length} products</span>
              </div>
              <div class="products-toolbar-right">
                <select class="sort-select" id="sort-select">
                  <option value="name">Sort by Name</option>
                  <option value="category">Sort by Category</option>
                  <option value="newest">Newest First</option>
                </select>
                <div class="view-toggle">
                  <button class="${currentView === 'grid' ? 'active' : ''}" data-view="grid" aria-label="Grid view">${ICONS.grid}</button>
                  <button class="${currentView === 'list' ? 'active' : ''}" data-view="list" aria-label="List view">${ICONS.list}</button>
                </div>
              </div>
            </div>

            <!-- Active Filters -->
            <div class="active-filters" id="active-filters">${initialTags}</div>

            <!-- Product Grid -->
            <div class="products-grid ${currentView === 'list' ? 'list-view' : ''}" id="products-grid">
              ${initialCards}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function getFilteredProducts() {
  let filtered = [...PRODUCTS];

  if (activeFilters.categories.length > 0) {
    filtered = filtered.filter(p => activeFilters.categories.includes(p.category));
  }

  if (activeFilters.applications.length > 0) {
    filtered = filtered.filter(p => 
      p.application.some(a => activeFilters.applications.includes(a))
    );
  }

  if (activeFilters.search) {
    const q = activeFilters.search.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (currentSort) {
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'category':
      filtered.sort((a, b) => a.category.localeCompare(b.category));
      break;
    case 'newest':
      filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
      break;
  }

  return filtered;
}

function renderProductCard(product) {
  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name || product.category;
  const imgSrc = product.images.length > 0 ? product.images[0] : getProductPlaceholderSVG(product.name, product.category);
  
  return `
    <div class="product-card">
      <a href="#/product/${product.slug}">
        <div class="product-card-image">
          <img src="${imgSrc}" alt="${product.name}" loading="lazy">
          ${product.new ? '<div class="product-card-badge"><span class="badge">New</span></div>' : ''}
          <div class="product-card-actions">
            <span class="product-card-action-btn" title="Quick View">${ICONS.eye}</span>
          </div>
        </div>
      </a>
      <div class="product-card-body">
        <div class="product-card-category">${categoryName}</div>
        <a href="#/product/${product.slug}">
          <h3 class="product-card-title">${product.name}</h3>
        </a>
        <p class="product-card-description">${product.shortDescription}</p>
        <div class="product-card-footer">
          <a href="#/product/${product.slug}" class="product-card-link">View Details ${ICONS.arrowRight}</a>
          <a href="https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in: ${product.name}`)}" target="_blank" class="product-card-whatsapp" title="Enquire on WhatsApp">${ICONS.whatsapp}</a>
        </div>
      </div>
    </div>
  `;
}

function updateProductGrid() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  const filtersEl = document.getElementById('active-filters');
  const filtered = getFilteredProducts();

  // Update count
  if (countEl) {
    countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${PRODUCTS.length} products`;
  }

  // Update active filter tags
  if (filtersEl) {
    let tags = '';
    activeFilters.categories.forEach(catId => {
      const cat = CATEGORIES.find(c => c.id === catId);
      if (cat) {
        tags += `<span class="active-filter-tag">${cat.name} <span class="remove" data-type="category" data-value="${catId}">${ICONS.close}</span></span>`;
      }
    });
    activeFilters.applications.forEach(appId => {
      const app = APPLICATIONS.find(a => a.id === appId);
      if (app) {
        tags += `<span class="active-filter-tag">${app.name} <span class="remove" data-type="application" data-value="${appId}">${ICONS.close}</span></span>`;
      }
    });
    if (activeFilters.categories.length + activeFilters.applications.length > 1) {
      tags += `<span class="clear-all-filters" id="clear-all">Clear All</span>`;
    }
    filtersEl.innerHTML = tags;

    // Attach remove handlers
    filtersEl.querySelectorAll('.remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.type;
        const value = btn.dataset.value;
        if (type === 'category') {
          activeFilters.categories = activeFilters.categories.filter(c => c !== value);
          document.querySelector(`[data-category="${value}"]`)?.classList.remove('active');
        } else if (type === 'application') {
          activeFilters.applications = activeFilters.applications.filter(a => a !== value);
          document.querySelector(`[data-application="${value}"]`)?.classList.remove('active');
        }
        updateProductGrid();
      });
    });

    document.getElementById('clear-all')?.addEventListener('click', () => {
      activeFilters.categories = [];
      activeFilters.applications = [];
      document.querySelectorAll('.filter-option').forEach(el => el.classList.remove('active'));
      updateProductGrid();
    });
  }

  // Update grid
  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="products-empty" style="grid-column:1/-1;">
          ${ICONS.search}
          <h3>No Products Found</h3>
          <p>Try adjusting your filters or search terms to find what you're looking for.</p>
          <button class="btn btn-primary" onclick="document.querySelectorAll('.filter-option').forEach(el => el.classList.remove('active')); window.activeFilters = {categories:[], applications:[], search:''};">Clear Filters</button>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
    }
  }
}

export function initProductsPage() {
  initScrollReveal();
  
  // Category filters
  document.querySelectorAll('[data-category]').forEach(el => {
    el.addEventListener('click', () => {
      const catId = el.dataset.category;
      el.classList.toggle('active');
      if (activeFilters.categories.includes(catId)) {
        activeFilters.categories = activeFilters.categories.filter(c => c !== catId);
      } else {
        activeFilters.categories.push(catId);
      }
      updateProductGrid();
    });
  });

  // Application filters
  document.querySelectorAll('[data-application]').forEach(el => {
    el.addEventListener('click', () => {
      const appId = el.dataset.application;
      el.classList.toggle('active');
      if (activeFilters.applications.includes(appId)) {
        activeFilters.applications = activeFilters.applications.filter(a => a !== appId);
      } else {
        activeFilters.applications.push(appId);
      }
      updateProductGrid();
    });
  });

  // Search
  const searchInput = document.getElementById('product-search');
  searchInput?.addEventListener('input', debounce((e) => {
    activeFilters.search = e.target.value;
    updateProductGrid();
  }, 300));

  // Sort
  document.getElementById('sort-select')?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    updateProductGrid();
  });

  // View toggle
  document.querySelectorAll('[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentView = btn.dataset.view;
      document.querySelectorAll('[data-view]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const grid = document.getElementById('products-grid');
      if (grid) {
        grid.classList.toggle('list-view', currentView === 'list');
      }
    });
  });

  // Mobile filter
  const mobileFilterBtn = document.getElementById('mobile-filter-btn');
  const sidebar = document.getElementById('products-sidebar');
  const filterClose = document.getElementById('filter-close');
  
  mobileFilterBtn?.addEventListener('click', () => {
    sidebar?.classList.add('open');
    document.querySelector('.filter-close-btn').style.display = 'flex';
  });
  
  filterClose?.addEventListener('click', () => {
    sidebar?.classList.remove('open');
  });

  // Clear filters
  document.getElementById('clear-categories')?.addEventListener('click', () => {
    activeFilters.categories = [];
    document.querySelectorAll('[data-category]').forEach(el => el.classList.remove('active'));
    updateProductGrid();
  });

  document.getElementById('clear-applications')?.addEventListener('click', () => {
    activeFilters.applications = [];
    document.querySelectorAll('[data-application]').forEach(el => el.classList.remove('active'));
    updateProductGrid();
  });

  // Initial render
  updateProductGrid();
}
