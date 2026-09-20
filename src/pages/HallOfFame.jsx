import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import AchievementCard from '../components/AchievementCard';
import { HALL_OF_FAME } from '../data/saitData';
import { Trophy, Award, Sparkles } from 'lucide-react';

const TYPES = ['All Types', 'Innovation', 'Hackathon', 'Academic', 'Research', 'Competition'];
const YEARS = ['All Years', '2025', '2024', '2023', '2022'];

export default function HallOfFame() {
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedYear, setSelectedYear] = useState('All Years');

  const featuredItem = HALL_OF_FAME.find((item) => item.id === 'ibm-grant') || HALL_OF_FAME[0];

  const filteredAchievements = HALL_OF_FAME.filter((item) => {
    const matchesType = selectedType === 'All Types' || item.type === selectedType;
    const matchesYear = selectedYear === 'All Years' || item.year === selectedYear;
    return matchesType && matchesYear;
  });

  return (
    <div>
      <PageHeader
        eyebrow="Accolades & Accreditations"
        title="SAIT Hall of Fame"
        description="Celebrating our department's greatest honors, grant recipients, Tier-1 accreditations, and high-impact hackathon victories."
      />

      {/* 1. FEATURED ACHIEVEMENT BANNER */}
      {featuredItem && (
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div
              className="card"
              style={{
                borderLeft: '5px solid var(--accent)',
                backgroundColor: '#FFFFFF',
                padding: '2.5rem',
                boxShadow: '0 4px 12px rgba(18, 48, 90, 0.04)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="badge badge-accent">Featured Department Honor</span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--secondary)' }}>
                  {featuredItem.year}
                </span>
              </div>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--primary-dark)', marginBottom: '0.85rem' }}>
                {featuredItem.title}
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '850px', marginBottom: '1.5rem' }}>
                {featuredItem.description}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#E8EFF7', color: 'var(--primary)', padding: '0.4rem 0.85rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600 }}>
                <Trophy size={16} />
                <span>Recognition: {featuredItem.badge}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. FILTERS & ACHIEVEMENTS GRID */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Institutional & Student Honors</h2>

            {/* Combined Filters */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div className="filter-bar" style={{ marginBottom: 0 }}>
                {TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="filter-bar" style={{ marginBottom: 0 }}>
                {YEARS.map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    className={`filter-btn ${selectedYear === yr ? 'active' : ''}`}
                    onClick={() => setSelectedYear(yr)}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredAchievements.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {filteredAchievements.map((item) => (
                <AchievementCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted)' }}>
              <p>No achievements match the selected filters ({selectedType}, {selectedYear}).</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
