import React from "react";
import "./Features.css";



export default function Features() {
  return (
    <div id= "Features">
    
    <div className="custom-shape-divider-top-1627737931">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
    </div>

    <div className="title home-fixed-size">
    <h3>Features</h3></div>

    <div className="FeaturesList home-fixed-size">
      <div className="feature">
        <img src="/assets/photos/Tagsphoto.png" alt=""></img>
        <div>
          <h3 className="featureTitle">Get Feedback</h3> 
          <span className="featureDesc">Crowdsource feedback from thousands of ofther weightlifters by uploading your workouts</span>
        </div>
      </div>


      <div className="feature revert">
        <img src="/assets/photos/commentsscreenshot.png" alt=""></img>
        <div>
          <h3 className="featureTitle">Improve your form</h3> 
          <span className="featureDesc">Ask the professional community for advice and document your progression</span>
        </div> 
      </div>

      <div className="feature">
        <img src="/assets/photos/userprofilescreenshot.png" alt=""></img>
        <div>
          <h3 className="featureTitle">Stay Motivated</h3> 
          <span className="featureDesc">Find an inclusive, motivated, and helpful community to reach your goals and learn from setbacks</span>
        </div>
      </div>
    
    </div>

     

    </div>
  )
}



 
