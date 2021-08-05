import React from 'react'
import "./Settings.css"
import PictureTop from './PictureTop/PictureTop';
import SettingsBtns from './SettingsBtns/SettingsBtns';
import LogoutBar from './LogoutBar/LogoutBar';

function Settings() {
  return (
    <div>

     <PictureTop/>
     <SettingsBtns/>
     <LogoutBar/>

      
    </div>
  )
}

export default Settings
