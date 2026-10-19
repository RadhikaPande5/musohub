import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CosmicBackground } from '../components/visual/CosmicBackground';
import { BrandLogoIcon, ArrowRightIcon } from '../components/icons/MusicIcons';
import '../styles/LoginPage.css';

export const LoginPage: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: identifier.includes('@') ? identifier : undefined,
          username: !identifier.includes('@') ? identifier : undefined,
          password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Success feedback (session cookie is set by server)
      alert(`Welcome back, ${data.user?.username || 'Artist'}!`);
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
    <div className="login-page">
      <CosmicBackground />

      <div className="login-card">
        <Link to="/" className="login-brand-link" aria-label="Return to Musohub Home">
          <div className="brand-symbol">
            <BrandLogoIcon size={20} />
          </div>
          <span className="brand-name login-brand-text">Musohub</span>
        </Link>

        <h1 className="login-title">Return to Resonance</h1>
        <p className="login-subtitle">
          Log in to your instrumental community account
        </p>

        {errorMsg && (
          <div className="login-error-banner" role="alert">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label htmlFor="login-identifier" className="login-label">
              Username or Email
            </label>
            <input
              id="login-identifier"
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="e.g. soloist or artist@musohub.com"
              className="login-input"
            />
          </div>

          <div className="login-field">
            <label htmlFor="login-password" className="login-label">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="login-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="hero-primary-btn login-submit-btn"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
            <ArrowRightIcon size={16} />
          </button>
        </form>

        <div className="login-switch">
          Don't have an account?{' '}
          <Link to="/register" className="login-switch-link">
            Join the Community
          </Link>
        </div>

        <div className="login-back-container">
          <Link to="/" className="login-back-link">
            &larr; Back to Musohub Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
