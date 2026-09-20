import React from 'react';

export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="page-header">
      <div className="container">
        {eyebrow && <span className="page-eyebrow">{eyebrow}</span>}
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-description">{description}</p>}
        {children && <div style={{ marginTop: '1.5rem' }}>{children}</div>}
      </div>
    </section>
  );
}
