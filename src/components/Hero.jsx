import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Entrance animation from the left - target the content wrapper
    gsap.fromTo(".hero-content",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
    );

    // Scroll out animation - target the whole container
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      y: -50,
    });
  }, []);

  return (
    <div ref={heroRef} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '40%', // Reduced from 50% to stay further left
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      textAlign: 'left',
      zIndex: 10,
      pointerEvents: 'none', // Let clicks pass through to canvas if needed
      padding: '0 4%', // Adjusted padding
      minWidth: '300px'
    }}>
      <div className="hero-content">
        <h1 style={{
          marginBottom: '1rem',
          background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0px 4px 20px rgba(0, 123, 255, 0.2)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)', // Reduced text size
          lineHeight: 1.15
        }}>
          Advancing Technology Together
        </h1>
        <p style={{
          maxWidth: '400px', // Reduced max width to prevent extending into animation
          fontSize: '1.1rem', // Reduced font size
          marginBottom: '2rem',
          color: 'rgba(255, 255, 255, 0.8)'
        }}>
          A community of innovators, researchers, and tech leaders driven by collaboration and engineering excellence.
        </p>
        <div style={{ display: 'flex', gap: '1rem', pointerEvents: 'auto' }}>
          <a href="#about" className="btn-primary">Explore Society</a>
          <a href="#join" className="btn-secondary">Become a Member</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
