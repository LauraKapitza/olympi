import React, {Redirect} from 'react'
import "./PictureTop.css"
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { Link } from 'react-router-dom';



class PictureTop extends React.Component {


  render() {

    if (this.props.user === false) return <Redirect to="/"/>

    return(
   

    <div className="PictureTopContainer">
     <div className="arrow"><Link to="/profile"><ArrowBackRoundedIcon/></Link></div><div className="PictureTopTitle">  Settings</div>
     <img className="avatar" src={this.props.user.image || "/assets/photos/lyaphoto.jpeg"} />
    <div className="UsersName">{this.props.user.username}</div>
    <div className="UsersCity">{this.props.user.city}</div>
      
    </div>
      
     
    )
  }
};

export default PictureTop;
