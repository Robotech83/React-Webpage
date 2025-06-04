import React, { useState } from "react";
/** @jsxImportSource theme-ui */
import { Box, IconButton } from "theme-ui";
import { SideMenu } from "./SideMenu"; // ✅ Import external component

export const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
      <IconButton
        onClick={handleToggle}
        sx={{
          bg: "transparent",
          color: "#ff7714",
          ml: "auto",
          fontSize: 4,
          p: 2,
          cursor: "pointer",
        }}
      >
        <i className="fa-solid fa-bars" />
      </IconButton>

      {menuOpen && <SideMenu onClose={() => setMenuOpen(false)} />}
    </Box>
  );
};
