import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "AERODutyPro - FlyX",
      description:
        "A live aviation operations application handling flight schedules, pilot duty limits, DGCA compliance, and real-time flight data monitoring.",
      github: "#",
      live: "#",
      type: "company",
    },
    {
      title: "AERODutyPro - TrainX",
      description:
        "Crew training and license management system with automated alerts, schedule tracking, and document management to ensure audit compliance.",
      github: "#",
      live: "#",
      type: "company",
    },
    {
      title: "AERODutyPro - Master Application",
      description:
        "Centralized admin module for aircraft, crew, and flight operations. Powers FlyX and TrainX applications with live production data.",
      github: "#",
      live: "#",
      type: "company",
    },
    {
      title: "ViniDashboard (Admin Template)",
      description:
        "A sleek and responsive admin dashboard template built with React and Bootstrap, featuring dynamic charts, user management, and real-time data updates for seamless admin control.",
      github: "https://github.com/viveklohar229/adminvinidashpanel",
      live: "https://vinidashboard.onrender.com/",
      type: "personal",
    },
    {
      title: "ViniStore (Client E-Commerce)",
      description:
        "A full-stack e-commerce platform with React frontend and Node.js backend, including product browsing, shopping cart, secure payment integration, and user profiles.",
      github: "https://github.com/viveklohar229/vinistore",
      live: "https://vinistore.netlify.app/",
      type: "personal",
    },
    {
      title: "Get Me Chai Coffee",
      description:
        "A specialized web app for tea and coffee lovers, showcasing a variety of blends, ordering features, and personalized recommendations, built with modern web technologies.",
      github: "https://github.com/viveklohar229/getChaiCoffee",
      live: "https://getchaicoffee.onrender.com/",
      type: "personal",
    },

    {
      title: "YouTube Clone",
      description:
        "A YouTube-like frontend platform with video browsing, search, and responsive UI. Built for learning and showcase purposes.",
      github: "https://github.com/viveklohar229/yt-clone",
      live: "https://viniyoutubeclone.netlify.app/",
      type: "personal",
    },
    {
      title: "Spotify Clone",
      description:
        "Spotify frontend clone with playlist features, search, and responsive design using React.",
      github: "https://github.com/viveklohar229/spotify-clone",
      live: "https://vinispotifyclone.netlify.app/",
      type: "personal",
    },

    
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 0.8 } },
  };

  return (
    <section
      id="projects"
      className="py-5"
      style={{ minHeight: "100vh", backgroundColor: "#0b132b", color: "#fff" }}
    >
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">Projects</h2>
        <div className="row justify-content-center">
          {projectList.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <motion.div
                className="card h-100 shadow-lg border-0"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                style={{ background: "#1c2541", borderRadius: "15px" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning">{project.title}</h5>
                  <p className="text-white flex-grow-1">{project.description}</p>
                  <div className="mt-auto">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="btn btn-outline-light me-2 mb-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className="btn btn-warning mb-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                  <span
                    className={`badge ${
                      project.type === "personal"
                        ? "bg-primary"
                        : project.type === "company"
                        ? "bg-success"
                        : "bg-info"
                    } mt-3`}
                  >
                    {project.type.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
