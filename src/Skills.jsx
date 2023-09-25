import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiDjango,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Django",
      icon: <SiDjango />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "Html",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
  ];

  return (
    <div className="min-h-[100vh] max-w-[1000px] mx-auto snap">
      <div className="h-[100vh] grid grid-cols-3 md:grid-cols-4 sm:text-5xl text-3xl gap-6 px-4 p-24 sm:pt-40">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="border group border-gray-500 p-5 flex flex-col items-center justify-center rounded-2xl"
            data-aos="flip-left"
            data-aos-duration={500}
            data-aos-delay={(idx + 1) * 100}
          >
            <span className="">{skill.icon}</span>
            <h3 className="text-lg sm:text-2xl">{skill.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}
