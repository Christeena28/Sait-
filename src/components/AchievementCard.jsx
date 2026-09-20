import React from 'react';
import { Trophy, Award, BookOpen, Lightbulb, Zap } from 'lucide-react';

export default function AchievementCard({ item }) {
  const getIcon = (type) => {
    switch (type) {
      case 'Innovation':
        return <Lightbulb size={18} style={{ color: 'var(--color-primary)' }} />;
      case 'Hackathon':
        return <Zap size={18} style={{ color: 'var(--color-success)' }} />;
      case 'Academic':
        return <BookOpen size={18} style={{ color: 'var(--color-secondary)' }} />;
      case 'Research':
        return <Award size={18} style={{ color: 'var(--color-primary)' }} />;
      default:
        return <Trophy size={18} style={{ color: 'var(--color-primary)' }} />;
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
          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-secondary)' }}>
            {item.year}
          </span>
        </div>

        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text)', marginBottom: '0.75rem', lineHeight: '1.3', fontFamily: 'var(--font-subheading)', letterSpacing: '0.01em' }}>
          {item.title}
        </h3>

        <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
          {item.description}
        </p>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)' }}>
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
