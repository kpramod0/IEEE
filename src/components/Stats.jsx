import React, { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  return (
    <section className="container" style={{ padding: '4rem 2rem 8rem', zIndex: 10, position: 'relative' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '2rem',
        textAlign: 'center'
      }}>
        
        <div className="glass-panel" style={{ padding: '3rem 2rem' }}>
          <div className="text-gradient" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1, marginBottom: '0.5rem' }}>
            <AnimatedCounter target={0} /> {/* Set to 0 based on user prompt, maybe update later */}
          </div>
          <p style={{ color: '#fff', fontWeight: 500 }}>Hackathons Won</p>
        </div>

        <div className="glass-panel" style={{ padding: '3rem 2rem' }}>
          <div className="text-gradient" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1, marginBottom: '0.5rem' }}>
            <AnimatedCounter target={30} />+
          </div>
          <p style={{ color: '#fff', fontWeight: 500 }}>Active Members</p>
        </div>

        <div className="glass-panel" style={{ padding: '3rem 2rem' }}>
          <div className="text-gradient" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1, marginBottom: '0.5rem' }}>
            <AnimatedCounter target={10} />+
          </div>
          <p style={{ color: '#fff', fontWeight: 500 }}>Events Organized</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
