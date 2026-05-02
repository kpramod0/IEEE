import React from 'react';

const GalleryTestimonials = () => {
  return (
    <div style={{ background: 'transparent', position: 'relative', zIndex: 10 }}>
      
      {/* Gallery Section */}
      <section id="gallery" className="container" style={{ padding: '8rem 2rem 4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Moments of Excellence</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gridAutoRows: '250px',
          gap: '1rem'
        }}>
          {[1, 2, 3, 4, 5, 6].map((img, i) => (
            <div key={i} style={{ 
              background: '#1a1d2e', 
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('.overlay').style.opacity = 1;
              e.currentTarget.querySelector('.bg').style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('.overlay').style.opacity = 0;
              e.currentTarget.querySelector('.bg').style.transform = 'scale(1)';
            }}
            >
              <div className="bg" style={{ width: '100%', height: '100%', background: '#22263d', transition: 'transform 0.5s ease' }}></div>
              <div className="overlay" style={{ 
                position: 'absolute', inset: 0, background: 'rgba(0, 123, 255, 0.4)', 
                opacity: 0, transition: 'opacity 0.3s ease',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}>
                <span style={{ color: '#fff', fontWeight: 600 }}>View Project</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="container" style={{ padding: '4rem 2rem' }}>
        <div className="glass-panel" style={{ padding: '4rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '20px', fontSize: '10rem', color: 'rgba(255,255,255,0.02)', lineHeight: 1 }}>"</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: '#fff', maxWidth: '800px', marginBottom: '2rem' }}>
              "Education is the most powerful weapon which you can use to change the world. It is a blend of empowerment and employability. I encourage all students to innovate, collaborate, and strive for technical excellence."
            </p>
            <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Achyuta Samanta</h4>
            <p style={{ fontSize: '0.9rem' }}>Founder, KIIT & KISS</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container" style={{ padding: '4rem 2rem 8rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What Our Members Say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { text: "IEEE KIIT has been the cornerstone of my technical growth. The hackathons pushed me beyond my limits.", author: "Alumni Member" },
            { text: "The collaborative environment and research opportunities are unmatched. Truly a place for innovators.", author: "Current Member" },
            { text: "Being part of the Executive Committee taught me leadership and event management at a massive scale.", author: "Former Exec" }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem', color: '#FFD700' }}>
                ★★★★★
              </div>
              <p style={{ color: '#fff', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{item.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1f2233' }}></div>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default GalleryTestimonials;
