import React from "react";
import { Link } from "gatsby";
import NavLink from "./header-navLink";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-gray-600 py-4 border-b border-gray-200">
      <Link to="/" className="text-4xl font-bold ">
        José Manuel Freidel
      </Link>
      <nav className="w-5/12">
        <ul className="flex justify-between text-3xl font-bold">
          <NavLink url="/bio">Bio</NavLink>
          <NavLink url="/obras">Obras</NavLink>
          <NavLink url="/noticias">Noticias</NavLink>
          <NavLink url="/contacto">Contacto</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
