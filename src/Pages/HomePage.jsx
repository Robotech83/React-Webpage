import React from "react";

import Header from "../components/Header/Header.jsx";

import {Box, Text, Button, Link } from "theme-ui";

export const HomePage = () => {
  return (
    <>
      <Header
        title="Welcome to My Portfolio"
        description="Explore my projects, skills, and experiences in web development and robotics."
      />
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Text as="h2">From Auto Mechanic to Full-Stack Maker</Text>
        <Text as="p">
           With over a decade of hands-on mechanical experience, I now design intelligent robots, build custom web
            tools, and explore game logic. I'm driven by curiosity, creativity, and code.
        </Text>
      </Box>

      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button as={Link} href="/about" variant="primary">
          About Me
        </Button>
        <Button as={Link} href="/portfolio" variant="primary">
          View Projects
        </Button>
        <Button as={Link} href="/contact" variant="primary">
          Contact
        </Button>
      </Box>
    </>
  );
}