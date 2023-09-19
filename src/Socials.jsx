import {
  FaLinkedin,
  FaGithub,
  FaUser,
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import arrow from "./images/down.png";

export default function Socials() {
  const [message, setMessage] = useState(false)
  const [hide, setHide] = useState(false);
  const toggleHide = () => setHide(!hide);

  useEffect(() => {
    setTimeout(() => setMessage(true), 500)
    setTimeout(() => setMessage(false), 2500)
  }, []);

  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ryan-bulluss/",
      color: "bg-blue-600",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/RyanBulluss",
      color: "bg-gray-800",
    },
    {
      name: "Resume",
      icon: <FaUser />,
      link: "https://docs.google.com/document/d/1Ovf_KsbJLuW36pBk9SvoE7EdfoRmBE-r/edit",
      color: "bg-gray-500",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:Rbulluss2000@gmail.com",
      color: "bg-green-600",
    },
  ];

  return (
    <div className="fixed bottom-0 h-[60px]">
        {message && (
            <>
            <img src={arrow} alt="" className="h-10 w-10 -mt-16 ml-24" />
            <div className="-mt-14 ml-36 text-xl">Check out my socials!</div>
            </>
        )}
      <div
        className={`fixed bottom-0 h-[60px] flex items-center transform ${
          !hide ? "ml-[0px]" : "-ml-[280px]"
        }`}
      >
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className={`${social.color} h-[70px] group hover:w-[150px] w-[70px] overflow-hidden duration-500 text-4xl gap-2 flex justify-center items-center`}
          >
            {social.icon}
            <span className="text-xl hidden group-hover:block ">
              {social.name}
            </span>
          </a>
        ))}
        <button onClick={toggleHide} className="text-2xl m-2 p-2 rounded-full bg-second hover:bg-second/50">
          {!hide ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>
    </div>
  );
}
