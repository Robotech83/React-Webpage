/** @jsxImportSource theme-ui */
import React from "react";
import { useColorMode, Button } from "theme-ui";

const DarkModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Button
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
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
