import React, { useEffect, useState } from 'react';
import '../App.css'
export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Animate once on mount
    setTimeout(() => setAnimate(true), 100); // small delay to trigger transition properly
  }, []);

  return (
      <section id="skills" className="p-5  fade-in" style={{ height: '100vh'}}>
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row">
          {/* Frontend Skills */}
          <div className="col-md-4 mb-4">
            <h5>Frontend</h5>
            <Skill name="React.js" width="90%" animate={animate} />
            <Skill name="HTML5 & CSS3" width="95%" animate={animate} />
            <Skill name="JavaScript (ES6+)" width="90%" animate={animate} />
            <Skill name="Bootstrap 5" width="92%" animate={animate} />
            <Skill name="Material-UI" width="85%" animate={animate} />
          </div>

          {/* Backend Skills */}
          <div className="col-md-4 mb-4">
            <h5>Backend</h5>
            <Skill name="Node.js" width="88%" animate={animate} />
            <Skill name="Express.js" width="85%" animate={animate} />
            <Skill name="MongoDB" width="80%" animate={animate} />
            <Skill name="ASP.NET Core MVC" width="75%" animate={animate} />
            <Skill name="RESTful APIs" width="90%" animate={animate} />
          </div>

          {/* Tools and Others */}
          <div className="col-md-4 mb-4">
            <h5>Tools & Other</h5>
            <Skill name="Cloudinary" width="85%" animate={animate} />
            <Skill name="Git & GitHub" width="90%" animate={animate} />
            <Skill name="Razorpay Integration" width="80%" animate={animate} />
            <Skill name="Responsive Design" width="95%" animate={animate} />
            <Skill name="Desktop Support" width="90%" animate={animate} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ name, width, animate }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>{name}</label>
      <div style={{
        height: '12px',
        background: '#e0e0e0',
        borderRadius: '10px',
        overflow: 'hidden',
        marginTop: '4px',
      }}>
        <div
          style={{
            height: '100%',
            width: animate ? width : '0%',
            background: 'linear-gradient(90deg, #007bff, #00c6ff)',
            borderRadius: '10px',
            transition: 'width 2s ease-in-out',
            willChange: 'width',
          }}
        />
      </div>
    </div>
  );
}
