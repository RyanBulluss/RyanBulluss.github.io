import University from "./University";

export default function Projects() {
    return (
      <div className="min-h-[100vh] max-w-[1200px] mx-auto flex flex-col justify-center items-center p-4 gap-8">
        <h1 className="text-6xl md:text-6xl font-semibold text-fourth mb-4">Projects</h1>
        <University />
      </div>
    );
  }