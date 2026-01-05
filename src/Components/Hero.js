import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        paddingTop: "80px", // 🔥 FIX
        background: "linear-gradient(135deg, #0b132b, #1c2541, #3a506b)",
      }}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start">

          <div className="col-12 col-md-7">
            <span className="badge bg-success px-3 py-2 mb-3">
              Frontend / Full Stack Developer
            </span>

            <h1 className="fw-bold mt-3 display-6 display-md-4">
              Hi, I'm <span className="text-warning">Vivek Vishwakarma</span>
            </h1>

            <p className="lead mt-3">
              1+ Year Experienced Frontend Developer building
              real-world, production-grade web applications.
            </p>

            <p className="opacity-75">
              Currently working at <b>KraftNexus Tech LLP</b> on aviation software
              solutions including <b>AERODutyPro – FlyX, TrainX, Master Apps</b>.
              Skilled in <b>React, TypeScript, Tailwind CSS, MUI</b>.
            </p>

            <div className="mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <a href="#projects" className="btn btn-warning px-4">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-light px-4">
                Hire Me
              </a>
              <a
                href="./vivekExperience.pdf"
                className="btn btn-outline-light px-4"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="col-12 col-md-5 text-center mt-5 mt-md-0">
            <motion.img
              src="/img2.png"
              alt="Vivek Vishwakarma"
              className="img-fluid mx-auto"
              style={{
                maxWidth: "600px",
                borderRadius: "20px",
                filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.6))",
              }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
