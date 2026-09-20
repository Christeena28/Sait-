import React from 'react';
import { User } from 'lucide-react';

export default function PersonCard({ person, isFaculty = false }) {
  const isToBeAdded = person.toBeAdded || false;

  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', width: '100%', paddingTop: '100%', backgroundColor: 'var(--color-surface-alt)', overflow: 'hidden' }}>
        {isToBeAdded ? (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-muted)',
              padding: '1.5rem',
              textAlign: 'center',
              borderBottom: '1px solid var(--color-border)'
            }}
          >
            <User size={48} strokeWidth={1.2} style={{ marginBottom: '0.75rem', opacity: 0.5 }} aria-hidden="true" />
            <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Information to be added</span>
          </div>
        ) : (
          <img
            src={person.image}
            alt={person.name}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/img/placeholder.jpg';
            }}
          />
        )}
      </div>

      <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {isFaculty ? (
          <>
            <div style={{ marginBottom: '0.5rem' }}>
              <span className={`badge ${person.isReal ? 'badge-primary' : 'badge-sample'}`}>
                {person.isReal ? 'Faculty Advisor' : 'Pending Info'}
              </span>
            </div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text)', marginBottom: '0.35rem', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>
              {person.name}
            </h3>
            <p style={{ color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
              {person.role}
            </p>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.825rem', marginTop: 'auto' }}>
              {person.dept}
            </p>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="badge badge-secondary">{person.team || 'Executive'}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', fontWeight: 500 }}>{person.year}</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.25rem', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>
              {person.name}
            </h3>
            <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem' }}>
              {person.position}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
