import { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { PRODUCTS, CATEGORIES, APPLICATIONS } from '../data/siteData.js';
import { usePageTitle } from '../hooks/usePageTitle.js';

function toggle(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export default function Products() {
  usePageTitle('Products');
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const categoryParam = searchParams.get('category');

  const [categories, setCategories] = useState(categoryParam ? [categoryParam] : []);
  const [applications, setApplications] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');
  const [view, setView] = useState('grid');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Every navigation to /products?category=xyz (footer, home categories) re-applies that category,
  // even if the URL is unchanged. Filter clicks don't navigate, so they never trigger this.
  useEffect(() => {
    setCategories(categoryParam ? [categoryParam] : []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  // Debounce the text search (300ms, as before)
  useEffect(() => {
    const t = setTimeout(() => setSearch(searchInput), 300);
    return () => clearTimeout(t);
  }, [searchInput]);

  const updateCategories = (next) => setCategories(next);

  const clearAll = () => {
    updateCategories([]);
    setApplications([]);
    setSearchInput('');
    setSearch('');
  };

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (categories.length) list = list.filter((p) => categories.includes(p.category));
    if (applications.length) list = list.filter((p) => p.application.some((a) => applications.includes(a)));
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === 'category') list.sort((a, b) => a.category.localeCompare(b.category));
    else if (sort === 'newest') list.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
    return list;
  }, [categories, applications, search, sort]);

  const activeTags = [
    ...categories.map((id) => ({ type: 'category', id, label: CATEGORIES.find((c) => c.id === id)?.name })),
    ...applications.map((id) => ({ type: 'application', id, label: APPLICATIONS.find((a) => a.id === id)?.name })),
  ].filter((t) => t.label);

  const removeTag = (tag) => {
    if (tag.type === 'category') updateCategories(categories.filter((c) => c !== tag.id));
    else setApplications(applications.filter((a) => a !== tag.id));
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <Breadcrumb items={[{ label: 'Products' }]} separator={<Icon name="chevronRight" />} />
            <h1>
              Our <span className="highlight">Products</span>
            </h1>
            <p>Explore our complete range of pipes, fittings &amp; plumbing accessories from India's top brands.</p>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="products-layout">
            {/* Sidebar */}
            <aside className={`products-sidebar${sidebarOpen ? ' open' : ''}`} id="products-sidebar">
              <div className="filter-close-btn" style={{ display: 'none' }}>
                <h3>Filters</h3>
                <button id="filter-close" aria-label="Close filters" onClick={() => setSidebarOpen(false)}>
                  <Icon name="close" />
                </button>
              </div>

              {/* Search */}
              <div className="filter-section">
                <div className="filter-search">
                  <Icon name="search" />
                  <input
                    type="text"
                    id="product-search"
                    placeholder="Search products..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="filter-section">
                <h3>
                  Categories{' '}
                  <span className="filter-clear" id="clear-categories" onClick={() => updateCategories([])}>
                    Clear
                  </span>
                </h3>
                <div className="filter-options" id="category-filters">
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.id}
                      className={`filter-option${categories.includes(cat.id) ? ' active' : ''}`}
                      data-category={cat.id}
                      onClick={() => updateCategories(toggle(categories, cat.id))}
                    >
                      <span className="checkbox"><Icon name="check" /></span>
                      <span>{cat.name}</span>
                      <span className="count">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="filter-section">
                <h3>
                  Applications{' '}
                  <span className="filter-clear" id="clear-applications" onClick={() => setApplications([])}>
                    Clear
                  </span>
                </h3>
                <div className="filter-options" id="application-filters">
                  {APPLICATIONS.map((app) => (
                    <div
                      key={app.id}
                      className={`filter-option${applications.includes(app.id) ? ' active' : ''}`}
                      data-application={app.id}
                      onClick={() => setApplications(toggle(applications, app.id))}
                    >
                      <span className="checkbox"><Icon name="check" /></span>
                      <span>{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Main */}
            <div className="products-main">
              <div className="products-toolbar">
                <div>
                  <button className="mobile-filter-btn" id="mobile-filter-btn" onClick={() => setSidebarOpen(true)}>
                    <Icon name="filter" /> Filters
                  </button>
                  <span className="products-count" id="products-count">
                    Showing <strong>{filtered.length}</strong> of {PRODUCTS.length} products
                  </span>
                </div>
                <div className="products-toolbar-right">
                  <select className="sort-select" id="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="name">Sort by Name</option>
                    <option value="category">Sort by Category</option>
                    <option value="newest">Newest First</option>
                  </select>
                  <div className="view-toggle">
                    <button className={view === 'grid' ? 'active' : ''} aria-label="Grid view" onClick={() => setView('grid')}>
                      <Icon name="grid" />
                    </button>
                    <button className={view === 'list' ? 'active' : ''} aria-label="List view" onClick={() => setView('list')}>
                      <Icon name="list" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              <div className="active-filters" id="active-filters">
                {activeTags.map((tag) => (
                  <span key={`${tag.type}-${tag.id}`} className="active-filter-tag">
                    {tag.label}{' '}
                    <span className="remove" onClick={() => removeTag(tag)}>
                      <Icon name="close" />
                    </span>
                  </span>
                ))}
                {activeTags.length > 1 && (
                  <span className="clear-all-filters" id="clear-all" onClick={clearAll}>
                    Clear All
                  </span>
                )}
              </div>

              {/* Product Grid */}
              <div className={`products-grid${view === 'list' ? ' list-view' : ''}`} id="products-grid">
                {filtered.length === 0 ? (
                  <div className="products-empty" style={{ gridColumn: '1/-1' }}>
                    <Icon name="search" />
                    <h3>No Products Found</h3>
                    <p>Try adjusting your filters or search terms to find what you're looking for.</p>
                    <button className="btn btn-primary" onClick={clearAll}>
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  filtered.map((p) => <ProductCard key={p.id} product={p} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
