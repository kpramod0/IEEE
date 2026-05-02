import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutVision = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.fade-in-section');
    sections.forEach(section => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} style={{ background: 'transparent', position: 'relative', zIndex: 10 }}>
      
      <section id="about" className="container fade-in-section" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>IEEE Computer Society <br/> <span className="text-gradient">KIIT Student Branch Chapter</span></h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-main)' }}>
          We are dedicated to fostering <span style={{ color: '#fff' }}>technical growth, research innovation, collaboration,</span> and <span style={{ color: '#fff' }}>ethical development</span>.
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          marginTop: '3rem',
          flexWrap: 'wrap'
        }}>
          {['Hackathons', 'Projects', 'Industry Connections', 'Research Opportunities'].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '1rem 2rem', fontWeight: 500, color: '#fff' }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="vision" className="container fade-in-section" style={{ padding: '4rem 2rem 8rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '3rem' }}>Our Vision</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-panel" style={{ padding: '3rem 2rem', borderTop: '4px solid var(--accent-blue)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Build Innovators & Leaders</h3>
            <p>Empowering students to take charge and lead the next wave of technological breakthroughs.</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '3rem 2rem', borderTop: '4px solid var(--accent-cyan)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Global Networking</h3>
            <p>Connecting minds across the globe to share ideas, collaborate, and grow together.</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '3rem 2rem', borderTop: '4px solid #fff' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚙️</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Advance Technology</h3>
            <p>Driving forward engineering and computing to benefit humanity as a whole.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutVision;
