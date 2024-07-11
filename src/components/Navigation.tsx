import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation-container">
      <div className="left-nav">
        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="portfolio-link">
          <span className="portfolio-text">Portfolio | </span>
          <span className="dont-click-text">Don't Click</span>
        </Link>
      </div>
      <div className="right-nav">
        <Link to="/" className="dashboard-link">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
