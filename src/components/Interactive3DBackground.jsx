import React, { useEffect, useRef } from 'react';

const Interactive3DBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Define 3D primitive vertices and edges
    const shapes = {
      cube: {
        vertices: [
          [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
          [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
        ],
        edges: [
          [0,1], [1,2], [2,3], [3,0],
          [4,5], [5,6], [6,7], [7,4],
          [0,4], [1,5], [2,6], [3,7]
        ]
      },
      octahedron: {
        vertices: [
          [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]
        ],
        edges: [
          [0,2], [0,3], [0,4], [0,5],
          [1,2], [1,3], [1,4], [1,5],
          [2,4], [4,3], [3,5], [5,2]
        ]
      }
    };

    // Generate random 3D objects
    const objects = [];
    const numObjects = 35; // Keeping it low for high performance
    
    for (let i = 0; i < numObjects; i++) {
      const isCube = Math.random() > 0.5;
      objects.push({
        type: isCube ? 'cube' : 'octahedron',
        x: (Math.random() - 0.5) * 3000,
        y: (Math.random() - 0.5) * 3000,
        z: Math.random() * 2000 - 1000,
        size: Math.random() * 60 + 20,
        rx: Math.random() * Math.PI * 2,
        ry: Math.random() * Math.PI * 2,
        rz: Math.random() * Math.PI * 2,
        drx: (Math.random() - 0.5) * 0.02,
        dry: (Math.random() - 0.5) * 0.02,
        drz: (Math.random() - 0.5) * 0.02,
        color: isCube ? 'rgba(0, 123, 255, 0.4)' : 'rgba(0, 214, 255, 0.4)',
        glow: isCube ? '#007BFF' : '#00D6FF'
      });
    }

    const handleMouseMove = (e) => {
      // Normalize mouse coordinates to -1 to 1
      targetMouseX = (e.clientX / width - 0.5) * 2;
      targetMouseY = (e.clientY / height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;

    // Helper for 3D rotation
    const rotate3D = (v, pitch, yaw, roll) => {
      let x = v[0], y = v[1], z = v[2];
      
      // Pitch (X-axis)
      let temp = y * Math.cos(pitch) - z * Math.sin(pitch);
      let newZ = y * Math.sin(pitch) + z * Math.cos(pitch);
      y = temp;
      z = newZ;

      // Yaw (Y-axis)
      temp = x * Math.cos(yaw) - z * Math.sin(yaw);
      newZ = x * Math.sin(yaw) + z * Math.cos(yaw);
      x = temp;
      z = newZ;

      // Roll (Z-axis)
      temp = x * Math.cos(roll) - y * Math.sin(roll);
      let newY = x * Math.sin(roll) + y * Math.cos(roll);
      x = temp;
      y = newY;

      return [x, y, z];
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Camera tilt based on mouse
      const camPitch = mouseY * 0.5;
      const camYaw = -mouseX * 0.5;

      objects.forEach(obj => {
        // Self rotation
        obj.rx += obj.drx;
        obj.ry += obj.dry;
        obj.rz += obj.drz;

        const shapeData = shapes[obj.type];
        const projectedVertices = [];

        // Project each vertex
        let isVisible = false;
        
        for (let i = 0; i < shapeData.vertices.length; i++) {
          let v = shapeData.vertices[i];
          
          // 1. Scale and self-rotate
          let rotated = rotate3D(v, obj.rx, obj.ry, obj.rz);
          rotated[0] *= obj.size;
          rotated[1] *= obj.size;
          rotated[2] *= obj.size;

          // 2. Translate to world position
          rotated[0] += obj.x;
          rotated[1] += obj.y;
          rotated[2] += obj.z;

          // 3. Apply Camera tilt from mouse
          rotated = rotate3D(rotated, camPitch, camYaw, 0);

          // 4. Perspective Projection
          const fov = 1000;
          // Shift Z so everything is in front of camera
          const zDepth = rotated[2] + 1500; 
          
          if (zDepth > 100) {
            isVisible = true;
            const scale = fov / zDepth;
            projectedVertices.push([
              rotated[0] * scale + width / 2,
              rotated[1] * scale + height / 2,
              scale
            ]);
          } else {
            projectedVertices.push(null);
          }
        }

        if (isVisible) {
          // Calculate an average scale for stroke thickness/opacity
          const validVerts = projectedVertices.filter(v => v !== null);
          if (validVerts.length === 0) return;
          
          const avgScale = validVerts.reduce((sum, v) => sum + v[2], 0) / validVerts.length;
          
          ctx.lineWidth = Math.max(0.5, 3 * avgScale);
          ctx.strokeStyle = obj.color;
          
          // Optional: Add glow effect for larger objects
          if (avgScale > 0.8) {
             ctx.shadowBlur = 10;
             ctx.shadowColor = obj.glow;
          } else {
             ctx.shadowBlur = 0;
          }

          // Draw edges
          ctx.beginPath();
          shapeData.edges.forEach(edge => {
            const v1 = projectedVertices[edge[0]];
            const v2 = projectedVertices[edge[1]];
            if (v1 && v2) {
              ctx.moveTo(v1[0], v1[1]);
              ctx.lineTo(v2[0], v2[1]);
            }
          });
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        background: 'radial-gradient(circle at center, rgba(10, 26, 47, 0.8) 0%, rgba(2, 4, 10, 1) 100%)'
      }}
    />
  );
};

export default Interactive3DBackground;
