import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook, BsFillEnvelopeFill, BsFillGeoFill, BsFillTelephoneInboundFill } from "react-icons/bs"

const ContactSidebar = () => {
  return (
    <div className="image-word">
        <h2>Contact Us</h2>
        <h5>Say something we will answer as soon as possible!</h5>
        <ul className="contact-icons">
        <li><BsFillTelephoneInboundFill size={18}/> <span>+1 378 3778 9229</span></li>
        <li><BsFillEnvelopeFill size={18}/> <span>techstop@gmail.com</span></li>
        <li><BsFillGeoFill size={28}/> <span>Ms 33 Hwy #CROSB Crosby, Mississippi(MS), 39633</span></li>
        </ul>
        <ul className="contact-socials">
        <AiFillTwitterCircle size={25}/>
        <BsFacebook size={23}/>
        <AiFillInstagram size={25}/>
        </ul>
    </div>
  )
}

export default ContactSidebar