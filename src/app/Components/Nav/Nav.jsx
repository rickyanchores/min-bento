import React from 'react'

const Nav = () => {
  return (
    <div className='Nav bg-black text-white p-4  flex justify-around items-center'>
        <div className="logo font-bold text-2xl">NAV</div>
        <ul className="navList flex justify-center items-center gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Nav; 