//import Link from 'next/link';
import React from 'react'
import Link from 'next/link'

const Nav = () => {

  let navLinks = [
    {
      id: 0,
      name: "Home",
      href: "/"
    },
    {
      id: 1,
      name: "About",
      href: "#About"
    },
    {
      id: 2,
      name: "Gallery",
      href: "#Gallery"
    },
    {
      id: 3,
      name: "Contact",
      href: "#Contact"
    }
  ]

  return (
    <div className='Nav bg-black text-white p-4  fixed top-0 w-full flex justify-around items-center'>
        <div className="logo font-bold text-2xl">NAV</div>
        <ul className="navList flex justify-center items-center gap-4">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href}>{link.name}</Link>
          ))}
        </ul>
    </div>
  )
}

export default Nav;