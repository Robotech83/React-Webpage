import React from 'react';
import { Box, Text, Link } from 'theme-ui';


export const ProjectCrd = ({ title, description, github, children }) => {
  return (
    <Box variant="styles.cardGrid">
      <Box variant="styles.card">
        {/* Title */}
        <Text as="h3" variant="styles.cardTitle">
          {title}
        </Text>

        {/* Description */}
        <Text variant="styles.cardText">
          {description}
        </Text>

        {/* Optional iframe or child content */}
        {children && (
          <Box variant="styles.iframeContainer">
            {children}
          </Box>
        )}

        {/* GitHub Link */}
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          variant="styles.cardLink"
        >
          View on GitHub
        </Link>
      </Box>
    </Box>
  );
};
