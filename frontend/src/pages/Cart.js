import CartItem from "../components/CartItem"
import UserNotFound from "../components/UserNotFound"
import { cartTitles, footerTwo } from "../constants"
import {BsFillBagCheckFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { detail } = useSelector(state => state.userDetail)
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {
        detail ?
      <>
      <div className="cart-grid">
        <ul className="cart-titles">
          {cartTitles.map((title) => <li key={title}>{title}</li>)}
        </ul>
        <div className='break cart-breakline'/>
        <div className="cart-items">
          {footerTwo.map((foot) => <CartItem key={foot}/>) }
        </div>
        <div className="item-subtotal">
          <div className="item-subtotal-grid">
            <h2>SUBTOTAL</h2>
            <span>$4500</span>
            <p>Taxes and shipping not included</p>
          </div>
          <button className="checkout-btn">CHECKOUT <BsFillBagCheckFill size={15} /></button>
        </div>
      </div>  
      </>:
      <UserNotFound/>
      }
      
    </div>
  )
}

export default Cart