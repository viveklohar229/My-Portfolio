function About() {
  return (
    <section
      id="about"
      className="py-5 text-center d-flex align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <div className="container">
        <h2 className="mb-4">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <p>
              I'm <strong>Vivek Vishwakarma</strong>, a passionate Full-Stack Web Developer with hands-on experience building modern, scalable web applications using the <strong>MERN stack</strong> and <strong>ASP.NET Core MVC</strong>. I’ve developed full-featured platforms including e-commerce sites, admin dashboards, and donation systems.
            </p>
            <p>
              I bring a strong foundation in both front-end and back-end development — from responsive UI design to robust server-side logic and database integration. I also work with tools like <strong>Cloudinary</strong>, <strong>Git & GitHub</strong>, and deploy apps to <strong>Render</strong> and <strong>Netlify</strong>.
            </p>
            <p>
              Alongside development, I have professional experience as a <strong>Desktop Support Engineer</strong>, skilled in system troubleshooting, network setup, and IT operations. This blend of coding and tech support makes me a reliable all-round problem solver.
            </p>
            <p>
              I’m always eager to learn new technologies, contribute to impactful projects, and collaborate with creative teams to bring innovative ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
