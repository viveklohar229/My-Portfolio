import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b132b, #1c2541, #3a506b)",
        scrollBehavior: "smooth",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-md-7 text-center text-md-start">
            <span className="badge bg-success px-3 py-2 mb-3">
              Frontend / Full Stack Developer
            </span>

            <h1 className="display-4 fw-bold mt-3">
              Hi, I'm <span className="text-warning">Vivek Vishwakarma</span>
            </h1>

            <p className="lead mt-3">
              1+ Year Experienced Frontend Developer building
              real-world, production-grade web applications.
            </p>

            <p className="opacity-75">
              Currently working at <b>KraftNexus Tech LLP</b> on aviation software
              solutions including <b>AERODutyPro – FlyX, TrainX, Master Apps</b>. 
              Skilled in <b>React, TypeScript, Tailwind CSS, MUI</b> with live project experience.
            </p>

            <div className="mt-4 gap-3 d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
              <a
                href="#projects"
                className="btn btn-warning me-3 px-4"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light px-4"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Hire Me
              </a>

              <a
                href="./vivekExperience.pdf"
                className="btn btn-outline-light px-4"
                download={"./vivekExperience.pdf"}
              >
                Download CV
              </a>
        
            </div>
          </div>

          <div className="col-md-5 text-center mt-5 mt-md-0">
            <motion.img
              src="/img2.png"
              alt="Vivek Vishwakarma"
              className="img-fluid"
              style={{
                maxWidth: "600px",
                borderRadius: "20px",
                filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.6))",
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
