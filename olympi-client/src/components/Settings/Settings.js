import React from 'react'
import "./Settings.css"
import PictureTop from './PictureTop/PictureTop';
import SettingsBtns from './SettingsBtns/SettingsBtns';
import LogoutBar from './LogoutBar/LogoutBar';

export default class Settings extends React.Component {


  render () {

  return (
    <div>

     <PictureTop user={this.props.user} updateUser={this.props.updateUser}/>
     <SettingsBtns user={this.props.user}/>
     <LogoutBar user={this.props.user} updateUser={this.props.updateUser}/>

      
    </div>
  )
}
}