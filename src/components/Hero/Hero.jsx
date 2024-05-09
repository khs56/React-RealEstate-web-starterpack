import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <didv className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">
          Left Section
        </div>
        <div className="hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </didv>
    </section>
  )
}

export default Hero