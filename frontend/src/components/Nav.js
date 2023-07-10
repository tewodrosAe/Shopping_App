import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { ImCart } from 'react-icons/im'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Nav({ isDark }) {
  const [pos,setPos] = useState("-180vw")
  const nav = [
    { nav: 'Home', path: '/' },
    { nav: 'Gallery', path: '/gallery' },
    { nav: 'Sale', path: '/sale' },
    { nav: 'Contact', path: '/contact' },
  ]
  function onToggleClick() {
    if (pos === "0"){
      setPos("180vw")
    }
    else{
      setPos("0")
    }
  }
  
  return (
    <div className="nav">
      <Link to="/" className="logo pointer">
        <img src="logo.png" alt="Logo" />
        <h1>TECH STOP</h1>
      </Link>

      <ul className="navbar-links">
        {nav.map((n) => (
          <Link
            key={n.nav}
            to={n.path}
            className={isDark ? 'dark-theme' : 'light-theme'}
          >
            {n.nav}
          </Link>
        ))}
      </ul>

      <div className="nav-three ">
        <BsSearch className="pointer" />
        <div className="search">
        <motion.input
          className="search-input"
          />
        </div>
        <div onClick={onToggleClick} className="menu">
          <img alt="toggle" src="/menu.svg" />
        </div>
        <div className="cart-pointer">
          <ImCart className="car" />
          <div
            className={
              isDark
                ? 'shopping-counter shopping-counter-dark'
                : 'shopping-counter'
            }
          >
            0
          </div>
        </div>
        <div className="user user-dark btn-hover">
          <FaUserAlt />
          <p>Sign in</p>
        </div>
      </div>
      <div className="navbar-phone" style={{translate:pos}}>
        <AiOutlineClose id='close' size={20} onClick={onToggleClick}/>
        <div className="user-phone user-dark btn-hover">
          <FaUserAlt />
          <p>Sign in</p>
        </div>
        <ul className='nav-phone'>
          {nav.map((n) => (
            <Link key={n.nav} to={n.path}>
              {n.nav}
            </Link>
          ))}
        </ul>
        <div className="nav-three-phone">
          <div className="cart-pointer-phone">
            <ImCart className="car" />
            <div
              className={
                'shopping-counter'
              }
            >
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
