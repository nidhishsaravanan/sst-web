// ============================================
// HELPERS — Utility Functions
// ============================================

// SVG Icons
export const ICONS = {
  pipe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6M4 6l-2-2m18 2l2-2M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  droplet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  ruler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 2l6 6-14 14-6-6L16 2z"/><line x1="10" y1="8" x2="8" y2="10"/><line x1="13" y1="5" x2="11" y2="7"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
};

// Category-specific icons
export function getCategoryIcon(categoryId) {
  const iconMap = {
    'pvc': ICONS.pipe,
    'cpvc': ICONS.zap,
    'upvc': ICONS.pipe,
    'hdpe': ICONS.pipe,
    'ppr': ICONS.zap,
    'swr': ICONS.droplet,
    'column': ICONS.pipe,
    'casing': ICONS.pipe,
    'agri': ICONS.droplet,
    'tanks': ICONS.droplet,
    'accessories': ICONS.tool,
    'gi-ms': ICONS.pipe,
  };
  return iconMap[categoryId] || ICONS.pipe;
}

// Generate a gradient placeholder for product images
export function getProductGradient(index) {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
    'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  ];
  return gradients[index % gradients.length];
}

// Generate WhatsApp URL
export function getWhatsAppUrl(message, phone) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

// Alias used by page components — (phone, message) order
export function buildWhatsAppUrl(phone, message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

// Debounce function
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Generate premium 3D pipe illustration SVG
export function getProductPlaceholderSVG(name, category) {
  const themes = {
    'pvc': { stroke: '#38BDF8', fill: '#0369A1', bg1: '#0A1E38', bg2: '#06101E', tag: 'PVC PIPING' },
    'cpvc': { stroke: '#FBBF24', fill: '#D97706', bg1: '#261C08', bg2: '#130C02', tag: 'HOT & COLD CPVC' },
    'upvc': { stroke: '#818CF8', fill: '#4F46E5', bg1: '#181C38', bg2: '#0A0C1E', tag: 'UPVC PLUMBING' },
    'hdpe': { stroke: '#34D399', fill: '#059669', bg1: '#062618', bg2: '#02120A', tag: 'HDPE COIL / PIPE' },
    'ppr': { stroke: '#4ADE80', fill: '#16A34A', bg1: '#0A2614', bg2: '#04130A', tag: 'PPR-C INDUSTRIAL' },
    'swr': { stroke: '#C084FC', fill: '#7C3AED', bg1: '#201038', bg2: '#0F061E', tag: 'SWR DRAINAGE' },
    'column': { stroke: '#38BDF8', fill: '#0284C7', bg1: '#0B2236', bg2: '#05101A', tag: 'BOREWELL COLUMN' },
    'casing': { stroke: '#94A3B8', fill: '#475569', bg1: '#1A222C', bg2: '#0B0F14', tag: 'CASING PIPE' },
    'agri': { stroke: '#A3E635', fill: '#65A30D', bg1: '#1A2608', bg2: '#0D1403', tag: 'AGRICULTURE' },
    'tanks': { stroke: '#22D3EE', fill: '#0891B2', bg1: '#082632', bg2: '#031218', tag: 'STORAGE TANK' },
    'accessories': { stroke: '#FB923C', fill: '#EA580C', bg1: '#2B170B', bg2: '#140A04', tag: 'FITTINGS & VALVES' },
    'gi-ms': { stroke: '#E2E8F0', fill: '#64748B', bg1: '#1E293B', bg2: '#0F172A', tag: 'GI / MS PIPING' },
  };

  const t = themes[category] || { stroke: '#D4AF37', fill: '#997B24', bg1: '#1A2234', bg2: '#0A1220', tag: 'PREMIUM PIPE' };
  const safeName = (name.length > 28 ? name.substring(0, 26) + '...' : name).replace(/&/g, '&amp;');

  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="420" viewBox="0 0 600 420">
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="75%">
          <stop offset="0%" stop-color="${t.bg1}"/>
          <stop offset="100%" stop-color="${t.bg2}"/>
        </radialGradient>
        <linearGradient id="pipeWall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${t.stroke}"/>
          <stop offset="50%" stop-color="${t.fill}"/>
          <stop offset="100%" stop-color="${t.stroke}"/>
        </linearGradient>
        <linearGradient id="metalRim" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6"/>
          <stop offset="50%" stop-color="${t.stroke}" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.8"/>
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="600" height="420" fill="url(#bg)"/>
      
      <!-- Subtle Grid Texture -->
      <g stroke="${t.stroke}" stroke-opacity="0.05" stroke-width="1">
        <line x1="0" y1="70" x2="600" y2="70"/>
        <line x1="0" y1="140" x2="600" y2="140"/>
        <line x1="0" y1="210" x2="600" y2="210"/>
        <line x1="0" y1="280" x2="600" y2="280"/>
        <line x1="0" y1="350" x2="600" y2="350"/>
        <line x1="120" y1="0" x2="120" y2="420"/>
        <line x1="240" y1="0" x2="240" y2="420"/>
        <line x1="360" y1="0" x2="360" y2="420"/>
        <line x1="480" y1="0" x2="480" y2="420"/>
      </g>

      <!-- 3D Concentric Pipe Section -->
      <g transform="translate(300, 185)">
        <!-- Outer Pipe Glow -->
        <circle cx="0" cy="0" r="96" fill="none" stroke="${t.stroke}" stroke-width="1" opacity="0.3" filter="url(#glow)"/>
        
        <!-- Outer Wall -->
        <circle cx="0" cy="0" r="90" fill="${t.bg2}" stroke="url(#pipeWall)" stroke-width="18"/>
        
        <!-- Bevel Rim -->
        <circle cx="0" cy="0" r="81" fill="none" stroke="url(#metalRim)" stroke-width="3"/>
        
        <!-- Inner Water Chamber -->
        <circle cx="0" cy="0" r="70" fill="${t.bg1}" stroke="${t.stroke}" stroke-width="2" stroke-opacity="0.4"/>
        
        <!-- Inner Core Indicator -->
        <circle cx="0" cy="0" r="44" fill="none" stroke="${t.stroke}" stroke-width="1.5" stroke-dasharray="6,5" stroke-opacity="0.5"/>
        
        <!-- Flow Arrow / Symbol -->
        <polygon points="-8,-12 12,0 -8,12" fill="${t.stroke}" opacity="0.8"/>
      </g>

      <!-- Category Pill Tag -->
      <g transform="translate(300, 48)">
        <rect x="-90" y="-14" width="180" height="28" rx="14" fill="${t.stroke}" fill-opacity="0.15" stroke="${t.stroke}" stroke-opacity="0.4" stroke-width="1"/>
        <text x="0" y="4" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="${t.stroke}" letter-spacing="1.5" text-anchor="middle">${t.tag}</text>
      </g>

      <!-- Product Name Banner -->
      <text x="300" y="340" font-family="'Outfit', sans-serif" font-size="18" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">${safeName}</text>
      
      <!-- Certification Footnote -->
      <text x="300" y="372" font-family="'Inter', sans-serif" font-size="12" font-weight="500" fill="#94A3B8" text-anchor="middle">Heavy-Duty • IS / ISO Certified • 100% Virgin Grade</text>
    </svg>
  `)}`;
}
