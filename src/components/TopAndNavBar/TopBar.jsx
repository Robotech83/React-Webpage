import React from 'react';
import { ThemeUIProvider } from 'theme-ui'; // Importing ThemeUIProvider for theme management
import { theme } from '../../theme/theme'; // Importing the custom theme

// import './topBar.css'

export const TopBar = () => { //named export
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <span><i className="fa-regular fa-envelope"></i> robotech83@protonmail.com</span>
          <span><i className="fa-solid fa-phone"></i> (+1) 253 </span>
        </div>
      </div>
    </div>
  );
};


