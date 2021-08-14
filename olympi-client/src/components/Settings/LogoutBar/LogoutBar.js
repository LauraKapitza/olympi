import React from 'react'
import "./LogoutBar.css"
import DeleteIcon from '@material-ui/icons/Delete';
import ToggleOnRoundedIcon from '@material-ui/icons/ToggleOnRounded';
import authService from '../../auth/auth-service';
import { Redirect } from 'react-router';



class LogoutBar extends React.Component {


logout = (event) => {
  authService.logout()
    .then(response => {
      this.props.updateUser(null);
    })
  ;
}

 
  render() {
    if (this.props.user === false) return <Redirect to="/"/>
    
    return(
      <>


<div className="LogoutBarContainer">
      
<div className="DarkModeTitle">
 Dark Mode
<div className="Toggle">

<div className="Setbtn Toggle"><ToggleOnRoundedIcon/></div>



</div>
</div>      
      
      



      <div className="LogoutTitle">
      Logout
      <div className="Setbtn Door" onClick={this.logout}><img src="/assets/icons/logoutbtn.svg" alt=""></img></div>


      </div>

      <div className="DeleteTitle">
      Delete Account
      <div className="Setbtn Delete"><DeleteIcon/></div>

      </div>

      

        

      </div>






      
      </>
    )
  }
};

export default LogoutBar;







