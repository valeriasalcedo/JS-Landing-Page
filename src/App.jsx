import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Reasons from "./components/Reasons.jsx";
import WhatWeBuy from "./components/WhatWeBuy.jsx";
import Mission from "./components/Mission.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollTopButton.jsx";
import Loader from "./components/Loader.jsx";

export default function App() {
  return (
    <>
      <Loader />
      <ScrollToTopButton />
      <Navbar />
      <main>
        <Hero />
        <Reasons />
        <WhatWeBuy />
        <Mission />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
