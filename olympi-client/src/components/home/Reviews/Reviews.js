import React from 'react'
import "./Reviews.css";


function Reviews() {
  return (
    <div id= "Reviews">

<div class="custom-shape-divider-top-1627932661">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

<div className="titleReviews"> <h3>What does our community have to say?</h3></div>


<div class="slider">
  <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav"/>
  <input type="radio" name="slider" title="slide2" class="slider__nav"/>
  <input type="radio" name="slider" title="slide3" class="slider__nav"/>
  <input type="radio" name="slider" title="slide4" class="slider__nav"/>
  <div class="slider__inner">
    <div class="slider__contents">
      <h2 class="slider__caption">Professional Trainer</h2> <img src="https://via.placeholder.com/200"></img>
      <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
    </div>
    <div class="slider__contents">
      <h2 class="slider__caption">Professional Athlete</h2> <img src="https://via.placeholder.com/200"></img>
      <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
    </div>
    <div class="slider__contents">
      <h2 class="slider__caption">Beginner Weightlifter</h2> <img src="https://via.placeholder.com/200"></img>
      <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
    </div>
    <div class="slider__contents">
      <h2 class="slider__caption">Weightlifting Enthusiast</h2> <img src="https://via.placeholder.com/200"></img>
      <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
    </div>
  </div>
</div>




    </div>
  )
}

export default Reviews
