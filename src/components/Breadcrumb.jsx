import { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * Breadcrumb trail. `items` = [{ label, to? }]; the last item is rendered as the current page.
 */
export default function Breadcrumb({ items, separator = '/' }) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item, i) => (
        <Fragment key={item.label}>
          <span className="separator">{separator}</span>
          {item.to && i < items.length - 1 ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span className="current">{item.label}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
