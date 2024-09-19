import React from 'react'

const Nav = () => {
  return (
    <div className='Nav bg-black text-white flex justify-around items-center'>
        <div className="logo">NAV</div>
        <ul className="navList">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Nav; 