// ============================================
// HEADER COMPONENT
// ============================================
import { SITE_CONFIG } from '../data.js';
import { ICONS } from '../utils/helpers.js';

export function renderHeader() {
  const currentHash = window.location.hash.slice(1) || '/';
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/quality', label: 'Quality' },
    { path: '/downloads', label: 'Downloads' },
    { path: '/contact', label: 'Contact' },
  ];

  return `
    <header class="header" id="main-header">
      <div class="container" style="max-width: var(--container-wide)">
        <div class="header-inner">
          <a href="#/" class="header-logo">
            <div class="logo-icon">SST</div>
            <div class="logo-text">
              <span class="logo-name">${SITE_CONFIG.name}</span>
              <span class="logo-tagline">${SITE_CONFIG.tagline}</span>
            </div>
          </a>

          <nav class="nav-desktop">
            ${navLinks.map(link => `
              <a href="#${link.path}" class="nav-link ${currentHash === link.path || (link.path !== '/' && currentHash.startsWith(link.path)) ? 'active' : ''}">${link.label}</a>
            `).join('')}
          </nav>

          <div class="header-cta">
            <button class="header-search-btn" id="search-toggle" aria-label="Search">
              ${ICONS.search}
            </button>
            <a href="https://wa.me/${SITE_CONFIG.whatsapp}" target="_blank" class="header-whatsapp-btn" title="Chat on WhatsApp" aria-label="WhatsApp">
              <span class="wa-icon">${ICONS.whatsapp}</span>
              <span class="wa-number">${SITE_CONFIG.phone}</span>
            </a>
            <a href="#/contact" class="btn btn-primary btn-sm header-contact-btn">Get Quote</a>
            <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div class="mobile-overlay" id="mobile-overlay"></div>
    <div class="mobile-menu" id="mobile-menu">
      <div class="mobile-nav-links">
        ${navLinks.map(link => `
          <a href="#${link.path}" class="mobile-nav-link ${currentHash === link.path ? 'active' : ''}">${link.label}</a>
        `).join('')}
      </div>
      <div class="mobile-menu-footer">
        <div class="social-links">
          <a href="${SITE_CONFIG.social.facebook}" class="social-link" target="_blank" aria-label="Facebook">${ICONS.facebook}</a>
          <a href="${SITE_CONFIG.social.instagram}" class="social-link" target="_blank" aria-label="Instagram">${ICONS.instagram}</a>
          <a href="${SITE_CONFIG.social.youtube}" class="social-link" target="_blank" aria-label="YouTube">${ICONS.youtube}</a>
          <a href="${SITE_CONFIG.social.linkedin}" class="social-link" target="_blank" aria-label="LinkedIn">${ICONS.linkedin}</a>
        </div>
        <div class="mobile-menu-contact">
          <a href="tel:${SITE_CONFIG.phone}">${ICONS.phone} ${SITE_CONFIG.phone}</a>
          <a href="mailto:${SITE_CONFIG.email}">${ICONS.mail} ${SITE_CONFIG.email}</a>
        </div>
      </div>
    </div>

    <!-- Search Overlay -->
    <div class="search-overlay" id="search-overlay">
      <button class="search-close-btn" id="search-close">${ICONS.close}</button>
      <div class="search-overlay-content">
        <input type="text" class="search-overlay-input" id="search-input" placeholder="Search products..." autocomplete="off">
        <div class="search-results" id="search-results"></div>
      </div>
    </div>
  `;
}

export function initHeader() {
  const header = document.getElementById('main-header');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const searchToggle = document.getElementById('search-toggle');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Mobile menu toggle
  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  }

  function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  hamburger?.addEventListener('click', toggleMobileMenu);
  mobileOverlay?.addEventListener('click', closeMobileMenu);

  // Close mobile menu on nav link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Search overlay
  searchToggle?.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput?.focus(), 300);
  });

  searchClose?.addEventListener('click', () => {
    searchOverlay.classList.remove('open');
    if (searchInput) searchInput.value = '';
    const results = document.getElementById('search-results');
    if (results) results.innerHTML = '';
  });

  // Search functionality
  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const resultsContainer = document.getElementById('search-results');
    
    if (query.length < 2) {
      resultsContainer.innerHTML = '';
      return;
    }

    import('../data.js').then(({ PRODUCTS }) => {
      const results = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query)
      ).slice(0, 6);

      if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">No products found</p>';
        return;
      }

      resultsContainer.innerHTML = results.map(p => `
        <a href="#/product/${p.slug}" class="search-result-item" onclick="document.getElementById('search-overlay').classList.remove('open')">
          <div class="result-info">
            <h4>${p.name}</h4>
            <p>${p.category.toUpperCase()} • ${p.material}</p>
          </div>
        </a>
      `).join('');
    });
  });

  // Close search on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchOverlay?.classList.remove('open');
      closeMobileMenu();
    }
  });

  // Trigger initial scroll check
  if (window.pageYOffset > 50) {
    header.classList.add('scrolled');
  }
}

export function updateActiveNav(hash) {
  const currentPath = (hash || window.location.hash.slice(1) || '/').split('?')[0];
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const linkPath = link.getAttribute('href')?.replace('#', '') || '/';
    const isActive = linkPath === '/' ? currentPath === '/' : currentPath.startsWith(linkPath);
    link.classList.toggle('active', isActive);
  });
}
