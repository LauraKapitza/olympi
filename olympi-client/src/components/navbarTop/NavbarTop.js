import React from 'react';
import './navbarTop.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';



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
      <span className="signup button"> Sign Up </span>
      <span className="button"> Log In </span>
      </div>


    </div>
  )
}

