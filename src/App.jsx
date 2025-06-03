import React from 'react';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from './theme/theme'; // ✅ Import your theme object


import { TopBar } from './components/TopAndNavBar/TopBar'; //name import 
import { NavBar } from './components/TopAndNavBar/NavBar';

import Header from './components/Header/Header';
import Robotics from './Pages/Robotics';
import Footer from './components/Footer/Footer';
import Subfooter from './components/Footer/Subfooter';
import { Hamburger } from './components/Hambuger/Hambuger';


//import './assets/css/projects/topBar.css';
//import './assets/css/projects/navBar.css'



function App() {
  return (
    <>
 <ThemeUIProvider theme={theme}> 
    <div>
       <TopBar/>
        <NavBar/>
        
        <Header />
        <Robotics />

        <div className="footer">
          <Footer />
          <Subfooter />
        </div>
    </div>
 </ThemeUIProvider>

    </>
  );
}

export default App;




