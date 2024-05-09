import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="h-menu">
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Startede</a>
          <button class="button" >
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header