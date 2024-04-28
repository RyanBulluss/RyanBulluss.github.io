export default function OtherSkills() {
    const skills = ['Github', 'Hosting', 'Database Administration', 'Test driven development', 'Design patterns', 'Object oriented design', 'UI & UX fundamentals', 'Repository management', 'Authentication', 'SEO', 'Debugging', 'Restful APIs', 'Logical problem solving', 'Daily standups and scrums', 'Adaptability', 'Creativity', 'Time Management', 'Curiosity', ]


  return (
    <div className="h-[100vh] flex flex-col items-center justify-center snap">
      <h1
        className="text-3xl md:text-6xl font-semibold text-fourth py-8 text-center"
        data-aos="fade-zoom-in"
        data-aos-duration={1000}
      >
        Other Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-4 w-[95%] md:w-[1000px] py-4 scrollbar scrollbar">
        {skills.map((skill, idx) => (
            <div key={idx} className="bg-second py-2 px-6 min-w-[200px] justify-center flex items-center text-center text-2xl rounded-2xl">{skill}</div>
        ))}
        
      </div>
    </div>
  );
}
