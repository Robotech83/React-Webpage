/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Button } from "theme-ui";

export const SideMenu = ({ isOpen, onClose }) => {
  return (
    <Box
      variant="styles.sideMenu"
      sx={{
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <Button onClick={onClose} variant="close">
        <i className="fa-solid fa-times" />
      </Button>

      <Box variant="styles.menuText">
        <p>
          (Robotech83) <br />
          Building beautiful webpages and applications.<br />
          Building Robots and other mechanical devices.<br />
          Auto Mechanic for over 10 years.
        </p>
      </Box>

      <Box variant="styles.contactText">
        <p>
          <i className="fa-solid fa-phone"></i> (+1) 253</p>
        <p>
          <i className="fa-solid fa-envelope"></i> robotech83@protonmail.com
        </p>
      </Box>
    </Box>
  );
};
