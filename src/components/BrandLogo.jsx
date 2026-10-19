import { SITE_CONFIG } from '../data/siteData.js';

/**
 * Brand lock-up: monogram emblem + Cinzel wordmark + tagline.
 * `variant="dark"` renders light text for use on navy backgrounds (footer).
 */
export default function BrandLogo({ variant = 'light', showTagline = true }) {
  const [first, ...rest] = SITE_CONFIG.name.split(' ');
  const last = rest.pop();
  const middle = rest.join(' ');

  return (
    <span className={`brand brand--${variant}`}>
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark-text">{SITE_CONFIG.shortName}</span>
      </span>
      <span className="brand-text">
        <span className="brand-name">
          {first} {middle && `${middle} `}
          <span className="brand-name-accent">{last}</span>
        </span>
        {showTagline && (
          <span className="brand-tagline">
            <span className="brand-tagline-rule"></span>
            {SITE_CONFIG.tagline} · Est. {SITE_CONFIG.founded}
          </span>
        )}
      </span>
    </span>
  );
}
