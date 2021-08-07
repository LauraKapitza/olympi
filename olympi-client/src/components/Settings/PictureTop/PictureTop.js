import React from 'react'
import "./PictureTop.css"
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';


export default class PictureTop extends React.Component {


render () {

  if (this.props.user === false) return <Redirect to="/" />

  return (
    <div className="PictureTopContainer">
    <div className="arrow"><Link to="/userprofile"><ArrowBackRoundedIcon/></Link></div><div className="PictureTopTitle">  Settings</div>
    <img src="/assets/icons/noprofilephoto.svg" alt=""></img>
    <div className="UsersName">{this.props.user.username}</div>
    <div className="UsersCity">{this.props.user.city}</div>
      
    </div>
  )
}
}

