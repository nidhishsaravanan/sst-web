import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { useScrollReveal } from './hooks/useScrollReveal.js';

import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import About from './pages/About.jsx';
import Quality from './pages/Quality.jsx';
import Downloads from './pages/Downloads.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const { pathname } = useLocation();

  useScrollReveal();

  // Scroll to top on page change (query-string changes like ?category= keep position)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <Header />
      <main id="app-root" key={pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          {/* Unknown routes (incl. footer Privacy/Terms placeholders) go home, same as before */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
