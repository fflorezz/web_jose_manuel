import React, { useState } from 'react'
import { Link } from 'gatsby'
import NavLink from './header-navLink'
import NavLinkMobile from './header-navLink-mobile'

import './header.css'

const Header = () => {
  const [isMenuOpen, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!isMenuOpen)
  const buttonOpenStyles = isMenuOpen ? 'open' : ''
  const headerOpenStyles = isMenuOpen ? 'bottom-0 bg-white' : ''

  return (
    <header
      className={`px-6 mx-auto fixed left-0 right-0 top-0 max-w-full z-10 lg:px-10 lg:max-w-screen-xl ${headerOpenStyles}`}
    >
      <div className="flex justify-between items-center py-6 px-0 bg-white shadow-sm lg:px-4 lg:py-2">
        <Link to="/" className="text-2xl font-black text-gray-800 ">
          José Manuel Freidel
        </Link>
        <button
          onClick={toggleMenu}
          className={`inline lg:hidden menuToggle ${buttonOpenStyles}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="hidden lg:inline">
          <ul className="flex">
            <NavLink url="/bio">Bio</NavLink>
            <NavLink url="/obras">Obras</NavLink>
            <NavLink url="/noticias">Noticias</NavLink>
            <NavLink url="/contacto">Contacto</NavLink>
          </ul>
        </nav>
      </div>
      <div>
        {isMenuOpen && (
          <nav>
            <ul className="flex flex-col items-center justify-center -mt-16 h-screen">
              <NavLinkMobile url="/bio">Bio</NavLinkMobile>
              <NavLinkMobile url="/obras">Obras</NavLinkMobile>
              <NavLinkMobile url="/noticias">Noticias</NavLinkMobile>
              <NavLinkMobile url="/contacto">Contacto</NavLinkMobile>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
