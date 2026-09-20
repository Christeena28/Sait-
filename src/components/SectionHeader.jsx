import React from 'react';

export default function SectionHeader({ eyebrow, title, subtitle, centered = false }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
