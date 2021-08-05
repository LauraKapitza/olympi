import React from 'react';
import {Link} from 'react-router-dom';
import './navbarTop.css';
import Burger from './Burger';


export default function NavbarTop () {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft"> 
      

      <div><Link to="/"><img src="/assets/logos/olympifigure.png" alt="" className="logo"/></Link></div> 
      <div><Link to="/"> <img src="/assets/logos/olympiword.png" alt="" className="logo olympiword"/></Link></div>



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

