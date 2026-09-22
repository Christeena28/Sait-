import React from 'react';

export default function PageHeader({ eyebrow, title, description, children, background }) {
  return (
    <section className="page-header">
      {background}
      <div className="container page-header-content">
        {eyebrow && <span className="page-eyebrow">{eyebrow}</span>}
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-description">{description}</p>}
        {children && <div style={{ marginTop: '1.5rem' }}>{children}</div>}
      </div>
    </section>
  );
}
