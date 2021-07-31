import React from 'react';
import './navbarTop.css';

import {Link} from 'react-router-dom';

export default function NavbarTop () {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft"> 
      <img src="/assets/logos/logo_transparent_background.png" alt="" className="logo"/> 
      </div>


      <div className="navbarCenter"> 
      <span>How it works</span>
      <span>Features</span>
      <span></span>
      <span></span>
      <span></span>
      </div>

      <div className="navbarRight">
        <Link className="signup-btn button" to="/signup">Sign up</Link>
        <Link className="button" to="/login">Log in</Link>
      </div>


    </div>
  )
}

