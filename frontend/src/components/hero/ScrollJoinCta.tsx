import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SparkleIcon } from '../icons/MusicIcons';

interface ScrollJoinCtaProps {
  targetElementRef?: React.RefObject<HTMLElement | null>;
}

export const ScrollJoinCta: React.FC<ScrollJoinCtaProps> = ({ targetElementRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If target ref is provided, observe its exit from view
    if (targetElementRef?.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Show floating CTA when the main hero CTA scrolls out of view
          setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(targetElementRef.current);
      return () => observer.disconnect();
    }

    // Fallback scroll listener based on scroll depth
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 420);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetElementRef]);

  return (
    <aside
      className={`scroll-cta-dock ${isVisible ? 'is-visible' : ''}`}
      aria-label="Floating community action"
    >
      <div className="scroll-dock-card">
        <div className="dock-icon-badge">
          <SparkleIcon size={16} />
        </div>

        <div className="dock-text-group">
          <span className="dock-title">Where melodies find their people.</span>
          <span className="dock-subtitle">Join instrumental artists and appreciators worldwide</span>
        </div>

        <Link
          to="/register"
          className="dock-join-btn"
          id="floating-join-btn"
          aria-label="Join the community now"
        >
          <span>Join Musohub</span>
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </aside>
  );
};
