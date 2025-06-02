import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './Components/ScrollToTopButton';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills/>
      <Projects />
      <About />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
