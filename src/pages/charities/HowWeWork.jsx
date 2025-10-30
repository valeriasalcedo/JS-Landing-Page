import React from "react";
import Section from "../../components/Section";
import "../../styles/Charities.css";

export default function HowWeWork() {
  return (
    <div className="charities">
      <Section>
        <h2 className="howWeWork-title">
          <span className="howWeWork-block">Partner With Us for</span>
          <span className="howWeWork-script">your charity event</span>
        </h2>
        <div className="how-sectionbody">
          <p className="intro">
            At <strong>JS Jewelry Buyers</strong>, we believe every piece of
            jewelry has the power to make a difference. We’re proud to partner
            with charitable organizations, community groups, and event hosts to
            turn unwanted jewelry into meaningful contributions for great
            causes.
          </p>
          <div className="steps steps--numbered">
            <div className="step-charities">
              <strong>1. Host Your Event</strong>{" "}
              <p>
                {" "}
                We’ll collaborate with your organization to set up a charity
                appraisal or jewelry-buying event at your location or ours.
                Together, we’ll pick a date, customize signage, and create
                promotional materials to spread the word.
              </p>
            </div>
            <div className="step-charities">
              <strong>2. Bring in Jewelry</strong>{" "}
              <p>
                Guests bring in their unwanted or unworn gold, diamonds,
                watches, or fine jewelry. Our experts provide on-site
                evaluations and immediate purchase offers—always with
                transparency and professionalism.
              </p>
            </div>
            <div className="step-charities">
              <strong>3. Choose Your Impact</strong>{" "}
              <p>
                {" "}
                A portion (or all) of the proceeds can go directly to your
                charity. You decide how the donation is structured—whether it’s
                individual contributions from guests, or a set percentage
                donated by JS Jewelry Buyers.
              </p>
            </div>
            <div className="step-charities">
              <strong>4. Celebrate & Share</strong>{" "}
              <p>
                {" "}
                We’ll help promote your event across social media, and after the
                event we’ll provide a summary of the total raised, along with
                photos and highlights to share with your supporters.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
