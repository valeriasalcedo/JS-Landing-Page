import "../styles/About.css";

const heroAbout = new URL("../assets/joyas.mp4", import.meta.url).href;
const storyImg = new URL("../assets/about.jpg", import.meta.url).href;

const jessImg = new URL("../assets/JessImg.png", import.meta.url).href;

export default function About() {
  return (
    <div className="about-meet">
      <section className="abt-hero">
        <video
          className="abt-hero__video"
          src={heroAbout}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="abt-hero__overlay" />
        <div className="container abt-hero__content">
          <h1 className="abt-hero__title">About&nbsp;Us</h1>
          <p className="abt-hero__subtitle">
            Refined Service. Honest Value. Since 2007.
          </p>
        </div>
      </section>

      <section className="container abt-card">
        <div className="abt-card__grid">
          <div className="abt-card__media">
            <img src={storyImg} alt="Our Story" />
          </div>
          <div className="abt-card__body">
            <h2 className="abt-card__heading">Our Story</h2>
            <p>
              We provide expert appraisals and transparent offers for gold,
              silver and platinum. Our process is discreet, documentation is
              clear, and payment is immediate.
            </p>
            <p>
              Founded in 2007, we combine white-glove service with deep industry
              expertise to deliver honest value — whether through in-home
              consultations, private appointments, or insured mail-in service.
            </p>
            <div className="abt-pillrow">
              <span className="abt-pill">Integrity</span>
              <span className="abt-pill">Transparency</span>
              <span className="abt-pill">Convenience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="meet-jess">
        <div className="container meet-jess__grid">
          <div className="meet-jess__text">
            <h1 className="meet-jess__bgtitle">Meet</h1>
            <h1 className="meet-jess__bgtitle">Jess</h1>

            <p className="meet-jess__intro">
              Jessica Strikowski, founder of JS Jewelry Buyers, has been a
              trusted licensed jewelry dealer in South Florida for over 18
              years. Originally from New Jersey and raised in South Florida,
              Jessica earned her bachelor’s degree in Marketing with high honors
              from the University of Florida, where she was also a member of the
              club rowing team{" "}
            </p>

            <p>
              Her career began in marketing analytics at The Palm Beach Post and
              later at Office Depot’s corporate headquarters, where she honed
              her skills in data-driven strategy and consumer insights. After
              starting a family in 2001, Jessica’s entrepreneurial spirit
              flourished—she consulted for various companies and even founded an
              online paleo bakery.
            </p>

            <p>
              When the gold market surged in 2007, Jessica recognized an
              opportunity and launched JS Jewelry Buyers. What began as a local
              venture quickly expanded throughout Palm Beach County and across
              the U.S., partnering with other licensed jewelers under her brand.
            </p>
            <p>
              Jessica later spent seven years as Director of Operations in the
              sports and entertainment security consulting industry, continuing
              to buy gold part-time. In 2022, she returned to her passion
              full-time—helping clients sell their fine jewelry with honesty,
              expertise, and the highest level of professionalism.
            </p>
            <p>
              Today, JS Jewelry Buyers is known for providing fair, transparent,
              and top-of-market offers for gold, silver, platinum, and fine
              jewelry—earning the trust of clients throughout South Florida and
              beyond.
            </p>
          </div>

          <div className="meet-jess__imagebox">
            <img
              src={new URL("../assets/JessImg.png", import.meta.url).href}
              alt="Jess"
              className="meet-jess__image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
