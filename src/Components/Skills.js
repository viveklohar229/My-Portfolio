import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

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
        { name: "Authentication & Authorization", width: 85 },
        { name: "API Testing / Postman", width: 80 },
      ],
    },
    {
      title: "Tools & Other",
      skills: [
        { name: "Cloudinary", width: 85 },
        { name: "Git & GitHub", width: 90 },
        { name: "Responsive Design", width: 95 },
        { name: "Firebase", width: 80 },
        { name: "Flutter", width: 50 },
        { name: "DevOps", width: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-5"
      style={{ minHeight: "100vh", background: "#0b132b", color: "#fff" }}
    >
      <div className="container">
        <motion.h2
          className="text-center mb-5 display-5 fw-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        <div className="row">
          {skillCategories.map((cat, idx) => (
            <div className="col-12 col-md-4 mb-4" key={idx}>
              <motion.h5
                className="text-center text-md-start mb-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.2 }}
              >
                {cat.title}
              </motion.h5>

              {cat.skills.map((skill, i) => (
                <Skill
                  key={i}
                  name={skill.name}
                  width={skill.width}
                  animate={animate}
                  delay={i * 0.2}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skill({ name, width, animate, delay }) {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: animate ? 1 : 0, x: animate ? 0 : -50 }}
      transition={{ duration: 1, delay: delay }}
    >
      <div className="d-flex justify-content-between mb-1">
        <span>{name}</span>
        <span>{animate ? `${width}%` : "0%"}</span>
      </div>
      <div
        className="progress"
        style={{
          height: "14px",
          borderRadius: "12px",
          background: "#1c2541",
          overflow: "hidden",
        }}
      >
        <motion.div
          className="progress-bar"
          style={{
            borderRadius: "12px",
            background: "linear-gradient(90deg, #007bff, #00c6ff)",
          }}
          initial={{ width: 0 }}
          animate={{ width: animate ? `${width}%` : "0%" }}
          transition={{ duration: 1.5, delay: delay }}
        />
      </div>
    </motion.div>
  );
}
