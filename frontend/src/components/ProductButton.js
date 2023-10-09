import { BsFillBookmarkPlusFill, BsFillCartPlusFill } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { addCart } from "../redux/cartSlice"
import { useNavigate } from "react-router-dom"
import { path } from "../constants"
import axios from "axios"

const ProductButton = ({product,userId}) => {
  //React Hooks
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Event handlers
  const handleCart = async() => {
    const productDetail = {
      name: product.name,
      image: product.picture[0],
      productId: product._id,
      userId,
      description: product.description,
      quantity: 1,
      category: product.category,
      price: product.price
    }

    try{
      const newCart = await axios.post(`${path}/cart/create`,{productDetail})
      dispatch(addCart(newCart.data))
      navigate('/cart')
    }catch(e){
      console.log('Something went Wrong!')
      navigate('/cart')
    }
  }

  return (
    <>
        <button>
            <BsFillBookmarkPlusFill /> Save
        </button>
        <button onClick={handleCart}>
            <BsFillCartPlusFill /> Add to Cart
        </button>
    </>
  )
}

export default ProductButton