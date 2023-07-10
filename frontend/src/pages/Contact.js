import {Box} from "@mui/material"
import {BsFillTelephoneInboundFill,BsFillEnvelopeFill, BsFacebook,BsFillGeoFill} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai"
function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1> <span>Contact</span> Us</h1>
        <h5> Any questions or complaints? don't hesitate to ask!</h5>
      </div>
      <Box sx={{ boxShadow:10,width:1000,height:450,borderRadius:10,mt:2}}>
        <div className="image-word">
          <h2>Contact Information</h2>
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
        <div className="contact-form">

        </div>
      </Box>
    </div>
  )
}

export default Contact