import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import { PLACEMENT_STATS } from '../data/saitData';
import { Briefcase, ExternalLink, TrendingUp, Building, Award, CheckCircle } from 'lucide-react';

const BATCH_DATA = {
  '2025': {
    stats: [
      { label: 'Placement Rate', value: '94%', sample: true },
      { label: 'Highest Package', value: '₹28.0 LPA', sample: true },
      { label: 'Average Package', value: '₹8.6 LPA', sample: true },
      { label: 'Total Placed Offers', value: '85+', sample: true },
    ],
    distribution: [
      { bracket: '< 6 LPA', percentage: 22 },
      { bracket: '6 - 10 LPA', percentage: 46 },
      { bracket: '10 - 15 LPA', percentage: 20 },
      { bracket: '> 15 LPA', percentage: 12 },
    ]
  },
  '2024': {
    stats: [
      { label: 'Placement Rate', value: '91%', sample: true },
      { label: 'Highest Package', value: '₹24.5 LPA', sample: true },
      { label: 'Average Package', value: '₹7.9 LPA', sample: true },
      { label: 'Total Placed Offers', value: '78+', sample: true },
    ],
    distribution: [
      { bracket: '< 6 LPA', percentage: 28 },
      { bracket: '6 - 10 LPA', percentage: 48 },
      { bracket: '10 - 15 LPA', percentage: 16 },
      { bracket: '> 15 LPA', percentage: 8 },
    ]
  },
  '2023': {
    stats: [
      { label: 'Placement Rate', value: '89%', sample: true },
      { label: 'Highest Package', value: '₹22.0 LPA', sample: true },
      { label: 'Average Package', value: '₹7.4 LPA', sample: true },
      { label: 'Total Placed Offers', value: '72+', sample: true },
    ],
    distribution: [
      { bracket: '< 6 LPA', percentage: 32 },
      { bracket: '6 - 10 LPA', percentage: 46 },
      { bracket: '10 - 15 LPA', percentage: 14 },
      { bracket: '> 15 LPA', percentage: 8 },
    ]
  }
};

export default function Placements() {
  const [selectedBatch, setSelectedBatch] = useState('2025');
  const currentBatchData = BATCH_DATA[selectedBatch];

  return (
    <div>
      <PageHeader
        eyebrow="Career Outcomes"
        title="Placements & Industry Recruitment"
        description="Graduates of the Division of Information Technology at SOE CUSAT excel across software engineering, cloud architecture, and emerging deep-tech domains."
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-surface-alt)', padding: '0.4rem 0.85rem', borderRadius: '4px', border: '1px dashed var(--color-border)', fontSize: '0.85rem', color: 'var(--color-muted)' }}>
          <span>Notice: Placement figures shown are <strong>Sample data</strong> for illustrative and demo purposes.</span>
        </div>
      </PageHeader>

      {/* 1. BATCH SELECTOR & STATS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <span className="section-eyebrow">Academic Cohort</span>
              <h2 className="section-title" style={{ margin: 0 }}>Batch Performance: {selectedBatch}</h2>
            </div>

            {/* Batch Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-muted)' }}>Select Batch:</span>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                {['2025', '2024', '2023'].map((batch) => (
                  <button
                    key={batch}
                    type="button"
                    className={`filter-btn ${selectedBatch === batch ? 'active' : ''}`}
                    onClick={() => setSelectedBatch(batch)}
                  >
                    Class of {batch}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Clean Stat Blocks */}
          <div key={`stats-${selectedBatch}`} className="filter-cards-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {currentBatchData.stats.map((stat, idx) => (
              <div key={idx} className="card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--heading)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.925rem', color: 'var(--color-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {stat.label}
                </div>
                <span className="badge badge-sample">Sample data</span>
              </div>
            ))}
          </div>

          {/* 2. CSS-ONLY BAR CHART FOR SALARY DISTRIBUTION */}
          <div key={`chart-${selectedBatch}`} className="card filter-cards-fade" style={{ padding: '2.5rem', marginBottom: '3.5rem', backgroundColor: 'var(--color-surface)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-strong)', marginBottom: '0.35rem' }}>
                  CTC Compensation Distribution (Batch of {selectedBatch})
                </h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', margin: 0 }}>
                  Pure CSS breakdown of offers grouped by compensation brackets.
                </p>
              </div>
              <span className="badge badge-sample">CSS Bar Chart · Sample data</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {currentBatchData.distribution.map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 500 }}>
                    <span>{item.bracket}</span>
                    <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{item.percentage}% of offers</span>
                  </div>
                  <div style={{ width: '100%', height: '22px', backgroundColor: 'var(--color-surface-alt)', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
                    <div
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: idx === 3 ? 'var(--color-primary-strong)' : idx === 2 ? 'var(--color-primary)' : 'var(--color-secondary)',
                        borderRadius: '3px',
                        transition: 'width 0.3s ease'
                      }}
                      role="progressbar"
                      aria-valuenow={item.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. RECRUITER CHIPS */}
          <div className="card" style={{ padding: '2.5rem', marginBottom: '3.5rem', backgroundColor: 'var(--color-surface)' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="section-eyebrow">Recruiter Ecosystem</span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-strong)', marginBottom: '0.5rem' }}>
                Companies Recruiting from Division of IT
              </h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', margin: 0 }}>
                Organizations actively participating in on-campus drives and alumni hiring partnerships.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {PLACEMENT_STATS.topRecruiters.map((company, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'var(--color-surface-alt)',
                    border: '1px solid var(--color-border)',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-primary-strong)'
                  }}
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          {/* 4. CAREER RESOURCES */}
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="section-eyebrow">Guidance & Portals</span>
              <h2 className="section-title">Career Preparation Resources</h2>
              <p className="section-subtitle">Official training portals and student-maintained placement archives.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {PLACEMENT_STATS.resources.map((res, idx) => (
                <div key={idx} className="card" style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-strong)', marginBottom: '0.5rem' }}>
                    {res.title}
                  </h3>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {res.desc}
                  </p>
                  {res.url.startsWith('http') ? (
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <span>Visit CPO Portal</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="btn btn-outline btn-sm" style={{ cursor: 'default', color: 'var(--color-muted)' }}>
                      <span>Available on Department Hub</span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
