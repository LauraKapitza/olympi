import React from 'react'
import "./PersonalBio.css"

function PersonalBio() {
  return (
    <div className="PersonalBioContainer">

<div className="BioTitle"> <span>Profile</span> </div>

<div className="editImage"><img src="/assets/icons/editbutton.svg"></img>Edit </div>



<img src="/assets/icons/noprofilephoto.svg"></img>
<div className="UsersName">Karina Gonzalez</div>
<div className="UsersCity">Paris, France 🇫🇷</div>
<div className="ShortBio">I am a positive person and I love to exercise.</div>


    </div>
  )
}

export default PersonalBio
