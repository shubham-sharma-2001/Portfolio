import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'
import {Link} from "react-scroll";

function Navbar() {


  
  return (

    <div className='n-wrapper'>
         <div className="n-left">
            <div className="n-name">Shubham</div>
            <Toggle />
         </div>
         <div className="n-right">
            <div className="n-list"> 
            <ul>
              
              
                <li>Home</li>
              
              <Link spy={true} smooth={true} to='Services' >
              
              <li>Services</li>
              </Link>
              <Link spy={true} smooth={true} to='Expericence' >
              
              <li>Expericence</li>
              </Link>
              <Link spy={true} smooth={true} to='Porfolio' >
              
              <li>Porfolio</li>
              </Link>
              <Link spy={true} smooth={true} to='Testimonials' >
              
              <li>Testimonials</li>
              </Link>
                
                
                
                

            </ul>
            </div>
            <button className="button">Contact Us</button>
         </div>

    </div>
  )
}

export default Navbar