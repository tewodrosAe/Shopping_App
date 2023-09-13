import { useState } from "react"
import ContactSidebar from "../components/ContactSidebar"
import { Button } from '@mui/material'

function Contact() {
  const [contactData, setContactData] = useState({name:'',email:'',message:'',subject:''})
  const changeContactData = (e) => {
    setContactData({...contactData,[e.target.name] :e.target.value})
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setContactData({name:'',email:'',message:'',subject:''})
  }
  
  return (
    <div className="contact">
      <div className="contact-title">
        <h1> <span>Contact</span> Us</h1>
        <h5> Any questions or complaints? don't hesitate to ask!</h5>
      </div>
      <div className="contact-col">
        <div className="contact-form">
          <h2> Get In Touch </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contactData?.name}
              onChange={(e) => changeContactData(e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactData?.email}
              onChange={(e) => changeContactData(e)}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={contactData?.subject}
              onChange={(e) => changeContactData(e)}
            />
            <textarea
              type="text"
              name="message"
              id="large"
              placeholder="Message"
              value={contactData?.message}
              onChange={(e) => changeContactData(e)}
            />
            <Button type="submit" sx={{marginTop:2, width:100}} variant="contained"> Send </Button>
          </form>
        </div>
        <ContactSidebar/>  
      </div>
    </div>
  )
}

export default Contact