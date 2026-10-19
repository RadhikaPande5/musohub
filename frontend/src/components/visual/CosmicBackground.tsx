import React, { useMemo } from 'react';

interface CosmicBackgroundProps {
  particleCount?: number;
}

export const CosmicBackground: React.FC<CosmicBackgroundProps> = ({ particleCount = 38 }) => {
  // Generate deterministic shimmering stardust overlay
  const stars = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: ((i * 37) % 96) + 2,
      y: ((i * 53) % 65) + 3, // keep mainly in upper cosmic nebula area
      size: i % 4 === 0 ? 2.4 : i % 2 === 0 ? 1.6 : 1.0,
      opacity: 0.3 + ((i * 19) % 60) / 100,
      color: i % 3 === 0 ? '#67e8f9' : i % 2 === 0 ? '#f472b6' : '#ffffff',
      pulseDuration: 3 + ((i * 7) % 5),
    }));
  }, [particleCount]);

  return (
    <div className="cosmic-background" aria-hidden="true">
      {/* High-Resolution Cosmic Artwork Base Image */}
      <div className="cosmic-image-layer" />

      {/* Atmospheric Soft Light Overlay */}
      <div className="cosmic-ambient-aura" />

      {/* Dynamic Stardust Twinkling Stars */}
      <svg className="cosmic-stardust" xmlns="http://www.w3.org/2000/svg">
        {stars.map((star) => (
          <circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill={star.color}
            opacity={star.opacity}
            style={{
              animation: `stardustTwinkle ${star.pulseDuration}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default CosmicBackground;
