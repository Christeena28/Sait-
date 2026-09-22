import React, { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 72;

function createParticles(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
    x: ((index * 83) % 101) / 100 * width,
    y: ((index * 47) % 97) / 100 * height,
    size: 0.7 + (index % 3) * 0.35,
    phase: index * 0.73,
    drift: 0.35 + (index % 4) * 0.12,
  }));
}

export default function HeroCursorBackground() {
  const layerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    const canvas = canvasRef.current;
    if (!layer || !canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let width = 0;
    let height = 0;
    let particles = [];

    const resize = () => {
      const bounds = layer.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      particles = createParticles(width, height);
      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const x = particle.x;
        const y = particle.y;
        const dotSize = particle.size * 0.7;

        context.beginPath();
        context.fillStyle = 'rgba(190, 222, 255, 0.08)';
        context.arc(x, y, dotSize, 0, Math.PI * 2);
        context.fill();
      });
    };

    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={layerRef} className="hero-cursor-background" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
