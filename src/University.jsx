import aiu from "./images/University.png";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

export default function University() {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-2">
        <div className="border flex items-center justify-center">
          <img src={aiu} alt="logo" />
        </div>
        <div className="border flex flex-col items-center gap-4">
          <h2 className="text-4xl font-semibold">AI University</h2>
          <div className="flex justify-center text-4xl gap-2">
            <div className="hover:bg-second p-2 rounded-full">
            <FaReact />

            </div>
            <FaNodeJs />
            <SiExpress />
            <SiMongodb />
            <SiTailwindcss />
          </div>
        </div>
      </div>
    </div>
  );
}
