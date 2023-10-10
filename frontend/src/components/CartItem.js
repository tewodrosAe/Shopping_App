import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addQuantity, removeCart, removeQuantity } from '../redux/cartSlice'
import axios from 'axios'
import { path } from '../constants'

const CartItem = ({cart}) => {
    //React hooks
    const dispatch = useDispatch()
    //Event handlers
    const handleDelete = async() => {
        try{
            await axios.post(`${path}/cart/remove`, {productId: cart.productId, userId: cart.userId})
            dispatch(removeCart(cart.productId))
        }catch(e){
            console.log(e)
        }
    }
    return (
        <>
            <div className="cart-item">
                <div className="item-image">
                    <img src={cart.image} alt="item" />
                    <div className='item-image-text'>
                        <span>{cart.name}</span>
                        <em onClick={handleDelete}>Delete</em>
                    </div>
                </div>
                <div className="price">
                <span className='hide-phone'>Price:&nbsp;</span> ${cart.price.toFixed(2)}
                </div>
                <div className="quantity">
                    <AiOutlineMinus size={22} onClick={() => dispatch(removeQuantity(cart))}/>
                    <div className="quantity-text">
                        {cart.quantity}
                    </div>
                    <AiOutlinePlus size={22} onClick={() => dispatch(addQuantity(cart))}/>
                </div>
                <div className="item-total">
                <span className='hide-phone'>Total:&nbsp;</span>${(cart.quantity * cart.price).toFixed(2)}
                </div>
            </div>
            <div className='break item-break'/>
        </>
    )
}

export default CartItem