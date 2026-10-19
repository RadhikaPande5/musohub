import React from 'react';
import { Link } from 'react-router-dom';
import { OrbitingNotation } from '../visual/OrbitingNotation';
import { ArrowRightIcon } from '../icons/MusicIcons';

interface HeroContentProps {
  heroCtaRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeroContent: React.FC<HeroContentProps> = ({ heroCtaRef }) => {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* 1. Celestial Staff Ring with Floating Neon Notes & Tagline */}
      <OrbitingNotation />

      {/* 2. Headline & Copy */}
      <div className="hero-text-block">
        <h1 id="hero-title" className="hero-headline">
          <span className="hero-line-white">Where melodies</span>
          <span className="hero-line-gradient">find their people.</span>
        </h1>

        <p className="hero-subtitle">
          A home for instrumental artists, listeners and
          <br className="hero-sub-break" />
          communities who live and breathe music.
        </p>

        {/* 3. Glowing Pill Call to Action Button */}
        <div className="hero-cta-container" ref={heroCtaRef}>
          <Link
            to="/register"
            className="hero-join-btn"
            id="hero-join-btn"
            aria-label="Join the Community"
          >
            <span>Join the Community</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
