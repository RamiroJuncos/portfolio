
const skills = [
  { text: "HTML/CSS" },
  { text: "React" },
  { text: "JavaScript" },
  { text: "C#" },
  { text: "C++" },
  { text: "Python" },
  { text: "Arduino" },
  { text: "Conocimiento en Base de Datos SQLite" },
  { text: "Express" },
  { text: "Node.js" }
];

function Skills() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-center items-center text-black font-mono overflow-hidden">
      <div className="absolute inset-0 z-0 matrix-rain"></div>
      <h1 className="text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10">Habilidades</h1>
      <ul className="space-y-4 text-2xl md:text-3xl z-10">
        {skills.map((skill) => (
          <li
            key={skill.text}
            className="hover:text-green-300 neon-effect transition duration-300 cursor-pointer relative group"
          >
            <span className="group-hover:before:absolute group-hover:before:-inset-1 group-hover:before:border group-hover:before:border-green-400 group-hover:before:animate-pulse">
              {skill.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
