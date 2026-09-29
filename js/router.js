// ============================================
// ROUTER — Simple Hash-based SPA Router
// ============================================

export class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this._beforeEach = null;
    this._afterEach = null;
  }

  // Register a route — handler returns an HTML string
  add(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  // Set a callback to run before every route change
  beforeRoute(fn) {
    this._beforeEach = fn;
  }

  // Set a callback to run after every route change
  afterRoute(fn) {
    this._afterEach = fn;
  }

  navigate(path) {
    window.location.hash = path;
  }

  getQueryParams(hash) {
    const [, queryString] = hash.split('?');
    const params = {};
    if (queryString) {
      queryString.split('&').forEach(param => {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value || '');
      });
    }
    return params;
  }

  matchRoute(path) {
    const cleanPath = path.split('?')[0];

    // Exact match first
    if (this.routes[cleanPath]) {
      return { handler: this.routes[cleanPath], params: {} };
    }

    // Dynamic route matching (e.g., /product/:id)
    for (const route in this.routes) {
      const routeParts = route.split('/');
      const pathParts = cleanPath.split('/');

      if (routeParts.length !== pathParts.length) continue;

      const params = {};
      let isMatch = true;

      for (let i = 0; i < routeParts.length; i++) {
        if (routeParts[i].startsWith(':')) {
          params[routeParts[i].slice(1)] = pathParts[i];
        } else if (routeParts[i] !== pathParts[i]) {
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        return { handler: this.routes[route], params };
      }
    }

    return null;
  }

  handleRoute(isInitial = false) {
    const rawHash = window.location.hash ? window.location.hash.slice(1) : '/';
    const hash = (rawHash.startsWith('/') ? rawHash : '/' + rawHash) || '/';
    const queryParams = this.getQueryParams(hash);
    const match = this.matchRoute(hash);

    // Fire beforeRoute callback
    if (this._beforeEach) {
      try {
        this._beforeEach(hash);
      } catch (e) {
        console.warn('beforeRoute hook error:', e);
      }
    }

    const appRoot = document.getElementById('app-root');

    if (match) {
      this.currentRoute = hash;
      const allParams = { ...match.params, ...queryParams };

      let html = '';
      try {
        // Call the handler — it returns an HTML string
        html = match.handler(allParams, queryParams);
      } catch (renderError) {
        console.error('[Router] Error rendering route ' + hash, renderError);
        html = `
          <div class="container" style="padding: 120px 24px; text-align: center;">
            <h2 style="color: var(--accent, #D4AF37);">Unable to display page</h2>
            <p style="color: #94A3B8; margin-top: 12px;">${renderError.message}</p>
            <a href="#/" class="btn btn-primary" style="margin-top: 24px; display: inline-block;">Return to Home</a>
          </div>
        `;
      }

      if (appRoot && html) {
        if (isInitial) {
          appRoot.innerHTML = html;
          appRoot.style.opacity = '1';
          appRoot.style.transform = 'translateY(0)';
          if (this._afterEach) {
            try { this._afterEach(hash); } catch (e) { console.warn(e); }
          }
        } else {
          // Page transition — fade out
          appRoot.style.opacity = '0';
          appRoot.style.transform = 'translateY(12px)';

          setTimeout(() => {
            appRoot.innerHTML = html;

            requestAnimationFrame(() => {
              appRoot.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
              appRoot.style.opacity = '1';
              appRoot.style.transform = 'translateY(0)';
            });

            if (this._afterEach) {
              try { this._afterEach(hash); } catch (e) { console.warn(e); }
            }
          }, 100);
        }
      }
    } else {
      // 404 — redirect to home
      this.navigate('/');
      return;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Start listening for hash changes
  init() {
    window.addEventListener('hashchange', () => this.handleRoute(false));

    // Handle initial page load
    if (!window.location.hash || window.location.hash === '#' || window.location.hash === '') {
      window.location.hash = '#/';
    }
    // Always render initial route immediately
    this.handleRoute(true);
  }
}
