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
          <img src={logo} alt="logo" />
          <a className="brand" href="/" >Latte</a>
        </div>
        <header className="navbar">
          <a className="navitem" href="/" >🍫 Chocolate</a>
          <a className="navitem" href="/" >🍵 Green Tea</a>
          <a className="navitem" href="/" >🍺 Beer</a>
          <a className="navitem" href="/" >👨‍🎓 Login</a>
        </header>
      </div>
    </div>
  )
};

export default Navbar;
