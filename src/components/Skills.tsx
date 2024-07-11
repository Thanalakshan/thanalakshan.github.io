import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skills = [
    'Electrical Engineering',
    'Machine Learning',
    'Artificial Intelligence (AI)',
    'Web Development',
    'Project Management',
    'Problem-Solving',
    'Programming Languages (e.g., Python, JavaScript)',
    'Frameworks and Libraries (e.g., React, Flask, OpenCV)',
    'Data Analysis',
    'Image Processing',
    'Model Training and Evaluation',
    'HTML/CSS',
    'TypeScript (TSX)',
    'Version Control (e.g., Git)',
    'API Integration',
    'User Interface (UI) Design',
    'Team Collaboration'
  ];

  return (
    <section id="skills" className="skills-container">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
