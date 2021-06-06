import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <heade className="flex justify-between items-center text-gray-600 py-4 border-b border-gray-200">
      <Link to="/" className="text-4xl font-bold ">
        José Manuel Freidel
      </Link>
      <nav className="w-5/12">
        <ul className="flex justify-between text-3xl font-bold">
          <li>
            <Link to="/bio">Bio</Link>
          </li>
          <li>
            <Link to="/obras">Obras</Link>
          </li>
          <li>
            <Link to="/noticias">Noticias</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </heade>
  );
};

export default Header;
