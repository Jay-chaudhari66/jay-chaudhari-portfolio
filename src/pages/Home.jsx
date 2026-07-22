import Hero from "../components/hero/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;