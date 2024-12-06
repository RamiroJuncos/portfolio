

const projects = [
  {
    titulo: "Calculadora",
    descripcion: "Mi primer calculadora usando HTML,CSS, JavaScript.",
    link: "https://ramirojuncos.github.io/calculadora/",
  },
  {
    titulo: "Caja Registradora",
    descripcion: "Caja registradora usando HTML, CSS y JavaScript.",
    link: "https://ramirojuncos.github.io/caja-registradora/",
  },
  {
    titulo: "RickAndMorty",
    descripcion: "Pagina de rick and morty usando React, TailwandCSS y el API de RickAndMorty.",
    link: "https://ramirojuncos.github.io/rickandmortyapi/",
  },
  {
    titulo: "Ecommerce",
    descripcion: "Diseño Frontend para Ecommerce usando Tailwand CSS,React y API.",
    link: "https://ramirojuncos.github.io/ecommerce/",
  },
  {
    titulo: "Tateti",
    descripcion: "Tateti usando React y TailwandCSS.",
    link: "https://ramirojuncos.github.io/caja-registradora/",
  },
  {
    titulo: "Juego de Pokemon",
    descripcion: "Juego basico de Pokemon usando React y TailwandCSS.",
    link: "https://ramirojuncos.github.io/pokemon-app/",
  },
  {
    titulo: "Proyecto Villa Albino",
    descripcion: "Diseño FrontEnd para Club de Futbol Villa Albino utilizando React y TailwandCSS.",
    link: "https://ramirojuncos.github.io/albino-cliente/",
  },
];

function Proyects() {
  return (
    <div className="contact-container relative min-h-screen bg-black flex flex-col justify-center items-center text-black font-mono overflow-hidden">
      <div className="absolute inset-0 z-0 matrix-rain"></div>
      <h1 className="text-4xl md:text-5xl mb-6 neon-text">Proyectos</h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card  text-green-200 bg-black border-2 border-green-200  p-6 rounded-lg transform hover:scale-105 transition-all duration-300 neon-text"
          >
            <h2 className="text-2xl text-green-200 mb-4 font-semibold neon-text" >{project.titulo}</h2>
            <p className="text-sm mb-4">{project.descripcion}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-200 underline hover:text-green-200 transition-colors duration-200 neon-text"
            >
              Ver más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyects;
