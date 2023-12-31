import screenshot from "./images/SoldIt.png";
import {
  FaNodeJs,
  FaGithub,
  FaLink,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiBootstrap } from "react-icons/si";

export default function University() {
  return (
    <div className="w-full min-h-[100vh] py-24 sm:py-40 snap">
      <div className="grid md:grid-cols-2 gap-2">
        <div
          className="flex items-center w-[90%] sm:w-full mx-auto justify-center rounded-xl overflow-hidden mb-4"
          data-aos="fade-in"
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <img src={screenshot} alt="University Home Page" />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 my-2">
          <h2
            className="text-4xl sm:text-4xl font-semibold"
            data-aos="fade-in"
            data-aos-duration={1000}
            data-aos-delay={200}
          >
            SoldIt (Ecommerce)
          </h2>
          <div className="flex justify-center text-5xl lg:text-6xl gap-2">
            <div className="group flex flex-col gap-3 text-center">
              <div
                className="p-2 rounded-full"
                data-aos="flip-left"
                data-aos-duration={500}
                data-aos-delay={200}
              >
                <FaNodeJs />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                NodeJS
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div
                className="p-2 rounded-full"
                data-aos="flip-left"
                data-aos-duration={500}
                data-aos-delay={400}
              >
                <SiExpress />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                ExpressJS
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div
                className="p-2 rounded-full"
                data-aos="flip-left"
                data-aos-duration={500}
                data-aos-delay={600}
              >
                <SiMongodb />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                MongoDB
              </div>
            </div>
            <div className="group flex flex-col gap-3 text-center">
              <div
                className="p-2 rounded-full"
                data-aos="flip-left"
                data-aos-duration={500}
                data-aos-delay={800}
              >
                <SiBootstrap />
              </div>
              <div className="group-hover:opacity-100 transition duration-750 group-hover:visible opacity-0 invisible tooltip bg-second text-white text-[10px] md:text-[12px] rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                Bootstrap
              </div>
            </div>
          </div>
          <h4
            className="lg:text-xl text-gray-200"
            data-aos="fade-in"
            data-aos-duration={1000}
            data-aos-delay={500}
          >
            Created solo in 5 days
          </h4>
          <div className="flex flex-col gap-1">
            <a
              href="https://soldit-shop-ffbb257f110b.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="my-1 bg-gradient-to-r from-fourth to-fifth p-[2px] rounded-lg"
              data-aos="fade-in"
              data-aos-duration={1000}
              data-aos-delay={750}
            >
              <div className="flex items-center gap-2 bg-first hover:bg-first/0 py-2 px-8 rounded-lg prevent-select">
                <span>Demo</span>
                <FaLink />
              </div>
            </a>
            <a
              href="https://github.com/RyanBulluss/soldit-ecommerce"
              target="_blank"
              rel="noreferrer"
              className="my-1 bg-gradient-to-r from-fourth to-fifth p-[2px] rounded-lg"
              data-aos="fade-in"
              data-aos-duration={1000}
              data-aos-delay={1000}
            >
              <div className="flex items-center gap-2 bg-first hover:bg-first/0 py-2 px-8 rounded-lg prevent-select">
                <span>Github</span>
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>

      <p
        className="text-lg pt-4 text-gray-200"
        data-aos="fade-in"
        data-aos-duration={2000}
        data-aos-delay={1000}
      >
        SoldIt is your dynamic ecommerce solution, simplifying the buying and
        selling experience. Our user-friendly interface empowers users to
        effortlessly list items for sale and explore unique products. Security
        is our utmost priority, and we've integrated the trusted Stripe payments
        system to ensure secure transactions, providing you with peace of mind
        whether you're making a purchase or selling your goods.
      </p>
      <p
        className="text-lg pt-4 text-gray-200 hidden md:block"
        data-aos="fade-in"
        data-aos-duration={2000}
        data-aos-delay={1500}
      >
        Behind the scenes, SoldIt is built on a foundation of Node.js and
        Express for the backend, offering a robust and scalable architecture.
        The app is styled using Bootstrap for a polished and responsive user
        interface. To enhance security, I implemented Google authentication
        alongside Stripe checkout. SoldIt boasts a range of features, including
        item listing, purchasing, user reviews, and much more. For detailed
        information on the code process, please refer to the README on GitHub!
      </p>
    </div>
  );
}
