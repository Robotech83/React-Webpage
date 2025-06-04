import React from 'react';
import { ThemeUIProvider } from 'theme-ui'; 
import { theme } from './theme/theme';

// import { TopBar } from './components/TopAndNavBar/TopBar';
// import { NavBar } from './components/TopAndNavBar/NavBar';
// import Header from './components/Header/Header';
// import Robotics from './Pages/Robotics';
// import Footer from './components/Footer/Footer';
// import Subfooter from './components/Footer/Subfooter';

import {TopBar} from './components/TopAndNavBar/TopBar';
import {NavBar} from './components/TopAndNavBar/NavBar'; 
import Header from './components/Header/Header';
import Robotics from './Pages/Robotics';
import Footer from './components/Footer/Footer';
import Subfooter from './components/Footer/Subfooter';


function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <div>
        <TopBar />
        <NavBar />
        <Header />
        <Robotics />
        <div className="footer">
          <Footer />
          <Subfooter />
        </div>
      </div>
    </ThemeUIProvider>
  );
}

export default App;
