import React, { useRef } from 'react';
import { CosmicBackground } from '../components/visual/CosmicBackground';
import { Navbar } from '../components/layout/Navbar';
import { HeroContent } from '../components/hero/HeroContent';
import { CommunityTicker } from '../components/visual/CommunityTicker';
import { ScrollJoinCta } from '../components/hero/ScrollJoinCta';
import { Footer } from '../components/layout/Footer';

export const LandingPage: React.FC = () => {
  const heroCtaRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="musohub-landing">
      {/* 1. Atmospheric Moving Cosmic Background using landing_page_bg.png */}
      <CosmicBackground />

      {/* 2. Sleek Top Navigation Bar */}
      <Navbar />

      <main id="main-content" className="landing-main-stage">
        {/* Hero Full-Height Stage directly matching the visual reference */}
        <div className="hero-viewport-stage">
          <HeroContent heroCtaRef={heroCtaRef} />
          <CommunityTicker />
        </div>
      </main>

      {/* Scroll-Triggered Floating "Join" CTA Dock */}
      <ScrollJoinCta targetElementRef={heroCtaRef} />

      {/* Slim Editorial Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
