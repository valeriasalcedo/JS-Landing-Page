import React from "react";
import "../styles/WhatWeBuy.css";

export default function WhatWeBuy() {
  return (
    <section id="about" className="wwb">
      <img
        className="wwb-bg"
        src={new URL("../assets/wwb.png", import.meta.url).href}
        alt=""
        aria-hidden="true"
      />
      <div className="wwb-overlay" aria-hidden="true"></div>

      <div className="container wwb-content">
        <div className="wwb-right">
          <div className="smallcaps">
            WHAT WE <span className="script">buy?</span>
          </div>
          <h2 className="h2">We specialize in precious metals, including:</h2>
          <ul>
            <li>Gold jewelry (10k, 14k, 18k, 22k, 24k)</li>
            <li>Silver jewelry, coins, and flatware</li>
            <li>Platinum pieces and scrap metals</li>
            <li>Broken, mismatched, or estate jewelry</li>
            <li>If it’s made of gold, silver, or platinum — we buy it.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
