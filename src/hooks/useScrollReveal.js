import { useEffect } from 'react';

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

/**
 * Adds the `active` class to `.reveal*` elements as they scroll into view.
 * Mount once at the app root: a MutationObserver picks up elements added by
 * later renders (route changes, filtering), so pages don't need to re-init anything.
 */
export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('active');
          // Staggered children reveal together with their parent
          entry.target.querySelectorAll(REVEAL_SELECTOR).forEach((child) => child.classList.add('active'));
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const scan = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (!el.classList.contains('active')) io.observe(el);
      });
    };

    scan();
    const root = document.getElementById('root');
    const mo = new MutationObserver(scan);
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
