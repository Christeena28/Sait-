import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div>
      <PageHeader
        eyebrow="Error 404"
        title="Page Not Found"
        description="The departmental page or resource you are looking for does not exist or has been moved."
      />
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div className="card" style={{ padding: '3rem 2rem', backgroundColor: '#FFFFFF' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
              Lost your way?
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Please check the navigation bar above or return to the SAIT homepage to explore events,
              placement records, and announcements.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/" className="btn btn-primary">
                <Home size={16} />
                <span>Back to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
