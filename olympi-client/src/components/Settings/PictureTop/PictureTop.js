import React from 'react'
import "./PictureTop.css"
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';


function PictureTop() {
  return (
    <div className="PictureTopContainer">
    <div className="arrow"><ArrowBackRoundedIcon/></div><div className="PictureTopTitle">  Settings</div>
    <img src="/assets/icons/noprofilephoto.svg"></img>
    <div className="UsersName">Karina Gonzalez</div>
    <div className="UsersCity">Paris, France 🇫🇷</div>
      
    </div>
  )
}

export default PictureTop
