import React from 'react'
import "./Reviews.css";


class Reviews extends React.Component {
  state = {
    slider: "slide1",
    listSlide: ["slide1", "slide2", "slide3", "slide4"],
    index: 0,
    interval: null
  }


  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({[name]: value});
  } 

  componentDidMount() {
    let interval = setInterval(() => {
      let nextIndex = this.state.index + 1;
      if(nextIndex > this.state.listSlide.length - 1){
        nextIndex = 0;
      }
      this.setState({index: nextIndex, slider: this.state.listSlide[nextIndex]});
    }, 5000);

    this.setState({interval: interval});
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render (){

    return (
      <div id= "Reviews">

  <div className="custom-shape-divider-top-1627932661">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
  </div>

  <div className="titleReviews"> <h3>What does our community have to say?</h3></div>


  <div className="slider">
    <input type="radio" name="slider" title="slide1" value="slide1" onChange={this.handleChange} checked={this.state.slider === "slide1"} className="slider__nav"/>
    <input type="radio" name="slider" title="slide2" value="slide2" onChange={this.handleChange} checked={this.state.slider === "slide2"} className="slider__nav"/>
    <input type="radio" name="slider" title="slide3" value="slide3" onChange={this.handleChange} checked={this.state.slider === "slide3"} className="slider__nav"/>
    <input type="radio" name="slider" title="slide4" value="slide4" onChange={this.handleChange} checked={this.state.slider === "slide4"} className="slider__nav"/>
    <div className="slider__inner">
      <div className="slider__contents">
        <h2 className="slider__caption">Professional Trainer</h2> <img src="/assets/photos/personaltrainer.jpeg" alt=""></img>
        <p className="slider__txt">"Olympi has allowed me to help more people and improve my brand in the fitness world. I receive many requests per day all around the world. Eventhough we work out separately I am still able to provide feedback and they keep all the records in one place. It's very convenient!"</p>
      </div>
      <div className="slider__contents">
        <h2 className="slider__caption">Professional Athlete</h2> <img src="/assets/photos/athlete.png" alt=""></img>
        <p className="slider__txt">"I love the platform to connect with fans and powerlifting enthusiasts. I have always had tips and "secrets" to share but I had never found the appropriate platform to share them. Olympi is very visual and pragmatic, which I think is what makes it ideal. It's a way to  unite people for fitness." </p>
      </div>
      <div className="slider__contents">
        <h2 className="slider__caption">Beginner Weightlifter</h2> <img src="/assets/photos/beginner.jpeg" alt=""></img>
        <p className="slider__txt">"I've learned a lot from using Olympi. I like that I can get an overview of my performance and that I can update my progress. I also constantly check out the Explore Page to learn new workouts from weightlifters that are trusted by the community. There's no judgment here, it's all for the better." </p>
      </div>
      <div className="slider__contents">
        <h2 className="slider__caption">Weightlifting Enthusiast</h2> <img src="/assets/photos/gymbro.png" alt=""></img>
        <p className="slider__txt">"I've been lifting for a bit over 8 years and where Reddit falls short, Olympi picks it up. I like how I can get feedback from other people who are dedicated to weightlifting and even professionals I admire. I hope in the next version they'll let me create a group and invite all my gym bros." 

</p>
      </div>
    </div>
  </div>




      </div>
   )
  }
}

  

export default Reviews
