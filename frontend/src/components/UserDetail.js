import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineInfoCircle, AiOutlineLogout } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const UserDetail = ({classname}) => {
    // React hooks
    const {detail} = useSelector(state => state.userDetail)
    const [clicked,setClicked] = useState(false)
    const navigate = useNavigate()
    const menu = useRef()

    // Event functions
    const logout = () =>{
        localStorage.removeItem('user')
        window.location.reload()
    }

    // useEffects
    useEffect(() => {
        const clickedOutside = (e) => {
            if(!menu.current?.contains(e.target)){
                setClicked(clicked => !clicked)
            }
        }
        if(clicked){
            document.addEventListener('mousedown',clickedOutside)
        }
        return () => {
            document.removeEventListener('mousedown',clickedOutside)
        }
    })
    return (
    <div className={`user-detail ${classname && classname}`}>
        <div className="img-icon" onClick={() => setClicked(click => !click)}>
            {   detail &&
                <img src={detail?.profile} alt="profile" />
            }
        </div>
        {
            clicked &&
        <div ref={menu} className="user-dropdown">
            <h5>{detail?.username}</h5>
            <ul>
                <li onClick={() => {navigate('/detail'); setClicked(false)}}>More Info <AiOutlineInfoCircle size={18}/></li>
                <div className="break" id='user-break'></div>
                <li onClick={logout}>Logout <AiOutlineLogout size={18}/></li>
                <div className="break" id='user-break'></div>
            </ul>
        </div>
        }
    </div>
    )
}

export default UserDetail