import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "40px",
        background: "linear-gradient(135deg, #0b132b, #1c2541, #3a506b)",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start g-5">
          <div className="flex col-12 col-md-7 order-2 order-md-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <span className="badge bg-success px-3 py-2 shadow-sm d-inline-flex align-items-center"
                  style={{ minHeight: "35px", minWidth: "160px", justifyContent: "center" }}>
                  <Typewriter
                    options={{
                      strings: [
                        " Available for Hire",
                        "I'm Open to Opportunities",
                        "Let's Build Something Great Together",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 75,
                      cursor: "|",
                      wrapperClassName: "fw-bold"
                    }}
                  />
                </span>
              </div>

              <h1 className="fw-bold mt-2 display-5 display-md-4" style={{ minHeight: "100px" }}>
                <span className="me-2">Hi, I'm</span>
                <br className="d-md-none" />
                <span className="text-warning d-inline-block">
                  <Typewriter
                    options={{
                      strings: [
                        "Vivek Vishwakarma",
                        "Frontend Developer",
                        "MERN Stack Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 75,
                      cursor: "|",
                    }}
                  />
                </span>
              </h1>

              <p className="lead mt-3 px-2 px-md-0 opacity-90">
                6 month Experienced Frontend Developer building
                real-world, production-grade web applications at <b>KraftNexus Tech LLP</b>.
              </p>

              <div className="mt-4 d-grid d-sm-flex gap-3 justify-content-center justify-content-md-start px-4 px-md-0">
                <a href="#projects" className="btn btn-warning px-4 py-2 fw-bold shadow">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-outline-light px-4 py-2">
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>

          <div className="col-12 col-md-5 text-center order-1 order-md-2 mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src="/img2.png"
                alt="Vivek"
                className="img-fluid mx-auto"
                style={{
                  maxWidth: "100%",
                  borderRadius: "20px",
                  filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.6))",
                }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        /* Cursor Styling */
        .Typewriter__cursor {
          color: #ffc107;
          font-weight: 300;
          margin-left: 5px;
        }

        /* Responsive Text Adjustment */
        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem !important; /* Mobile par text thoda chota taaki ek line me aaye */
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;