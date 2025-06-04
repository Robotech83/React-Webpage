/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import { Hamburger } from "../Hambuger/Hambuger";
import DarkModeToggle from "../DarkMode/DarkMode";
// import DarkModeToggle from "../DarkMode/DarkMode";

export const NavBar = () => {
  return (
    <Box
      className="navbar"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bg: "background", // 👈 will now switch with dark mode
        color: "text",     // 👈 will now switch with dark mode
        px: 4,
        py: 3,
      }}
    >
      <Box sx={{ display: "flex", gap: 3 }}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </Box>

      <Box sx={{ display: "flex", gap: 3 }}>
        <DarkMode />
        <Hamburger />
      </Box>
    </Box>
  );
};
