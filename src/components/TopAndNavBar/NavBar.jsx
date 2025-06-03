import React from "react";
import { SearchBox } from "../SearchBox/SearchBox";

//import './navBar.css';

// This component defines a navigation bar with links to different sections of the portfolio website.
 export const NavBar = () => {
    return (
        <div className="navbar">
        <div className="navbar-container">
            <div className="navbar-left">
            <a href="#home" className="navbar-link">Home</a>
            <a href="#about" className="navbar-link">About</a>
            <a href="#projects" className="navbar-link">Projects</a>
            <a href="#contact" className="navbar-link">Contact</a>
            </div>
            <SearchBox/>
        </div>
        </div>
    );
    }

