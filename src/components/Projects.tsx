import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>

      <div className="project">
        <a href="https://github.com/project1" target="_blank" rel="noopener noreferrer">
          <img src="/P1.jpeg" alt="Project 1" />
        <h3>Australian Cricketer Classifier</h3>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/project2" target="_blank" rel="noopener noreferrer">
          <img src="/P2.jpeg" alt="Project 2" />
        <h3>Bengaluru Home Price Prediction</h3>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/project3" target="_blank" rel="noopener noreferrer">
          <img src="/P3.png" alt="Project 3" />
        <h3>Finance, Payroll, Risk Management Subsystem</h3>
        </a>
      </div>
    </section>
  );
};

export default Projects;