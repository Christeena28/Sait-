import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';
import { useScrollReveal } from './hooks/useScrollReveal';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Placements from './pages/Placements';
import Alumni from './pages/Alumni';
import HallOfFame from './pages/HallOfFame';
import ActivityLogger from './pages/ActivityLogger';
import Notices from './pages/Notices';
import FullPreview from './pages/FullPreview';
import NotFound from './pages/NotFound';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <IntroAnimation />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <ScrollToTop />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/hall-of-fame" element={<HallOfFame />} />
          <Route path="/activity-logger" element={<ActivityLogger />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/preview" element={<FullPreview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
