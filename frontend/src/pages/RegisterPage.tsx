import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../components/visual/CosmicBackground';
import { BrandLogoIcon, ArrowRightIcon } from '../components/icons/MusicIcons';
import '../styles/RegisterPage.css';

export const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'artist'>('user');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      alert(`Welcome to Musohub, ${data.user?.username}! Your journey has begun.`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <CosmicBackground />

      <div className="register-card">
        <Link to="/" className="register-brand-link" aria-label="Return to Musohub Home">
          <div className="brand-symbol">
            <BrandLogoIcon size={20} />
          </div>
          <span className="brand-name register-brand-text">Musohub</span>
        </Link>

        <h1 className="register-title">Join the Circle</h1>
        <p className="register-subtitle">
          Become part of the world’s home for instrumental music
        </p>

        {errorMsg && (
          <div className="register-error-banner" role="alert">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="register-form">
          {/* Role Selection Toggle */}
          <div className="register-field">
            <label className="register-label">How do you experience music?</label>
            <div className="register-role-group">
              <button
                type="button"
                className={`register-role-btn ${role === 'user' ? 'active-user' : ''}`}
                onClick={() => setRole('user')}
              >
                Appreciator / Listener
              </button>
              <button
                type="button"
                className={`register-role-btn ${role === 'artist' ? 'active-artist' : ''}`}
                onClick={() => setRole('artist')}
              >
                Instrumental Artist
              </button>
            </div>
          </div>

          <div className="register-field">
            <label htmlFor="reg-username" className="register-label">Username</label>
            <input
              id="reg-username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. cello_wanderer"
              className="register-input"
            />
          </div>

          <div className="register-field">
            <label htmlFor="reg-email" className="register-label">Email Address</label>
            <input
              id="reg-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="musician@sound.org"
              className="register-input"
            />
          </div>

          <div className="register-field">
            <label htmlFor="reg-password" className="register-label">Password</label>
            <input
              id="reg-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a secure passphrase"
              className="register-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="hero-primary-btn register-submit-btn"
          >
            <span>{loading ? 'Creating Account...' : 'Join Musohub'}</span>
            <ArrowRightIcon size={16} />
          </button>
        </form>

        <div className="register-switch">
          Already have an account?{' '}
          <Link to="/login" className="register-switch-link">
            Sign In
          </Link>
        </div>

        <div className="register-back-container">
          <Link to="/" className="register-back-link">
            &larr; Back to Musohub Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
