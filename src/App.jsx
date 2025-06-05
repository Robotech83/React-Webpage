import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'theme-ui';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { theme } from './theme/theme';
import { WebDev } from './Pages/';
import Robotics from './Pages/Robotics';
import About from './Pages/About'; // ✅ Make sure this path matches your folder structure

import { TopBar } from './components/TopAndNavBar/TopBar';
import { NavBar } from './components/TopAndNavBar/NavBar';
import Footer from './components/Footer/Footer';
import Subfooter from './components/Footer/Subfooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Subfooter />
    </Router>
  </ThemeProvider>
);
