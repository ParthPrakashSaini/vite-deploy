import React from "react";
import "./Footer.css";

const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return (
    <>
      <footer>
        <p>Copyright © {currentYear}</p>
      </footer>
    </>
  );
}

export default Footer;
