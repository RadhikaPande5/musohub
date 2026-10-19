import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MusohubLogoIcon, SearchIcon } from '../icons/MusicIcons';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="musohub-navbar">
      <div className="navbar-container">
        {/* Brand: 4-Bar Soundwave + Musohub */}
        <Link to="/" className="brand-link" aria-label="Musohub Home">
          <MusohubLogoIcon size={24} className="brand-logo-icon" />
          <span className="brand-name">Musohub</span>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <a href="#discover" className="nav-item-link">
                Discover
              </a>
            </li>
            <li className="nav-item-group">
              <a href="#artists" className="nav-item-link">
                Artists
              </a>
              <span className="nav-dot-separator" aria-hidden="true">&middot;</span>
              <a href="#communities" className="nav-item-link">
                Communities
              </a>
            </li>
            <li>
              <a href="#about" className="nav-item-link">
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Actions: Search + Log in + Join */}
        <div className="nav-actions">
          {/* Search Trigger */}
          <div className="nav-search-wrapper">
            <button
              type="button"
              className="btn-search-icon"
              aria-label="Search melodies, artists, or instruments"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <SearchIcon size={18} />
            </button>
            {searchOpen && (
              <div className="nav-search-dropdown">
                <input
                  type="text"
                  placeholder="Search artists, instruments, soundscapes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="nav-search-input"
                />
              </div>
            )}
          </div>

          {/* Log in Pill Button */}
          <Link to="/login" className="btn-login-pill" aria-label="Log in to Musohub">
            Log in
          </Link>

          {/* Join Glowing Violet Pill Button */}
          <Link to="/register" className="btn-join-pill" aria-label="Join Musohub">
            Join
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a
            href="#discover"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Discover
          </a>
          <a
            href="#artists"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Artists
          </a>
          <a
            href="#communities"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Communities
          </a>
          <a
            href="#about"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <div className="mobile-auth-row">
            <Link
              to="/login"
              className="btn-login-pill mobile-auth-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="btn-join-pill mobile-auth-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
