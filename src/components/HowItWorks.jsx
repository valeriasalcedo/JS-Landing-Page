import React from "react";
import "../styles/HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="section hiw" id="how">
      <div className="container hiw-grid">
        <h2 className="hiw-title">
          <span className="hiw-block">HOW IT</span>
          <span className="hiw-script">works</span>
        </h2>

        <div className="grid">
          <div className="step">
            <h3 className="step-title">
              <span className="opt">OPTION 1</span>
              <span className="label">
                IN–HOME
                <br />
                CONSULTATION
              </span>
            </h3>
            <ul>
              <li>Schedule your appointment online or by phone.</li>
              <li>
                Our mobile specialists visit your home or office at your
                convenience.
              </li>
              <li>
                We evaluate your items on-site and offer immediate payment.
              </li>
            </ul>
          </div>

          <div className="step">
            <h3 className="step-title2">
              <span className="opt">OPTION 2</span>
              <span className="label">MAIL–IN SERVICE</span>
            </h3>
            <ul>
              <li>Request your complimentary, insured mail-in kit.</li>
              <li>Send your items safely using our prepaid label.</li>
              <li>We evaluate and contact you with a same-day offer.</li>
              <li>
                Approve and get paid instantly by check, direct deposit, or
                wire.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
