import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", width: 90 },
        { name: "HTML5 & CSS3", width: 95 },
        { name: "JavaScript", width: 80 },
        { name: "TypeScript", width: 80 },
        { name: "Bootstrap 5", width: 92 },
        { name: "Material-UI", width: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", width: 88 },
        { name: "Express.js", width: 85 },
        { name: "MongoDB", width: 80 },
        { name: "RESTful APIs", width: 90 },
        { name: "Postman", width: 80 },
      ],
    },
    {
      title: "Tools & Other",
      skills: [
        { name: "Cloudinary", width: 85 },
        { name: "Git & GitHub", width: 90 },
        { name: "Responsive Design", width: 95 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-5"
      style={{ 
        minHeight: "100vh", 
        background: "#0b132b", 
        color: "#fff",
        overflowX: "hidden" 
      }}
    >
      <div className="container px-4">
        <motion.h2
          className="text-center mb-5 display-5 fw-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-warning">Skills</span>
        </motion.h2>

        <div className="row g-4">
          {skillCategories.map((cat, idx) => (
            <div className="col-12 col-md-4 mb-4" key={idx}>
              <motion.h5
                className="text-center text-md-start mb-4 fw-bold text-info"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {cat.title}
              </motion.h5>

              {cat.skills.map((skill, i) => (
                <Skill
                  key={i}
                  name={skill.name}
                  width={skill.width}
                  delay={i * 0.1}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skill({ name, width, delay }) {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-2">
        <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>{name}</span>
        <span className="text-warning small">{width}%</span>
      </div>
      <div
        className="progress"
        style={{
          height: "8px", 
          borderRadius: "10px",
          background: "#1c2541",
          overflow: "hidden",
          border: "none"
        }}
      >
        <motion.div
          className="progress-bar"
          style={{
            borderRadius: "10px",
            background: "linear-gradient(90deg, #ffc107, #ff8c00)", 
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}