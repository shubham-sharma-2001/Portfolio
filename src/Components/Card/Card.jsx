import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
      <div className="card">
            <img src={props.image} alt="" />
            <span>{props.Heading}</span>
            <span>{props.Text}</span>
            <button className='c-button'>Learn More</button>
      </div>
    </div>
  )
}

export default Card
