import CartItem from "../components/CartItem"
import PayButton from "../components/PayButton"
import UserNotFound from "../components/UserNotFound"
import { cartTitles } from "../constants"
import { useSelector } from 'react-redux'

const Cart = () => {
  const { detail } = useSelector(state => state.userDetail)
  const { cart } = useSelector(state => state.cart)
  console.log(cart)
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
          {cart.map((c) => <CartItem key={c._id} cart={c} userId={detail._id}/>) }
        </div>
        {
          cart.length > 0 ?
          <div className="item-subtotal">
            <div className="item-subtotal-grid">
              <h2>SUBTOTAL</h2>
              <span>${cart.reduce((result,c) => result + (c.price * c.quantity),0)}</span>
              <p>Taxes and shipping not included</p>
            </div>
            <PayButton cart={cart} userId={detail._id}/>
          </div>:
          <div style={{textAlign:'center', width:'100%'}}>
            How very empty ;(
          </div>
        }
      </div>  
      </>:
      <UserNotFound/>
      }
      
    </div>
  )
}

export default Cart