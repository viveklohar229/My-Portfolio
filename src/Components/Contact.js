import React, { useState } from 'react';
import '../App.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for contacting me, ${formData.name}! I will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5 bg-light contact-section" style={{ minHeight: '100vh' }}>
      <div className="container">
        <h2 className="mb-4 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4 form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
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
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="mb-4 form-floating">
            <textarea
              className="form-control"
              id="message"
              placeholder="Your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg px-5">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
