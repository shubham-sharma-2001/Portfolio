import React from 'react'
import './Contact.css'


const Contact = () => {

  



  return (
    
    <form >
        <div className='center'>
                <div className="contact">
                    <div className="info">
                        <span>Get in Touch</span>
                        <span>Contact me</span>
                    </div>

                    <div className='form'>
                        <input type="text" className='user' name='user_name' placeholder='Name'/>
                        <input type="text" className='user' name='user_email' placeholder='Email'/>
                        <textarea name="message" id=""  placeholder='Message' className='user'/>
                        <input type="submit" value='Send' className='button c-button'/>

                    </div>
                </div>
            </div>

    </form>
  )
}

export default Contact