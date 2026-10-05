import { useEffect } from 'react';

const BASE_TITLE = 'Sree Swamy Traders';

/** Sets a descriptive document title per page (SEO + browser tab clarity). */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Supreme Pipe Distributors & Piping Solutions`;
  }, [title]);
}
