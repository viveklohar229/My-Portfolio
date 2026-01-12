import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      const navMenu = document.getElementById("navbarNav");
      if (navMenu.classList.contains("show")) {
        const bsCollapse = new window.bootstrap.Collapse(navMenu);
        bsCollapse.hide();
      }
    }
  };

  const menuItems = ["home", "skills", "projects", "about", "contact"];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${
        scrolled ? "navbar-dark bg-dark shadow-lg" : "navbar-dark bg-transparent"
      }`}
      style={{ transition: "0.3s ease-in-out" }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#home"
          style={{ fontSize: "1.5rem", color: "#ffc107" }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          VIVEK
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center py-4 py-lg-0">
            {menuItems.map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link text-white px-3 text-capitalize fw-semibold"
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}

            <div className="d-flex flex-column flex-lg-row gap-2 ms-lg-3 mt-3 mt-lg-0 px-4 px-lg-0">
              <a
                href="#contact"
                className="btn btn-warning btn-sm fw-bold"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Hire Me
              </a>
              <a
                href="./vivek6Months.pdf"
                className="btn btn-outline-warning btn-sm"
                download
              >
                Download CV
              </a>
            </div>
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: rgba(11, 19, 43, 0.95); /* Dark semi-transparent bg */
            border-radius: 15px;
            margin-top: 15px;
            padding: 10px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;