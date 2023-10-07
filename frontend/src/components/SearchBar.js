import { AiOutlineClose, AiFillCrown } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


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
    height: 'fit-content',
    opacity: 1,
  },
}

const SearchBar = ({ setToggleSearch ,toggleSearch }) => {
    // React hooks
    const navigate = useNavigate()
    const {products} = useSelector(state => state.product)
    const location = useLocation()
    const [search, setSearch] = useState()
    const menu = useRef(null)
    let [searchParams, setSearchParams] = useSearchParams();
    
    // functions
    const handleSubmit = (e,res) => {
        e.preventDefault()
        setToggleSearch(toggle => !toggle)
        if(res){
            navigate({
                pathname: "search",
                search: createSearchParams({
                    q: res
                }).toString()
            })
        }else{
            navigate({
                pathname: "search",
                search: createSearchParams({
                    q: search
                }).toString()
            })
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
    },[])

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
                    setSearch(e.target.value)
                }}
                />
                <AiOutlineClose
                style={{ marginLeft: 'auto', cursor: 'pointer' }}
                color="rgb(100,100,100)"
                onClick={(e) => {
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
                {
                    products.slice(2,7).map( product => (<motion.li key={product._id} onClick={    
                        (e) => {
                            handleSubmit(e,product.name);
                        }}>{product.name}</motion.li>))
                }
            </motion.ul>
            </motion.form>
    )
}

export default SearchBar