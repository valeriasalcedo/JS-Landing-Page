import Hero from "../components/Hero.jsx";
import Reasons from "../components/Reasons.jsx";
import WhatWeBuy from "../components/WhatWeBuy.jsx";
import Mission from "../components/Mission.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import CTA from "../components/CTA.jsx";
import ScrollToTopButton from "../components/ScrollTopButton.jsx";
import Loader from "../components/Loader.jsx";
import "../index.css"

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollToTopButton />
      <main>
        <Hero />
        <Reasons />
        <WhatWeBuy />
        <Mission />
        <HowItWorks />
        <CTA />
      </main>
    </>
  );
}
