import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Organization Overview */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img
                src="/img/logo.png"
                alt="SAIT Logo"
                style={{ height: '38px', width: 'auto' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span style={{ fontFamily: 'var(--heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-surface)' }}>
                SAIT CUSAT
              </span>
            </div>
            <p style={{ color: 'var(--color-on-dark-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Students Association of Information Technology (SAIT) is the student-run departmental body
              of the Division of Information Technology, School of Engineering, Cochin University of Science and Technology.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-on-dark-muted)', fontSize: '0.8rem', fontWeight: 500 }}>
              <ShieldCheck size={16} />
              <span>Division of Information Technology · SOE CUSAT</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0 }}>
              <li><Link to="/about">About SAIT</Link></li>
              <li><Link to="/team">Executive Team</Link></li>
              <li><Link to="/events">Events & Workshops</Link></li>
              <li><Link to="/placements">Placement Statistics</Link></li>
              <li><Link to="/alumni">Alumni Directory</Link></li>
              <li><Link to="/hall-of-fame">Hall of Fame</Link></li>
              <li><Link to="/notices">Department Notices</Link></li>
              <li><Link to="/activity-logger">Activity Logger</Link></li>
            </ul>
          </div>

          {/* Column 3: University Resources */}
          <div>
            <h4>Institutional Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0 }}>
              <li>
                <a href="https://soe.cusat.ac.in/soe_association.php?c=it" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>SOE IT Association</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://soe.cusat.ac.in/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>School of Engineering</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://cusat.ac.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>CUSAT Main Portal</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://cpo.cusat.ac.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Central Placement (CPO)</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://soe.cusat.ac.in/elearn/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>moodle@SOE</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://cusat.ac.in/exam" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Exam Portal</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4>Department Address</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: 0, fontSize: '0.85rem' }}>
              <li style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-on-dark-muted)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Division of Information Technology,<br />
                  School of Engineering, CUSAT,<br />
                  Kalamassery, Kochi - 682 022, Kerala, India
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--color-on-dark-muted)', flexShrink: 0 }} />
                <a href="mailto:principal_soe@cusat.ac.in">principal_soe@cusat.ac.in</a>
              </li>
              <li style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--color-on-dark-muted)', flexShrink: 0 }} />
                <a href="tel:+914842556187">+91 484 255 6187</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {currentYear} Students Association of Information Technology (SAIT). Division of IT, SOE, CUSAT.
          </div>
          <div>
            Built for students, by students. An institutional student initiative.
          </div>
        </div>
      </div>
    </footer>
  );
}
