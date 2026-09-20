import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import NoticeRow from '../components/NoticeRow';
import { NOTICES } from '../data/saitData';
import { Bell, Pin, Filter } from 'lucide-react';

const NOTICE_CATEGORIES = ['All', 'Announcement', 'Event', 'Deadline', 'Notice'];

export default function Notices() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredNotices = selectedFilter === 'All'
    ? NOTICES
    : NOTICES.filter((n) => n.category === selectedFilter);

  const pinnedNotices = filteredNotices.filter((n) => n.pinned);
  const otherNotices = filteredNotices.filter((n) => !n.pinned);

  return (
    <div>
      <PageHeader
        eyebrow="Department Bulletins"
        title="Notices & Announcements"
        description="Official circulars, hackathon briefings, project submission deadlines, and student volunteer opportunities from SAIT."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '920px' }}>
          {/* Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bell size={18} style={{ color: 'var(--secondary)' }} />
              <h2 className="section-title" style={{ fontSize: '1.4rem', margin: 0 }}>
                Circulars ({filteredNotices.length})
              </h2>
            </div>

            <div className="filter-bar" style={{ marginBottom: 0 }}>
              {NOTICE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${selectedFilter === cat ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Pinned Notices */}
          {pinnedNotices.length > 0 && (
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.85rem' }}>
                <Pin size={14} style={{ color: 'var(--accent)' }} />
                <span>PINNED NOTICES</span>
              </div>
              {pinnedNotices.map((notice) => (
                <NoticeRow key={notice.id} notice={notice} />
              ))}
            </div>
          )}

          {/* Regular Notices */}
          <div>
            {pinnedNotices.length > 0 && otherNotices.length > 0 && (
              <div style={{ color: 'var(--muted)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.85rem' }}>
                RECENT UPDATES
              </div>
            )}

            {otherNotices.length > 0 ? (
              otherNotices.map((notice) => (
                <NoticeRow key={notice.id} notice={notice} />
              ))
            ) : pinnedNotices.length === 0 ? (
              <div className="card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted)' }}>
                <p>No notices found under the "{selectedFilter}" category.</p>
              </div>
            ) : null}
          </div>

          {/* Notice Board Footnote */}
          <div style={{ marginTop: '3.5rem', padding: '1.5rem', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--muted)', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <span className="badge badge-secondary">Gateway Hub</span>
            <span>
              Physical notices and weekly tech updates are also published on the SAIT Information Board
              at the Division of IT entrance corridor, SOE CUSAT.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
