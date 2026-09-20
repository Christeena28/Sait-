import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import AlumniCard from '../components/AlumniCard';
import { ALUMNI_LIST, ALUMNI_SPOTLIGHT } from '../data/saitData';
import { Users, Filter } from 'lucide-react';

const BATCH_FILTERS = ['All Batches', '2023', '2022', '2021', '2020', '2019'];

export default function Alumni() {
  const [selectedBatch, setSelectedBatch] = useState('All Batches');

  const filteredAlumni = selectedBatch === 'All Batches'
    ? ALUMNI_LIST
    : ALUMNI_LIST.filter((a) => a.batch === selectedBatch);

  return (
    <div>
      <PageHeader
        eyebrow="Global Network"
        title="Alumni Community"
        description="Connecting generations of Division of Information Technology graduates making an impact across technology companies, research institutions, and startups."
      />

      {/* 1. FEATURED ALUMNI HIGHLIGHT */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="section-eyebrow">Distinguished Mentor</span>
            <h2 className="section-title">Featured Alumni Spotlight</h2>
          </div>
          <div style={{ maxWidth: '850px' }}>
            <AlumniCard alumni={ALUMNI_SPOTLIGHT} />
          </div>
        </div>
      </section>

      {/* 2. BATCH FILTER & DIRECTORY */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <span className="section-eyebrow">Alumni Directory</span>
              <h2 className="section-title" style={{ margin: 0 }}>Browse Graduates</h2>
            </div>

            {/* Filter Bar */}
            <div className="filter-bar" style={{ marginBottom: 0 }}>
              {BATCH_FILTERS.map((batch) => (
                <button
                  key={batch}
                  type="button"
                  className={`filter-btn ${selectedBatch === batch ? 'active' : ''}`}
                  onClick={() => setSelectedBatch(batch)}
                >
                  {batch}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {filteredAlumni.map((alumni, idx) => (
              <AlumniCard key={idx} alumni={alumni} />
            ))}
          </div>

          {/* Connect CTA for Alumni */}
          <div className="card" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF', textAlign: 'center', borderTop: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-dark)', marginBottom: '0.65rem' }}>
              Are You a Division of IT Alumnus?
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto 1.5rem' }}>
              We would love to reconnect! Join the annual "Footprints" alumni meet, conduct guest talks,
              or offer mentorship to aspiring IT students.
            </p>
            <a
              href="mailto:principal_soe@cusat.ac.in?subject=SAIT Alumni Connect"
              className="btn btn-primary"
            >
              <span>Connect with SAIT Alumni Cell</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
