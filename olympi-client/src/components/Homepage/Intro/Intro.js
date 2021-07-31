import React from 'react'
import "./Intro.css";

import {Link} from 'react-router-dom';


function Intro() {
  return (
    <div className="IntroContainer">

      <div className="description">
        <h3>Level up your exercise routine with your weighlifting community</h3>
        <Link className="signup button" to="/signup">Sign up</Link>
        <Link className="button" to="/login">Log in</Link>
      </div>


      <div className="phoneImg"> 
        <img src="/assets/photos/olympiphone.png" alt="Olympi on a smartphone" />
      </div>

    </div>
  )
}

export default Intro
