import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import CharitiesLayout from "./pages/charities/CharitiesLayout.jsx";
import WhyWeLove from "./pages/charities/WhyWeLove.jsx";
import HowWeWork from "./pages/charities/HowWeWork.jsx";
import PartnerWithJS from "./pages/charities/PartnerWithJs.jsx";
import Loader from "./components/Loader.jsx";
import { useRouteLoader } from "./hooks/useRouteLoader.js";

export default function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/charities" element={<CharitiesLayout />}>
          <Route index element={<WhyWeLove />} />
          <Route path="how-we-work" element={<HowWeWork />} />
          <Route path="partner-with-js" element={<PartnerWithJS />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}
