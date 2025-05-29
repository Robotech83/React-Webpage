import React from 'react';
import './card.css' // Importing the CSS file for project card styling


export const ProjectCrd = () => {

  return (
    <>
      <section className="project-grid">
        <div className="project-card">
          <h3>Sonny Voice Assistant</h3>
          <p>Online AI assistant built with Python, OpenAI, and Pyttsx3.</p>
          <a href="https://github.com/Robotech83/Sonny-Voice" target="_blank">View on GitHub</a>
        </div>
      </section>
    </>
  );
};

