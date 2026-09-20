import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import PersonCard from '../components/PersonCard';
import { FACULTY } from '../data/saitData';
import {
  ExternalLink,
  BookOpen,
  Target,
  Compass,
  CheckCircle,
  FileText,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function About() {
  const TIMELINE_EVENTS = [
    {
      year: 'Foundational Years',
      title: 'Inception of SAIT at SOE CUSAT',
      desc: 'Established as one of the earliest departmental student associations at the School of Engineering, CUSAT, by pioneering batches of the Division of Information Technology.'
    },
    {
      year: 'Academic Milestones',
      title: 'Tier-1 NBA Accreditation & Curriculum Upgrades',
      desc: 'Information Technology engineering earned NBA Tier-1 accreditation and recognized global mobility for alumni across industry and research.'
    },
    {
      year: 'Flagship Launches',
      title: 'Hack Europa & Department Magazine',
      desc: 'Launched Hack Europa, an annual 24-hour hackathon, alongside regular print publications of the student-contributed department magazine.'
    },
    {
      year: 'Recent Recognition',
      title: 'IBM WatsonX AI Grant & Modern Labs',
      desc: 'Selected as one of 25 global institutions to receive the ₹50 Lakhs IBM WatsonX Gen AI Grant, modernizing technical facilities and research focus.'
    }
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Division of Information Technology · SOE CUSAT"
        title="About SAIT"
        description="Students Association of Information Technology is the driving force behind student innovation, co-curricular technical growth, and professional community at SOE CUSAT."
      />

      {/* 1. VISION & MISSION */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--color-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Target size={24} style={{ color: 'var(--color-primary)' }} />
                <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--color-text)' }}>Our Vision</h2>
              </div>
              <p style={{ color: 'var(--color-text)', lineHeight: '1.7', fontSize: '0.975rem' }}>
                To create a dynamic ecosystem where information technology undergraduates evolve into
                technically astute engineers, visionary problem solvers, and ethical leaders capable of
                addressing complex technological challenges facing society and global enterprise.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--color-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Compass size={24} style={{ color: 'var(--color-secondary)' }} />
                <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--color-text)' }}>Our Mission</h2>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text)', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Deliver rigorous hands-on technical workshops spanning modern cloud architectures, data engineering, and artificial intelligence.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Nurture open-source collaboration, competitive programming, and research through student interest groups.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Maintain an enduring bridge between active undergraduates and accomplished alumni across global tech organizations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT SAIT DOES */}
      <section className="section-alt section">
        <div className="container">
          <SectionHeader
            eyebrow="Core Activities"
            title="What SAIT Does"
            subtitle="Genuine academic and student-driven activities organized each academic year."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: 'Workshops & Bootcamps',
                desc: 'Introductory classes and hands-on workshops exploring the latest trends in software engineering, enabling students to gain real practical skills.'
              },
              {
                title: 'Technical Seminars',
                desc: 'Specialized lectures by industry practitioners and faculty experts covering emerging paradigms in AI, cybersecurity, and cloud systems.'
              },
              {
                title: 'Department Projects',
                desc: 'Collaborative technical builds and software projects undertaken by students with active mentorship from faculty members.'
              },
              {
                title: 'Department Magazine',
                desc: 'Annual publication compiling tech essays, literary contributions, poetry, and artwork, distributed to students and faculty.'
              },
              {
                title: 'Annual Alumni Meet',
                desc: 'The yearly "Footprints" meet providing current students a direct platform to interact, seek career guidance, and build mentorship bonds.'
              },
              {
                title: 'Gateway Information Board',
                desc: 'An active notice and information hub positioned at the department gateway, highlighting ongoing opportunities and technical briefings.'
              }
            ].map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text)', marginBottom: '0.5rem', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HISTORY TIMELINE */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Chronicle"
            title="SAIT History & Milestones"
            subtitle="A clean timeline reflecting the journey of Information Technology at CUSAT."
          />
          <div style={{ maxWidth: '840px', margin: '0 auto', borderLeft: '2px solid var(--color-border)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {TIMELINE_EVENTS.map((item, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.55rem',
                    top: '0.15rem',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-surface)',
                    border: '3px solid var(--color-secondary)'
                  }}
                  aria-hidden="true"
                />
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.year}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', margin: '0.35rem 0 0.5rem', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FACULTY SECTION */}
      <section className="section-alt section">
        <div className="container">
          <SectionHeader
            eyebrow="Academic Leadership"
            title="Faculty Advisory Body"
            subtitle="Division faculty guiding and supporting all SAIT initiatives."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {FACULTY.map((person, idx) => (
              <PersonCard key={idx} person={person} isFaculty={true} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESOURCES & OFFICIAL LINKS */}
      <section className="section" id="resources">
        <div className="container">
          <SectionHeader
            eyebrow="Institutional Portals"
            title="Official Academic & Department Resources"
            subtitle="Authoritative links to SOE CUSAT official association records, syllabi, and student portals."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.75rem' }}>
              <GraduationCap size={28} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>SOE IT Association</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', marginBottom: '1.25rem' }}>
                The official departmental association listing hosted on the School of Engineering university portal.
              </p>
              <a
                href="https://soe.cusat.ac.in/soe_association.php?c=it"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <span>Visit Association Portal</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <Layers size={28} style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>School of Engineering</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', marginBottom: '1.25rem' }}>
                Primary website of School of Engineering (SOE), CUSAT with department announcements and office contacts.
              </p>
              <a
                href="https://soe.cusat.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <span>Visit SOE CUSAT</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <BookOpen size={28} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>Academic Regulations & Syllabi</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', marginBottom: '1.25rem' }}>
                Official course curriculum, course outcomes, and academic calendars for B.Tech Information Technology.
              </p>
              <a
                href="https://soe.cusat.ac.in/soe_academic_resource.php?p=reg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <span>Curriculum & Regulations</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <FileText size={28} style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>Department Magazine Archives</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', marginBottom: '1.25rem' }}>
                Student technical articles, creative poetry, design highlights, and semester editorial collections.
              </p>
              <span className="btn btn-outline btn-sm" style={{ cursor: 'default', color: 'var(--color-muted)' }}>
                <span>Print Edition Circulated Annually</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
