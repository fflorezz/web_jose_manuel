import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <heade className="flex justify-between items-center text-gray-600 py-4 border-b border-gray-200">
      <div className="text-4xl font-bold ">José Manuel Freidel</div>
      <nav className="w-5/12">
        <ul className="flex justify-between text-3xl font-bold">
          <li>
            <Link to="/bio">Bio</Link>
          </li>
          <li>Obras</li>
          <li>Noticias</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </heade>
  );
};

export default Header;
