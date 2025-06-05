import React from 'react';
import './RoboticCard.css'; // Assuming you have a CSS file for styling

export const RoboticCard = ({ title, description, github }) => {
  return (
    <section className="project-grid">
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </section>
  );
};