import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  Trophy,
  Users,
  Briefcase,
  FileText,
  Activity,
  Award,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';
import PersonCard from '../components/PersonCard';
import AchievementCard from '../components/AchievementCard';
import AlumniCard from '../components/AlumniCard';
import CountUp from '../components/CountUp';
import {
  STATS,
  FACULTY,
  EVENTS,
  HALL_OF_FAME,
  ALUMNI_SPOTLIGHT,
  PLACEMENT_STATS,
  NOTICES
} from '../data/saitData';

export default function Home() {
  const [activePortal, setActivePortal] = useState(0);
  const nextEvent = EVENTS.find((e) => e.status === 'Upcoming') || EVENTS[0];
  const latestNotice = NOTICES[0];
  const upcomingEvents = EVENTS.filter((e) => e.status === 'Upcoming').slice(0, 3);
  const homeAchievements = HALL_OF_FAME.slice(0, 3);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="section-hero" style={{ padding: '4.5rem 0 5rem' }}>
        <div className="hero-dot-grid" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <div className="hero-stagger-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(228, 220, 203, 0.12)', padding: '0.35rem 0.85rem', borderRadius: '4px', marginBottom: '1.25rem' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-on-dark)' }} />
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.06em', color: 'var(--color-on-dark)' }}>
                  DIVISION OF INFORMATION TECHNOLOGY · SOE, CUSAT
                </span>
              </div>

              <h1 className="hero-stagger-2" style={{ color: 'var(--color-surface)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.18, marginBottom: '1.25rem', fontWeight: 700 }}>
                SAIT: where CUSAT's IT students learn, build and lead.
              </h1>

              <p className="hero-stagger-3" style={{ color: 'var(--color-on-dark)', fontSize: '1.125rem', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '580px' }}>
                A student-run association fostering learning, projects, workshops, seminars,
                collaboration and connections across the IT community.
              </p>

              <div className="hero-stagger-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/events" className="btn btn-accent">
                  <Calendar size={18} aria-hidden="true" />
                  <span>View Events</span>
                </Link>
                <Link to="/activity-logger" className="btn btn-outline-white">
                  <Activity size={18} aria-hidden="true" />
                  <span>Log Activity</span>
                </Link>
              </div>
            </div>

            {/* Right Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* SAIT Brand Badge */}
              <div className="hero-stagger-5" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(228, 220, 203, 0.08)', border: '1px solid rgba(228, 220, 203, 0.16)', padding: '1rem 1.25rem', borderRadius: '6px' }}>
                <img
                  src="/img/logo.png"
                  alt="SAIT Logo"
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div>
                  <h3 style={{ color: 'var(--color-surface)', fontSize: '1rem', margin: 0, fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>SAIT Association Portal</h3>
                  <span style={{ color: 'var(--color-on-dark-muted)', fontSize: '0.8rem', fontWeight: 500 }}>
                    Official Student Body · Est. Division of IT
                  </span>
                </div>
              </div>

              {/* Next Event Card */}
              {nextEvent && (
                <div className="hero-stagger-6" style={{ background: 'var(--color-surface)', borderRadius: '6px', padding: '1.25rem', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <span className="badge badge-primary">Next Event</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>{nextEvent.date}</span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text)', marginBottom: '0.4rem', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>
                    {nextEvent.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginBottom: '0.85rem' }}>
                    {nextEvent.venue} · {nextEvent.time}
                  </p>
                  <Link to="/events" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>Event Details & RSVP</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}

              {/* Latest Notice Card */}
              {latestNotice && (
                <div className="hero-stagger-6" style={{ background: 'rgba(228, 220, 203, 0.08)', borderRadius: '6px', padding: '1.25rem', border: '1px solid rgba(228, 220, 203, 0.16)', color: 'var(--color-on-dark)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ background: 'rgba(228, 220, 203, 0.18)', color: 'var(--color-surface)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '4px', textTransform: 'uppercase' }}>
                      Latest Notice
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-on-dark-muted)' }}>{latestNotice.date}</span>
                  </div>
                  <h4 style={{ fontSize: '0.975rem', color: 'var(--color-surface)', marginBottom: '0.4rem', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>
                    {latestNotice.title}
                  </h4>
                  <Link to="/notices" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-on-dark)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'underline' }}>
                    <span>Read Notice</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Dark slate band with count-up numbers) */}
      <section className="dark-band" style={{ backgroundColor: 'var(--color-primary-strong)', color: 'var(--color-on-dark)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="stats-grid-mobile reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {STATS.map((stat, idx) => (
              <div key={idx} style={{ padding: '1rem', textAlign: 'center', borderRight: idx !== STATS.length - 1 ? '1px solid rgba(228, 220, 203, 0.15)' : 'none' }}>
                <div style={{ fontFamily: 'var(--heading)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--color-surface)', lineHeight: 1.1, marginBottom: '0.4rem' }}>
                  <CountUp value={stat.value} />
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-on-dark-muted)', fontWeight: 500, marginBottom: '0.25rem' }}>
                  {stat.label}
                </div>
                {stat.sample && (
                  <span className="badge" style={{ fontSize: '0.7rem', background: 'rgba(228, 220, 203, 0.15)', color: 'var(--color-on-dark-muted)', border: '1px dashed rgba(228, 220, 203, 0.25)', textTransform: 'none' }}>
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
                    background: isActive ? 'var(--color-deep)' : 'var(--color-surface)',
                    color: isActive ? '#FFFFFF' : 'var(--color-text)',
                    borderColor: isActive ? 'var(--color-deep)' : 'var(--color-border)',
                  }}
                >
                  <div
                    className="portal-icon-box"
                    style={{
                      background: isActive ? 'rgba(255, 255, 255, 0.15)' : 'var(--color-surface-alt)',
                      padding: '0.65rem',
                      borderRadius: '6px',
                      color: isActive ? '#FFFFFF' : 'var(--color-primary)',
                      marginBottom: '1rem',
                      transition: 'background-color var(--dur-base) var(--ease), color var(--dur-base) var(--ease)',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      color: isActive ? '#FFFFFF' : 'var(--color-text)',
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
                      color: isActive ? 'var(--color-on-dark)' : 'var(--color-muted)',
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

      {/* 7. PLACEMENTS PREVIEW (Dark Band) */}
      <section className="dark-band section" style={{ backgroundColor: 'var(--color-primary-strong)', color: 'var(--color-on-dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div className="reveal">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="section-eyebrow" style={{ color: 'var(--color-on-dark-muted)' }}>Career Outcomes</span>
                <span className="badge badge-sample" style={{ background: 'rgba(228, 220, 203, 0.15)', color: 'var(--color-on-dark-muted)', borderColor: 'rgba(228, 220, 203, 0.25)' }}>Sample Data</span>
              </div>
              <h2 className="section-title" style={{ color: 'var(--color-surface)' }}>Industry Placements & Recruiting</h2>
              <p style={{ color: 'var(--color-on-dark)', marginBottom: '1.75rem' }}>
                Information Technology graduates from SOE CUSAT consistently secure high-impact roles
                across global product organizations, consulting giants, and innovative technical startups.
              </p>

              {/* 3 Stats (Cards stay beige --color-surface) */}
              <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.75rem' }}>
                {PLACEMENT_STATS.stats.slice(0, 3).map((st, i) => (
                  <div key={i} className="card" style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'var(--color-surface)' }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--heading)' }}>
                      <CountUp value={st.value} />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', marginTop: '0.2rem' }}>
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recruiter Chips */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-surface)', marginBottom: '0.65rem' }}>
                  Prominent Campus Recruiters:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {PLACEMENT_STATS.topRecruiters.slice(0, 8).map((rec, i) => (
                    <span key={i} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '0.25rem 0.65rem', borderRadius: '4px', fontSize: '0.825rem', color: 'var(--color-text)', fontWeight: 500 }}>
                      {rec}
                    </span>
                  ))}
                  <span style={{ padding: '0.25rem 0.65rem', fontSize: '0.825rem', color: 'var(--color-on-dark-muted)', fontWeight: 500 }}>
                    + many more
                  </span>
                </div>
              </div>

              <Link to="/placements" className="btn btn-primary">
                <span>View Full Placement Report</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Recruiter & Career Highlight Box (stays beige --color-surface) */}
            <div className="card reveal" style={{ padding: '2rem', backgroundColor: 'var(--color-surface)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-text)', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>
                Dedicated Career Support
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>Peer-Driven DSA & Mock Rounds:</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', margin: 0 }}>Weekly coding practice and technical mock interview sessions hosted by placed seniors.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>Central Placement Coordination:</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', margin: 0 }}>Direct integration with the Central Placement Office (CPO) of CUSAT.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>Alumni Referral Networks:</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', margin: 0 }}>Exclusive referral opportunities and mentorship from IT alumni at top tech firms.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HALL OF FAME (3 Cards) */}
      <section className="section-alt section">
        <div className="container">
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-eyebrow">Excellence & Accreditations</span>
              <h2 className="section-title">Department Hall of Fame</h2>
              <p className="section-subtitle">Key institutional milestones, competitive achievements, and international recognitions.</p>
            </div>
            <Link to="/hall-of-fame" className="btn btn-outline btn-sm">
              <span>View All Milestones</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {homeAchievements.map((item) => (
              <AchievementCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. ACTIVITY LOGGER INTRODUCTION + LEADERBOARD (Dark Band) */}
      <section className="dark-band section" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div className="reveal">
              <span className="section-eyebrow" style={{ color: 'var(--color-on-dark-muted)' }}>Student Recognition Program</span>
              <h2 className="section-title" style={{ color: 'var(--color-surface)' }}>SAIT Activity Logger</h2>
              <p style={{ color: 'var(--color-on-dark)', marginBottom: '1.25rem' }}>
                Keep track of your technical workshops, project builds, hackathon participations,
                and volunteering efforts in one centralized department portal.
              </p>
              <p style={{ color: 'var(--color-on-dark)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                Submit proof of participation, gain verified activity credits, and build your
                verifiable student portfolio for department awards and placement recommendations.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/activity-logger" className="btn btn-primary">
                  <Activity size={16} />
                  <span>Open Activity Logger</span>
                </Link>
              </div>
            </div>

            {/* Mini Leaderboard Preview (stays beige --color-surface) */}
            <div className="card reveal" style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Trophy size={18} style={{ color: 'var(--color-primary)' }} />
                  <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--color-text)', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>Activity Leaderboard</h3>
                </div>
                <span className="badge badge-sample">Demo Ranks</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { rank: 1, name: 'Advaith Pradosh', points: '420 pts', year: '3rd Year IT' },
                  { rank: 2, name: 'Abhinav O', points: '390 pts', year: '3rd Year IT' },
                  { rank: 3, name: 'Sreelakshmi K', points: '350 pts', year: '4th Year IT' },
                  { rank: 4, name: 'Akash M P', points: '310 pts', year: '2nd Year IT' },
                  { rank: 5, name: 'Trisha Gautham', points: '290 pts', year: '3rd Year IT' },
                ].map((row) => (
                  <div key={row.rank} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', borderRadius: '4px', background: row.rank === 1 ? 'var(--color-surface-alt)' : 'var(--color-bg)', border: row.rank === 1 ? '1px solid var(--color-border)' : '1px solid transparent' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontWeight: 700, color: row.rank === 1 ? 'var(--color-primary)' : 'var(--color-muted)', width: '18px', textAlign: 'center' }}>
                        #{row.rank}
                      </span>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text)' }}>{row.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>{row.year}</div>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                      {row.points}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ALUMNI SPOTLIGHT */}
      <section className="section-alt section">
        <div className="container reveal">
          <SectionHeader
            eyebrow="Alumni Spotlight"
            title="Voices from Our Graduate Community"
            subtitle="Honoring leaders who started their journey at the Division of IT, CUSAT."
            centered
          />
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <AlumniCard alumni={ALUMNI_SPOTLIGHT} />
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
