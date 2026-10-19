import React, { useState } from 'react';
import { MusohubLogoIcon, DiamondSparkleIcon, PauseIcon, PlayIcon } from '../icons/MusicIcons';

export const CommunityTicker: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const items = [
    'Independent Artists',
    'Instrumental Music',
    'Find Your People',
    'Share Your Sound',
    'Discover New Melodies',
  ];

  return (
    <footer className="musohub-ambient-bar" aria-label="Musohub Ambient Ticker">
      {/* Top horizontal neon light flare / beam */}
      <div className="ambient-bar-flare" />

      <div className="ambient-bar-inner">
        {/* Left: Soundwave Logo Icon */}
        <div className="ambient-bar-lead">
          <MusohubLogoIcon size={20} className="ambient-soundwave" />
        </div>

        {/* Center / Spanning Items with Diamond Sparkles */}
        <div className={`ambient-items-track ${isPlaying ? 'is-animating' : 'is-paused'}`}>
          <div className="ambient-items-content">
            {items.map((item, index) => (
              <React.Fragment key={`first-${item}-${index}`}>
                <span className="ambient-item-text">{item}</span>
                <span className="ambient-sparkle" aria-hidden="true">
                  <DiamondSparkleIcon size={10} />
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Duplicate set for seamless continuous marquee on smaller screens if overflow */}
          <div className="ambient-items-content" aria-hidden="true">
            {items.map((item, index) => (
              <React.Fragment key={`second-${item}-${index}`}>
                <span className="ambient-item-text">{item}</span>
                <span className="ambient-sparkle" aria-hidden="true">
                  <DiamondSparkleIcon size={10} />
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right: Pause / Play Ambient Control */}
        <div className="ambient-bar-tail">
          <button
            type="button"
            className="ambient-pause-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause ambient motion' : 'Play ambient motion'}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <PauseIcon size={14} /> : <PlayIcon size={14} />}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default CommunityTicker;
