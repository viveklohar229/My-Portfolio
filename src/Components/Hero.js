
function Hero() {
  return (
    <section className="hero-section text-center text-white d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#343a40' }}>
      <div className="col-md-8 ">
        <div>
          <h1>Hello, I'm VIVEK VISHWAKARMA</h1>
          <p className="lead">Full-Stack Web Developer - MERN Technology | Desktop Support Engineer  | ASP.NET Core MVC | Problem Solver </p>
          <p>I specialize in building modern, responsive web applications using <b>React.js, Node.js, Express, and MongoDB</b>. I’ve developed full-featured platforms like <b>e-commerce website, admin dashboard, and  donation platform</b>.
          </p>
          <p>Alongside web development, I bring solid experience as a <b>Desktop Support Engineer</b> — skilled in system troubleshooting, network configuration, and ensuring smooth IT operations.Let’s connect to bring your ideas to life — with reliable solutions, whether on the web or at the desk.</p>
          <a href="#projects" className="btn btn-primary mt-3">View My Work</a>
        </div>
      </div>
      <div className="col-md-4 text-center mb-4 mb-md-0">
        <img
          src="/img2.png"
          alt="Vivek Vishwakarma"
          // className="img-fluid rounded-circle shadow"
          style={{ maxWidth: '500px' }}
        />
      </div>
    </section>
  );
}

export default Hero;
