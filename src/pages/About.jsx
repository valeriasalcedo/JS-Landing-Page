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
              I lead our client services with 15+ years of appraisal experience.
              My approach blends precision, discretion, and genuine
              care—ensuring every client feels informed and confident throughout
              the process.
            </p>

            <p>
              I believe every piece tells a story. My job is to honor that story
              and deliver honest, transparent value with clear documentation and
              immediate payment.
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
