import React from "react";
import "../styles/Sections.css";

export default function SplitSection({ image, alt="", title, children, imageLeft=true }) {
  return (
    <section className="split">
      <div className="container split__grid">
        {imageLeft && <div className="split__media"><img src={image} alt={alt} loading="lazy" /></div>}
        <div className="split__content">
          {title && <h3 className="split__title">{title}</h3>}
          <div className="split__text">{children}</div>
        </div>
        {!imageLeft && <div className="split__media"><img src={image} alt={alt} loading="lazy" /></div>}
      </div>
    </section>
  );
}
