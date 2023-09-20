import logo from "./images/logo.png"
import { FaChevronDown } from "react-icons/fa";

export default function Name() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center gap-3">
      <img src={logo} alt="logo" className="h-[300px] prevent-select" />
      <h1 className="text-4xl sm:text-7xl font-bold ">Ryan Bulluss</h1>
      <h2 className="text-3xl sm:text-5xl text-gray-400">Full Stack Software Engineer</h2>
      <a href="#projects" className="my-1 bg-gradient-to-r from-fourth to-fifth p-[2px] rounded-lg">
        <div className="flex items-center gap-2 bg-first hover:bg-first/0 p-3 rounded-lg prevent-select">
          <span>View My Work</span>
          <FaChevronDown />
        </div>
      </a>
      <div className="flex justify-center gap-4 h-20 mx-auto">
        <a
          href="#about"
          className="bg-second hover:bg-second/50 rounded-full text-2xl w-12 my-4 flex justify-center items-center p-2"
        >
          <FaChevronDown />
        </a>
      </div>
    </div>
  );
}
