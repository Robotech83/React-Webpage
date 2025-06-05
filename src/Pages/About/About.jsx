import React from "react";
import Header from '../../components/Header/Header.jsx';
import { Bio } from '../../components/About/Bio.jsx';

//import '../assets/css/projects/about.css'

export const About = () => {

    return (

        <>
        <Header
            title="About Me"
            description="From mechanical roots to robotics innovation — here's my journey."
        />
        <div className="about-container">
            <Bio />
        </div>
        </>
    );
};