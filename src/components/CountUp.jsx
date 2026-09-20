import React, { useState, useEffect, useRef } from 'react';

/**
 * Stat count-up: numbers count up once over ~800ms when they scroll into view.
 * No animation libraries used.
 * Respects prefers-reduced-motion: reduce by displaying final value immediately.
 */
export default function CountUp({ value, duration = 800, className = '', style = {} }) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    // Match numbers (including decimals) inside string, e.g. "₹28.0 LPA", "94%", "85+"
    const strVal = String(value);
    const match = strVal.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const targetNum = parseFloat(match[2]);
    const suffix = match[3];
    const isDecimal = match[2].includes('.');
    const decimalPlaces = isDecimal ? match[2].split('.')[1].length : 0;

    const el = elementRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          observer.disconnect();

          const startTime = performance.now();

          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing: cubic bezier approximate (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentNum = easeOut * targetNum;

            const formattedNum = isDecimal
              ? currentNum.toFixed(decimalPlaces)
              : Math.floor(currentNum).toString();

            setDisplayValue(`${prefix}${formattedNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className={className} style={style}>
      {displayValue}
    </span>
  );
}
