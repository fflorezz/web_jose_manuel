import React from 'react'
import { Link } from 'gatsby'

const NavLink = ({ children, url }) => {
  return (
    <li className="text-4xl mb-10 font-bold text-gray-600 hover:text-indigo-600 ">
      <Link to={url} activeClassName="text-indigo-600 cursor-default">
        {children}
      </Link>
    </li>
  )
}

export default NavLink
