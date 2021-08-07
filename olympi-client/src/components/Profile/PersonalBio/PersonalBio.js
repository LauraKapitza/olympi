import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import "./PersonalBio.css"

export default class PersonalBio extends Component {





render () {

  if (this.props.user === false) return <Redirect to="/" />
  
  return ( 

<div className="PersonalBioContainer">
<div className="BioTitle"> <span>Profile</span> </div>
<div className="editImage"><img src="/assets/icons/editbutton.svg" alt=""></img>Edit </div>
<img src="/assets/icons/noprofilephoto.svg" alt=""></img>
<div className="UsersName">{this.props.user.username}</div>
<div className="UsersCity">{this.props.user.city}</div>
<div className="ShortBio">I am a positive person and I love to exercise.</div>


    </div>
  )
}
}
  
  

