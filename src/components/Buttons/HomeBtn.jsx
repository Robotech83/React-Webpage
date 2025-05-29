import React from "react";

const HomeBtn = () => {
  return (
    <div className="nav-home">
      <button className="home-btn" onClick={() => window.location.href = '/'}>
        Home
      </button>
    </div>
  );
}

export default HomeBtn;
// This component represents a button that redirects the user to the home page when clicked.