import React from 'react'
import "./SettingsBar.css"
import { Link } from 'react-router-dom'

function SettingsBar() {
  return (
    <div className="SettingsBarContainer">
      
      <div className="Settingstitle"><Link to="/settings"><div className="Wheel"><img src="/assets/icons/settings(4).svg" alt=""></img></div>Settings
      </Link>

      </div>

      

        

      </div>


    
  )
}

export default SettingsBar
