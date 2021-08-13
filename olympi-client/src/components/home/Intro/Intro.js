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


      <div className="phoneImg"> <img src="/assets/photos/olympiphone.png" className="phonepic" alt="olympiapp"></img> <h2 className="Tagline"> Improve and help others improve one rep at a time  </h2> </div>



</div>



  )
}

export default Intro
