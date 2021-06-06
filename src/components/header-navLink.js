import React from "react";
import { Link } from "gatsby";

const NavLink = ({ children, url }) => {
  return (
    <li className="hover:text-indigo-600 ">
      <Link to={url} activeClassName="text-indigo-600">
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
