import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const dotsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating dots
    const container = dotsContainerRef.current;
    if (!container) return;

    const dots: HTMLDivElement[] = [];
    const dotCount = 25;

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      dot.className = 'floating-dot';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100 + 100}%`;
      dot.style.animationDelay = `${Math.random() * 15}s`;
      dot.style.animationDuration = `${12 + Math.random() * 8}s`;
      container.appendChild(dot);
      dots.push(dot);
    }

    return () => {
      dots.forEach(dot => dot.remove());
    };
  }, []);

  return (
    <>
      {/* Animated Grid */}
      <div className="animated-grid" />
      
      {/* Floating Dots */}
      <div ref={dotsContainerRef} className="floating-dots" />
      
      {/* Vignette */}
      <div className="vignette" />
      
      {/* Grain Overlay */}
      <div className="grain-overlay" />
    </>
  );
}
