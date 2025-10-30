import React from "react";
import TestimonialsCarousel from "../components/TestimonialsCarrousel";

const data = [
  {
    title: "Excellent Work!",
    text: "Professional, transparent, and donor-friendly.",
    name: "Alicia Gomez",
    org: "Hearts Foundation",
    stars: 5,
    image: new URL("../../assets/charity-1.jpg", import.meta.url).href,
  },
  {
    title: "Seamless & Secure",
    text: "Simple and secure—funds delivered immediately.",
    name: "Mark Nguyen",
    org: "Bright Kids Charity",
    stars: 5,
    image: new URL("../../assets/charity-2.jpg", import.meta.url).href,
  },
  {
    title: "Great Communication",
    text: "Fair offers and excellent communication.",
    name: "Sophie Turner",
    org: "Community Care Network",
    stars: 5,
    image: new URL("../../assets/charity-3.jpg", import.meta.url).href,
  },
];

export default function CharityTestimonials() {
  return (
    <div className="charities--testimonials">
      <TestimonialsCarousel items={data} />
    </div>
  );
}
