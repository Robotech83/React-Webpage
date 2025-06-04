/** @jsxImportSource theme-ui */
import { IconButton } from "theme-ui";

const Hamburger = ({ onToggle }) => {
  return (
    <IconButton
      onClick={onToggle}
      sx={{
        bg: "transparent",
        color: "#ff7714",
        ml: "auto",
        fontSize: 4,
        p: 2,
        cursor: "pointer",
      }}
    >
      <i className="fa-solid fa-bars" />
    </IconButton>
  );
};

export default Hamburger;
