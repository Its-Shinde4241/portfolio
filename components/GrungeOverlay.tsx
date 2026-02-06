import React from 'react';

// Adds a cinematic grain/scratch effect
export const GrungeOverlay: React.FC<{ opacity?: number }> = ({ opacity = 0.15 }) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-50 mix-blend-overlay"
      style={{ opacity }}
    >
      <svg className="h-full w-full opacity-50">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
};