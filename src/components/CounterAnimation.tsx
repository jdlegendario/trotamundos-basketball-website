'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterAnimationProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export default function CounterAnimation({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounter();
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  const animateCounter = () => {
    const start = performance.now();
    
    function update(currentTime: number) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Apple's signature easing curve
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = target * easeOutCubic;
      
      setCount(decimals > 0 ? 
        parseFloat(current.toFixed(decimals)) : 
        Math.floor(current)
      );
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    
    requestAnimationFrame(update);
  };

  return (
    <span 
      ref={counterRef}
      className={`counter-animation ${className}`}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
