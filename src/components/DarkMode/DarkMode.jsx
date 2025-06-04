
import React from "react";
import {  Button, useColorMode } from "theme-ui";

const DarkModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();


  const handleColorModeChange = () => {
    setColorMode(colorMode === "default" ? "dark" : "default")
  };

  return (
    <Button
      onClick={handleColorModeChange}
      sx={{
        variant: "buttons.primary",
        bg: "transparent",
        color: "primary",
        border: "1px solid",
        borderColor: "primary",
        fontSize: 2,
        px: 3,
        py: 2,
        cursor: "pointer",
        mt: 3,
      }}
    >
      {colorMode === "default" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  );
};

export default DarkModeToggle;
