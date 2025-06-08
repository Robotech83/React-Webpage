import React from "react";
import { Box, Text, NavLink } from "theme-ui";
import * as styles from "./footer.styles";

const Footer = () => {

  const socialArr = [
    { name: "GitHub", url:"github.com/robotech83"},
    { name: "LinkedIn", url:"linkedin.com/in/robotech83"},
    { name: "Twitter", url:"twitter.com/robotech83"},
    { name: "Instagram", url:"instagram.com/robotech83"},
    { name: "YouTube", url:"youtube.com/robotech83"},
  ];


  return (
    <Box
      as="footer"
      sx={styles.footerWrapper}
    >
      <Box>
        <Text sx={styles.footerHeader}>Follow Me Here!</Text>
          <Box sx={styles.linkWrapper}>
          {socialArr.map((social, index) => (
            <NavLink
              key={index}
              href={`https://${social.url}`} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={styles.footerLink}
            >
              {social.name}
            </NavLink>
          ))}
        </Box>
      </Box>

       <Box>2</Box>
       <Box>3</Box>
       <Box>4</Box>
    </Box>
  );
};

export default Footer;
