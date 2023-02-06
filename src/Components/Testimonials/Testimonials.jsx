import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Profile_one from '../../img/profile1.jpg';
import Profile_two from '../../img/profile2.jpg';
import Profile_three from '../../img/profile3.jpg';
import Profile_four from '../../img/profile4.jpg';
import Profile_five from '../../img/profile5.jpg';

import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  const clients = [
    {
      img: Profile_one,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quam aperiam reiciendis voluptate, deserunt nemo, asperiores debitis aut nesciunt, dolore magni minus quisquam neque expedita hic molestias id adipisci odio!Suscipit.',
    },
    {
      img: Profile_two,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quam aperiam reiciendis voluptate, deserunt nemo, asperiores debitis aut nesciunt, dolore magni minus quisquam neque expedita hic molestias id adipisci odioSuscipit.',
    },
    {
      img: Profile_three,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quam aperiam reiciendis voluptate, deserunt nemo, asperiores debitis aut nesciunt, dolore magni minus quisquam neque expedita hic molestias id adipisci odioSuscipit.',
    },
    {
      img: Profile_four,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quam aperiam reiciendis voluptate, deserunt nemo, asperiores debitis aut nesciunt, dolore magni minus quisquam neque expedita hic molestias id adipisci odioSuscipit.',
    },
    {
      img: Profile_five,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quam aperiam reiciendis voluptate, deserunt nemo, asperiores debitis aut nesciunt, dolore magni minus quisquam neque expedita hic molestias id adipisci odioSuscipit.',
    },
  ];
  return (
    <div id='Testimonials'>
      <div className="t-wrapper">
        <div className="t-heading">
          <center >
            <span style={{ color: 'black' }}>
              Clients always get{' '}
              <span style={{ color: 'var(--green)' }}>Exceptional Work</span> From
              me..
            </span>
          </center>
          

         
        </div>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {clients.map((clients, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <img src={clients.img} alt="" />
                  <span>{clients.review}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
