import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import '../../styles/residences.css'
import { sliderSettings } from '../../utils/common'
import SliderButtons from '../SliderButtons'



const Residence = () => {
  return (
    <section className='residences'>
      <div className='paddings inner-width res-container '>
        <div className='flexColStart res-head '>
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Properties</span>
        </div>

        <Swiper {...sliderSettings} className='flexColStart'>
          <SliderButtons></SliderButtons>
          {
            data.map((card, i)=> (
              <SwiperSlide key={i}>
                <div className=' flexColStart res-card'>
                  <img src={card.image} alt='home'></img>

                  <div className='secondaryText res-price'>
                    <span style={{color:"orange"}}>$</span>
                    <span>{card.price}</span>
                  </div>  

                  <span className='primaryText res-name'>{card.name}</span>
                  <span className='secondaryText res-details'>{card.detail}</span>
                </div>

                
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

      <div className='testimonials-container'>
          <div className='client-text'>
              <p>
              "Exceptional service and attention to detail! The Ghar dekho Properties went above and beyond
               to find us our dream home. Great expertise and professionalism." Their transparency and
                professionalism gave us peace of mind during the entire transaction. Highly recommended!"
              </p>
              <h5>Mr. Richard</h5>
          </div>
          
          <div className='client-text'>
              <p>
              "Smooth and hassle-free experience from start to finish. The real estate company's knowledgeable team guided us through the entire process, ensuring we made informed decisions. Happy with your service and guiding us to get the best property in India.
              </p>
              <h5>Ms. Leena</h5>
          </div>
          
          <div className='client-text'>
              <p>
              "Highly impressed with the expertise and professionalism of this real estate 
              company in India. They were proactive in understanding our investment goals and presented
               us with lucrative opportunities. An excellent partner for real estate investments!"
              </p>
              <h5>Mr. Sahi</h5>
          </div>
          
      </div>
    </section>
    
  )
}

export default Residence;


