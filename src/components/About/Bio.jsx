/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Text } from "theme-ui";

export const Bio = () => {
  return (
    <Box
      sx={{
        maxWidth: "900px",
        mx: "auto",
        px: [3, 4],
        py: [4, 5],
        color: "text",
        bg: "background",
      }}
    >
      <Text as="h2" sx={{ fontSize: 4, fontWeight: "bold", mb: 3 }}>
        My Journey
      </Text>
      <Text as="p" sx={{ mb: 3 }}>
        I'm a creator with over a decade of hands-on mechanical experience and a strong passion for robotics and
        embedded systems.
      </Text>

      <Text as="p" sx={{ mb: 3 }}>
        Over the last <strong>6 years</strong>, I’ve built various robotic systems, integrating hardware and AI to bring
        machines to life.
      </Text>

      <Text as="h3" sx={{ fontSize: 3, mt: 4, mb: 2 }}>Skills & Expertise</Text>
      <Box as="ul" sx={{ pl: 4, mb: 4 }}>
        <li>Arduino — 5+ years of circuit design, servo control, and sensor integration</li>
        <li>Raspberry Pi (3 & 4) — 4 years of scripting, GPIO control, and AI deployment</li>
        <li>Automation</li>
        <li>Robotics — 2 years of building and programming</li>
        <li>AI Integration</li>
        <li>Web Development</li>
        <li>Mechanical Repair — 10+ years in the field as a diesel service mechanic</li>
      </Box>

      <Text as="p" sx={{ mb: 5 }}>
        My current focus is on combining Python, AI, and hardware to create intelligent robotics platforms like my
        humanoid robot, <strong>Sonny</strong>.
      </Text>

      <Text as="h2" sx={{ fontSize: 4, fontWeight: "bold", mb: 3 }}>
        🌐 My Web Development Journey
      </Text>
      <Text as="p" sx={{ mb: 3 }}>
        I began with HTML and CSS, then dove into JavaScript to build interactive projects. I’ve explored DOM manipulation,
        responsive layouts, and semantic HTML.
      </Text>
      <Text as="p" sx={{ mb: 5 }}>
        I'm still refining my UI and logic skills, but web dev has become a creative outlet that complements my robotics
        work.
      </Text>

      <Text as="h2" sx={{ fontSize: 4, fontWeight: "bold", mb: 3 }}>
        🕹️ My Game Development Background
      </Text>
      <Text as="p" sx={{ mb: 3 }}>
        I’ve explored game development over the last 2 years — building UI menus, scene managers, and state machines to
        manage gameplay.
      </Text>
      <Text as="p" sx={{ mb: 0 }}>
        Game dev blends creativity and logic. It’s now a powerful extension of my engineering mindset.
      </Text>
    </Box>
  );
};
