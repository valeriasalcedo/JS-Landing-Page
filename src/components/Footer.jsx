import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ textAlign: "center" }}>

        <small>
          © {new Date().getFullYear()} JS Jewelry Buyers — All rights reserved.
        </small>
      </div>
    </footer>
  );
}
