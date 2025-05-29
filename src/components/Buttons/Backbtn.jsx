import React  from "react";

const BackBtn = () => {
  return (
    <div className="nav-back">
      <button className="back-btn" onClick={() => window.history.back()}>
        ← Back
      </button>
    </div>
  );
}
export default BackBtn;