import React from "react";

/** @jsxImportSource theme-ui */
import { Box, IconButton } from "theme-ui";

export const Hamburger = () => {
  const handleToggle = () => {
    if (typeof window !== "undefined" && window.toggleSideMenu) {
      window.toggleSideMenu();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
      <IconButton
        onClick={handleToggle}
        sx={{
          bg: "transparent", // Transparent background
          color: "#ff7714",
          ml: "auto",        // Moves the button to the right
          fontSize: 4,       // Responsive font size (Theme UI scale)
          p: 2,              // Padding
          cursor: "pointer",
        }}
      >
        <i className="fa-solid fa-bars" />
      </IconButton>
    </Box>
  );
};
