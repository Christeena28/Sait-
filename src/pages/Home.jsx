import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  BookOpen,
  Sparkles,
  Trophy,
  Users,
  Briefcase,
  FileText,
  Activity,
  ShieldCheck
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';
import PersonCard from '../components/PersonCard';
import CountUp from '../components/CountUp';
import HeroWaveBackground from '../components/HeroWaveBackground';
import {
  STATS,
  FACULTY,
  EVENTS
} from '../data/saitData';

export default function Home() {
  const [activePortal, setActivePortal] = useState(0);
  const [heroVerb, setHeroVerb] = useState('Build');
  const upcomingEvents = EVENTS.filter((e) => e.status === 'Upcoming').slice(0, 3);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const verbTimers = [
      window.setTimeout(() => setHeroVerb('Create'), 3800),
      window.setTimeout(() => setHeroVerb('Learn'), 5000),
      window.setTimeout(() => setHeroVerb('Explore'), 6200),
    ];

    return () => verbTimers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="section-hero sait-hero">
        <HeroWaveBackground />
        <div className="hero-dot-grid" aria-hidden="true" />
        <div className="container sait-hero-inner">
          <div className="sait-hero-content">
            <span className="sait-hero-eyebrow hero-stagger-1">Students Association of Information Technology</span>
            <h1 className="sait-hero-title">
              <span className="hero-title-line hero-stagger-2">Where Students</span>
              <span className="hero-title-line hero-title-line-verb hero-stagger-3">
                <span key={heroVerb} className="hero-title-verb hero-verb-enter" aria-label={heroVerb}>
                  {heroVerb.split('').map((character, index) => (
                    <span key={`${heroVerb}-${index}`} className="hero-verb-character" style={{ animationDelay: `${index * 70}ms` }} aria-hidden="true">
                      {character}
                    </span>
                  ))}
                </span>
                <span>What Comes Next.</span>
              </span>
            </h1>
            <p className="sait-hero-subtitle hero-stagger-4">Connecting students, technology, opportunities and ideas at CUSAT.</p>
            <div className="sait-hero-actions hero-stagger-5">
              <Link to="/about" className="sait-hero-primary">Explore SAIT <ArrowRight size={17} aria-hidden="true" /></Link>
              <Link to="/events" className="sait-hero-secondary">Explore Events</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Dark slate band with count-up numbers) */}
      <section className="dark-band" style={{ backgroundColor: 'var(--color-primary-strong)', color: 'var(--color-on-dark)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="stats-grid-mobile reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {STATS.map((stat, idx) => (
              <div key={idx} style={{ padding: '1rem', textAlign: 'center', borderRight: idx !== STATS.length - 1 ? '1px solid rgba(148, 163, 184, 0.18)' : 'none' }}>
                <div style={{ fontFamily: 'var(--heading)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--color-surface)', lineHeight: 1.1, marginBottom: '0.4rem' }}>
                  <CountUp value={stat.value} />
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-on-dark-muted)', fontWeight: 500, marginBottom: '0.25rem' }}>
                  {stat.label}
                </div>
                {stat.sample && (
                  <span className="badge" style={{ fontSize: '0.7rem', background: 'rgba(148, 163, 184, 0.15)', color: 'var(--color-on-dark-muted)', border: '1px dashed rgba(148, 163, 184, 0.28)', textTransform: 'none' }}>
                    Sample figure
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SAIT (Editorial Section) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div className="reveal">
              <span className="section-eyebrow">Academic & Professional Community</span>
              <h2 className="section-title">An Association Built on Curiosity and Collaboration</h2>
              <p style={{ marginBottom: '1.25rem', color: 'var(--color-text)' }}>
                The Students Association of Information Technology (SAIT) is one of the premier student-led organizations
                at the School of Engineering, CUSAT. Formed to nurture technological excellence, SAIT operates with active
                guidance and mentorship from the faculty of the Division of Information Technology.
              </p>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-muted)' }}>
                We bridge classroom theory with industry-scale software craftsmanship through continuous hands-on learning,
                mentorship from alumni in top global firms, and departmental technical initiatives.
              </p>
              <Link to="/about" className="btn btn-outline">
                <span>Learn More About Our Journey</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Genuine SAIT Activities Grid */}
            <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {[
                { title: 'Workshops', desc: 'Practical hands-on technical bootcamps on cloud, web & AI.', icon: BookOpen },
                { title: 'Seminars', desc: 'Expert lectures on advanced computing and industry trends.', icon: Sparkles },
                { title: 'Projects', desc: 'Student-led software and research engineering builds.', icon: Activity },
                { title: 'Magazine', desc: 'Annual departmental publication with articles, poetry & art.', icon: FileText },
                { title: 'Alumni Meet', desc: 'Annual Footprints meet uniting batches worldwide.', icon: Users },
                { title: 'Information Board', desc: 'Departmental notice board for career & research news.', icon: ShieldCheck },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div key={i} className="card" style={{ padding: '1.25rem' }}>
                    <IconComponent size={22} style={{ color: 'var(--color-secondary)', marginBottom: '0.65rem' }} />
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.35rem', color: 'var(--color-text)', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', margin: 0 }}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUICK LINKS (6 Cards - Essential Department Portals) */}
      <section className="section-alt section">
        <div className="container">
          <SectionHeader
            eyebrow="Explore SAIT"
            title="Essential Department Portals"
            subtitle="Navigate directly to key branches of student association activities and institutional archives."
            centered
          />
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'Events', link: '/events', icon: Calendar, desc: 'Hackathons, talks & seminars' },
              { title: 'Placements', link: '/placements', icon: Briefcase, desc: 'Placement records & recruiters' },
              { title: 'Alumni', link: '/alumni', icon: Users, desc: 'Global graduate network' },
              { title: 'Hall of Fame', link: '/hall-of-fame', icon: Trophy, desc: 'Accreditations & awards' },
              { title: 'Activity Logger', link: '/activity-logger', icon: Activity, desc: 'Track & verify activities' },
              { title: 'Resources', link: '/about#resources', icon: BookOpen, desc: 'Curriculum & SOE portals' },
            ].map((q, i) => {
              const Icon = q.icon;
              const isActive = activePortal === i;
              return (
                <Link
                  key={i}
                  to={q.link}
                  className={`card portal-card ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActivePortal(i)}
                  onFocus={() => setActivePortal(i)}
                  style={{
                    padding: '1.5rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    background: isActive ? 'var(--color-highlight)' : 'rgba(157, 169, 179, 0.14)',
                    color: isActive ? 'var(--color-deep)' : 'var(--color-muted)',
                    borderColor: isActive ? 'var(--color-highlight)' : 'rgba(157, 169, 179, 0.3)',
                  }}
                >
                  <div
                    className="portal-icon-box"
                    style={{
                      background: isActive ? 'rgba(8, 11, 15, 0.12)' : 'rgba(157, 169, 179, 0.12)',
                      padding: '0.65rem',
                      borderRadius: '6px',
                      color: isActive ? 'var(--color-deep)' : 'var(--color-muted)',
                      marginBottom: '1rem',
                      transition: 'background-color var(--dur-base) var(--ease), color var(--dur-base) var(--ease)',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      color: isActive ? 'var(--color-deep)' : 'var(--color-muted)',
                      marginBottom: '0.35rem',
                      fontFamily: 'var(--font-subheading)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {q.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: isActive ? 'var(--color-deep)' : 'var(--color-muted)',
                      margin: 0,
                    }}
                  >
                    {q.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. UPCOMING EVENTS */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-eyebrow">Stay Involved</span>
              <h2 className="section-title">Upcoming Association Events</h2>
              <p className="section-subtitle">Flagship hackathons, technology workshops and career sessions.</p>
            </div>
            <Link to="/events" className="btn btn-outline btn-sm">
              <span>View All Events</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FACULTY SECTION (4 Cards) */}
      <section className="section-alt section">
        <div className="container">
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-eyebrow">Academic Leadership</span>
              <h2 className="section-title">Faculty Mentors & Advisory</h2>
              <p className="section-subtitle">Guiding the students of the Division of Information Technology, SOE CUSAT.</p>
            </div>
            <Link to="/about" className="btn btn-outline btn-sm">
              <span>About Division</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {FACULTY.map((person, idx) => (
              <PersonCard key={idx} person={person} isFaculty={true} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT CTA */}
      <section className="dark-section" style={{ backgroundColor: 'var(--color-deep)', color: 'var(--color-on-dark)', padding: '4rem 0' }}>
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span style={{ color: 'var(--color-on-dark-muted)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
            Connect With SAIT
          </span>
          <h2 style={{ color: 'var(--color-surface)', fontSize: '2.2rem', marginBottom: '1rem', fontWeight: 700 }}>
            Have an Idea, Workshop Proposal or Collaboration?
          </h2>
          <p style={{ color: 'var(--color-on-dark)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            SAIT welcomes technology speakers, alumni mentors, hackathon sponsors, and enthusiastic students.
            Reach out to the executive committee or visit the department gateway.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:principal_soe@cusat.ac.in" className="btn btn-accent">
              <span>Email SAIT Coordinator</span>
            </a>
            <Link to="/team" className="btn btn-outline-white">
              <span>View Executive Committee</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
