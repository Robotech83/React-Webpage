import React from "react";
import { Box, Text } from "theme-ui";

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        bg: "background",
        color: "text",
        px: 4,
        py: 4,
        borderTop: "1px solid",
        borderColor: "muted",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Text as="h4" sx={{ color: "primary", mb: 2 }}>Contact Me</Text>
        <Text>Phone: (+1) 253</Text>
        <Text>Email: robotech83@protonmail.com</Text>
      </Box>
    </Box>
  );
};

export default Footer;
