import React from 'react'
import "./ProfessionalBio.css"
import SportsIcon from '@material-ui/icons/Sports';

function ProfessionalBio() {
  return (
    <div className="ProBioContainer">

<div className="ProBioTitle"> <span>Professional Profile</span> </div>

<div className="ProeditImage"><img src="/assets/icons/editbutton.svg" alt=""></img>Edit </div>



<img src="/assets/icons/noprofilephoto.svg" alt=""></img>
<div className="ProUsersName">Professional Trainer <i><SportsIcon/></i></div>
<div className="ProUsersCity">Paris, France 🇫🇷</div>
<div className="ProShortBio">I am a professional trainer! Ask me a question and I can help</div>
<button className="askFeedback">Ask for Feedback</button>


    </div>
  )
}

export default ProfessionalBio
