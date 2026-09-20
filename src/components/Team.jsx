import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Custom LinkedIn Icon SVG
const LinkedInIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const Team = () => {
  const teamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.anim-team-up');
      elements.forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, teamRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={teamRef} style={{ position: 'relative', zIndex: 10, padding: '8rem 0' }}>
      <div className="container">
        <h2 className="anim-team-up" style={{ textAlign: 'center', marginBottom: '5rem' }}>The Visionaries Behind <br /><span className="text-gradient">IEEE CS KIIT SBC</span></h2>

        {/* Advisor */}
        <div className="anim-team-up" style={{ marginBottom: '6rem', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-panel" style={{
            padding: '3rem',
            textAlign: 'center',
            maxWidth: '500px',
            width: '100%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            borderTop: '1px solid rgba(0, 214, 255, 0.5)'
          }}>
            <div style={{
              width: '150px', height: '150px', borderRadius: '50%', background: '#2a2d3e', margin: '0 auto 2rem',
              border: '4px solid rgba(0, 123, 255, 0.3)',
              overflow: 'hidden'
            }}>
              <img
                src="/member's/Dr. Amiya Ranjan Panda.png"
                alt="Dr. Amiya Ranjan Panda"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 14%'
                }}
              />
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Dr. Amiya Ranjan Panda</h3>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Advisor · IEEE CS KIIT SBC</p>
            <a href="https://www.linkedin.com/in/amiya-ranjan-panda-smieee-4445a127/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', transition: 'opacity 0.3s' }}>
              <LinkedInIcon size={24} />
            </a>
          </div>
        </div>
        {/* Executive Committee */}
        <div className="anim-team-up" style={{ marginBottom: '6rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', color: 'rgba(255,255,255,0.9)' }}>Executive Committee</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Lubdhak Nairith Saha Arnish', role: 'Chair', pos: 'center 4%', linkedin: 'https://www.linkedin.com/in/lubdhak-nairith-saha-2761182a0/' },
              { name: 'Niharika Sen', role: 'Vice Chair', linkedin: 'https://www.linkedin.com/in/niharika-sen-a30779349/' },
              { name: 'Anirudha Patnaik', role: 'Secretary', pos: 'center 4%', linkedin: 'https://www.linkedin.com/in/anirudha-patnaik-534342316/' },
              { name: 'Astik Mishra', role: 'Treasurer', pos: 'center 4%', linkedin: 'https://www.linkedin.com/in/astik-mishra-5089ab308/' }
            ].map((member, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#1f2233', margin: '0 auto 1.5rem', overflow: 'hidden', border: '2px solid rgba(0, 123, 255, 0.2)' }}>
                  <img src={`/member's/${member.name}.png`} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.pos || 'center' }} />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{member.name}</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{member.role}</p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', display: 'inline-block' }}>
                    <LinkedInIcon size={18} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Team */}
        <div className="anim-team-up" style={{ marginBottom: '6rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', color: 'rgba(255,255,255,0.9)' }}>Technical Team</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Pramod Kumar', linkedin: 'https://www.linkedin.com/in/pramod-kumar-2736b4358/' },
              { name: 'Subhashree Patnaik', linkedin: '' },
              { name: 'Arpan Ganguli', linkedin: 'https://www.linkedin.com/in/arpan-ganguli-b6ba17299/' },
              { name: 'Preeti Gupta', linkedin: 'https://www.linkedin.com/in/pg194/' }
            ].map((member, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{
                  width: '100px', height: '100px', borderRadius: '50%', background: '#1f2233', margin: '0 auto 1.5rem',
                  border: '2px solid rgba(0, 123, 255, 0.3)', overflow: 'hidden'
                }}>
                  <img
                    src={`/member's/${member.name}${member.name === 'Pramod Kumar' ? '.jpeg' : '.png'}`}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: member.name === 'Pramod Kumar' ? 'center 1%' : 'center'
                    }}
                  />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{member.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}>Web Master</p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', display: 'inline-block' }}>
                    <LinkedInIcon size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Domain Leads */}
        <div className="anim-team-up">
          <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', color: 'rgba(255,255,255,0.9)' }}>Domain Leads</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Ayushi Kumari', role: 'Social Media & Outreach (Lead)', pos: 'center 4%', linkedin: '' },
              { name: 'Akansha Chakrovarty', role: 'Event Management (Lead)', linkedin: '' },
              { name: 'Aeindri', role: 'R&D (Lead)', linkedin: 'https://www.linkedin.com/in/aeindri-a83137376/' }
            ].map((member, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderLeft: '4px solid var(--accent-cyan)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#1f2233', flexShrink: 0, overflow: 'hidden', border: '2px solid rgba(0, 214, 255, 0.2)' }}>
                  <img src={`/member's/${member.name}.png`} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.pos || 'center' }} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{member.name}</h4>
                  <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>{member.role}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)' }}>
                      <LinkedInIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Build by */}
        <div className="anim-team-up" style={{ marginTop: '6rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', color: 'rgba(255,255,255,0.9)' }}>Built by</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Pramod Kumar', linkedin: 'https://www.linkedin.com/in/pramod-kumar-2736b4358/' },
              { name: 'Jagadish Palei', linkedin: 'https://www.linkedin.com/in/jagadish-palei-161040218/' }
            ].map((member, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem', textAlign: 'center', width: '250px' }}>
                <div style={{
                  width: '100px', height: '100px', borderRadius: '50%', background: '#1f2233', margin: '0 auto 1.5rem',
                  border: '2px solid rgba(0, 123, 255, 0.3)', overflow: 'hidden'
                }}>
                  <img
                    src={`/member's/${member.name}${member.name === 'Pramod Kumar' ? '.jpeg' : '.png'}`}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: member.name === 'Pramod Kumar' ? 'center 1%' : 'center'
                    }}
                  />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{member.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}>Web Master</p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', display: 'inline-block' }}>
                    <LinkedInIcon size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
