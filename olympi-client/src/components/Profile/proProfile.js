import React from 'react'
import BottomNavBar from './BottomNavBar/BottomNavBar'
import ProfessionalBio from './ProfessionalBio/ProfessionalBio'
import ProfileVideos from './ProfileVideos/ProfileVideos'
import PersonalRecord from './PersonalRecord/PersonalRecord'
import "./ProProfile.css"
import SettingsBar from './SettingsBar/SettingsBar'

export default function ProProfile(){
  return (
    <div>
    <ProfessionalBio/>
      <PersonalRecord/>
      <ProfileVideos/>
      <SettingsBar/>
      <BottomNavBar/>


    </div>
  )
}


