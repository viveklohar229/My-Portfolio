import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-3">About Me</h5>
            <p>
              Passionate full-stack developer building scalable web apps.
              Always eager to learn and create meaningful projects.
            </p>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-2 gap-md-4">
              <li><a href="#skills" className="text-white text-decoration-none footer-link">Skills</a></li>
              <li><a href="#projects" className="text-white text-decoration-none footer-link">Projects</a></li>
              <li><a href="#contact" className="text-white text-decoration-none footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-3">Follow Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://github.com/viveklohar229" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/vivek-vishwakarma-a43493278/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} Vivek Vishwakarma. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: #0d6efd;
          text-decoration: underline;
          transition: color 0.3s ease;
        }
        .social-icon {
          color: white;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .social-icon:hover {
          color: #0d6efd;
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
