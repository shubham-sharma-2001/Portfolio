import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
export const Works = () => {
  return (
    <div>
      <div className="works">
        {/* left side */}
        <div className="awesome">
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa
            cupiditate.
          </span>

          <button className="button s-button">Hire Me</button>
        </div>

        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">

          <div className="w-secCircle upwork">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle fiver">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle amazon">
            <img src={Amazon} alt="" />
          </div>{' '}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle facebook">
            <img src={Facebook} alt="" />
          </div>
          {/* background Circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
