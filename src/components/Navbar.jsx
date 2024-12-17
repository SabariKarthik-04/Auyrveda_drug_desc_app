import React, { useState } from 'react';
import './Navbar.css';
import Logo from './images/logo.jpg';
import Profile from './images/profile.jpg';



const Navbar = () => {
  const [open, setOpen] = useState(false); 
  const Dropdown = () => {
    if (open) { 
        return (
        <div className='drop-menu'>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <section>
    <div className="navbar">
      <div className="navbar-items">
        <img src={Logo} alt="logo" className="logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <img
          src={Profile}
          alt="profile"
          className="profile"
          onClick={() => setOpen(!open)}
        />
        
      </div>
    </div>
    <Dropdown/>

    </section>
  );
};

export default Navbar;
