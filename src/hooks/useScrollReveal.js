import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Single IntersectionObserver hook for institutional scroll reveals.
 * Elements remain 100% visible if JS fails or IntersectionObserver is unsupported.
 */
export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if observer is supported and user has not requested reduced motion
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.documentElement.classList.add('reveal-init');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    // Observe all .reveal elements and children of .reveal-stagger
    const elements = document.querySelectorAll('.reveal, .reveal-stagger > *');
    elements.forEach((el) => {
      // If already revealed, don't re-hide
      if (!el.classList.contains('is-revealed')) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);
}
