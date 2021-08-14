import React, {Redirect} from 'react'
import "./Settings.css"
import PictureTop from './PictureTop/PictureTop';
import SettingsBtns from './SettingsBtns/SettingsBtns';
import LogoutBar from './LogoutBar/LogoutBar';
import authService from '../auth/auth-service';




class Settings extends React.Component {

  logout = (event) => {
    authService.logout()
      .then(response => {
        this.props.updateUser(null);
      })
    ;
  }
  
 
  render() {
    if (this.props.user === false) return <Redirect to="/" />

    return(
      <>

<div className="SettingsBigContainer">

    <PictureTop user={this.props.user}/>
     <SettingsBtns user={this.props.user} />
     <LogoutBar user={this.props.user} updateUser={this.props.updateUser}/>
    </div>
      
      </>
    )
  }
};

export default Settings;
