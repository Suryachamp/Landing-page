import React from 'react';
import './Header.css'; 
import logo from '../assets/images/icons.png'; 

function Header() {
  return (
    <header>
      <nav>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li><a href="#play-n-learn">Play n Learn</a></li>
          <li><a href="#lets-learn">Let's Learn</a></li>
          <li><a href="#news">News n Updates</a></li>
          <li><a href="#forum">Discussion Forum</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
