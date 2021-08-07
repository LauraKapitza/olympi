import React from 'react'
import "./Notifications.css"
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import ToggleOnRoundedIcon from '@material-ui/icons/ToggleOnRounded';



function Notifications() {
  return (
    <div className="NotificationsPageContainer">
    
    <div className="PictureTopContainer">
    <div className="arrow"><ArrowBackRoundedIcon/></div><div className="PictureTopTitle">  Settings</div>
    <img src="/assets/icons/noprofilephoto.svg" alt="no profile"></img>
    <div className="UsersName">Karina Gonzalez</div>
    <div className="UsersCity">Paris, France 🇫🇷</div>
      
    </div>





    <div className="LogoutBarContainer">
      
      <div className="DarkModeTitle">
       Dark Mode
      <div className="Toggle">
      
      <div className="Setbtn Toggle"><ToggleOnRoundedIcon/></div>
      
      
      
      </div>
      </div>      
            
            
      
      
      
            <div className="LogoutTitle">
            Logout
            <div className="Setbtn Door"><img src="/assets/icons/logoutbtn.svg" alt="logout"></img></div>
      
            </div>
      
            <div className="DeleteTitle">
            Delete Account
            <div className="Setbtn Delete"><DeleteIcon/></div>
      
            </div>
      
            
      
              
      
            </div>
      
      
      
      







    </div>
  )
}

export default Notifications
