import { Link } from "react-router-dom"
import {BsBag, BsBorderStyle, BsCollection, BsShop} from 'react-icons/bs'
import {LuLayoutDashboard} from 'react-icons/lu'
import {MdOutlineAdminPanelSettings} from 'react-icons/md'
import {BiLogOutCircle} from 'react-icons/bi'

const Nav = () => {
  const logout = () => {
    console.log('logout')
  }
  return (
    <div className="h-screen w-60 bg-slate-200 flex-column p-4 pl-6 text-black">
      <h4 className="mb-4 flex gap-2 align-middle text-xl"> <BsShop size={23}/> TechStop Admin</h4>
      <ul className="flex flex-col gap-6 text-lg ml-2 mt-8">
         <li> <Link to={`/`} className="flex items-center gap-2"> <LuLayoutDashboard size={20}/> Dashboard </Link></li>
         <li> <Link to={`/products`} className="flex items-center gap-2"> <BsBag/>Products </Link></li>
         <li> <Link to={`/categories`} className="flex items-center gap-2"> <BsCollection/> Categories </Link></li>
         <li> <Link to={`/orders`} className="flex items-center gap-2"> <BsBorderStyle/> Orders </Link></li>
         <li> <Link to={`/admins`} className="flex items-center gap-2"> <MdOutlineAdminPanelSettings size={20}/> Admins </Link></li>
         <li onClick={logout} className="flex items-center gap-2"> <BiLogOutCircle size={20}/> Logout </li>
      </ul>
    </div>
  )
}

export default Nav

