import React from 'react'
import './Toggle.css'
import { UilSun } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'
const Toggle = () => {
  return (
    <div>
        <div className="toggle">
            <UilSun/>
            <UilMoon/>
            <div className="t-button">

            </div>
        </div>
    </div>
  )
}

export default Toggle