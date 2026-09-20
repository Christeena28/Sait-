import React, { useState } from 'react';
import { Pin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export default function NoticeRow({ notice }) {
  const [expanded, setExpanded] = useState(false);

  const getBadgeClass = (category) => {
    switch (category) {
      case 'Announcement': return 'badge-primary';
      case 'Deadline': return 'badge-warning';
      case 'Event': return 'badge-accent';
      default: return 'badge-secondary';
    }
  };

  return (
    <article
      className="card"
      style={{
        marginBottom: '1rem',
        borderLeft: notice.pinned ? '4px solid var(--accent)' : '1px solid var(--border)',
        cursor: 'pointer'
      }}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setExpanded(!expanded);
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
    >
      <div className="card-body" style={{ padding: '1.25rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {notice.pinned && (
              <span className="badge badge-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Pin size={12} />
                <span>Pinned</span>
              </span>
            )}
            <span className={`badge ${getBadgeClass(notice.category)}`}>
              {notice.category}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--muted)', fontSize: '0.825rem' }}>
            <Calendar size={14} />
            <span>{notice.date}</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-dark)', margin: 0, fontWeight: 600 }}>
            {notice.title}
          </h3>
          <button
            type="button"
            style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: '0.25rem' }}
            aria-label={expanded ? 'Collapse notice content' : 'Expand notice content'}
          >
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {expanded && (
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
            <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {notice.content}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
