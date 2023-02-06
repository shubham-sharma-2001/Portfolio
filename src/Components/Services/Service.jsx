import React from 'react'
import './Service.css'
import Heart from '../../img/heart.png'
import Glass from '../../img/glass.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
function Service() {
  return(
    <div className='Service' id='Services'>
        <div className='awesome'>
            <span>My Awesome</span>
            <span>Service</span>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa cupiditate.
            </span>

            <a href={Resume} download>

            <button className="button s-button">Download CV</button>
            </a>
        </div>
        
        <div className="cards">
          <div style={{left: '5rem'}}>

          <Card 
              image={Heart}
              Heading={'Design'}
              Text={'HTML,CSS,TailwindCSS'}
              
              />
        </div>
       <div style={{top:'10rem',left:'-8rem'}}>
       <Card 
              image={Glass}
              Heading={'Developer'}
              Text={'Html, Css, JavaScript, React, Nodejs, Express'}

            />
       </div>
       <div style={{top:'15rem',left:'5rem '}}>
       <Card 
              image={Humble}
              Heading={'UI/UX'}
              Text={'Lorem ispum dummy text are usually use '}

            /> 

       </div>
          
        </div>
    </div>
  )
}

export default Service