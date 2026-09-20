import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function AlumniCard({ alumni }) {
  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <img
            src={alumni.image}
            alt={alumni.name}
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--color-border)'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/img/placeholder.jpg';
            }}
          />
          <div>
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginBottom: '0.2rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text)', margin: 0, fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>
                {alumni.name}
              </h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-muted)', fontSize: '0.825rem' }}>
              <GraduationCap size={14} />
              <span>Batch of {alumni.batch}</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem' }}>
          <Briefcase size={15} flexShrink={0} />
          <span>{alumni.role}</span>
        </div>

        {alumni.quote && (
          <blockquote
            style={{
              fontStyle: 'italic',
              color: 'var(--color-primary)',
              fontSize: '0.925rem',
              borderLeft: '3px solid var(--color-secondary)',
              paddingLeft: '0.75rem',
              margin: '0.5rem 0 1rem',
              lineHeight: '1.5'
            }}
          >
            "{alumni.quote}"
          </blockquote>
        )}

        <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
          {alumni.bio}
        </p>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>CUSAT IT Alumnus</span>
          {alumni.sample ? (
            <span className="badge badge-sample">Sample data</span>
          ) : (
            <span className="badge badge-success">Verified Alumni</span>
          )}
        </div>
      </div>
    </div>
  );
}
