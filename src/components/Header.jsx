import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { SITE_CONFIG, PRODUCTS } from '../data/siteData.js';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/quality', label: 'Quality' },
  { path: '/downloads', label: 'Downloads' },
  { path: '/contact', label: 'Contact' },
];

// "Products" should stay highlighted on /product/:slug detail pages too
function isLinkActive(path, pathname) {
  if (path === '/') return pathname === '/';
  if (path === '/products') return pathname.startsWith('/products') || pathname.startsWith('/product/');
  return pathname.startsWith(path);
}

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);

  // Sticky header shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close overlays whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setQuery('');
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  // Focus search input when overlay opens
  useEffect(() => {
    if (!searchOpen) return;
    const t = setTimeout(() => searchInputRef.current?.focus(), 300);
    return () => clearTimeout(t);
  }, [searchOpen]);

  // Escape closes overlays
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (q.length < 2) return null;
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
  };

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} id="main-header">
        <div className="container" style={{ maxWidth: 'var(--container-wide)' }}>
          <div className="header-inner">
            <Link to="/" className="header-logo">
              <div className="logo-icon">SST</div>
              <div className="logo-text">
                <span className="logo-name">{SITE_CONFIG.name}</span>
                <span className="logo-tagline">{SITE_CONFIG.tagline}</span>
              </div>
            </Link>

            <nav className="nav-desktop">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link${isLinkActive(link.path, pathname) ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="header-cta">
              <button className="header-search-btn" id="search-toggle" aria-label="Search" onClick={() => setSearchOpen(true)}>
                <Icon name="search" />
              </button>
              <Link to="/contact" className="btn btn-primary btn-sm header-contact-btn">
                Get Quote
              </Link>
              <button
                className={`nav-hamburger${menuOpen ? ' active' : ''}`}
                id="nav-hamburger"
                aria-label="Menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu">
        <div className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link${isLinkActive(link.path, pathname) ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mobile-menu-footer">
          <div className="social-links">
            <a href={SITE_CONFIG.social.facebook} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
            <a href={SITE_CONFIG.social.instagram} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
            <a href={SITE_CONFIG.social.youtube} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="youtube" /></a>
            <a href={SITE_CONFIG.social.linkedin} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          </div>
          <div className="mobile-menu-contact">
            <a href={`tel:${SITE_CONFIG.phone}`}><Icon name="phone" /> {SITE_CONFIG.phone}</a>
            <a href={`mailto:${SITE_CONFIG.email}`}><Icon name="mail" /> {SITE_CONFIG.email}</a>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div className={`search-overlay${searchOpen ? ' open' : ''}`} id="search-overlay">
        <button className="search-close-btn" id="search-close" aria-label="Close search" onClick={closeSearch}>
          <Icon name="close" />
        </button>
        <div className="search-overlay-content">
          <input
            ref={searchInputRef}
            type="text"
            className="search-overlay-input"
            id="search-input"
            placeholder="Search products..."
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="search-results" id="search-results">
            {results && results.length === 0 && (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px' }}>No products found</p>
            )}
            {results?.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="search-result-item">
                <div className="result-info">
                  <h4>{p.name}</h4>
                  <p>
                    {p.category.toUpperCase()} • {p.material}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
