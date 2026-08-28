import React from 'react'
import { useRef, useState } from "react";

export default function SpotlightCard({ children, className = "" }) {
    const cardRef = useRef(null);
    const [pos, setPos] = useState({x: 0, y: 0});
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
          if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    };
  return (
    <div
    ref={cardRef}
    onMouseMove={handleMouseMove}
    onMouseEnter={() => setOpacity(1)}
    onMouseLeave={() => setOpacity(0)}
    className={`relative overflow-hidden rounded-xl bg-white dark:bg-slate-900  border border-slate-200 dark:border-slate-800 p-5 transition-colors duration-300 hover:shadow-lg dark:hover:shadow-slate-900/50 ${className}`}
    >
      <div 
      className='pointer-events-none absolute inset-0 transition-opacity duration-300'
      style={{
        opacity,
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.15), transparent 70%)`,

      }}
      />
      <div className='relative z-10'>{children}</div>
    </div>
  );
}


