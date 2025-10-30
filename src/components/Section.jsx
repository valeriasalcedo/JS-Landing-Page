import React from "react";
import "../styles/Sections.css";

export default function Section({ id, eyebrow, title, children, narrow }) {
  return (
    <section id={id} className={`sec ${narrow ? "sec--narrow" : ""}`}>
      <div className="container">
        {eyebrow && <div className="sec__eyebrow">{eyebrow}</div>}
        {title && <h2 className="sec__title">{title}</h2>}
        <div className="sec__body">{children}</div>
      </div>
    </section>
  );
}
