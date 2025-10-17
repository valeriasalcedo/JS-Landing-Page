import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ textAlign: "center" }}>
        <nav>
          <a href="#about">About Us</a> {" "}
          <a href="#charities">Charities & Events</a> {" "}
          <a href="#testimonials">Testimonials</a>
        </nav>
        <small>
          © {new Date().getFullYear()} JS Jewelry Buyers — All rights reserved.
        </small>
      </div>
    </footer>
  );
}
