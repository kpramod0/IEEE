import React from 'react';
import Navbar from './components/Navbar';
import CanvasExplosion from './components/CanvasExplosion';
import Hero from './components/Hero';
import Interactive3DBackground from './components/Interactive3DBackground';
import AboutVision from './components/AboutVision';
import Objectives from './components/Objectives';
import Team from './components/Team';
import Events from './components/Events';
import GalleryTestimonials from './components/GalleryTestimonials';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ background: 'var(--bg-gradient-start)', minHeight: '100vh', color: 'var(--text-main)' }}>
      <Interactive3DBackground />
      <Navbar />
      
      {/* 
        The hero and canvas share the same initial space.
        Canvas is pinned while scrolling down, playing the animation.
        Hero text scrolls up and fades out.
      */}
      <div style={{ position: 'relative' }}>
        <CanvasExplosion />
        <Hero />
      </div>

      <div style={{ position: 'relative', zIndex: 10, background: 'transparent' }}>
        <AboutVision />
        <Objectives />
        <Team />
        <Events />
        <GalleryTestimonials />
        <Stats />
        <Footer />
      </div>
    </div>
  );
}

export default App;
