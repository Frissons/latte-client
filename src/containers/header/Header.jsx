import React from 'react';
import './header.css';
import {FcPrivacy} from 'react-icons/fc'

const Header = () => {
  return (
    <div className='latte__header section__padding' id='home'>
      <div className='latte__header-content'>
      <h1 className='latte__header-text'>Let's Build connections with Latte </h1>
      <p>Gibberish dataasdasdasdasd</p>
      <div className='latte__header-content__input'>
        <input type="email" placeholder='Your Email Address'/>
        <button type='button'>Get Started</button> 
      </div>
      <div className='latte__header-content__people'>
        {/* <img src={people} alt="people" /> */}
        <p>1600 people requested access</p>
      </div>
      <div className='latte__header-image'>
        {/* <img src={ai} alt="ai" /> */}
        <FcPrivacy />

      </div>
      </div>
    </div>
  )
}

export default Header