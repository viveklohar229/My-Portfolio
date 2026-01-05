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
        <div className="row align-items-center text-center text-md-start">

          {/* Image */}
          <div className="col-12 col-md-5 mb-4 mb-md-0">
            <motion.img
              src="/img2.png"
              alt="Vivek Vishwakarma"
              className="img-fluid rounded-circle mx-auto d-block"
              style={{
                maxWidth: "400px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
              }}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Text */}
          <div className="col-12 col-md-7">
            <motion.h2
              className="mb-4 fw-bold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
                I'm <strong>Vivek Vishwakarma</strong>, a passionate Full-Stack Web Developer with
                over 1 year of hands-on experience working on real-world production applications at
                <strong> KraftNexus Tech LLP</strong>, including
                <strong> FlyX, TrainX, and Master Application</strong>.
              </p>

              <p>
                My expertise includes <strong>React.js, TypeScript, Tailwind CSS, MUI</strong> and
                building responsive, production-ready UIs. I regularly work with
                <span className="badge bg-warning text-dark mx-1">Git & GitHub</span>
                <span className="badge bg-warning text-dark mx-1">Cloudinary</span>
                <span className="badge bg-warning text-dark mx-1">Render</span>
                <span className="badge bg-warning text-dark mx-1">Netlify</span>.
              </p>

              <p>
                I’ve built personal projects like <strong>ViniStore</strong>,
                <strong> ViniDashboard</strong>, <strong>Get Me Chai Coffee</strong>,
                <strong> YouTube Clone</strong>, and <strong>Spotify Clone</strong>,
                gaining strong full-stack development experience.
              </p>

              <p className="mb-0">
                I enjoy learning new technologies, solving problems, and delivering high-quality
                solutions that create real impact.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
