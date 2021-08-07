import React from 'react'
import BottomNavBar from './BottomNavBar/BottomNavBar'
import ProfessionalBio from './ProfessionalBio/ProfessionalBio'
import ProfileVideos from './ProfileVideos/ProfileVideos'
import PersonalRecord from './PersonalRecord/PersonalRecord'
import "./proProfile.css"
import SettingsBar from './SettingsBar/SettingsBar'

export default function ProProfile(){
  return (
    <div>
    <ProfessionalBio user={this.state.user} updateUser={this.updateUser}/>
      <PersonalRecord user={this.state.user} updateUser={this.updateUser}/>
      <ProfileVideos user={this.state.user} updateUser={this.updateUser}/>
      <SettingsBar/>
      <BottomNavBar/>


    </div>
  )
}


