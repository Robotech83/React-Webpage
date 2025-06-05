import React from "react";
/** @jsxImportSource theme-ui */
import { Box, NavLink } from "theme-ui";
import { Hamburger } from '../Hambuger/Hambuger';        // ✅ import Hamburger
import DarkModeToggle from '../DarkMode/DarkMode';       // ✅ import DarkModeToggle

export const NavBar = () => {
  return (
    <Box
      as="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",  // Divide left & right sections
        alignItems: "center",
        px: 4,
        py: 3,
        bg: "background",
      }}
    >
      {/* Left Side Navigation */}
      <Box sx={{ display: "flex", gap: 4 }}>
        <NavLink href="/" sx={{ variant: "styles.navLink" }}>Home</NavLink>

        {/* About Dropdown */}
        <Box sx={{ position: "relative", ":hover .dropdown": { display: "block" } }}>
          <NavLink href="#" sx={{ variant: "styles.navLink" }}>About</NavLink>
          <Box className="dropdown" sx={dropdownMenuStyles}>
            <NavLink href="/about" sx={dropdownItem}>Bio</NavLink>
            <NavLink href="/resume" sx={dropdownItem}>Resume</NavLink>
          </Box>
        </Box>

        {/* Portfolio Dropdown */}
        <Box sx={{ position: "relative", ":hover .dropdown": { display: "block" } }}>
          <NavLink href="#" sx={{ variant: "styles.navLink" }}>Portfolio</NavLink>
          <Box className="dropdown" sx={dropdownMenuStyles}>
            <NavLink href="/web-dev" sx={dropdownItem}>Web Dev</NavLink>
            <NavLink href="/robotics" sx={dropdownItem}>Robotics</NavLink>
            <NavLink href="/gamedev" sx={dropdownItem}>Game Dev</NavLink>
          </Box>
        </Box>
      </Box>

      {/* Right Side Buttons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <DarkModeToggle />  {/* 🌙 Toggle */}
        <Hamburger />       {/* ☰ Menu */}
      </Box>
    </Box>
  );
};

// Dropdown Styles
const dropdownMenuStyles = {
  display: "none",
  position: "absolute",
  top: "100%",
  left: 0,
  bg: "background",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  p: 2,
  borderRadius: 2,
  zIndex: 99,
  minWidth: "160px",
};

const dropdownItem = {
  display: "block",
  px: 3,
  py: 2,
  textDecoration: "none",
  color: "text",
  ":hover": {
    bg: "primary",
    color: "background",
  },
};
