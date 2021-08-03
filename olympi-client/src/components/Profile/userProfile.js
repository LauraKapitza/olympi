import React from 'react'
import BottomNavBar from './BottomNavBar/BottomNavBar'
import PersonalBio from './PersonalBio/PersonalBio'
import PersonalRecord from './PersonalRecord/PersonalRecord'
import ProfileVideos from './ProfileVideos/ProfileVideos'
import SettingsBar from './SettingsBar/SettingsBar'
import "./UserProfile.css"

function UserProfile() {
  return (
    <div>
      <PersonalBio/>
      <PersonalRecord/>
      <ProfileVideos/>
      <SettingsBar/>
      <BottomNavBar/>


    </div>
  )
}

export default UserProfile
