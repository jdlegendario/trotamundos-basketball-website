'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
  offset?: number;
}

export default function ScrollParallax({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  offset = 0
}: ScrollParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      const yPos = direction === 'up' ? rate : -rate;
      const finalPos = yPos + offset;
      
      // Use transform3d for GPU acceleration
      element.style.transform = `translate3d(0, ${finalPos}px, 0)`;
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [speed, direction, offset]);

  return (
    <div 
      ref={elementRef}
      className={`parallax-element ${className}`}
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)' // Initial GPU acceleration
      }}
    >
      {children}
    </div>
  );
}
