import React from 'react'
import BottomNavBar from './BottomNavBar/BottomNavBar'
import PersonalBio from './PersonalBio/PersonalBio'
import PersonalRecord from './PersonalRecord/PersonalRecord'
import ProfileVideos from './ProfileVideos/ProfileVideos'
import "./UserProfile.css"

function UserProfile() {
  return (
    <div>
      <PersonalBio/>
      <PersonalRecord/>
      <ProfileVideos/>
      <BottomNavBar/>


    </div>
  )
}

export default UserProfile
