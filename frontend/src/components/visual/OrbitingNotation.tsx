import React from 'react';
import {
  TrebleClefIcon,
  EighthNoteIcon,
  BeamedNotesIcon,
  DiamondSparkleIcon,
} from '../icons/MusicIcons';

interface OrbitingNotationProps {
  className?: string;
}

export const OrbitingNotation: React.FC<OrbitingNotationProps> = ({ className = '' }) => {
  return (
    <div className={`orbit-composition ${className}`} aria-label="Celestial musical ring">
      {/* Soft ethereal nebula bloom behind the ring */}
      <div className="orbit-glow-center" />

      {/* SVG Ring System: 3 Concentric Staff Tracks */}
      <svg
        className="orbit-rings-svg"
        viewBox="0 0 460 460"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ringGradOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.65" />
            <stop offset="45%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#c084fc" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="ringGradMid" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="ringGradInner" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
          </linearGradient>
          <filter id="neonStaffGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric Staff Circles */}
        <circle
          cx="230"
          cy="230"
          r="195"
          fill="none"
          stroke="url(#ringGradOuter)"
          strokeWidth="1.2"
          filter="url(#neonStaffGlow)"
          className="staff-ring-outer"
        />
        <circle
          cx="230"
          cy="230"
          r="178"
          fill="none"
          stroke="url(#ringGradMid)"
          strokeWidth="1"
          strokeDasharray="4 2"
          opacity="0.8"
          className="staff-ring-mid"
        />
        <circle
          cx="230"
          cy="230"
          r="162"
          fill="none"
          stroke="url(#ringGradInner)"
          strokeWidth="1.1"
          className="staff-ring-inner"
        />

        {/* Subtle orbit stave ticks and celestial sparks */}
        <circle cx="230" cy="35" r="2.2" fill="#38bdf8" opacity="0.9" filter="url(#neonStaffGlow)" />
        <circle cx="425" cy="230" r="2.2" fill="#f472b6" opacity="0.85" filter="url(#neonStaffGlow)" />
        <circle cx="170" cy="415" r="2.5" fill="#c084fc" opacity="0.8" />
        <circle cx="50" cy="200" r="1.8" fill="#67e8f9" opacity="0.75" />
      </svg>

      {/* Floating Glowing Musical Notes along the orbit paths */}
      <div className="orbit-notes-layer" aria-hidden="true">
        {/* 1. Glowing Neon Treble Clef at upper-left (~10 o'clock) */}
        <div className="orbit-glyph note-treble-clef" title="Treble Clef">
          <TrebleClefIcon size={46} />
        </div>

        {/* 2. Top Eighth Note in Cyan (~12 o'clock) */}
        <div className="orbit-glyph note-top-cyan" title="Eighth Note">
          <EighthNoteIcon size={24} />
        </div>

        {/* 3. Top-Right Beamed Notes in Neon Violet/Cyan (~1:30 o'clock) */}
        <div className="orbit-glyph note-topright-beamed" title="Beamed Notes">
          <BeamedNotesIcon size={30} />
        </div>

        {/* 4. Upper-Right Magenta Note (~2:30 o'clock) */}
        <div className="orbit-glyph note-right-pink" title="Eighth Note">
          <EighthNoteIcon size={25} />
        </div>

        {/* 5. Lower-Right Large Purple Beamed Notes (~4:30 o'clock) */}
        <div className="orbit-glyph note-bottomright-purple" title="Beamed Notes">
          <BeamedNotesIcon size={28} />
        </div>

        {/* 6. Bottom Cyan Single Note (~6 o'clock) */}
        <div className="orbit-glyph note-bottom-cyan" title="Eighth Note">
          <EighthNoteIcon size={20} />
        </div>

        {/* 7. Bottom-Left Single Note (~7:30 o'clock) */}
        <div className="orbit-glyph note-bottomleft-blue" title="Single Note">
          <EighthNoteIcon size={22} />
        </div>

        {/* 8. Left Cyan Note (~9 o'clock) */}
        <div className="orbit-glyph note-left-cyan" title="Eighth Note">
          <EighthNoteIcon size={23} />
        </div>

        {/* Dotted Sparkles */}
        <div className="orbit-glyph sparkle-node-1">
          <DiamondSparkleIcon size={9} />
        </div>
        <div className="orbit-glyph sparkle-node-2">
          <DiamondSparkleIcon size={11} />
        </div>
        <div className="orbit-glyph sparkle-node-3">
          <DiamondSparkleIcon size={8} />
        </div>
      </div>

      {/* Center Tagline:
          —
          For the love of
          instruments.
          —
      */}
      <div className="orbit-center-narrative">
        <div className="center-dash" />
        <div className="center-tagline">
          <span>For the love of</span>
          <span>instruments.</span>
        </div>
        <div className="center-dash" />
      </div>
    </div>
  );
};

export default OrbitingNotation;
