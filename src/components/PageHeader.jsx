import React from 'react';
import GranularGridBackground from './GranularGridBackground';
import HeroWaveBackground from './HeroWaveBackground';

export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="page-header">
      <GranularGridBackground />
      <HeroWaveBackground />
      <div className="container page-header-content">
        {eyebrow && <span className="page-eyebrow">{eyebrow}</span>}
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-description">{description}</p>}
        {children && <div style={{ marginTop: '1.5rem' }}>{children}</div>}
      </div>
    </section>
  );
}
