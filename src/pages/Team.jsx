import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import PersonCard from '../components/PersonCard';
import { TEAM_MEMBERS } from '../data/saitData';

const TEAMS = ['All', 'Executive', 'Tech', 'Media', 'Events', 'PR', 'Content'];

export default function Team() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredMembers = selectedFilter === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.team === selectedFilter);

  const execMembers = TEAM_MEMBERS.filter((m) => m.team === 'Executive');

  return (
    <div>
      <PageHeader
        eyebrow="Student Leadership"
        title="SAIT Executive Committee & Teams"
        description="Meet the elected and nominated student representatives directing the academic, technical, cultural, and professional initiatives of SAIT."
      />

      {/* 1. EXECUTIVE COMMITTEE (Top tier) */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="section-eyebrow">Core Office Bearers</span>
            <h2 className="section-title">Executive Committee</h2>
            <p className="section-subtitle">Leading governance, strategy and department coordination.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {execMembers.map((member, idx) => (
              <PersonCard key={idx} person={member} isFaculty={false} />
            ))}
          </div>

          {/* 2. SUB-TEAMS WITH FILTER BAR */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="section-eyebrow">Department Sub-Committees</span>
                <h2 className="section-title">All Team Leads & Coordinators</h2>
                <p className="section-subtitle">Filter by specialization domain.</p>
              </div>

              {/* Filter Chips */}
              <div className="filter-bar" style={{ marginBottom: 0 }}>
                {TEAMS.map((team) => (
                  <button
                    key={team}
                    type="button"
                    className={`filter-btn ${selectedFilter === team ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(team)}
                  >
                    {team}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {filteredMembers.map((member, idx) => (
                <PersonCard key={idx} person={member} isFaculty={false} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
