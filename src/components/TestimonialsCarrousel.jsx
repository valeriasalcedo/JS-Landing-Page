import React, { useRef } from "react";
import "../styles/Testimonials-fancy.css";

export default function TestimonialsCarousel({ title = "Testimonials", items = [] }) {
  const scrollerRef = useRef(null);

  const scrollBy = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(".tc-card");
    const amount = card ? card.clientWidth + 16 : 320; // 16 = gap
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="tc">
      <div className="tc-head">
        <span className="tc-badge">Testimonials</span>
        <h2 className="tc-title">
          What Our <span>Customers</span> Are Saying
        </h2>
      </div>

      <div className="tc-scroller" ref={scrollerRef}>
        {items.map((t, i) => (
          <article className="tc-card" key={i}>
            {t.image && (
              <div className="tc-media">
                <img src={t.image} alt={t.title || t.name} loading="lazy" />
              </div>
            )}

            <div className="tc-body">
              <h3 className="tc-card-title">{t.title || "Excellent Work!"}</h3>
              <p className="tc-quote">“{t.text}”</p>

              <div className="tc-author">
                {t.avatar && <img className="tc-avatar" src={t.avatar} alt={t.name} />}
                <div className="tc-author-text">
                  <strong>{t.name}</strong>
                  {t.org && <span className="tc-org"> · {t.org}</span>}
                  {typeof t.stars === "number" && (
                    <div className="tc-stars" aria-label={`${t.stars} out of 5`}>
                      {"★".repeat(t.stars)}
                      <span className="tc-stars--off">{"★".repeat(5 - t.stars)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="tc-controls">
        <button className="tc-arrow" onClick={() => scrollBy(-1)} aria-label="Previous">‹</button>
        <button className="tc-arrow" onClick={() => scrollBy(1)} aria-label="Next">›</button>
      </div>
    </section>
  );
}
