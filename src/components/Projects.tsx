import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>

      <div className="project">
        <a href="https://github.com/Thanalakshan/FaceDet" target="_blank" rel="noopener noreferrer">
          <img src="/P1.jpeg" alt="Project 1" />
        <h3>Australian Cricketer Classifier</h3>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/Thanalakshan/Bangalore" target="_blank" rel="noopener noreferrer">
          <img src="/P2.jpeg" alt="Project 2" />
        <h3>Bengaluru Home Price Prediction</h3>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/Thanalakshan/payroll-frontend" target="_blank" rel="noopener noreferrer">
          <img src="/P3.png" alt="Project 3" />
        <h3>Finance, Payroll, Risk Management Subsystem</h3>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/Thanalakshan/SentimentAnalysis" target="_blank" rel="noopener noreferrer">
          <img src="/P4.jpeg" alt="Project 4" />
        <h3>Sentiment Analysis (Text)</h3>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/Thanalakshan/ChatBot_Gemini" target="_blank" rel="noopener noreferrer">
          <img src="/P5.jpeg" alt="Project 4" />
        <h3>ChatBot - Kimiko</h3>
        </a>
      </div>
    </section>
  );
};

export default Projects;