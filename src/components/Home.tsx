import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-container">
      <div className="first-half">
        <div className="left-top">
          <h1>THANALAKSHAN SIVARASA</h1>
        </div>
        <div className="left-bottom">
          <img src="/Thana3.jpeg" alt="Profile" className="profile-image" />
        </div>
      </div>
      <div className="second-half">
        <div className="right-top">
          <nav>
            <ul className="navigation">
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
            </ul>
          </nav>
        </div>
        <div className="right-bottom">
          <nav>
            <ul className="contact">
              <li><a href="https://github.com/Thanalakshan" target="_blank" rel="noopener noreferrer"><img src="/public/github.png" alt="GitHub" /></a></li>
              <li><a href="https://www.linkedin.com/in/thana" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" alt="LinkedIn" /></a></li>
              <li><a href="https://wa.me/+94769150449" target="_blank" rel="noopener noreferrer"><img src="/whatsapp.png" alt="WhatsApp" /></a></li>
              <li><a href="https://www.facebook.com/thanalakshan7" target="_blank" rel="noopener noreferrer"><img src="/facebook.png" alt="Facebook" /></a></li>
              <li><a href="https://www.instagram.com/thanalakshan7" target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt="Instagram" /></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Home;
