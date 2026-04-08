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
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start g-4 overflow-hidden">

          <div className="col-12 col-md-5">
            <motion.img
              src="/img2.png"
              alt="Vivek Vishwakarma"
              className="img-fluid rounded-circle mx-auto d-block"
              style={{
                maxWidth: "80%",
                height: "auto",
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.6)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="col-12 col-md-7">
            <motion.h2
              className="mb-4 fw-bold"
              style={{ fontSize: "calc(1.5rem + 1.5vw)" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="px-2 px-md-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="lead fs-6 fs-md-5">
                I'm <strong>Vivek Vishwakarma</strong>, a passionate Data Analyst and Full-Stack Developer with
                hands-on experience in building real-world applications and data-driven solutions at
                <strong> KraftNexus Tech LLP</strong>.
              </p>

              <div className="mb-3 d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
                <span className="badge bg-warning text-dark">Python</span>
                <span className="badge bg-warning text-dark">SQL</span>
                <span className="badge bg-warning text-dark">Power BI</span>
                <span className="badge bg-warning text-dark">Excel</span>
                <span className="badge bg-warning text-dark">Pandas</span>
                <span className="badge bg-warning text-dark">NumPy</span>
                <span className="badge bg-warning text-dark">React.js</span>
                <span className="badge bg-warning text-dark">Node.js</span>
                <span className="badge bg-warning text-dark">Git & GitHub</span>
              </div>

              <p className="small">
                I’ve worked on data analytics projects like <strong>Sales Analytics Dashboard</strong>,
                <strong> Vendor Performance Analysis</strong>, and <strong> Amazon Global Sales Dashboard</strong>,
                along with full-stack applications like <strong>ViniStore</strong> and
                <strong> ViniDashboard</strong>.
              </p>

              <p className="mb-0 small">
                I specialize in transforming raw data into actionable insights and building scalable applications.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}