import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Global styles — order matters (tokens → base → components → pages → animations → responsive)
import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/home.css';
import './styles/about.css';
import './styles/products.css';
import './styles/product-detail.css';
import './styles/quality.css';
import './styles/downloads.css';
import './styles/contact.css';
import './styles/animations.css';
import './styles/responsive.css';
import './styles/react.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
