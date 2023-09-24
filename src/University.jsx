import screenshot from "./images/University.png";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLink,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function University() {
  return (
    <div className="w-full min-h-[100vh] py-24 sm:py-52 snap">
      <div className="grid md:grid-cols-2 gap-2">
        <div className="flex items-center w-[90%] sm:w-full mx-auto justify-center rounded-xl overflow-hidden mb-4">
          <img src={screenshot} alt="University Home Page" />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 my-2">
          <h2 className="text-4xl sm:text-4xl font-semibold">AI University</h2>
          <div className="flex justify-center text-5xl lg:text-6xl gap-2">
            <div className="group flex flex-col gap-3 text-center">
              <div className="p-2 rounded-full">
                <FaReact />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                React
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div className="p-2 rounded-full">
                <FaNodeJs />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                NodeJS
              </div>
            </div>
            <div className="group hidden xs:flex flex-col gap-3 text-center">
              <div className="p-2 rounded-full">
                <SiExpress />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                ExpressJS
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div className="p-2 rounded-full">
                <SiMongodb />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                MongoDB
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div className="p-2 rounded-full">
                <SiTailwindcss />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                Tailwind
              </div>
            </div>
          </div>
          <h4 className="lg:text-xl text-gray-200">Created solo in 10 days</h4>
          <div className="flex flex-col gap-1">
            <a
              href="https://ai-university-7d83bddf0c3e.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="my-1 bg-gradient-to-r from-fourth to-fifth p-[2px] rounded-lg"
            >
              <div className="flex items-center gap-2 bg-first hover:bg-first/0 py-2 px-8 rounded-lg prevent-select">
                <span>Demo</span>
                <FaLink />
              </div>
            </a>
            <a
              href="https://github.com/RyanBulluss/AI-University"
              target="_blank"
              rel="noreferrer"
              className="my-1 bg-gradient-to-r from-fourth to-fifth p-[2px] rounded-lg"
            >
              <div className="flex items-center gap-2 bg-first hover:bg-first/0 py-2 px-8 rounded-lg prevent-select">
                <span>Github</span>
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>

      <p className="text-lg pt-4 text-gray-200">
        AI University (AIU) is an innovative educational app that connects
        students with AI-driven versions of renowned experts. The platform
        offers engaging learning experiences across diverse subjects like
        Psychology, Philosophy, and Chemistry. Additionally, the app fosters
        collaborative learning by enabling student-to-student and
        student-to-teacher messaging.
      </p>
      <p className="text-lg pt-4 text-gray-200 hidden md:block">
        The app was built using the MERN stack and styled with Tailwind. It
        utilizes the OpenAI API to provide cutting-edge AI-driven responses from
        teachers, delivering an exceptional learning experience. Furthermore,
        Stripe is integrated to ensure fast and secure payments for premium
        features, such as teacher creation and access to the school library. For
        detailed information on the code process, please refer to the README on
        GitHub!
      </p>
    </div>
  );
}
