import React from 'react';
import { ThemeUIProvider, Box, Flex } from 'theme-ui'; 
import { theme } from './theme/theme';
// Importing the theme from the theme directory
import {TopBar} from './components/TopAndNavBar/TopBar';
import {NavBar} from './components/TopAndNavBar/NavBar'; 

// import Robotics from './Pages/Robotics';
import Footer from './components/Footer/Footer';
import Subfooter from './components/Footer/Subfooter';
import { WebDev } from './Pages/WebDev';
import { HomePage } from './Pages/HomePage';


function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
        <TopBar />
        <NavBar />
        {/* <Robotics /> */}

        <Flex sx={{height:'300px', justifyContent:'center', alignItems: "center"}}>
          Main Content Here.
        </Flex>

        <Footer />
        <Subfooter />
      </Flex>
    </ThemeUIProvider>
  );
}

export default App;
