import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { BiCoffee } from 'react-icons/bi';
import '../navbar/navbar.css';
import logo from '../../assets/logo.svg';


const Menu = () => (
  <>
    <p><a href="#home" >Home</a></p>
    <p><a href="#WLatte" >What is Latte</a></p>
    <p><a href="#Possibility" >Encryption</a></p>
    <p><a href="#Features" >Features</a></p>
    <p><a href="#Blog" >Library</a></p>
  </>
)

//BEM -> Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="latte__navbar">
      <div className='latte__navbar-links'>
        <div className='latte__navbar-links_logo'>
          {/* <img src={logo} alt="logo" /> */}
          <p><a href="#home" >Latte</a></p><BiCoffee />
        </div>
        <div className="latte__navbar-links_container">
          <Menu />

        </div>
      </div>
      <div className='latte__navbar-sign'>
        <p><a href="#sign" >Login</a></p>
        <button type='button' onClick={() => console.log('Sign up button working')} >Sign up</button>
      </div>
      <div className='latte__navbar-menu'>
        {toggleMenu ?
          <HiX color="#fff" size={27} onClick={() => setToggleMenu(false)} /> :
          <HiMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='latte__navbar-menu_container scale-up-center'>
            <div className='latte__navbar-menu_container-links'>
              <Menu />
              <div className='latte__navbar-menu_container-links-sign'>
                <p><a href="#sign" >Sign in</a></p>
                <button type='button' onClick={() => console.log('Sign up button working')} >Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default Navbar;
