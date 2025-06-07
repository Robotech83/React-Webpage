import React from "react";
import { Box, Text, Link } from "theme-ui";

import BackToTop from "../Buttons/BackToTop"; // Importing the BackToTop component

const Subfooter = () => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        bg: "background",
        color: "text",
        fontSize: 1,
        py: 3,
        borderTop: "1px solid",
        borderColor: "muted",
      }}
    >
      <Text>© 2025 My Portfolio.</Text>
      <Text>Designed by Robotech83</Text>

    <BackToTop /> {/* Adding the BackToTop button here */}
    </Box>
  );
};

export default Subfooter;
