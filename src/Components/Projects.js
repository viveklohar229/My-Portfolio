import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'ViniDashboard (Admin Template)',
      description: 'A sleek and responsive admin dashboard template built with React and Bootstrap, featuring dynamic charts, user management, and real-time data updates for seamless admin control.',
      github: 'https://github.com/viveklohar229/adminvinidashpanel',
      live: 'https://vinidashboard.onrender.com/',
    },
    {
      title: 'ViniStore (Client E-Commerce)',
      description: 'A full-stack e-commerce platform with React frontend and Node.js backend, including product browsing, shopping cart, secure payment integration, and user profiles.',
      github: 'https://github.com/viveklohar229/vinistore',
      live: 'https://vinistore.netlify.app/',
    },
    {
      title: 'Get Me Chai Coffee',
      description: 'A specialized web app for tea and coffee lovers, showcasing a variety of blends, ordering features, and personalized recommendations, built with modern web technologies.',
      github: 'https://github.com/viveklohar229/getChaiCoffee',
      live: 'https://getchaicoffee.onrender.com/',
    },
  ];

  return (
    <section id="projects" className="py-5 text-center"  style={{ height: '100vh'}}>
      <div className="container">
        <h2 className='mb-5'>Projects</h2>
        <div className="row">
          {projectList.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mt-auto">
                    <a
                      href={project.github}
                      className="btn btn-outline-dark me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href={project.live}
                      className="btn btn-outline-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
