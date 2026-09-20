import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import EventCard from '../components/EventCard';
import { EVENTS } from '../data/saitData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  'All',
  'Workshop',
  'Seminar',
  'Competition',
  'Hackathon',
  'Alumni',
  'Cultural',
  'Other'
];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredEvent = EVENTS.find((e) => e.featured);

  const upcomingEvents = EVENTS.filter((e) => {
    const matchesCategory = selectedCategory === 'All' || e.category === selectedCategory;
    return e.status === 'Upcoming' && matchesCategory;
  });

  const pastEvents = EVENTS.filter((e) => {
    const matchesCategory = selectedCategory === 'All' || e.category === selectedCategory;
    return e.status === 'Past' && matchesCategory;
  });

  return (
    <div>
      <PageHeader
        eyebrow="Calendar & Initiatives"
        title="Events & Workshops"
        description="Explore technical symposiums, hands-on development workshops, hackathons, and guest seminars organized by SAIT."
      />

      {/* 1. FEATURED EVENT BANNER */}
      {featuredEvent && (
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div
              className="card"
              style={{
                borderLeft: '5px solid var(--color-secondary)',
                padding: '2.5rem',
                backgroundColor: 'var(--color-surface)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="badge badge-primary">Featured Annual Flagship</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
                  {featuredEvent.date}
                </span>
              </div>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-text)', marginBottom: '0.85rem' }}>
                {featuredEvent.title}
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '850px', marginBottom: '1.5rem' }}>
                {featuredEvent.description}
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--color-text)', borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                <div><strong>Time:</strong> {featuredEvent.time}</div>
                <div><strong>Venue:</strong> {featuredEvent.venue}</div>
                <div><strong>Format:</strong> In-person / On-campus</div>
              </div>
              <Link to="/activity-logger" className="btn btn-primary">
                <span>Participate & Log Attendance</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 2. CATEGORY FILTERS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Upcoming Schedule</h2>
            <div className="filter-bar" style={{ marginBottom: 0 }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Event Cards Grid */}
          {upcomingEvents.length > 0 ? (
            <div key={selectedCategory} className="filter-cards-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-muted)', marginBottom: '4rem' }}>
              <p style={{ fontSize: '1rem' }}>No upcoming events currently scheduled under category "{selectedCategory}".</p>
            </div>
          )}

          {/* 3. PAST EVENTS SECTION */}
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '3.5rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span className="section-eyebrow">Archive</span>
              <h2 className="section-title">Past Events & Sessions</h2>
              <p className="section-subtitle">A record of completed symposiums, workshops and student drives.</p>
            </div>

            {pastEvents.length > 0 ? (
              <div key={`past-${selectedCategory}`} className="filter-cards-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="card" style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--color-muted)' }}>
                <p>No past events recorded under this filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
