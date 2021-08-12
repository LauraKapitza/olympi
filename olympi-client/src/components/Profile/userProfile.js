import React from 'react'
import BottomNavBar from './BottomNavBar/BottomNavBar'
import PersonalBio from './PersonalBio/PersonalBio'
import PersonalRecord from './PersonalRecord/PersonalRecord'
import ProfileVideos from './ProfileVideos/ProfileVideos'
import SettingsBar from './SettingsBar/SettingsBar'
import "./userProfile.css"

function UserProfile({user}) {
  return (
    <div>
      <PersonalBio user={user}/>
      <PersonalRecord user={user} />
      <ProfileVideos user={user}/>
      <SettingsBar/>
      <BottomNavBar/>
    </div>
  )
}

export default UserProfile
