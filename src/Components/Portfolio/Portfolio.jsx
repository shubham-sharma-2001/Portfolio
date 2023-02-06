import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css';
const Portfolio = () => {
  return (
    <div>
      <div className='portfolio' id='Porfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>
      </div>
     

      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={MusicApp} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Portfolio
