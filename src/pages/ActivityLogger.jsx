import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import {
  Activity,
  CheckCircle,
  Clock,
  Send,
  Trophy,
  ExternalLink,
  Award,
  Calendar,
  UserCheck,
  RefreshCw
} from 'lucide-react';

const STORAGE_KEY = 'sait_user_activities_v1';

const INITIAL_DEMO_ACTIVITIES = [
  {
    id: 'act-demo-1',
    name: 'Hack Europa 2026 Organizing Committee',
    date: '2026-09-12',
    type: 'Hackathon',
    role: 'Organizer',
    description: 'Managed technical platform infrastructure and logistics for 40+ participant teams.',
    proofUrl: 'https://github.com/cusat-it',
    status: 'Verified',
  },
  {
    id: 'act-demo-2',
    name: 'Docker & Kubernetes Workshop Completion',
    date: '2026-08-20',
    type: 'Workshop',
    role: 'Participant',
    description: 'Completed 6-hour hands-on deployment track on microservices orchestration.',
    proofUrl: 'https://drive.google.com/cert-sample',
    status: 'Under review',
  }
];

const COMMUNITY_FEED = [
  {
    student: 'Advaith Pradosh (3rd Year)',
    activity: 'IEEE Conference Research Paper Accepted',
    type: 'Research',
    date: 'Sep 14, 2026',
    credits: '+100 pts',
    status: 'Verified'
  },
  {
    student: 'Abhinav O (3rd Year)',
    activity: 'Built SAIT Open Source Department Portal',
    type: 'Project',
    date: 'Sep 10, 2026',
    credits: '+80 pts',
    status: 'Verified'
  },
  {
    student: 'K V Trisha Gautham (3rd Year)',
    activity: 'Conducted Git Crash Course for Freshers',
    type: 'Speaker',
    date: 'Aug 29, 2026',
    credits: '+60 pts',
    status: 'Verified'
  },
  {
    student: 'Akash M P (2nd Year)',
    activity: 'Volunteered for CUSAT Tech Fest Logistics',
    type: 'Volunteering',
    date: 'Aug 18, 2026',
    credits: '+40 pts',
    status: 'Verified'
  }
];

const LEADERBOARD_TOP5 = [
  { rank: 1, name: 'Advaith Pradosh', year: '3rd Year IT', points: 420, verifiedCount: 7 },
  { rank: 2, name: 'Abhinav O', year: '3rd Year IT', points: 390, verifiedCount: 6 },
  { rank: 3, name: 'Sreelakshmi K', year: '4th Year IT', points: 350, verifiedCount: 5 },
  { rank: 4, name: 'Akash M P', year: '2nd Year IT', points: 310, verifiedCount: 5 },
  { rank: 5, name: 'K V Trisha Gautham', year: '3rd Year IT', points: 290, verifiedCount: 4 },
];

export default function ActivityLogger() {
  const [activeTab, setActiveTab] = useState('my-activities');
  const [activities, setActivities] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_DEMO_ACTIVITIES;
    } catch {
      return INITIAL_DEMO_ACTIVITIES;
    }
  });

  const [formData, setFormData] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0],
    type: 'Workshop',
    role: 'Participant',
    description: '',
    proofUrl: '',
  });

  const [formSubmittedMsg, setFormSubmittedMsg] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
    } catch (err) {
      console.error('Error saving to localStorage:', err);
    }
  }, [activities]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newActivity = {
      id: `act-${Date.now()}`,
      name: formData.name,
      date: formData.date,
      type: formData.type,
      role: formData.role,
      description: formData.description,
      proofUrl: formData.proofUrl || '#',
      status: 'Submitted',
    };

    setActivities([newActivity, ...activities]);
    setFormData({
      name: '',
      date: new Date().toISOString().split('T')[0],
      type: 'Workshop',
      role: 'Participant',
      description: '',
      proofUrl: '',
    });

    setFormSubmittedMsg(true);
    setTimeout(() => setFormSubmittedMsg(false), 4000);
  };

  // Cycle demo status: Submitted -> Under review -> Verified -> Submitted
  const advanceDemoStatus = (id) => {
    setActivities((prev) =>
      prev.map((act) => {
        if (act.id === id) {
          let nextStatus = 'Submitted';
          if (act.status === 'Submitted') nextStatus = 'Under review';
          else if (act.status === 'Under review') nextStatus = 'Verified';
          return { ...act, status: nextStatus };
        }
        return act;
      })
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Verified':
        return <span className="badge badge-success">Verified</span>;
      case 'Under review':
        return <span className="badge badge-warning">Under review</span>;
      default:
        return <span className="badge badge-secondary">Submitted</span>;
    }
  };

  return (
    <div>
      <PageHeader
        eyebrow="Student Recognition"
        title="SAIT Activity Logger"
        description="Log your workshops, hackathons, open source contributions, and leadership roles to earn verified credits."
      />

      <section className="section">
        <div className="container">
          {/* Main Tabs */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
            <button
              type="button"
              className={`filter-btn ${activeTab === 'my-activities' ? 'active' : ''}`}
              onClick={() => setActiveTab('my-activities')}
            >
              My Activities & Submissions
            </button>
            <button
              type="button"
              className={`filter-btn ${activeTab === 'community-feed' ? 'active' : ''}`}
              onClick={() => setActiveTab('community-feed')}
            >
              Community Feed & Leaderboard
            </button>
          </div>

          {/* TAB 1: MY ACTIVITIES (Form + History) */}
          {activeTab === 'my-activities' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
              
              {/* Submission Form */}
              <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.35rem', color: 'var(--primary-dark)', marginBottom: '0.35rem' }}>
                    Log New Activity
                  </h2>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
                    Stored locally in your browser and reviewed for departmental credits.
                  </p>
                </div>

                {formSubmittedMsg && (
                  <div style={{ background: '#E6F4EA', color: '#1E7F4F', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.875rem', marginBottom: '1.25rem', border: '1px solid #c2e7cc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} />
                    <span>Activity logged successfully! Demo status initialized to "Submitted".</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Activity Title *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Hack Europa 2026 Participation"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="type">Type</label>
                      <select
                        id="type"
                        name="type"
                        className="form-select"
                        value={formData.type}
                        onChange={handleInputChange}
                      >
                        <option value="Workshop">Workshop</option>
                        <option value="Hackathon">Hackathon</option>
                        <option value="Competition">Competition</option>
                        <option value="Project">Project Build</option>
                        <option value="Seminar">Seminar</option>
                        <option value="Volunteering">Volunteering</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="role">Role</label>
                      <select
                        id="role"
                        name="role"
                        className="form-select"
                        value={formData.role}
                        onChange={handleInputChange}
                      >
                        <option value="Participant">Participant</option>
                        <option value="Organizer">Organizer</option>
                        <option value="Speaker">Speaker / Mentor</option>
                        <option value="Winner">Winner / Finalist</option>
                        <option value="Volunteer">Volunteer</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="date">Date</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="form-input"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="description">Description / Key Contribution</label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-textarea"
                      placeholder="Briefly describe what you built, learned or organized..."
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="proofUrl">Proof URL (GitHub, Certificate, Drive)</label>
                    <input
                      id="proofUrl"
                      name="proofUrl"
                      type="url"
                      className="form-input"
                      placeholder="https://..."
                      value={formData.proofUrl}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <Send size={16} />
                    <span>Submit Activity</span>
                  </button>
                </form>
              </div>

              {/* Activity History & Progress */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div>
                    <h2 style={{ fontSize: '1.35rem', color: 'var(--primary-dark)', margin: 0 }}>
                      Activity History ({activities.length})
                    </h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', margin: 0 }}>
                      Review status workflow simulation.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {activities.map((act) => (
                    <div key={act.id} className="card" style={{ padding: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                            <span className="badge badge-primary">{act.type}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Role: {act.role}</span>
                          </div>
                          <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', margin: 0 }}>
                            {act.name}
                          </h3>
                        </div>
                        <div>
                          {getStatusBadge(act.status)}
                        </div>
                      </div>

                      {act.description && (
                        <p style={{ color: 'var(--text)', fontSize: '0.875rem', lineHeight: '1.5', margin: '0.5rem 0' }}>
                          {act.description}
                        </p>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem', marginTop: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
                          <Calendar size={13} />
                          <span>{act.date}</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {act.proofUrl && act.proofUrl !== '#' && (
                            <a
                              href={act.proofUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--secondary)' }}
                            >
                              <span>Proof Link</span>
                              <ExternalLink size={12} />
                            </a>
                          )}

                          {/* Advance Demo Status Button */}
                          <button
                            type="button"
                            onClick={() => advanceDemoStatus(act.id)}
                            className="btn btn-outline btn-sm"
                            style={{ padding: '0.25rem 0.55rem', fontSize: '0.75rem', minHeight: '30px' }}
                            title="Simulate reviewer action"
                          >
                            <RefreshCw size={12} />
                            <span>Advance demo status</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: COMMUNITY FEED & LEADERBOARD */}
          {activeTab === 'community-feed' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
              
              {/* Community Feed */}
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.35rem', color: 'var(--primary-dark)', marginBottom: '0.35rem' }}>
                    Verified Community Feed
                  </h2>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
                    Recent authenticated achievements and contributions across batches.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {COMMUNITY_FEED.map((item, idx) => (
                    <div key={idx} className="card" style={{ padding: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.925rem', color: 'var(--primary)' }}>
                          {item.student}
                        </span>
                        <span style={{ fontWeight: 700, color: 'var(--success)', fontSize: '0.85rem' }}>
                          {item.credits}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                        {item.activity}
                      </h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--muted)' }}>
                        <span>Category: {item.type} · {item.date}</span>
                        <span className="badge badge-success">Verified</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leaderboard */}
              <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Trophy size={20} style={{ color: 'var(--accent)' }} />
                      <h2 style={{ fontSize: '1.35rem', color: 'var(--primary-dark)', margin: 0 }}>Top Contributors</h2>
                    </div>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>Department Activity Ranking</p>
                  </div>
                  <span className="badge badge-sample">Demo Leaderboard</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {LEADERBOARD_TOP5.map((row) => (
                    <div
                      key={row.rank}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1rem',
                        borderRadius: '6px',
                        background: row.rank === 1 ? '#FFF8E7' : row.rank === 2 ? '#F2F6FA' : '#F7F6F2',
                        border: row.rank === 1 ? '1px solid #F3DB9A' : '1px solid var(--border-light)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: row.rank === 1 ? 'var(--accent)' : 'var(--muted)', width: '24px', textAlign: 'center' }}>
                          #{row.rank}
                        </span>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)' }}>
                            {row.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                            {row.year} · {row.verifiedCount} verified acts
                          </div>
                        </div>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--primary)' }}>
                        {row.points} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
}
