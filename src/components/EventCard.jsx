import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventCard({ event, featured = false }) {
  const isPast = event.status === 'Past';

  return (
    <article className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span className={`badge ${isPast ? 'badge-sample' : 'badge-primary'}`}>
            {event.category}
          </span>
          {event.featured && (
            <span className="badge badge-primary">Featured Event</span>
          )}
          {isPast && (
            <span className="badge badge-sample">Past Event</span>
          )}
        </div>

        <h3 style={{ fontSize: featured ? '1.4rem' : '1.2rem', marginBottom: '0.85rem', color: 'var(--color-text)', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>
          {event.title}
        </h3>

        <p style={{ color: 'var(--color-muted)', fontSize: '0.925rem', marginBottom: '1.25rem', flex: 1, lineHeight: '1.6' }}>
          {event.description}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text)', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={15} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} aria-hidden="true" />
            <span>{event.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={15} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} aria-hidden="true" />
            <span>{event.time}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={15} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} aria-hidden="true" />
            <span>{event.venue}</span>
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          {isPast ? (
            <span className="btn btn-outline btn-sm" style={{ width: '100%', cursor: 'default', color: 'var(--color-muted)' }}>
              Completed
            </span>
          ) : (
            <Link to="/activity-logger" className="btn btn-outline btn-sm" style={{ width: '100%' }}>
              <span>Register / Participate</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
