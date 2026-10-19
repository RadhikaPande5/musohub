import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

/**
 * 4-Bar Soundwave Brand Logo matching the reference image header:
 * Sleek vertical bars in purple-to-blue gradient
 */
export const MusohubLogoIcon: React.FC<IconProps> = ({ size = 26, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <defs>
      <linearGradient id="musohubLogoGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="60%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
    <rect x="2" y="7" width="2.8" height="10" rx="1.4" fill="url(#musohubLogoGrad)" />
    <rect x="7.5" y="3" width="2.8" height="18" rx="1.4" fill="url(#musohubLogoGrad)" />
    <rect x="13" y="5" width="2.8" height="14" rx="1.4" fill="url(#musohubLogoGrad)" />
    <rect x="18.5" y="8" width="2.8" height="8" rx="1.4" fill="url(#musohubLogoGrad)" />
  </svg>
);

export const BrandLogoIcon = MusohubLogoIcon;

/**
 * Search Icon (Magnifying Glass)
 */
export const SearchIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

/**
 * Pause Icon (||)
 */
export const PauseIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="6" y="5" width="3.5" height="14" rx="1.5" />
    <rect x="14.5" y="5" width="3.5" height="14" rx="1.5" />
  </svg>
);

/**
 * Play Icon (▶)
 */
export const PlayIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M7 5.5v13a1 1 0 0 0 1.55.83l10.5-6.5a1 1 0 0 0 0-1.66L8.55 4.67A1 1 0 0 0 7 5.5z" />
  </svg>
);

/**
 * Diamond Sparkle (✦)
 */
export const DiamondSparkleIcon: React.FC<IconProps> = ({ size = 12, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
  </svg>
);

export const SparkleIcon = DiamondSparkleIcon;

/**
 * Treble Clef
 */
export const TrebleClefIcon: React.FC<IconProps> = ({ size = 26, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M17 3v31c0 3-2 5-4.5 5s-3.5-1.5-3.5-3.5c0-2.5 2-4 4.5-4 1.5 0 2.5.5 3.5 1.5" />
    <path d="M17 3c3.5 1.5 5 5 4.5 8.5-.5 4-4.5 7-9 7.5-4.5.5-7.5 4-7.5 7.5 0 3.5 3 6.5 7 6.5s6.5-2.5 7-6c.5-4-3-7-7-7-2.5 0-4.5 1-5.5 2.5" />
  </svg>
);

/**
 * Single Eighth Note
 */
export const EighthNoteIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <ellipse cx="7.5" cy="17.5" rx="4" ry="3" transform="rotate(-20 7.5 17.5)" fill="currentColor" />
    <path d="M11 16.5V5c3.5 0 6 2 6 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

/**
 * Beamed Eighth Notes (Pair)
 */
export const BeamedNotesIcon: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <ellipse cx="6" cy="19" rx="3.5" ry="2.6" transform="rotate(-20 6 19)" fill="currentColor" />
    <ellipse cx="18" cy="16.5" rx="3.5" ry="2.6" transform="rotate(-20 18 16.5)" fill="currentColor" />
    <path d="M9 18V6.5l12-2.5V15.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 6.5l12-2.5" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" />
  </svg>
);

/**
 * Bass Clef
 */
export const BassClefIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M7 11a4 4 0 0 1 7-2c1.5 1.5 1.5 4 0 6.5C12 17.5 9 19 6 19" />
    <circle cx="18" cy="9" r="1.5" fill="currentColor" />
    <circle cx="18" cy="15" r="1.5" fill="currentColor" />
    <circle cx="8" cy="11" r="1.5" fill="currentColor" />
  </svg>
);

export const FermataIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M4 14a8 8 0 0 1 16 0" />
    <circle cx="12" cy="11" r="2" fill="currentColor" />
  </svg>
);

export const SoundwaveIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <MusohubLogoIcon size={size} className={className} {...props} />
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);
