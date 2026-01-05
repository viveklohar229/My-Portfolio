import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for contacting me, ${formData.name}! I will get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-5 d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1c2541, #0b132b)",
        color: "#fff",
      }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center mb-5 display-5 fw-bold">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                backgroundColor: "#162447",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
              }}
            >
              <div className="mb-4 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ background: "#0b132b", color: "#fff", border: "none" }}
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="mb-4 form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ background: "#0b132b", color: "#fff", border: "none" }}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="mb-4 form-floating">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your message..."
                  style={{ height: "150px", background: "#0b132b", color: "#fff", border: "none" }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="message">Message</label>
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  className="btn btn-warning btn-lg px-5"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255, 193, 7, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
