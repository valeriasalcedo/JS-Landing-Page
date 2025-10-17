import React from "react";
import "../styles/Reasons.css";

function Card({ title, children }) {
  return (
    <div className="card">
      <h3 className="h3">{title}</h3>
      <div className="card-text">{children}</div>
    </div>
  );
}

export default function Reasons() {
  return (
    <section className="section dark reasons">
      <div className="container">
        <div className="reasons-content">
        <h2
          className="h2"
          style={{ textAlign: "center", marginTop: 0, marginBottom: 24 }}
        >
          3 REASONS TO SELL YOUR </h2 ><h2
          className="h2"
          style={{ textAlign: "center", marginTop: 0, marginBottom: 24 }}>
          UNWANTED JEWELRY</h2>
       </div>
        <div className="grid">
          <Card title="Hidden Value, Instantly Realized">
            <p>
              That old gold bracelet or tarnished <p>silver necklace could be worth
              more</p> than you think.
            </p>
             <br />
            <p>
              We offer top market prices for all <p>gold, silver, and platinum
              jewelry — </p>regardless of condition.
            </p>
          </Card>

          <Card title={"Simple, Safe &\n Stress-Free"}>
            <p>Choose the method that fits you best:</p>
            <br />
            <p>
              <strong>In-Home Consultation</strong> 
              <p>We come directly to you for
              a </p><p>discreet, complimentary evaluation.</p>
            </p>
             <br />
            <p>
              <strong>Mail-In Service</strong>
              <p>
              Request a free, insured mail-in
              kit</p>
              <p>safe, trackable, and easy to use.</p>
            </p>
          </Card>

          <Card title="Expert Evaluations, Honest Offers">
            <p>
              Our specialists bring years of <p>experience and complete</p>
              transparency to every transaction.
            </p>
             <br />
            <p>
              You’ll always know what your pieces<p>are worth before you sell — </p>and
              get paid the same day we <p>finalize your offer.</p>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
