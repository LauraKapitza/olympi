import React from 'react'
import { Redirect } from 'react-router-dom';
import "./LogoutBar.css"
import authService from '../../auth/auth-service';
import DeleteIcon from '@material-ui/icons/Delete';
import ToggleOnRoundedIcon from '@material-ui/icons/ToggleOnRounded';

export default class LogoutBar extends React.Component {

logout = (event) => {
  authService.logout()
    .then(response => {
      console.log('props', this.props)
      this.props.updateUser(false);
    })
  ;
}



render () {
  if (this.props.user === false) return <Redirect to="/" />


  return (
    <div className="LogoutBar">


<div className="LogoutBarContainer">
<div className="DarkModeTitle">
Dark Mode<div className="Toggle">
<div className="Setbtn Toggle"><ToggleOnRoundedIcon/></div>

</div>
</div>      
      
      <div className="LogoutTitle">
      Logout
      <button className=" Door" onClick={this.logout}><img src="/assets/icons/logoutbtn.svg" alt="Logout button icon"></img></button>
      </div>

      <div className="DeleteTitle">
      Delete Account
      <div className="Setbtn Delete"><DeleteIcon/></div>

      </div>

      

        

      </div>






      
    </div>
  )
}
}
