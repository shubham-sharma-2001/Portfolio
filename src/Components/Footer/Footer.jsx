import React from 'react'
import Wave from '../../img/wave.png'
import './Footer.css'
import Github from '../../img/git.png'
import LinkedIn from '../../img/linked.png'
import InstaGram from '../../img/insta.png'
const Footer = () => {
  return (
    <div>
        <div className="footer">
            <img src={Wave} alt="" />
            <span>shubhamsoorajsharma@gmail.com</span>
            <div className="f-icon">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={InstaGram} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer