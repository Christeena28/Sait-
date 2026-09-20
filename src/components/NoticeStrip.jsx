import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight } from 'lucide-react';
import { NOTICE_STRIP } from '../data/saitData';

export default function NoticeStrip() {
  return (
    <aside className="notice-strip" aria-label="Official Announcement">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', textAlign: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          <Bell size={14} style={{ color: 'var(--color-on-dark)' }} aria-hidden="true" />
          <strong>NOTICE</strong>
        </span>
        <span>{NOTICE_STRIP.text}</span>
        <Link
          to={NOTICE_STRIP.link}
          style={{
            color: 'var(--color-surface)',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            marginLeft: '0.5rem',
            textDecoration: 'underline',
            textUnderlineOffset: '3px'
          }}
        >
          <span>{NOTICE_STRIP.linkText}</span>
          <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
