import React, { useEffect, useRef, useState } from 'react';

const CursorTrail: React.FC = () => {
  // Use Refs for direct DOM manipulation (High Performance)
  // This avoids triggering React re-renders on every single mouse movement
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  
  // Track positions in refs to avoid re-renders
  const mousePosition = useRef({ x: -100, y: -100 });
  const ringPosition = useRef({ x: -100, y: -100 });
  
  // Track pointer state for the animation loop
  const isPointerRef = useRef(false);
  // Track pointer state for React rendering (CSS classes)
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      // Update coordinate refs immediately
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Optimized Hover Detection
      const target = e.target as HTMLElement;
      const isHovering = window.getComputedStyle(target).cursor === 'pointer' || 
                         target.tagName === 'BUTTON' || 
                         target.tagName === 'A' ||
                         target.closest('a') !== null ||
                         target.closest('button') !== null;
      
      // Update ref for the animation loop
      isPointerRef.current = isHovering;

      // Only trigger React state update if value actually changes (Optimization)
      setIsPointer(prev => {
        if (prev !== isHovering) return isHovering;
        return prev;
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      // Linear Interpolation (Lerp) for smooth delay effect on the Ring
      // The ease factor (0.15) controls the "weight" of the cursor. 
      // Higher = faster, Lower = smoother/heavier
      const ease = 0.15; 
      
      ringPosition.current.x += (mousePosition.current.x - ringPosition.current.x) * ease;
      ringPosition.current.y += (mousePosition.current.y - ringPosition.current.y) * ease;

      // Update Dot Position (Instant - Locked to Mouse)
      if (cursorDotRef.current) {
        // We handle scale in the transform string so it doesn't conflict with the position translate
        const scale = isPointerRef.current ? 0.5 : 1;
        cursorDotRef.current.style.transform = `translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      // Update Ring Position (Smoothed/Lagged)
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <div 
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] hidden md:block rounded-full bg-white mix-blend-difference"
        style={{
          width: '8px',
          height: '8px',
          top: 0,
          left: 0,
          // Transition only the visual properties, NOT transform (which is handled by JS)
          transition: 'width 0.3s, height 0.3s', 
        }}
      />
      
      {/* Glowing Ring Follower */}
      <div 
        ref={cursorRingRef}
        className={`fixed pointer-events-none z-[9998] hidden md:block rounded-full border-2 border-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.5)]`}
        style={{
          top: 0,
          left: 0,
          width: isPointer ? '60px' : '40px',
          height: isPointer ? '60px' : '40px',
          backgroundColor: isPointer ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
          // Smoothly transition size and color, but let JS handle X/Y movement
          transition: 'width 0.3s, height 0.3s, background-color 0.3s', 
        }}
      />
    </>
  );
};

export default CursorTrail;