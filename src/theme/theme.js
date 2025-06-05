export const theme = {
  initialColorModeName: 'default',
  useColorModeMediaQuery: true,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#ff7714',
    modes: {
      dark: {
        text: '#fff',
        background: '#111',
        primary: '#f97316',
      },
    },
  },

  styles: {
    sideMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: '250px',
      bg: 'background',
      color: 'text',
      zIndex: 1000,
      p: 3,
      transition: 'transform 0.3s ease-in-out',
    },
    menuText: {
      fontSize: 1,
      lineHeight: 'body',
      mb: 3,
    },
    contactText: {
      fontSize: 1,
      mt: 3,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },
    sideImage: {
      width: '100%',
      height: 'auto',
      maxHeight: '200px',
      objectFit: 'cover',
      borderTopLeftRadius: '9999px',
      borderTopRightRadius: '9999px',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      overflow: 'hidden',
      mb: 3,
      boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
    },
  },

  buttons: {
    close: {
      bg: 'transparent',
      color: 'primary',
      fontSize: 3,
      p: 0,
      cursor: 'pointer',
      mb: 3,
    },
  },

  fonts: {
    body: 'system-ui, sans-serif',
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  space: [0, 4, 8, 16, 32, 64],
};
