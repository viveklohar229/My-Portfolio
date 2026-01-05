import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-5 d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1c2541, #0b132b)",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <motion.img
              src="/img2.png"
              alt="Vivek Vishwakarma"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "300px", boxShadow: "0 15px 30px rgba(0,0,0,0.6)" }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* Right Text */}
          <div className="col-md-7">
            <motion.h2
              className="mb-4 display-5 fw-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <p>
                I'm <strong>Vivek Vishwakarma</strong>, a passionate Full-Stack Web Developer with over 1 year of hands-on experience building modern, scalable web applications. I’ve worked on **real-world projects** at <strong>KraftNexus Tech LLP</strong>, including <strong>FlyX, TrainX, and Master Application</strong>, streamlining aviation operations and crew management.
              </p>

              <p>
                My expertise lies in <strong>React.js, TypeScript, Tailwind CSS, MUI</strong>, and building **responsive, production-ready applications**. I have solid experience with tools like 
                <span className="badge bg-warning text-dark mx-1">Git & GitHub</span>, 
                <span className="badge bg-warning text-dark mx-1">Cloudinary</span>, and deploying apps to 
                <span className="badge bg-warning text-dark mx-1">Render</span> and 
                <span className="badge bg-warning text-dark mx-1">Netlify</span>.
              </p>

              <p>
                I’ve also created personal projects like **ViniStore, ViniDashboard, Get Me Chai Coffee, YouTube Clone, and Spotify Clone**, which gave me **full-stack development experience** including frontend design, backend APIs, database integration, and deployment.
              </p>

              <p>
                I enjoy learning new technologies, solving complex problems, and delivering **high-quality solutions** that make an impact. My goal is to contribute to innovative projects while continuing to grow as a developer.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
