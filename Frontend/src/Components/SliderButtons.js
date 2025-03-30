import React from 'react'
import { useSwiper } from 'swiper/react'
import 'swiper/css'
import '../styles/sliderButtons.css'


const SliderButtons = ()=> {
    const swiper = useSwiper();
    return(
      <div className='r-button'>
        <button onClick={()=> swiper.slidePrev()}>&lt;</button>
        <button onClick={()=> swiper.slideNext()}>&gt;</button>
      </div>
    )
  }

export default SliderButtons