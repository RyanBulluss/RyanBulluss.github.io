import screenshot from "./images/MoneyWise.png";
import {
  FaPython,
  FaGithub,
  FaLink,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  SiJavascript,
  SiDjango,
  SiBootstrap,
  SiPostgresql,
} from "react-icons/si";

export default function University() {
  return (
    <div className="w-full py-40">
      <div className="grid md:grid-cols-2 gap-2">
        <div className="flex items-center justify-center rounded-xl overflow-hidden mb-4">
          <img src={screenshot} alt="University Home Page" />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 my-2">
          <h2 className="text-4xl md:text-4xl font-semibold">
            MoneyWise (Finance)
          </h2>
          <div className="flex justify-center text-5xl lg:text-6xl gap-2">
            <div className="group flex flex-col gap-3 text-center">
              <div className="p-2 rounded-full">
                <SiDjango />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                Django
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div className="p-2 rounded-full">
                <FaPython />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                Python
              </div>
            </div>
            <div className="group hidden xs:flex flex-col gap-3 text-center">
              <div className="p-2 rounded-full">
                <SiJavascript />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                JavaScript
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div className="p-2 rounded-full">
                <SiBootstrap />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                Bootstrap
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div className="p-2 rounded-full">
                <SiPostgresql />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                PostgreSQL
              </div>
            </div>
          </div>
          <h4 className="lg:text-xl text-gray-200">
            Created by a team of 4 in 5 days
          </h4>
          <div className="flex flex-col gap-1">
            <a
              href="https://moneywise-financehub-16306314584e.herokuapp.com/"
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
              href="https://github.com/RyanBulluss/MoneyWise"
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
        MoneyWise is your comprehensive financial companion, designed to
        streamline your financial management effortlessly. With MoneyWise, you
        can seamlessly track your budgets, maintain your financial balance, and
        stay updated on stock market trends. Our app presents your financial
        data in an engaging and user-friendly manner, ensuring you always have a
        clear grasp of your financial health.
      </p>
      <p className="text-lg pt-4 text-gray-200">
        MoneyWise is built on a solid foundation, utilizing the Django framework
        and PostgreSQL database. It boasts a rich feature set, including robust
        authentication, a customizable user interface, dynamic charts, and more.
        My contributions within the development team primarily revolved around
        code repository management, backend development (including models,
        middleware, and authentication), and enhancing the frontend using
        technologies like Chart.js and Bootstrap to craft an intuitive user
        interface. Currently, the app is optimized for desktop and tablet
        screens. For detailed information on the code process, please refer to
        the README on GitHub!
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="#university"
          className="bg-second hover:bg-second/50 rounded-full text-2xl w-12 my-4 flex justify-center items-center p-2"
        >
          <FaChevronUp />
        </a>
        <a
          href="#ecommerce"
          className="bg-second hover:bg-second/50 rounded-full text-2xl w-12 my-4 flex justify-center items-center p-2"
        >
          <FaChevronDown />
        </a>
      </div>
    </div>
  );
}
