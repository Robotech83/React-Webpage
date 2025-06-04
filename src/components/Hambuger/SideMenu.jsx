import React from "react";
/** @jsxImportSource theme-ui */ // Enables Theme UI JSX syntax
import { Box, Button } from "theme-ui";

// SideMenu component takes two props:
// - isOpen (bool): determines whether it's visible
// - onClose (function): closes the menu
export const SideMenu = ({ isOpen, onClose }) => {
  return (
    <Box
      sx={{
        position: "fixed",             // Locks it to screen
        top: 0,
        right: 0,                      // Anchored to right edge
        height: "100vh",              // Full screen height
        width: "250px",               // Fixed width menu
        bg: "black",                  // Dark background
        color: "white",               // White text
        zIndex: 1000,                 // Above other elements
        p: 3,                          // Padding around content
        transform: isOpen ? "translateX(0)" : "translateX(100%)", // Slide in/out
        transition: "transform 0.3s ease-in-out", // Smooth animation
      }}
    >
      {/* Close button */}
      <Button
        onClick={onClose}
        sx={{
          mb: 3,
          color: "#ff7714",
          bg: "transparent",
          fontSize: 3,
          p: 0,
          cursor: "pointer",
        }}
      >
        <i className="fa-solid fa-times" /> {/* Font Awesome "X" icon */}
      </Button>

      {/* Navigation or Info Items */}
      <p>⚙️ Robotics</p>
      <p>🧠 AI Projects</p>
      <p>🕹️ Game Dev</p>
      <p>📞 Contact</p>
    </Box>
  );
};
