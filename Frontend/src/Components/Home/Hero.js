import React from 'react'
import hero from '../../Images/hero-img.jpg'
import '../../styles/hero.css'
import CountUp from "react-countup"
import 'swiper/css'


const Hero = () => {
  return (
    <section className='hero'>
        <div className=' paddings flexCenter hero-container'>

            <div className='flexColStart hero-left'>
                <div className='hero-title' >
                    <h1>Discover<br/>Most Suitable<br/>Property</h1>
                </div>

                <div className='flexColStart secondaryText hero-des'>
                
                    <span>Forget all difficulties in finding a Design for you</span>
                </div>

               <div className='search-bar'>
                    <input type='text'></input>
                    <button className='button'>Search</button>
                </div>
                
                <div className='flexCenter statics'>
                    <div className='flexColStart'>
                        <span>
                            {/* <LocationOnIcon></LocationOnIcon> */}
                            <CountUp start={8000} end={9000} duration={2}></CountUp>
                            <span id='plus'>+</span>
                        </span>
                        <span className='secondaryText'>Premium Interior design's
                        </span>
                    </div>

                    <div className='flexColStart'>
                        <span>
                            <CountUp start={100} end={2000} duration={4}></CountUp>
                            <span id='plus'>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customer</span>
                    </div>

                </div>
            </div>

            <div className='flexCenter hero-right'>
                <div className='img-container'>
                    <img src={hero} alt='img'></img>
                </div>

            </div>

        </div>

    </section>

  )
}

export default Hero