import React from "react";
import { Link } from "gatsby";
import NavLink from "./header-navLink";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 max-w-screen-xl mx-auto px-10 z-10 ">
      <div className="flex justify-between items-center   py-2 bg-white shadow-sm">
        <Link to="/" className="text-2xl font-black text-gray-800 ">
          José Manuel Freidel
        </Link>
        <nav className="w-3/12">
          <ul className="flex justify-between">
            <NavLink url="/bio">Bio</NavLink>
            <NavLink url="/obras">Obras</NavLink>
            <NavLink url="/noticias">Noticias</NavLink>
            <NavLink url="/contacto">Contacto</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
