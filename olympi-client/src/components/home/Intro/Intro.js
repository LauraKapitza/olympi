import React from 'react';
import {Link} from 'react-router-dom';
import "./Intro.css"

function Intro() {
  return (
    <div className="IntroContainer">
    <div className="description">
      <h1>Level up your exercise routine with your weighlifting community</h1>
      <div className="buttonsHomepage">
      <Link className="signup-btn button" to="/signup">Sign up</Link>
        <Link className="button" to="/login">Log in</Link>
      </div>
</div>


      <div className="phoneImg"> <img src="/assets/photos/olympiphone.png" alt="olympiapp"></img></div>



</div>



  )
}

export default Intro
