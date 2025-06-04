/** @jsxImportSource theme-ui */
import { Box, Button } from "theme-ui";

const SideMenu = ({ onClose }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "250px",
        bg: "black",
        color: "white",
        zIndex: 1000,
        p: 3,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Button
        onClick={onClose}
        sx={{
          mb: 3,
          color: "#ff7714",
          bg: "transparent",
          fontSize: 3,
          p: 0,
          cursor: "pointer",
        }}
      >
        <i className="fa-solid fa-times" />
      </Button>
      <p>⚙️ Robotics</p>
      <p>🧠 AI Projects</p>
      <p>🕹️ Game Dev</p>
      <p>📞 Contact</p>
    </Box>
  );
};

export default SideMenu;
