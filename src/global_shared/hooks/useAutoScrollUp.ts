import { useEffect } from 'react';

export default function useAutoScrollUp() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return null;
}
