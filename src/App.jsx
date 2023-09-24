import Navbar from "./Navbar";
import Name from "./Name";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Socials from "./Socials";
import Test from "./Test";

export default function App() {
  return (
    <div className="min-h-[100vh] bg-first text-white scroll">
      <Navbar />
      {/* <Test /> */}
      <div id="name">
        <Name />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
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
