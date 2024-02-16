import University from "./University";
import Finance from "./Finance";
import Ecommerce from "./Ecommerce";
import Battleship from "./Battleship";
import Freelance from "./Freelance";

export default function Projects() {
  return (
    <div className="min-h-[100vh] max-w-[1200px] mx-auto flex flex-col justify-center items-center p-2 gap-8">
      <div id="freelance">
        <Freelance />
      </div>
      <div id="university">
        <University />
      </div>
      <div id="finance">
        <Finance />
      </div>
      <div id="ecommerce">
        <Ecommerce />
      </div>
      <div id="battleship">
        <Battleship />
      </div>
    </div>
  );
}
