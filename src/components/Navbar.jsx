import { useEffect } from "react"; 
import "../styles/Navbar.css";

export default function Navbar() {
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* IZQUIERDA */}
        <nav className="nav-left">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#charities">Charities</a>
        </nav>

        {/* LOGO CENTRADO */}
        <a href="#home" className="brand" aria-label="JS Jewelry Buyers">
          <div className="logo">
            <img src={new URL("../assets/Logo.png", import.meta.url).href} alt="JS Jewelry Buyers" />
          </div>
        </a>

        {/* DERECHA */}
        <nav className="nav-right">
          <a href="#testimonials">Testimonials</a>
          <span className="call">561-762-0730</span>
        </nav>
      </div>
    </header>
  );
}