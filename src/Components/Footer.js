import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0b132b, #1c2541)",
        color: "#fff",
        paddingTop: "50px",
        paddingBottom: "20px",
        overflowX: "hidden", 
      }}
    >
      <div className="container px-4">
        <div className="row text-center text-md-start g-4">
          
          {/* About Me */}
          <div className="col-12 col-md-4">
            <h5 className="mb-3 fw-bold" style={{ color: "#ffc107" }}>About Me</h5>
            <p style={{ lineHeight: "1.6", fontSize: "0.9rem" }}>
              Passionate Full-Stack Web Developer building scalable web applications.  
              Experienced in <strong>React, TypeScript, and Tailwind CSS</strong>.  
              Always eager to learn and create meaningful projects.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="mb-3 fw-bold" style={{ color: "#ffc107" }}>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a href="#skills" className="footer-link">Skills</a>
              </li>
              <li>
                <a href="#projects" className="footer-link">Projects</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="mb-3 fw-bold" style={{ color: "#ffc107" }}>Follow Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-4">
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

        <hr className="border-secondary mt-5" />

        <div className="text-center small mt-3 opacity-75">
          &copy; {new Date().getFullYear()} Vivek Vishwakarma. All rights reserved.
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-link {
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: #ffc107 !important;
          transform: translateX(5px);
        }
        .social-icon {
          color: #fff;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: #ffc107 !important;
          transform: translateY(-5px);
        }
      `}} />
    </footer>
  );
}

export default Footer;