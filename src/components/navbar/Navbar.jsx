import React from 'react';
import '../navbar/navbar.css';

const Navbar = () => {
  return(
    <div className="App">
      <header className="navbar">
        <a className="brand" href="/" >☕ Latte</a>
        <a className="navitem" href="/" >🍫 Chocolate</a>
        <a className="navitem" href="/" >🍵 Green Tea</a>
        <a className="navitem" href="/" >🍺 Beer</a>
        <a className="navitem" href="/" >👨‍🎓 Login</a>
      </header>
      <div className="dlbanner">
        <p>Now available in <br /> <strong> Web and Mobile Platforms.</strong></p>
        <button className="btnDl" >Download now</button>
      </div>
    </div>
  )
};

export default Navbar;
