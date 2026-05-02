import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Custom Social Icons
const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.anim-footer-up');
      gsap.fromTo(elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} style={{ background: 'transparent', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 10 }}>
      
      {/* Join & Newsletter Section */}
      <div className="container" style={{ padding: '6rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <div id="join" className="anim-footer-up">
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to shape the future?</h2>
            <p style={{ marginBottom: '2rem' }}>Join IEEE CS KIIT SBC to get exclusive access to workshops, global networking, hackathons, and research opportunities.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="https://chat.whatsapp.com/FiVHO9Dds2BLlr4cgq24yS?mode=gi_t" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={18} /> Join WhatsApp Group
              </a>
              <a href="#about" className="btn-secondary">Learn More</a>
            </div>
          </div>

          <div className="anim-footer-up">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Subscribe to our Newsletter</h3>
            <p style={{ marginBottom: '1.5rem' }}>Stay updated with our latest events and tech news.</p>
            <form style={{ display: 'flex', gap: '0.5rem' }} onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  flexGrow: 1,
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Subscribe</button>
            </form>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div id="contact" className="container" style={{ padding: '4rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        
        <div className="anim-footer-up">
          <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem' }}>IEEE CS <span style={{ color: 'var(--accent-blue)' }}>KIIT SBC</span></h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={16} color="var(--accent-cyan)" /> <a href="mailto:ieee.kiit@kiit.ac.in" style={{ color: 'inherit' }}>ieee.kiit@kiit.ac.in</a>
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>KIIT University, Bhubaneswar</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.2rem', marginTop: '2rem' }}>
            <a href="https://www.linkedin.com/company/ieee-cs-kiit-sbc/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-main)'}>
              <LinkedInIcon size={20} />
            </a>
            <a href="https://www.instagram.com/ieee_cs_kiit___?igsh=MXdvZjBwcG84MHdrNw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-main)'}>
              <InstagramIcon size={20} />
            </a>
            <a href="https://www.facebook.com/ieeecskiit" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-main)'}>
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>

        <div className="anim-footer-up">
          <h4 style={{ color: '#fff', marginBottom: '1.5rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="#about" style={{ color: 'var(--text-main)' }}>Overview</a></li>
            <li><a href="#team" style={{ color: 'var(--text-main)' }}>Our Team</a></li>
            <li><a href="#events" style={{ color: 'var(--text-main)' }}>Events</a></li>
            <li><a href="#gallery" style={{ color: 'var(--text-main)' }}>Gallery</a></li>
          </ul>
        </div>

        <div className="anim-footer-up">
          <h4 style={{ color: '#fff', marginBottom: '1.5rem' }}>Partners</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><span style={{ color: 'var(--text-main)' }}>IEEE Computer Society</span></li>
            <li><span style={{ color: 'var(--text-main)' }}>IEEE Global</span></li>
            <li><span style={{ color: 'var(--text-main)' }}>KIIT University</span></li>
          </ul>
        </div>

      </div>

      <div className="container anim-footer-up" style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}>
        <p>&copy; {new Date().getFullYear()} IEEE Computer Society KIIT Student Branch Chapter. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
