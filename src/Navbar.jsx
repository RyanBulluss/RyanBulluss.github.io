import React, {useState} from "react";
import logo from "./images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)


  return (
    <div className="fixed prevent-select bg-first w-full px-4 top-0 h-[80px] flex items-center justify-between gap-6 z-20">
      <div>
        <a href="#name">
          <img src={logo} alt="logo" className="h-16" />
        </a>
      </div>
      <div className="gap-4 hidden md:flex">
        <a href="#about" className="hover:bg-second p-2 rounded-lg">About</a>
        <a href="#skills" className="hover:bg-second p-2 rounded-lg">Skills</a>
        <a href="#projects" className="hover:bg-second p-2 rounded-lg">Projects</a>
        <a href="#contact" className="hover:bg-second p-2 rounded-lg">Contact</a>
      </div>
      <div onClick={handleClick} className="md:hidden z-20 text-2xl cursor-pointer hover:bg-second p-2 rounded-lg">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div onClick={handleClick} className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-first/90 flex flex-col justify-center items-center gap-4 text-4xl"}>
        <a href="#name" className="hover:bg-second p-2 rounded-lg">Home</a>
        <a href="#about" className="hover:bg-second p-2 rounded-lg">About</a>
        <a href="#skills" className="hover:bg-second p-2 rounded-lg">Skills</a>
        <a href="#projects" className="hover:bg-second p-2 rounded-lg">Projects</a>
        <a href="#contact" className="hover:bg-second p-2 rounded-lg">Contact</a>
      </div>
    </div>
  );
}
