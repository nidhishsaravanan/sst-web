// ============================================
// APP ENTRY POINT — Sree Swamy Traders
// ============================================

import { Router } from './router.js';
import { renderHeader, initHeader, updateActiveNav } from './components/header.js';
import { renderFooter, initFooter } from './components/footer.js';
import { initScrollReveal, animateCounters, initHeroSlider, initTestimonialSlider } from './utils/animations.js';

// Import Pages
import { renderHomePage } from './pages/home.js';
import { renderProductsPage, initProductsPage } from './pages/products.js';
import { renderProductDetailPage, initProductDetailPage } from './pages/product-detail.js';
import { renderAboutPage } from './pages/about.js';
import { renderQualityPage } from './pages/quality.js';
import { renderDownloadsPage } from './pages/downloads.js';
import { renderContactPage, initContactPage } from './pages/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router();

  // Root container elements
  const headerRoot = document.getElementById('header-root');
  const appRoot = document.getElementById('app-root');
  const footerRoot = document.getElementById('footer-root');

  // Render Persistent Header & Footer
  if (headerRoot) {
    headerRoot.innerHTML = renderHeader();
    initHeader();
  }

  if (footerRoot) {
    footerRoot.innerHTML = renderFooter();
    initFooter();
  }

  // Register SPA Routes
  router.add('/', () => {
    return renderHomePage();
  });

  router.add('/products', (params, query) => {
    return renderProductsPage(params, query);
  });

  router.add('/product/:id', (params) => {
    return renderProductDetailPage(params);
  });

  router.add('/about', () => {
    return renderAboutPage();
  });

  router.add('/quality', () => {
    return renderQualityPage();
  });

  router.add('/downloads', () => {
    return renderDownloadsPage();
  });

  router.add('/contact', () => {
    return renderContactPage();
  });

  // Global Page Transition Hook
  router.beforeRoute((route) => {
    updateActiveNav(route);
    // Close mobile menu and search if open
    document.getElementById('mobile-menu')?.classList.remove('open');
    document.getElementById('mobile-overlay')?.classList.remove('open');
    document.getElementById('nav-hamburger')?.classList.remove('active');
    document.getElementById('search-overlay')?.classList.remove('open');
    document.body.classList.remove('menu-open');
  });

  router.afterRoute((route) => {
    const cleanRoute = (route || '/').split('?')[0];

    // Initialize scroll reveal and counters promptly
    setTimeout(() => {
      initScrollReveal();
      animateCounters();

      // Page-specific initializations
      if (cleanRoute === '/' || cleanRoute === '' || cleanRoute === '#/') {
        initHeroSlider();
        initTestimonialSlider();
      }

      if (cleanRoute === '/products' || cleanRoute.startsWith('/products')) {
        initProductsPage();
      }

      if (cleanRoute.startsWith('/product/')) {
        initProductDetailPage();
      }

      if (cleanRoute === '/contact') {
        initContactPage();
      }
    }, 60);
  });

  // Initialize Router
  router.init();
});
