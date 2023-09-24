import University from "./University";
import Finance from "./Finance";
import Ecommerce from "./Ecommerce";
import Battleship from "./Battleship";

export default function Projects() {
  return (
    <div className="min-h-[100vh] max-w-[1200px] mx-auto flex flex-col justify-center items-center p-2 gap-8">
      {/* <h1 className="text-6xl md:text-6xl font-semibold text-fourth mb-16">Projects</h1> */}
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
