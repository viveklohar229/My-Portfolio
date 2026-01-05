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
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      // 🔥 CLOSE MOBILE MENU AFTER CLICK
      const nav = document.getElementById("navbarNav");
      nav.classList.remove("show");
    }
  };

  const menuItems = ["home", "skills", "projects", "about", "contact"];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold text-white"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Vivek Vishwakarma
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            {menuItems.map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link text-white px-3 text-capitalize"
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

            <li className="nav-item mt-2 mt-lg-0 ms-lg-3">
              <a
                href="#contact"
                className="btn btn-warning btn-sm px-3"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Hire Me
              </a>
            </li>

            <li className="nav-item mt-2 mt-lg-0 ms-lg-3">
              <a
                href="./vivekExperience.pdf"
                className="btn btn-outline-warning btn-sm px-3"
                download
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
