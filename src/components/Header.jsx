import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import MenuMobile from "./MenuMobile"
import { FaBars } from "react-icons/fa"
import img from '../images/logo3.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
   
    <nav className="px-10   pt-3  pb-1 md:pb-6 md:pt-6 mt-0 fixed w-full z-30 bg-gray-100  ">
      <div className="flex justify-between items-center ">
        <Link to="/" className="flex">
          <img alt="Logo" className="w-32 md:w-32 pb-3" src={img} />
          
        </Link>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="h-6 w-auto text-gray-900 fill-current -mt-1" />
        </button>

        <div className="hidden sm:block">
          {site.data.menu.map((link, key) => (
            <Link
              key={`menu_desktop_link${key}`}
              className="ml-6 sm:ml-8 text-xs  md:text-base font-medium px-px border-b-2 pb-2 border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-200 transition duration-150 ease-in-out uppercase font-mono"
              activeClassName="border-accentColor text-gray-900 hover:border-red-400"
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <MenuMobile
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        links={site.data.menu}
      />
    </nav>
   
  )
}

export default Header
