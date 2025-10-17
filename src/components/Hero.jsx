
import React from "react";
import "../styles/Hero.css";

export default function Hero() {
  return (  
<section id="home" className="hero hero--centered-left">
  <img className="hero-bg" src={new URL("../assets/Hero.png", import.meta.url).href} alt="" aria-hidden="true" />
  <div className="hero-overlay" aria-hidden="true"></div>

  <div className="container hero-content">
    <div className="hero-left">
      <div className="badge">TRUSTED SINCE 2007</div>
      <h1>Expert Appraisal. Honest Value. For Every Precious Piece.</h1>
      <p className="lead">Refined Service. Remarkable Value.</p>
      <div className="cta-hero">
        <a className="btn" href="#contact">LEARN MORE</a>
      </div>
    </div>
  </div>

  <div className="note smallcaps">
    JS JEWELRY BUYERS PAYS TOP DOLLAR FOR GOLD, PLATINUM, SILVER, AND OTHER PRECIOUS METALS. FAIR. FAST. SECURE.
  </div>
</section>
    );}/* ===== HERO FINAL ===== */
