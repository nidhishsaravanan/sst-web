import { ICONS } from '../utils/helpers.js';

/**
 * Renders one of the inline SVG icons from the ICONS library.
 * Pass `name` for a named icon, or `svg` for a raw SVG string (e.g. from getCategoryIcon).
 * The wrapper uses `display: contents`, so existing CSS that styles `.parent svg` keeps working.
 */
export default function Icon({ name, svg }) {
  const markup = svg ?? ICONS[name] ?? '';
  return <span className="icon-wrap" aria-hidden="true" dangerouslySetInnerHTML={{ __html: markup }} />;
}
