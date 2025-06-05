import React from "react";
import  Header  from "../components/Header/Header.jsx";
import { ProjectCrd } from "../components/ProjectCards/Card.jsx";

export const WebDev = () => {
    return (
        <>
        <div className='project-card-header'>
        <ProjectCrd
  title="Personal Portfolio Website"
  description="A responsive personal portfolio website built with React and Theme UI."
  github="https://github.com/Robotech83/portfolio"
/>
        <ProjectCrd
  title="E-commerce Platform"
  description="Full-stack e-commerce platform with user authentication and payment integration."
  github="https://github.com/Robotech83/e-commerce"
/>
        </div>
        </>
    )
}