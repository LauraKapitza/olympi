import React from 'react'
import BottomNavBar from './BottomNavBar/BottomNavBar'
import PersonalBio from './PersonalBio/PersonalBio'
import ProfileVideos from './ProfileVideos/ProfileVideos'
import PersonalRecord from './PersonalRecord/PersonalRecord'
import "./ProProfile.css"
import SettingsBar from './SettingsBar/SettingsBar'

export default function ProProfile(){
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


