import { BsFillBagCheckFill } from 'react-icons/bs'
import axios from 'axios'
import {path} from '../constants'

const PayButton = ({cart,userId}) => {
  // Eventhandlers
  const handleClick = () => {
    axios.post(`${path}/stripe/create-checkout-session`,{
      cart,
      userId
    }).then(res => {
      if(res.data.url){
        window.location.href = res.data.url
      }
    }).catch(e => {
      throw new Error({error: 'Something went wrong!'})
    })
  }
  return (
    <button className="checkout-btn" onClick={handleClick}>CHECKOUT <BsFillBagCheckFill size={15} /></button>
  )
}

export default PayButton