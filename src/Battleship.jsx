import screenshot from "./images/Battleship.png";
import {
  FaHtml5,
  FaCss3,
  FaGithub,
  FaLink,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default function University() {
  return (
    <div className="w-full min-h-[100vh] py-24 sm:py-40 snap">
      <div className="grid md:grid-cols-2 gap-2">
        <div
          className="flex items-center w-[90%] sm:w-full mx-auto justify-center rounded-xl overflow-hidden mb-4"
          data-aos="fade-in"
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <img src={screenshot} alt="University Home Page" />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 my-2">
          <h2
            className="text-4xl sm:text-4xl font-semibold"
            data-aos="fade-in"
            data-aos-duration={1000}
            data-aos-delay={200}
          >
            Battleship
          </h2>
          <div className="flex justify-center text-5xl lg:text-6xl gap-2">
            <div className="group flex flex-col gap-3 text-center">
              <div
                className="p-2 rounded-full"
                data-aos="flip-left"
                data-aos-duration={500}
                data-aos-delay={200}
              >
                <FaHtml5 />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                HTML
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div
                className="p-2 rounded-full"
                data-aos="flip-left"
                data-aos-duration={500}
                data-aos-delay={400}
              >
                <FaCss3 />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                CSS
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div
                className="p-2 rounded-full"
                data-aos="flip-left"
                data-aos-duration={500}
                data-aos-delay={600}
              >
                <SiJavascript />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                JavaScript
              </div>
            </div>
          </div>
          <h4
            className="lg:text-xl text-gray-200"
            data-aos="fade-in"
            data-aos-duration={1000}
            data-aos-delay={500}
          >
            Created solo in 5 days
          </h4>
          <div className="flex flex-col gap-1">
            <a
              href="https://ryanbulluss.github.io/Battleship-game/"
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
              href="https://github.com/RyanBulluss/Battleship-game"
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
        className="text-lg pt-4 text-gray-200"
        data-aos="fade-in"
        data-aos-duration={2000}
        data-aos-delay={1000}
      >
        Dive into the world of Battleship with my custom-made JavaScript game.
        This interactive experience offers players full control over their game.
        You can fine-tune the challenge level, select your preferred board size,
        and even adjust the number of ships, ensuring every match is a thrilling
        and unique experience.
      </p>
      <p
        className="text-lg pt-4 text-gray-200 hidden md:block"
        data-aos="fade-in"
        data-aos-duration={2000}
        data-aos-delay={1500}
      >
        Behind the scenes, this game is built with pure HTML, CSS, and
        JavaScript, allowing me to master the fundamentals without relying on
        libraries or frameworks. It features an intelligent AI opponent
        (available on regular and veteran difficulty levels) that strategically
        predicts ship locations based on previous hits. Additionally, the game
        includes a ship placement screen to add a tactical element to the
        gameplay. For detailed information on the code process, please refer to
        the README on GitHub!
      </p>
    </div>
  );
}
