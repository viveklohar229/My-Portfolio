import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "AERODutyPro - FlyX",
      description: "A live aviation operations application handling flight schedules, pilot duty limits, and DGCA compliance.",
      github: "#",
      live: "#",
      type: "company",
    },
    {
      title: "AERODutyPro - TrainX",
      description: "Crew training and license management system with automated alerts and schedule tracking.",
      github: "#",
      live: "#",
      type: "company",
    },
    {
      title: "AERODutyPro - Master Application",
      description: "Centralized admin module for aircraft and crew. Powers FlyX and TrainX applications.",
      github: "#",
      live: "#",
      type: "company",
    },
    {
      title: "ViniDashboard",
      description: "Sleek responsive admin dashboard with React and Bootstrap, featuring dynamic charts.",
      github: "https://github.com/viveklohar229/adminvinidashpanel",
      live: "https://vinidashboard.onrender.com/",
      type: "personal",
    },
    {
      title: "ViniStore",
      description: "Full-stack e-commerce platform with secure payment integration and user profiles.",
      github: "https://github.com/viveklohar229/vinistore",
      live: "https://vinistore.netlify.app/",
      type: "personal",
    },
    {
      title: "YouTube Clone",
      description: "A YouTube-like frontend platform with video browsing and search functionality.",
      github: "https://github.com/viveklohar229/yt-clone",
      live: "https://viniyoutubeclone.netlify.app/",
      type: "personal",
    },
  ];

  const cardVariants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", bounce: 0.2, duration: 0.6 } 
    },
  };

  return (
    <section
      id="projects"
      className="py-5"
      style={{ 
        minHeight: "100vh", 
        backgroundColor: "#0b132b", 
        color: "#fff",
        overflowX: "hidden" 
      }}
    >
      <div className="container px-4">
        <h2 className="text-center mb-5 display-5 fw-bold">Projects</h2>
        
        <div className="row justify-content-center g-4">
          {projectList.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={index}>
              <motion.div
                className="card w-100 shadow-lg border-0"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                style={{ 
                  background: "#1c2541", 
                  borderRadius: "15px",
                  overflow: "hidden" 
                }}
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                <div className="card-body d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title text-warning fw-bold mb-0">{project.title}</h5>
                  </div>
                  
                  <p className="text-light opacity-75 small flex-grow-1 mb-4" style={{ lineHeight: "1.5" }}>
                    {project.description}
                  </p>
                  
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="btn btn-outline-light btn-sm px-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className="btn btn-warning btn-sm px-3 fw-bold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>

                  <div className="mt-2">
                    <span
                      className={`badge ${
                        project.type === "personal"
                          ? "bg-primary"
                          : "bg-success"
                      } rounded-pill px-3 py-2`}
                      style={{ fontSize: "0.7rem", letterSpacing: "1px" }}
                    >
                      {project.type.toUpperCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}