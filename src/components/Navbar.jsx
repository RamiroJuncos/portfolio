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
    <nav className="navbar-container relative z-50 shadow-lg">
      <ul className="flex justify-evenly items-center w-full h-full">
        {routes.map(({ path, label }, index) => (
          <li key={index} className="neon-item">
            <Link
              to={path}
              className="hover:text-green-300 neon-effect hover:animate-pulse transition duration-300 cursor-pointer relative group"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
