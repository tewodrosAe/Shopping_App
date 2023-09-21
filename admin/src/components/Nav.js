import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsBag, BsBorderStyle, BsCollection, BsShop} from 'react-icons/bs'
import {LuLayoutDashboard} from 'react-icons/lu'
import {MdOutlineAdminPanelSettings} from 'react-icons/md'
import {BiLogOutCircle} from 'react-icons/bi'
import { useState } from "react"
import { capitalize } from "../utils"

const Nav = () => {
  // React Hooks
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [active, setActive] = useState(capitalize(pathname)) 

  // Functions
  const logout = () => {
    console.log('logout')
  }
  const handleClick = (e) => {
    const text = e.target.innerText
    setActive(text)
    if(text === 'Dashboard'){
      navigate('/')
    }
    else{
      navigate(`/${text}`)
    }
  }

  return (
    <div className="h-screen w-60 bg-slate-100 flex-column p-4 pl-6 text-primary fixed shadow-slate-800/30 shadow-2xl">
      <h4 className="mb-4 flex gap-2 align-middle text-xl"> <BsShop size={23}/> TechStop Admin</h4>
      <ul className="flex flex-col gap-6 text-lg ml-2 mt-8">
         <li> <Link to={`/`} className="flex items-center gap-2" id={active === 'Dashboard' ?'active-nav' : undefined} onClick={handleClick}> <LuLayoutDashboard size={20}/> Dashboard </Link></li>
         <li> <Link to={`/products`} className="flex items-center gap-2" id={active === 'Products' ? 'active-nav': undefined} onClick={handleClick}> <BsBag/>Products </Link></li>
         <li> <Link to={`/categories`} className="flex items-center gap-2" id={active === 'Categories' ? 'active-nav': undefined}onClick={handleClick}> <BsCollection/> Categories </Link></li>
         <li> <Link to={`/orders`} className="flex items-center gap-2" id={active === 'Orders' ? 'active-nav': undefined} onClick={handleClick}> <BsBorderStyle/> Orders </Link></li>
         <li> <Link to={`/admins`} className="flex items-center gap-2" id={active === 'Admins' ? 'active-nav': undefined} onClick={handleClick}> <MdOutlineAdminPanelSettings size={20}/> Admins </Link></li>
         <li onClick={logout} className="flex items-center gap-2 cursor-pointer"> <BiLogOutCircle size={20}/> Logout </li>
      </ul>
    </div>
  )
}

export default Nav

