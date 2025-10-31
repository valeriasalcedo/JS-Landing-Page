// src/pages/charities/PartnerWithJS.jsx
import React from "react";
import Section from "../../components/Section";
import "../../styles/Charities.css";

export default function PartnerWithJS() {
  return (
    <div className="charities-partner">
      <Section narrow>
        <section className="partner">
           <h2 className="partner-title">
          <span className="partner-block">Why Partner With</span>
          <span className="partner-script">JS jewelry buyers</span>
        </h2>
          <div className="partner-cards">
  <article className="partner-card">
    <h3 className="partner-card__title">Trusted Experts</h3>
    <p className="partner-card__text">
      Over 17 years of experience in jewelry evaluation and buying.
    </p>
  </article>

  <article className="partner-card">
    <h3 className="partner-card__title">Community-Focused</h3>
    <p className="partner-card__text">
      We love supporting causes that make a difference.
    </p>
  </article>

  <article className="partner-card">
    <h3 className="partner-card__title">Seamless Process</h3>
    <p className="partner-card__text">
      We handle the details—from setup to promotion—to ensure your event runs smoothly.
    </p>
  </article>
</div>

<div className="partner__cta">
    <h3 className="partner__heading">Ready to host a charity event?</h3>
    <p>
      <strong>Let’s make an impact together.</strong> <span role="img" aria-label="mail"></span>
      &nbsp;Contact us at <b>561-762-0730</b> or fill out the form below to start
      planning your charity partnership.
    </p>
  </div>


          <form className="partner__form" action="#" method="post">
            <div className="grid">
              <label><span>Name</span><input type="text" name="name" required /></label>
              <label><span>Email</span><input type="email" name="email" required /></label>
              <label><span>Phone</span><input type="tel" name="phone" /></label>
              <label><span>Organization</span><input type="text" name="organization" /></label>
            </div>
            <label className="full"><span>Message</span><textarea name="message" rows="5" required /></label>
            <button type="submit" className="partner__btn">Start Your Charity Partnership</button>
          </form>
        </section>
      </Section>
    </div>
  );
}
