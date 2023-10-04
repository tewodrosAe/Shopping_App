import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { ImCart } from 'react-icons/im'
import { FaUserAlt } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { navs } from '../constants'
import MenuPhone from './MenuPhone'
import { useSelector } from 'react-redux'
import UserDetail from './UserDetail'
import { disableScroll } from '../utils'

export default function Nav({setResult}) {
  // react hooks
  const [pos, setPos] = useState('180vw')
  const [toggleSearch, setToggleSearch] = useState(false)
  const [search, setSearch] = useState('')
  const [transparent, setTransparent] = useState(true)
  const { user } = useSelector(state => state.user)
  const location = useLocation()
  const navigate = useNavigate()
  const [hovered, setHovered] = useState()

  //functions
  const onToggleClick = () => {
    let disable
    if (pos === '0') {
      setPos('180vw')
      disableScroll(disable=false)
    } else {
      setPos('0')  
      disableScroll(disable=true)
    }
  }

  const changeNav = () => {
      if(window.scrollY < 10){
        setTransparent(true)
      }
      else{
        setTransparent(false)
      }
    }
  const handleHover = (name) => {
    setHovered(`${name}`)
  }
  // useEffect
  useEffect(() => {
    if(location.pathname === '/'){
      setTransparent(true)
      window.addEventListener('scroll',changeNav)
    }
    else{
      setTransparent(false)
    }
    return () => {
      window.removeEventListener("scroll",changeNav);
    }
  },[location.pathname])



  return (
    <div 
      className={`nav ${transparent && "nav-transparent"}`}
    >
      <Link to="/" className="logo pointer">
        <img src="/logo.png" alt="Logo" />
        <h1>TECH STOP</h1>
      </Link>

      <ul className='navbar-links' >
        {navs.map((nav) => (
          <Link
            key={nav.nav}
            to={nav.path}
            className={`light-theme ${transparent && "white-text"}`}
            onMouseOver={() => setHovered(nav.nav)}
            onMouseLeave={() => setHovered()}
          >{nav.nav}
            <div className={`custom-line ${hovered === nav.nav ? '': 'hidden'}`} id={`${hovered === nav.nav ? ' ': 'hidden'}`}/>
          </Link>
        ))}
      </ul>

      <div className="nav-three ">
        <BsSearch
          className={`pointer ${transparent && "white-text"}`}
          onClick={() => setToggleSearch((toggle) => !toggle)}
        />
        <SearchBar
          setSearch={setSearch} 
          search={search}
          setResult={setResult}
          setToggleSearch={setToggleSearch}
          toggleSearch={toggleSearch}
        />
        <div onClick={onToggleClick} className='menu'>
          <img alt="toggle" src={!transparent ? '/menu.svg' : '/menu_transparent.svg'} />
        </div>
        <Link to={'/cart'} className={`cart-pointer ${!transparent && 'black-text'}`}>
          <ImCart className={`car ${transparent && "white-text"}`} />
          <div
            className={
              `shopping-counter ${transparent && "shopping-counter-dark "}`
            }
          >
            0
          </div>
        </Link>
        {
          !user ?
          <div className={`user btn-hover ${transparent ? "btn-hover-dark" : 'user-dark'}`}  onClick={() => navigate('/user/login')}>
            <FaUserAlt />
            <p>Sign in</p>
          </div>:
          <UserDetail classname='hide'/>
        }
      </div>
      <MenuPhone
        pos={pos}
        onToggleClick={onToggleClick}
        navigate={navigate}
        navs={navs}
        user={user}
      />
    </div>
  )
}
