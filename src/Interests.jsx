export default function Interests() {
    const skills = ['Github', 'Hosting', 'Database Administration', 'Test driven development', 'Design patterns', 'Object oriented design', 'UI & UX fundamentals', 'Repository management', 'Authentication', 'SEO', 'Debugging', 'Restful APIs', 'Logical problem solving', 'Daily standups and scrums', 'Adaptability', 'Creativity', 'Time Management', 'Curiosity', ]
    const interests = [
        {
            name: "Reading",
            description: 'A newfound love since the 2020 lockdowns. I delve into non-fiction productivity literature like "Deep Work" and "Atomic Habits," alongside enjoying the immersive worlds of Stephen King and "Dune" in the realm of fiction.'
        },
        {
            name: "Coding for fun",
            description: "Beyond work, I find joy in coding for pure enjoyment. Exploring new technologies, crafting small projects, and solving intriguing coding challenges are some of my favorite pastimes."
        },
        {
            name: "Music",
            description: "From soothing lofi beats to Indie, Rock, and Rap, music is my constant companion through coding marathons."
        },
    ]

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center snap">
      <h1
        className="text-3xl md:text-6xl font-semibold text-fourth py-8 text-center"
        data-aos="fade-zoom-in"
        data-aos-duration={1000}
      >
        Other Skills
      </h1>
      <div className="flex gap-4 overflow-x-auto w-[95%] md:w-[1000px] py-4">
        {skills.map((skill, idx) => (
            <div key={idx} className="bg-second py-2 px-6 min-w-[200px] justify-center flex items-center text-center text-2xl rounded-2xl">{skill}</div>
        ))}
        
      </div>
      <h1
        className="text-3xl md:text-6xl font-semibold text-fourth pb-8 pt-20 text-center"
        data-aos="fade-zoom-in"
        data-aos-duration={1000}
      >
        Interests
      </h1>
      <div className="flex gap-4 overflow-x-auto w-[95%] md:w-[1000px] py-4">
        {interests.map((interest, idx) => (
            <div key={idx} className="bg-second py-2 px-6 min-w-[400px] justify-top gap-4 flex flex-col items-center text-center text-2xl rounded-2xl">
                <h3 className="font-semibold">{interest.name}</h3>
                {interest.name === "Coding for fun" ? 
                <p className="text-lg text-gray-200">Beyond work, I find joy in coding for pure enjoyment. Exploring new technologies, crafting small projects such as <a className="underline text-blue-300 hover:text-blue-400" target="_blank" rel="noreferrer" href="https://ryanbulluss.github.io/Minigames/">Minigames</a>, and solving intriguing coding challenges are some of my favorite pastimes.</p>
              :
              <p className="text-lg text-gray-200">{interest.description}</p>
              
              }
            </div>
        ))}
        
      </div>
      
    </div>
  );
}
