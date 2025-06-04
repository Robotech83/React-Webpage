import React, { useState } from "react";
/** @jsxImportSource theme-ui */ // Enables Theme UI styling syntax
import { Box, IconButton } from "theme-ui";
import { SideMenu } from "./SideMenu"; // Import external SideMenu component

// Hamburger component controls toggle state and displays the button
export const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/closed

  // Toggle function: open if closed, close if open
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",              // Horizontal layout
        justifyContent: "flex-end",   // Align to the right
        alignItems: "center",
        width: "100%",                // Full width of container
      }}
    >
      {/* Hamburger Icon Button */}
      <IconButton
        onClick={handleToggle}
        sx={{
          bg: "transparent",          // No background
          color: "#ff7714",           // Bright orange text/icon color
          ml: "auto",                 // Push to the right
          fontSize: 4,                // Theme UI scale (~24px)
          p: 2,                       // Padding for click area
          cursor: "pointer",
        }}
      >
        <i className="fa-solid fa-bars" /> {/* Font Awesome "hamburger" icon */}
      </IconButton>

      {/* Always render SideMenu and control its visibility via props */}
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </Box>
  );
};
