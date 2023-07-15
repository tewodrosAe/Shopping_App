import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose, AiFillCrown } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { ImCart } from 'react-icons/im'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const variants = {
  open: {
    display: 'none',
    opacity: 0,
    height: 0,
    transition: { delayChildren: 0.5,
      staggerDirection: -1 },
  },
  closed: {
    display: 'block',
    opacity: 1,
  },
}

export default function Nav({ search,setSearch, setResult}) {
  const navigate = useNavigate()
  const [pos, setPos] = useState('-180vw')
  const [toggleSearch, setToggleSearch] = useState(false)

  const nav = [
    { nav: 'Home', path: '/' },
    { nav: 'Gallery', path: '/gallery' },
    { nav: 'Sale', path: '/sale' },
    { nav: 'Contact', path: '/contact' },
  ]
  const onToggleClick = () => {
    if (pos === '0') {
      setPos('180vw')
    } else {
      setPos('0')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setToggleSearch(toggle => !toggle)
    navigate('/search')
    setResult(search)
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
            className={'light-theme'}
          >
            {n.nav}
          </Link>
        ))}
      </ul>

      <div className="nav-three ">
        <BsSearch
          className="pointer"
          onClick={() => setToggleSearch((toggle) => !toggle)}
        />
        <motion.form
          animate={toggleSearch ? 'closed' : 'open'}
          variants={variants}
          onSubmit={handleSubmit}
          className="search"
        >
          <motion.div className="search-input">
            <BiSearchAlt
              size={18}
              color="rgb(110, 110, 110)"
              style={{ cursor: 'pointer' }}
            />
            <input
              placeholder="Search a product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <AiOutlineClose
              style={{ marginLeft: 'auto', cursor: 'pointer' }}
              color="rgb(100,100,100)"
              onClick={() => setSearch('')}
            />
          </motion.div>
          <h4>
            {' '}
            <AiFillCrown />
            Popular
          </h4>
          <motion.ul>
            <motion.li onClick={
              (e) => {
                setSearch("Samsung s22")
                handleSubmit(e);
            }}>Samsung s22</motion.li>
            <motion.li>Iphone 12</motion.li>
            <motion.li>Acer xertwo</motion.li>
            <motion.li>Iphone 14 pro max charger</motion.li>
          </motion.ul>
        </motion.form>
        <div onClick={onToggleClick} className="menu">
          <img alt="toggle" src="/menu.svg" />
        </div>
        <div className="cart-pointer">
          <ImCart className="car" />
          <div
            className={
              'shopping-counter'
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
      <div className="navbar-phone" style={{ translate: pos }}>
        <AiOutlineClose id="close" size={20} onClick={onToggleClick} />
        <div className="user-phone user-dark btn-hover">
          <FaUserAlt />
          <p>Sign in</p>
        </div>
        <ul className="nav-phone">
          {nav.map((n) => (
            <Link key={n.nav} to={n.path} reloadDocument>
              {n.nav}
            </Link>
          ))}
        </ul>
        <div className="nav-three-phone">
          <div className="cart-pointer-phone">
            <ImCart className="car" />
            <div className={'shopping-counter'}>0</div>
          </div>
        </div>
      </div>
    </div>
  )
}
