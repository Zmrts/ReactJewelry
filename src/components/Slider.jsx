import React from "react";
import { Link } from "react-router-dom";


import {Swiper, SwiperSlide} from 'swiper/react';
import { SliderButtons } from "./SliderButtons";
import {Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/effect-fade';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const slideStyles = {
  1:{
    backgroundSize:'100%',
    backgroundPositionX:'50%',
    backgroundPositionY:'23%',
  },
  textPosition_1:{
    left:'3%',
    bottom:'5%'
  },
  2:{
    backgroundSize:'cover',
    backgroundPositionX:'50%',
    backgroundPositionY:'23%',
  },
  textPosition_2:{
    top:'3%',
    right:'2%'
  },
  3:{
    backgroundSize:'cover',
    backgroundPositionX:'50%',
    backgroundPositionY:'50%',
  },
  textPosition_3:{
    left:'1%',
    bottom:'3%'
  },
}

function Slider() {
    return (
      <div className="slider">

      
        <Swiper className="test_class"
        speed={1777}
        modules={[Pagination, A11y, Autoplay, EffectFade]}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable:true, dynamicBullets: true,}}
        effect="fade"
      >
        <SwiperSlide>
           <Link style={slideStyles[1]} className="slider_wrapper slide_1" to='/favorites'>
            <div style={slideStyles.textPosition_1} className="slider_text">
              <p>Скидка <br /> на серьги </p>
              <p>50%</p>
            </div>
           
           </Link>
            
        </SwiperSlide>
        <SwiperSlide>
           <Link style={slideStyles[2]} className="slider_wrapper slide_2" to='/favorites'>
            <div style={slideStyles.textPosition_2} className="slider_text">
              <p>Распордажа <br /> бриллиантовых  <br />изделий </p>
              
            </div>
           
           </Link>
           
            
        </SwiperSlide>
        <SwiperSlide>
        <Link style={slideStyles[3]} className="slider_wrapper slide_3" to='/favorites'>
            <div style={slideStyles.textPosition_3} className="slider_text">
              <p>Lorem ipsum dolor <br /> sit amet <br /> consectetur.</p>
              
            </div>
           
           </Link>

        </SwiperSlide>
       
   
        <SliderButtons />
      </Swiper>
      
      </div>
    )
}

export {Slider}