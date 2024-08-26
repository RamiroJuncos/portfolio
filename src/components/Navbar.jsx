import React from "react";
import { Link } from "react-router-dom";

const routes = [
  { path: "/", label: "Home" },
  { path: "proyects", label: "Proyects" },
  { path: "skills", label: "Skills" },
  { path: "contact", label: "Contact" },
];

function Navbar() {
  return (
    <nav className="h-16 w-full relative z-50 shadow-lg">
      <ul className="flex justify-evenly items-center w-full h-full">
        {routes.map(({ path, label }, index) => (
          <li key={index}>
            <Link
              to={path}
              className="text-2xl mx-4 hover:text-red-700 hover:underline "
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
