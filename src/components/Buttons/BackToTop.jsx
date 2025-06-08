import React, { useEffect, useState } from 'react';
import { Button } from 'theme-ui';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        bg: 'primary',
        color: 'background',
        fontSize: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'opacity 0.3s ease-in-out',
        ':hover': {
          bg: 'highlight'
        },
      }}
      aria-label="Back to top"
    >
      ↑
    </Button>
  );
};

export default BackToTop;
