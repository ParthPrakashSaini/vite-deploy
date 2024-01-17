import React from "react";
import "./Header.css";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <>
      <div className="nav">
        <h1>
          <HighlightIcon />
          Kepper
        </h1>
      </div>
    </>
  );
}

export default Header;
