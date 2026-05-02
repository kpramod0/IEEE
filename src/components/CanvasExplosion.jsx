import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CanvasExplosion = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 240;
    const currentFrame = index => (
      `/ieeimage/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
    );

    const images = [];
    const airpods = {
      frame: 0
    };

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // Draw the first image once it loads
    images[0].onload = render;

    function render() {
      if(images[airpods.frame]) {
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate aspect ratio to cover the canvas like object-fit: cover
        const img = images[airpods.frame];
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imgRatio;
            offsetY = 0;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        // Scale more aggressively to ensure watermark is hidden
        const scaleFactor = 1.15;
        context.drawImage(
          img, 
          offsetX - (drawWidth * (scaleFactor - 1)) / 2, 
          offsetY - (drawHeight * (scaleFactor - 1)) / 2, 
          drawWidth * scaleFactor, 
          drawHeight * scaleFactor
        );
      }
    }

    // Create an auto-playing animation instead of ScrollTrigger
    const tl = gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 8, // Adjust duration for smoothness
      repeat: -1, // Infinite loop
      yoyo: true, // Reverses smoothly
      onUpdate: render
    });

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="canvas-container" style={{ width: '100%', height: '100vh', position: 'relative', zIndex: 0 }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%', mixBlendMode: 'screen' }} />
    </div>
  );
};

export default CanvasExplosion;
