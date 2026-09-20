import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  ExternalLink,
  ChevronRight,
  Layers,
  Home as HomeIcon,
  Info,
  Users,
  Calendar,
  Briefcase,
  GraduationCap,
  Trophy,
  Activity,
  Bell
} from 'lucide-react';

import Home from './Home';
import About from './About';
import Team from './Team';
import Events from './Events';
import Placements from './Placements';
import Alumni from './Alumni';
import HallOfFame from './HallOfFame';
import ActivityLogger from './ActivityLogger';
import Notices from './Notices';

const SECTIONS = [
  { id: 'sec-home', label: 'Home', icon: HomeIcon, component: Home },
  { id: 'sec-about', label: 'About', icon: Info, component: About },
  { id: 'sec-team', label: 'Team', icon: Users, component: Team },
  { id: 'sec-events', label: 'Events', icon: Calendar, component: Events },
  { id: 'sec-placements', label: 'Placements', icon: Briefcase, component: Placements },
  { id: 'sec-alumni', label: 'Alumni', icon: GraduationCap, component: Alumni },
  { id: 'sec-hall-of-fame', label: 'Hall of Fame', icon: Trophy, component: HallOfFame },
  { id: 'sec-activity-logger', label: 'Activity Logger', icon: Activity, component: ActivityLogger },
  { id: 'sec-notices', label: 'Notices', icon: Bell, component: Notices },
];

export default function FullPreview() {
  const [viewportWidth, setViewportWidth] = useState('100%'); // '100%', '1200px', '768px', '375px'

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#ECEFE6', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Floating Sticky Preview Control Header */}
      <div
        style={{
          position: 'sticky',
          top: 'var(--nav-height)',
          zIndex: 900,
          backgroundColor: '#0B2140',
          color: '#FFFFFF',
          padding: '0.65rem 1rem',
          borderBottom: '2px solid var(--accent)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          {/* Mode & Jump Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Layers size={18} style={{ color: 'var(--accent)' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.02em' }}>
              SINGLE PREVIEW SHOWCASE
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                backgroundColor: 'rgba(255,255,255,0.15)',
                padding: '0.15rem 0.5rem',
                borderRadius: '4px',
                color: '#E0A526',
              }}
            >
              All 9 Pages Stacked
            </span>
          </div>

          {/* Quick Jump Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              overflowX: 'auto',
              maxWidth: '100%',
              paddingBottom: '2px',
            }}
          >
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#C3CFDE',
                  padding: '0.25rem 0.55rem',
                  fontSize: '0.75rem',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = '#C3CFDE';
                }}
              >
                <span>{sec.label}</span>
              </button>
            ))}
          </div>

          {/* Device Width Simulator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#A9B8CC' }}>Viewport:</span>
            <button
              type="button"
              onClick={() => setViewportWidth('100%')}
              style={{
                background: viewportWidth === '100%' ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                color: viewportWidth === '100%' ? '#0B2140' : '#FFFFFF',
                border: 'none',
                padding: '0.3rem 0.55rem',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
              title="Full Width Responsive"
            >
              <Maximize2 size={13} />
              <span>Full</span>
            </button>

            <button
              type="button"
              onClick={() => setViewportWidth('1200px')}
              style={{
                background: viewportWidth === '1200px' ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                color: viewportWidth === '1200px' ? '#0B2140' : '#FFFFFF',
                border: 'none',
                padding: '0.3rem 0.55rem',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
              title="Desktop (1200px)"
            >
              <Monitor size={13} />
              <span>Desktop</span>
            </button>

            <button
              type="button"
              onClick={() => setViewportWidth('768px')}
              style={{
                background: viewportWidth === '768px' ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                color: viewportWidth === '768px' ? '#0B2140' : '#FFFFFF',
                border: 'none',
                padding: '0.3rem 0.55rem',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
              title="Tablet (768px)"
            >
              <Tablet size={13} />
              <span>768px</span>
            </button>

            <button
              type="button"
              onClick={() => setViewportWidth('375px')}
              style={{
                background: viewportWidth === '375px' ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                color: viewportWidth === '375px' ? '#0B2140' : '#FFFFFF',
                border: 'none',
                padding: '0.3rem 0.55rem',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
              title="Mobile (375px)"
            >
              <Smartphone size={13} />
              <span>375px</span>
            </button>
          </div>
        </div>
      </div>

      {/* Container Wrapper for Device Simulation */}
      <div
        style={{
          width: viewportWidth,
          maxWidth: '100%',
          margin: '2rem auto',
          backgroundColor: '#FFFFFF',
          borderRadius: viewportWidth !== '100%' ? '12px' : '0',
          boxShadow: viewportWidth !== '100%' ? '0 12px 36px rgba(0,0,0,0.18)' : 'none',
          overflow: 'hidden',
          border: viewportWidth !== '100%' ? '1px solid #C0C8D4' : 'none',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Sequence of All Pages with Clear Section Banners */}
        {SECTIONS.map((sec, idx) => {
          const ComponentToRender = sec.component;
          return (
            <section
              key={sec.id}
              id={sec.id}
              style={{
                borderBottom: idx !== SECTIONS.length - 1 ? '8px solid #E2E7EE' : 'none',
                position: 'relative',
              }}
            >
              {/* Distinct Section Identifier Header */}
              <div
                style={{
                  backgroundColor: '#12305A',
                  color: '#FFFFFF',
                  padding: '0.65rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.825rem',
                  letterSpacing: '0.04em',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span
                    style={{
                      background: 'var(--accent)',
                      color: '#0B2140',
                      fontWeight: 800,
                      padding: '0.1rem 0.45rem',
                      borderRadius: '3px',
                      fontSize: '0.75rem',
                    }}
                  >
                    PAGE 0{idx + 1}
                  </span>
                  <strong style={{ textTransform: 'uppercase' }}>{sec.label} PAGE</strong>
                </div>

                <Link
                  to={sec.id === 'sec-home' ? '/' : `/${sec.id.replace('sec-', '')}`}
                  style={{
                    color: 'var(--accent)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                  title="Open this individual page URL"
                >
                  <span>Open standalone route</span>
                  <ExternalLink size={12} />
                </Link>
              </div>

              {/* Render Full Page Content */}
              <div>
                <ComponentToRender />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
