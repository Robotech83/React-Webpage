/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Link, NavLink } from "theme-ui";

export const NavBar = () => {
  return (
    <Box as="nav" sx={{ display: "flex", gap: 4, px: 4, py: 3, bg: "background", alignItems: "center" }}>
      {/* Home */}
      <NavLink href="/" sx={{ variant: "styles.navLink" }}>Home</NavLink>

      {/* About with dropdown */}
      <Box sx={{ position: "relative", ":hover .dropdown": { display: "block" } }}>
        <NavLink href="#" sx={{ variant: "styles.navLink" }}>About</NavLink>
        <Box className="dropdown" sx={dropdownMenuStyles}>
          <NavLink href="/about" sx={dropdownItem}>Bio</NavLink>
          <NavLink href="/resume" sx={dropdownItem}>Resume</NavLink>
        </Box>
      </Box>

      {/* Portfolio with dropdown */}
      <Box sx={{ position: "relative", ":hover .dropdown": { display: "block" } }}>
        <NavLink href="#" sx={{ variant: "styles.navLink" }}>Portfolio</NavLink>
        <Box className="dropdown" sx={dropdownMenuStyles}>
          <NavLink href="/web-dev" sx={dropdownItem}>Web Dev</NavLink>
          <NavLink href="/robotics" sx={dropdownItem}>Robotics</NavLink>
          <NavLink href="/gamedev" sx={dropdownItem}>Game Dev</NavLink>
        </Box>
      </Box>
    </Box>
  );
};

// Reusable dropdown styles
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
    color: "background"
  }
};
