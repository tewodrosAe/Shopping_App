import React from 'react'
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
export default function Nav({isDark}) {
  const nav = ['Home', 'Gallery', 'Shop', 'Contact']
  return (
    
    <div className={isDark ? 'nav nav-dark':'nav'}>
      <div className='logo'>
        <img src='logo.png'/>
        <h1>TECH STOP</h1>
      </div>
      
        <ul className="navbar-links">
          {nav.map((navs) => (
            <li>{navs}</li>
            ))}
        </ul>
      
      <div className='nav-three'>
        <BsSearch />
        <div className='cart'>
            <ImCart className='car'/>
            <div className={isDark ? 'shopping-counter shopping-counter-dark':'shopping-counter'}>
                0
            </div>
        </div>
        <div className={isDark ? 'user': 'user user-dark'}>
            <FaUserAlt/>
            <p>Sign in</p>
        </div>
      </div>
    </div>
   
  )
}
