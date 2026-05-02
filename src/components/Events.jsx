import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const eventsRef = useRef(null);
  const events = [
    { title: 'Asteroid Search Training', category: 'Workshop', tags: ['NASA Collab', 'Space'], date: 'Oct 15, 2024' },
    { title: 'Quantum Computing Workshop', category: 'Seminar', tags: ['Future Tech', 'Qiskit'], date: 'Nov 02, 2024' },
    { title: 'KalpanaX Hackathon', category: 'Hackathon', tags: ['Innovation', 'Coding'], date: 'Dec 10-12, 2024' },
    { title: 'Research Poster Exhibition', category: 'Exhibition', tags: ['R&D', 'Showcase'], date: 'Jan 20, 2025' },
    { title: 'AI/ML Seminar', category: 'Seminar', tags: ['AI', 'Deep Learning'], date: 'Feb 05, 2025' },
    { title: 'Web Dev Sprint', category: 'Competition', tags: ['Frontend', 'Backend'], date: 'Mar 15, 2025' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.anim-event-card');
      gsap.fromTo(cards, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eventsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, eventsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="events" ref={eventsRef} className="container" style={{ zIndex: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="anim-event-card">
          <h2>Featured Events</h2>
          <p>Discover our latest hackathons, workshops, and seminars.</p>
        </div>
        <div className="anim-event-card" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['All', 'Hackathons', 'Workshops', 'Seminars', 'Competitions'].map((cat, i) => (
            <button key={i} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', borderRadius: '20px' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {events.map((event, i) => (
          <div key={i} className="glass-panel anim-event-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '200px', background: '#1a1d2e', position: 'relative' }}>
               <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--accent-blue)', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                 {event.category}
               </div>
            </div>
            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>{event.date}</div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1rem' }}>{event.title}</h3>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                {event.tags.map((tag, j) => (
                  <span key={j} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>
                    #{tag}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 'auto' }}>
                <a href="#" className="text-gradient" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Details &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
