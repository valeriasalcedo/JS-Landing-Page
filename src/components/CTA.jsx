import React from "react";
import "../styles/CTA.css";

export default function CTA() {
  return (
    <section id="contact" className="section cta">
      <div className="containe-cta">
        <div className="panel-cta">
          <h2 className="h2-cta">
            Serving South Florida & <span className="accent">beyond</span>
          </h2>
          <p>
            Located in Boca Raton, FL — offering local, in-home consultations
            and nationwide mail-in service for your convenience.
          </p>
          <a className="btn-cta" href="#">
            REQUEST YOUR FREE <br></br>MAIL‑IN KIT OR CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}
