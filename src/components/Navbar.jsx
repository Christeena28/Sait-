import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, PlusCircle } from 'lucide-react';

const NAV_LINKS = [
  { path: '/about', label: 'About' },
  { path: '/team', label: 'Team' },
  { path: '/events', label: 'Events' },
  { path: '/placements', label: 'Placements' },
  { path: '/alumni', label: 'Alumni' },
  { path: '/hall-of-fame', label: 'Hall of Fame' },
  { path: '/notices', label: 'Notices' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Track scroll position for subtle shadow after 8px (200ms)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container navbar-container">
        {/* Brand Logo & Title */}
        <Link to="/" className="navbar-brand" aria-label="SAIT Home">
          <img
            src="/img/logo.png"
            alt="SAIT CUSAT Logo"
            className="navbar-logo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div>
            <span className="navbar-title">SAIT</span>
            <span className="navbar-subtitle">IT · SOE CUSAT</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link to="/activity-logger" className="btn btn-primary btn-sm nav-activity-btn">
              <PlusCircle size={16} aria-hidden="true" />
              <span>Log Activity</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <ul className="mobile-nav-list">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          {NAV_LINKS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(148, 163, 184, 0.18)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link
              to="/activity-logger"
              className="btn btn-primary nav-activity-btn"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <PlusCircle size={18} aria-hidden="true" />
              <span>Log Activity</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
