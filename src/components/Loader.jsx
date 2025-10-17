import React, { useEffect, useState } from "react";
import "../styles/Loader.css";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const markDone = () => setDone(true);

    if (document.readyState === "complete") {
      markDone();
    } else {
      window.addEventListener("load", markDone);
      return () => window.removeEventListener("load", markDone);
    }
  }, []);

  return (
    <div className={`page-loader ${done ? "is-done" : ""}`} aria-hidden={!done}>
      <div className="dot-spinner">
        <div className="dot-spinner__dot" />
        <div className="dot-spinner__dot" />
        <div className="dot-spinner__dot" />
        <div className="dot-spinner__dot" />
        <div className="dot-spinner__dot" />
        <div className="dot-spinner__dot" />
        <div className="dot-spinner__dot" />
        <div className="dot-spinner__dot" />
      </div>
    </div>
  );
}
