import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  if (typeof window === 'undefined') {
    return false;
  }

  const matcher = window.matchMedia(query);
  const [match, setMatch] = useState(matcher.matches);

  const listen = (event: MediaQueryListEvent) => {
    setMatch(event.matches);
  };

  useEffect(() => {
    matcher.addListener(listen);
    return () => matcher.removeListener(listen);
  }, [query]);

  return match;
};
