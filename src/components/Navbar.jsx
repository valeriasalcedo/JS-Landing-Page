import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", open);
    return () => document.documentElement.classList.remove("no-scroll");
  }, [open]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <nav className="nav-left">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/charities">Charities</NavLink>
        </nav>

        <Link to="/" className="brand" aria-label="JS Jewelry Buyers">
          <div className="logo">
            <img
              src={new URL("../assets/Logo.png", import.meta.url).href}
              alt="JS Jewelry Buyers"
            />
          </div>
        </Link>

        <nav className="nav-right">
          <NavLink to="/testimonials">Testimonials</NavLink>
          <span className="call">561-762-0730</span>
        </nav>

        <button
          className={`burger ${open ? "is-open" : ""}`}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <button
        className={`backdrop ${open ? "show" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        tabIndex={-1}
      />

      <aside
        id="mobile-panel"
        className={`mobile-panel ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <nav className="mobile-menu" onClick={() => setOpen(false)}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/charities">Charities</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>

          <span className="call call-mobile">561-762-0730</span>
        </nav>
      </aside>
    </header>
  );
}
