import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center gap-8 snap">
      <div className="grid md:grid-cols-2 gap-8 px-4 max-w-[1000px]">
        <div className="text-3xl md:text-4xl md:text-right">
          <h1 className="text-6xl md:text-6xl font-semibold text-fourth mb-4">
            About
          </h1>
          <h4 className="text-xl sm:text-4xl">
            Hi, my name is <span className="text-fifth">Ryan Bulluss</span> I am a full stack software engineer
            currently specialising in the <span className="text-fifth">MERN</span> stack
          </h4>
        </div>
        <div className="">
          <h1 className="hidden prevent-select md:block text-6xl md:text-6xl font-semibold text-fourth/0 mb-4">
            .
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            I am a results-driven software engineer known for my ability to
            tackle intricate challenges with both logical precision and creative
            ingenuity. My dedication to honing my problem-solving skills and
            staying current with industry trends has empowered me to excel in
            diverse software development contexts. Whether it's optimizing
            algorithms, architecting elegant solutions, or collaborating
            seamlessly with cross-functional teams, I am committed to delivering
            software excellence that drives innovation and elevates user
            experiences.
          </p>
        </div>
      </div>
      
      

      
    </div>
  );
}
