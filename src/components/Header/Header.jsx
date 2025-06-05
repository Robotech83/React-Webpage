import React from "react";
import { Box, Text } from "theme-ui";
// import { ThemeUIProvider } from "theme-ui"; 

const Header = ({ title, description }) => {
  return (
    <Box variant="styles.pageHeader">
      <Text as="h1" variant="styles.pageHeaderTitle">{title}</Text>
      <Text as="p" variant="styles.pageHeaderDescription">{description}</Text>
    </Box>
  );
};

export default Header;
