import React from 'react'
import Github from '../../img/git.png'
import LinkedIn from '../../img/linked.png'
import InstaGram from '../../img/insta.png'
import "./Intro.css"
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Smile from '../../img/smile.png'
import FloatingDiv from '../FloatingDiv/Floating'


// import { motion } from "framer-motion"
// import { AnimatePresence } from "framer-motion";
const Intro = () => {
  // const transition = { duration: 2, type: "spring" };
 

  return (
    <div >
      <div className="intro">
        <div className="i-left">
            <div className="i-name">
               <span>Hy! I Am</span>   
               <span>Shubham Sharma</span> 
                <span>FrontEnd developer With high experience in web desiging and development</span>
            </div>
           <button className="i-button button">Hire Me</button>
           <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={InstaGram} alt="" />
           </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />


            <img 
            // initial={{ left: "-36%" }}
            // whileInView={{ left: "-24%" }}
            // transition={transition}
            
            src={Smile} alt="" />

            
            <div className='float-one' style={{top:'-1%',left:'68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>


            <div className='float-two' style={{top:'12rem',left:'0rem'}}>
                <FloatingDiv  image={thumbup} txt1='Best In Desiging'/>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Intro
