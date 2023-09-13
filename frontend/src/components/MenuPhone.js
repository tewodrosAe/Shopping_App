import { useEffect, useRef } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { ImCart } from "react-icons/im"
import { Link } from "react-router-dom"
import UserDetail from "./UserDetail"

const MenuPhone = ({pos,onToggleClick,navigate,navs,user}) => {
    // react hooks
    const menu = useRef('null')    
  
    // useEffects and eventlisteners
    useEffect(() => {
        const clickedOutside = (e) => {
            if(!menu.current?.contains(e.target)){
                onToggleClick()
            }
        }
        if(pos === '0'){
            document.addEventListener('mousedown',clickedOutside)
        }
        return () => {
            document.removeEventListener('mousedown',clickedOutside)
        }
    })
    
    return (
        <div className="navbar-phone" style={{ translate: pos }} ref={menu}>
            <AiOutlineClose id="close" size={20} onClick={onToggleClick} />
            {
                !user?
                <div className="user-phone user-dark btn-hover" onClick={() => {
                    onToggleClick()
                    navigate('/user/login')
                    }}>
                    <FaUserAlt />
                    <p>Sign in</p>
                </div>:
                <UserDetail />
            }
            <ul className="nav-phone">
                {navs.map((n) => (
                <Link key={n.nav} to={n.path} reloadDocument>
                    {n.nav}
                </Link>
                ))}
            </ul>
            <div className="nav-three-phone">
                <Link to={'/cart'} className="cart-pointer-phone">
                <ImCart className="car" />
                <div className={'shopping-counter'}>0</div>
                </Link>
            </div>
        </div>
    )
}

export default MenuPhone