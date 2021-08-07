import React from 'react'
import BottomNavBar from './BottomNavBar/BottomNavBar'
import PersonalBio from './PersonalBio/PersonalBio'
import PersonalRecord from './PersonalRecord/PersonalRecord'
import ProfileVideos from './ProfileVideos/ProfileVideos'
import SettingsBar from './SettingsBar/SettingsBar'
import "./userProfile.css"

export default class UserProfile extends React.Component {

  render () {
  return (
    <div>
      <PersonalBio user={this.props.user} updateUser={this.props.updateUser}/>
      <PersonalRecord user={this.props.user} updateUser={this.props.updateUser}/>
      <ProfileVideos user={this.props.user} updateUser={this.props.updateUser}/>
      <SettingsBar />
      <BottomNavBar/>


    </div>
  )
  }
}

