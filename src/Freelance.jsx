import screenshot from "./images/hanorah.png";
import { FaReact, FaGithub, FaLink } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

export default function Freelance() {
  return (
    <div className="w-full min-h-[100vh] py-24 sm:py-52 snap">
      <div className="grid md:grid-cols-2 gap-2">
        <div
          className="flex items-center w-[90%] sm:w-full mx-auto justify-center rounded-xl overflow-hidden mb-4"
          data-aos="fade-in"
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <img src={screenshot} alt="University Home Page" className="" />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 my-2">
          <h2
            className="text-4xl sm:text-4xl font-semibold"
            data-aos="fade-in"
            data-aos-duration={1000}
            data-aos-delay={200}
          >
            Hanorah's Studio
          </h2>
          <div className="flex justify-center text-5xl lg:text-6xl gap-2">
            <div className="group flex flex-col gap-3 text-center">
              <div
                className="p-2 rounded-full"
                data-aos="flip-left"
                data-aos-duration={500}
                data-aos-delay={200}
              >
                <FaReact />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                React
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div
                className="p-2 rounded-full"
                data-aos="flip-left"
                data-aos-duration={500}
                data-aos-delay={400}
              >
                <SiJavascript />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                JavaScript
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div
                className="p-2 rounded-full"
                data-aos="flip-left"
                data-aos-duration={500}
                data-aos-delay={600}
              >
                <SiTailwindcss />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                Tailwind
              </div>
            </div>
          </div>
          <h4
            className="lg:text-xl text-gray-200"
            data-aos="fade-in"
            data-aos-duration={1000}
            data-aos-delay={500}
          >
            Private freelance work
          </h4>
          <div className="flex flex-col gap-1">
            <a
              href="https://hanorahsstudio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="my-1 bg-gradient-to-r from-fourth to-fifth p-[2px] rounded-lg"
              data-aos="fade-in"
              data-aos-duration={1000}
              data-aos-delay={750}
            >
              <div className="flex items-center gap-2 bg-first hover:bg-first/0 py-2 px-8 rounded-lg prevent-select">
                <span>Demo</span>
                <FaLink />
              </div>
            </a>
            <a
              href="https://github.com/RyanBulluss/HM-Portfolio"
              target="_blank"
              rel="noreferrer"
              className="my-1 bg-gradient-to-r from-fourth to-fifth p-[2px] rounded-lg"
              data-aos="fade-in"
              data-aos-duration={1000}
              data-aos-delay={1000}
            >
              <div className="flex items-center gap-2 bg-first hover:bg-first/0 py-2 px-8 rounded-lg prevent-select">
                <span>Github</span>
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>

      <p
        className="text-lg pt-4 text-gray-200 py-4"
        data-aos="fade-in"
        data-aos-duration={2000}
        data-aos-delay={1000}
      >
        I completed a freelance project for Hanorah's Studio, helping a graphic design student develop a professional portfolio. The website was designed with Tailwind CSS, ensuring it is responsive and compatible with various devices. To enhance functionality and keep hosting costs low, I implemented React routing and EmailJS for seamless routing and serverless form submission.
      </p>
    </div>
  );
}