import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Lightbulb, Users2, Briefcase, ShieldCheck, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Objectives = () => {
  const containerRef = useRef(null);
  const objectives = [
    { 
      title: "Technical Excellence", 
      desc: "Mastering the latest technologies and frameworks.",
      icon: Cpu 
    },
    { 
      title: "Research & Innovation", 
      desc: "Pushing the boundaries of what's possible.",
      icon: Lightbulb 
    },
    { 
      title: "Collaborative Learning", 
      desc: "Growing together through peer-to-peer mentorship.",
      icon: Users2 
    },
    { 
      title: "Professional Development", 
      desc: "Bridging the gap between academia and industry.",
      icon: Briefcase 
    },
    { 
      title: "Ethics & Responsibility", 
      desc: "Building technology that respects human values.",
      icon: ShieldCheck 
    },
    { 
      title: "Global Networking", 
      desc: "Connecting with IEEE members worldwide.",
      icon: Globe 
    }
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray(containerRef.current.querySelectorAll('.obj-card'));
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section id="objectives" ref={containerRef} className="container" style={{ zIndex: 10 }}>
      <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Key Objectives</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {objectives.map((obj, i) => (
          <div key={i} className="glass-panel obj-card" style={{
            padding: '2.5rem 2rem',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 214, 255, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(0, 214, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
          }}
          >
            <div style={{ 
              marginBottom: '1.5rem',
              color: 'var(--accent-cyan)'
            }}>
              <obj.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff' }}>{obj.title}</h3>
            <p>{obj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
