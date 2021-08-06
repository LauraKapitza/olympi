import React from 'react'
import "./LogoutBar.css"
import DeleteIcon from '@material-ui/icons/Delete';
import ToggleOnRoundedIcon from '@material-ui/icons/ToggleOnRounded';

function LogoutBar() {
  return (
    <div>


<div className="LogoutBarContainer">
      
<div className="DarkModeTitle">
 Dark Mode
<div className="Toggle">

<div className="Setbtn Toggle"><ToggleOnRoundedIcon/></div>



</div>
</div>      
      
      



      <div className="LogoutTitle">
      Logout
      <div className="Setbtn Door"><img src="/assets/icons/logoutbtn.svg" alt=""></img></div>

      </div>

      <div className="DeleteTitle">
      Delete Account
      <div className="Setbtn Delete"><DeleteIcon/></div>

      </div>

      

        

      </div>






      
    </div>
  )
}

export default LogoutBar
