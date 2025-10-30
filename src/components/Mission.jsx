import React from "react";
import "../styles/Mission.css";

export default function Mission() {
  return (
    <section className="section mission">
      <div className="container">
        <h2 className="h2">Our Mission</h2>
        <p>
          At JS Jewelry Buyers, we believe selling your precious metals should
          be simple, <p>secure, and satisfying.</p>
        </p>
        <p className="secondary">
          We combine white-glove service with industry expertise to provide
          honest
          <p>
            evaluations, transparent pricing, and immediate payment — all
            designed around
          </p>
          <p>our comfort and peace of mind.</p>
        </p>
        <hr className="faint" />
        <p className="promise">
          <strong>
            Integrity. Transparency. Convenience. That’s the JS Jewelry Buyers
            promise.
          </strong>
        </p>
      </div>
    </section>
  );
}
