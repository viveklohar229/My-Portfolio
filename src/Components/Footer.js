import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0b132b, #1c2541)",
        color: "#fff",
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          
          {/* About Me */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-3 fw-bold">About Me</h5>
            <p style={{ lineHeight: "1.6" }}>
              Passionate Full-Stack Web Developer building scalable web applications.  
              Experienced in <strong>React, TypeScript, Tailwind CSS, MUI</strong> and real-world production projects.  
              Always eager to learn and create meaningful projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-3 fw-bold">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-2 gap-md-4">
              <li>
                <a href="#skills" className="footer-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="footer-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-3 fw-bold">Follow Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://github.com/viveklohar229"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-vishwakarma-176935248/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
          
            </div>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        <div className="text-center small mt-3">
          &copy; {new Date().getFullYear()} Vivek Vishwakarma. All rights reserved.
        </div>
      </div>

]      <style jsx>{`
        .footer-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .footer-link:hover {
          color: #00c6ff;
          transform: translateY(-3px);
        }
        .social-icon {
          color: #fff;
          transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
        }
        .social-icon:hover {
          color: #00c6ff;
          transform: scale(1.3);
          text-shadow: 0 0 8px #00c6ff;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
