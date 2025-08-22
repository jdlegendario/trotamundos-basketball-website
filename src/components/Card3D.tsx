'use client';

import { ReactNode, useRef, MouseEvent } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  shadowIntensity?: number;
}

export default function Card3D({
  children,
  className = '',
  intensity = 15,
  perspective = 1000,
  shadowIntensity = 0.3
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / rect.height) * intensity;
    const rotateY = (mouseX / rect.width) * -intensity;
    
    // Apply 3D transform with Apple's signature easing
    card.style.transform = `
      perspective(${perspective}px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(10px)
    `;
    
    // Dynamic shadow based on tilt
    const shadowX = (mouseX / rect.width) * 20;
    const shadowY = (mouseY / rect.height) * 20;
    card.style.boxShadow = `
      ${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, ${shadowIntensity})
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    
    // Smooth return to original position
    card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    card.style.transform = `
      perspective(${perspective}px) 
      rotateX(0deg) 
      rotateY(0deg) 
      translateZ(0px)
    `;
    card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    
    // Remove transition after animation completes
    setTimeout(() => {
      card.style.transition = '';
    }, 600);
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    card.style.transition = '';
  };

  return (
    <div 
      ref={cardRef}
      className={`card-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  );
}
