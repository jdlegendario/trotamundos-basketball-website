'use client';

import { useEffect, useRef, useState } from 'react';

interface ProgressBarProps {
  progress: number;
  label?: string;
  color?: string;
  height?: number;
  showPercentage?: boolean;
  duration?: number;
  className?: string;
  animated?: boolean;
}

export default function ProgressBar({
  progress,
  label,
  color = '#007AFF',
  height = 8,
  showPercentage = true,
  duration = 1500,
  className = '',
  animated = true
}: ProgressBarProps) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) {
      setCurrentProgress(progress);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateProgress();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [isVisible, animated]);

  const animateProgress = () => {
    const start = performance.now();
    const startProgress = currentProgress;
    const targetProgress = Math.min(Math.max(progress, 0), 100);
    
    function update(currentTime: number) {
      const elapsed = currentTime - start;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Apple's signature easing
      const easeOutCubic = 1 - Math.pow(1 - progressRatio, 3);
      const newProgress = startProgress + (targetProgress - startProgress) * easeOutCubic;
      
      setCurrentProgress(newProgress);
      
      if (progressRatio < 1) {
        requestAnimationFrame(update);
      }
    }
    
    requestAnimationFrame(update);
  };

  return (
    <div ref={progressRef} className={`progress-container ${className}`}>
      {label && (
        <div className="progress-header flex justify-between items-center mb-2">
          <span className="progress-label text-sm font-medium text-gray-700">
            {label}
          </span>
          {showPercentage && (
            <span className="progress-percentage text-sm font-semibold" 
                  style={{ color }}>
              {Math.round(currentProgress)}%
            </span>
          )}
        </div>
      )}
      
      <div 
        className="progress-track bg-gray-200 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div
          className="progress-fill rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${currentProgress}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}dd)`,
            boxShadow: `0 0 10px ${color}40`,
            transform: 'translateZ(0)', // GPU acceleration
          }}
        />
      </div>
    </div>
  );
}
