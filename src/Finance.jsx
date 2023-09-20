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
        MoneyWise is your all-in-one financial hub, designed to help you
        effortlessly manage your finances with precision. With MoneyWise, you
        can effortlessly track your budgets, maintain balance, and monitor stock
        returns. The app presents your financial data in a visually engaging and
        intuitive manner, ensuring you have a clear understanding of your
        financial situation.
      </p>
      <p className="text-lg pt-4 text-gray-200">
        The app was built using the MERN stack and styled with Tailwind. It
        utilizes the OpenAI API to provide cutting-edge AI-driven responses from
        teachers, delivering an exceptional learning experience. Furthermore,
        Stripe is integrated to ensure fast and secure payments for premium
        features, such as teacher creation and access to the school library. For
        detailed information on the code process, please refer to the README on
        GitHub!
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
