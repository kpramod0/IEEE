import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1.2rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(2, 4, 10, 0.7)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.05em', color: '#fff' }}>
        IEEE CS <span style={{ color: 'var(--accent-blue)' }}>KIIT SBC</span>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', display: 'none', '@media (minWidth: 768px)': { display: 'flex' } }} className="nav-links">
        <a href="#about" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>Overview</a>
        <a href="#vision" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>About</a>
        <a href="#team" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>Team</a>
        <a href="#events" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>Events</a>
        <a href="#contact" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>Contact</a>
      </div>

      <a href="#join" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
        Join IEEE
      </a>

      {/* Basic responsive style workaround for React inline styles */}
      <style>{`
        @media (min-width: 768px) {
          .nav-links { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
