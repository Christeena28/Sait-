import React from 'react';
import { Trophy, Award, BookOpen, Lightbulb, Compass, Zap } from 'lucide-react';

export default function AchievementCard({ item }) {
  const getIcon = (type) => {
    switch (type) {
      case 'Innovation':
        return <Lightbulb size={18} style={{ color: 'var(--accent)' }} />;
      case 'Hackathon':
        return <Zap size={18} style={{ color: 'var(--success)' }} />;
      case 'Academic':
        return <BookOpen size={18} style={{ color: 'var(--secondary)' }} />;
      case 'Research':
        return <Award size={18} style={{ color: 'var(--primary)' }} />;
      default:
        return <Trophy size={18} style={{ color: 'var(--accent)' }} />;
    }
  };

  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {getIcon(item.type)}
            <span className="badge badge-primary">{item.type}</span>
          </div>
          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--secondary)' }}>
            {item.year}
          </span>
        </div>

        <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-dark)', marginBottom: '0.75rem', lineHeight: '1.3' }}>
          {item.title}
        </h3>

        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
          {item.description}
        </p>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>
            {item.badge}
          </span>
          {item.sample && (
            <span className="badge badge-sample">Sample data</span>
          )}
        </div>
      </div>
    </div>
  );
}
