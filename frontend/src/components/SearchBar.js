import { AiOutlineClose, AiFillCrown } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const variants = {
  open: {
    display: 'none',
    opacity: 0,
    height: 0,
    transition: { delayChildren: 0.5,
      staggerDirection: -1 }
  },
  closed: {
    display: 'block',
    opacity: 1,
  },
}

const SearchBar = ({setSearch, search, setResult, setToggleSearch ,toggleSearch}) => {
    // React hooks
    const navigate = useNavigate()
    const location = useLocation()
    const menu = useRef(null)
    
    // functions
    const handleSubmit = (e,res) => {
        e.preventDefault()
        setToggleSearch(toggle => !toggle)
        navigate('/search')
        if(res){
            setSearch(res)
            setResult(res)
        }else{
            setResult(search)
        }
        }  

    // useEffect hook    
    useEffect(() => {
        setToggleSearch(false)
    },[location.pathname])

    useEffect(() => {
        const clickedOutside = (e) => {
            if(!menu.current?.contains(e.target)){
                setToggleSearch(false)
            }
        }
        document.addEventListener('mousedown',clickedOutside)
        return () => {
            document.removeEventListener('mousedown',clickedOutside)
        }
    })

    return (
        <motion.form
            animate={toggleSearch ? 'closed' : 'open'}
            variants={variants}
            onSubmit={handleSubmit}
            className="search"
            ref={menu}
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
                onChange={(e) => {
                    e.stopPropagation()
                    setSearch(e.target.value)
                }}
                />
                <AiOutlineClose
                style={{ marginLeft: 'auto', cursor: 'pointer' }}
                color="rgb(100,100,100)"
                onClick={(e) => {
                    e.stopPropagation()
                    setSearch('')
                }}
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
                        handleSubmit(e,"Samsung s22");
                    }}>Samsung s22</motion.li>
                <motion.li>Iphone 12</motion.li>
                <motion.li>Acer xertwo</motion.li>
                <motion.li>Iphone 14 pro max charger</motion.li>
            </motion.ul>
            </motion.form>
    )
}

export default SearchBar