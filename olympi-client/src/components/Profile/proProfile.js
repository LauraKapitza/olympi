import React from 'react'
import BottomNavBar from './BottomNavBar/BottomNavBar'
import ProfessionalBio from './ProfessionalBio/ProfessionalBio'
import ProfileVideos from './ProfileVideos/ProfileVideos'
import PersonalRecord from './PersonalRecord/PersonalRecord'
import "./proProfile.css"
import SettingsBar from './SettingsBar/SettingsBar'

export default function ProProfile( {user}){
  return (
    <div>
    <ProfessionalBio user={user}/>
      <PersonalRecord user={user}/>
      <ProfileVideos user={user}/>
      <SettingsBar/>
      <BottomNavBar/>

    </div>
  )
}


