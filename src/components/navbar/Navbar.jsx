import React from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import '../navbar/navbar.css';
import logo from '../../assets/logo.svg';

//BEM -> Block Element Modifier
const Navbar = () => {
  return (
    <div className="latte__navbar">
      <div className='latte__navbar-links'>
        <div className='latte__navbar-links_logo'>
          {/* <img src={logo} alt="logo" /> */}
          <p><a href="#home" >☕ Latte</a></p>
        </div>
        <div className="latte__navbar-links_container">
          <p><a href="#home" >🍫 Home</a></p>
          <p><a href="#WLatte" >🍷 What is Latte</a></p>
          <p><a href="#Possibility" >🍺 Encryption</a></p>
          <p><a href="#Features" >🍵 Features</a></p>
          <p><a href="#Blog" >📚 Library</a></p>
        </div>
      </div>
      <div className='latte__navbar-sign'>
        <p><a href="#Blog" >🥙 Sign in</a></p>
        <button type='button'>Sign up</button>
      </div>
    </div>
  )
};

export default Navbar;
