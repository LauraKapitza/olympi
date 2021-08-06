import React from 'react';
import './navbarTop.css';
import Burger from './Burger';


export default function NavbarTop () {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft"> 
      

      <div><img src="/assets/logos/olympifigure.png" alt="" className="logo"/></div> 
      <div> <img src="/assets/logos/olympiword.png" alt="" className="logo olympiword"/> </div>



      </div>




      <div className="navbarCenter"> 
      
      <span></span>
      <Burger/>
      </div>

      <div className="navbarRight">
        
      </div>


    </div>
  )
}

