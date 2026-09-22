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

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, active: false };
    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrame = 0;
    let lastTime = 0;

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
    };

    const updatePointer = (event) => {
      const bounds = layer.getBoundingClientRect();
      const inside = event.clientX >= bounds.left && event.clientX <= bounds.right
        && event.clientY >= bounds.top && event.clientY <= bounds.bottom;

      pointer.active = inside;
      if (inside) {
        pointer.targetX = (event.clientX - bounds.left) / bounds.width;
        pointer.targetY = (event.clientY - bounds.top) / bounds.height;
      }
    };

    const leaveWindow = (event) => {
      if (!event.relatedTarget) pointer.active = false;
    };

    const draw = (time) => {
      const delta = Math.min((time - lastTime) / 1000 || 0, 0.05);
      lastTime = time;
      const smoothing = 1 - Math.pow(0.001, delta || 0.016);
      pointer.x += (pointer.targetX - pointer.x) * smoothing;
      pointer.y += (pointer.targetY - pointer.y) * smoothing;

      const cursorX = pointer.x * width;
      const cursorY = pointer.y * height;
      const glowOpacity = pointer.active ? 1 : 0;
      const parallaxX = (pointer.x - 0.5) * 12;
      const parallaxY = (pointer.y - 0.5) * 8;

      layer.style.setProperty('--hero-cursor-x', `${pointer.x * 100}%`);
      layer.style.setProperty('--hero-cursor-y', `${pointer.y * 100}%`);
      layer.style.setProperty('--hero-glow-opacity', glowOpacity.toFixed(2));
      layer.style.setProperty('--hero-parallax-x', `${parallaxX.toFixed(2)}px`);
      layer.style.setProperty('--hero-parallax-y', `${parallaxY.toFixed(2)}px`);

      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(parallaxX, parallaxY);

      particles.forEach((particle, index) => {
        const wave = reducedMotion ? 0 : Math.sin(time * 0.00025 + particle.phase) * particle.drift;
        const baseX = particle.x + wave;
        const baseY = particle.y + Math.cos(time * 0.0002 + particle.phase) * particle.drift;
        const distanceX = cursorX - baseX;
        const distanceY = cursorY - baseY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const influence = pointer.active ? Math.max(0, 1 - distance / 170) : 0;
        const repel = influence * 5;
        const x = baseX - (distanceX / (distance || 1)) * repel;
        const y = baseY - (distanceY / (distance || 1)) * repel;
        const alpha = 0.16 + influence * 0.52;
        const starSize = particle.size + influence * 1.15;

        if (influence > 0.04) {
          const halo = context.createRadialGradient(x, y, 0, x, y, 14 + influence * 18);
          halo.addColorStop(0, `rgba(175, 215, 255, ${influence * 0.2})`);
          halo.addColorStop(1, 'rgba(120, 170, 225, 0)');
          context.beginPath();
          context.fillStyle = halo;
          context.arc(x, y, 14 + influence * 18, 0, Math.PI * 2);
          context.fill();
        }

        context.beginPath();
        context.fillStyle = `rgba(190, 222, 255, ${alpha})`;
        context.arc(x, y, starSize, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.strokeStyle = `rgba(190, 222, 255, ${0.1 + influence * 0.5})`;
        context.lineWidth = 0.45 + influence * 0.35;
        context.moveTo(x - starSize * (1.5 + influence * 2.5), y);
        context.lineTo(x + starSize * (1.5 + influence * 2.5), y);
        context.moveTo(x, y - starSize * (1.5 + influence * 2.5));
        context.lineTo(x, y + starSize * (1.5 + influence * 2.5));
        context.stroke();

        if (index % 2 === 0) {
          const next = particles[(index + 1) % particles.length];
          const nextX = next.x + (reducedMotion ? 0 : Math.sin(time * 0.00025 + next.phase) * next.drift);
          const nextY = next.y + (reducedMotion ? 0 : Math.cos(time * 0.0002 + next.phase) * next.drift);
          const linkDistance = Math.hypot(nextX - x, nextY - y);
          if (linkDistance < 115) {
            context.beginPath();
            context.strokeStyle = `rgba(110, 148, 190, ${0.035 + influence * 0.06})`;
            context.lineWidth = 0.55;
            context.moveTo(x, y);
            context.lineTo(nextX, nextY);
            context.stroke();
          }
        }
      });

      context.restore();
      if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', updatePointer, { passive: true });
    window.addEventListener('mouseout', leaveWindow);
    draw(0);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', updatePointer);
      window.removeEventListener('mouseout', leaveWindow);
    };
  }, []);

  return (
    <div ref={layerRef} className="hero-cursor-background" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="hero-cursor-glow" />
    </div>
  );
}
