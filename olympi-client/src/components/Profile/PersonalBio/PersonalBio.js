import React, { Component } from 'react'
import "./PersonalBio.css"

export default class PersonalBio extends Component {

  constructor(props) {
    super(props);
  }





render () {
  
  return ( 

    <div className="PersonalBioContainer">

<div className="BioTitle"> <span>Profile</span> </div>

<div className="editImage"><img src="/assets/icons/editbutton.svg" alt=""></img>Edit </div>



<img src="/assets/icons/noprofilephoto.svg" alt=""></img>
<div className="UsersName">username</div>
<div className="UsersCity">city</div>
<div className="ShortBio">I am a positive person and I love to exercise.</div>


    </div>
  )
}
}
  
  

