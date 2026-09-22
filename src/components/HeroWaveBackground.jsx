import React, { useEffect, useRef } from 'react';

export default function HeroWaveBackground() {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const updatePointer = (event) => {
      const bounds = layer.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      const inside = event.clientX >= bounds.left && event.clientX <= bounds.right
        && event.clientY >= bounds.top && event.clientY <= bounds.bottom;

      layer.style.setProperty('--hero-light-x', `${50 + x * 3}%`);
      layer.style.setProperty('--hero-light-y', `${50 + y * 3}%`);
      layer.style.setProperty('--hero-wave-shift-x', `${inside ? x * 6 : 0}px`);
      layer.style.setProperty('--hero-wave-shift-y', `${inside ? y * 3 : 0}px`);
    };

    const resetPointer = () => {
      layer.style.setProperty('--hero-light-x', '50%');
      layer.style.setProperty('--hero-light-y', '50%');
      layer.style.setProperty('--hero-wave-shift-x', '0px');
      layer.style.setProperty('--hero-wave-shift-y', '0px');
    };

    layer.addEventListener('pointermove', updatePointer, { passive: true });
    layer.addEventListener('pointerleave', resetPointer);

    return () => {
      layer.removeEventListener('pointermove', updatePointer);
      layer.removeEventListener('pointerleave', resetPointer);
    };
  }, []);

  return (
    <div ref={layerRef} className="hero-wave-background" aria-hidden="true">
      <div className="hero-wave-light" />
      <svg className="hero-wave-svg" viewBox="0 0 1440 700" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hero-wave-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#71808B" />
            <stop offset="38%" stopColor="#B8C3CB" />
            <stop offset="72%" stopColor="#8E9BA5" />
            <stop offset="100%" stopColor="#D7DEE2" />
          </linearGradient>
          <filter id="hero-wave-blur" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
          <filter id="hero-wave-soft-blur" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
        <g className="hero-wave-motion">
          <path
            className="hero-wave-glow"
            d="M-80 470 C 150 260, 300 610, 545 430 S 910 205, 1130 390 S 1340 535, 1520 270"
            filter="url(#hero-wave-blur)"
          />
          <path
            className="hero-wave-secondary"
            d="M-80 505 C 180 345, 330 655, 575 470 S 900 285, 1140 430 S 1350 570, 1520 345"
            filter="url(#hero-wave-soft-blur)"
          />
          <path
            className="hero-wave-ribbon"
            d="M-80 470 C 150 260, 300 610, 545 430 S 910 205, 1130 390 S 1340 535, 1520 270"
          />
        </g>
      </svg>
    </div>
  );
}
