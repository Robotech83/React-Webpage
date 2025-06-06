import React from 'react';
import { ThemeUIProvider } from 'theme-ui'; 
import { theme } from './theme/theme';
// Importing the theme from the theme directory
import {TopBar} from './components/TopAndNavBar/TopBar';
import {NavBar} from './components/TopAndNavBar/NavBar'; 

import Robotics from './Pages/Robotics';
import Footer from './components/Footer/Footer';
import Subfooter from './components/Footer/Subfooter';
import { WebDev } from './Pages/WebDev';
import { About } from './Pages/About/About';


function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <div>
        <TopBar />
        <NavBar />
        {/* <Robotics /> */}
        <WebDev />
        {/* The WebDev component displays a header and a grid of web development projects, each with a title, description, and links to GitHub repositories. */}
      
        <div className="footer">
          <Footer />
          <Subfooter />
        </div>
      </div>
    </ThemeUIProvider>
  );
}

export default App;
