import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const CartItem = () => {
  return (
    <>
        <div className="cart-item">
            <div className="item-image">
                <img src="/samsungs22.png" alt="item" />
                <div className='item-image-text'>
                    <span>Samsung S22</span>
                    <em>Delete</em>
                </div>
            </div>
            <div className="price">
               <span className='hide-phone'>Price:&nbsp;</span> $700
            </div>
            <div className="quantity">
                <AiOutlineMinus size={22}/>
                <div className="quantity-text">
                    2
                </div>
                <AiOutlinePlus size={22}/>
            </div>
            <div className="item-total">
            <span className='hide-phone'>Total:&nbsp;</span>$1400
            </div>
        </div>
        <div className='break item-break'/>
    </>
  )
}

export default CartItem