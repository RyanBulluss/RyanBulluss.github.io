import Navbar from "./Navbar";
import Name from "./Name";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Socials from "./Socials";
import Interests from "./Interests";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className="min-h-[100vh] bg-first text-white scroll">
      <Navbar />
      <div id="name">
        <Name />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="interests">
        <Interests />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Socials />
    </div>
  );
}
