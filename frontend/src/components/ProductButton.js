import { BsFillBookmarkPlusFill, BsFillCartPlusFill } from "react-icons/bs"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { useDispatch } from "react-redux"
import { addCart } from "../redux/cartSlice"
import { useNavigate } from "react-router-dom"
import { path } from "../constants"
import axios from "axios"
import { useEffect, useState } from "react"
import { addFav, removeFav } from "../redux/userDetailSlicer"

const ProductButton = ({product,userId,userDetail, color, storage}) => {
  //React Hooks
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)

  // Event handlers
  const handleCart = async() => {
    const productDetail = {
      name: product.name,
      image: product.picture[0],
      productId: product._id,
      description: product.description,
      quantity: 1,
      category: product.category,
      price: product.price,
      color,
      storage
    }

    try{
      const newCart = await axios.post(`${path}/cart/create`,{productDetail, userId})
      dispatch(addCart(newCart.data.products))
      navigate('/cart')
    }catch(e){
      console.log('Something went Wrong!')
      navigate('/cart')
    }
  }

  const handleSave = async() => {
    setLoading(true)
    try{
      if(saved){
        const newFav = userDetail.favoritesAdded.filter(fav => !fav[product._id] || fav[product._id].length <= 0)
        await axios.post(`${path}/userdetail/unfavorite`,{favorites:newFav, userId})
        dispatch(removeFav({id: product._id, newFav}))
        setSaved(false)
      }else{
        await axios.post(`${path}/userdetail/favorite`,{favorite:product._id, userId})
        dispatch(addFav({_id: product._id, name: product.name, picture: product.picture}))
        setSaved(true)
      }
    }catch(e){
      console.log(e)
    }
    setLoading(false)
  }

  // useEffect
  useEffect(() => {
    setSaved(false)
   const array =  userDetail?.favoritesAdded.filter(fav =>  fav[product?._id] === product?._id)
    console.log(array)
   if(array && array.length > 0){
    setSaved(true)
   }
  },[userDetail, product])

  return (
    <>
        <button onClick={handleSave}  style={{background: `${saved ? 'white' : 'black'}`,color: `${!saved ? 'white' : 'black'}`, border:'1px solid black', display:'flex',alignItems:'center', gap: 4, transition: '0.2s'}}>
          { !loading ?
            (!saved ?
            <>
              <MdFavoriteBorder size={14}/> Save
            </>:
            <>
              <MdFavorite size={14}/> Saved
            </>):
            <div>Loading...</div>
          }
        </button>
        <button onClick={handleCart}>
            <BsFillCartPlusFill /> Add to Cart
        </button>
    </>
  )
}

export default ProductButton