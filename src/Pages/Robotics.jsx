import React from 'react';

import Header from '../components/Header/Header.jsx';
import { RoboticCard } from '../components/ProjectCards/RoboticCard.jsx';


const Robotics = () => {
  return (
    <>
    <Header
      title="Robotics Projects"
      description="A showcase of my AI-integrated robotics systems."
    />
    <div className='project-card-header'>
    <RoboticCard
  title="Sonny Voice Assistant"
  description="Online AI assistant built with Python, OpenAI, and Pyttsx3."
  github="https://github.com/Robotech83/Sonny-Voice"
/>
    <RoboticCard
  title="Sonny on a Raspberry Pi"
  description="AI assistant running on Raspberry Pi with voice recognition."
  github="https://github.com/Robotech83/Sonny_voice-on-Pi"
/>
    </div>
    </>
  );
}

export default Robotics;
// This component displays a header and a grid of robotics projects, each with a title, description, and links to GitHub repositories or galleries.