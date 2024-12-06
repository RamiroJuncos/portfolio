import React from "react";
import { Link } from "react-router-dom";

const routes = [
  { path: "/", label: "Inicio" },
  { path: "proyects", label: "Proyectos" },
  { path: "skills", label: "Habilidades" },
  { path: "contact", label: "Contacto" },
];

function Navbar() {
  return (
    <nav className="relative z-50 bg-black shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-white hover:text-green-400 transition duration-300">
          Ramiro Juncos
        </Link>
        <ul className="lg:flex lg:space-x-8 items-center hidden">
          {routes.map(({ path, label }, index) => (
            <li key={index} className="neon-item group">
              <Link
                to={path}
                className="text-white font-medium hover:text-green-400 transition duration-300 relative group"
              >
                {label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
