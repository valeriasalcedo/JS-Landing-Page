import React from "react";
import "../styles/Sections.css";

export default function TestimonialCard({ text, name, org, avatar }) {
  return (
    <article className="tcard">
      {avatar && <img className="tcard__avatar" src={avatar} alt="" />}
      <p className="tcard__text">“{text}”</p>
      <div className="tcard__meta"><strong>{name}</strong>{org && <span> · {org}</span>}</div>
    </article>
  );
}
