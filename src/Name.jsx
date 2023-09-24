import logo from "./images/logo.png"
import { FaChevronDown } from "react-icons/fa";
import Test from "./Test";

export default function Name() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center text-center pb-10 mx-1 sm:pb-0 gap-3 snap">
      <Test />
      <img src={logo} alt="logo" className="h-[200px] sm:h-[300px] prevent-select z-20 " />
      <h1 className="text-4xl sm:text-7xl font-bold z-20">Ryan Bulluss</h1>
      <h2 className="text-3xl sm:text-5xl text-gray-400 z-20">Full Stack Software Engineer</h2>
      <a href="#projects" className="my-1 bg-gradient-to-r from-fourth to-fifth p-[2px] rounded-lg z-20">
        <div className="flex items-center gap-2 bg-first hover:bg-first/0 p-3 rounded-lg prevent-select">
          <span>View My Work</span>
          <FaChevronDown />
        </div>
      </a>
    </div>
  );
}
