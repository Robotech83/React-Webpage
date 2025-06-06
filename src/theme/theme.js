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
    navLink: {
  textTransform: 'uppercase',
  color: 'text',
  fontWeight: 'bold',
  textDecoration: 'none',
  px: 3,
  py: 2,
  ':hover': {
    color: 'primary',
  },
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

    pageHeader: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '10vh',
      textAlign: 'center',
      px: 3,
      bg: 'background',
      color: 'text',
    },

    pageHeaderTitle: {
      fontSize: 5,
      fontWeight: 'bold',
      mb: 2,
      color: 'primary',
    },

    pageHeaderDescription: {
      fontSize: 2,
      color: 'text',
      opacity: 0.8,
    },
  },

  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 6,
    maxWidth: '5000px',
    mx: 'auto',
    mt: 9, // Add top margin for spacing
    px: 6, // Add horizontal padding for spacing
  },

  card: {
  width: ['200%', '700px'],       // 👈 wider cards for large screens
  backgroundColor: 'background',
  color: 'text',
  borderRadius: 3,
  overflow: 'hidden',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.03)',
  },
  p: 6,                            // Add padding inside the card
  my: 6
  ,                           // Vertical margin between cards
},


  cardTitle: {
    mt: 3,
    mb: 2,
    fontSize: 3,
    fontWeight: 'bold',
  },
  
  cardText: {
    px: 3,
    mb: 3,
    color: 'text',
    opacity: 0.85,
  },
  
  cardLink: {
    display: 'inline-block',
    mt: 2,
    mb: 4,
    px: 3,
    py: 2,
    bg: 'primary',
    color: 'background',
    borderRadius: 2,
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'background 0.3s ease',
    ':hover': {
      backgroundColor: '#e0ac58',
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
